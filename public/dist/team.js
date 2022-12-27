/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/app/team/team.js":
/*!*************************************!*\
  !*** ./public/src/app/team/team.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/menu */ \"./public/src/lib/menu.js\");\n/* harmony import */ var _lib_modalWindowForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/modalWindowForm */ \"./public/src/lib/modalWindowForm.js\");\n/* harmony import */ var _lib_translator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/translator */ \"./public/src/lib/translator.js\");\n\r\n\r\n\r\n\r\n(0,_lib_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('menu-button', 'header');\r\n\r\nconst buttons = document.querySelectorAll('.team__button');\r\nconst appDialog = document.getElementById('dialog');\r\nconst openButton = document.getElementById('dialog-open-button');\r\nconst closeButton = document.getElementById('close-button');\r\nconst form = document.forms.letter\r\nconst currentLang = localStorage.getItem('lang');\r\n\r\nappDialog.hidden = true;\r\n\r\nconst slide = (e) => {\r\n    const item = e.target.closest('.team__item');\r\n    const back = item.querySelector('.team__back');\r\n\r\n    back.classList.toggle('team__open');\r\n};\r\n\r\n[...buttons].forEach(element => {\r\n    element.addEventListener('click', slide)\r\n});\r\n\r\nopenButton.addEventListener('click', _lib_modalWindowForm__WEBPACK_IMPORTED_MODULE_1__.toggleDialogVisibility);\r\ncloseButton.addEventListener('click', _lib_modalWindowForm__WEBPACK_IMPORTED_MODULE_1__.toggleDialogVisibility);\r\n\r\nconst messageFormer = (form) => {\r\n    const formChildArr = form.children;\r\n    let res = '';\r\n    for (const element of formChildArr) {\r\n        if(element.className === 'app-dialog__message') {\r\n            res+=element.innerHTML;\r\n        } \r\n        else if (element.id !== 'message' && element.attributes.for.textContent !== 'button') {\r\n            res += ' ' + form[element.attributes.for.textContent].value + '.'\r\n        }\r\n    }\r\n    \r\n    console.log(res);\r\n    return res;\r\n}\r\n\r\nform.addEventListener('submit', async e => {\r\n    e.preventDefault();\r\n    \r\n    let request = {\r\n        username: form.fullname.value,\r\n        message: messageFormer(form)\r\n    }\r\n    \r\n    let response = await fetch('/send', {\r\n        method: 'POST',\r\n        headers: new Headers({'content-type': 'application/json'}),\r\n        body: JSON.stringify(request),\r\n    });\r\n  \r\n    await response.json();\r\n\r\n    if(response.status === 200) {\r\n      console.log(\"sent\")\r\n    }\r\n    else {\r\n        alert(\"Something went wrong, please check your input.\");\r\n    }\r\n})\r\n\r\nwindow.onload = () => {\r\n    if(currentLang !== 'eng') {\r\n        (0,_lib_translator__WEBPACK_IMPORTED_MODULE_2__.translatePage)('home', currentLang);\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/app/team/team.js?");

/***/ }),

/***/ "./public/src/lib/menu.js":
/*!********************************!*\
  !*** ./public/src/lib/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst menuActivator = (buttonSelector, moveDownElementSelector) => {\r\n    const menuButton = document.getElementById(buttonSelector);\r\n    const header = document.querySelector(moveDownElementSelector);\r\n\r\n    const switchMenu = () => {\r\n        header.classList.toggle('open');\r\n        document.body.classList.toggle('overflow');\r\n        \r\n        if (header.classList[header.classList.length-1] === 'open') {\r\n            menuButton.innerHTML = localStorage.getItem('lang') === 'ua'\r\n                ? 'закрити меню' : 'close menu';\r\n        }\r\n        else {\r\n            menuButton.innerHTML = localStorage.getItem('lang') === 'ua'\r\n                ? 'меню' : 'menu';\r\n        }\r\n    }\r\n\r\n    menuButton.addEventListener('click', switchMenu);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuActivator);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/lib/menu.js?");

/***/ }),

/***/ "./public/src/lib/modalWindowForm.js":
/*!*******************************************!*\
  !*** ./public/src/lib/modalWindowForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleDialogVisibility\": () => (/* binding */ toggleDialogVisibility)\n/* harmony export */ });\n\r\nconst toggleDialogVisibility = (e) => {\r\n    e.preventDefault();\r\n\r\n    const appDialog = document.getElementById('dialog');\r\n    // const wrapper = document.querySelector('.wrapper');\r\n    const openButton = document.getElementById('dialog-open-button');\r\n\r\n    if(e.target === openButton && localStorage.getItem('formOpenAccess') === false) {\r\n        window.location = calendarURL;\r\n    }\r\n    \r\n    appDialog.hidden = !appDialog.hidden;\r\n    // wrapper.hidden = !wrapper.hidden;\r\n    document.body.style.overflow = appDialog.hidden ? '' : 'hidden';\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/lib/modalWindowForm.js?");

/***/ }),

