//toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navLists = document.querySelector('nav');

  burger.addEventListener('click', () => {
    navLists.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
};

// Up toggle
window.addEventListener('scroll', function () {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.querySelector('.back-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
