import {Todo} from "../entity/Todo";

export default interface RepositoryTodos {

    one(id): Todo

    all(): Todo[]

    add(todo): Todo

    update(id, todo): Todo

    delete(id): Todo

    hasId(id): boolean

    size(): number

}
