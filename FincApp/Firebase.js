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
const firebaseConfig = {
    apiKey: "AIzaSyCAcfSjM6zqNiIB_zz3Drq0Y4SqKehZPuo",
    authDomain: "finca-70583.firebaseapp.com",
    databaseURL: "https://finca-70583.firebaseio.com",
    projectId: "finca-70583",
    storageBucket: "finca-70583.appspot.com",
    messagingSenderId: "413305082453",
    appId: "1:413305082453:web:dccbaca54b57620d03badc",
    measurementId: "G-CJF9V5NDWK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


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
