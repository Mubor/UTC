
const menuActivator = (buttonSelector, moveDownElementSelector) => {
    const menuButton = document.getElementById(buttonSelector);
    const header = document.querySelector(moveDownElementSelector);

    const switchMenu = () => {
        header.classList.toggle('open');
        document.body.classList.toggle('overflow');
        
        if (header.classList[header.classList.length-1] === 'open') {
            menuButton.innerHTML = 'close menu';
        }
        else {
            menuButton.innerHTML = 'menu';
        }
    }

    menuButton.addEventListener('click', switchMenu);
}

export default menuActivator;




