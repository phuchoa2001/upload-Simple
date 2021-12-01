import "styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "next-auth/client";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "styles/layout.css";
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Provider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
export default MyApp;
