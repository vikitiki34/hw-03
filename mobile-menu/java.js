document.addEventListener('DOMContentLoaded', function() {
  var menu = document.getElementById('menu');
  var mobileMenu = document.getElementById('mobileMenu');

  menu.addEventListener('click', function() {
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
  });
});
