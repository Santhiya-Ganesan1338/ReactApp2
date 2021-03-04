var thirdPartySource = require('./ThirdPartySource');
var ServiceCall = require('./socialMedia/service_call');

function Onboard(userModuleDetail) {
    if (userModuleDetail.onboardMediaType == "MOBILE_OTP") {
        return thirdPartySource.mobileInitAuth(userModuleDetail);
    }
    else if (userModuleDetail.onboardMediaType == "GOOGLE") {
        return thirdPartySource.googleInitAuth(userModuleDetail);
    } else if (userModuleDetail.onboardMediaType == "FACEBOOK") {
        return thirdPartySource.faceBookInitAuth(userModuleDetail);
    }
    else if (userModuleDetail.onboardMediaType == "GITHUB") {
        return thirdPartySource.gitHubInitAuth(userModuleDetail);
    }
    else if (userModuleDetail.onboardMediaType == "TWITTER") {
        return thirdPartySource.twitterInitAuth(userModuleDetail);
    }
    else if (userModuleDetail.onboardMediaType == "MICROSOFT") {
        return thirdPartySource.microsoftInitAuth(userModuleDetail);
    }
    else if (userModuleDetail.onboardType == "DOMAIN_SIGN_IN") {
        return ServiceCall.RemoteSource(userModuleDetail);
    }
    else if (userModuleDetail.onboardType == "DOMAIN_SIGN_UP") {
        console.log("userModuleDetail",userModuleDetail)
        return ServiceCall.RemoteSource(userModuleDetail);
    }
}
module.exports = { Onboard };