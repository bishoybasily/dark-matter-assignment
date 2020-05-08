import React from 'react';
import './App.scss';
import Todos from "./todos/Todos";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CreateTodo from "./create-todo/CreateTodo";
import UpdateTodo from "./update-todo/UpdateTodo";

export default function App() {

    return (
        <BrowserRouter>
            <div data-testid="t-app-div" className="App">
                <Switch>
                    <Route path="/todos/:id/update" exact component={UpdateTodo}/>
                    <Route path="/todos/create" exact component={CreateTodo}/>
                    <Route path="/todos" exact component={Todos}/>
                    <Route path="/" exact component={Todos}/>
                </Switch>
            </div>
        </BrowserRouter>
    );

};
