import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ButtonArrow from "./components/ui/ButtonArrow";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import animationData from "./animations/landinganimation/data";
import customsofware from "../src/assets/CustomSoftwareIcon.svg";
import mobileAppIcon from "../src/assets/mobileIcon.svg";
import webSiteIcon from "../src/assets/websiteIcon.svg";

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
}));

function LandingPage() {
  const classes = useStyle();
  const theme = useTheme();
  const machesSm = useMediaQuery(theme.breakpoints.down("sm"));

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
      justify={machesSm ? "center" : undefined}
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
                <Button variant="contained" className={classes.estimateButton}>
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
        <Grid container direction="row" className={classes.servicesContainer}>
          <Grid
            item
            style={{
              marginLeft: machesSm ? 0 : "5em",
              textAlign: machesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              {" "}
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customsofware}
              alt="custo software"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* -- ios/android block -- */}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justifyContent={machesSm ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              marginLeft: machesSm ? 0 : "5em",
              textAlign: machesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Ios/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {machesSm ? null : <br />}with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              {" "}
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={mobileAppIcon}
              alt="custo software"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* --custom software block -- */}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={machesSm ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: machesSm ? 0 : "5em",
              textAlign: machesSm ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              {" "}
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} src={webSiteIcon} alt="website" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
