import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MovieScreen from '../Screens/Moviescreen';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

const MovieStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Moviescreen" component={MovieScreen}/>
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

export default MovieStack
