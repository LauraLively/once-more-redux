const listsById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const { listId, taskId } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], tasks: [...state[listId].tasks, taskId] }
      };
    }
    case 'MOVE_TASK': {
      const {
        oldTaskIndex,
        newTaskIndex,
        sourceListId,
        destListId
      } = action.payload;
      //move in same list
      if (sourceListId === destListId) {
        const newTasks = Array.from(state[sourceListId].tasks);
        const [removedTask] = newTasks.splice(oldTaskIndex, 1);
        newTasks.splice(newTaskIndex, 0, removedTask);
        return {
          ...state,
          [sourceListId]: { ...state[sourceListId], tasks: newTasks }
        };
      }
      //move from one list to another
      const sourceTasks = Array.from(state[sourceListId].tasks);
      const [removedTask] = sourceTasks.splice(oldTaskIndex, 1);
      const destinationTasks = Array.from(state[destListId].tasks);
      destinationTasks = Array.splice(newTaskIndex, 0, removedTask);
      return {
        ...state,
        [sourceListId]: { ...state[sourceListId], tasks: sourceTasks},
        [destListId]: { ...state[destListId], tasks: destinationTasks}
      };
    }
    case 'DELETE_TASK': {
      const { taskId: newTaskId, listId } = action.payload;
      return {
        ...state,
        [listId]: {
          ...state[listId],
          tasks: state[listId].tasks.filter(taskId => taskId !== newTaskId)
        }
      };
    }
    case 'ADD_LIST': {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { _id: listId, title: listTitle, tasks: [] }
      };
    }
    case 'CHANGE_LIST_TITLE': {
      const { listId, listTitle } = action.payload;
      return {
        ...state,
        [listId]: { ...state[listId], title: listTitle }
      };
    }
    case 'DELETE_LIST': {
      const { listId } = action.payload;
      const { [listId]: deletedList, ...restOfLists } = state;
      return restOfLists;
    }
    default: 
      return state;
  }
};

export default listsById;