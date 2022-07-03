import { StateProvider } from "../stateProvider";
import reducer, { initialState } from "./../reducer";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Dev-jay</title>
        <meta
          name="description"
          content="Jeje Yanfunmi - Dev-jay is an experienced full-stack developer that eats and breaths React js."
        />
        <meta property="og:url" content="https://jayfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dev-jay" />
        <meta
          property="og:description"
          content="Jeje Yanfunmi - Dev-jay is an experienced full-stack developer that eats and breaths React js."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jayfolio.vercel.app" />
        <meta property="twitter:url" content="https://jayfolio.vercel.app/" />
        <meta name="twitter:title" content="Dev-jay" />
        <meta
          name="twitter:description"
          content="Jeje Yanfunmi - Dev-jay is an experienced full-stack developer that eats and breaths React js."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
