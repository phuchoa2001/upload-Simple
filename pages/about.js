import Footer from "components/layout/Footer";
import Style from "styles/about.module.scss";
import Head from "next/head";

export default function About() {
  return (
    <>
    <Head>
      <title>Page About</title>
      <meta name="description" content="Page About" />
    </Head>
      <h2 className={Style.ligtlightscss}>Page About</h2>;
    </>
  );
}
About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
