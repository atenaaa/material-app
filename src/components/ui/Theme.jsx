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
      fontSize: "1.75rem",
      fontWeight: 700,
      color:arcBlue  ,
      lineHeight: 1.5,
    },
    h3:{
      fontFamily: "pacifico !important",
      fontSize: "1.75rem",
      color: arcBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    h6:{
      fontFamily: "Raleway",
      color: arcBlue,
      fontWeight: 500,
      lineHeight:1
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
    body1: {
      fontSize: "1rem",
      color: arcGrey,
      fontWeight: 300
    },
    estimate: {
      fontFamily: "pacifico !important",
      textTransform: "none !important",
      fontSize: "1rem !important",
      color: "white !important",
    },
    caption:{
      fontSize:"1.5rem",
      fontWeight:300,
      color:arcGrey
    },
    learnButton: {
      borderColor: arcBlue,
      borderWidth: "2px!important",
      textTransform: "none",
      color: arcBlue,
      borderRadius: "50px !important",
      fontFamily: "Roboto",
      fontWeight: "bold",
    
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue ,
        fontSize: "1rem"
      }
    },
    
    MuiInput: {
      root: {
        color: 'red',
        fontWeight: 300        
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue} !important`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue} !important`
        }
      },
    },
  }
   
});
