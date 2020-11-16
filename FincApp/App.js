import 'react-native-gesture-handler';
import React, { useEffect, useState} from 'react'
import {FlatList} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from "./screens/login";
import registrations from "./screens/registrations";
import home from "./screens/home";
import menu from "./screens/menu";
import cc from "./screens/cc";
import personal from "./screens/personal";
import ventas from "./screens/ventas";
import reportes_ventas from "./screens/reportes_ventas";
import { firebase } from './Firebase';
import {decode, encode} from 'base-64'
import CC from "./screens/cc";
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


/*
// Esto es para hacer que el user no se tenga que log in cada vez que abre la applicacion
    if (loading) {
        return (
            <></>
        )
    }

    useEffect(() => {
        const usersRef = firebase.firestore().collection('users');
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                usersRef
                    .doc(user.uid)
                    .get()
                    .then((document) => {
                        const userData = document.data()
                        setLoading(false)
                        setUser(userData)
                    })
                    .catch((error) => {
                        setLoading(false)
                    });
            } else {
                setLoading(false)
            }
        });
    }, []);

*/

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={'none'}>
                { user ? (
                    <Stack.Screen name="menu"  >
                        {props => <menu {...props} extraData={user}  />}
                    </Stack.Screen>

                ) : (
                    <>
                        <Stack.Screen name="home" component={home} />
                        <Stack.Screen name="login" component={login} />
                        <Stack.Screen name="registrations" component={registrations} />
                        <Stack.Screen name="menu" component={menu}/>
                        <Stack.Screen name ="personal" component={personal}/>
                        <Stack.Screen name ="cc" component={cc}/>
                        <Stack.Screen name ="ventas" component={ventas}/>
                        <Stack.Screen name ="reportes_ventas" component={reportes_ventas}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

/* <Stack.Screen name="menu" component={menu}/> */
