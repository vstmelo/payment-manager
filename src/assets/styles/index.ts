import { createStitches, PropertyValue } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#ffffff",
      dark: "#000",
      fadeGray: "#645c5c17",
      grayText: "#343447",
      yellow:'#F5D64C',
    },
    media: {
      desktop: "80rem",
      tabletLarge: "64rem",
      tablet: "48rem",
      mobile: "32rem",
      mobileM: "24rem",
      mobileS: "20rem",
    },
    fonts: {
      poppins: "Poppins, sans-serif",
      openSans: "Open Sans, sans-serif",
    },
  },
});
