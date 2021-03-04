function RemoteSource(userModuleDetail, data) {

    if (userModuleDetail.onboardAccountType == "NEW" && data == null) {
        console.log("domainsignUP");
        var payLoad = {
            firstName: userModuleDetail.firstName,
            lastName: userModuleDetail.lastName,
            email: userModuleDetail.email,
            password: userModuleDetail.password,
            userType: "ADMIN",
            mobile: userModuleDetail.mobile,
            onboardAccountType: userModuleDetail.onboardAccountType,
            onboardInputType: "EMAIL_PASSWORD",
            onboardMediaType: userModuleDetail.onboardMediaType,
        }
    } else if (userModuleDetail.onboardAccountType == "NEW") {
        console.log("mediasignUP");
        var payLoad = {
            firstName: "New1",
            lastName: "User",
            email: data,
            password: "admin",
            userType: "ADMIN",
            mobile: 7502434650,
            onboardAccountType: userModuleDetail.onboardAccountType,
            onboardInputType: "EMAIL_PASSWORD",
        }
    }
    else if (userModuleDetail.onboardAccountType == "EXISTS" && data == null) {
        console.log("domainsignIn");
        var payLoad = {
            email: userModuleDetail.email,
            password: userModuleDetail.password,
            userType: "ADMIN",
            onboardMediaType: userModuleDetail.onboardMediaType,
            onboardAccountType: "EXISTS",
            onboardInputType: "EMAIL_PASSWORD"
        }
    }
    else {
        console.log("mediasignIn");
        var payLoad = {
            email: data,
            password: "admin",
            userType: "ADMIN",
            onboardMediaType: "SOCIAL",
            onboardAccountType: "EXISTS",
            onboardInputType: "EMAIL_PASSWORD"
        }
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payLoad)
    };
    return new Promise((resolve, reject) => {
        fetch(userModuleDetail.baseServiceName, requestOptions)
            .then(async response => {
                const data = await response.json();
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};
module.exports = { RemoteSource };