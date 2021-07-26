import axios from "axios"

export function getMovies(param1, param2) {
    return async (dispatch, getState) => {
        try {
            const resMovies = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=9c4e75bc7c12882201bbc19a846352ba&language=en-US&page=1');
            dispatch({
                type: 'GET_MOVIES',
                movies: resMovies.data.results
            })
            return {message: 'success', movies: resMovies.data.results};
        }
        catch(err) {
            return {message: err.message, codeStatus: 400};
        }
    }
}

export function searchInput(text) {
    console.log(text)
    return {
        type: 'SEARCH_INPUT',
        search: text
    }
}

export function filteredMovie(data, input) {
    let movieFiltered = data.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
    return {
        type: 'FILTER_MOVIES',
        filter : movieFiltered
    }
}