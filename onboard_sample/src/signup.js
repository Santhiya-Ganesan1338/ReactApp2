import './App.css';
import { Onboard} from 'onboard_module';
import { useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import facebook from './assert/social/facebook.png';
import github from './assert/social/github.png';
import google from './assert/social/google.png';
import twitter from './assert/social/twitter.png';
import microsoft from './assert/social/microsoft.png';

var baseServiceName = "http://192.168.1.18:8055/api/v1.0/onboard/process";
var googleClientId = "372348784648-5d7qkrmd8sqnu2jp22itglm9ttnmvjsa.apps.googleusercontent.com";
var facebookAppId = "2723282364553361";
var microsoftClientId = "2148601b-2d6b-4364-ac4b-4a72906c8cac";

window.React2 = require('react');
console.log(window.React1 === window.React2);

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function Signup() {
    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [village, setVillage] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');


    const googleLogin = () => {
        var userModuleDetail = {
            "firstName": "New1",
            "lastName": "User",
            "userType": "ADMIN",
            "mobile": 7502434650,
            "onboardAccountType": "NEW",
            "onboardInputType": "EMAIL_PASSWORD",
            "onboardMediaType": "GOOGLE",
            "client_id": googleClientId,
            "baseServiceName": baseServiceName
        }
        Onboard(userModuleDetail);
    }
    const faceBookLogin = () => {
        var userModuleDetail = {
            "onboardMediaType": "FACEBOOK",
            "appId": facebookAppId,
            "firstName": "New1",
            "lastName": "User",
            "userType": "ADMIN",
            "mobile": 7502434650,
            "onboardAccountType": "NEW",
            "onboardInputType": "EMAIL_PASSWORD",
            "baseServiceName": baseServiceName
        }
        Onboard(userModuleDetail);
    }
    const GitHubLogin = () => {
        var userModuleDetail = {
            "onboardMediaType": "GITHUB",
            "firstName": "New1",
            "lastName": "User",
            "userType": "ADMIN",
            "mobile": 7502434650,
            "onboardAccountType": "NEW",
            "onboardInputType": "EMAIL_PASSWORD",
            "baseServiceName": baseServiceName
        }
        Onboard(userModuleDetail);
    }
    const twitterLogin = () => {
        var userModuleDetail = {
            "onboardMediaType": "TWITTER",
            "firstName": "New1",
            "lastName": "User",
            "userType": "ADMIN",
            "mobile": 7502434650,
            "onboardAccountType": "NEW",
            "onboardInputType": "EMAIL_PASSWORD",
            "baseServiceName": baseServiceName
        }
        Onboard(userModuleDetail);
    }
    const microSoftInLogin = () => {
        var userModuleDetail = {
            "clientId": microsoftClientId,
            "redirectUri": "http://localhost:3000",
            "onboardMediaType": "MICROSOFT",
            "firstName": "New1",
            "lastName": "User",
            "userType": "ADMIN",
            "mobile": 7502434650,
            "onboardAccountType": "NEW",
            "onboardInputType": "EMAIL_PASSWORD",
            "baseServiceName": baseServiceName
        }
        Onboard(userModuleDetail);
    }
    const handleSaveClick = useCallback(() => {
        var userModuleDetail = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "userType": "ADMIN",
            "onboardMediaType": "DOMAIN",
            "onboardType": "domainSignUp",
            "mobile": mobile,
            "onboardAccountType": "NEW",
            "onboardInputType": "EMAIL_PASSWORD",
            "baseServiceName": baseServiceName
        }
        Onboard(userModuleDetail);
    });
    return (
        <div  >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} style={{ width: "48px", height: "48px" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
        </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="firstName"
                        name="firstName"
                        autoComplete="firstName"
                        autoFocus
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="lastName"
                        name="lastName"
                        autoComplete="lastName"
                        autoFocus
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dateOfBirth"
                        label="dateOfBirth"
                        name="dateOfBirth"
                        autoComplete="dateOfBirth"
                        autoFocus
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        value={dateOfBirth}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
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
                        name="gender"
                        label="gender"
                        type="gender"
                        id="gender"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="address"
                        label="address"
                        type="address"
                        id="address"
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="village"
                        label="village"
                        type="village"
                        id="village"
                        onChange={(e) => setVillage(e.target.value)}
                        value={village}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="state"
                        label="state"
                        type="state"
                        id="state"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="country"
                        label="country"
                        type="country"
                        id="country"
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="postalCode"
                        label="postalCode"
                        type="postalCode"
                        id="postalCode"
                        onChange={(e) => setPostalCode(e.target.value)}
                        value={postalCode}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="password"
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoComplete="current-password"
                    />
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSaveClick}
                    >
                        Sign Up
          </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <a href="/" variant="body2">
                            Already have an account? Sign In
              </a>
                    </Grid>
                </div>
                <div align="center">
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                        color="primary"
                        onClick={googleLogin}
                    ><img src={google} align="center" width="48" height="48" />

                    </button>
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={faceBookLogin}
                    ><img src={facebook} align="center" width="48" height="48" />
                    </button>
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={GitHubLogin}
                    ><img src={github} align="center" width="48" height="48" />
                    </button>
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={twitterLogin}
                    ><img src={twitter} align="center" width="48" height="48" />
                    </button>
                    <button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={microSoftInLogin}
                    ><img src={microsoft} align="center" width="48" height="48" />
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default Signup;
