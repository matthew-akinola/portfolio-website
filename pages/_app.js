import { StateProvider } from "../stateProvider";
import reducer, { initialState } from "./../reducer";
import "../styles/globals.css";
import Head from "next/head";

import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
function MyApp({ Component, pageProps }) {
  const cursorColor = "135, 206,91";
  const cursorColorInHex = "#87ce5b";
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Dev-Matt</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Akinola Matthew - Dev-matt is an experienced backend developer that eats and breaths Python."
        />
        <meta property="og:url" content="https://jayfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dev-matt" />
        <meta
          property="og:description"
          content="Akinola Matthew - Dev-matt is an experienced backend developer that eats and breaths Python."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jayfolio.vercel.app" />
        <meta property="twitter:url" content="https://jayfolio.vercel.app/" />
        <meta name="twitter:title" content="Dev-matt" />
        <meta
          name="twitter:description"
          content="Akinola Matthew - Dev-matt is an experienced backend developer that eats and breaths Python."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dubinx/image/upload/v1656803174/OGimage_mgka5q.jpg"
        />
      </Head>
      <AnimatedCursor
        color={cursorColor}
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: `3px solid #87ce5b`,
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
