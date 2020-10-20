import React,{useState} from 'react';
import {Alert,Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput} from 'react-native';
import {StatusBar} from "expo-status-bar";
import logo from "../assets/logo.png";
import backimg from "../assets/back.png";
import { firebase } from '../Firebase';

export default function login({navigation}){
    const [Usuario, setUsuario] = useState('');
    const [Contrasena, setContrasena] = useState('');

    const back = () => {navigation.navigate('home')}

    const onLoginPress = () => {
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

    return(
        <View style={styles.container} >
            <StatusBar style="auto" />
            <TouchableOpacity onPress={()=>back()}>
                <Image source ={backimg} style ={{width:50, height:50,paddingHorizontal:5}}/>
            </TouchableOpacity>
            <Image source={logo} style={{marginBottom: 40, width: 440, height: 399 }} />
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Email'}
                           placeholderTextColor="#283618"
                           onChangeText = {(user)=>setUsuario(user)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Contraseña'}
                           placeholderTextColor="#283618"
                           secureTextEntry = {true}
                           onChangeText = {(password)=>setContrasena(password)}
                />
            </TouchableOpacity>
            < TouchableOpacity style={styles.button} onPress={() =>onLoginPress()}>
                <Text style={{ fontSize: 30,color:'#fefae0'}}>Ingresar</Text>
            </TouchableOpacity>

        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#283618',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        color: '#fefae0',
        backgroundColor: "#606C38",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        paddingHorizontal: 5,
        borderRadius: 20,
        height: 50,
        width: 250,
        borderColor: 'black',
        fontSize: 30,
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        margin: 10,
        borderRadius: 20,
        height: 50,
        width: 280,
        borderColor: 'black',
        fontSize: 30,
        backgroundColor: '#fefae0'
    }
});
