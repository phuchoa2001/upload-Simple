import Head from "next/head";
import Link from "next/link";
import clsx from "clsx";
import List from "../components/layout/list";
export default function Home({ list }) {
  return (
    <>
      <Head>
        <title>Page Home</title>
      </Head>
      <div className="grid">
        <List
          list={list[0].text}
          nameRoom={"Phòng lưu trữ văn bản"}
          noteRoom={"vào phòng để lưu trữ văn bản"}
          href="text"
        />
        <List
          list={list[0].image}
          nameRoom={"Phòng lưu trữ hình ảnh"}
          noteRoom={"vào phòng để lưu trữ hình ảnh"}
          href="image"
        />
        <List
          list={list[0].textAuth}
          nameRoom={"Phòng lưu trữ văn bản riêng tư"}
          noteRoom={"vào phòng bạn phải khóa mất khẩu lại để riêng tư"}
          href="textAuth"
        />
        <List
          list={list[0].imageAuth}
          nameRoom={"Phòng lưu trữ hình ảnh riêng tư"}
          noteRoom={"vào phòng bạn phải khóa mất khẩu lại để riêng tư"}
          href="imageAuth"
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  console.log(process.env.APi_URL);
  const res = await fetch(`${process.env.APi_URL}/api/info`);
  const data = await res.json();
  return {
    props: {
      list: data,
    },
  };
}
