import store from "./store";

export const CREATE_TODO = "create_todo";
export const UPDATE_TODO = "update_todo";
export const REMOVE_TODO = "remove_todo";

export const createTodo = (title, description) => {
    store.dispatch({
        type: CREATE_TODO,
        payload: {
            title: title,
            description: description
        }
    })
}
export const updateTodo = (id, title, description, done) => {
    store.dispatch({
        type: UPDATE_TODO,
        payload: {
            id: id,
            title: title,
            description: description,
            done: done
        }
    })
}
export const removeTodo = (id) => {
    store.dispatch({
        type: REMOVE_TODO,
        payload: {
            id: id
        }
    })
}
