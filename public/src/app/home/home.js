import menuActivator from "../../lib/menu";
import Typed from "typed.js";
import generate from "../../lib/generate";

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
window.onload = generate;
//menu activate
menuActivator('menu-button', 'header');
