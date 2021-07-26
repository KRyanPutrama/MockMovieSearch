import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({navigation}) => {
    const [changeTextUsername, setTextUsername] = useState('')
    const [changeTextpPassword, setTextpPassword] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect( async () => {
        const value = await AsyncStorage.getItem('changeTextUsername')
    if(value === 'glints') {
        navigation.navigate('Home') 
    } else {
        setLoading(false)
    }
    }, [])

    if(loading) {
        return (
            <Text>Please Wait</Text>
        )
    }

    //Saving data with async storage
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('changeTextUsername', value)
        } catch (e) {
          // saving error
        }
      }

    //Get data from storage
    // const getData = async () => {
    // try {
    //     const value = await AsyncStorage.getItem('changeTextUsername')
    //     if(value !== null) {
    //     // value previously stored
    //     }
    // } catch(e) {
    //     // error reading value
    // }
    // }


    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={styles.inputText}>
            <Text>Username</Text>
            <TextInput placeholder="username"  style={styles.box} onChangeText={(e) => setTextUsername(e)} value={changeTextUsername} />
        </View>
        <View style={styles.inputText}>
            <Text>Password</Text>
            <TextInput placeholder="password" style={styles.box} onChangeText={(e) => setTextpPassword(e)} value={changeTextpPassword}/>
        </View>
        <TouchableOpacity onPress={async ()=> {
            if (changeTextUsername === 'glints' && changeTextpPassword === 'academy') {
                await storeData(changeTextUsername) 
                navigation.navigate('Home') 
            } else {
                Alert('Wrong pasword') 
            }
        }} >
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }

export default Login

const styles = StyleSheet.create({
    inputText: {
        flexDirection: 'row'
    },
    box: {
        borderWidth: 1,
    }
})