import menuActivator from "../../lib/menu";


menuActivator('menu-button', 'header');

const buttons = document.querySelectorAll('.team__item:not(.team__item:first-child) .team__button');
const slideOpenButton = document.querySelector('.team__front>.team__button');
const slideCloseButton = document.querySelector('.team__back>.team__button');

const swap = (event) => {
    const item = event.target.closest('.team__item');
    // turning the card
    
        const front = item.querySelector('.team__front');
        const back = item.querySelector('.team__back');
        let frontTransformDeg = 0;
        let backTransformDeg = 180;

        if (back.style.transform !== 'rotateY(360deg)') {
            frontTransformDeg = 180;
            backTransformDeg = 360;
        }

        front.style.transform = `rotateY(${frontTransformDeg}deg)`;
        back.style.transform = `rotateY(${backTransformDeg}deg)`;
}

[...buttons].forEach(element => {
    element.addEventListener('click', swap)
})

const slide = (e) => {
    const item = e.target.closest('.team__item');
    const back = item.querySelector('.team__back');
    
    const isOpened = back.classList.contains('team__open');

    back.classList.toggle('team__open');

    // isOpened ? back.classList.remove('team__open') : 
    //     back.classlist.add('team__open');
}


slideOpenButton.addEventListener('click', slide);
slideCloseButton.addEventListener('click', slide);
