import menuActivator from "../../lib/menu";
import { toggleDialogVisibility } from "../../lib/modalWindowForm";
import { translatePage } from "../../lib/translator";

menuActivator('menu-button', 'header');

const buttons = document.querySelectorAll('.team__button');
const appDialog = document.getElementById('dialog');
const openButton = document.getElementById('dialog-open-button');
const closeButton = document.getElementById('close-button');
const form = document.forms.letter
const currentLang = localStorage.getItem('lang');

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

const messageFormer = (form) => {
    const formChildArr = form.children;
    let res = '';
    for (const element of formChildArr) {
        if(element.className === 'app-dialog__message') {
            res+=element.innerHTML;
        } 
        else if (element.id !== 'message' && element.attributes.for.textContent !== 'button') {
            res += ' ' + form[element.attributes.for.textContent].value + '.'
        }
    }
    
    console.log(res);
    return res;
}

form.addEventListener('submit', async e => {
    e.preventDefault();
    
    let request = {
        username: form.fullname.value,
        message: messageFormer(form)
    }
    
    let response = await fetch('/send', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(request),
    });
  
    await response.json();

    if(response.status === 200) {
      console.log("sent")
    }
    else {
        alert("Something went wrong, please check your input.");
    }
})

window.onload = () => {
    if(currentLang !== 'eng') {
        translatePage('home', currentLang);
    }
}


