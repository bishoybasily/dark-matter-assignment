import * as actions from "./actions";


export const reducer = (state = {todos: []}, action) => {

    let payload = action.payload;
    let type = action.type;

    switch (type) {

        case actions.CREATE_TODO: {

            let todos = state.todos;
            return {
                ...state,
                todos: [
                    ...todos, {
                        id: payload.id,
                        title: payload.title,
                        description: payload.description,
                        done: payload.done
                    }
                ]
            };
        }

        case actions.REMOVE_TODO: {
            let todos = state.todos;
            return {
                ...state,
                todos: todos.filter(it => it.id !== payload.id)
            };
        }

        case actions.UPDATE_TODO: {
            let todos = state.todos;
            return {
                ...state,
                todos: todos.map(it => {
                    if (it.id === payload.id) {
                        it.title = payload.title;
                        it.description = payload.description;
                        it.done = payload.done;
                    }
                    return it;
                })
            };
        }

        case actions.INITIALIZE_TODOS: {
            return {
                ...state,
                todos: payload
            };
        }

        default: {
            return state;
        }

    }

}
