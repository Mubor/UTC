const menuButton = document.getElementById('menu-button');
const header = document.querySelector('header');
const menu = document.querySelector('.header__menu');

const switchMenu = () => {
    header.classList.toggle('open');
    document.body.classList.toggle('overflow');
    
    if (header.classList[header.classList.length-1] === 'open') {
        menuButton.innerHTML = 'close menu';
    }
    else {
        menuButton.innerHTML = 'menu';
    }
}

menuButton.addEventListener('click', switchMenu);




