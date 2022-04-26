const menuBtn = document.querySelector('.menuBtn');
const navList = document.querySelector('.burger-menu');
const showcase = document.querySelector('.bg1');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('menu-active')
  // showcase.classList.toggle('bg-active')
});