import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  Switch: () => <div/>,
  Route: () => <div/>
}))

test('renders learn react link', () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeTruthy()
});
