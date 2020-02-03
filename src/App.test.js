import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

jest.mock('react-router-dom', () => ({
  Switch: () => <div/>,
  Route: () => <div/>
}))

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
