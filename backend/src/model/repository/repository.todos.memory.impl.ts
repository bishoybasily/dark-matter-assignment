import {Todo} from "../entity/todo";
import RepositoryTodos from "./repository.todos";
import {injectable} from "inversify";

@injectable()
export default class RepositoryTodosMemoryImpl implements RepositoryTodos {

    private todos: Todo[] = [];

    constructor() {
        for (let i = 0; i < 5; i++)
            this.todos.push(Todo.from(i, `todo_${i}_title`, `todo_${i}_description`, false));
    }

    one(id): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {
            resolve(this.todos[id])
        });
    }

    all(): Promise<Todo[]> {
        return new Promise<Todo[]>((resolve, reject) => {
            resolve(this.todos)
        });
    }

    add(todo): Promise<Todo> {
        return new Promise((resolve, reject) => {
            todo.id = this.todos.length
            this.todos.push(todo);
            resolve(todo);
        });
    }

    update(id, todo): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {
            todo.id = Number.parseInt(id);
            this.todos[id] = todo;
            resolve(this.todos[id]);
        });
    }

    delete(id): Promise<Todo> {
        return new Promise((resolve, reject) => {
            let todo = this.todos[id];
            this.todos.splice(id, 1);
            resolve(todo);
        })
    }

}
