import{createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import 'react-native-gesture-handler';
import home from './screens/home';
import login from './screens/login';
import registrations from "./screens/registrations";
import menu from "./screens/menu";
import cc from "./screens/cc"
import personal from "./screens/personal"



const stackNavigator = createStackNavigator({
    home:{screen: home,
    navigationOptions:{
    header:null,
        headerShown:'false'}
    },
    login:{screen:login,
    navigationOptions:{
        headerShown:'false',
        header:null,}
    },
    registrations:{screen:registrations,
        navigationOptions:{
            headerShown:'false',
            header:null,}
    },
    menu:{screen:menu,
        navigationOptions:{
            headerShown:'false',
            header:null,}
    },
    cc:{screen:cc,
        navigationOptions:{
            headerShown:'false',
            header:null,}
    },
    personal:{screen:personal,
        navigationOptions:{
            headerShown:'false',
            header:null,}
    },
    initialRouteName:home
})

const App = createAppContainer(stackNavigator)
export default App


