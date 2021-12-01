import Link from "next/link";
import Style from "styles/navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/client";
function Navbar() {
  const [session, loading] = useSession();
  function handleSignIn(e) {
    e.preventDefault();
    signIn("github");
  }
  function handleSignout(e) {
    e.preventDefault();
    signOut();
  }
  return (
    <div className={Style.navbar}>
      <div className={Style.logo}>
        <h3 className={Style.heading}>Blue Team</h3>
      </div>
      <div className={Style.menu}>
        <ul className={Style.listitem}>
          <li className={Style.item}>
            <Link href="/">
              <a className={Style.href}>Home</a>
            </Link>
          </li>
          <li className={Style.item}>
            <Link href="/dashbroad2">
              <a className={Style.href}>Dashboard</a>
            </Link>
          </li>
          <li className={Style.item}>
            <Link href="/blog2">
              <a className={Style.href}>Blog</a>
            </Link>
          </li>
          {!session && (
            <li className={Style.item}>
              <Link href="/api/auth/signin">
                <a className={Style.href} onClick={handleSignIn}>
                  Sign in
                </a>
              </Link>
            </li>
          )}
          {session && (
            <>
              <li className={Style.item}>
                <Link href="/api/auth/username">
                  <a className={Style.href} onClick={handleSignIn}>
                    {session && session.user.name}
                  </a>
                </Link>
              </li>
              <li className={Style.item}>
                <Link href="/api/auth/signout">
                  <a className={Style.href} onClick={handleSignout}>
                    sign out
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
