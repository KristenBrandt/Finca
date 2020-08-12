import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StyleSheet, Text, Button, View, Image, TouchableOpacity, } from 'react-native';

import { CreateStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import logo from "./assets/logo.png"
import login from './screens/login'
import register from './screens/register'


export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <Image source={logo} style={{marginBottom: 50, width: 370, height: 400 }} />
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 28, fontFamily: 'Arial' }} >Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 28, fontFamily: 'Arial'}} >Usuario Nuevo</Text>
      </TouchableOpacity>
    </View>
  );
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
    margin: 30,
    backgroundColor: "#DDDDDD",
    padding:10,
    borderRadius: 50,
    height: 50,
    width: 250,
    borderColor: 'black',
    fontSize: 50,
    backgroundColor: '#fefae0',
  },
});
