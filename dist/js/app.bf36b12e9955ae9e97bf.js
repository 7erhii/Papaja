/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};
pug_mixins["card"] = pug_interp = function(image, subImage, title, autor){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"card__item\"\u003E\u003Cdiv class=\"card__image\"\u003E \u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images/titles sync recursive ^\\.\\/.*$")(`./${image}`), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__content\"\u003E \u003Cdiv class=\"card__logo\"\u003E \u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images/subtitle sync recursive ^\\.\\/.*$")(`./${subImage}`), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__text\"\u003E\u003Cdiv class=\"card__title\"\u003E \u003Cp\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__author\"\u003E \u003Cp\u003E" + (pug.escape(null == (pug_interp = autor) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__views\"\u003E14k views - 1 month ago\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!--+card('image.png', 'subImage.png', 'title', 'Autor')--\u003E\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003Cscript src=\"https:\u002F\u002Fkit.fontawesome.com\u002F23b8fb4e42.js\" crossorigin=\"anonymous\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/control.pug */ "./src/views/parts/control.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cmain class=\"main\"\u003E\u003Cdiv class=\"aside\"\u003E\u003Cdiv class=\"burger\"\u003E \u003Cdiv class=\"burger__control\"\u003E \u003Cdiv class=\"burger__control-btn\"\u003E\u003Csvg width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M5.79053 9.21094C6.30322 9.21094 6.71338 8.80078 6.71338 8.29541C6.71338 7.78271 6.30322 7.37256 5.79053 7.37256C5.27783 7.37256 4.86768 7.78271 4.86768 8.29541C4.86768 8.80078 5.27783 9.21094 5.79053 9.21094ZM9.02783 8.88135H19.0327C19.3623 8.88135 19.626 8.625 19.626 8.29541C19.626 7.9585 19.3623 7.70215 19.0327 7.70215H9.02783C8.69092 7.70215 8.43457 7.9585 8.43457 8.29541C8.43457 8.625 8.69092 8.88135 9.02783 8.88135ZM5.79053 13.6421C6.30322 13.6421 6.71338 13.2319 6.71338 12.7192C6.71338 12.2065 6.30322 11.7964 5.79053 11.7964C5.27783 11.7964 4.86768 12.2065 4.86768 12.7192C4.86768 13.2319 5.27783 13.6421 5.79053 13.6421ZM9.02783 13.3125H19.0327C19.3623 13.3125 19.626 13.0488 19.626 12.7192C19.626 12.3896 19.3623 12.1333 19.0327 12.1333H9.02783C8.69092 12.1333 8.43457 12.3896 8.43457 12.7192C8.43457 13.0488 8.69092 13.3125 9.02783 13.3125ZM5.79053 18.0732C6.30322 18.0732 6.71338 17.6558 6.71338 17.1504C6.71338 16.6377 6.30322 16.2275 5.79053 16.2275C5.27783 16.2275 4.86768 16.6377 4.86768 17.1504C4.86768 17.6558 5.27783 18.0732 5.79053 18.0732ZM9.02783 17.7363H19.0327C19.3623 17.7363 19.626 17.48 19.626 17.1504C19.626 16.8135 19.3623 16.5571 19.0327 16.5571H9.02783C8.69092 16.5571 8.43457 16.8135 8.43457 17.1504C8.43457 17.48 8.69092 17.7363 9.02783 17.7363Z\" fill=\"#EBEBF5\" fill-opacity=\"0.6\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"burger__logo\"\u003E\u003Cdiv class=\"burger__logo-img\"\u003E";
pug_mixins["image"]('icons/burger-logo.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu\"\u003E \u003Cul class=\"menu__list\"\u003E \u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element-active\"\u003E\u003Cdiv class=\"menu__element-active-img\"\u003E\u003Cdiv class=\"menu__element-active-img-bg\"\u003E ";
pug_mixins["image"]('icons/menu-home.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EHome\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/paly.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EShorts\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/menu-subs.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003ESubscription\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/menu-music.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EMusic\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chanel\"\u003E\u003Cp class=\"chanel__subheader\"\u003EMY CHANEL\u003Cul class=\"menu__list\"\u003E \u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/chanel-lib.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003ELibrary\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/chanel-hist.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EHistory\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/chanel-video.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EYour Videos\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/chanel-later.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EWatch Later\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/chanel-later.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EDownloads\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/chanel-more.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EShow More\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"subsc\"\u003E\u003Cp class=\"subsc__subheader\"\u003ESUBSCRIPTIONS\u003Cul class=\"menu__list\"\u003E \u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "subscr__img-bg"}
}, 'icons/subs-design.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EDesignCode\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "subscr__img-bg"}
}, 'icons/subs-figma.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EFigma\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "subscr__img-bg"}
}, 'icons/subs-sketch.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003ESketch\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "subscr__img-bg"}
}, 'icons/subs-splin.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003ESpline\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"header__content\"\u003E\u003Cdiv class=\"header__aside-vis\"\u003E\u003Cinput id=\"menu__toggle\" type=\"checkbox\"\u003E\u003Clabel class=\"menu__btn\" for=\"menu__toggle\"\u003E\u003Cspan\u003E \u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"header__content-list\"\u003E\u003Cli class=\"header__content-item\"\u003EAll\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EGaming\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EThoughts\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EMusic\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EThrillers\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EMixes\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EAvatar\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EFilm criticisma\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EKorean dramas\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003ECharacters\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EEating\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cards\"\u003E\u003Cdiv class=\"cards__content\"\u003E";
pug_mixins["card"]('t1.png', 's1.svg', 'Design and Prototype an App with Play - Full 3-hour Course', 'Designcode');
pug_mixins["card"]('t2.png', 's2.svg', 'Create 3D Site with Spline and React - Full Course', 'Designcode');
pug_mixins["card"]('t3.png', 's3.svg', 'How to Use AI Art Generator on Midjourney', 'midjourneyArt');
pug_mixins["card"]('t4.png', 's4.svg', 'Desktop App UI Design in Figma - Full Course', 'Designcode');
pug_mixins["card"]('t5.png', 's5.svg', 'Design and Prototype an App with Play - Full 3-hour Course', 'Designcode');
pug_mixins["card"]('t6.png', 's6.svg', 'Build a 3D Site Without Code with Framer - Crash Course', 'Designcode');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fmain\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/control.pug":
/*!*************************************!*\
  !*** ./src/views/parts/control.pug ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"control\"\u003E\u003Cdiv class=\"control__page\"\u003E \u003Cdiv class=\"page__elem\"\u003E \u003Cdiv class=\"page__elem-close\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"page__elem-collapse\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page__elem-full\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"control__serch\"\u003E \u003Cdiv class=\"page__serch\"\u003E\u003Cp class=\"page__serch-magnifier\"\u003E\u003Ci class=\"fa-solid fa-magnifying-glass\"\u003E\u003C\u002Fi\u003E\u003C\u002Fp\u003E\u003Cinput class=\"page__serch-input\" type=\"text\"\u003E\u003Cdiv class=\"page__serch-mic\"\u003E\u003Cdiv class=\"page__serch-mic-fill\"\u003E\u003Ci class=\"fa-solid fa-microphone\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"serch__info\"\u003E\u003Cdiv class=\"page__info\"\u003E\u003Cdiv class=\"page__info-video\"\u003E\u003Ci class=\"fa-solid fa-video\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page__info-notification\"\u003E\u003Ci class=\"fa-solid fa-bell\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page__info-user\"\u003EA\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ (() => {

console.log(1);


/***/ }),

