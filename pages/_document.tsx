import { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import theme from "../theme/theme";

/**
 * The main purpose of this document is to insert the initial Chakra color mode
 * @constructor
 */
function MyDocument() {
  return (
    <Html lang="en">
      <Head title="Daily Geo Challenge" />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
