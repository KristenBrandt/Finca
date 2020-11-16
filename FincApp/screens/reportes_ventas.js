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



export default function reportes_ventas({navigation}) {
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
