import React, { useState, useEffect } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from "@mui/styles";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import logo from "../../assets/logo.svg"
import { Button } from "@mui/material";
import { Link } from "react-router-dom"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';






function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]:{
      marginBottom:"2em"
    }, 
    [theme.breakpoints.down("xs")]:{
      marginBottom:"1.25em"
    }, 
  },
  logo: {
    height: "8em",
  [theme.breakpoints.down("md")]:{
    height:"6em"
  }, 
  [theme.breakpoints.down("xs")]:{
    height:"5.5em"
  }
 
  },
  containerLogo: {
    padding: "0 !important"
  },

  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",


  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px !important",
    marginRight: "20px !important",
    marginLeft: "40px !important",
    height: "45px !important",

  },
  menu: {
    backgroundColor: "#0B72B9 !important",
    color: "white !important",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,

    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  }
}))

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState('one');
  const matchs=useMediaQuery(theme.breakpoints.down("lg"))
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menueOptions = [
    { name: "Services", Link: "/Services" },
    { name: "custum software development", Link: "/customsoftware" },
    { name: "mobile app development", Link: "/mobileapps" },
    { name: "website development", Link: "/websites" },


  ]
  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (value !== 0) {
          setValue(0)
        }
        break;
      case "/services":
        if (value !== 1) {
          setValue(1)
        }
        break;
      case "/revolution":
        if (value !== 2) {
          setValue(2)
        }
        break;
      case "/about":
        if (value !== 3) {
          setValue(3)
     
        }
        break;
      case "/contact":
        if (value !== 4) {
          setValue(4)
 
        }
        break;
      default:
        break;
    }
  }, [value]);

  const tabs =(
    <React.Fragment>
        <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
              indicatorColor='white'>
              <Tab label="Home" className={classes.tab} component={Link} to='/' />
              <Tab aria-controls={open ? 'basic-menu' : undefined} aria-expanded={open ? 'true' : undefined}
                onMouseOver={handleClick} label="Services" className={classes.tab} component={Link} to='/services' />
              <Tab label="Revolution" className={classes.tab} component={Link} to='/revolution' />
              <Tab label="About Us" className={classes.tab} component={Link} to='/about' />
              <Tab label="Contact Us" className={classes.tab} component={Link} to='/contact' />
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button} >Free Estimate</Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              classes={{ paper: classes.menu }}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menueOptions.map((option, i) => (
                <MenuItem key={option} classes={{ root: classes.menuItem }} component={Link} to={option.Link} onClick={() => { handleClose(); setValue(1) }}>
                  {option.name}
                </MenuItem>
              )
              )}

            </Menu>
    </React.Fragment>
  )

  return (
    <>
      <ElevationScroll >
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to='/' className={classes.containerLogo}>
              <img src={logo} alt="compony logo" className={classes.logo} />
            </Button>
          {matchs ? null:tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>

  );

}

export default Header;
