import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from '../actions/index.js'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}



export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
                moviesFavourites: [...state.moviesFavourites, action.payload]
            };

        case GET_MOVIES:
            return {
                ...state,
                moviesLoaded: action.payload.Search
            };

        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload 
            };

        case REMOVE_MOVIE_FAVORITE:
            const newFavourite = state.moviesFavourites.filter((movie) => 
            movie.imdbID !== action.payload.id)
            return {
                ...state,
                moviesFavourites: newFavourite
            };

        default:
            return state;
    }
}