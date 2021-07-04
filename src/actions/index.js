export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';

export function addMovieFavorite(payload) {
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    }
}

export function getMovies(name) {
    return function (dispatch) {
        return fetch('http://www.omdbapi.com/?apikey=20dac387&s=' + name)
            .then(r => r.json())
            .then(json => dispatch({
                type: GET_MOVIES,
                payload: json,
            }))
    }
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch('http://www.omdbapi.com/?apikey=20dac387&i=' + id)
            .then(r => r.json())
            .then(json => dispatch({
                type: GET_MOVIE_DETAIL,
                payload: json,
            }))
    }
}
export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}