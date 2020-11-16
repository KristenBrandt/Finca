import React, { Component ,useState} from 'react';
import {Alert,Image, Text, TouchableOpacity, View, StyleSheet, Button, TextInput} from "react-native";
import {StatusBar} from "expo-status-bar";
import backimg from "../assets/back.png";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import login from "./login";

import { firebase } from '../Firebase';

export default function registrations({navigation}){
    const [Contrasena1, setContrasena1] = useState('');
    const [Contrasena2, setContrasena2] = useState('');
    const [claveacceso, setClaveAcesso] = useState('');
    const [FullName,setFullName] = useState('')

    const back = () => {navigation.navigate('home')}

    const registrado = () => {navigation.navigate('login')}

    const onRegisterPress = () => {
        if (Contrasena1 !== Contrasena2) {
            Alert("Las contraseñas no son iguales.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(claveacceso, Contrasena1)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    claveacceso,
                    FullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(registrado()
                    )
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
    }
            return (
                <View style={styles.container}>
                    <StatusBar style="auto"/>
                    <TouchableOpacity onPress={() => back()}>
                        <Image source={backimg} style={{width: 50, height: 50, paddingHorizontal: 5, marginBottom: 100}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style= {styles.text} > Nombre* </Text>
                        <TextInput style={styles.input}
                                   placeholder={'Nombre*'}
                                   placeholderTextColor="#283618"
                                   value = {FullName}
                                   onChangeText={(full) => setFullName(full)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style= {styles.text} > Correo Electrónico* </Text>
                        <TextInput style={styles.input}
                                   placeholder={'Correo Electrónico*'}
                                   placeholderTextColor="#283618"
                                   value = {claveacceso}
                                   onChangeText={(clave) => setClaveAcesso(clave)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style= {styles.text} > Contraseña* </Text>
                        <TextInput style={styles.input}
                                   placeholder={'Contraseña*'}
                                   placeholderTextColor="#283618"
                                   secureTextEntry={true}
                                   value = {Contrasena1}
                                   onChangeText={(ps1) => setContrasena1(ps1)}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style= {styles.text} > Confirmar Contraseña* </Text>
                        <TextInput style={styles.input}
                                   placeholder={'Confirmar Contraseña*'}
                                   placeholderTextColor="#283618"
                                   secureTextEntry={true}
                                   value = {Contrasena2}
                                   onChangeText={(ps2) => setContrasena2(ps2)}


                        />
                    </TouchableOpacity>
                    < TouchableOpacity style={styles.button}
                                       onPress={() =>onRegisterPress()}>
                        <Text style={{fontSize: 30, color: '#fefae0'}}>Registrar</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30,
        paddingHorizontal: 55,
        borderRadius: 20,
        height: 50,
        width: 280,
        borderColor: 'black',
        fontSize: 30,
        color: '#fefae0',
        backgroundColor: "#606C38"
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        margin: 15,
        borderRadius: 20,
        height: 50,
        width: 280,
        borderColor: 'black',
        fontSize: 20,
        backgroundColor: '#fefae0'
    },
    text: {
        color: '#fefae0',
        fontSize: 15

    }
});
