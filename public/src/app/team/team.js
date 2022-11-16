import menuActivator from "../../lib/menu";

menuActivator('menu-button', 'header');

const buttons = document.querySelectorAll('.team__button');

const slide = (e) => {
    const item = e.target.closest('.team__item');
    const back = item.querySelector('.team__back');

    back.classList.toggle('team__open');
};

[...buttons].forEach(element => {
    element.addEventListener('click', slide)
});

