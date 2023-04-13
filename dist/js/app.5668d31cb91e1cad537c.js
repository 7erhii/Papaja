/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/***/ (() => {

const menuToggle = document.getElementById('menu__toggle');
const genersBtn = document.getElementById('js-geners');
const aside = document.querySelector('.aside');
const genersList = document.querySelector('.header__content-list');
const burger = document.querySelector('.header__aside-vis');
const genersClose = document.querySelector('.header__geners-close');
const logo = document.querySelector('.name__logo');
const header = document.querySelector('.header');
const nameLogo = document.querySelector('.name'); //----------------------------------------------------------------

const cards = document.querySelector('.cards__content');
menuToggle.addEventListener('click', function () {
  if (menuToggle.checked) {
    // aside.style.display = 'block';
    aside.style.position = 'absolute';
    aside.classList.add('js-show-aside');
  }

  if (!menuToggle.checked) {
    // aside.style.display = 'none';
    aside.style.position = 'inherit';
    aside.classList.remove('js-show-aside');
  }
});
genersBtn.addEventListener('click', function () {
  genersList.style.display = 'block';
  genersBtn.style.display = 'none';
  burger.style.display = 'none';
  genersClose.style.display = 'block';
});
genersClose.addEventListener('click', function () {
  genersList.style.display = 'none';
  genersBtn.style.display = 'block';
  burger.style.display = 'block';
  genersClose.style.display = 'none';
});

/***/ }),

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
pug_html = pug_html + "\u003C!--+card('image.png', 'subImage.png', 'title', 'Autor')--\u003E\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003Cscript src=\"https:\u002F\u002Fkit.fontawesome.com\u002F23b8fb4e42.js\" crossorigin=\"anonymous\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"header__logo\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__logo-img\"\u003E";
pug_mixins["image"]('icons/burger-logo.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/control.pug */ "./src/views/parts/control.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cmain class=\"main\"\u003E\u003Cdiv class=\"aside\"\u003E\u003Cdiv class=\"name\"\u003E \u003Cdiv class=\"name__control\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"name__logo\"\u003E\u003Cdiv class=\"name__logo-img\"\u003E";
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
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003ESpline\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"header__content\"\u003E\u003Cdiv class=\"header__geners-close\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "header__geners-close-img"}
}, 'icons/close.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__aside-vis\"\u003E\u003Cinput id=\"menu__toggle\" type=\"checkbox\"\u003E\u003Clabel class=\"menu__btn\" for=\"menu__toggle\"\u003E\u003Cspan\u003E \u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003Cul class=\"header__content-list\"\u003E\u003Cli class=\"header__content-item\"\u003EAll\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EGaming\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EThoughts\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EMusic\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EThrillers\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EMixes\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EAvatar\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EFilm criticisma\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EKorean dramas\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003ECharacters\u003C\u002Fli\u003E\u003Cli class=\"header__content-item\"\u003EEating\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Cbutton class=\"header__geners\" id=\"js-geners\"\u003EGENERS\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cards\"\u003E\u003Cdiv class=\"cards__content\"\u003E";
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
	"./close.svg": "./src/assets/images/close.svg",
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
	"./icons/close.svg": "./src/assets/images/icons/close.svg",
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

/***/ "./src/assets/images/close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/008d49d2f4d0f58c0202.svg";

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

