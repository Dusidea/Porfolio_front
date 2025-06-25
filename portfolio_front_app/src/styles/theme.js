import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#028476",
    },
    secondary: {
      main: "#00221c",
    },
    background: {
      default: "#028476",
    },
    text: {
      primary: "#FFFFF0",
      secondary: "	#000000",
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
