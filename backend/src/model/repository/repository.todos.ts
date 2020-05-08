import {Todo} from "../entity/todo";

export default interface RepositoryTodos {

    one(id): Promise<Todo>

    all(): Promise<Todo[]>

    add(todo): Promise<Todo>

    update(id, todo): Promise<Todo>

    delete(id): Promise<Todo>

}
