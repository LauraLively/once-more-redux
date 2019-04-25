// import {apiURL} from '../../config';

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}

export function getTasks() {
  return function(dispatch) {
    return fetch('http://localhost:4040/tasks')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "TASKS_LOADED", payload: json})
    })
  }
}
export function getBoards() {
  return function(dispatch) {
    return fetch('http://localhost:4040/boards')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "BOARDS_LOADED", payload: json})
    })
  }
}
export function getLists() {
  return function(dispatch) {
    return fetch('http://localhost:4040/listByBoardId/5ca3f3181c9d4400000ac12d')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "LISTS_LOADED", payload: json})
    })
  }
}

export function getOneBoard() {
  return function(dispatch) {
    return fetch('http:localhost:4040/entireBoard/5ca3f3181c9d4400000ac12d')
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "ONE_BOARD_LOADED", payload: json})
    })
  }
}