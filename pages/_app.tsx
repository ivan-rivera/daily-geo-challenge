import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
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
  );
}

export default MyApp;
