import React,{useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import personal from "../assets/personal.png"
import { firebase } from '../Firebase';
import back from "../assets/back.png";


export default function menu_personal({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <Image source={back} style={{width: 50, height: 50, paddingHorizontal: 5,marginBottom: 60, marginTop:20}}/>
            </TouchableOpacity>
            <Image source={personal} style={{height: 280,width: 280,borderRadius:20,margin:10,marginBottom:90}}/>
            < TouchableOpacity style={styles.button} onPress={() => navigation.navigate('personal')}>
                <Text style={{ fontSize: 18,color:'#fefae0',textJustify: 'center'}}>Ingresar personal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('reportes_personal')}>
                <Text style={{ fontSize: 18,color:'#fefae0',textJustify:'center',alignItems:'center'}}>Informe de personal</Text>
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

