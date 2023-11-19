import localFont from "next/font/local";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const iranSans = localFont({
  src: [
    {
      path: "../font/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/IRANSansXFaNum-Bold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

// Create a theme instance.
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#0a0a0a",
    },
    secondary: {
      main: "#25b79b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: iranSans.style.fontFamily,
  },
});

export default theme;
