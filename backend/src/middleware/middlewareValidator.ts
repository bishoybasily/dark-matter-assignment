import {NextFunction} from "express";

const middlewareValidator = (req: any, res: any, next: NextFunction) => {

    next();

};
export {middlewareValidator}
