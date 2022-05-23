
import React from "react";
import { makeStyles } from "@mui/styles";
import Footersdornment from "../../assets/FooterAdornment.svg"
 


const useStyles=makeStyles(theme=>({
    footer:{
        backgroundColor:theme.palette.common.blue,
        width:"100%",
        zIndex:1302,
        position:"relative"
    },
    adorment:{
        width:"25em",
        verticalAlign:"bottom",
        [theme.breakpoints.down("md")]: {
            width:"20em",
          },
          [theme.breakpoints.down("sm")]: {
            width:"14em",
          },
        
    }
}))

function Footer() {
    const classes=useStyles()
  return <footer className={classes.footer}> <img alt="black decorative" src={Footersdornment} className={classes.adorment}/></footer>;
}

export default Footer;
