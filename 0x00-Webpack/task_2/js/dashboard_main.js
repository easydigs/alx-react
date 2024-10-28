import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

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

  const debouncedUpdate = _.debounce(updateCounter, 300);
  $('#click-btn').on('click', debouncedUpdate);
});
