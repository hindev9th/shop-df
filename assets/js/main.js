const btnToggeOpenNav = document.querySelector('#btn-menu-mobie');
const mainMenu = document.querySelector('#main-menu');
const btnCloseNav = document.querySelector('#btn-close');

btnToggeOpenNav.onclick = () => {
    mainMenu.classList.toggle('show');
}

btnCloseNav.onclick = () => {
    mainMenu.classList.toggle('show');
}