/***/ "./public/src/lib/translator.js":
/*!**************************************!*\
  !*** ./public/src/lib/translator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"translatePage\": () => (/* binding */ translatePage)\n/* harmony export */ });\n\r\nconst data = {\r\n    header: {\r\n        \"menu-button\" : {\r\n            eng: 'MENU',\r\n            ua: 'МЕНЮ',\r\n        },\r\n        \"link-1\": {\r\n            eng: 'HOME',\r\n            ua: 'ГОЛОВНА',\r\n        },\r\n        \"link-2\": {\r\n            eng: 'WORKS',\r\n            ua: 'РОБОТИ',\r\n        },\r\n        \"link-3\": {\r\n            eng: 'TEAM',\r\n            ua: 'КОМАНДА',\r\n        },\r\n        \"link-4\": {\r\n            eng: 'SERVICES',\r\n            ua: 'СЕРВІСИ',\r\n        },\r\n        \"link-5\": {\r\n            eng: 'CONTACTS',\r\n            ua: 'КОНТАКТИ',\r\n        },\r\n    },\r\n    home: {\r\n        \r\n    },\r\n    contacts: {\r\n        \"title-1\": {\r\n            eng: 'YOU CAN:',\r\n            ua: 'ТИ МОЖЕШ:',\r\n        },\r\n        \"title-2\": {\r\n            eng: `<span class=\"spec-violet\">~</span>TEXT U<span class=\"spec-orange\">$</span>`,\r\n            ua: `<span class=\"spec-violet\">~</span>НАПИСАТИ`,\r\n        },\r\n        \"title-3\": {\r\n            eng: `<span class=\"spec-violet\">~</span>C&commat;LL US`,\r\n            ua: `<span class=\"spec-violet\">~</span>ПОДЗВОНИТИ`,\r\n        },\r\n        \"text-1\": {\r\n            eng: 'OR YOU CAN JUST MEET US ON THE FUCKING AWESOME ROOF',\r\n            ua: 'АБО ПРОСТО ЗУСТРІТИСЯ З НАМИ НА ПРЕКРАСНОМУ ДАХУ',\r\n        },\r\n        \"text-2\": {\r\n            eng: `KOZHUMIATSKA 16B ST, KYIV, UKRAINE`,\r\n            ua: `КОЖУМ'ЯЦЬКА 16Б, КИЇВ, УКРАЇНА`,\r\n        },\r\n        \"btn-1\": {\r\n            eng: `invite for a date`,\r\n            ua: `побачення з UTC`,\r\n        },\r\n        \"form-close\": {\r\n            eng: `CLOSE`,\r\n            ua: `ЗАКРИТИ`,\r\n        },\r\n        \"form-text\": {\r\n            eng: `<span class=\"app-dialog__message\">HELLO! MY NAME IS</span>\r\n            <label for=\"fullname\">\r\n                <div class=\"placeholder\">input your full name</div>\r\n                <input type=\"text\" name=\"fullname\" id=\"fullname\" required><span class=\"error\"></span>.\r\n            </label>\r\n            <span class=\"app-dialog__message\"> YOUR WORKS SINCERELY BURNED INTO MY SOUL, SO I WILL LEAVE MY EMAIL</span>\r\n            <label for=\"email\">\r\n                <div class=\"placeholder\">input your email</div>\r\n                <input type=\"email\" name=\"email\" id=\"email\" required><span class=\"error\"></span>.\r\n            </label>\r\n            <span class=\"app-dialog__message\"> AND PHONE NUMBER  HERE</span>\r\n            <label for=\"phone\">\r\n                    <div class=\"placeholder\">input your phone number</div>\r\n                    <input type=\"tel\" name=\"phone\" id=\"phone\" ><span class=\"error\"></span>.\r\n                </label>\r\n                <span class=\"app-dialog__message\">SO WE CAN SCHEDULE A MEETING WITH THE UTC TEAM, ONLINE OR ON YOUR FUCKING AWESOME ROOF, AND DISCUSS ANY QUESTIONS I MAY HAVE. I WILL BE FREE</span>\r\n                <label for=\"time\">\r\n                    <div class=\"placeholder\">input date</div>\r\n                    <input type=\"datetime-local\" name=\"time\" id=\"time\" value=\"\" required><span class=\"error\"></span>.\r\n                </label>\r\n                <span class=\"app-dialog__message\">I'M LOOKING FORWARD TO! (YOUR FUTURE FRIEND)</span>\r\n                <label for=\"button\">\r\n                    <input type=\"submit\" value=\"Invite for a date\" id=\"button\">\r\n                </label>`,\r\n            ua: `<span class=\"app-dialog__message\">ПРИВІТ! МЕНЕ ЗВАТИ</span>\r\n            <label for=\"fullname\">\r\n                <div class=\"placeholder\">введіть повне ім'я</div>\r\n                <input type=\"text\" name=\"fullname\" id=\"fullname\" required><span class=\"error\"></span>.\r\n            </label>\r\n            <span class=\"app-dialog__message\"> ВАШІ РОБОТИ ЩИРО ПРИПАЛИ МЕНІ ДО ДУШІ, ТОЖ Я ЗАЛИШУ ТУТ СВІЙ ЕМЕЙЛ</span>\r\n            <label for=\"email\">\r\n                <div class=\"placeholder\">введіть вашу пошту</div>\r\n                <input type=\"email\" name=\"email\" id=\"email\" required><span class=\"error\"></span>.\r\n            </label>\r\n            <span class=\"app-dialog__message\"> ТА НОМЕР ТЕЛЕФОНУ</span>\r\n            <label for=\"phone\">\r\n                    <div class=\"placeholder\">введіть номер телефону</div>\r\n                    <input type=\"tel\" name=\"phone\" id=\"phone\" ><span class=\"error\"></span>.\r\n                </label>\r\n                <span class=\"app-dialog__message\">АБИ МИ МОГЛИ ЗАПЛАНУВАТИ ЗУСТРІЧ З КОМАНДОЮ UTC, ОНЛАЙН АБО НА ВАШОМУ ПРЕКРАСНОМУ ДАХУ, ТА ОБГОВОРИТИ МОЇ БУДЬ-ЯКІ ПИТАННЯ. МАТИМУ ВІЛЬНИЙ ЧАС</span>\r\n                <label for=\"time\">\r\n                    <div class=\"placeholder\">введіть дату</div>\r\n                    <input type=\"datetime-local\" name=\"time\" id=\"time\" value=\"\" required><span class=\"error\"></span>.\r\n                </label>\r\n                <span class=\"app-dialog__message\">З НЕТЕРПІННЯМ ЧЕКАЮ! (ВАШ МАЙБУТНІЙ ДРУГ)</span>\r\n                <label for=\"button\">\r\n                    <input type=\"submit\" value=\"Invite for a date\" id=\"button\">\r\n                </label>`,\r\n        },\r\n\r\n    },\r\n    services: {\r\n        \"desc-title-1\": {\r\n            eng: `<span>STRONG</span> <span>CRE@TIVE<span class=\"spec-violet\">±</span></span>`,\r\n            ua: `<span>КРЕ@ТИВНИЙ</span> <span>ЮНІТ<span class=\"spec-violet\">±</span></span>`,\r\n        },\r\n        \"desc-list-1\": {\r\n            eng: `<li>360° marketing campaign</li>\r\n            <li>Communication strategy</li>\r\n            <li>MultiChannel Experience</li>\r\n            <li>Product development</li>\r\n            <li>Branding and packaging</li>`,\r\n            ua: `<li>Рекламні кампанії 360°</li>\r\n            <li>Комунікаційна стратегія</li>\r\n            <li>Багатоканальний контент</li>\r\n            <li>Розробка продуктів</li>\r\n            <li>Брендинг та пакування</li>`,\r\n        },\r\n        \"desc-title-2\": {\r\n            eng: `<span class=\"description__title\">FULL <span class=\"spec-orange\">$</span>ERVICE</span>\r\n            <span class=\"description__title\">/VIDEO PRODUCTION</span>`,\r\n            ua: `<span class=\"description__title\">ВІДЕО ПРОДАКШН</span>\r\n            <span class=\"description__title\">/ПОВНОГО ЦИКЛУ</span>`,\r\n        },\r\n        \"desc-list-2\": {\r\n            eng: `<li>Films</li>\r\n            <li>Photo shots</li>\r\n            <li>2D/3D animation</li>\r\n            <li>Stop motion/Craft</li>\r\n            <li>Adaptation</li>`,\r\n            ua: `<li>Відеоролики</li>\r\n            <li>Фотозйомка</li>\r\n            <li>2D/3D animation</li>\r\n            <li>Стопмоушн/Крафт</li>\r\n            <li>Адаптація</li>`,\r\n        },\r\n\r\n        \"slogan\": {\r\n            eng: `Pimp your brand<span>,</span> du<span>uuu</span>de`,\r\n            ua: 'Змушуємо бренди кращати'\r\n        }\r\n        \r\n    },\r\n    works: {\r\n\r\n    },  \r\n    team: {\r\n\r\n    }\r\n}\r\n\r\nconst translateData = (dataset, lang) => {\r\n    const currentPageTexts = data[dataset];\r\n\r\n    for (const key in currentPageTexts) {\r\n\t\tlet elems = document.querySelectorAll(`[data-lang=${key}]`);\r\n\r\n\t\tif (elems) {\r\n            for (const element of elems) {\r\n                element.innerHTML = currentPageTexts[key][lang];\r\n            }\r\n\t\t}\r\n\t}\r\n}\r\n\r\nconst translatePage = (pageName, lang) => {\r\n    translateData('header', lang);\r\n    translateData(pageName, lang);\r\n}\n\n//# sourceURL=webpack:///./public/src/lib/translator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/app/team/team.js");
/******/ 	
/******/ })()
;