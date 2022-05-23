/* eslint-disable react-hooks/exhaustive-deps */
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
    [theme.breakpoints.down("sm")]: {
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
  drawer: {
    backgroundColor: "#0B72B9 !important",
  },
  draweItem: {
    ...theme.typography.tab,
    opacity: 0.7,

  },
  draweItemEstimate: {
    backgroundColor: "#FFBA60 !important"
  },
  draweItemSelected: {
    opacity: 1
  },
 
}))

function Header({setValue,value,selectedIndex,setSelectedIndex}) {
  const classes = useStyles();
  const theme = useTheme();

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
    { name: "Services", Link: "/Services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "custum software development", Link: "/customsoftware", activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: "mobile app development", Link: "/mobileapps", activeIndex: 1,
      selectedIndex: 2
    },
    {
      name: "website development", Link: "/websites", activeIndex: 1,
      selectedIndex: 3
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services", link: "/Services", activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event)
    },
    { name: "Revolution", link: "/Revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 }
  ];







  useEffect(() => {
    [...menueOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== selectedIndex
            ) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          setValue(5);
          break;
        default:
          break;
      }


    })

  }, [value, menueOptions, selectedIndex, routes]);

  const tabs = (
    <React.Fragment>
      <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
        indicatorColor='secondary'>
        {routes.map((route, index) => (
          <Tab 
          key={`${route}${index}`} 
          className={classes.tab}
           component={Link} 
           to={route.link} 
           label={route.name}
            ariaOwns={route.ariaOwns}
          ariaPopup={route.ariaPopup}
          onMouseOver={route.mouseOver}>
            
          </Tab>
        ))}
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
        keepMounted
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
        classes={{ paper: classes.drawer }}
      >
     <div></div>
        <List disablePadding>
          {routes.map(route => (
            <ListItem divider
            key={`${route}${route.activeIndex}`}
              component={Link}
              to={route.link}
              onClick={() => { setOpenDrawer(false); setValue(route.activeIndex); }}

              button
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}>
              <ListItemText className={value === route.activeIndex ? [classes.draweItem, classes.draweItemSelected] : classes.draweItem} disableTypography > {route.name}</ListItemText>

            </ListItem>

          ))}
          <ListItem onClick={() => { setOpenDrawer(false); setValue(5) }} divider button component={Link} to="/" className={classes.draweItemEstimate} selected={value === 5}>
            <ListItemText disableTypography className={value === 5 ? [classes.draweItem, classes.draweItemSelected] : classes.draweItem}>Free Estimate</ListItemText>
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
        <AppBar position="fixed" className={classes.appbar}>
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
