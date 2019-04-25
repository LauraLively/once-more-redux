import { 
  TASKS_LOADED 
} from "../constants/action-types";
const initialState = {
  tasks:[]
};
function myTasks(state = initialState, action) {
  if (action.type === TASKS_LOADED) {
    return Object.assign({}, state, {
      tasks: state.tasks.concat(action.payload)
    });
  }
  return state;
}
export default myTasks;
