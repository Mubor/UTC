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

/***/ "./public/src/app/contacts/contacts.js":
/*!*********************************************!*\
  !*** ./public/src/app/contacts/contacts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/menu */ \"./public/src/lib/menu.js\");\n\r\n        \r\nconst calendarURL = \"https://calendar.google.com/calendar/u/4?cid=dXQ5bWVsMmUxNmNpOW1lcTJ1dWJoZTBsMmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ\";\r\nconst mediaContainer = document.getElementById('scroll-media');\r\nconst dialogButton = document.getElementById('dialog-open-button');\r\nconst closeButton = document.getElementById('close-button');\r\nconst appDialog = document.getElementById('dialog');\r\nconst form = document.forms.data;\r\nconst wrapper = document.querySelector('.wrapper');\r\n\r\nconst toggleDialogVisibility = (e) => {\r\n    e.preventDefault();\r\n\r\n    if(e.target === dialogButton && localStorage.getItem('formOpenAccess') === false) {\r\n        window.location = calendarURL;\r\n    }\r\n\r\n    appDialog.hidden = !appDialog.hidden;\r\n    wrapper.hidden = !wrapper.hidden;\r\n    document.body.style.overflow = appDialog.hidden ? '' : 'hidden';\r\n}\r\n\r\nwrapper.hidden = false;\r\nappDialog.hidden = true;\r\n\r\nconst scrollCenter = 989/2 - mediaContainer.clientWidth/2;\r\nmediaContainer.scrollTo(scrollCenter, 0);\r\n\r\n(0,_lib_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('menu-button', 'header');\r\n\r\ndialogButton.addEventListener('click', toggleDialogVisibility);\r\ncloseButton.addEventListener('click', toggleDialogVisibility);\r\n\r\n\r\nconst validateDate = (date) => {\r\n    const inputedDate = new Date(date);\r\n    \r\n    if(inputedDate <= Date.now()){\r\n        return false;\r\n    }\r\n    else return true;\r\n}\r\n\r\nform.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n\r\n    if( !validateDate(form.time.value) ) {\r\n        form.time.nextElementSibling.innerHTML = \"The specified date must be greater than now\";\r\n    }\r\n\r\n    const formDataArr = [...form.querySelectorAll('input:not(input#button)')];\r\n\r\n    let request = {};\r\n\r\n    for(let i = 0; i < formDataArr.length; i++) {\r\n        request[formDataArr[i].name] = formDataArr[i].value;\r\n    }\r\n\r\n    let response = await fetch('/create', {\r\n        method: 'POST',\r\n        headers: new Headers({'content-type': 'application/json'}),\r\n        body: JSON.stringify(request),\r\n    });\r\n  \r\n    await response.json();\r\n\r\n    if(response.status === 200) {\r\n        localStorage.setItem('formOpenAccess', false);\r\n        window.location = calendarURL;\r\n    }\r\n    else {\r\n        alert(\"Something went wrong, please check your input.\");\r\n    }\r\n});\r\n\r\nform.time.onchange = (e) => {\r\n    const style = form.time.style;\r\n    style.color = form.time.value === '' ? 'black' :  '#b2b2b2';\r\n}\n\n//# sourceURL=webpack:///./public/src/app/contacts/contacts.js?");

/***/ }),

/***/ "./public/src/lib/menu.js":
/*!********************************!*\
  !*** ./public/src/lib/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst menuActivator = (buttonSelector, moveDownElementSelector) => {\r\n    const menuButton = document.getElementById(buttonSelector);\r\n    const header = document.querySelector(moveDownElementSelector);\r\n\r\n    const switchMenu = () => {\r\n        header.classList.toggle('open');\r\n        document.body.classList.toggle('overflow');\r\n        \r\n        if (header.classList[header.classList.length-1] === 'open') {\r\n            menuButton.innerHTML = 'close menu';\r\n        }\r\n        else {\r\n            menuButton.innerHTML = 'menu';\r\n        }\r\n    }\r\n\r\n    menuButton.addEventListener('click', switchMenu);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuActivator);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/src/lib/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/app/contacts/contacts.js");
/******/ 	
/******/ })()
;