import $ from 'jquery';
import '../css/header.css';

console.log('Init header');

$(document).ready(function() {
  $('body').prepend('<div id="logo"></div>');
  $('body').prepend('<h1>Holberton Dashboard</h1>');
});