/***/ "./src/assets/images/subtitle sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./src/assets/images/subtitle/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./s1.svg": "./src/assets/images/subtitle/s1.svg",
	"./s2.svg": "./src/assets/images/subtitle/s2.svg",
	"./s3.svg": "./src/assets/images/subtitle/s3.svg",
	"./s4.svg": "./src/assets/images/subtitle/s4.svg",
	"./s5.png": "./src/assets/images/subtitle/s5.png",
	"./s5.svg": "./src/assets/images/subtitle/s5.svg",
	"./s6.svg": "./src/assets/images/subtitle/s6.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/subtitle sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/titles sync recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./src/assets/images/titles/ sync ^\.\/.*$ ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./t1.png": "./src/assets/images/titles/t1.png",
	"./t2.png": "./src/assets/images/titles/t2.png",
	"./t3.png": "./src/assets/images/titles/t3.png",
	"./t4.png": "./src/assets/images/titles/t4.png",
	"./t5.png": "./src/assets/images/titles/t5.png",
	"./t6.png": "./src/assets/images/titles/t6.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images/titles sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bg.png": "./src/assets/images/bg.png",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./icons/__Assets/Twitter/Logo/Symbol.png": "./src/assets/images/icons/__Assets/Twitter/Logo/Symbol.png",
	"./icons/burger-ctrl.svg": "./src/assets/images/icons/burger-ctrl.svg",
	"./icons/burger-logo.svg": "./src/assets/images/icons/burger-logo.svg",
	"./icons/chanel-hist.svg": "./src/assets/images/icons/chanel-hist.svg",
	"./icons/chanel-later.svg": "./src/assets/images/icons/chanel-later.svg",
	"./icons/chanel-lib.svg": "./src/assets/images/icons/chanel-lib.svg",
	"./icons/chanel-more.svg": "./src/assets/images/icons/chanel-more.svg",
	"./icons/chanel-video.svg": "./src/assets/images/icons/chanel-video.svg",
	"./icons/chanet-download.svg": "./src/assets/images/icons/chanet-download.svg",
	"./icons/logo-design_code.svg": "./src/assets/images/icons/logo-design_code.svg",
	"./icons/magnifier.png": "./src/assets/images/icons/magnifier.png",
	"./icons/menu-home.svg": "./src/assets/images/icons/menu-home.svg",
	"./icons/menu-music.svg": "./src/assets/images/icons/menu-music.svg",
	"./icons/menu-subs.svg": "./src/assets/images/icons/menu-subs.svg",
	"./icons/paly.svg": "./src/assets/images/icons/paly.svg",
	"./icons/subs-design.svg": "./src/assets/images/icons/subs-design.svg",
	"./icons/subs-figma.svg": "./src/assets/images/icons/subs-figma.svg",
	"./icons/subs-sketch.svg": "./src/assets/images/icons/subs-sketch.svg",
	"./icons/subs-splin.svg": "./src/assets/images/icons/subs-splin.svg",
	"./rating.png": "./src/assets/images/rating.png",
	"./subtitle/s1.svg": "./src/assets/images/subtitle/s1.svg",
	"./subtitle/s2.svg": "./src/assets/images/subtitle/s2.svg",
	"./subtitle/s3.svg": "./src/assets/images/subtitle/s3.svg",
	"./subtitle/s4.svg": "./src/assets/images/subtitle/s4.svg",
	"./subtitle/s5.png": "./src/assets/images/subtitle/s5.png",
	"./subtitle/s5.svg": "./src/assets/images/subtitle/s5.svg",
	"./subtitle/s6.svg": "./src/assets/images/subtitle/s6.svg",
	"./titles/t1.png": "./src/assets/images/titles/t1.png",
	"./titles/t2.png": "./src/assets/images/titles/t2.png",
	"./titles/t3.png": "./src/assets/images/titles/t3.png",
	"./titles/t4.png": "./src/assets/images/titles/t4.png",
	"./titles/t5.png": "./src/assets/images/titles/t5.png",
	"./titles/t6.png": "./src/assets/images/titles/t6.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/bg.png":
