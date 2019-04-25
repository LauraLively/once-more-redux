const tasksById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const { taskText, taskId } = action.payload;
      return {
        ...state,
        [taskId]: { text: taskText, _id: taskId }
      };
    }
    case 'CHANGE_TASK_TEXT': {
      const { taskText, taskId } = action.payload;
      return {
        ...state,
        [taskId]: { ...state[taskId], text: taskText }
      };
    }
    case 'CHANGE_TASK_DATE': {
      const { date, taskId } = action.payload;
      return {
        ...state,
        [taskId]: { ...state[taskId], date }
      };
    }
    case 'CHANGE_TASK_COLOR': {
      const { color, taskId } = action.payload;
      return {
        ...state,
        [taskId]: { ...state[taskId], color }
      };
    }
    case 'DELETE_TASK': {
      const { taskId } = action.payload;
      const { [taskId] : deleteTask, ...restOfTasks } = state;
      return restOfTasks;
    }
    case 'DELETE_LIST': {
      const { tasks: taskIds } = action.payload;
      return Object.keys(state)
        .filter(taskId => !taskIds.includes(taskId))
        .reduce(
          (newState, taskId) => ({ ...newState, [taskId]: state[taskId] }),
          {}
        );
    }
    default:
      return state;
  }
};

export default tasksById;