import React from 'react';
import { StyleSheet, Text , View} from 'react-native';
import {StatusBar} from "expo-status-bar";


const cc =({navigation})=> {
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

export default cc
