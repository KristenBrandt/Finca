import React,{useState} from 'react';
import {Image, StyleSheet, Text,Button, TouchableOpacity, View, TextInput, ScrollView,FlatList} from 'react-native';
import {StatusBar} from "expo-status-bar";
import back from "../assets/back.png";
import { firebase } from '../Firebase';



const ventas =({navigation,props})=> {
    //primeros datos
    const [Fecha, setFecha] = useState('')
    const [Envio,setEnvio] = useState('');
    const [Racimos, setRacimos] = useState('');
    const [Pepas, setPepas] = useState('');
    //segundos datos

    const [Penalizacion, setPenalizacion] = useState('');
    const [Total, setTotal] = useState('')
    const [Tonelada, setToneladas] = useState('')
    //terceros datos

    const [entities, setEntities] = useState([])

    const entityRef = firebase.firestore().collection('entities')
    const userID = props.extraData.id

    useEffect(() => {
        entityRef
            .where("authorID", "==", userID)
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
                text: Fecha + Envio + Racimos +Pepas +Penalizacion+ Total +Tonelada,
                authorID: userID,
                createdAt: timestamp,
            };
            entityRef
                .add(data)
                .then(_doc => {
                    setEntityText('')
                    Keyboard.dismiss()
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
        <ScrollView>
        <View style={styles.container} >
            <StatusBar style="auto" />
            <TouchableOpacity onPress={() => navigation.navigate('menu')}>
                <Image source={back} style={{width: 50, height: 50, paddingHorizontal: 5,marginBottom: 25, marginTop:20}}/>
            </TouchableOpacity>
            <Text style = {{color:'#bc6c25',fontSize: 25}}>Fruta enviada de la finca</Text>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Fecha'}
                           placeholderTextColor="#283618"
                           onChangeText = {(fecha)=>setFecha(fecha)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Número de Envio'}
                           placeholderTextColor="#283618"
                           onChangeText = {(envio)=>setEnvio(envio)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Número de Racimos'}
                           placeholderTextColor="#283618"
                           onChangeText = {(racimos)=>setRacimos(racimos)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Número de Pepas'}
                           placeholderTextColor="#283618"
                           onChangeText = {(pepa)=>setPepas(pepa)}
                />
            </TouchableOpacity>
            <Text style = {{color:'#bc6c25',fontSize: 25,alignSelf:'center'}}>Datos del recibo </Text>
            <Text style = {{color:'#bc6c25',fontSize: 25,alignSelf:'center'}}>Fruta Extractora Palmas del Ixcan</Text>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Número de Racimos'}
                           placeholderTextColor="#283618"
                           onChangeText = {(racimos)=>setRacimos(racimos)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Número de Pepas'}
                           placeholderTextColor="#283618"
                           onChangeText = {(pepa)=>setPepas(pepa)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Peso KG'}
                           placeholderTextColor="#283618"
                           onChangeText = {(pepa)=>setPepas(pepa)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Peso B'}
                           placeholderTextColor="#283618"
                           onChangeText = {(pepa)=>setPepas(pepa)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Peso T'}
                           placeholderTextColor="#283618"
                           onChangeText = {(pepa)=>setPepas(pepa)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Peso N'}
                           placeholderTextColor="#283618"
                           onChangeText = {(pepa)=>setPepas(pepa)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Toneladas'}
                           placeholderTextColor="#283618"
                           onChangeText = {(toneladas)=>setToneladas(toneladas)}
                />
            </TouchableOpacity>
            <Text style = {{color:'#bc6c25',fontSize: 25,alignSelf:'center'}}>Penalización</Text>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Pasados'}
                           placeholderTextColor="#283618"
                           onChangeText = {(pasados)=>setPasados(pasados)}
                />
            </TouchableOpacity>
            <TouchableOpacity >
                <TextInput style={styles.input}
                           placeholder={'Sob/Maduro'}
                           placeholderTextColor="#283618"
                           onChangeText = {(total)=>setTotal(total)}
                />
            </TouchableOpacity>
            < TouchableOpacity style={styles.button} onPress ={() => onAddButtonPress()}>
                <Text  style={{ fontSize: 22,color:'#fefae0'}} >Agregar Venta</Text>
            </TouchableOpacity>
            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
        </ScrollView>
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
        fontSize: 20,
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
    }
})

export default ventas
