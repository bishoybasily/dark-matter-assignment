import {controller, httpDelete, httpGet, httpPatch, httpPost, interfaces} from "inversify-express-utils";
import {container, MIDDLEWARE_CORS, MIDDLEWARE_LOGGER, MIDDLEWARE_VALIDATOR, TODOS_SERVICE} from "../container";
import ServiceTodos from "../model/service/service.todos";
import RuntimeException from "../model/RuntimeException";


@controller("/api/todos", MIDDLEWARE_LOGGER, MIDDLEWARE_VALIDATOR, MIDDLEWARE_CORS)
export default class ControllerTodos implements interfaces.Controller {

    private serviceTodos: ServiceTodos

    constructor() {
        this.serviceTodos = container.get<ServiceTodos>(TODOS_SERVICE)
    }

    @httpGet("/:id")
    one(req: any, res: any, next: any): Promise<void> {
        return this.serviceTodos.one(req.params.id)
            .then(it => res.json(it))
            .catch((it: RuntimeException) => res.status(it.code).end(it.msg))
    }

    @httpGet("/")
    all(req: any, res: any, next: any): Promise<void> {
        return this.serviceTodos.all()
            .then(it => res.json(it))
            .catch((it: RuntimeException) => res.status(it.code).end(it.msg))
    }

    @httpPost("/")
    add(req: any, res: any, next: any): Promise<void> {
        return this.serviceTodos.add(req.body)
            .then(it => res.json(it))
            .catch((it: RuntimeException) => res.status(it.code).end(it.msg));
    }

    @httpPatch("/:id")
    update(req: any, res: any, next: any): Promise<void> {
        return this.serviceTodos.update(req.params.id, req.body)
            .then(it => res.json(it))
            .catch((it: RuntimeException) => res.status(it.code).end(it.msg));
    }

    @httpDelete("/:id")
    delete(req: any, res: any, next: any): Promise<void> {
        return this.serviceTodos.delete(req.params.id)
            .then(it => res.json(it))
            .catch((it: RuntimeException) => res.status(it.code).end(it.msg));
    }

}
