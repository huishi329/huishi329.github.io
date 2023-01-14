import Head from "next/head";
import Script from "next/script";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Huishi - Portfolio</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="bslthemes" />
      </Head>
      <Script src="https://kit.fontawesome.com/043e06a04a.js" crossorigin="anonymous" />
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
