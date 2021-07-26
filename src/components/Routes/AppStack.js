import React from 'react'
import Login from '../Screens/Login'
import MainNavigator from './MainNavigator'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
       <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={MainNavigator} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

export default AppStack

