import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    //   main: "#11B6A5", //teal blue light
    //   main: "#C58130", //orange
    //   main: "#724E36", //brown
    //   main: "#A25F81", //pink
    //   main: "#211820", //purple

    primary: {
      main: "#11B6A5", //teal blue light
    },
    secondary: {
      main: "#C58130", //orange
    },

    background: {
      default: "primary.main",
    },
    text: {
      primary: "#FFFFF0",
      secondary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `'Lato', sans-serif`,
    h1: {
      fontSize: "2.5rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
