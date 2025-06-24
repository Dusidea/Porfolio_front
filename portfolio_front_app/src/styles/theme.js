import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#028476", // green
    },
    secondary: {
      main: "#A5CFE3", // light blue
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontSize: "2.5rem",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

theme = {
  ...theme, // keeping what's defined in theme
  typography: {
    ...theme.typography, //keeping previously declared typo style
    allVariants: {
      color: theme.palette.primary.main, // adding key `allVariants`
    },
  },
};

export default theme;
