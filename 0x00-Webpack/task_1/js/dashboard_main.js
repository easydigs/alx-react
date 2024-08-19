import $ from 'jquery';
import { debounce } from 'lodash';

// Add elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

// Function to update the counter
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the button click event
$('#clickButton').on('click', debounce(updateCounter, 500));
