import {Todo} from "../entity/Todo";
import RepositoryTodos from "./repository.todos";
import {injectable} from "inversify";

@injectable()
export default class RepositoryTodosMemoryImpl implements RepositoryTodos {

    private todos: Todo[] = [];

    constructor() {
        for (let i = 0; i < 5; i++)
            this.todos.push(Todo.from(i, `todo_${i}_title`, `todo_${i}_description`, false));
    }

    one(id): Todo {
        return this.todos[id];
    }

    all(): Todo[] {
        return this.todos;
    }

    add(todo): Todo {
        todo.id = this.todos.length
        this.todos.push(todo);
        return todo;
    }

    update(id, todo): Todo {
        todo.id = Number.parseInt(id);
        this.todos[id] = todo;
        return this.todos[id];
    }

    delete(id): Todo {
        let todo = this.todos[id];
        this.todos.splice(id, 1);
        return todo;
    }

    hasId(id): boolean {
        try {
            let it = Number.parseInt(id);
            return it >= 0 && it < this.todos.length
        } catch (e) {
            return false;
        }
    }

    size(): number {
        return this.todos.length
    }


}
