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

//type effect

const type = new Typed('#type-container', {
    strings: ['hello dude', 'hello dude '],
    // stringsElement:null,
    loop:true,
    loopCount: Infinity,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 10000
});
debugger;
type.start();

