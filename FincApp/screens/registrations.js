import React, { Component ,useState} from 'react';
import {Alert,Image, Text, TouchableOpacity, View, StyleSheet, Button, TextInput} from "react-native";
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import {existingUsers} from "../users"



const registrations = ({navigation})=> {
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [User, setUser] = useState('');
    const [Contrasena1, setContrasena1] = useState('Contraseña');
    const [Contrasena2, setContrasena2] = useState('Confirmar Contraseña');
    const [claveacceso, setClaveAcesso] = useState('');


    function handleConfirmPassword(Contrasena1, Contrasena2) {
      if (Contrasena1 !== Contrasena2) {
        console.log("No son iguales", Contrasena1, Contrasena2)
      }
        else{
          if(Contrasena1 === "" || Contrasena2 === ""){
            console.log("Estan vacias")
            }else{
            console.log("Son iguales");
         }
          }
      }

    function newUser(Nombre,Apellido,User,Contrasena1,Contrasena2,claveacceso) {
      if(Nombre === "" || Apellido === "" || User === "" || Contrasena1 === "" || Contrasena2 === ""){
            alert("Error: No se pudo registrar el usuario hay alguna casilla vacia", "No se pudo registrar el usuario");
        }else{
            if (Contrasena1 !== Contrasena2) {
                alert("Error: Sus contraseñas no son iguales")
            }
            else{
                //ver si hay un usario existente con este nombre
                if(existingUsers.find(users => users.User === User)){
                    alert("Error: Ya hay un usario con ese username", "Ya hay un usuario con ese username")
                }
                else{
                    existingUsers.push({Nombre:Nombre ,Apellido :Apellido, User:User,Contrasena1:Contrasena1,claveacceso:claveacceso});
                    alert("Registrado: Usuario Registrado, ya puede ingresar con este usuario", "Registrado: Usuario Registrado, ya puede ingresar con este usuario");
                }
            }
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={()=>navigation.navigate('home')}>
                <Image source ={back} style ={{width:50, height:50,paddingHorizontal:5,marginBottom:100}}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Nombre*'}
                           onChangeText = {(nom)=>setNombre(nom)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Apellido*'}
                           onChangeText = {(last)=>setApellido(last)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Usuario*'}
                           onChangeText = {(user)=>setUser(user)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Correo Electrónico*'}
                           onChangeText = {(clave)=>setClaveAcesso(clave)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Contraseña*'}
                           secureTextEntry = {true}
                           onChangeText = {(ps1)=>setContrasena1(ps1)}

                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Confirmar Contraseña*'}
                           secureTextEntry = {true}
                           onChangeText = {(ps2)=>setContrasena2(ps2)}
                           onBlur = {handleConfirmPassword(Contrasena1, Contrasena2)}

                />
            </TouchableOpacity>
            < TouchableOpacity style={styles.button} onPress={()=>newUser(Nombre,Apellido,User,Contrasena1,Contrasena2,claveacceso)}>
                <Text  style={{ fontSize: 30,color:'#fefae0'}} >Registrar</Text>
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

export default registrations
