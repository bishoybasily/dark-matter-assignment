import React from 'react';
import {render} from '@testing-library/react';
import CreateTodo from "./CreateTodo";


test('renders create todo form', () => {
    const {getByTestId} = render(<CreateTodo/>);
    const linkElement = getByTestId("t-create-todo-form");
    expect(linkElement).toBeInTheDocument();
});

test('renders create todo input title', () => {
    const {getByTestId} = render(<CreateTodo/>);
    const linkElement = getByTestId("t-create-todo-input-title");
    expect(linkElement).toBeInTheDocument();
});

test('renders create todo input description', () => {
    const {getByTestId} = render(<CreateTodo/>);
    const linkElement = getByTestId("t-create-todo-input-description");
    expect(linkElement).toBeInTheDocument();
});

test('renders create todo submit', () => {
    const {getByTestId} = render(<CreateTodo/>);
    const linkElement = getByTestId("t-create-todo-submit");
    expect(linkElement).toBeInTheDocument();
});
