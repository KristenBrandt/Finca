import React,{useState, useEffect} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput, ScrollView,FlatList, Keyboard} from 'react-native';
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import { firebase } from '../Firebase';


export default function cc({navigation}) {
    const entityRef = firebase.firestore().collection('gastos')

    const [Gasto, setGasto] = useState('');
    const [Nombre,setNombre]= useState('');
    const [Descripcion,setDescripcion]= useState('');
    const [CentrodeCosto,setCentroCosto] =useState('');

    const [entities, setEntities] = useState([])

    useEffect(() => {
        entityRef
            .orderBy('createdAt', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        entity.id = doc.id
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const onAddButtonPress2 = () => {
        if ((Gasto && Gasto.length) > 0 && (Nombre && Nombre.length) >0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                Gasto_Quetzales: Gasto,
                Nombre: Nombre,
                Descripcion: Descripcion,
                CentrodeCosto_Asignado: CentrodeCosto,
                creadoEn: timestamp,
            };
            //revisar ese alert @Todo
            entityRef
                .add(data)
                .then(_doc => {
                    data
                    Keyboard.dismiss()
                    alert("Costo Agregado")

                })
                .catch((error) => {
                    alert(error)
                });


        }
    }
    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index}. {item.text}
                </Text>
            </View>
        )
    }

    return (
            <View style={styles.container} >
                <StatusBar style="auto" />
                <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                    <Image source={back} style={{width: 50, height: 50, paddingHorizontal: 5,marginBottom: 25, marginTop:20}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > Gasto en Quetzales </Text>
                    <TextInput style = {styles.input}
                               placeholder="Gasto"
                               placeholderTextColor="#283618"
                               onChangeText = {(gas)=>setGasto(gas)}

                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > Nombre </Text>
                    <TextInput style = {styles.input}
                               placeholder="Nombre de Objeto"
                               placeholderTextColor="#283618"
                               onChangeText = {(obj)=>setNombre(obj)}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > Descripción </Text>
                    <TextInput style = {styles.input}
                               placeholder="Descripción"
                               placeholderTextColor="#283618"
                               onChangeText = {(desc)=>setDescripcion(desc)}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > Centro de Costo </Text>
                    <TextInput style = {styles.input}
                               placeholder="Centro de Costo"
                               placeholderTextColor="#283618"
                               onChangeText = {(centro)=>setCentroCosto(centro)}
                    />
                </TouchableOpacity>
                < TouchableOpacity style={styles.button} onPress ={() => onAddButtonPress2()}>
                    <Text  style={{ fontSize: 22,color:'#fefae0'}} >Ingresar datos</Text>
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
        justifyContent: 'center',
        margin: 30,
        paddingHorizontal: 55,
        borderRadius: 20,
        height: 50,
        width: 280,
        borderColor: 'black',
        fontSize: 20,
        color: '#fefae0',
        backgroundColor: "#606C38"
    },
    input:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        margin: 20,
        borderRadius: 20,
        height: 50,
        width: 280,
        borderColor: 'black',
        fontSize: 15,
        backgroundColor: '#fefae0'
    },
    text: {
        color: '#fefae0',
        fontSize: 15

    },

});

