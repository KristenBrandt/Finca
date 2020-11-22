import React,{useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import ventas from "../assets/ventas.png"
import { firebase } from '../Firebase';
import back from "../assets/back.png";


export default function menu_ventas({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <Image source={back} style={{width: 50, height: 50, paddingHorizontal: 5,marginBottom: 60, marginTop:20}}/>
            </TouchableOpacity>
            <Image source={ventas} style={{height: 280,width: 280,borderRadius:20,margin:10,marginBottom:90}}/>
            < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ventas')}>
                <Text style={{ fontSize: 20,color:'#fefae0',textJustify: 'center'}}>Ingresar ventas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('reportes_ventas')}>
                <Text style={{ fontSize: 20,color:'#fefae0',textJustify:'center',alignItems:'center'}}>Informe de ventas</Text>
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
        margin: 20,
        paddingHorizontal: 50,
        borderRadius: 20,
        height: 80,
        width: 280,
        borderColor: 'black',
        color: '#fefae0',
        backgroundColor: "#606C38"
    },
})

