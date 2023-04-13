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
pug_html = pug_html + "\u003C!--+card('image.png', 'subImage.png', 'title', 'Autor')--\u003E\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003Cscript src=\"https:\u002F\u002Fkit.fontawesome.com\u002F23b8fb4e42.js\" crossorigin=\"anonymous\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"mobile-logo\"\u003E\u003Cdiv class=\"mobile-logo__img\"\u003E";
pug_mixins["image"]('icons/burger-logo.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/control.pug */ "./src/views/parts/control.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cmain class=\"main\"\u003E\u003Cdiv class=\"aside\"\u003E\u003Cdiv class=\"name\"\u003E \u003Cdiv class=\"name__control\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"name__logo\"\u003E\u003Cdiv class=\"name__logo-img\"\u003E";
pug_mixins["image"]('icons/burger-logo.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu\"\u003E \u003Cul class=\"menu__list\"\u003E \u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
pug_mixins["image"]('icons/menu-home.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"menu__element-text\"\u003EHome\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli class=\"menu__list-item\"\u003E\u003Ca href=\"#\"\u003E \u003Cdiv class=\"menu__element\"\u003E\u003Cdiv class=\"menu__element-img\"\u003E";
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

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"control\"\u003E\u003Cdiv class=\"control__page\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"control__serch\"\u003E \u003Cdiv class=\"page__serch\"\u003E\u003Cp class=\"page__serch-magnifier\"\u003E\u003Ci class=\"fa-solid fa-magnifying-glass\"\u003E\u003C\u002Fi\u003E\u003C\u002Fp\u003E\u003Cinput class=\"page__serch-input\" type=\"text\"\u003E\u003Cdiv class=\"page__serch-mic\"\u003E\u003Cdiv class=\"page__serch-mic-fill\"\u003E\u003Ci class=\"fa-solid fa-microphone\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"serch__info\"\u003E\u003Cdiv class=\"page__info\"\u003E\u003Cdiv class=\"page__info-video\"\u003E\u003Ci class=\"fa-solid fa-video\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page__info-notification\"\u003E\u003Ci class=\"fa-solid fa-bell\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page__info-user\"\u003EA\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
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
module.exports = __webpack_require__.p + "assets/d00055559492326c83fc.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3lCO0FBQ0Q7QUFDSDtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL21haW4uanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9zY3NzL2FwcC5zY3NzPzhiNmYiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9jb250cm9sLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzL3N5a3JlcGV0cy9EZXNrdG9wL1BhcGFqYS1maWxtcy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVfX3RvZ2dsZScpO1xuY29uc3QgZ2VuZXJzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWdlbmVycycpO1xuY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUnKTtcbmNvbnN0IGdlbmVyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jb250ZW50LWxpc3QnKTtcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FzaWRlLXZpcycpO1xuY29uc3QgZ2VuZXJzQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19nZW5lcnMtY2xvc2UnKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZV9fbG9nbycpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgbmFtZUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGVudCcpO1xuXG5tZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRpZiAobWVudVRvZ2dsZS5jaGVja2VkKSB7XG5cdFx0Ly8gYXNpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0YXNpZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdGFzaWRlLmNsYXNzTGlzdC5hZGQoJ2pzLXNob3ctYXNpZGUnKTtcblx0fVxuXHRpZiAoIW1lbnVUb2dnbGUuY2hlY2tlZCkge1xuXHRcdC8vIGFzaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0YXNpZGUuc3R5bGUucG9zaXRpb24gPSAnaW5oZXJpdCc7XG5cdFx0YXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnanMtc2hvdy1hc2lkZScpO1xuXHR9XG59KTtcblxuZ2VuZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRnZW5lcnNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRnZW5lcnNCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0YnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGdlbmVyc0Nsb3NlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbmdlbmVyc0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRnZW5lcnNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGdlbmVyc0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0YnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRnZW5lcnNDbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG4iLCJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfbWl4aW5zW1wiaW1hZ2VcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oZmlsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ZpbGV9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVwiO1xufTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGltYWdlLCBzdWJJbWFnZSwgdGl0bGUsIGF1dG9yKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2ltYWdlXFxcIlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvdGl0bGVzLyR7aW1hZ2V9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2NvbnRlbnRcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19sb2dvXFxcIlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvJHtzdWJJbWFnZX1gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fdGl0bGVcXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB0aXRsZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fYXV0aG9yXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gYXV0b3IpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX3ZpZXdzXFxcIlxcdTAwM0UxNGsgdmlld3MgLSAxIG1vbnRoIGFnb1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhLS0rY2FyZCgnaW1hZ2UucG5nJywgJ3N1YkltYWdlLnBuZycsICd0aXRsZScsICdBdXRvcicpLS1cXHUwMDNFXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRUVtcHR5IFByb2plY3RcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0NzY3JpcHQgc3JjPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmtpdC5mb250YXdlc29tZS5jb21cXHUwMDJGMjNiOGZiNGU0Mi5qc1xcXCIgY3Jvc3NvcmlnaW49XFxcImFub255bW91c1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1vYmlsZS1sb2dvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtb2JpbGUtbG9nb19faW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvYnVyZ2VyLWxvZ28uc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvY29udHJvbC5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ21haW4gY2xhc3M9XFxcIm1haW5cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFzaWRlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYW1lXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmFtZV9fY29udHJvbFxcXCJcXHUwMDNFIFxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hbWVfX2xvZ29cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hbWVfX2xvZ28taW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvYnVyZ2VyLWxvZ28uc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51XFxcIlxcdTAwM0UgXFx1MDAzQ3VsIGNsYXNzPVxcXCJtZW51X19saXN0XFxcIlxcdTAwM0UgXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL21lbnUtaG9tZS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFSG9tZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9wYWx5LnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTaG9ydHNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvbWVudS1zdWJzLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTdWJzY3JpcHRpb25cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvbWVudS1tdXNpYy5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFTXVzaWNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYW5lbFxcXCJcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcImNoYW5lbF9fc3ViaGVhZGVyXFxcIlxcdTAwM0VNWSBDSEFORUxcXHUwMDNDdWwgY2xhc3M9XFxcIm1lbnVfX2xpc3RcXFwiXFx1MDAzRSBcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLWxpYi5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFTGlicmFyeVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtaGlzdC5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFSGlzdG9yeVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtdmlkZW8uc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVlvdXIgVmlkZW9zXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2NoYW5lbC1sYXRlci5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFV2F0Y2ggTGF0ZXJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLWxhdGVyLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VEb3dubG9hZHNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLW1vcmUuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVNob3cgTW9yZVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN1YnNjXFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwic3Vic2NfX3N1YmhlYWRlclxcXCJcXHUwMDNFU1VCU0NSSVBUSU9OU1xcdTAwM0N1bCBjbGFzcz1cXFwibWVudV9fbGlzdFxcXCJcXHUwMDNFIFxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdLmNhbGwoe1xuYXR0cmlidXRlczoge1wiY2xhc3NcIjogXCJzdWJzY3JfX2ltZy1iZ1wifVxufSwgJ2ljb25zL3N1YnMtZGVzaWduLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VEZXNpZ25Db2RlXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInN1YnNjcl9faW1nLWJnXCJ9XG59LCAnaWNvbnMvc3Vicy1maWdtYS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFRmlnbWFcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwic3Vic2NyX19pbWctYmdcIn1cbn0sICdpY29ucy9zdWJzLXNrZXRjaC5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFU2tldGNoXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInN1YnNjcl9faW1nLWJnXCJ9XG59LCAnaWNvbnMvc3Vicy1zcGxpbi5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFU3BsaW5lXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZ2VuZXJzLWNsb3NlXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiaGVhZGVyX19nZW5lcnMtY2xvc2UtaW1nXCJ9XG59LCAnaWNvbnMvY2xvc2Uuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FzaWRlLXZpc1xcXCJcXHUwMDNFXFx1MDAzQ2lucHV0IGlkPVxcXCJtZW51X190b2dnbGVcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcdTAwM0VcXHUwMDNDbGFiZWwgY2xhc3M9XFxcIm1lbnVfX2J0blxcXCIgZm9yPVxcXCJtZW51X190b2dnbGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRSBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZsYWJlbFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDdWwgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1saXN0XFxcIlxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VBbGxcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUdhbWluZ1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFVGhvdWdodHNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRU11c2ljXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VUaHJpbGxlcnNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRU1peGVzXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VBdmF0YXJcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUZpbG0gY3JpdGljaXNtYVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFS29yZWFuIGRyYW1hc1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFQ2hhcmFjdGVyc1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFRWF0aW5nXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fZ2VuZXJzXFxcIiBpZD1cXFwianMtZ2VuZXJzXFxcIlxcdTAwM0VHRU5FUlNcXHUwMDNDXFx1MDAyRmJ1dHRvblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZHNfX2NvbnRlbnRcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImNhcmRcIl0oJ3QxLnBuZycsICdzMS5zdmcnLCAnRGVzaWduIGFuZCBQcm90b3R5cGUgYW4gQXBwIHdpdGggUGxheSAtIEZ1bGwgMy1ob3VyIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDIucG5nJywgJ3MyLnN2ZycsICdDcmVhdGUgM0QgU2l0ZSB3aXRoIFNwbGluZSBhbmQgUmVhY3QgLSBGdWxsIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDMucG5nJywgJ3MzLnN2ZycsICdIb3cgdG8gVXNlIEFJIEFydCBHZW5lcmF0b3Igb24gTWlkam91cm5leScsICdtaWRqb3VybmV5QXJ0Jyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDQucG5nJywgJ3M0LnN2ZycsICdEZXNrdG9wIEFwcCBVSSBEZXNpZ24gaW4gRmlnbWEgLSBGdWxsIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDUucG5nJywgJ3M1LnN2ZycsICdEZXNpZ24gYW5kIFByb3RvdHlwZSBhbiBBcHAgd2l0aCBQbGF5IC0gRnVsbCAzLWhvdXIgQ291cnNlJywgJ0Rlc2lnbmNvZGUnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCd0Ni5wbmcnLCAnczYuc3ZnJywgJ0J1aWxkIGEgM0QgU2l0ZSBXaXRob3V0IENvZGUgd2l0aCBGcmFtZXIgLSBDcmFzaCBDb3Vyc2UnLCAnRGVzaWduY29kZScpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZtYWluXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250cm9sXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250cm9sX19wYWdlXFxcIlxcdTAwM0UgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udHJvbF9fc2VyY2hcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19zZXJjaFxcXCJcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcInBhZ2VfX3NlcmNoLW1hZ25pZmllclxcXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcImZhLXNvbGlkIGZhLW1hZ25pZnlpbmctZ2xhc3NcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2lucHV0IGNsYXNzPVxcXCJwYWdlX19zZXJjaC1pbnB1dFxcXCIgdHlwZT1cXFwidGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9fc2VyY2gtbWljXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19zZXJjaC1taWMtZmlsbFxcXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcImZhLXNvbGlkIGZhLW1pY3JvcGhvbmVcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzZXJjaF9faW5mb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9faW5mb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9faW5mby12aWRlb1xcXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcImZhLXNvbGlkIGZhLXZpZGVvXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9faW5mby1ub3RpZmljYXRpb25cXFwiXFx1MDAzRVxcdTAwM0NpIGNsYXNzPVxcXCJmYS1zb2xpZCBmYS1iZWxsXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZV9faW5mby11c2VyXFxcIlxcdTAwM0VBXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vczEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMS5zdmdcIixcblx0XCIuL3MyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczIuc3ZnXCIsXG5cdFwiLi9zMy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MzLnN2Z1wiLFxuXHRcIi4vczQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNC5zdmdcIixcblx0XCIuL3M1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczUucG5nXCIsXG5cdFwiLi9zNS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M1LnN2Z1wiLFxuXHRcIi4vczYuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNi5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZSBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi90MS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90MS5wbmdcIixcblx0XCIuL3QyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3QyLnBuZ1wiLFxuXHRcIi4vdDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDMucG5nXCIsXG5cdFwiLi90NC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90NC5wbmdcIixcblx0XCIuL3Q1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3Q1LnBuZ1wiLFxuXHRcIi4vdDYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDYucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2JnLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmcucG5nXCIsXG5cdFwiLi9jbG9zZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Nsb3NlLnN2Z1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9pY29ucy9fX0Fzc2V0cy9Ud2l0dGVyL0xvZ28vU3ltYm9sLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvX19Bc3NldHMvVHdpdHRlci9Mb2dvL1N5bWJvbC5wbmdcIixcblx0XCIuL2ljb25zL2J1cmdlci1jdHJsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYnVyZ2VyLWN0cmwuc3ZnXCIsXG5cdFwiLi9pY29ucy9idXJnZXItbG9nby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2J1cmdlci1sb2dvLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmVsLWhpc3Quc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtaGlzdC5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC1sYXRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5lbC1sYXRlci5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC1saWIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtbGliLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmVsLW1vcmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaGFuZWwtbW9yZS5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5lbC12aWRlby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5lbC12aWRlby5zdmdcIixcblx0XCIuL2ljb25zL2NoYW5ldC1kb3dubG9hZC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5ldC1kb3dubG9hZC5zdmdcIixcblx0XCIuL2ljb25zL2Nsb3NlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2xvc2Uuc3ZnXCIsXG5cdFwiLi9pY29ucy9sb2dvLWRlc2lnbl9jb2RlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbG9nby1kZXNpZ25fY29kZS5zdmdcIixcblx0XCIuL2ljb25zL21hZ25pZmllci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL21hZ25pZmllci5wbmdcIixcblx0XCIuL2ljb25zL21lbnUtaG9tZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL21lbnUtaG9tZS5zdmdcIixcblx0XCIuL2ljb25zL21lbnUtbXVzaWMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LW11c2ljLnN2Z1wiLFxuXHRcIi4vaWNvbnMvbWVudS1zdWJzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVudS1zdWJzLnN2Z1wiLFxuXHRcIi4vaWNvbnMvcGFseS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3BhbHkuc3ZnXCIsXG5cdFwiLi9pY29ucy9zdWJzLWRlc2lnbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3N1YnMtZGVzaWduLnN2Z1wiLFxuXHRcIi4vaWNvbnMvc3Vicy1maWdtYS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3N1YnMtZmlnbWEuc3ZnXCIsXG5cdFwiLi9pY29ucy9zdWJzLXNrZXRjaC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3N1YnMtc2tldGNoLnN2Z1wiLFxuXHRcIi4vaWNvbnMvc3Vicy1zcGxpbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3N1YnMtc3BsaW4uc3ZnXCIsXG5cdFwiLi9yYXRpbmcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9yYXRpbmcucG5nXCIsXG5cdFwiLi9zdWJ0aXRsZS9zMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MxLnN2Z1wiLFxuXHRcIi4vc3VidGl0bGUvczIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMi5zdmdcIixcblx0XCIuL3N1YnRpdGxlL3MzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczMuc3ZnXCIsXG5cdFwiLi9zdWJ0aXRsZS9zNC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M0LnN2Z1wiLFxuXHRcIi4vc3VidGl0bGUvczUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNS5wbmdcIixcblx0XCIuL3N1YnRpdGxlL3M1LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczUuc3ZnXCIsXG5cdFwiLi9zdWJ0aXRsZS9zNi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M2LnN2Z1wiLFxuXHRcIi4vdGl0bGVzL3QxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3QxLnBuZ1wiLFxuXHRcIi4vdGl0bGVzL3QyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3QyLnBuZ1wiLFxuXHRcIi4vdGl0bGVzL3QzLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3QzLnBuZ1wiLFxuXHRcIi4vdGl0bGVzL3Q0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3Q0LnBuZ1wiLFxuXHRcIi4vdGl0bGVzL3Q1LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3Q1LnBuZ1wiLFxuXHRcIi4vdGl0bGVzL3Q2LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3Q2LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbnB4IHByZXR0aWVyIC0td3JpdGUgXCIqKi8qLnB1Z1wiXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBcIi4vY29yZS9yZXNpemVyXCI7XG5pbXBvcnQgXCIuL2NvcmUvbWFpblwiO1xuaW1wb3J0IFwiLi92aWV3cy9pbmRleC5wdWdcIjtcbiJdLCJuYW1lcyI6WyJtZW51VG9nZ2xlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdlbmVyc0J0biIsImFzaWRlIiwicXVlcnlTZWxlY3RvciIsImdlbmVyc0xpc3QiLCJidXJnZXIiLCJnZW5lcnNDbG9zZSIsImxvZ28iLCJoZWFkZXIiLCJuYW1lTG9nbyIsImNhcmRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrZWQiLCJzdHlsZSIsInBvc2l0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZGlzcGxheSIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJib2R5IiwiZm9udFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJvbmxvYWQiLCJvbnJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=