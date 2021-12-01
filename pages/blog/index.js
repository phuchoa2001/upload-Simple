import Head from "next/head";

export default function Blog() {
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);
  return (
    <>
      <h1>Page Blog</h1>
      <p>User: {process.env.NEXT_PUBLIC_DB_USER} : Password : {process.env.DB_PASSWORD}</p>
    </>
  );
}
