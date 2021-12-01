import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log(router);
    router.push("/doc/hello");
  }
  return (
    <>
      <h1>Page Home</h1>
      <Link href="/product">
        <a>Go to Page Product</a>
      </Link>
      <button onClick={handleClick}>Go to Page Doc</button>
    </>
  );
}
