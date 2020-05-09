import {injectable} from "inversify";
import {Todo} from "../entity/Todo";
import {container, TODOS_REPOSITORY} from "../../container";
import RepositoryTodos from "../repository/repository.todos";
import RuntimeException from "../RuntimeException";

@injectable()
export default class ServiceTodos {

    private repositoryTodos: RepositoryTodos

    constructor() {
        this.repositoryTodos = container.get<RepositoryTodos>(TODOS_REPOSITORY)
    }

    /**
     * retrieves one todo by id
     * @param id
     */
    one(id): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {

            if (!this.repositoryTodos.hasId(id)) {
                reject(RuntimeException.from(404, "not found"));
                return;
            }

            resolve(this.repositoryTodos.one(id))

        });
    }

    /**
     * retrieves all todos
     */
    all(): Promise<Todo[]> {
        return new Promise<Todo[]>(resolve => resolve(this.repositoryTodos.all()));
    }

    /**
     * creates a new uncompleted todo after validating the presence of its attrs
     * @param todo
     */
    add(todo): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {

            let title = todo.title;
            let description = todo.description;
            if (title === undefined || title === '' || description === undefined || description === '') {
                reject(RuntimeException.from(400, "bad request"));
                return;
            }

            todo.id = this.repositoryTodos.size();
            todo.done = false;
            resolve(this.repositoryTodos.add(todo));

        });
    }

    /**
     * updates existing todo by its id
     * @param id
     * @param todo
     */
    update(id, todo): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {

            if (!this.repositoryTodos.hasId(id)) {
                reject(RuntimeException.from(404, "not found"));
                return;
            }

            let title = todo.title;
            let description = todo.description;
            let done = todo.done;
            if (title === undefined || title === '' || description === undefined || description === '' || done === undefined) {
                reject(RuntimeException.from(400, "bad request"));
                return;
            }

            resolve(this.repositoryTodos.update(id, todo))

        });
    }

    /**
     * deletes existing todo by id
     * @param id
     */
    delete(id): Promise<Todo> {
        return new Promise<Todo>((resolve, reject) => {

            if (!this.repositoryTodos.hasId(id)) {
                reject(RuntimeException.from(404, "not found"));
                return;
            }

            resolve(this.repositoryTodos.delete(id))

        });
    }

}
