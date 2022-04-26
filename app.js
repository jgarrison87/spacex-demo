const navSlide = () => {
  const burger = document.querySelector('.menuBtn');
  const navLinks = document.querySelector('.burger-menu');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('burger-menu-active');
  });
} 

navSlide();
