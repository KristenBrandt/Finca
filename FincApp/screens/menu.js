import React,{useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import personal from "../assets/personal.png"
import cc from "../assets/cc.png"
import ventas from "../assets/ventas.png"
import { firebase } from '../Firebase';



export default function menu({navigation,props}){

    const Signafuera = () => (
        firebase
        .auth()
        .signOut()
        .then(() => {
                navigation.navigate("home")
        // Sign-out successful.
        })
            .catch(function(error) {
        // An error happened.
        })
        )

    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            < TouchableOpacity onPress={() => navigation.navigate('menu_cc')}>
                <Image source={cc} style={{height: 180,width: 180,borderRadius:20,margin:10}}/>
            </TouchableOpacity>
            < TouchableOpacity onPress={() => navigation.navigate('menu_personal')} >
                <Image source={personal} style={{height: 180, width: 180,borderRadius:20,margin:10}}/>
            </TouchableOpacity>
            < TouchableOpacity onPress={() => navigation.navigate('menu_ventas')}>
                <Image source={ventas} style={{height: 180,width: 180,borderRadius:20,margin:10}}/>
            </TouchableOpacity>
            < TouchableOpacity onPress={() => Signafuera()}>
                <Text  style={{ fontSize: 20,color:'#bc6c25', margin:20}} >Cerrar Sesión</Text>
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
    }
})





