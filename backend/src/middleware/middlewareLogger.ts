import {NextFunction} from "express";

const middlewareLogger = (req: any, res: any, next: NextFunction) => {

    next();

};
export {middlewareLogger}
