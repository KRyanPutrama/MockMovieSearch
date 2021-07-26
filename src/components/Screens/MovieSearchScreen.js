import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'

const MovieSearchScreen = () => {
    const [userInput, setUserInput] = useState('')
    const [searchMovie, setSearchMovie] = useState()

    return (
      <View>
        <Text>Chat Screen</Text>
        <View
        style={{flexDirection: "row", justifyContent:'space-around',  alignItems: 'center'  }} 
        >
          <TextInput 
          placeholder="Find a movie"
          style={{borderWidth: 1, width: 200}}
          onChangeText={(input) => setUserInput(input)}
          value={userInput}

          />
          <TouchableOpacity
          style={{borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&query=${userInput}&page=1&include_adult=false`)
              .then(res => res.json()).then(res => setSearchMovie(res.results))
          }}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        data={searchMovie}
        keyExtractor={(e,i) => i}
        numColumns={2}
        renderItem={({item}) => {
          return(
            <TouchableOpacity>
            <Image 
              source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}}
              style={{width:150, height:200}}
            />
            <Text>{item.title}</Text>
          </TouchableOpacity>
          )
        }}
        />
      </View>
    )
  }

export default MovieSearchScreen