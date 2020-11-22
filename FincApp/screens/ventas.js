import React,{useState, useEffect} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput, ScrollView,FlatList, Keyboard} from 'react-native';
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import { firebase } from '../Firebase';



export default function ventas({navigation}) {

    const entityRef = firebase.firestore().collection('ventas')

//primeros datos
    const [Fecha, setFecha] = useState('');
    const [Envio,setEnvio] = useState('');
    const [Racimos, setRacimos] = useState('');
    const [Pepas, setPepas] = useState('');
    //segundos datos
    const [Racimos_Res, setRacimos2 ] = useState('');
    const [Pepas_Res, setPepas2] = useState('');
    const [PesoKG, setPesoKG] = useState("");
    const [PesoB, setPesoB] = useState("");
    const [Pesot, setPesoT] = useState('');
    const [PesoN, setPesoN]= useState('');
    const [Tonelada, setToneladas] = useState('')


// terceros datos
    const [Pasados, setPasados] =useState('')
    const [Sob, setSob] = useState('')


    //terceros datos

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

    const onAddButtonPress = () => {
        if (Envio && Envio.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                Fecha_Enviada: Fecha,
                Numero_Envio: Envio ,
                Racimos_Enviados: Racimos ,
                Pepas_Enviadas:Pepas ,
                Racimos_Recibidos: Racimos_Res,
                Pepas_Recibidas: Pepas_Res,
                PesoKG: PesoKG,
                PesoB: PesoB,
                PesoT: Pesot,
                PesoN: PesoN,
                Toneladas: Tonelada,
                Pasados: Pasados,
                Sob_Maduro:Sob ,
                creadoEn: timestamp,
            };
            //revisar ese alert @Todo
            entityRef
                .add(data)
                .then(_doc => {
                    data
                    Keyboard.dismiss()
                    alert("Venta Agregada")

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

    return(
        <ScrollView>
            <View style={styles.container} >
                <StatusBar style="auto" />
                <TouchableOpacity onPress={() => navigation.navigate('menu_ventas')}>
                    <Image source={back} style={{width: 50, height: 50, paddingHorizontal: 5,marginBottom: 25, marginTop:20}}/>
                </TouchableOpacity>
                <Text style = {{color:'#bc6c25',fontSize: 20}}>Fruta enviada de la finca</Text>
                <TouchableOpacity >
                    <Text style= {styles.text} > Fecha </Text>
                    <TextInput style={styles.input}
                               placeholder={'Fecha'}
                               placeholderTextColor="#283618"
                               onChangeText = {(fecha)=>setFecha(fecha)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Número de Envio </Text>
                    <TextInput style={styles.input}
                               placeholder={'Número de Envio'}
                               placeholderTextColor="#283618"
                               onChangeText = {(envio)=>setEnvio(envio)}


                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Número de Racimos </Text>
                    <TextInput style={styles.input}
                               placeholder={'Número de Racimos'}
                               placeholderTextColor="#283618"
                               onChangeText = {(racimos)=>setRacimos(racimos)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Número de Pepas </Text>
                    <TextInput style={styles.input}
                               placeholder={'Número de Pepas'}
                               placeholderTextColor="#283618"
                               onChangeText = {(pepa)=>setPepas(pepa)}

                    />
                </TouchableOpacity>
                <Text style = {{color:'#bc6c25',fontSize: 20,alignSelf:'center'}}>Datos del recibo </Text>
                <Text style = {{color:'#bc6c25',fontSize: 20,alignSelf:'center'}}>Fruta Extractora Palmas del Ixcán</Text>
                <TouchableOpacity >
                    <Text style= {styles.text} > Número de Racimos </Text>
                    <TextInput style={styles.input}
                               placeholder={'Número de Racimos'}
                               placeholderTextColor="#283618"
                               onChangeText = {(racimos_1)=>setRacimos2(racimos_1)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Número de Pepas </Text>
                    <TextInput style={styles.input}
                               placeholder={'Número de Pepas'}
                               placeholderTextColor="#283618"
                               onChangeText = {(pepa2)=>setPepas2(pepa2)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Peso KG </Text>
                    <TextInput style={styles.input}
                               placeholder={'Peso KG'}
                               placeholderTextColor="#283618"
                               onChangeText = {(peso1)=>setPesoKG(peso1)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Peso B </Text>
                    <TextInput style={styles.input}
                               placeholder={'Peso B'}
                               placeholderTextColor="#283618"
                               onChangeText = {(peso2)=>setPesoB(peso2)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Peso T </Text>
                    <TextInput style={styles.input}
                               placeholder={'Peso T'}
                               placeholderTextColor="#283618"
                               onChangeText = {(peso3)=>setPesoT(peso3)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Peso N </Text>
                    <TextInput style={styles.input}
                               placeholder={'Peso N'}
                               placeholderTextColor="#283618"
                               onChangeText = {(peso4)=>setPesoN(peso4)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Toneladas </Text>
                    <TextInput style={styles.input}
                               placeholder={'Toneladas'}
                               placeholderTextColor="#283618"
                               onChangeText = {(toneladas)=>setToneladas(toneladas)}

                    />
                </TouchableOpacity>
                <Text style = {{color:'#bc6c25',fontSize: 20,alignSelf:'center'}}>Penalización</Text>
                <TouchableOpacity >
                    <Text style= {styles.text} > Pasados </Text>
                    <TextInput style={styles.input}
                               placeholder={'Pasados'}
                               placeholderTextColor="#283618"
                               onChangeText = {(pasados)=>setPasados(pasados)}

                    />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style= {styles.text} > Sob/Maduro </Text>
                    <TextInput style={styles.input}
                               placeholder={'Sob/Maduro'}
                               placeholderTextColor="#283618"
                               onChangeText = {(sob)=>setSob(sob)}

                    />
                </TouchableOpacity>
                < TouchableOpacity style={styles.button} onPress ={() => onAddButtonPress()}>
                    <Text  style={{ fontSize: 22,color:'#fefae0'}} >Agregar Venta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>


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

