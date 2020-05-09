import store from "./store";
import axios from "axios";
import {BASE_URL} from "../index";

export const CREATE_TODO = "create_todo";
export const UPDATE_TODO = "update_todo";
export const REMOVE_TODO = "remove_todo";
export const INITIALIZE_TODOS = "initialize_todos";

export const createTodo = (title, description) => {
    axios.post(BASE_URL + "api/todos", {
        title,
        description
    }, {headers: {'Content-Type': 'application/json'}}).then(it => {
        store.dispatch({
            type: CREATE_TODO,
            payload: it.data
        });
    });
}
export const updateTodo = (id, title, description, done) => {
    axios.patch(BASE_URL + "api/todos/" + id, {
        title,
        description,
        done
    }, {headers: {'Content-Type': 'application/json'}}).then(it => {
        store.dispatch({
            type: UPDATE_TODO,
            payload: it.data
        });
    });
}
export const removeTodo = (id) => {
    axios.delete(BASE_URL + "api/todos/" + id).then(it => {
        store.dispatch({
            type: REMOVE_TODO,
            payload: it.data
        });
    });
}

export const initializeTodos = () => {
    axios.get(BASE_URL + "api/todos").then(it => {
        store.dispatch({
            type: INITIALIZE_TODOS,
            payload: it.data
        });
    });
}
