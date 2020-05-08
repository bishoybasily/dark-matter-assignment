import {NextFunction} from "express";

const middlewareValidator = (req: any, res: any, next: NextFunction) => {

    console.log('validator')

    next();

};
export {middlewareValidator}