/*!**********************************!*\
  !*** ./src/assets/images/bg.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6fed0a0f2f7fcc792225.png";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/icons/__Assets/Twitter/Logo/Symbol.png":
/*!******************************************************************!*\
  !*** ./src/assets/images/icons/__Assets/Twitter/Logo/Symbol.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2b5033058ddd72557bfa.png";

/***/ }),

/***/ "./src/assets/images/icons/burger-ctrl.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/burger-ctrl.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/331f22fa290806af4fd7.svg";

/***/ }),

/***/ "./src/assets/images/icons/burger-logo.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/burger-logo.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cdaa91175dbc5e2f41ac.svg";

/***/ }),

/***/ "./src/assets/images/icons/chanel-hist.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/chanel-hist.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ef049a23a5f8f1c7c4ac.svg";

/***/ }),

/***/ "./src/assets/images/icons/chanel-later.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/icons/chanel-later.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1fbf9a8d96e6f78c13f1.svg";

/***/ }),

/***/ "./src/assets/images/icons/chanel-lib.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/chanel-lib.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7eb7439bb6d45d2b4987.svg";

/***/ }),

/***/ "./src/assets/images/icons/chanel-more.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/chanel-more.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/def891091649a672d3bf.svg";

/***/ }),

/***/ "./src/assets/images/icons/chanel-video.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/icons/chanel-video.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b7a0e6de08d80a2dec56.svg";

/***/ }),

/***/ "./src/assets/images/icons/chanet-download.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/icons/chanet-download.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e755f2aed8eeec2fda16.svg";

/***/ }),

/***/ "./src/assets/images/icons/logo-design_code.svg":
/*!******************************************************!*\
  !*** ./src/assets/images/icons/logo-design_code.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/336772da285e6f11d5ee.svg";

/***/ }),

/***/ "./src/assets/images/icons/magnifier.png":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/magnifier.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6527d279e68d6070fe7e.png";

