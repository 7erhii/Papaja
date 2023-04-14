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
pug_html = pug_html + "\u003C!--+card('image.png', 'subImage.png', 'title', 'Autor')--\u003E\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003Cscript src=\"https:\u002F\u002Fkit.fontawesome.com\u002F23b8fb4e42.js\" crossorigin=\"anonymous\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"mobile-logo\"\u003E\u003Cdiv class=\"mobile-logo__img\"\u003E";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3lCO0FBQ0Q7QUFDSDtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL21haW4uanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9zY3NzL2FwcC5zY3NzPzhiNmYiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9jb250cm9sLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzL3N5a3JlcGV0cy9EZXNrdG9wL1BhcGFqYS1maWxtcy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVfX3RvZ2dsZScpO1xuY29uc3QgZ2VuZXJzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWdlbmVycycpO1xuY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXNpZGUnKTtcbmNvbnN0IGdlbmVyc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jb250ZW50LWxpc3QnKTtcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FzaWRlLXZpcycpO1xuY29uc3QgZ2VuZXJzQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19nZW5lcnMtY2xvc2UnKTtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZV9fbG9nbycpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgbmFtZUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZScpO1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19fY29udGVudCcpO1xuXG5tZW51VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRpZiAobWVudVRvZ2dsZS5jaGVja2VkKSB7XG5cdFx0Ly8gYXNpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0YXNpZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdGFzaWRlLmNsYXNzTGlzdC5hZGQoJ2pzLXNob3ctYXNpZGUnKTtcblx0fVxuXHRpZiAoIW1lbnVUb2dnbGUuY2hlY2tlZCkge1xuXHRcdC8vIGFzaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0YXNpZGUuc3R5bGUucG9zaXRpb24gPSAnaW5oZXJpdCc7XG5cdFx0YXNpZGUuY2xhc3NMaXN0LnJlbW92ZSgnanMtc2hvdy1hc2lkZScpO1xuXHR9XG59KTtcblxuZ2VuZXJzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRnZW5lcnNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRnZW5lcnNCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0YnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGdlbmVyc0Nsb3NlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbmdlbmVyc0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRnZW5lcnNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGdlbmVyc0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0YnVyZ2VyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRnZW5lcnNDbG9zZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG4iLCJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfbWl4aW5zW1wiaW1hZ2VcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oZmlsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ZpbGV9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVwiO1xufTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGltYWdlLCBzdWJJbWFnZSwgdGl0bGUsIGF1dG9yKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2ltYWdlXFxcIlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvdGl0bGVzLyR7aW1hZ2V9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2NvbnRlbnRcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19sb2dvXFxcIlxcdTAwM0UgXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvJHtzdWJJbWFnZX1gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fdGl0bGVcXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB0aXRsZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fYXV0aG9yXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gYXV0b3IpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX3ZpZXdzXFxcIlxcdTAwM0UxNGsgdmlld3MgLSAxIG1vbnRoIGFnb1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhLS0rY2FyZCgnaW1hZ2UucG5nJywgJ3N1YkltYWdlLnBuZycsICd0aXRsZScsICdBdXRvcicpLS1cXHUwMDNFXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xXFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiXFx1MDAzRVxcdTAwM0NsaW5rXCIgKyAoXCIgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nYCksIHRydWUsIHRydWUpK1wiIHR5cGU9XFxcImltYWdlXFx1MDAyRnBuZ1xcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFRW1wdHkgUHJvamVjdFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQ3NjcmlwdCBzcmM9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGa2l0LmZvbnRhd2Vzb21lLmNvbVxcdTAwMkYyM2I4ZmI0ZTQyLmpzXFxcIiBjcm9zc29yaWdpbj1cXFwiYW5vbnltb3VzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNjcmlwdFxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRcXHUwMDNFXFx1MDAzQ2JvZHlcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibW9iaWxlLWxvZ29cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1vYmlsZS1sb2dvX19pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9idXJnZXItbG9nby5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9jb250cm9sLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDbWFpbiBjbGFzcz1cXFwibWFpblxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYXNpZGVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm5hbWVcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJuYW1lX19jb250cm9sXFxcIlxcdTAwM0UgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmFtZV9fbG9nb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibmFtZV9fbG9nby1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9idXJnZXItbG9nby5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVcXFwiXFx1MDAzRSBcXHUwMDNDdWwgY2xhc3M9XFxcIm1lbnVfX2xpc3RcXFwiXFx1MDAzRSBcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvbWVudS1ob21lLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VIb21lXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL3BhbHkuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVNob3J0c1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9tZW51LXN1YnMuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRVN1YnNjcmlwdGlvblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9tZW51LW11c2ljLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VNdXNpY1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhbmVsXFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwiY2hhbmVsX19zdWJoZWFkZXJcXFwiXFx1MDAzRU1ZIENIQU5FTFxcdTAwM0N1bCBjbGFzcz1cXFwibWVudV9fbGlzdFxcXCJcXHUwMDNFIFxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtbGliLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VMaWJyYXJ5XFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2NoYW5lbC1oaXN0LnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VIaXN0b3J5XFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2ljb25zL2NoYW5lbC12aWRlby5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFWW91ciBWaWRlb3NcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnaWNvbnMvY2hhbmVsLWxhdGVyLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VXYXRjaCBMYXRlclxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtbGF0ZXIuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRURvd25sb2Fkc1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdpY29ucy9jaGFuZWwtbW9yZS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtdGV4dFxcXCJcXHUwMDNFU2hvdyBNb3JlXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Vic2NcXFwiXFx1MDAzRVxcdTAwM0NwIGNsYXNzPVxcXCJzdWJzY19fc3ViaGVhZGVyXFxcIlxcdTAwM0VTVUJTQ1JJUFRJT05TXFx1MDAzQ3VsIGNsYXNzPVxcXCJtZW51X19saXN0XFxcIlxcdTAwM0UgXFx1MDAzQ2xpIGNsYXNzPVxcXCJtZW51X19saXN0LWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInN1YnNjcl9faW1nLWJnXCJ9XG59LCAnaWNvbnMvc3Vicy1kZXNpZ24uc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtZW51X19lbGVtZW50LXRleHRcXFwiXFx1MDAzRURlc2lnbkNvZGVcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwic3Vic2NyX19pbWctYmdcIn1cbn0sICdpY29ucy9zdWJzLWZpZ21hLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VGaWdtYVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwibWVudV9fbGlzdC1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC1pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdLmNhbGwoe1xuYXR0cmlidXRlczoge1wiY2xhc3NcIjogXCJzdWJzY3JfX2ltZy1iZ1wifVxufSwgJ2ljb25zL3N1YnMtc2tldGNoLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTa2V0Y2hcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcIm1lbnVfX2xpc3QtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1lbnVfX2VsZW1lbnQtaW1nXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwic3Vic2NyX19pbWctYmdcIn1cbn0sICdpY29ucy9zdWJzLXNwbGluLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWVudV9fZWxlbWVudC10ZXh0XFxcIlxcdTAwM0VTcGxpbmVcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19nZW5lcnMtY2xvc2VcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdLmNhbGwoe1xuYXR0cmlidXRlczoge1wiY2xhc3NcIjogXCJoZWFkZXJfX2dlbmVycy1jbG9zZS1pbWdcIn1cbn0sICdpY29ucy9jbG9zZS5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fYXNpZGUtdmlzXFxcIlxcdTAwM0VcXHUwMDNDaW5wdXQgaWQ9XFxcIm1lbnVfX3RvZ2dsZVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFx1MDAzRVxcdTAwM0NsYWJlbCBjbGFzcz1cXFwibWVudV9fYnRuXFxcIiBmb3I9XFxcIm1lbnVfX3RvZ2dsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFIFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmxhYmVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0N1bCBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWxpc3RcXFwiXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUFsbFxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFR2FtaW5nXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VUaG91Z2h0c1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFTXVzaWNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRVRocmlsbGVyc1xcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFTWl4ZXNcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19jb250ZW50LWl0ZW1cXFwiXFx1MDAzRUF2YXRhclxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnQtaXRlbVxcXCJcXHUwMDNFRmlsbSBjcml0aWNpc21hXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VLb3JlYW4gZHJhbWFzXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VDaGFyYWN0ZXJzXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9fY29udGVudC1pdGVtXFxcIlxcdTAwM0VFYXRpbmdcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ2J1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19nZW5lcnNcXFwiIGlkPVxcXCJqcy1nZW5lcnNcXFwiXFx1MDAzRUdFTkVSU1xcdTAwM0NcXHUwMDJGYnV0dG9uXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkc19fY29udGVudFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgndDEucG5nJywgJ3MxLnN2ZycsICdEZXNpZ24gYW5kIFByb3RvdHlwZSBhbiBBcHAgd2l0aCBQbGF5IC0gRnVsbCAzLWhvdXIgQ291cnNlJywgJ0Rlc2lnbmNvZGUnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCd0Mi5wbmcnLCAnczIuc3ZnJywgJ0NyZWF0ZSAzRCBTaXRlIHdpdGggU3BsaW5lIGFuZCBSZWFjdCAtIEZ1bGwgQ291cnNlJywgJ0Rlc2lnbmNvZGUnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCd0My5wbmcnLCAnczMuc3ZnJywgJ0hvdyB0byBVc2UgQUkgQXJ0IEdlbmVyYXRvciBvbiBNaWRqb3VybmV5JywgJ21pZGpvdXJuZXlBcnQnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCd0NC5wbmcnLCAnczQuc3ZnJywgJ0Rlc2t0b3AgQXBwIFVJIERlc2lnbiBpbiBGaWdtYSAtIEZ1bGwgQ291cnNlJywgJ0Rlc2lnbmNvZGUnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCd0NS5wbmcnLCAnczUuc3ZnJywgJ0Rlc2lnbiBhbmQgUHJvdG90eXBlIGFuIEFwcCB3aXRoIFBsYXkgLSBGdWxsIDMtaG91ciBDb3Vyc2UnLCAnRGVzaWduY29kZScpO1xucHVnX21peGluc1tcImNhcmRcIl0oJ3Q2LnBuZycsICdzNi5zdmcnLCAnQnVpbGQgYSAzRCBTaXRlIFdpdGhvdXQgQ29kZSB3aXRoIEZyYW1lciAtIENyYXNoIENvdXJzZScsICdEZXNpZ25jb2RlJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRm1haW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRyb2xcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbnRyb2xfX3BhZ2VcXFwiXFx1MDAzRSBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250cm9sX19zZXJjaFxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX3NlcmNoXFxcIlxcdTAwM0VcXHUwMDNDcCBjbGFzcz1cXFwicGFnZV9fc2VyY2gtbWFnbmlmaWVyXFxcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwiZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDaW5wdXQgY2xhc3M9XFxcInBhZ2VfX3NlcmNoLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19zZXJjaC1taWNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2VfX3NlcmNoLW1pYy1maWxsXFxcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwiZmEtc29saWQgZmEtbWljcm9waG9uZVxcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZpXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNlcmNoX19pbmZvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvLXZpZGVvXFxcIlxcdTAwM0VcXHUwMDNDaSBjbGFzcz1cXFwiZmEtc29saWQgZmEtdmlkZW9cXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvLW5vdGlmaWNhdGlvblxcXCJcXHUwMDNFXFx1MDAzQ2kgY2xhc3M9XFxcImZhLXNvbGlkIGZhLWJlbGxcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19pbmZvLXVzZXJcXFwiXFx1MDAzRUFcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHB1Z19oYXNfb3duX3Byb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBNZXJnZSB0d28gYXR0cmlidXRlIG9iamVjdHMgZ2l2aW5nIHByZWNlZGVuY2VcbiAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gKiBhbGxvd2luZyBmb3IgYXJyYXlzIGFuZCBtZXJnaW5nL2pvaW5pbmcgYXBwcm9wcmlhdGVseVxuICogcmVzdWx0aW5nIGluIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fSBhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLm1lcmdlID0gcHVnX21lcmdlO1xuZnVuY3Rpb24gcHVnX21lcmdlKGEsIGIpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgYXR0cnMgPSBwdWdfbWVyZ2UoYXR0cnMsIGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYXR0cnM7XG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcbiAgICAgIHZhciB2YWxBID0gYVtrZXldIHx8IFtdO1xuICAgICAgYVtrZXldID0gKEFycmF5LmlzQXJyYXkodmFsQSkgPyB2YWxBIDogW3ZhbEFdKS5jb25jYXQoYltrZXldIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgdmFyIHZhbEEgPSBwdWdfc3R5bGUoYVtrZXldKTtcbiAgICAgIHZhbEEgPSB2YWxBICYmIHZhbEFbdmFsQS5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQSArICc7JyA6IHZhbEE7XG4gICAgICB2YXIgdmFsQiA9IHB1Z19zdHlsZShiW2tleV0pO1xuICAgICAgdmFsQiA9IHZhbEIgJiYgdmFsQlt2YWxCLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxCICsgJzsnIDogdmFsQjtcbiAgICAgIGFba2V5XSA9IHZhbEEgKyB2YWxCO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGE7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgYXJyYXksIG9iamVjdCwgb3Igc3RyaW5nIGFzIGEgc3RyaW5nIG9mIGNsYXNzZXMgZGVsaW1pdGVkIGJ5IGEgc3BhY2UuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gYXJyYXksIGFsbCBtZW1iZXJzIG9mIGl0IGFuZCBpdHMgc3ViYXJyYXlzIGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBJZiBgZXNjYXBpbmdgIGlzIGFuIGFycmF5LCB0aGVuIHdoZXRoZXIgb3Igbm90IHRoZSBpdGVtIGluIGB2YWxgIGlzXG4gKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gKiBub3QgYW4gYXJyYXksIG5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gKiBjbGFzc2VzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogQHBhcmFtIHsoQXJyYXkuPHN0cmluZz58T2JqZWN0LjxzdHJpbmcsIGJvb2xlYW4+fHN0cmluZyl9IHZhbFxuICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuZnVuY3Rpb24gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZykge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgY2xhc3NOYW1lLCBwYWRkaW5nID0gJycsIGVzY2FwZUVuYWJsZWQgPSBBcnJheS5pc0FycmF5KGVzY2FwaW5nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICBjbGFzc05hbWUgPSBwdWdfY2xhc3Nlcyh2YWxbaV0pO1xuICAgIGlmICghY2xhc3NOYW1lKSBjb250aW51ZTtcbiAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsgY2xhc3NOYW1lO1xuICAgIHBhZGRpbmcgPSAnICc7XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICB2YXIgY2xhc3NTdHJpbmcgPSAnJywgcGFkZGluZyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBrZXk7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlcyh2YWwsIGVzY2FwaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gIH0gZWxzZSBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgfHwgJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IG9iamVjdCBvciBzdHJpbmcgdG8gYSBzdHJpbmcgb2YgQ1NTIHN0eWxlcyBkZWxpbWl0ZWQgYnkgYSBzZW1pY29sb24uXG4gKlxuICogQHBhcmFtIHsoT2JqZWN0LjxzdHJpbmcsIHN0cmluZz58c3RyaW5nKX0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZXhwb3J0cy5zdHlsZSA9IHB1Z19zdHlsZTtcbmZ1bmN0aW9uIHB1Z19zdHlsZSh2YWwpIHtcbiAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwgc3R5bGUpKSB7XG4gICAgICAgIG91dCA9IG91dCArIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXSArICc7JztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsICsgJyc7XG4gIH1cbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBlc2NhcGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRlcnNlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0ciA9IHB1Z19hdHRyO1xuZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gIGlmICh2YWwgPT09IGZhbHNlIHx8IHZhbCA9PSBudWxsIHx8ICF2YWwgJiYgKGtleSA9PT0gJ2NsYXNzJyB8fCBrZXkgPT09ICdzdHlsZScpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICByZXR1cm4gJyAnICsgKHRlcnNlID8ga2V5IDoga2V5ICsgJz1cIicgKyBrZXkgKyAnXCInKTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICgodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHZhbC50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICBpZiAoIWVzY2FwZWQgJiYgdmFsLmluZGV4T2YoJ1wiJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gJyAnICsga2V5ICsgJz1cXCcnICsgdmFsLnJlcGxhY2UoLycvZywgJyYjMzk7JykgKyAnXFwnJztcbiAgICB9XG4gIH1cbiAgaWYgKGVzY2FwZWQpIHZhbCA9IHB1Z19lc2NhcGUodmFsKTtcbiAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG5mdW5jdGlvbiBwdWdfYXR0cnMob2JqLCB0ZXJzZSl7XG4gIHZhciBhdHRycyA9ICcnO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciB2YWwgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfY2xhc3Nlcyh2YWwpO1xuICAgICAgICBhdHRycyA9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpICsgYXR0cnM7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCdzdHlsZScgPT09IGtleSkge1xuICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgIH1cbiAgICAgIGF0dHJzICs9IHB1Z19hdHRyKGtleSwgdmFsLCBmYWxzZSwgdGVyc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRycztcbn07XG5cbi8qKlxuICogRXNjYXBlIHRoZSBnaXZlbiBzdHJpbmcgb2YgYGh0bWxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgcHVnX21hdGNoX2h0bWwgPSAvW1wiJjw+XS87XG5leHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG5mdW5jdGlvbiBwdWdfZXNjYXBlKF9odG1sKXtcbiAgdmFyIGh0bWwgPSAnJyArIF9odG1sO1xuICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICBpZiAoIXJlZ2V4UmVzdWx0KSByZXR1cm4gX2h0bWw7XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gIGZvciAoaSA9IHJlZ2V4UmVzdWx0LmluZGV4LCBsYXN0SW5kZXggPSAwOyBpIDwgaHRtbC5sZW5ndGg7IGkrKykge1xuICAgIHN3aXRjaCAoaHRtbC5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICBjYXNlIDM4OiBlc2NhcGUgPSAnJmFtcDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjA6IGVzY2FwZSA9ICcmbHQ7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogY29udGludWU7XG4gICAgfVxuICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgIGxhc3RJbmRleCA9IGkgKyAxO1xuICAgIHJlc3VsdCArPSBlc2NhcGU7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmV0dXJuIHJlc3VsdCArIGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gIGVsc2UgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUmUtdGhyb3cgdGhlIGdpdmVuIGBlcnJgIGluIGNvbnRleHQgdG8gdGhlXG4gKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gbGluZW5vXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIG9yaWdpbmFsIHNvdXJjZVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5yZXRocm93ID0gcHVnX3JldGhyb3c7XG5mdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgdGhyb3cgZXJyO1xuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgfHwgIWZpbGVuYW1lKSAmJiAhc3RyKSB7XG4gICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIHRyeSB7XG4gICAgc3RyID0gc3RyIHx8IHJlcXVpcmUoJ2ZzJykucmVhZEZpbGVTeW5jKGZpbGVuYW1lLCAndXRmOCcpXG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gIH1cbiAgdmFyIGNvbnRleHQgPSAzXG4gICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAsIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gY29udGV4dCwgMClcbiAgICAsIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgY29udGV4dCk7XG5cbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdQdWcnKSArICc6JyArIGxpbmVub1xuICAgICsgJ1xcbicgKyBjb250ZXh0ICsgJ1xcblxcbicgKyBlcnIubWVzc2FnZTtcbiAgdGhyb3cgZXJyO1xufTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9zMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MxLnN2Z1wiLFxuXHRcIi4vczIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMi5zdmdcIixcblx0XCIuL3MzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczMuc3ZnXCIsXG5cdFwiLi9zNC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M0LnN2Z1wiLFxuXHRcIi4vczUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNS5wbmdcIixcblx0XCIuL3M1LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczUuc3ZnXCIsXG5cdFwiLi9zNi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M2LnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL3QxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3QxLnBuZ1wiLFxuXHRcIi4vdDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDIucG5nXCIsXG5cdFwiLi90My5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90My5wbmdcIixcblx0XCIuL3Q0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGVzL3Q0LnBuZ1wiLFxuXHRcIi4vdDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDUucG5nXCIsXG5cdFwiLi90Ni5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RpdGxlcy90Ni5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmcucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iZy5wbmdcIixcblx0XCIuL2Nsb3NlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2xvc2Uuc3ZnXCIsXG5cdFwiLi9mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdcIixcblx0XCIuL2ljb25zL19fQXNzZXRzL1R3aXR0ZXIvTG9nby9TeW1ib2wucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9fX0Fzc2V0cy9Ud2l0dGVyL0xvZ28vU3ltYm9sLnBuZ1wiLFxuXHRcIi4vaWNvbnMvYnVyZ2VyLWN0cmwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9idXJnZXItY3RybC5zdmdcIixcblx0XCIuL2ljb25zL2J1cmdlci1sb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYnVyZ2VyLWxvZ28uc3ZnXCIsXG5cdFwiLi9pY29ucy9jaGFuZWwtaGlzdC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5lbC1oaXN0LnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmVsLWxhdGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hhbmVsLWxhdGVyLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmVsLWxpYi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5lbC1saWIuc3ZnXCIsXG5cdFwiLi9pY29ucy9jaGFuZWwtbW9yZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoYW5lbC1tb3JlLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmVsLXZpZGVvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hhbmVsLXZpZGVvLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2hhbmV0LWRvd25sb2FkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2hhbmV0LWRvd25sb2FkLnN2Z1wiLFxuXHRcIi4vaWNvbnMvY2xvc2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jbG9zZS5zdmdcIixcblx0XCIuL2ljb25zL2xvZ28tZGVzaWduX2NvZGUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9sb2dvLWRlc2lnbl9jb2RlLnN2Z1wiLFxuXHRcIi4vaWNvbnMvbWFnbmlmaWVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWFnbmlmaWVyLnBuZ1wiLFxuXHRcIi4vaWNvbnMvbWVudS1ob21lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbWVudS1ob21lLnN2Z1wiLFxuXHRcIi4vaWNvbnMvbWVudS1tdXNpYy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL21lbnUtbXVzaWMuc3ZnXCIsXG5cdFwiLi9pY29ucy9tZW51LXN1YnMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9tZW51LXN1YnMuc3ZnXCIsXG5cdFwiLi9pY29ucy9wYWx5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGFseS5zdmdcIixcblx0XCIuL2ljb25zL3N1YnMtZGVzaWduLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1kZXNpZ24uc3ZnXCIsXG5cdFwiLi9pY29ucy9zdWJzLWZpZ21hLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1maWdtYS5zdmdcIixcblx0XCIuL2ljb25zL3N1YnMtc2tldGNoLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1za2V0Y2guc3ZnXCIsXG5cdFwiLi9pY29ucy9zdWJzLXNwbGluLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3Vicy1zcGxpbi5zdmdcIixcblx0XCIuL3JhdGluZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3JhdGluZy5wbmdcIixcblx0XCIuL3N1YnRpdGxlL3MxLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczEuc3ZnXCIsXG5cdFwiLi9zdWJ0aXRsZS9zMi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3MyLnN2Z1wiLFxuXHRcIi4vc3VidGl0bGUvczMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zMy5zdmdcIixcblx0XCIuL3N1YnRpdGxlL3M0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczQuc3ZnXCIsXG5cdFwiLi9zdWJ0aXRsZS9zNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N1YnRpdGxlL3M1LnBuZ1wiLFxuXHRcIi4vc3VidGl0bGUvczUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zdWJ0aXRsZS9zNS5zdmdcIixcblx0XCIuL3N1YnRpdGxlL3M2LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VidGl0bGUvczYuc3ZnXCIsXG5cdFwiLi90aXRsZXMvdDEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDEucG5nXCIsXG5cdFwiLi90aXRsZXMvdDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDIucG5nXCIsXG5cdFwiLi90aXRsZXMvdDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDMucG5nXCIsXG5cdFwiLi90aXRsZXMvdDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDQucG5nXCIsXG5cdFwiLi90aXRsZXMvdDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDUucG5nXCIsXG5cdFwiLi90aXRsZXMvdDYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90aXRsZXMvdDYucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbIm1lbnVUb2dnbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2VuZXJzQnRuIiwiYXNpZGUiLCJxdWVyeVNlbGVjdG9yIiwiZ2VuZXJzTGlzdCIsImJ1cmdlciIsImdlbmVyc0Nsb3NlIiwibG9nbyIsImhlYWRlciIsIm5hbWVMb2dvIiwiY2FyZHMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hlY2tlZCIsInN0eWxlIiwicG9zaXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXNwbGF5IiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEZvbnQiLCJtb2JpbGVGb250IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJkZWZhdWx0SGVpZ2h0IiwiZlNpemUiLCJkZXZpY2UiLCJ2VyIsInZIIiwiTWF0aCIsIm1pbiIsIm1heCIsIm1vZGlmaWVyRGV2aWNlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpc01vYmlsZSIsImJvZHkiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==