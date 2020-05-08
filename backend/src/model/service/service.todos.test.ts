import 'reflect-metadata';
import {injectable} from "inversify";
import {Todo} from "../entity/Todo";
import RepositoryTodos from "../repository/repository.todos";
import {container, TODOS_REPOSITORY, TODOS_SERVICE} from "../../container";
import ServiceTodos from "./service.todos";
import RuntimeException from "../RuntimeException";

const fakeOne = jest.fn();
const fakeAll = jest.fn();
const fakeAdd = jest.fn();
const fakeUpdate = jest.fn();
const fakeDelete = jest.fn();
const fakeHasId = jest.fn();
const fakeSize = jest.fn();

@injectable()
class RepositoryTodosFakeImpl implements RepositoryTodos {

    one(id): Todo {
        return fakeOne();
    }

    all(): Todo[] {
        return fakeAll();
    }

    add(todo): Todo {
        return fakeAdd();
    }

    update(id, todo): Todo {
        return fakeUpdate();
    }

    delete(id): Todo {
        return fakeDelete();
    }

    hasId(id): boolean {
        return fakeHasId();
    }

    size(): number {
        return fakeSize();
    }

}

beforeEach(() => {
    container.unbind(TODOS_REPOSITORY);
    container.bind<RepositoryTodos>(TODOS_REPOSITORY).to(RepositoryTodosFakeImpl).inSingletonScope();
});

test('one :: should return todo', () => {

    let serviceTodos: ServiceTodos = container.get(TODOS_SERVICE);

    let todo = Todo.from(1, "abc", "def", false);
    fakeOne.mockReturnValueOnce(todo);
    fakeHasId.mockReturnValueOnce(true);

    serviceTodos.one(1).then(it => {
        expect(it).toBe(todo);
    });

});
test('one :: should return 404', () => {

    let serviceTodos: ServiceTodos = container.get(TODOS_SERVICE);

    fakeHasId.mockReturnValueOnce(false);

    serviceTodos.one(1).catch(it => {
        expect(it).toStrictEqual(RuntimeException.from(404, "not found"));
    });

});
test('all :: should return todos', () => {
    let serviceTodos: ServiceTodos = container.get(TODOS_SERVICE);

    let todos = [Todo.from(1, "abc", "def", false)];
    fakeAll.mockReturnValueOnce(todos);

    serviceTodos.all().then(it => {
        expect(it).toBe(todos);
    });

});
test('add :: should return 400', () => {

    let serviceTodos: ServiceTodos = container.get(TODOS_SERVICE);

    serviceTodos.add({title: "only this prop"}).catch(it => {
        expect(it).toStrictEqual(RuntimeException.from(400, "bad request"));
    });

});
test('add :: should return todo', () => {

    let serviceTodos: ServiceTodos = container.get(TODOS_SERVICE);
    let todo = Todo.from(1, "abc", "def", false);
    fakeAdd.mockReturnValueOnce(todo);

    serviceTodos.add({title: "title", description: "description"}).then(it => {
        expect(it).toBe(todo);
    });

});
test('delete :: should return todo', () => {

    let serviceTodos: ServiceTodos = container.get(TODOS_SERVICE);

    let todo = Todo.from(1, "abc", "def", false);
    fakeDelete.mockReturnValueOnce(todo);
    fakeHasId.mockReturnValueOnce(true);

    serviceTodos.delete(1).then(it => {
        expect(it).toBe(todo);
    });

});
test('delete :: should return 404', () => {

    let serviceTodos: ServiceTodos = container.get(TODOS_SERVICE);

    fakeHasId.mockReturnValueOnce(false);

    serviceTodos.delete(1).catch(it => {
        expect(it).toStrictEqual(RuntimeException.from(404, "not found"));
    });

});

