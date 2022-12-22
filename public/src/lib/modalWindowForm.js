
export const toggleDialogVisibility = (e) => {
    e.preventDefault();

    const appDialog = document.getElementById('dialog');
    // const wrapper = document.querySelector('.wrapper');
    const openButton = document.getElementById('dialog-open-button');

    if(e.target === openButton && localStorage.getItem('formOpenAccess') === false) {
        window.location = calendarURL;
    }
    
    appDialog.hidden = !appDialog.hidden;
    // wrapper.hidden = !wrapper.hidden;
    document.body.style.overflow = appDialog.hidden ? '' : 'hidden';
}


