import {Container} from "inversify";
import ServiceTodos from "./model/service/service.todos";
import RepositoryTodosMemoryImpl from "./model/repository/repository.todos.memory.impl";
import RepositoryTodos from "./model/repository/repository.todos";
import {RequestHandler} from "express";
import {middlewareLogger} from "./middleware/middlewareLogger";
import {middlewareValidator} from "./middleware/middlewareValidator";
import ControllerTodos from "./controller/controller.todos";
import {middlewareCors} from "./middleware/middlewareCors";

const container = new Container();

const TODOS_REPOSITORY = "repositoryTodos";
const TODOS_SERVICE = "serviceTodos";
const TODOS_CONTROLLER = "controllerTodos";

const MIDDLEWARE_LOGGER = "middlewareLogger";
const MIDDLEWARE_VALIDATOR = "middlewareValidator";
const MIDDLEWARE_CORS = "middlewareCors";

container.bind<RepositoryTodos>(TODOS_REPOSITORY).to(RepositoryTodosMemoryImpl).inSingletonScope();
container.bind<ServiceTodos>(TODOS_SERVICE).to(ServiceTodos).inSingletonScope();
container.bind<ControllerTodos>(TODOS_CONTROLLER).to(ControllerTodos).inSingletonScope();

container.bind<RequestHandler>(MIDDLEWARE_LOGGER).toConstantValue(middlewareLogger);
container.bind<RequestHandler>(MIDDLEWARE_VALIDATOR).toConstantValue(middlewareValidator);
container.bind<RequestHandler>(MIDDLEWARE_CORS).toConstantValue(middlewareCors);


export {container}
export {TODOS_REPOSITORY}
export {TODOS_SERVICE}
export {TODOS_CONTROLLER}
export {MIDDLEWARE_LOGGER}
export {MIDDLEWARE_CORS}
export {MIDDLEWARE_VALIDATOR}

