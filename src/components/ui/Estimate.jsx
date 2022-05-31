import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import Lottie from "react-lottie";
  

import check from "../../assets/check.svg"
import send from "../../assets/send.svg";
import software from "../../assets/software.svg";
import mobile from "../../assets/mobile.svg";
import website from "../../assets/website.svg";
import backArrow from "../../assets/backArrow.svg";
import backArrowDisabled from "../../assets/backArrowDisabled.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import forwardArrowDisabled from "../../assets/forwardArrowDisabled.svg";
import camera from "../../assets/camera.svg";
import upload from "../../assets/upload.svg";
import person from "../../assets/person.svg";
import persons from "../../assets/persons.svg";
import info from "../../assets/info.svg";
import bell from "../../assets/bell.svg";
import people from "../../assets/people.svg";
import usersIcon from "../../assets/users.svg";
import iPhone from "../../assets/iphone.svg";
import gps from "../../assets/gps.svg";
import customized from "../../assets/customized.svg";
import data from "../../assets/data.svg";
import android from "../../assets/android.svg";
import globe from "../../assets/globe.svg";
import biometrics from "../../assets/biometrics.svg";

import estimateAnimation from "../../animations/estimateAnimation/data.json";
import { height } from "@mui/system";

const useStyle = makeStyles((theme) => ({
    icon:{
        width:"12em",
        height:"10em"
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:"50px !important",
        backgroundColor:`${theme.palette.common.orange}!important`,
        height:50,
        width:225,
        marginTop: "5em",
        fontSize: "1.25rem",
        "&:hover": {
          backgroundColor:`{theme.palette.secondary.light}!impotant`
        }

    }
}))
 
const defaultQuestion =[ {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "outlines of phones and tablets",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0
      }
    ]
  }]

function Estimate() {
const classes = useStyle()
const theme = useTheme();


const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="row">
        {/*  */}
           <Grid item container direction="column" lg>
           <Grid item style={{marginTop:"2em", marginLeft:"5em"}}>
        <Typography variant="h2">
            Estimate
        </Typography>
        </Grid>
        <Grid item  style={{marginRight:"10em", maxWidth:"50em",marginTop:"7.5em"}}>
            <Lottie options={defaultOptions} width="100%" height="100%" />
        </Grid>
        </Grid>
        {/*  */}
        <Grid item
             container 
             direction="column" 
              
         
            lg 
            style={{marginRight:"2em",marginBottom:"25em" }}>
           <Grid item >
               <Typography 
                     variant="h2"
                     align="center"
                     gutterBottom
                   style={{fontWeight:500,marginTop:"5em",fontSize:"2.2rem" , marginBottom:"2.5em"}}>
                   Which service are you interstid in?
               </Typography>
            <Grid item container>
                {/* 1pic */}
                <Grid container direction="column"md>
                    <Grid item style={{maxWidth:"2em"}} >
                      <Typography variant="h6" align="center" gutterBottom style={{marginBottom:"1em"}} >
                           Custom software Development
                       </Typography>
                    </Grid>
                    <Grid item>
                        <img src={software} alt="free software"  className={classes.icon} />
                    </Grid>
                </Grid>
                {/* 2pic */}
                <Grid container direction="column" md>
                    <Grid item style={{maxWidth:"2em"}} >
                      <Typography variant="h6" align="center" gutterBottom style={{marginBottom:"1em"}} >
                        ios/Android App Development
                       </Typography>
                    </Grid>
                    <Grid item>
                        <img src={mobile} alt="mobile" className={classes.icon} />
                    </Grid>
                </Grid>
                        {/* 3pic */}
                <Grid container direction="column"md>
                    <Grid item style={{maxWidth:"2em"}} >
                      <Typography variant="h6" align="center" gutterBottom style={{marginBottom:"1em"}}>
                        Website Development
                       </Typography>
                    </Grid>
                    <Grid item>
                        <img src={website} alt="coputer outline"  className={classes.icon} />
                     </Grid>
                </Grid>
                </Grid>   
             <Grid item container justifyContent="space-between" style={{width:"15em",marginTop:"3em"}}>
                 <Grid item>
                     <img src={backArrow} alt="previos question" />
                 </Grid>
                 <Grid item>
                     <img src={forwardArrow} alt="next question" />
                 </Grid>
             </Grid>
             <Grid item>
                 <Button variant="contained" className={classes.estimateButton}>
                     Get estimate
                 </Button>
             </Grid>
 
        </Grid>
        </Grid>
    </Grid>

  )
}

export default Estimate;
