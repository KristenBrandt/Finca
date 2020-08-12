import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>register</Text>
            </View>
        );
    }
}
export default register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
