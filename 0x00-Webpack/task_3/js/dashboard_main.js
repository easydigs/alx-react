import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;  // Initialize count outside of the function

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="click-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  const debouncedUpdate = _.debounce(updateCounter, 500);
  $('#click-btn').on('click', debouncedUpdate);
});
