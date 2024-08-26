import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains the Notifications component', () => {
  expect(wrapper.find(Notifications).exists()).toEqual(true);
});

it('contains the Header component', () => {
  expect(wrapper.find(Header).exists()).toEqual(true);
});

it('contains the Login component', () => {
  expect(wrapper.find(Login).exists()).toEqual(true);
});

it('contains the Footer component', () => {
  expect(wrapper.find(Footer).exists()).toEqual(true);
});
