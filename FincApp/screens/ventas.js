import React,{useState} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput} from 'react-native';
import {StatusBar} from "expo-status-bar";
import logo from "../assets/logo.png";
import back from "../assets/back.png";

const ventas =({navigation})=> {
    const [Racimos, setRacimos] = useState('');
    const [Pepas, setPepas] = useState('');
    const [Penalizacion, setPenalizacion] = useState('');
    const [Total, setTotal] = useState('')
    const [Tonelada, setToneladas] = useState('')
    return (
        <View style={styles.container} >
            <StatusBar style="auto" />
            <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <Image source={back} style={{width: 50, height: 50, paddingHorizontal: 5,marginBottom: 25}}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Número de Racimos'}
                           onChangeText = {(racimos)=>setRacimos(racimos)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Toneladas'}
                           onChangeText = {(toneladas)=>setToneladas(toneladas)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Número de Pepas'}
                           onChangeText = {(pepa)=>setPepas(pepa)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Penalización'}
                           onChangeText = {(penalizacion)=>setPenalizacion(penalizacion)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Total'}
                           onChangeText = {(total)=>setTotal(total)}
                />
            </TouchableOpacity>
            < TouchableOpacity style={styles.button}>
                <Text  style={{ fontSize: 22,color:'#fefae0'}} >Agregar Venta</Text>
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
        margin: 30,
        paddingHorizontal: 55,
        borderRadius: 50,
        height: 50,
        width: 250,
        borderColor: 'black',
        color: '#fefae0',
        backgroundColor: "#606C38"
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        margin: 15,
        borderRadius: 50,
        height: 50,
        width: 250,
        borderColor: 'black',
        fontSize: 20,
        backgroundColor: '#fefae0'
    }
})

export default ventas
