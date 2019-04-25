import { denormalize, schema } from 'normalizr';

//Persist the board to the database after every action.

const persisMiddleware = store => next => action => {
    next(action);
    const {
        user,
        boardsById,
        listsById,
        currentBoardId: boardId
    } = store.getState();

    //nothing is persisted for guest users
    if (user) {
        if (action.type === 'DELETE_BOARD') {
            fetch('', { //api goes here
                method: 'DELETE',
                body: JSON.stringify({ boardId }),
                headers:{
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            //All action-types that are not DELETE_BOARD or PUT_BOARD_ID_IN_REDUX are currently
            //modifying a board that should be persisted to the db. If other types of actions
            //are added, this logic will get out of control quickly.
        }else if (action.type !=='PUT_BOARD_ID_IN_REDUX') {
            //need to transform the flattened board state structure into the tree-shaped structure that db uses. 
            const task = new schema.Entity(
                'tasksById', 
                {}, 
                { isAttribute: '_id'});
            const list = new schema.Entity(
                'listsById',
                { tasks: [task] },
                { idAttribute: '_id'}
            );
            const board = new schema.Entity(
                'boardsById',
                { lists: [list] },
                { isAttribute: '_id'}
            );
            const entities = { tasksById, listsById, boardsById };

            const boardData = denormalize(boardId, board, entities);

            fetch('', { //API goes here
                method: 'PUT',
                body: JSON.stringify(boardData),
                headers: { 'Content-Type' : 'application/json' },
                credentials: 'include'

            });
        }
    }
};

export default persisMiddleware;