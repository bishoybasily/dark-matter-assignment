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
        let byId = this.getById(id);
        todo.id = Number.parseInt(id);
        this.todos[this.todos.indexOf(byId)] = todo;
        return todo;
    }

    delete(id): Todo {
        let byId = this.getById(id);
        this.todos.splice(this.todos.indexOf(byId), 1);
        return byId;
    }

    hasId(id): boolean {
        return this.todos.filter(it => it.id.toString() === id.toString()).length === 1
    }

    size(): number {
        return this.todos.length
    }

    private getById(id): Todo {
        return this.todos.filter(it => it.id.toString() === id.toString())[0]
    }


}
