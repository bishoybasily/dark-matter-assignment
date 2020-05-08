import {Container} from "inversify";
import ServiceTodos from "./model/service/service.todos";
import RepositoryTodosMemoryImpl from "./model/repository/repository.todos.memory.impl";
import RepositoryTodos from "./model/repository/repository.todos";
import {RequestHandler} from "express";
import {middlewareLogger} from "./middleware/middlewareLogger";
import {middlewareValidator} from "./middleware/middlewareValidator";

const container = new Container();

const TODOS_REPOSITORY = "repositoryTodos";
const TODOS_SERVICE = "serviceTodos";

const MIDDLEWARE_LOGGER = "middlewareLogger";
const MIDDLEWARE_VALIDATOR = "middlewareValidator";


container.bind<ServiceTodos>(TODOS_SERVICE).to(ServiceTodos).inSingletonScope();
container.bind<RepositoryTodos>(TODOS_REPOSITORY).to(RepositoryTodosMemoryImpl).inSingletonScope();

container.bind<RequestHandler>(MIDDLEWARE_LOGGER).toConstantValue(middlewareLogger);
container.bind<RequestHandler>(MIDDLEWARE_VALIDATOR).toConstantValue(middlewareValidator);


export {container}
export {TODOS_REPOSITORY}
export {TODOS_SERVICE}
export {MIDDLEWARE_LOGGER}
export {MIDDLEWARE_VALIDATOR}

