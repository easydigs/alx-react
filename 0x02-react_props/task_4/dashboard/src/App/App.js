import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </>
  );
}

// Set default props
App.defaultProps = {
  isLoggedIn: false,
};

// Define prop types
App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
