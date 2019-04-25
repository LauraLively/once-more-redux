import { 
  TASKS_LOADED,
  BOARDS_LOADED,
  LISTS_LOADED,
  ONE_BOARD_LOADED
 } from "../constants/action-types";
const initialState = {
  tasks:[],
  lists:[],
  boards:[],
  // board: {}
};
function rootReducer(state = initialState, action) {
  
  if (action.type === TASKS_LOADED) {
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    });
  }
  if (action.type === LISTS_LOADED) {
    return Object.assign({}, state, {
      lists: state.lists.concat(action.payload)
    });
  }
  if (action.type === ONE_BOARD_LOADED) {
    return Object.assign({}, state, {
      board: state.board.concat(action.payload)
    });
  }
  if (action.type === BOARDS_LOADED){
    return Object.assign({}, state, {
      boards:state.boards.concat(action.payload)
    })
  }
  return state;
}
export default rootReducer;


//This is my combineReducers for my reducers
// import { combineReducers } from 'redux';
// import tasksById from './tasksById';
// import listsById from './listsById';
// import boardsById from './boardsById';
// import users from './users';
// import isGuest from './isGuest';
// import currentBoardId from './currentBoardId';

// export default combineReducers({
//   tasksById,
//   listsById,
//   boardsById,
//   users,
//   isGuest,
//   currentBoardId
// });