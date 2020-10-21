import {firebase} from "../Firebase";

var {Then} = require('cucumber');
var {When} = require('cucumber');
var {Given} = require('cucumber');

Given(/^El gerente ya tiene una cuenta creada$/, function () {
    const Usuario = "o@gmail.com"
    const Constrasena = "123456"

});
When(/^el gerente ingresa su usario y contraseña a la applicacion$/, function () {
    const Usuario = "o@gmail.com"
    const Constrasena = "123456"

});
Then(/^la applicacion ingresa a el menu principal y le muestra los botones de centros de costo y personal$/, function () {
    const onLoginPress = () => {
        let Usuario = "o@gmail.com";
        let Contrasena = "123456"
        firebase
            .auth()
            .signInWithEmailAndPassword(Usuario, Contrasena)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("Usaurio ya no existe.")
                            return;
                        }
                        const user = firestoreDocument.data()
                        navigation.navigate('menu', {user})
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

});
