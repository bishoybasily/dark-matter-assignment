import React from 'react';
import {render} from '@testing-library/react';
import UpdateTodo from "./UpdateTodo";
import * as actions from "../../redux/actions";

beforeEach(() => {
    actions.createTodo("title", "description");
});

test('renders update todo form', () => {
    const {getByTestId} = render(<UpdateTodo match={{params: {id: 1}}}/>);
    const linkElement = getByTestId("t-update-todo-form");
    expect(linkElement).toBeInTheDocument();
});

test('renders update todo input title', () => {
    const {getByTestId} = render(<UpdateTodo match={{params: {id: 1}}}/>);
    const linkElement = getByTestId("t-update-todo-input-title");
    expect(linkElement).toBeInTheDocument();
});

test('renders update todo input description', () => {
    const {getByTestId} = render(<UpdateTodo match={{params: {id: 1}}}/>);
    const linkElement = getByTestId("t-update-todo-input-description");
    expect(linkElement).toBeInTheDocument();
});

test('renders update todo submit', () => {
    const {getByTestId} = render(<UpdateTodo match={{params: {id: 1}}}/>);
    const linkElement = getByTestId("t-update-todo-submit");
    expect(linkElement).toBeInTheDocument();
});
