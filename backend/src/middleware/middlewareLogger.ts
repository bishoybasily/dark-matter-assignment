import {NextFunction} from "express";
import * as fs from 'fs'

const middlewareLogger = (req: any, res: any, next: NextFunction) => {

    let request = {
        path: req.path,
        query: req.query,
        body: req.body,
        params: req.params,
        headers: req.headers
    };

    fs.appendFile('access_logs.jsonl', JSON.stringify(request) + "\n", function () {
        console.log('Saved!');
    });

    next();

};
export {middlewareLogger}
