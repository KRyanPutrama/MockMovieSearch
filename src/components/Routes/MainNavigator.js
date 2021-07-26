import React from 'react'
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Homescreen';
import MovieSearchScreen from '../Screens/MovieSearchScreen';
import MovieStack from './MovieStack';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Homescreen" component={HomeScreen} />
            <Tab.Screen name="Moviescreen" component={MovieStack} />
            <Tab.Screen name="MovieSearchScreen" component={MovieSearchScreen} />
        </Tab.Navigator>
    )
}

export default MainNavigator