import {NextFunction} from "express";

const middlewareValidator = (req: any, res: any, next: NextFunction) => {

    // if (req.headers['x-Gateway-ApiKey'] !== 'some value') {
    //     res.status(401).end("invalid api key")
    //     return;
    // }
    //
    // if (req.headers['csrf-token'] === 'some other value') {
    //     res.status(401).end("invalid csrf token")
    //     return;
    // }

    next();

};
export {middlewareValidator}
