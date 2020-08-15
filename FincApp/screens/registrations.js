import React, { Component ,useState} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet, Button, TextInput} from "react-native";
import login from "./home";
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";

const registrations = ({navigation})=> {
    const [Nombre, setNombre] = useState('Nombre');
    const [Apellido, setApellido] = useState('Apellido');
    const [Usuario, setUsuario] = useState('Usuario');
    const [Contrasena1, setContrasena1] = useState('Contraseña');
    const [Contrasena2, setContrasena2] = useState('Confirmar Contraseña');
    const [claveacceso, setClaveAcesso] = useState('Clave Acceso');


    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source ={back} style ={{width:50, height:50,paddingHorizontal:5,marginBottom:130}}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Nombre'}
                           onChangeText = {(nom)=>setNombre()}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Apellido'}
                           onChangeText = {(last)=>setApellido()}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Contraseña'}
                           onChangeText = {(ps1)=>setContrasena1()}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Confirmar Contraseña'}
                           onChangeText = {(ps2)=>setContrasena2()}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Clave Acesso'}
                           onChangeText = {(clave)=>setClaveAcesso()}
                />
            </TouchableOpacity>
            < TouchableOpacity >
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
