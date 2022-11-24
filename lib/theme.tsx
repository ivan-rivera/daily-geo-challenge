import { createTheme, Theme } from "@nextui-org/react";

const sharedTheme: Theme = {
  theme: {
    fonts: {
      sans: "Dosis, sans-serif",
      mono: "Dosis, sans-serif",
      serif: "Dosis, sans-serif",
    },
  },
};

export const lightTheme = createTheme({
  ...sharedTheme,
  type: "light",
  theme: {
    colors: {
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
  },
});
