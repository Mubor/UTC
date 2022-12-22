import menuActivator from "../../lib/menu";
import { toggleDialogVisibility } from "../../lib/modalWindowForm";

menuActivator('menu-button', 'header');

const buttons = document.querySelectorAll('.team__button');
const appDialog = document.getElementById('dialog');
const openButton = document.getElementById('dialog-open-button');
const closeButton = document.getElementById('close-button');

appDialog.hidden = true;

const slide = (e) => {
    const item = e.target.closest('.team__item');
    const back = item.querySelector('.team__back');

    back.classList.toggle('team__open');
};

[...buttons].forEach(element => {
    element.addEventListener('click', slide)
});

openButton.addEventListener('click', toggleDialogVisibility);
closeButton.addEventListener('click', toggleDialogVisibility);



