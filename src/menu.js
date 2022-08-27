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

const initTypeAnimation = (typeText, isLooped = true) => {
    return new Typed('#type-container', {
        strings: [typeText],
        loop: isLooped,
        loopCount: Infinity,
        typeSpeed: 200,
        backSpeed: 60,
        backDelay: 6000,
    });
}

const typeText = document.getElementById('type-source').innerHTML;
const isLooped = JSON.parse(document.getElementById('type-loop').innerHTML);
let typeAnimation;
let animationCanStart = true;

if(document.documentElement.clientWidth > 830) {
    typeAnimation = initTypeAnimation(typeText, isLooped)
    typeAnimation.start();
    animationCanStart = false;
}

window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth <= 831 && typeAnimation) {
        typeAnimation.destroy();
        animationCanStart = true
    }
    else if (animationCanStart) {
        typeAnimation = initTypeAnimation(typeText, isLooped);
        typeAnimation.start();
        animationCanStart = false;
    }
})


