import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, searchInput, filteredMovie } from '../../redux/thunks/moviesThunk'



const MovieScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([])
  const [userInput, setUserInput] = useState('')
  const [tempMovies, setTempMovies] = useState()
  const movies_redux = useSelector(state => state.movie.moviesData)

  const searchInput_redux = useSelector(state => state.movie.searchInput)

  // console.log(movies)
  // console.log(movies_redux)
  useEffect(async() => {
    await dispatch(getMovies())
    // fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&page=1')
    //   .then(res => res.json())
    //   .then(res => {
    //     setTempMovies(res.results)
    //     setMovies(res.results)
    //   })
    setMovies(movies_redux)
  }, [])

  return (
      <View style={styles.scrollView} >
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems:'center'}}>
          <TextInput 
          placeholder="filter movies"
          style={{borderWidth:1}} 
          onChangeText={(input) => {
            setUserInput(input)
            dispatch(getMovies())
          }}
          value={userInput}
          />
          <TouchableOpacity 
          style={{borderWidth: 1}}
          onPress={() =>{
              dispatch(filteredMovie(movies_redux, userInput))
              setUserInput('')

            
            // if(userInput.length === 0) {
            // //   setMovies(tempMovies)
            // } else {
            //   movies_redux.filter((item) => item.title.includes(userInput.toLowerCase()))
            //   let filteredMovie = movies.filter(
            //   item => item.title.includes(userInput.toLowerCase()));
            //   setMovies(filteredMovie)
            // }

          }}>
            <Text>Filter</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
        data={movies_redux}
        keyExtractor={(item, i) => i}
        numColumns={2}
        renderItem={({item}) => {
          return(
          <TouchableOpacity onPress={() => navigation.navigate('Details', {movie_id: item.id})}>
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

export default MovieScreen

const styles = StyleSheet.create({
  scrollView: {
    flex:1, 
    alignItems:'center', 
    justifyContent:'center'
  }
})