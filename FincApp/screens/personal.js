import React,{useState, useEffect} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput, ScrollView,FlatList, Keyboard} from 'react-native';
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import { firebase } from '../Firebase';


export default function personal({navigation}) {
    const entityRef = firebase.firestore().collection('personal')

    const [Nombre, setNombre] = useState('');
    const [Apellido,setApellido]= useState('');
    const [Dpi,setDPI]= useState('');
    const [Celular,setCelular] =useState('');
    const [Emergencia, setEmergencia] = useState('');

    const [entities, setEntities] = useState([]);

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

    const onAddButtonPress3 = () => {
        if ((Nombre && Nombre.length) > 0 && (Apellido && Apellido.length) >0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                Nombre: Nombre,
                Apellido: Apellido,
                DPI_trabajadror: Dpi,
                Celular: Celular,
                Numero_de_Emergencia: Emergencia,
                creadoEn: timestamp,
            };
            //revisar ese alert @Todo
            entityRef
                .add(data)
                .then(_doc => {
                    data
                    Keyboard.dismiss()
                    alert("Trabajador Agregado")

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
                    <Text style= {styles.text} > Nombre* </Text>
                    <TextInput style = {styles.input}
                               placeholder="Nombre*"
                               placeholderTextColor="#283618"
                               onChangeText = {(nom)=>setNombre(nom)}

                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > Apellido* </Text>
                    <TextInput style = {styles.input}
                               placeholder="Apellido*"
                               placeholderTextColor="#283618"
                               onChangeText = {(ap)=>setApellido(ap)}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > DPI </Text>
                    <TextInput style = {styles.input}
                               placeholder="DPI"
                               placeholderTextColor="#283618"
                               onChangeText = {(dp)=>setDPI(dp)}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > Número de celular </Text>
                    <TextInput style = {styles.input}
                               placeholder="Número de celular"
                               placeholderTextColor="#283618"
                               onChangeText = {(cel)=>setCelular(cel)}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style= {styles.text} > Número de emergencia </Text>
                    <TextInput style = {styles.input}
                               placeholder="Número de emergencia"
                               placeholderTextColor="#283618"
                               onChangeText = {(emer)=>setEmergencia(emer)}
                    />
                </TouchableOpacity>
                < TouchableOpacity style={styles.button} onPress ={() => onAddButtonPress3()}>
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
