import { StoreProvider } from "easy-peasy";

import { NextUIProvider } from "@nextui-org/react";
import { globalCss } from "@nextui-org/react";
import { lightTheme } from "../lib/theme";
import { store } from "../store/store";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/root/Layout";

const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <StoreProvider store={store}>
      <NextUIProvider theme={lightTheme}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
          rel="stylesheet"
        />
        <Layout>
          <Head>
            <title>Daily Geo Challenge</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta
              name="description"
              content="Daily Geography Challenge. Test your knowledge of the world!"
            />
            <meta
              name="keywords"
              content="geo, geography, quiz, test, challenge, daily, trivia, world"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </NextUIProvider>
    </StoreProvider>
  );
}

export default MyApp;
