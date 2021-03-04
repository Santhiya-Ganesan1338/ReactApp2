require("firebase/auth");
const firebase = require('firebase')

  if (!firebase.apps.length) {
    var firebaseConfig = {
      apiKey: "AIzaSyB_Fy-wUJM5jTMS7zQuzuG01T8ilErZY74",
      authDomain: "github-6e837.firebaseapp.com",
      databaseURL: "https://github-6e837.firebaseio.com",
      projectId: "github-6e837",
      storageBucket: "github-6e837.appspot.com",
      messagingSenderId: "643235120505",
      appId: "1:643235120505:web:25b27f0a98218409d0dba8"
    };
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

module.exports = { firebase};