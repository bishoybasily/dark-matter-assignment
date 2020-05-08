import {NextFunction} from "express";

const middlewareLogger = (req: any, res: any, next: NextFunction) => {

    console.log('logger')

    next();

};
export {middlewareLogger}
