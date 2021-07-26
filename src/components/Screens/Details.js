import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Details = ({route}) => {
    const [moviesDetails, setMoviesDetails] = useState({})
    const {movie_id} = route.params
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US`)
        .then(res => res.json()).then(res=> setMoviesDetails(res))
    }, [])
    

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center' }}>
            <Text>Title: {moviesDetails.title}</Text>
            <Image 
            source={{uri: "https://image.tmdb.org/t/p/w500" + moviesDetails.backdrop_path}}
            style={{height: 200, width:200}}
            />
            <Text>Overview: {moviesDetails.overview}</Text>
            <Text>Status: {moviesDetails.status}</Text>
            <Text>Rating: {moviesDetails.vote_average}</Text>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})
