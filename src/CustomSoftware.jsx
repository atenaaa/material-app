// import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@mui/styles";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import backArrow from "../src/assets/backArrow.svg"
import forwardArrow from "../src/assets/forwardArrow.svg"
// import lightBlub from "../src/assets/bulb.svg"


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
  }

}))

export default function CustomSoftware({ setSelectedIndex }) {
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
            onClick={() =>  setSelectedIndex(0)}
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
            onClick={() =>  setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt="Forward to iOS/Android App Development Page"
            />
          </IconButton>
        </Grid>
   
    </Grid>
</Grid>
   
  )
}
