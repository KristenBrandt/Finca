import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Image, Text, TouchableOpacity, View,StyleSheet,Button} from "react-native";
import logo from "../assets/logo.png";
import login from "./login";

const home = ({navigation})=> {
    //esta funcion solo es para ver si pasaba datos de un window a otro sin problema
    function navigationToLogin(){
        navigation.navigate('login',{
            itemID:10,
            otherParams:'anything'
        })
    }
    return(
        <View style={styles.container} >
            <StatusBar style="auto" />
            <Image source={logo} style={{marginBottom: 150, width: 440, height: 399 }} />
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('login')}>
                <Text style={{ fontSize: 30,color:'#283618'}} >Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('registrations')}>
                <Text style={{ fontSize: 30,color:'#283618'}} >Usuario Nuevo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#283618',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 5,
        borderRadius: 50,
        height: 50,
        width: 250,
        borderColor: 'black',
        fontSize: 50,
        color: '#283618',
        backgroundColor: '#fefae0',
    },
});

export default home


