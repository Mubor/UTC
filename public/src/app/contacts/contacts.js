import menuActivator from "../../lib/menu";
        
const mediaContainer = document.getElementById('scroll-media');
const dialogButton = document.getElementById('dialog-open-button');
const closeButton = document.getElementById('close-button');
const appDialog = document.getElementById('dialog');

const toggleDialogVisibility = (e) => {
    e.preventDefault();
    appDialog.hidden = !appDialog.hidden;
}

appDialog.hidden = true;

const scrollCenter = 989/2 - mediaContainer.clientWidth/2;
mediaContainer.scrollTo(scrollCenter, 0);

menuActivator('menu-button', 'header');

dialogButton.addEventListener('click', toggleDialogVisibility);
closeButton.addEventListener('click', toggleDialogVisibility);

document.forms.data.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formDataArr = [...document.forms.data.querySelectorAll('input:not(input#button)')];

    let request = {};

    for(let i = 0; i < formDataArr.length; i++) {
        request[formDataArr[i].name] = formDataArr[i].value;
    }

    console.log(request);

    let response = await fetch('/create', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(request),
    });
  
    let result = await response.json();

    window.location = "https://calendar.google.com/calendar/u/4?cid=dXQ5bWVsMmUxNmNpOW1lcTJ1dWJoZTBsMmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";
});