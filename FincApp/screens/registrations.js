import React, { Component ,useState} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, Button, TextInput} from "react-native";
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import {existingUsers} from "../users"



const registrations = ({navigation})=> {
    const [Nombre, setNombre] = useState('Nombre');
    const [Apellido, setApellido] = useState('Apellido');
    const [User, setUser] = useState('Usuario');
    const [Contrasena1, setContrasena1] = useState('Contraseña');
    const [Contrasena2, setContrasena2] = useState('Confirmar Contraseña');
    const [claveacceso, setClaveAcesso] = useState('Clave Acceso');
    function newUser(Nombre,Apellido,User,Contrasena1,claveacceso) {
        existingUsers.push( {Nombre:Nombre ,Apellido :Apellido, User:User,Contrasena1:Contrasena1,claveacceso:claveacceso});

    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source ={back} style ={{width:50, height:50,paddingHorizontal:5,marginBottom:130}}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Nombre'}
                           onChangeText = {(nom)=>setNombre(nom)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Apellido'}
                           onChangeText = {(last)=>setApellido(last)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Usuario'}
                           onChangeText = {(user)=>setUser(user)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Contraseña'}
                           secureTextEntry = {true}
                           onChangeText = {(ps1)=>setContrasena1(ps1)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Confirmar Contraseña'}
                           secureTextEntry = {true}
                           onChangeText = {(ps2)=>setContrasena2(ps2)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Clave Acesso'}
                           secureTextEntry = {true}
                           onChangeText = {(clave)=>setClaveAcesso(clave)}
                />
            </TouchableOpacity>
            < TouchableOpacity onPress={newUser()}>
                <Text style={styles.button}  >Registrar</Text>
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
        borderRadius: 50,
        height: 50,
        width: 250,
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
        borderRadius: 50,
        height: 50,
        width: 250,
        borderColor: 'black',
        fontSize: 20,
        backgroundColor: '#fefae0'
    }
});

export default registrations
