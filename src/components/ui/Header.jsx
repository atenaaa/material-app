import React, { useState, useEffect, Fragment } from "react";
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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';






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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em"
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
  },
  drawerIcon: {
    height: "50px  !important",
    width: "50px  !important"
  },
  drawerIconContainer: {
    marginLeft: "auto !important",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer:{
    backgroundColor: "#0B72B9 !important",
  },
  draweItem:{
    ...theme.typography.tab,
    color:"white"
  },
  draweItemEstimate:{
    backgroundColor:  "#FFBA60"
  }
}))

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const iOS =
    typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchs = useMediaQuery(theme.breakpoints.down("md"))
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenue, setOpenMenue] = useState()
  const [anchorEl, setAnchorEl] = useState(null);
  


  const handleChange = (event, newValue) => {
    setValue(newValue);
 
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenue(true)


  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenue(false)

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

  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
        indicatorColor='secondary'>
        <Tab label="Home" className={classes.tab} component={Link} to='/' />

        <Tab aria-owns={anchorEl ? "basic-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(event) => handleClick(event)} label="Services" className={classes.tab} component={Link} to='/services' />

        <Tab label="Revolution" className={classes.tab} component={Link} to='/revolution' />
        <Tab label="About Us" className={classes.tab} component={Link} to='/about' />
        <Tab label="Contact Us" className={classes.tab} component={Link} to='/contact' />
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button} >Free Estimate</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenue}
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
  const drawer = (
    <Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
    classes={{paper:classes.drawer}}
      >
 <List disablePadding>
   <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/">
     <ListItemText disableTypography className={classes.draweItem}>Home</ListItemText>
   </ListItem>
   <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/services">
     <ListItemText disableTypography className={classes.draweItem}>Services</ListItemText>
   
   </ListItem>
   <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/revolution">
     <ListItemText disableTypography className={classes.draweItem}>The Revolution</ListItemText>
   </ListItem>
   <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/about">
     <ListItemText disableTypography className={classes.draweItem}> About Us</ListItemText>
   </ListItem>
   <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/contact">
     <ListItemText disableTypography className={classes.draweItem}> Contact Us</ListItemText>
   </ListItem>
   <ListItem onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/" className={classes.draweItemEstimate}>
     <ListItemText disableTypography className={classes.draweItem}>Free Estimate</ListItemText>
   </ListItem>
  
 
 </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </Fragment>
  )
  return (
    <>
      <ElevationScroll >
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to='/' className={classes.containerLogo}>
              <img src={logo} alt="compony logo" className={classes.logo} />
            </Button>
            {matchs ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>

  );

}

export default Header;
