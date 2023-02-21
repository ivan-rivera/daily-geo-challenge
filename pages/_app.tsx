import { StoreProvider, useStoreRehydrated } from "easy-peasy"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme/theme"
import { store } from "../store/store"
import { Analytics } from "@vercel/analytics/react"
import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "../components/root/Layout"
import React from "react"
import Loading from "../components/display/Loading"

/**
 * A function that checks whether the store has been hydrated and if it has not,
 * then we display a loading screen, otherwise display the children components
 * @param children
 * @constructor
 */
function WaitForStateRehydration({ children }: { children: React.ReactNode }) {
  const isRehydrated = useStoreRehydrated()
  return isRehydrated ? <>{children}</> : <Loading />
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={store}>
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
  )
}

export default MyApp
