import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders the main app div', () => {
  const {getByTestId} = render(<App/>);
  const linkElement = getByTestId("t-app-div");
  expect(linkElement).toBeInTheDocument();
});
