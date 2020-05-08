import {injectable} from "inversify";
import {Todo} from "../entity/todo";
import {container, TODOS_REPOSITORY} from "../../container";
import RepositoryTodos from "../repository/repository.todos";


@injectable()
export default class ServiceTodos {

    private repositoryTodos: RepositoryTodos

    constructor() {
        this.repositoryTodos = container.get<RepositoryTodos>(TODOS_REPOSITORY)
    }

    one(id): Promise<Todo> {
        return this.repositoryTodos.one(id);
    }

    all(): Promise<Todo[]> {
        return this.repositoryTodos.all();
    }

    add(todo): Promise<Todo> {
        return this.repositoryTodos.add(todo);
    }

    update(id, todo): Promise<Todo> {
        return this.repositoryTodos.update(id, todo);
    }

    delete(id): Promise<Todo> {
        return this.repositoryTodos.delete(id);
    }

}
