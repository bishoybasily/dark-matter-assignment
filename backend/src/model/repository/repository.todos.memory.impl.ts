import {Todo} from "../entity/todo";
import RepositoryTodos from "./repository.todos";
import {injectable} from "inversify";

@injectable()
export default class RepositoryTodosMemoryImpl implements RepositoryTodos {

    one(id): Promise<Todo> {
        return Promise.resolve(Todo.from(1, "todo_1"));
    }

    all(): Promise<Todo[]> {
        return Promise.resolve([Todo.from(1, "todo_1"), Todo.from(2, "todo_2")]);
    }

    add(todo): Promise<Todo> {
        return Promise.resolve(todo)
    }

    update(id, todo): Promise<Todo> {
        return Promise.resolve(todo)
    }

    delete(id): Promise<Todo> {
        return Promise.resolve(Todo.from(1, "todo_1"));
    }

}
