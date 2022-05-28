import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import ButtonArrow from "./components/ui/ButtonArrow";
import useMediaQuery from "@mui/material/useMediaQuery";
 

import customSoftwareIcon from "../src/assets/CustomSoftwareIcon.svg";
import mobileAppsIcon from "../src/assets/mobileIcon.svg";
import websitesIcon from "../src/assets/websiteIcon.svg";

const useStyle=makeStyles(theme=>({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "15px !important",
        marginLeft: "10%",
      },
      subtitle: {
        marginButton: "1em",
      },
      specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
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
      icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("sm")]: {
          marginLeft: 0,
          margin: "0 auto",
        },
      },
      learnButtonHero: {
        ...theme.typography.learnButton,
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
    servicesContainer: {
        marginTop: "5em ",
        [theme.breakpoints.down("sm")]: {
          padding: 25,
        },
      },
      heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
          marginLeft: 0,
        },
      },
      buttonContainer: {
        marginTop: "1em",
      },
}))
 

export default function Services({setValue,setSelectedIndex}) {
    const classes=useStyle()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

 
  return <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em"
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>

      <Grid item>
        {/* -- ios/android block -- */}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
          style={{marginTop:matchesSM?"1em":"5em",
         
        }}
        >
          <Grid
            item
            style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em"
              
            }}
          >
            <Typography variant="h4">Ios/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button variant="outlined"   
             component={Link}
              to="/mobileapps" className={classes.learnButton}>
              {" "}
              <span style={{ marginRight: "10px" }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item  style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt="custo software"
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
              <span style={{ marginRight: 10 }}>Learn More</span>
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
  </Grid>;
}
