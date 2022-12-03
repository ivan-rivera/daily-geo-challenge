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
      primary: "#5E6472",
      secondary: "#AED9E0",
      success: "#AED9E0",
      warning: "#FAF3DD",
      error: "#FFA69E",
      background: "#AED9E0",
      link: "#ff9f1c",
      text: "#011627",
      gradient:
        "linear-gradient(112deg, $secondary -25%, $warning -10%, $error 80%)",
    },
  },
});
