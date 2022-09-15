import menuActivator from "../../lib/menu";
import Masonry from "masonry-layout";

menuActivator('menu-button', 'header');


const grid = document.querySelector('.grid');

window.onload = () => {
    const masonry = new Masonry(grid, {
        itemSelector: '.grid__item',
        columnWidth: '.grid__sizer',
        gutter: '.grid__gutter-sizer',
        percentPosition: true
    });
}

