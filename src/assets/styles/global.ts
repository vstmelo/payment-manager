import { globalCss } from ".";

export const globalStyle = globalCss({
  "* ": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  body: {
    overflowx: "hidden",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "1rem",
    backgroundColor: '$fadeGray',
    "-webkit-font-smoothing": "auto",
    "-moz-font-smoothing": "auto",
    " -moz-osx-font-smoothing": "grayscale",
    " font-smoothing": "auto",
    "text-rendering": "optimizeLegibility",
    "font-smooth": "always",
    "-webkit-tap-highlight-color": "transparent",
    "-webkit-touch-callout": "none",
  },
});
