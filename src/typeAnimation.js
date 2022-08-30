
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
} else {
    typeAnimation.destroy();
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
});