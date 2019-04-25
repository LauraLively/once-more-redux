const boardsById = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      const boardId = boards._id;
      const listId = lists._id
      const { boardId, listId } = action.payload;
      return {
        ...state,
        [board._id]: {
          ...state[boardId],
          lists: [...state[boardId].lists, listId]
        }
      };
    }
    case 'MOVE_LIST': {
      const { oldListIndex, newListIndex, boardId } = action.payload;
      const newLists = Array.from(state[boardId].lists);
      const [removedList] = newLists.splice(oldListIndex, 1);
      newLists.splice(newListIndex, 0, removedList);
      return {
        ...state,
        [boardId]: {...state[boardId], lists: newLists}
      };
    }
    case 'DELETE_LIST': {
      const { listId: newListId, boardId } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          lists: state[boardId].lists.filter(listId => listId !== newListId)
        }
      };
    }
    case 'ADD-BOARD': {
      const {boardTitle, boardId, userId } = action.payload;
      return {
        ...state,
        [boardId]: {
          title: boardTitle,
          lists: [], 
        }
      };
    }
    case 'CHANGE_BOARD_TITLE': {
      const { boardTitle, boardId } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          title: boardTitle
        }
      };
    }
    case 'CHANGE_BOARD_COLOR': {
      const { boardId, color } = action.payload;
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          color
        }
      };
    }
    case 'DELETE_BOARD': {
      const { boardId } = action.payload;
      const { [boardId]: deleteBoard, restOdBoards } = state;
      return restOdBoards;
    }
    default:
      return state;
  }
};

export default boardsById;