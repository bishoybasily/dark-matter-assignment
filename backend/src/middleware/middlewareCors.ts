import {NextFunction} from "express";

const middlewareCors = (req: any, res: any, next: NextFunction) => {

    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Credentials", true);
    // res.header("Access-Control-Allow-Headers", "*");
    // res.header("Access-Control-Allow-Methods", "*");

    next();

};
export {middlewareCors}
