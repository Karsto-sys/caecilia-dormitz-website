  window.addEventListener('scroll', function () {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');

    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  });