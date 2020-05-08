import 'reflect-metadata';
import {Container} from "inversify";

import {InversifyExpressServer} from 'inversify-express-utils';

import * as bodyParser from 'body-parser';

import {Application} from "express";

const server = new InversifyExpressServer(new Container());

server.setConfig((app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
});

const application = server.build();

const PORT: number = Number.parseInt(process.env.PORT) || 3000;

application.listen(PORT, () => console.log('Running on port: ' + PORT));

exports = module.exports = application;
