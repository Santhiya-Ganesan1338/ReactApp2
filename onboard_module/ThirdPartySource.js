var serviceCall = require('./socialMedia/service_call');
const { firebase } = require('./FirebaseConfig')
var { gapi } = require('gapi-script');
var Msal = require("msal");
var { googleUserInfo } = require('./serviceURL');

function googleInitAuth(userModuleDetail) {
    return new Promise((resolve, reject) => {
        window.gapi.load('auth2', function () {
            gapi.auth2.authorize({
                client_id: userModuleDetail.client_id,
                scope: 'email',
                response_type: 'id_token permission',
                fetch_basic_profile: false,
            }, function loginGoogle(response) {
                return fetch(googleUserInfo + response.access_token)
                    .then(async response => {
                        const data = await response.json();
                        localStorage.setItem("userData", JSON.stringify(data))
                        var serveses = serviceCall.RemoteSource(userModuleDetail, data.email);
                        resolve(serveses);
                    }).catch(error => {
                        reject(error);
                    })
            })
        });
    })
};
function faceBookInitAuth(userModuleDetail) {
    return new Promise((resolve, reject) => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: userModuleDetail.appId,
                xfbml: true,
                version: 'v9.0',
                fields: "name,email,picture",
                scope: "public_profile"
            });
            FB.login(function (response) {
                console.log(response)
                if (response.authResponse) {
                    FB.api('/me?fields=id,name,email,gender,birthday', function (response, error) {
                        console.log(response)
                        localStorage.setItem("userData", JSON.stringify(response))
                        if (response.name) {
                            console.log(userModuleDetail);
                            // resolve(response);
                            var serveses = serviceCall.RemoteSource(userModuleDetail, response.email);
                            resolve(serveses);
                        }
                        else {
                            reject(error)

                        }
                    });
                }

            })

        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    });
}

function gitHubInitAuth(userModuleDetail) {
    var provider = new firebase.auth.GithubAuthProvider();
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            localStorage.setItem("userData", JSON.stringify(result))
            resolve(result);
            if (result) {
                var serveses = serviceCall.RemoteSource(userModuleDetail, result.user.email)
                resolve(serveses);
            } else {

            }
        }).catch(function (error) {
            reject(error)
        });
    })
};

function twitterInitAuth(userModuleDetail) {

    var provider = new firebase.auth.TwitterAuthProvider();
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            localStorage.setItem("userData", JSON.stringify(result))

            var serveses = serviceCall.RemoteSource(userModuleDetail, result.user.displayName)
            resolve(serveses);
        }).catch(function (error) {
            console.log(error)
            var serveses = serviceCall.RemoteSource(userModuleDetail, error.email)
            reject(error);
        });
    })
};

function microsoftInitAuth(userModuleDetail) {
    const msalConfig = {
        auth: {
            clientId: userModuleDetail.clientId,
            authority: "https://login.microsoftonline.com/common",
            redirectUri: userModuleDetail.redirectUri,
        },
        cache: {
            cacheLocation: "sessionStorage",
            storeAuthStateInCookie: false,
        }
    };
    const myMSALObj = new Msal.UserAgentApplication(msalConfig);
    const loginRequest = {
        scopes: ["openid", "profile", "User.Read"],
    };
    return new Promise((resolve, reject) => {
        myMSALObj.loginPopup(loginRequest)
            .then((loginResponse) => {
                const tokenRequest = {
                    scopes: ["Mail.Read"]
                };
                myMSALObj.acquireTokenSilent(tokenRequest)
                    .then(tokenResponse => {
                        localStorage.setItem("userData", JSON.stringify(tokenResponse))
                        var serveses = serviceCall.RemoteSource(userModuleDetail, tokenResponse.account.userName)
                        resolve(serveses);
                    }).catch(error => {
                        reject(error);
                    });
            }).catch(function (error) {
                reject(error)
            });
    });
};
function mobileInitAuth() {
    console.log("mobile otp")
}
module.exports = { googleInitAuth, faceBookInitAuth, gitHubInitAuth, twitterInitAuth, microsoftInitAuth, mobileInitAuth };