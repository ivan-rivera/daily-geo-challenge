import { ChakraProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import theme from "../theme/theme";

addDecorator(withThemes(ChakraProvider, [theme]));

export const parameters = {
  chakra: { theme },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
