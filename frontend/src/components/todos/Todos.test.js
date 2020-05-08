import React from 'react';
import {render} from '@testing-library/react';
import Todos from "./Todos";

test('renders todos table', () => {
  const {getByTestId} = render(<Todos/>);
  const linkElement = getByTestId("t-todos-table");
  expect(linkElement).toBeInTheDocument();
});

test('renders todos table container', () => {
  const {getByTestId} = render(<Todos/>);
  const linkElement = getByTestId("t-todos-table-container");
  expect(linkElement).toBeInTheDocument();
});

test('renders todos table toolbar', () => {
  const {getByTestId} = render(<Todos/>);
  const linkElement = getByTestId("t-todos-table-toolbar");
  expect(linkElement).toBeInTheDocument();
});

test('renders todos table head', () => {
  const {getByTestId} = render(<Todos/>);
  const linkElement = getByTestId("t-todos-table-head");
  expect(linkElement).toBeInTheDocument();
});

test('renders todos table body', () => {
  const {getByTestId} = render(<Todos/>);
  const linkElement = getByTestId("t-todos-table-body");
  expect(linkElement).toBeInTheDocument();
});
