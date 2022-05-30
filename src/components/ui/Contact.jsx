import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import {Link} from "react-router-dom"
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import ButtonArrow from "../../components/ui/ButtonArrow";

import background from "../../assets/background.jpg"
import phoneIcon from "../../assets/phone.svg"
import emailIcon from "../../assets/email.svg"
import airplane from "../../assets/send.svg"
 
const useStyle = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
   
  },    learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
        marginBottom: "2em !important",
    },
},
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: "50px !important",
    height: 60,
    width: 170,
    backgroundColor: `${theme.palette.common.orange} !important`,
    fontSize: "1.3em !important",
    marginRight: "5em!important",
    marginLeft: "2em!important",
    [theme.breakpoints.down("sm")]: {
        margin: "0 !important"
    }

}
}))


const Contact = () => {
  const classes = useStyle()
  const theme = useTheme();
  const machesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
  return(
    <Grid container direction="row">
      <Grid item container direction="column" justifyContent="center" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{lineHeight:1}}>
            Contact Us
          </Typography>
          <Typography variant="body1" style={{color:theme.palette.common.blue}}>
          we are watting
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
          <img src={phoneIcon} alt="phoneIcon" style={{marginRight:"0.5em"}}/>
        </Grid> 
        <Grid item>
           <Typography variant="body1"   style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>  (555) 555-5555</Typography>
        </Grid> 
         </Grid>
         <Grid item container>
          <Grid item>
          <img src={emailIcon} alt="phoneIcon" style={{marginRight:"0.5em",verticalAlign:"bottom"}}/>
        </Grid> 
        <Grid item>
           <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}> atenajafari@mail.com</Typography>
        </Grid> 
         </Grid>
         <Grid item container>
         <Grid item >
           <TextField label="name" id="name" variant="standard" value={name} onChange={(e)=>setName(e.target.value)}/>
         
         </Grid>
         <Grid item>
             <TextField label="Phone" id="Phone" variant="standard" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
         </Grid>
         <Grid item>
         <TextField label="Email" id="Email" variant="standard" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </Grid>
        
         </Grid>
         <Grid item>
         <TextField label="message" id="Message" multiline rows={10} variant="standard" value={message} onChange={(e)=>setMessage(e.target.value)}/>
         </Grid>
         <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="contained">
             send message
             <img src={airplane} alt="airplane" />
              </Button>
            </Grid>
      </Grid>
      <Grid item container className={classes.background} alignItems="center" lg={9} >
      <Grid item style={{
                marginLeft: machesSM ? 0 : "5em",
                textAlign: machesSM ? "center" : "inherit"
            }}>
                <Grid container direction="column">
                    <Grid item>
                    <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
                        <Grid container item justifyContent={machesSM ? "center" : undefined}>
                            <Button variant="outlined" className={classes.learnButton}>
                              
                                <span style={{ marginRight: 5 }}>Learn More</span>
                                <ButtonArrow
                                    width={15}
                                    height={15}
                                    fill={theme.palette.common.blue}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button variant="contained"
                    className={classes.estimateButton}
                    component={Link}
                    to="/revolution"
                >
                    Free estimate
                </Button>
            </Grid>
            </Grid>
        <Grid item>

        </Grid>
  

    </Grid>
  )
};

export default Contact;
