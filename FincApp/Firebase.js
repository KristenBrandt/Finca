//@flow
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDZoBpu0AEfx7uOHPXSp6y9uz13tAe_cXE",
    authDomain: "finca-3a84c.firebaseapp.com",
    databaseURL: "https://finca-3a84c.firebaseio.com",
    projectId: "finca-3a84c",
    storageBucket: "finca-3a84c.appspot.com",
    messagingSenderId: "804365861170",
    appId: "1:804365861170:web:df66dccd3e4368c64e172b",
    measurementId: "G-3ZS9DYWRDB"
  };


export default class Firebase{

    static auth;
    static registrationInfo = {
        displayName: "",
        email: ""
    };

    static int() {
          // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        Firebase.auth = firebase.auth();
    }

} 