import Link from "next/link";
import { useState } from "react";
import Styles from "styles/navbar.module.scss";
function Navbar() {
  const [menumobile, setMobile] = useState(false);
  function handleToggleMenu() {
    setMobile((prev) => !prev);
  }
  return (
    <div className={Styles.navbar}>
      <div className={Styles.logo}>
        <Link href="/">
          <a className={Styles.redirect}>
            <h3 className={Styles.heading}>Upload SIMPLE</h3>
          </a>
        </Link>
      </div>
      <div className={Styles.menumobile} onClick={handleToggleMenu}>
        <div className={Styles.icon}>
          <i
            className={`fa ${menumobile ? "fa-times" : "fa-bars"} fa-2x`}
            aria-hidden="true"
          ></i>
        </div>
      </div>
      {menumobile && (
        <ul className={Styles.listitemmobile}>
          <li className={Styles.itemmobile}>
            <Link href="https://www.facebook.com/profile.php?id=100075642372471">
              <a className={Styles.hrefmobile}>Liên hệ</a>
            </Link>
          </li>
        </ul>
      )}
      <div className={Styles.menu}>
        <ul className={Styles.listitem}>
          <li className={Styles.item}>
            <Link href="https://www.facebook.com/profile.php?id=100075642372471">
              <a className={Styles.href}>Liên hệ</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
