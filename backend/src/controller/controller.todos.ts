import {NextFunction, Request, Response} from "express";
import {controller, httpDelete, httpGet, httpPatch, httpPost, interfaces} from "inversify-express-utils";
import {MIDDLEWARE_LOGGER, MIDDLEWARE_VALIDATOR, TODOS_SERVICE} from "../container";
import {inject} from "inversify";
import ServiceTodos from "../model/service/service.todos";


@controller("/api/todos", MIDDLEWARE_LOGGER, MIDDLEWARE_VALIDATOR)
export class ControllerUsers implements interfaces.Controller {

    constructor(@inject(TODOS_SERVICE) private serviceTodos: ServiceTodos) {
    }

    @httpGet("/:id")
    one(req: Request, res: Response, next: NextFunction) {
        return this.serviceTodos.one(req.params.id)
    }

    @httpGet("/")
    all(req: Request, res: Response, next: NextFunction) {
        return this.serviceTodos.all()
    }

    @httpPost("/")
    add(req: Request, res: Response, next: NextFunction) {
        return this.serviceTodos.add(req.body)
    }

    @httpPatch("/:id")
    update(req: Request, res: Response, next: NextFunction) {
        return this.serviceTodos.update(req.params.id, req.body)
    }

    @httpDelete("/:id")
    delete(req: Request, res: Response, next: NextFunction) {
        return this.serviceTodos.delete(req.params.id)
    }

}
