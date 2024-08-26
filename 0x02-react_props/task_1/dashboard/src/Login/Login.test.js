import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});

it('renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});

it('renders two input tags', () => {
  expect(wrapper.find('input').length).toEqual(2);
});

it('renders two label tags', () => {
  expect(wrapper.find('label').length).toEqual(2);
});
