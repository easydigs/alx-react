import logo from './Holberton Logo.jpg';
document.addEventListener('DOMContentLoaded', function() {
  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'Sample Image';

  document.body.appendChild(img);
});