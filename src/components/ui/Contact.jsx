import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import ButtonArrow from "../../components/ui/ButtonArrow";

import mobilebackGround from "../../assets/mobileBackground.jpg"
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
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobilebackGround})`
    }


  }, learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em !important",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue} !important`,
    marginTop: "5em!important",
    borderRadius: 5
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
    [theme.breakpoints.down("md")]: {
      margin: "0 !important",

    }
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius:" 50px!important",
    marginBottom:"10px !important",
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: ` ${theme.palette.common.orange}!important`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }, [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225
    }
  }
}))


const Contact = () => {
  const classes = useStyle()
  const theme = useTheme();

  const machesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const machesMD = useMediaQuery(theme.breakpoints.down("md"))

  const [name, setName] = useState('')


  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState('')

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: machesSM ? "1em" : machesMD ? "5em" : 0, marginTop: machesMD ? "5em" : 0 }}
        xl={3} lg={4}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align={machesMD ? "center" : undefined}
                variant="h2" style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography align={machesMD ? "center" : undefined}
                variant="body1" style={{ color: theme.palette.common.blue }}>
                we are watting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img src={phoneIcon} alt="phoneIcon" style={{ marginRight: "0.5em" }} />
              </Grid>
              <Grid item >
                <Typography align={machesMD ? "center" : undefined} variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>  (555) 555-5555</Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }} >
              <Grid item>
                <img src={emailIcon} alt="phoneIcon" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>atenajafari@gmailcom</Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ maxWidth: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField label="name"
              
                  fullWidth id="name"
                  variant="standard"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                  variant="standard" 
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length!==0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  variant="standard" 
                  value={email}
                  onChange={onChange}
                />
              </Grid>
           

            </Grid>
            <Grid item>
              <TextField label="message"
                className={classes.message}
                id="Message" InputProps={{ disableUnderline: true }} multiline rows={10} variant="standard" onChange={(e) => setMessage(e.target.value)} />
            </Grid>
            <Grid item container justifyContent="center" style={{ marginTop: "2em" }}>
              <Button
              disabled={  name.length === 0 ||
                message.length === 0 ||
                phoneHelper.length !== 0 ||
                emailHelper.length !== 0}
                variant="contained"
                className={classes.sendButton}
                style={{ marginTop: "2em" }}>
                send message
                <img src={airplane} alt="airplane" style={{ marginLeft: "2em" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
      <Grid item container
        className={classes.background}
        alignItems="center"
        direction={machesMD ? "column" : "row"}
        justifyContent={machesMD ? "center" : undefined}
        xl={9} lg={8} >
        <Grid item style={{
          marginLeft: machesSM ? 0 : "3em",
          textAlign: machesSM ? "center" : "inherit"
        }}>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align={machesMD ? "center" : undefined} >Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle} align={machesMD ? "center" : undefined} style={{ color: "white" }}  >
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1" align={machesMD ? "center" : undefined} style={{ color: "white" }} >
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Grid container item justifyContent={machesMD ? "center" : undefined}>
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
