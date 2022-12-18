import { StoreProvider, useStoreRehydrated } from "easy-peasy";
import { ChakraProvider, Text } from "@chakra-ui/react";
import theme from "../theme/theme";
import { store } from "../store/store";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/root/Layout";
import React from "react";

function WaitForStateRehydration({ children }: { children: React.ReactNode }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? (
    <>{children}</>
  ) : (
    <Text fontSize="3xl">Loading...</Text>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
        rel="stylesheet"
      />
      <ChakraProvider theme={theme}>
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
          <WaitForStateRehydration>
            <Component {...pageProps} />
          </WaitForStateRehydration>
          <Analytics />
        </Layout>
      </ChakraProvider>
    </StoreProvider>
  );
}

export default MyApp;
