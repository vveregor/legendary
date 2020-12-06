import {FETCH_POSTS, SET_USER} from "./types";


export function fetchPosts(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const json = await response.json()
        dispatch({type: FETCH_POSTS, payload: json})
    }
}

export function setUser(data){
    return dispatch => {
        dispatch({type: SET_USER, payload: data})
    }
}