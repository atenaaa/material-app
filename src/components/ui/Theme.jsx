import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },

    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },

  typography: {
    tab: {
      fontFamily: "Raleway !important",
      textTransform: "none !important",
      // fontWeight:" 700!important",
      fontSize: "1rem !important",
      color: "white !important",
    },
    h2: {
      fontFamily: "Raleway !important",
      fontSize: "1.5rem",
      fontWeight: 700,
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: "white",
      fontWeight: 300,
      fontSize: "1.25rem",
    },
    estimate: {
      fontFamily: "pacifico !important",
      textTransform: "none !important",
      fontSize: "1rem !important",
      color: "white !important",
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: "2px!important",
      textTransform: "none",
      color: arcBlue,
      borderRadius: "50px !important",
      fontFamily: "Roboto",
      fontWeight: "bold",
      borderRadius: "50px !important",
    },
  },
});
