import React,{useState,useEffect} from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from "@mui/styles";
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import logo from "../../assets/logo.svg"
 import { Button } from "@mui/material";
 import {Link} from "react-router-dom" 
 import Menu from '@mui/material/Menu';
 import MenuItem from '@mui/material/MenuItem';
 
 
 

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
  
 const useStyles=makeStyles(theme =>({
    toolbarMargin:{
         ...theme.mixins.toolbar,
         marginBottom:"3em"
    } ,
    logo:{
      height:"7em",
  },
  containerLogo:{
    padding:"0 !important"
  },
  
    tabContainer:{
        marginLeft:"auto",
    },
    tab:{
    ...theme.typography.tab,
     minWidth:10,
    marginLeft:"25px",
    
    },
    button:{
      ...theme.typography.estimate,
     borderRadius:"50px !important",
     marginRight:"20px !important",
     marginLeft:"40px !important",
     height:"45px !important",
 
    },
 }))
  
function Header() {
    const classes=useStyles();
    const [value, setValue] = useState('one');
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
  useEffect(() => {
 if(window.localStorage.pathname=== "/" && value !==0){
   setValue(0)
 }
 else if (window.localStorage.pathname=== "/services" && value !==1){
  setValue(1)
}
else if (window.localStorage.pathname=== "/revolution" && value !==2){
  setValue(2)
}
else if (window.localStorage.pathname=== "/about" && value !==3){
  setValue(3)
}
else if (window.localStorage.pathname=== "/contact" && value !==4){
  setValue(4)
}
  },[value]);
  
  return( 
      <>
      <ElevationScroll > 
          <AppBar position="fixed">
      <Toolbar disableGutters> 
      <Button component={Link} to='/' className={classes.containerLogo}>
        <img src={logo} alt="compony logo" className={classes.logo} />
        </Button>
        <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
          indicatorColor='primary'>
               <Tab  label="Home" className={classes.tab}  component={Link} to='/'/>
               <Tab  aria-controls={open ? 'basic-menu' : undefined}  aria-expanded={open ? 'true' : undefined} 
              onMouseOver={handleClick} label="Services"className={classes.tab}  component={Link} to='/services'/>
               <Tab label="Revolution"className={classes.tab}  component={Link} to='/revolution'/>
               <Tab label="About Us"className={classes.tab}  component={Link} to='/about'/>
               <Tab label="Contact Us"className={classes.tab}  component={Link} to='/contact'/>
               </Tabs>
          <Button variant="contained" color="secondary" className={classes.button} >Free Estimate</Button>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
  
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem component={Link} to="/customsoftware" onClick={handleClose}>custum software development</MenuItem>
        <MenuItem component={Link} to="/mobileapps" onClick={handleClose}>mobile app development</MenuItem>
        <MenuItem component={Link} to="/websites" onClick={handleClose}>website development</MenuItem>
      </Menu>
          </Toolbar>
       </AppBar>
         </ElevationScroll>
          <div className={classes.toolbarMargin }></div>
      </>

  );

}

export default Header;
