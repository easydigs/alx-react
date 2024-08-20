import $ from 'jquery';
import { debounce } from 'lodash';
import '../css/main.css';  // Import the CSS file

// Add elements to the body
$('body').prepend('<div id="logo"></div>');  // Add the logo at the top of the document
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
