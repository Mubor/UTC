import menuActivator from "../../lib/menu";

const mediaContainer = document.getElementById('scroll-media');
const scrollCenter = 989/2 - mediaContainer.clientWidth/2;
mediaContainer.scrollTo(scrollCenter, 0);

menuActivator('menu-button', 'header');