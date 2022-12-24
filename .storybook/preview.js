import { ChakraProvider } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import theme from "../theme/theme";
import { store } from "../store/store";
import { StoreProvider } from "easy-peasy";

/**
 * StoreProvider is a wrapper for the store
 * @param Story
 * @return {JSX.Element}
 */
const withProvider = (Story) => (
  <StoreProvider store={store}>
    <Story />
  </StoreProvider>
);

addDecorator(withThemes(ChakraProvider, [theme]));
addDecorator(withProvider);

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
