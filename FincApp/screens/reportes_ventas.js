import React,{useState, useEffect} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput, ScrollView,FlatList, Keyboard} from 'react-native';
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import { firebase } from '../Firebase';
import cc from "../assets/cc.png";
import personal from "../assets/personal.png";
import ventas from "../assets/ventas.png";
import backimg from "../assets/back.png";
import TextStylePropTypes from "react-native-web/dist/exports/Text/TextStylePropTypes";
import { firebase } from '../Firebase';



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
    const back = () => {navigation.navigate('menu')}
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