/***/ }),

/***/ "./src/assets/images/icons/menu-home.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/menu-home.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/01de0433ad1e770a7c76.svg";

/***/ }),

/***/ "./src/assets/images/icons/menu-music.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/menu-music.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4933c50eda4bbf2ef2da.svg";

/***/ }),

/***/ "./src/assets/images/icons/menu-subs.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/menu-subs.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5b802249fbd838170ca1.svg";

/***/ }),

/***/ "./src/assets/images/icons/paly.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icons/paly.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f83ad7c139d1c4f4c4c3.svg";

/***/ }),

/***/ "./src/assets/images/icons/subs-design.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/subs-design.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/49284db2041ba105768d.svg";

/***/ }),

/***/ "./src/assets/images/icons/subs-figma.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/subs-figma.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2dbd509799d4068cd6c9.svg";

/***/ }),

/***/ "./src/assets/images/icons/subs-sketch.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icons/subs-sketch.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2e28e111feacd3b6ecca.svg";

/***/ }),

/***/ "./src/assets/images/icons/subs-splin.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icons/subs-splin.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3252450c74645838b7cc.svg";

/***/ }),

/***/ "./src/assets/images/rating.png":
/*!**************************************!*\
  !*** ./src/assets/images/rating.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/43f68b098a2e4d754657.png";

/***/ }),

/***/ "./src/assets/images/subtitle/s1.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/subtitle/s1.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d297856923cf7f4e09b3.svg";

/***/ }),

/***/ "./src/assets/images/subtitle/s2.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/subtitle/s2.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3ed4cbfb82ec0553aeba.svg";

/***/ }),

/***/ "./src/assets/images/subtitle/s3.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/subtitle/s3.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8c9fc3d94ff04625898e.svg";

/***/ }),

/***/ "./src/assets/images/subtitle/s4.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/subtitle/s4.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/77999d525119a71ddbaf.svg";

/***/ }),

/***/ "./src/assets/images/subtitle/s5.png":
/*!*******************************************!*\
  !*** ./src/assets/images/subtitle/s5.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9953a92893baef19fb76.png";

/***/ }),

/***/ "./src/assets/images/subtitle/s5.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/subtitle/s5.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/163fdfe6e27610d055e0.svg";

/***/ }),

/***/ "./src/assets/images/subtitle/s6.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/subtitle/s6.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/eff825b1e96ab73798c6.svg";

/***/ }),

/***/ "./src/assets/images/titles/t1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/titles/t1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4b0c498cb11abfb33e91.png";

/***/ }),

/***/ "./src/assets/images/titles/t2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/titles/t2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/43339a243cf2df8c08b8.png";

/***/ }),

/***/ "./src/assets/images/titles/t3.png":
/*!*****************************************!*\
  !*** ./src/assets/images/titles/t3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d357404d6e30d99df179.png";

/***/ }),

/***/ "./src/assets/images/titles/t4.png":
/*!*****************************************!*\
  !*** ./src/assets/images/titles/t4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dcf70f58a7082eb13a5c.png";

/***/ }),

/***/ "./src/assets/images/titles/t5.png":
/*!*****************************************!*\
  !*** ./src/assets/images/titles/t5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2a7e5e61a6e8709d69cf.png";

/***/ }),

