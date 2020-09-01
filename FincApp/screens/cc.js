import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import back from "../assets/back.png";


const cc =({navigation})=> {
    const [Gasto, setGasto] = useState('');
    const [Nombre,setNombre]= useState('');
    const [Descripcion,setDescripcion]= useState('');
    const [CentrodeCosto,setCentroCosto] =useState('');


    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={()=>navigation.navigate('menu')}>
                <Image source ={back} style ={{width:50, height:50,paddingHorizontal:5,marginBottom:50}}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <TextInput style = {styles.input}
                           placeholder="Gasto"
                           onChange = {(gas)=>setGasto(gas)}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <TextInput style = {styles.input}
                           placeholder="Nombre de Objeto"
                           onChange = {(obj)=>setNombre(obj)}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <TextInput style = {styles.input}
                           placeholder="Descripcion"
                           onChange = {(desc)=>setDescripcion(desc)}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <TextInput style = {styles.input}
                           placeholder="Centro de Costo"
                           onChange = {(centro)=>setCentroCosto(centro)}
                />
            </TouchableOpacity>
            < TouchableOpacity>
                <Text style={styles.button}  >Ingresar datos</Text>
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
    button: {
        alignItems: 'center',
        margin: 25,
        paddingHorizontal: 30,
        paddingTop: 20,
        borderRadius: 50,
        height: 70,
        width: 270,
        borderColor: 'black',
        fontSize: 25,
        color: '#fefae0',
        backgroundColor: '#606C38',
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        margin: 20,
        borderRadius: 50,
        height: 70,
        width: 270,
        borderColor: 'black',
        fontSize: 20,
        backgroundColor: '#fefae0'
    },
    text: {
        color: '#fefae0',
        fontSize: 15

    }
});

export default cc
