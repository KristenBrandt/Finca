import React,{useState} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput} from 'react-native';
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import personal from "../assets/personal.png"
import cc from "../assets/cc.png"
import ventas from "../assets/ventas.png"



const menu =({navigation})=> {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <Image source={back} style={{width: 50, height: 50, paddingHorizontal: 5,marginBottom: 25}}/>
            </TouchableOpacity>
            < TouchableOpacity onPress={() => navigation.navigate('cc')}>
                <Image source={cc} style={{height: 200,width: 200,borderRadius:50,margin:10}}/>
            </TouchableOpacity>
            < TouchableOpacity onPress={() => navigation.navigate('personal')} >
                <Image source={personal} style={{height: 200, width: 200,borderRadius:50,margin:10}}/>
            </TouchableOpacity>
            < TouchableOpacity onPress={() => navigation.navigate('ventas')}>
                <Image source={ventas} style={{height: 200,width: 200,borderRadius:50,margin:10}}/>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#283618',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default menu




