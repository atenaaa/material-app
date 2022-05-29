import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
 
import roots from "../src/assets/root.svg"

import backArrow from "../src/assets/backArrow.svg"
import forwardArrow from "../src/assets/forwardArrow.svg"
import lightBlub from "../src/assets/bulb.svg"
import stopWatch from "../src/assets/stopwatch.svg"
import cash from "../src/assets/cash.svg"
import documentsAnimation from "../src/animations/documentsAnimation/data"
import scaleAnimation from "../src/animations/scaleAnimation/data.json"
import automationAnimation from "../src/animations/automationAnimation/data.json"
import uxAnimation from "../src/animations/uxAnimation/data"



const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em !important"
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em"
  },
  itemContainer: {
    maxWidth: "40em"
  },
  rowContainer:{
    maxWidth: "40em"
  }


}))

export default function CustomSoftware({ setSelectedIndex }) {

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation ,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation ,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation ,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  const classes = useStyle()
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("sm"));
  return (

    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.mainContainer}

      >

        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>

        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt="Forward to iOS/Android App Development Page"
            />
          </IconButton>
        </Grid>
        {/* img grid */}
        <Grid item container direction="row" justifyContent="center" style={{ marginTop: "15em", marginBottom: "20em" }}>

          <Grid item container direction="column" md style={{ maxWidth: "40em", textAlign: "center" }}>
            <Grid item >
              <Typography variant="h4">
                Save Energy
              </Typography>
              <Grid item >
                <img src={lightBlub} alt="lightBlub" />
              </Grid>
            </Grid>
          </Grid>
          {/* 2 */}
          <Grid item container direction="column" md style={{ maxWidth: "40em", textAlign: "center" }}>
            <Grid item >
              <Typography variant="h4">
                Save Time
              </Typography>
              <Grid item >
                <img src={stopWatch} alt="stopWatch" />
              </Grid>
            </Grid>
          </Grid>
          {/* 3 */}
          <Grid item container direction="column" md style={{ maxWidth: "40em", textAlign: "center" }}>
            <Grid item >
              <Typography variant="h4">
                Save Mony
              </Typography>
              <Grid item >
                <img src={cash} alt="cash" />
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid item container direction="row" justifyContent="space-between">
          <Grid item container className={classes.itemContainer} md>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" paragraph>
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body1" paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body1" paragraph>
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body1">
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie options={documentsOptions} isStopped   style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}/>
            </Grid>
          </Grid>
          <Grid item container className={classes.itemContainer} md>
          <Grid item md>
              <Lottie options={scaleOptions } 
               isStopped={true}
               style={{ maxHeight: 260, maxWidth: 280 }}/>
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" paragraph   align="right" >
                Scale
                </Typography>
              </Grid>
              <Typography
                variant="body1"
                paragraph align="right" >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
         
            </Grid>
        
          </Grid>
        </Grid>
        
      </Grid>
      <Grid
        item
        container
        direction="row"
        style={{  marginBottom: "10em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
 style={{height:"30em",width:"30em"}}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
        </Grid>
        <Grid item container direction="row" justifyContent="space-between"    style={{ marginBottom: "20em" }}>
          <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" >
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
             
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                variant="body1"
                paragraph
              
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                paragraph
             
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
       
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              isStopped={true}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
    </Grid>
    </Grid>

  )
}
