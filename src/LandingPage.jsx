import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonArrow from "./components/ui/ButtonArrow";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import CallToAction from "../src/components/ui/CallToAction"

import animationData from "./animations/landinganimation/data";
import customSoftwareIcon from "../src/assets/CustomSoftwareIcon.svg";
import mobileAppsIcon from "../src/assets/mobileIcon.svg";
import websitesIcon from "../src/assets/websiteIcon.svg";
import revelotionBackground from "../src/assets/repeatingBackground.svg"
import infoBackground from "../src/assets/infoBackground.svg"


const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "15px !important",
    marginLeft: "10%",
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: "#FFBA60 !important",
    borderRadius: "50px !important",
    height: "39px",
    width: "145px",
    marginRight: " 40px !important",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
  },
  mainContainer: {
    marginTop: "5em ",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em !important",
    },
  },
  subtitle: {
    marginButton: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      margin: "0 auto",
    },
  },
  servicesContainer: {
    marginTop: "5em ",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revelotionBackground: {
    backgroundImage: `url(${revelotionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolotinCard: {
    position: "absolute",
    boxShadow: `${theme.shadows[10]} !important `,
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingButton: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%"
    },
  }

}));

function LandingPage({setSelectedIndex,setValue} ) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));



  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justify={matchesSM ? "center" : undefined}
    >
      <Grid item>
        {/*--hero block--*/}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>

            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton} component={Link} to="/estimate"  >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  <span style={{ marginRight: "10px" }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* --custom software block -- */}
        <Grid
       container
       direction="row"
       justifyContent={matchesSM ? "center" : undefined}
       className={classes.servicesContainer}
       style={{marginButton:"10em"}}
     >
       <Grid
         item
      
         style={{
            marginLeft: matchesSM ? 0 : "5em",
           textAlign: matchesSM ? "center" : undefined,
           width: matchesSM ? undefined : "35em"
         }}
       >
         <Typography variant="h4">Custom Software Development</Typography>
         <Typography variant="subtitle1" className={classes.subtitle}>
           Reach More. Discover More. Sell More.
         </Typography>
         <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
         <Button
           component={Link}
           to="/customsoftware"
           variant="outlined"
           className={classes.learnButton}
           onClick={() => {
             setValue(1);
             setSelectedIndex(3);
           }}
         >
           <span style={{ marginRight: 10 }}>Learn More</span>
           <ButtonArrow
             width={10}
             height={10}
             fill={theme.palette.common.blue}
             component={Link}
             to="/services"
           />
         </Button>
       </Grid>
       <Grid item style={{
           marginRight: matchesSM ? 0 : "5em",}}>
         <img
           className={classes.icon}
           alt="website icon"
           src={customSoftwareIcon }
           width="250em"
         />
       </Grid>
     </Grid>
      </Grid>
 
      <Grid item>
     {/*-----Websites Block-----*/}
     <Grid
       container
       direction="row"
       justifyContent={matchesSM ? "center" : "flex-end"}
       className={classes.servicesContainer}
       style={{marginButton:"10em"}}
     >
       <Grid
         item
         style={{
           textAlign: matchesSM ? "center" : undefined
         }}
       >
         <Typography variant="h4">Website Development</Typography>
         <Typography variant="subtitle1" className={classes.subtitle}>
           Reach More. Discover More. Sell More.
         </Typography>
         <Typography variant="subtitle1">
           Optimized for Search Engines, built for speed.
         </Typography>
         <Button
           component={Link}
           to="/websites"
           variant="outlined"
           className={classes.learnButton}
           onClick={() => {
             setValue(1);
             setSelectedIndex(3);
           }}
         >
           <span style={{ marginRight: 10 }} mt={2} mb={2}>Learn More</span>
           <ButtonArrow
             width={10}
             height={10}
             fill={theme.palette.common.blue}
           />
         </Button>
       </Grid>
       <Grid item style={{
           marginRight: matchesSM ? 0 : "5em",}}>
         <img
           className={classes.icon}
           alt="website icon"
           src={websitesIcon}
           width="250em"
         />
       </Grid>
     </Grid>
   </Grid>
      <Grid item>
     {/*-----Websites Block-----*/}
     <Grid
       container
       direction="row"
       justifyContent={matchesSM ? "center" : undefined}
       className={classes.servicesContainer}
       style={{marginButton:"10em"}}
     >
       <Grid
         item
      
         style={{
            marginLeft: matchesSM ? 0 : "5em",
           textAlign: matchesSM ? "center" : undefined,
           width: matchesSM ? undefined : "35em"
         }}
       >
          <Typography variant="h4">Ios/Android App Development</Typography>
         <Typography variant="subtitle1" className={classes.subtitle}>
           Reach More. Discover More. Sell More.
         </Typography>
         <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
         <Button
           component={Link}
           to="/customsoftware"
           variant="outlined"
           className={classes.learnButton}
           onClick={() => {
             setValue(1);
             setSelectedIndex(3);
           }}
         >
           <span style={{ marginRight: 10 }}>Learn More</span>
           <ButtonArrow
             width={10}
             height={10}
             fill={theme.palette.common.blue}
             component={Link}
             to="/services"
           />
         </Button>
       </Grid>
       <Grid item style={{
           marginRight: matchesSM ? 0 : "5em",}}>
         <img
           className={classes.icon}
           alt="website icon"
           src={mobileAppsIcon }
           width="250em"
         />
       </Grid>
     </Grid>
   </Grid>

      {/*-----The Revolution Block-----*/}
      <Grid item >
        <Grid container alignItems="center" justifyContent="center" style={{ height: "70em", marginTop: "12em" }}>
          <Card className={classes.revolotinCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button variant="outlined"
                    component={Link}
                    to="/revolution"
                   className={classes.learnButton}>
                    {" "}
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revelotionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/* The Information block */}
        <Grid container
          style={{ height: "50em" }}
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            container
            style={{
              position: "absolute",
              textAlign: matchesSM ? "center" : "inherit"
            }}
            direction={matchesSM ? "column" : "row"}
            spacing={matchesSM ? 10 : 0}
          >
            <Grid item sm style={{ marginLeft: matchesSM ? 0 : matchesSM ? "2em" : "5em" }}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>About Us</Typography>
                <Typography variant="subtitle2"> Let's get personal.</Typography>
                <Grid item>
                  <Button   
                    variant="outlined" 
                    className={classes.learnButton}
                    component={Link}
                    to="/about"
                    style={{ color: "white", borderColor: "white" }}
              
                   >
                 
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill="white"
                    />
                  </Button></Grid>

              </Grid>
            </Grid>

            <Grid item sm style={{
              marginRight: matchesSM ? 0 : matchesSM ? "2em" : "5em",
              textAlign: matchesSM ? "center" : "right"
            }}>
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>Contact Us</Typography>
                <Typography variant="subtitle2">say hello</Typography>
                <Grid item>
                  <Button
                   variant="outlined"
                   component={Link}
                   to="/contact"
                    className={classes.learnButton}
                   style={{ color: "white", borderColor: "white" }}>
                    {" "}
                    <span style={{ marginRight: "10px" }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill="white"
                    />
                  </Button></Grid>

              </Grid>
            </Grid>
          </Grid>

          <div className={classes.infoBackground} />

        </Grid>
      </Grid>
      {/* The  callto action block */}
      <Grid item>
        <CallToAction />
      </Grid>

    </Grid>

  );
}

export default LandingPage;
