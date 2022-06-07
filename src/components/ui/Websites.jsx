
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { makeStyles, useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";


import backArrow from "../../assets/backArrow.svg"
import forwardArrow from "../../assets/forwardArrow.svg"
import analytics from "../../assets/analytics.svg";
import seo from "../../assets/seo.svg";
import outReach from "../../assets/outreach.svg"
import ecommerce from "../../assets/ecommerce.svg"
import CallToAction from "./CallToAction";


const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    }
  },
  paragraphContainer: {
    maxWidth: "30em"
  }
}))



function Websites({ setSelectedIndex }) {
  const classes = useStyle()
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.mainContainer}

      >
        <Hidden mdDown>  
         <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1em", marginLeft: "-3.5em" }}
        >
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => setSelectedIndex(2)}
          >
            <img src={backArrow} alt="Back to ios android Page" />
          </IconButton>
        </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Website Development
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
        <Hidden mdDown>
          
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => setSelectedIndex(0)}
          >
            <img
              src={forwardArrow}
              alt="Forward to services Development Page"
            />
          </IconButton>
        </Grid>
        </Hidden>

      </Grid>
      <Grid item container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        style={{ marginTop: '12em' }}
        className={classes.rowContainer}
      >
        <Grid item >
          <Grid container direction="column">
            <Grid item >
              <Typography variant="h4" gutterBottom>Analiytes</Typography>
            </Grid>
            <Grid item >
              <img src={analytics} alt="" style={{ marginLeft: "-2.75em" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores minus, nam voluptatum molestiae libero modi ipsam tempore,
            ullam explicabo vitae nesciunt enim. Hic facere saepe earum,
            perspiciatis tempore iusto praesentium!
          </Typography>
        </Grid>
      </Grid>

      <Grid item container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginTop: '15em', marginBottom: "15em" }}
        className={classes.rowContainer}>
        <Grid item >
          <Grid container direction="column">
            <Grid item >
              <Typography variant="h4" gutterBottom alignItems="center">E-Commerce</Typography>
            </Grid>
            <Grid item >
              <img src={ecommerce} alt="ecommerce" style={{ marginLeft: "-2.75em" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}>
          <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quod similique laborum tempore deleniti nostrum aut reiciendis molestiae itaque

          </Typography>
        </Grid>
      </Grid>


      <Grid item container
        direction={matchesSM ? "column" : "row"}
        alignItems="center" className={classes.rowContainer}>
        <Grid item >
          <Grid container direction="column">
            <Grid item >
              <Typography variant="h4" gutterBottom alignItems="center">OutReach</Typography>
            </Grid>
            <Grid item >
              <img src={outReach} alt="megaphone" style={{ marginLeft: "-2.75em" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maiores minus, nam voluptatum molestiae libero modi ipsam tempore,
            ullam explicabo vitae nesciunt enim. Hic facere saepe earum,

          </Typography>
        </Grid>
      </Grid>

      <Grid item container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: '15em', marginBottom: "15em" }}
        alignItems="center"
        justifyContent="flex-end"
        className={classes.rowContainer}>
        <Grid item >
          <Grid container direction="column">
            <Grid item >
              <Typography variant="h4" gutterBottom alignItems="center">Search Engine <br />Obtimization
              </Typography>
            </Grid>
            <Grid item >
              <img src={seo} alt="website sending" style={{ marginLeft: "-2.75em" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}>
          <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur dolor error sint deleniti in, enim reprehenderit,

          </Typography>
          <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur dolor error sint deleniti in, enim reprehenderit,
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>

  )
}

export default Websites;
