import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  $('body').append('<button id="click-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  const debouncedUpdate = _.debounce(updateCounter, 500);
  $('#click-btn').on('click', debouncedUpdate);
});
