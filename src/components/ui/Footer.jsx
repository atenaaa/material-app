
import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from "@mui/styles";
import Footersdornment from "../../assets/FooterAdornment.svg"
import { Grid } from "@mui/material";



const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adorment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "20em",
        },
        [theme.breakpoints.down("sm")]: {
            width: "14em",
        },
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration:"none"
    },
    gridItem:{
        margin:"3em !important"
    }
    
}))

function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Grid container justifyContent="center" className={classes.mainContainer}>
                {/* Home */}
                <Grid item className={classes.gridItem}>
                    <Grid direction="column" container spacing={2}>
                        <Grid component={Link} to="/" item className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                {/* services */}
                <Grid item className={classes.gridItem}>
                    <Grid container pacing={2} direction="column">
                        <Grid component={Link} to="/services"  item className={classes.link}>
                            Services
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item component={Link} to="/customsoftware"  className={classes.link}>
                            Custom software development
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item component={Link} to="/mobileapps" className={classes.link}>
                            Mobli app development
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid component={Link} to="/websites" item className={classes.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                {/*  Revolortion*/}
                <Grid item className={classes.gridItem}>
                    <Grid container pacing={2} direction="column">
                        <Grid item component={Link} to="/revolution" className={classes.link}>
                            The Revolortion
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item component={Link} to="/revolution" className={classes.link}>
                            Vision
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item component={Link} to="/revolution" className={classes.link}>
                            Technology
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item component={Link} to="/revolution" className={classes.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                {/*  About As  */}
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" pacing={2}  >
                        <Grid item component={Link} to="/about" className={classes.link}>
                            About As
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.link}>
                            History
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                {/*Contact Us*/}
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" pacing={2} >
                        <Grid item component={Link} to="/contact" className={classes.link}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img alt="black decorative" src={Footersdornment} className={classes.adorment} /></footer>
    )

}

export default Footer;
