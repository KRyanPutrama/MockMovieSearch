import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity 
            onPress={async()=> {
            await AsyncStorage.removeItem('changeTextUsername')
            navigation.navigate('Login')
            navigation.setLoading(false)
        }}>
            <Text>Log out</Text>
        </TouchableOpacity>
    </View>
    )
}

export default HomeScreen