/***/ "./src/assets/images/titles/t6.png":
/*!*****************************************!*\
  !*** ./src/assets/images/titles/t6.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c708edebd6cd6a07af34.png";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.ts");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvY29udHJvbC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvbWFpbi50cyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy9pZ25vcmVkfC9Vc2Vycy9zeWtyZXBldHMvRGVza3RvcC9QYXBhamEtZmlsbXMvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lfGZzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihpbWFnZSwgc3ViSW1hZ2UsIHRpdGxlLCBhdXRvcil7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19pbWFnZVxcXCJcXHUwMDNFIFxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFthdHRyaWJ1dGVzLmNsYXNzXSwgW2ZhbHNlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL3RpdGxlcy8ke2ltYWdlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19jb250ZW50XFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fbG9nb1xcXCJcXHUwMDNFIFxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFthdHRyaWJ1dGVzLmNsYXNzXSwgW2ZhbHNlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlLyR7c3ViSW1hZ2V9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX3RpdGxlXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gdGl0bGUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2F1dGhvclxcXCJcXHUwMDNFIFxcdTAwM0NwXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGF1dG9yKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX192aWV3c1xcXCJcXHUwMDNFMTRrIHZpZXdzIC0gMSBtb250aCBhZ29cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbn07XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIS0tK2NhcmQoJ2ltYWdlLnBuZycsICdzdWJJbWFnZS5wbmcnLCAndGl0bGUnLCAnQXV0b3InKS0tXFx1MDAzRVxcdTAwM0MhRE9DVFlQRSBodG1sXFx1MDAzRVxcdTAwM0NodG1sIGxhbmc9XFxcImVuXFxcIlxcdTAwM0VcXHUwMDNDaGVhZFxcdTAwM0VcXHUwMDNDbWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiaWU9ZWRnZVxcXCJcXHUwMDNFXFx1MDAzQ2xpbmtcIiArIChcIiByZWw9XFxcInNob3J0Y3V0IGljb25cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgdHlwZT1cXFwiaW1hZ2VcXHUwMDJGcG5nXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0N0aXRsZVxcdTAwM0VFbXB0eSBQcm9qZWN0XFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXHUwMDNDc2NyaXB0IHNyYz1cXFwiaHR0cHM6XFx1MDAyRlxcdTAwMkZraXQuZm9udGF3ZXNvbWUuY29tXFx1MDAyRjIzYjhmYjRlNDIuanNcXFwiIGNyb3Nzb3JpZ2luPVxcXCJhbm9ueW1vdXNcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGc2NyaXB0XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvY29udHJvbC5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ21haW4gY2xhc3M9XFxcIm1haW5cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFzaWRlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJidXJnZXJcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJidXJnZXJfX2NvbnRyb2xcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJidXJnZXJfX2NvbnRyb2wtYnRuXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIxOVxcXCIgaGVpZ2h0PVxcXCIxOVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk01Ljc5MDUzIDkuMjEwOTRDNi4zMDMyMiA5LjIxMDk0IDYuNzEzMzggOC44MDA3OCA2LjcxMzM4IDguMjk1NDFDNi43MTMzOCA3Ljc4MjcxIDYuMzAzMjIgNy4zNzI1NiA1Ljc5MDUzIDcuMzcyNTZDNS4yNzc4MyA3LjM3MjU2IDQuODY3NjggNy43ODI3MSA0Ljg2NzY4IDguMjk1NDFDNC44Njc2OCA4LjgwMDc4IDUuMjc3ODMgOS4yMTA5NCA1Ljc5MDUzIDkuMjEwOTRaTTkuMDI3ODMgOC44ODEzNUgxOS4wMzI3QzE5LjM2MjMgOC44ODEzNSAxOS42MjYgOC42MjUgMTkuNjI2IDguMjk1NDFDMTkuNjI2IDcuOTU4NSAxOS4zNjIzIDcuNzAyMTUgMTkuMDMyNyA3LjcwMjE1SDkuMDI3ODNDOC42OTA5MiA3LjcwMjE1IDguNDM0NTcgNy45NTg1IDguNDM0NTcgOC4yOTU0MUM4LjQzNDU3IDguNjI1IDguNjkwOTIgOC44ODEzNSA5LjAyNzgzIDguODgxMzVaTTUuNzkwNTMgMTMuNjQyMUM2LjMwMzIyIDEzLjY0MjEgNi43MTMzOCAxMy4yMzE5IDYuNzEzMzggMTIuNzE5MkM2LjcxMzM4IDEyLjIwNjUgNi4zMDMyMiAxMS43OTY0IDUuNzkwNTMgMTEuNzk2NEM1LjI3NzgzIDExLjc5NjQgNC44Njc2OCAxMi4yMDY1IDQuODY3NjggMTIuNzE5MkM0Ljg2NzY4IDEzLjIzMTkgNS4yNzc4MyAxMy42NDIxIDUuNzkwNTMgMTMuNjQyMVpNOS4wMjc4MyAxMy4zMTI1SDE5LjAzMjdDMTkuMzYyMyAxMy4zMTI1IDE5LjYyNiAxMy4wNDg4IDE5LjYyNiAxMi43MTkyQzE5LjYyNiAxMi4zODk2IDE5LjM2MjMgMTIuMTMzMyAxOS4wMzI3IDEyLjEzMzNIOS4wMjc4M0M4LjY5MDkyIDEyLjEzMzMgOC40MzQ1NyAxMi4zODk2IDguNDM0NTcgMTIuNzE5MkM4LjQzNDU3IDEzLjA0ODggOC42OTA5MiAxMy4zMTI1IDkuMDI3ODMgMTMuMzEyNVpNNS43OTA1MyAxOC4wNzMyQzYuMzAzMjIgMTguMDczMiA2LjcxMzM4IDE3LjY1NTggNi43MTMzOCAxNy4xNTA0QzYuNzEzMzggMTYuNjM3NyA2LjMwMzIyIDE2LjIyNzUgNS43OTA1MyAxNi4yMjc1QzUuMjc3ODMgMTYuMjI3NSA0Ljg2NzY4IDE2LjYzNzcgNC44Njc2OCAxNy4xNTA0QzQuODY3NjggMTcuNjU1OCA1LjI3NzgzIDE4LjA3MzIgNS43OTA1MyAxOC4wNzMyWk05LjAyNzgzIDE3LjczNjNIMTkuMDMyN0MxOS4zNjIzIDE3LjczNjMgMTkuNjI2IDE3LjQ4IDE5LjYyNiAxNy4xNTA0QzE5LjYyNiAxNi44MTM1IDE5LjM2MjMgMTYuNTU3MSAxOS4wMzI3IDE2LjU1NzFIOS4wMjc4M0M4LjY5MDkyIDE2LjU1NzEgOC40MzQ1NyAxNi44MTM1IDguNDM0NTcgMTcuMTUwNEM4LjQzNDU3IDE3LjQ4IDguNjkwOTIgMTcuNzM2MyA5LjAyNzgzIDE3LjczNjNaXFxcIiBmaWxsPVxcXCIjRUJFQkY1XFxcIiBmaWxsLW9wYWNpdHk9XFxcIjAuNlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImJ1cmdlcl9fbG9nb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYnVyZ2VyX19sb2dvLWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2J1cmdlci1sb2dvLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudVxcXCJcXHUwMDNFIFxcdTAwM0N1bCBjbGFzcz1cXFwibWVudV9fbGlzdFxcXCJcXHUwMDNFIFxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1hY3RpdmVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtYWN0aXZlLWltZ1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1hY3RpdmUtaW1nLWJnXFxcIlxcdTAwM0UgXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL21lbnUtaG9tZS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFSG9tZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9wYWx5LnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTaG9ydHNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvbWVudS1zdWJzLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTdWJzY3JpcHRpb25cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvbWVudS1tdXNpYy5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFTXVzaWNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYW5lbFxcXCJcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcImNoYW5lbF9fc3ViaGVhZGVyXFxcIlxcdTAwM0VNWSBDSEFORUxcXHUwMDNDdWwgY2xhc3M9XFxcIm1lbnVfX2xpc3RcXFwiXFx1MDAzRSBcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLWxpYi5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFTGlicmFyeVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtaGlzdC5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFSGlzdG9yeVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtdmlkZW8uc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVlvdXIgVmlkZW9zXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2NoYW5lbC1sYXRlci5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFV2F0Y2ggTGF0ZXJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLWxhdGVyLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VEb3dubG9hZHNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLW1vcmUuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVNob3cgTW9yZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN1YnNjXFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwic3Vic2NfX3N1YmhlYWRlclxcXCJcXHUwMDNFU1VCU0NSSVBUSU9OU1xcdTAwM0N1bCBjbGFzcz1cXFwibWVudV9fbGlzdFxcXCJcXHUwMDNFIFxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdLmNhbGwoe1xuYXR0cmlidXRlczoge1wiY2xhc3NcIjogXCJzdWJzY3JfX2ltZy1iZ1wifVxufSwgJ2ljb25zL3N1YnMtZGVzaWduLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VEZXNpZ25Db2RlXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInN1YnNjcl9faW1nLWJnXCJ9XG59LCAnaWNvbnMvc3Vicy1maWdtYS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFRmlnbWFcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwic3Vic2NyX19pbWctYmdcIn1cbn0sICdpY29ucy9zdWJzLXNrZXRjaC5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFU2tldGNoXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInN1YnNjcl9faW1nLWJnXCJ9XG59LCAnaWNvbnMvc3Vicy1zcGxpbi5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFU3BsaW5lXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fYXNpZGUtdmlzXFxcIlxcdTAwM0VcXHUwMDNDaW5wdXQgaWQ9XFxcIm1lbnVfX3RvZ2dsZVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFx1MDAzRVxcdTAwM0NsYWJlbCBjbGFzcz1cXFwibWVudV9fYnRuXFxcIiBmb3I9XFxcIm1lbnVfX3RvZ2dsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFIFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0N1bCBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWxpc3RcXFwiXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUFsbFxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFR2FtaW5nXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VUaG91Z2h0c1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFTXVzaWNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRVRocmlsbGVyc1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFTWl4ZXNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUF2YXRhclxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFRmlsbSBjcml0aWNpc21hXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VLb3JlYW4gZHJhbWFzXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VDaGFyYWN0ZXJzXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VFYXRpbmdcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZHNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRzX19jb250ZW50XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCd0MS5wbmcnLCAnczEuc3ZnJywgJ0Rlc2lnbiBhbmQgUHJvdG90eXBlIGFuIEFwcCB3aXRoIFBsYXkgLSBGdWxsIDMtaG91ciBDb3Vyc2UnLCAnRGVzaWduY29kZScpO1xucHVnX21peGluc1tcImNhcmRcIl0oJ3QyLnBuZycsICdzMi5zdmcnLCAnQ3JlYXRlIDNEIFNpdGUgd2l0aCBTcGxpbmUgYW5kIFJlYWN0IC0gRnVsbCBDb3Vyc2UnLCAnRGVzaWduY29kZScpO1xucHVnX21peGluc1tcImNhcmRcIl0oJ3QzLnBuZycsICdzMy5zdmcnLCAnSG93IHRvIFVzZSBBSSBBcnQgR2VuZXJhdG9yIG9uIE1pZGpvdXJuZXknLCAnbWlkam91cm5leUFydCcpO1xucHVnX21peGluc1tcImNhcmRcIl0oJ3Q0LnBuZycsICdzNC5zdmcnLCAnRGVza3RvcCBBcHAgVUkgRGVzaWduIGluIEZpZ21hIC0gRnVsbCBDb3Vyc2UnLCAnRGVzaWduY29kZScpO1xucHVnX21peGluc1tcImNhcmRcIl0oJ3Q1LnBuZycsICdzNS5zdmcnLCAnRGVzaWduIGFuZCBQcm90b3R5cGUgYW4gQXBwIHdpdGggUGxheSAtIEZ1bGwgMy1ob3VyIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDYucG5nJywgJ3M2LnN2ZycsICdCdWlsZCBhIDNEIFNpdGUgV2l0aG91dCBDb2RlIHdpdGggRnJhbWVyIC0gQ3Jhc2ggQ291cnNlJywgJ0Rlc2lnbmNvZGUnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbWFpblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJvZHlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udHJvbFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udHJvbF9fcGFnZVxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX2VsZW1cXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19lbGVtLWNsb3NlXFxcIlxcdTAwM0UgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9fZWxlbS1jb2xsYXBzZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9fZWxlbS1mdWxsXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250cm9sX19zZXJjaFxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX3NlcmNoXFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwicGFnZV9fc2VyY2gtbWFnbmlmaWVyXFxcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwiZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDaW5wdXQgY2xhc3M9XFxcInBhZ2VfX3NlcmNoLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19zZXJjaC1taWNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX3NlcmNoLW1pYy1maWxsXFxcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwiZmEtc29saWQgZmEtbWljcm9waG9uZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNlcmNoX19pbmZvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvLXZpZGVvXFxcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwiZmEtc29saWQgZmEtdmlkZW9cXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvLW5vdGlmaWNhdGlvblxcXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcImZhLXNvbGlkIGZhLWJlbGxcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvLXVzZXJcXFwiXFx1MDAzRUFcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHB1Z19oYXNfb3duX3Byb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gcHVnX21lcmdlO1xuZnVuY3Rpb24gcHVnX21lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBwdWdfbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICAgIHZhciB2YWxBID0gYVtrZXldIHx8IFtdO1xuICAgICAgYVtrZXldID0gKEFycmF5LmlzQXJyYXkodmFsQSkgPyB2YWxBIDogW3ZhbEFdKS5jb25jYXQoYltrZXldIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgdmFyIHZhbEEgPSBwdWdfc3R5bGUoYVtrZXldKTtcbiAgICAgIHZhbEEgPSB2YWxBICYmIHZhbEFbdmFsQS5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQSArICc7JyA6IHZhbEE7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgdmFsQiA9IHZhbEIgJiYgdmFsQlt2YWxCLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxCICsgJzsnIDogdmFsQjtcbiAgICAgIGFba2V5XSA9IHZhbEEgKyB2YWxCO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgY2xhc3NOYW1lLCBwYWRkaW5nID0gJycsIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgcGFkZGluZyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBrZXk7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlcyh2YWwsIGVzY2FwaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gIH0gZWxzZSBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgfHwgJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCBvciBzdHJpbmcgdG8gYSBzdHJpbmcgb2YgQ1NTIHN0eWxlcyBkZWxpbWl0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz58c3RyaW5nKX0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy5zdHlsZSA9IHB1Z19zdHlsZTtcbmZ1bmN0aW9uIHB1Z19zdHlsZSh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwgc3R5bGUpKSB7XG4gICAgICAgIG91dCA9IG91dCArIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsICsgJyc7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICgodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcbiIsImNvbnNvbGUubG9nKDEpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL3MxLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczEuc3ZnXCIsXG5cdFwiLi9zMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MyLnN2Z1wiLFxuXHRcIi4vczMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMy5zdmdcIixcblx0XCIuL3M0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczQuc3ZnXCIsXG5cdFwiLi9zNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M1LnBuZ1wiLFxuXHRcIi4vczUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNS5zdmdcIixcblx0XCIuL3M2LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczYuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vdDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDEucG5nXCIsXG5cdFwiLi90Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90Mi5wbmdcIixcblx0XCIuL3QzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3QzLnBuZ1wiLFxuXHRcIi4vdDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDQucG5nXCIsXG5cdFwiLi90NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90NS5wbmdcIixcblx0XCIuL3Q2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3Q2LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JnLnBuZ1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9pY29ucy9fX0Fzc2V0cy9Ud2l0dGVyL0xvZ28vU3ltYm9sLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvX19Bc3NldHMvVHdpdHRlci9Mb2dvL1N5bWJvbC5wbmdcIixcblx0XCIuL2ljb25zL2J1cmdlci1jdHJsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYnVyZ2VyLWN0cmwuc3ZnXCIsXG5cdFwiLi9pY29ucy9idXJnZXItbG9nby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2J1cmdlci1sb2dvLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmVsLWhpc3Quc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtaGlzdC5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC1sYXRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5lbC1sYXRlci5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC1saWIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtbGliLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmVsLW1vcmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtbW9yZS5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC12aWRlby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5lbC12aWRlby5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5ldC1kb3dubG9hZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5ldC1kb3dubG9hZC5zdmdcIixcblx0XCIuL2ljb25zL2xvZ28tZGVzaWduX2NvZGUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9sb2dvLWRlc2lnbl9jb2RlLnN2Z1wiLFxuXHRcIi4vaWNvbnMvbWFnbmlmaWVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWFnbmlmaWVyLnBuZ1wiLFxuXHRcIi4vaWNvbnMvbWVudS1ob21lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVudS1ob21lLnN2Z1wiLFxuXHRcIi4vaWNvbnMvbWVudS1tdXNpYy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL21lbnUtbXVzaWMuc3ZnXCIsXG5cdFwiLi9pY29ucy9tZW51LXN1YnMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LXN1YnMuc3ZnXCIsXG5cdFwiLi9pY29ucy9wYWx5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFseS5zdmdcIixcblx0XCIuL2ljb25zL3N1YnMtZGVzaWduLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1kZXNpZ24uc3ZnXCIsXG5cdFwiLi9pY29ucy9zdWJzLWZpZ21hLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1maWdtYS5zdmdcIixcblx0XCIuL2ljb25zL3N1YnMtc2tldGNoLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1za2V0Y2guc3ZnXCIsXG5cdFwiLi9pY29ucy9zdWJzLXNwbGluLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1zcGxpbi5zdmdcIixcblx0XCIuL3JhdGluZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3JhdGluZy5wbmdcIixcblx0XCIuL3N1YnRpdGxlL3MxLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczEuc3ZnXCIsXG5cdFwiLi9zdWJ0aXRsZS9zMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MyLnN2Z1wiLFxuXHRcIi4vc3VidGl0bGUvczMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMy5zdmdcIixcblx0XCIuL3N1YnRpdGxlL3M0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczQuc3ZnXCIsXG5cdFwiLi9zdWJ0aXRsZS9zNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M1LnBuZ1wiLFxuXHRcIi4vc3VidGl0bGUvczUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNS5zdmdcIixcblx0XCIuL3N1YnRpdGxlL3M2LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczYuc3ZnXCIsXG5cdFwiLi90aXRsZXMvdDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDEucG5nXCIsXG5cdFwiLi90aXRsZXMvdDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDIucG5nXCIsXG5cdFwiLi90aXRsZXMvdDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDMucG5nXCIsXG5cdFwiLi90aXRsZXMvdDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDQucG5nXCIsXG5cdFwiLi90aXRsZXMvdDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDUucG5nXCIsXG5cdFwiLi90aXRsZXMvdDYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDYucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImZvbnRTaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25sb2FkIiwib25yZXNpemUiXSwic291cmNlUm9vdCI6IiJ9