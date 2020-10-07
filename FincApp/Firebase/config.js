import * as firebase from "../Firebase";

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
