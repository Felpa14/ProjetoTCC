import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './Pages/Dashboard';
import Agenda from './Pages/Agenda';
import Cavalos from './Pages/Cavalos';
import Clientes from './Pages/Clientes';
import Estoque from './Pages/Estoque';

import {Entypo, Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        tabBarOptions={{
            style:{
                backgroundColor: '#121212',
                borderTopColor: 'transparent' 
            },
            activeTintColor : 'blue',
        }}
        >
        <Tab.Screen name= "Dashboard" component={Dashboard}/>
        <Tab.Screen name= "Agenda" component={Agenda}/>
        <Tab.Screen name= "Cavalos" component={Cavalos}/>
        <Tab.Screen name= "Clientes" component={Clientes}/>
        <Tab.Screen name= "Estoque" component={Estoque}/>
        </Tab.Navigator>
    )
}