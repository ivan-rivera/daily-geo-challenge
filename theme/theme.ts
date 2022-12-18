import { extendTheme } from "@chakra-ui/react";
import globalStyles from "./global";
import colors from "./colors";
import fonts from "./fonts";
import components from "./components";

const theme: Record<string, any> = extendTheme({
  styles: { global: globalStyles },
  semanticTokens: { colors },
  components,
  fonts,
});

export default theme;
