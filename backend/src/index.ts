import 'reflect-metadata';

import {InversifyExpressServer} from 'inversify-express-utils';

import * as bodyParser from 'body-parser';
import * as cors from 'cors'

import './controller/controller.todos';

import {Application} from "express";

import {container} from './container'

const server = new InversifyExpressServer(container);

server.setConfig((app: Application) => {
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
});

const application = server.build();

const PORT: number = Number.parseInt(process.env.PORT) || 5000;

application.listen(PORT, () => console.log('Running on port: ' + PORT));

exports = module.exports = application;
