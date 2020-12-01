import React,{useState, useEffect} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput, ScrollView,FlatList, Keyboard} from 'react-native';
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import { firebase } from '../Firebase';
import ventas from "../assets/ventas.png";
import backimg from "../assets/back.png";

import {Bar} from 'react-chartjs-2';



export default function reportes_ventas({navigation}) {

    const entityRef = firebase.firestore().collection('ventas')

    function get_all_ventas(){
    entityRef
        .collection("ventas")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data); // array of ventas objects
        })
    };

    function una_fecha(fecha){
        entityRef
            .collection("ventas")
            .doc(fecha)
            .get()
            .then(doc => {
                const data = doc.data();
                console.log(data); // ventas object with key-value pair
            })
    }
    function una_especifica(){
        entityRef
            .collection("ventas")
            .where("Fecha_enviada", "==", "Hoy")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data); // array of ventas objects
            });
    }


    //TODO
    const back = () => {navigation.navigate('menu_ventas')}
    return(
        <View style={styles.container}>

            <StatusBar style="auto"/>
            <TouchableOpacity onPress={() => back()}>
                <Image source={backimg} style={{width: 50, height: 50, paddingHorizontal: 5, marginBottom: 100}}/>
            </TouchableOpacity>
            <Text Reportes/>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
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
        color: '#fefae0',
        backgroundColor: "#606C38"
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
        fontSize: 15,
        backgroundColor: '#fefae0'
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },
    text:{
        color: '#fefae0',
        fontSize: 15
    }
})
