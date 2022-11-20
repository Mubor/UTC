import menuActivator from "../../lib/menu";
        
const calendarURL = "https://calendar.google.com/calendar/u/4?cid=dXQ5bWVsMmUxNmNpOW1lcTJ1dWJoZTBsMmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ";
const mediaContainer = document.getElementById('scroll-media');
const dialogButton = document.getElementById('dialog-open-button');
const closeButton = document.getElementById('close-button');
const appDialog = document.getElementById('dialog');
const form = document.forms.data;

const toggleDialogVisibility = (e) => {
    e.preventDefault();

    if(e.target === dialogButton && localStorage.getItem('formOpenAccess') === false) {
        window.location = calendarURL;
    }

    appDialog.hidden = !appDialog.hidden;
}

appDialog.hidden = true;

const scrollCenter = 989/2 - mediaContainer.clientWidth/2;
mediaContainer.scrollTo(scrollCenter, 0);

menuActivator('menu-button', 'header');

dialogButton.addEventListener('click', toggleDialogVisibility);
closeButton.addEventListener('click', toggleDialogVisibility);


const validateDate = (date) => {
    const inputedDate = new Date(date);
    
    if(inputedDate <= Date.now()){
        return false;
    }
    else return true;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if( !validateDate(form.time.value) ) {
        form.time.nextElementSibling.innerHTML = "The specified date must be greater than now";
    }

    const formDataArr = [...form.querySelectorAll('input:not(input#button)')];

    let request = {};

    for(let i = 0; i < formDataArr.length; i++) {
        request[formDataArr[i].name] = formDataArr[i].value;
    }

    let response = await fetch('/create', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(request),
    });
  
    await response.json();

    if(response.status === 200) {
        localStorage.setItem('formOpenAccess', false);
        window.location = calendarURL;
    }
    else {
        alert("Something went wrong, please check your input.");
    }
});

form.time.onchange = (e) => {
    const style = form.time.style;
    style.color = form.time.value === '' ? 'black' :  '#b2b2b2';
}