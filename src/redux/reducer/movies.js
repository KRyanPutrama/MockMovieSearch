const initialState = {
    moviesData : [],
    tempMovieData : [],
    searchInput : ''
}

const movies = (state = initialState, action) => {
    switch(action.type) {
        case "GET_MOVIES": 
            return {
                ...state,
                moviesData : action.movies
            };
        case "SEARCH_INPUT":
            return {
                ...state,
                searchInput : action.search
            }
        case "FILTER_MOVIES":
            return {
                ...state,
                moviesData : action.filter
            }
        default:
            return state
    }
}

export default movies;