import React,{useState} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput} from 'react-native';
import {StatusBar} from "expo-status-bar";
import logo from "../assets/logo.png";

const personal =({navigation})=> {
    return (
        <View style={styles.container} >
            <StatusBar style="auto" />
            <Text style={{color:"'#fefae0'"}}>En construcción ....</Text>
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

export default personal
