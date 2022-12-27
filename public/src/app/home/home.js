import menuActivator from "../../lib/menu";
import Typed from "typed.js";
import generate from "../../lib/generate";
import { translatePage } from "../../lib/translator";

const typeText = document.getElementById('type-source').innerHTML;
const isLooped = JSON.parse(document.getElementById('type-loop').innerHTML);
let typeAnimation;
let animationCanStart = true;

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


// start/destroy animation when browser size is desktop/mobile width
if (document.documentElement.clientWidth > 830) {
    typeAnimation = initTypeAnimation(typeText, isLooped)
    typeAnimation.start();
    animationCanStart = false;
} else {
    if(typeAnimation) {
        typeAnimation.destroy();
    }
}

// start/destroy animation when browser resized to desktop/mobile width
window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth <= 831 && typeAnimation) {
        if(typeAnimation) {
            typeAnimation.destroy();
            animationCanStart = true;
        }
    }
    else if (animationCanStart) {
        typeAnimation = initTypeAnimation(typeText, isLooped);
        typeAnimation.start();
        animationCanStart = false;
    }
});

//generate random teammate from sample after reload
//menu activate
menuActivator('menu-button', 'header');

//language switchers 

const uaButton = document.getElementById('ua');
const engButton = document.getElementById('eng');
const currentLang = localStorage.getItem('lang') || 'eng';

const langButton = document.getElementById(currentLang);

const resetActiveClass = (buttons,activeClass) => {
    buttons.forEach((elem) => {
        elem.classList.remove(activeClass);
	});
}

const changeLang = (e) => {
    const activeClass = 'language__elem--current';
    const itemClass = '.language__elem';
    
    if( e.target.classList.contains(activeClass) ) {
        return;
    }
    
    resetActiveClass([...document.querySelectorAll(itemClass)], activeClass);
    e.target.closest(itemClass).classList.add(activeClass);
    localStorage.setItem('lang', e.target.id);
    translatePage('home', e.target.id)
    console.log(currentLang)
}

uaButton.onclick = changeLang;
engButton.onclick = changeLang;

window.onload = () => {
    generate();
    
    langButton.closest('.language__elem').classList.add('language__elem--current');
    if(currentLang !== 'eng') {
        translatePage('home', currentLang);
    }
}