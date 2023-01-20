import { extendTheme } from "@chakra-ui/react"
import globalStyles from "./global"
import colors from "./colors"
import fonts from "./fonts"
import components from "./components"
import breakpoints from "./breakpoints"

const theme = extendTheme({
  styles: { global: globalStyles },
  semanticTokens: { colors },
  breakpoints,
  components,
  fonts,
})

export default theme
