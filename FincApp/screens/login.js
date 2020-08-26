import React,{useState} from 'react';
import {Alert,Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput} from 'react-native';
import {StatusBar} from "expo-status-bar";
import logo from "../assets/logo.png";
import back from "../assets/back.png";
import {existingUsers} from "../users"


const login =({navigation})=> {
    const [Usuario, setUsuario] = useState('Usuario');
    const [Contrasena, setContrasena] = useState('Contrasena');

    function ingresar(Usuario,Contrasena){
        if (existingUsers.find(users => users.User === Usuario) && existingUsers.find(users => users.Contrasena1 === Contrasena )) {
            navigation.navigate('menu');

        }else{
           alert("Error: No se encontro un usuario con esas especificaciones", "No se encontro un usuario con esas especificaciones");
        }}

    return(
        <View style={styles.container} >
            <StatusBar style="auto" />
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source ={back} style ={{width:50, height:50,paddingHorizontal:5}}/>
            </TouchableOpacity>
            <Image source={logo} style={{marginBottom: 50, width: 440, height: 399 }} />
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Usuario'}
                           onChangeText = {(user)=>setUsuario(user)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Contraseña'}
                           secureTextEntry = {true}
                           onChangeText = {(password)=>setContrasena(password)}
                />
            </TouchableOpacity>
            < TouchableOpacity onPress={() => ingresar(Usuario,Contrasena)}>
                <Text style={styles.button}  >LogIn</Text>
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
        paddingHorizontal: 80,
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
        margin: 10,
        borderRadius: 50,
        height: 50,
        width: 250,
        borderColor: 'black',
        fontSize: 30,
        backgroundColor: '#fefae0'
    }
});

export default login
