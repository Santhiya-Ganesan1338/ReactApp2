import './App.css';
import { Onboard } from 'onboard_module';
import { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import facebook from './assert/social/facebook.png';
import github from './assert/social/github.png';
import google from './assert/social/google.png';
import twitter from './assert/social/twitter.png';
import microsoft from './assert/social/microsoft.png';
import mobileOTP from './assert/social/mobile_otp.png';
import woua from './assert/social/logo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

var googleClientId = "372348784648-5d7qkrmd8sqnu2jp22itglm9ttnmvjsa.apps.googleusercontent.com";
var facebookAppId = "2723282364553361";
var microsoftClientId = "2148601b-2d6b-4364-ac4b-4a72906c8cac";
var baseServiceName = "http://192.168.1.18:8055/api/v1.0/onboard/process";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#19275a",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#19275a",
  },
  onboardSubmit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signin() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState('');
  const [open, setOpen] = React.useState(false);
  const [mobile, setMobile] = useState('');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const mobileOTPLogin = () => {
    setOpen(false);
    var userModuleDetail = {
      "onboardMediaType": "MOBILEOTP",
      "onboardType": "signIn",
      "userType": "ADMIN",
      "mobileNumber": mobile,
      "onboardAccountType": "EXISTS",
      "onboardInputType": "EMAIL_PASSWORD",
      "baseServiceName": baseServiceName
    }
    Onboard(userModuleDetail)
    // .then(function (result) {
    //   console.log("App result", result);
    // })
  }
  const googleLogin = () => {
    var userModuleDetail = {
      "onboardMediaType": "GOOGLE",
      "onboardType": "signIn",
      "client_id": googleClientId,
      "userType": "ADMIN",
      "onboardAccountType": "EXISTS",
      "onboardInputType": "EMAIL_PASSWORD",
      "baseServiceName": baseServiceName
    }
    Onboard(userModuleDetail).then(function (result) {
      console.log("googleLogin", result);
    }).catch(error => {
      console.log("error", error);
    })
  }
  const faceBookLogin = () => {

    var userModuleDetail = {
      "onboardMediaType": "FACEBOOK",
      "onboardType": "signIn",
      "appId": facebookAppId,
      "userType": "ADMIN",
      "onboardAccountType": "EXISTS",
      "onboardInputType": "EMAIL_PASSWORD",
      "baseServiceName": baseServiceName
    }
    Onboard(userModuleDetail).then(function (result) {
      console.log("facebook", result);
    }).catch(error => {
      console.log("error", error);
    })

  }

  const GitHubLogin = () => {
    var userModuleDetail = {
      "onboardMediaType": "GITHUB",
      "onboardType": "signIn",
      "userType": "ADMIN",
      "onboardAccountType": "EXISTS",
      "onboardInputType": "EMAIL_PASSWORD",
      "baseServiceName": baseServiceName
    }
    Onboard(userModuleDetail)
      .then(function (result) {
        console.log("git", result);
      }).catch(error => {
        console.log("error", error);
      })

  }
  const twitterLogin = () => {
    var userModuleDetail = {
      "onboardMediaType": "TWITTER",
      "onboardType": "signIn",
      "userType": "ADMIN",
      "onboardAccountType": "EXISTS",
      "onboardInputType": "EMAIL_PASSWORD",
      "baseServiceName": baseServiceName
    }
    Onboard(userModuleDetail)
      .then(function (result) {
        console.log("twitter", result);
      }).catch(error => {
        console.log("error", error);
      })
  }
  const microSoftInLogin = () => {
    var userModuleDetail = {
      "clientId": microsoftClientId,
      "redirectUri": "http://localhost:3000",
      "onboardMediaType": "MICROSOFT",
      "onboardType": "signIn",
      "userType": "ADMIN",
      "onboardAccountType": "EXISTS",
      "onboardInputType": "EMAIL_PASSWORD",
      "baseServiceName": baseServiceName
    }
    Onboard(userModuleDetail).then(function (result) {
      console.log("microsoft", result);
    }).catch(error => {
      console.log("error", error);
    })
  }
  const handleSignInClick = useCallback(() => {
    var userModuleDetail = {
      "email": email,
      "password": password,
      "onboardMediaType": "DOMAIN",
      "onboardType": "domainSignIn",
      "userType": "ADMIN",
      "onboardAccountType": "EXISTS",
      "onboardInputType": "EMAIL_PASSWORD",
      "baseServiceName": baseServiceName
    }
    Onboard(userModuleDetail).then(function (result) {
      console.log("domainSignIn", result);
    }).catch(error => {
      console.log("error", error);
    })

  });
  return (
    <div  >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} style={{ width: "48px", height: "48px" }} >
            <img src={woua} style={{ width: 70, height: 50 }}  ></img>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignInClick}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>  <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Use Mobile OTP"}</DialogTitle>

          <DialogActions>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone Number"
              type="number"
              id="mobile"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
              autoComplete="mobile"
            />
            <Button onClick={mobileOTPLogin} color="primary" autoFocus>
              Send
          </Button>
          </DialogActions>
        </Dialog>
        <div align="center">
          <button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.onboardSubmit}
            color="primary"
            onClick={handleClickOpen}
          ><img src={mobileOTP} align="center" width="48" height="48" />

          </button>
          <button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.onboardSubmit}
            color="primary"
            onClick={googleLogin}
          ><img src={google} align="center" width="48" height="48" />

          </button>
          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.onboardSubmit}
            onClick={faceBookLogin}
          ><img src={facebook} align="center" width="48" height="48" />
          </button>
          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.onboardSubmit}
            onClick={GitHubLogin}
          ><img src={github} align="center" width="48" height="48" />
          </button>
          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.onboardSubmit}
            onClick={twitterLogin}
          ><img src={twitter} align="center" width="48" height="48" />
          </button>
          <button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.onboardSubmit}
            onClick={microSoftInLogin}
          ><img src={microsoft} align="center" width="48" height="48" />
          </button>
        </div>
      </Container>
    </div>

  );
}

export default Signin;
