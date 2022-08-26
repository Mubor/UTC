const menuButton = document.getElementById('menu-button');
const header = document.querySelector('header');
const menu = document.querySelector('.header__menu');

const changeContent = (element, content) => {
    element.innerHTML = content;
}

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

const initTypeAnimation = () => {
    return new Typed('#type-container', {
        strings: ['hello dude ', 'hello dude '],
        // stringsElement:null,
        loop:true,
        loopCount: Infinity,
        typeSpeed: 200,
        backSpeed: 60,
        backDelay: 6000
    });
}

let typeAnimation;
let animationCanStart = true;

if(document.documentElement.clientWidth > 830) {
    typeAnimation = initTypeAnimation()
    typeAnimation.start();
    animationCanStart = false;
}

window.addEventListener('resize', () => {
    console.log(document.documentElement.clientWidth);
    if(document.documentElement.clientWidth <= 831 && typeAnimation) {
        typeAnimation.destroy();
        animationCanStart = true
    }
    else if (animationCanStart) {
        typeAnimation = initTypeAnimation();
        typeAnimation.start();
        animationCanStart = false;
    }
})


