import menuActivator from "../../lib/menu";
import { translatePage } from "../../lib/translator";

const currentLang = localStorage.getItem('lang');
console.log(currentLang);

menuActivator('menu-button', 'header');

window.onload = () => {
    if(currentLang !== 'eng') {
        translatePage('services', currentLang);
    }
}