/***/ "./src/assets/images/icons/close.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/close.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8d65b0c9bd1024b829d2.svg";

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
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.js");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3lCO0FBQ0Q7QUFDSDtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL21haW4uanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9zY3NzL2FwcC5zY3NzPzhiNmYiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9jb250cm9sLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzL3N5a3JlcGV0cy9EZXNrdG9wL1BhcGFqYS1maWxtcy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVfX3RvZ2dsZScpO1xuY29uc3QgZ2VuZXJzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWdlbmVycycpO1xuY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUnKTtcbmNvbnN0IGdlbmVyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jb250ZW50LWxpc3QnKTtcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FzaWRlLXZpcycpO1xuY29uc3QgZ2VuZXJzQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19nZW5lcnMtY2xvc2UnKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZV9fbG9nbycpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgbmFtZUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGVudCcpO1xuXG5tZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRpZiAobWVudVRvZ2dsZS5jaGVja2VkKSB7XG5cdFx0Ly8gYXNpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0YXNpZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdGFzaWRlLmNsYXNzTGlzdC5hZGQoJ2pzLXNob3ctYXNpZGUnKTtcblx0fVxuXHRpZiAoIW1lbnVUb2dnbGUuY2hlY2tlZCkge1xuXHRcdC8vIGFzaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0YXNpZGUuc3R5bGUucG9zaXRpb24gPSAnaW5oZXJpdCc7XG5cdFx0YXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnanMtc2hvdy1hc2lkZScpO1xuXHR9XG59KTtcblxuZ2VuZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRnZW5lcnNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRnZW5lcnNCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0YnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGdlbmVyc0Nsb3NlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbmdlbmVyc0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRnZW5lcnNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGdlbmVyc0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0YnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRnZW5lcnNDbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG4iLCJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfbWl4aW5zW1wiaW1hZ2VcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oZmlsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ZpbGV9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVwiO1xufTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGltYWdlLCBzdWJJbWFnZSwgdGl0bGUsIGF1dG9yKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2ltYWdlXFxcIlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvdGl0bGVzLyR7aW1hZ2V9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2NvbnRlbnRcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19sb2dvXFxcIlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvJHtzdWJJbWFnZX1gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fdGl0bGVcXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB0aXRsZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fYXV0aG9yXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gYXV0b3IpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX3ZpZXdzXFxcIlxcdTAwM0UxNGsgdmlld3MgLSAxIG1vbnRoIGFnb1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhLS0rY2FyZCgnaW1hZ2UucG5nJywgJ3N1YkltYWdlLnBuZycsICd0aXRsZScsICdBdXRvcicpLS1cXHUwMDNFXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRUVtcHR5IFByb2plY3RcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0NzY3JpcHQgc3JjPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmtpdC5mb250YXdlc29tZS5jb21cXHUwMDJGMjNiOGZiNGU0Mi5qc1xcXCIgY3Jvc3NvcmlnaW49XFxcImFub255bW91c1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvLWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2J1cmdlci1sb2dvLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL3BhcnRzL2NvbnRyb2wucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NtYWluIGNsYXNzPVxcXCJtYWluXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhc2lkZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmFtZVxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hbWVfX2NvbnRyb2xcXFwiXFx1MDAzRSBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYW1lX19sb2dvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYW1lX19sb2dvLWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2J1cmdlci1sb2dvLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudVxcXCJcXHUwMDNFIFxcdTAwM0N1bCBjbGFzcz1cXFwibWVudV9fbGlzdFxcXCJcXHUwMDNFIFxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1hY3RpdmVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtYWN0aXZlLWltZ1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1hY3RpdmUtaW1nLWJnXFxcIlxcdTAwM0UgXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL21lbnUtaG9tZS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFSG9tZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9wYWx5LnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTaG9ydHNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvbWVudS1zdWJzLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTdWJzY3JpcHRpb25cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvbWVudS1tdXNpYy5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFTXVzaWNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYW5lbFxcXCJcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcImNoYW5lbF9fc3ViaGVhZGVyXFxcIlxcdTAwM0VNWSBDSEFORUxcXHUwMDNDdWwgY2xhc3M9XFxcIm1lbnVfX2xpc3RcXFwiXFx1MDAzRSBcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLWxpYi5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFTGlicmFyeVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtaGlzdC5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFSGlzdG9yeVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtdmlkZW8uc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVlvdXIgVmlkZW9zXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2NoYW5lbC1sYXRlci5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFV2F0Y2ggTGF0ZXJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLWxhdGVyLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VEb3dubG9hZHNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLW1vcmUuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVNob3cgTW9yZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN1YnNjXFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwic3Vic2NfX3N1YmhlYWRlclxcXCJcXHUwMDNFU1VCU0NSSVBUSU9OU1xcdTAwM0N1bCBjbGFzcz1cXFwibWVudV9fbGlzdFxcXCJcXHUwMDNFIFxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdLmNhbGwoe1xuYXR0cmlidXRlczoge1wiY2xhc3NcIjogXCJzdWJzY3JfX2ltZy1iZ1wifVxufSwgJ2ljb25zL3N1YnMtZGVzaWduLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VEZXNpZ25Db2RlXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInN1YnNjcl9faW1nLWJnXCJ9XG59LCAnaWNvbnMvc3Vicy1maWdtYS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFRmlnbWFcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwic3Vic2NyX19pbWctYmdcIn1cbn0sICdpY29ucy9zdWJzLXNrZXRjaC5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFU2tldGNoXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInN1YnNjcl9faW1nLWJnXCJ9XG59LCAnaWNvbnMvc3Vicy1zcGxpbi5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFU3BsaW5lXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZ2VuZXJzLWNsb3NlXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiaGVhZGVyX19nZW5lcnMtY2xvc2UtaW1nXCJ9XG59LCAnaWNvbnMvY2xvc2Uuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FzaWRlLXZpc1xcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IGlkPVxcXCJtZW51X190b2dnbGVcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcdTAwM0VcXHUwMDNDbGFiZWwgY2xhc3M9XFxcIm1lbnVfX2J0blxcXCIgZm9yPVxcXCJtZW51X190b2dnbGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRSBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDdWwgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1saXN0XFxcIlxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VBbGxcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUdhbWluZ1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFVGhvdWdodHNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRU11c2ljXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VUaHJpbGxlcnNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRU1peGVzXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VBdmF0YXJcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUZpbG0gY3JpdGljaXNtYVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFS29yZWFuIGRyYW1hc1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFQ2hhcmFjdGVyc1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFRWF0aW5nXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fZ2VuZXJzXFxcIiBpZD1cXFwianMtZ2VuZXJzXFxcIlxcdTAwM0VHRU5FUlNcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZHNfX2NvbnRlbnRcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImNhcmRcIl0oJ3QxLnBuZycsICdzMS5zdmcnLCAnRGVzaWduIGFuZCBQcm90b3R5cGUgYW4gQXBwIHdpdGggUGxheSAtIEZ1bGwgMy1ob3VyIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDIucG5nJywgJ3MyLnN2ZycsICdDcmVhdGUgM0QgU2l0ZSB3aXRoIFNwbGluZSBhbmQgUmVhY3QgLSBGdWxsIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDMucG5nJywgJ3MzLnN2ZycsICdIb3cgdG8gVXNlIEFJIEFydCBHZW5lcmF0b3Igb24gTWlkam91cm5leScsICdtaWRqb3VybmV5QXJ0Jyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDQucG5nJywgJ3M0LnN2ZycsICdEZXNrdG9wIEFwcCBVSSBEZXNpZ24gaW4gRmlnbWEgLSBGdWxsIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDUucG5nJywgJ3M1LnN2ZycsICdEZXNpZ24gYW5kIFByb3RvdHlwZSBhbiBBcHAgd2l0aCBQbGF5IC0gRnVsbCAzLWhvdXIgQ291cnNlJywgJ0Rlc2lnbmNvZGUnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCd0Ni5wbmcnLCAnczYuc3ZnJywgJ0J1aWxkIGEgM0QgU2l0ZSBXaXRob3V0IENvZGUgd2l0aCBGcmFtZXIgLSBDcmFzaCBDb3Vyc2UnLCAnRGVzaWduY29kZScpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZtYWluXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250cm9sX19wYWdlXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9fZWxlbVxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX2VsZW0tY2xvc2VcXFwiXFx1MDAzRSBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19lbGVtLWNvbGxhcHNlXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19lbGVtLWZ1bGxcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRyb2xfX3NlcmNoXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9fc2VyY2hcXFwiXFx1MDAzRVxcdTAwM0NwIGNsYXNzPVxcXCJwYWdlX19zZXJjaC1tYWduaWZpZXJcXFwiXFx1MDAzRVxcdTAwM0NpIGNsYXNzPVxcXCJmYS1zb2xpZCBmYS1tYWduaWZ5aW5nLWdsYXNzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NpbnB1dCBjbGFzcz1cXFwicGFnZV9fc2VyY2gtaW5wdXRcXFwiIHR5cGU9XFxcInRleHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX3NlcmNoLW1pY1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9fc2VyY2gtbWljLWZpbGxcXFwiXFx1MDAzRVxcdTAwM0NpIGNsYXNzPVxcXCJmYS1zb2xpZCBmYS1taWNyb3Bob25lXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2VyY2hfX2luZm9cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX2luZm9cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX2luZm8tdmlkZW9cXFwiXFx1MDAzRVxcdTAwM0NpIGNsYXNzPVxcXCJmYS1zb2xpZCBmYS12aWRlb1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX2luZm8tbm90aWZpY2F0aW9uXFxcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwiZmEtc29saWQgZmEtYmVsbFxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX2luZm8tdXNlclxcXCJcXHUwMDNFQVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL3MxLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczEuc3ZnXCIsXG5cdFwiLi9zMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MyLnN2Z1wiLFxuXHRcIi4vczMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMy5zdmdcIixcblx0XCIuL3M0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczQuc3ZnXCIsXG5cdFwiLi9zNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M1LnBuZ1wiLFxuXHRcIi4vczUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNS5zdmdcIixcblx0XCIuL3M2LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczYuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vdDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDEucG5nXCIsXG5cdFwiLi90Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90Mi5wbmdcIixcblx0XCIuL3QzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3QzLnBuZ1wiLFxuXHRcIi4vdDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDQucG5nXCIsXG5cdFwiLi90NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90NS5wbmdcIixcblx0XCIuL3Q2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3Q2LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2JnLnBuZ1wiLFxuXHRcIi4vY2xvc2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jbG9zZS5zdmdcIixcblx0XCIuL2Zhdmljb24ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ1wiLFxuXHRcIi4vaWNvbnMvX19Bc3NldHMvVHdpdHRlci9Mb2dvL1N5bWJvbC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL19fQXNzZXRzL1R3aXR0ZXIvTG9nby9TeW1ib2wucG5nXCIsXG5cdFwiLi9pY29ucy9idXJnZXItY3RybC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2J1cmdlci1jdHJsLnN2Z1wiLFxuXHRcIi4vaWNvbnMvYnVyZ2VyLWxvZ28uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9idXJnZXItbG9nby5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC1oaXN0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hhbmVsLWhpc3Quc3ZnXCIsXG5cdFwiLi9pY29ucy9jaGFuZWwtbGF0ZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtbGF0ZXIuc3ZnXCIsXG5cdFwiLi9pY29ucy9jaGFuZWwtbGliLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hhbmVsLWxpYi5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC1tb3JlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hhbmVsLW1vcmUuc3ZnXCIsXG5cdFwiLi9pY29ucy9jaGFuZWwtdmlkZW8uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtdmlkZW8uc3ZnXCIsXG5cdFwiLi9pY29ucy9jaGFuZXQtZG93bmxvYWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZXQtZG93bmxvYWQuc3ZnXCIsXG5cdFwiLi9pY29ucy9jbG9zZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2Nsb3NlLnN2Z1wiLFxuXHRcIi4vaWNvbnMvbG9nby1kZXNpZ25fY29kZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2xvZ28tZGVzaWduX2NvZGUuc3ZnXCIsXG5cdFwiLi9pY29ucy9tYWduaWZpZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9tYWduaWZpZXIucG5nXCIsXG5cdFwiLi9pY29ucy9tZW51LWhvbWUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LWhvbWUuc3ZnXCIsXG5cdFwiLi9pY29ucy9tZW51LW11c2ljLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVudS1tdXNpYy5zdmdcIixcblx0XCIuL2ljb25zL21lbnUtc3Vicy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL21lbnUtc3Vicy5zdmdcIixcblx0XCIuL2ljb25zL3BhbHkuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9wYWx5LnN2Z1wiLFxuXHRcIi4vaWNvbnMvc3Vicy1kZXNpZ24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zdWJzLWRlc2lnbi5zdmdcIixcblx0XCIuL2ljb25zL3N1YnMtZmlnbWEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zdWJzLWZpZ21hLnN2Z1wiLFxuXHRcIi4vaWNvbnMvc3Vicy1za2V0Y2guc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zdWJzLXNrZXRjaC5zdmdcIixcblx0XCIuL2ljb25zL3N1YnMtc3BsaW4uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zdWJzLXNwbGluLnN2Z1wiLFxuXHRcIi4vcmF0aW5nLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcmF0aW5nLnBuZ1wiLFxuXHRcIi4vc3VidGl0bGUvczEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMS5zdmdcIixcblx0XCIuL3N1YnRpdGxlL3MyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczIuc3ZnXCIsXG5cdFwiLi9zdWJ0aXRsZS9zMy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MzLnN2Z1wiLFxuXHRcIi4vc3VidGl0bGUvczQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNC5zdmdcIixcblx0XCIuL3N1YnRpdGxlL3M1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczUucG5nXCIsXG5cdFwiLi9zdWJ0aXRsZS9zNS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M1LnN2Z1wiLFxuXHRcIi4vc3VidGl0bGUvczYuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNi5zdmdcIixcblx0XCIuL3RpdGxlcy90MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90MS5wbmdcIixcblx0XCIuL3RpdGxlcy90Mi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90Mi5wbmdcIixcblx0XCIuL3RpdGxlcy90My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90My5wbmdcIixcblx0XCIuL3RpdGxlcy90NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90NC5wbmdcIixcblx0XCIuL3RpdGxlcy90NS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90NS5wbmdcIixcblx0XCIuL3RpdGxlcy90Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90Ni5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5weCBwcmV0dGllciAtLXdyaXRlIFwiKiovKi5wdWdcIlxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvcmUvcmVzaXplclwiO1xuaW1wb3J0IFwiLi9jb3JlL21haW5cIjtcbmltcG9ydCBcIi4vdmlld3MvaW5kZXgucHVnXCI7XG4iXSwibmFtZXMiOlsibWVudVRvZ2dsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZW5lcnNCdG4iLCJhc2lkZSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcnNMaXN0IiwiYnVyZ2VyIiwiZ2VuZXJzQ2xvc2UiLCJsb2dvIiwiaGVhZGVyIiwibmFtZUxvZ28iLCJjYXJkcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwic3R5bGUiLCJwb3NpdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImRpc3BsYXkiLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiYm9keSIsImZvbnRTaXplIiwiZG9jdW1lbnRFbGVtZW50Iiwib25sb2FkIiwib25yZXNpemUiXSwic291cmNlUm9vdCI6IiJ9