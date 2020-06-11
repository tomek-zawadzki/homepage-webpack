import '../scss/style.scss';



const buttonHamburger =  document.querySelector('.navigation__button--js')



buttonHamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js')
    nav.classList.toggle('navigation--open')

}) 
