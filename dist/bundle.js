/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/classes/player.js");
/* harmony import */ var _map1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map1 */ "./src/classes/map1.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.map = new _map1__WEBPACK_IMPORTED_MODULE_1__.default(); // animations

    this.fpsInterval = "";
    this.then = "";
    this.startTime = "";
    this.now = "";
    this.then = "";
    this.elapsed = ""; // pause game

    this.isPaused = true; // player canvas & context

    this.canvas = document.getElementById('player');
    this.ctx = this.canvas.getContext('2d');
    console.log(this.dimensions); // console.log(this.dimensions);
  }

  _createClass(Game, [{
    key: "startAnimate",
    value: function startAnimate(fps) {
      this.fpsInterval = 1000 / fps;
      this.then = Date.now();
      this.startTime = this.then;
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      if (this.isPaused) return;
      requestAnimationFrame(function () {
        return _this.animate();
      });
      this.now = Date.now();
      this.elapsed = this.now - this.then;

      if (this.elapsed > this.fpsInterval) {
        this.then = this.now - this.elapsed % this.fpsInterval;
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.character.animate();
      }
    }
  }, {
    key: "togglePause",
    value: function togglePause() {
      this.isPaused = !this.isPaused;
    }
  }, {
    key: "play",
    value: function play() {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.scale)(this.canvas);
      console.log(this.map.getDimensions());

      this._setDimensions();

      this._setPlayer();

      this.map.draw();
      this.startAnimate(15);
    }
  }, {
    key: "_setDimensions",
    value: function _setDimensions() {
      this.dimensions = this.map.getDimensions(); // console.log(width);

      this.canvas.width = this.dimensions.width;
      this.canvas.height = this.dimensions.height;
    }
  }, {
    key: "_setPlayer",
    value: function _setPlayer() {
      this.character = new _player__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx, this.map.getDimensions(), _map1__WEBPACK_IMPORTED_MODULE_1__.default.getCollisionMap());
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/classes/map1.js":
/*!*****************************!*\
  !*** ./src/classes/map1.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assests_backgrounds_Office_Design_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/backgrounds/Office_Design_1.png */ "./src/assests/backgrounds/Office_Design_1.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// map1.js


var Map1 = /*#__PURE__*/function () {
  function Map1(player) {
    _classCallCheck(this, Map1);

    this.canvas = document.getElementById('backgroundLayer');
    this.ctx = this.canvas.getContext('2d');
    this.collideMap = this.constructor.getCollisionMap();
    this.image = new Image();
    this.image.src = _assests_backgrounds_Office_Design_1_png__WEBPACK_IMPORTED_MODULE_0__;
    this.draw();
  }

  _createClass(Map1, [{
    key: "draw",
    value: function draw() {
      var _this = this;

      this.image.onload = function () {
        _this.canvas.width = _this.image.naturalWidth;
        _this.canvas.height = _this.image.naturalHeight;

        _this.ctx.drawImage(_this.image, 0, 0);
      };
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.image.naturalWidth,
        height: this.image.naturalHeight
      };
    }
  }], [{
    key: "getCollisionMap",
    value: function getCollisionMap() {
      // last element in array is 7x16
      return [//! 9x12
      // [1,1,1,1,1,1,1,1,1,1,1,1],
      // [1,1,1,1,1,1,1,1,1,1,1,1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // bottom row is 5x16
      ];
    }
  }]);

  return Map1;
}();

/* harmony default export */ __webpack_exports__["default"] = (Map1);

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/characters/chris.png */ "./src/assests/characters/chris.png");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// player.js


var Player = /*#__PURE__*/function () {
  function Player(ctx, dimensions, collisionMap) {
    _classCallCheck(this, Player);

    this.dimensions = dimensions;
    this.collisionMap = collisionMap;
    this.ctx = ctx; // console.log(dimensions);
    // pos

    this.x = 0;
    this.y = 130; // sprite

    this.width = 16;
    this.height = 32;
    this.frameX = 3;
    this.frameY = 0;
    this.image = new Image();
    this.image.src = _assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_0__;
    this.keypress = {};
    this.SPEED = 9;
    this.moving = false;

    this._registerEvents();
  } // * binds event listeners


  _createClass(Player, [{
    key: "_registerEvents",
    value: function _registerEvents() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        _this.keypress[e.code] = true;
        _this.moving = true;
      });
      window.addEventListener("keyup", function (e) {
        delete _this.keypress[e.code];
        _this.moving = false;
        _this.frameX = 1;
      });
    }
  }, {
    key: "_drawSprite",
    value: function _drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
      this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
  }, {
    key: "_getCollisionPosition",
    value: function _getCollisionPosition() {
      // console.log({
      //   x: this.x,
      //   y: this.y
      // });
      var currX = Math.floor(this.x / 15);
      var currY = Math.floor(this.y / 14.25); // console.log({currX});
      // console.log({currY});

      return [currX, currY];
    } // * main function to move young chris

  }, {
    key: "animate",
    value: function animate() {
      this._drawSprite(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);

      this.movePlayer();
      this.playerFrame();
    } // * moves x-u position

  }, {
    key: "movePlayer",
    value: function movePlayer() {
      var _this$_getCollisionPo = this._getCollisionPosition(),
          _this$_getCollisionPo2 = _slicedToArray(_this$_getCollisionPo, 2),
          x = _this$_getCollisionPo2[0],
          y = _this$_getCollisionPo2[1];

      if (this.keypress['KeyW'] && this.y > this.SPEED && this.collisionMap[y - 1][x] === 0) {
        if (this.frameX < 6 || this.frameX > 10) {
          this.frameX = 6;
          this.frameY = 2;
        }

        this.y -= this.SPEED;
        this.moving = true;
      }

      if (this.keypress['KeyA'] && this.x > 0 && this.collisionMap[y][x - 1] === 0) {
        if (this.frameX < 12 || this.frameX > 17) {
          this.frameX = 12;
          this.frameY = 2;
        }

        this.x -= this.SPEED;
        this.moving = true;
      }

      if (this.keypress['KeyD'] && this.x < this.dimensions.width - this.width * 1.75 && this.collisionMap[y][x + 1] === 0) {
        if (this.frameX > 5) {
          this.frameX = 0;
          this.frameY = 2;
        }

        this.x += this.SPEED;
        this.moving = true;
      }

      if (this.keypress['KeyS'] && this.y < this.dimensions.height - Math.floor(this.height * 1.5) && this.collisionMap[y + 1][x] === 0) {
        if (this.frameX < 18 || this.frameX >= 23) {
          this.frameX = 18;
          this.frameY = 2;
        }

        this.y += this.SPEED;
        this.moving = true;
      }
    } // * dont ask about random numbers. it just works
    // * frame animations

  }, {
    key: "playerFrame",
    value: function playerFrame() {
      // console.log(this.moving);
      console.log(this.frameX);
      console.log(this.frameY);

      if (!this.moving) {
        this.frameY = 1;

        if (this.frameX === 5) {
          this.frameX = 0;
        } else if (this.frameX === 11) {
          this.frameX = 6;
        } else if (this.frameX === 17) {
          this.frameX = 12;
        } else if (this.frameX >= 23) {
          this.frameX = 18;
        }
      }

      if (this.frameX > 22) {
        this.frameX = 0;
      }

      this.frameX++; // TODO: this bugs out when holding not dir keys and running into walls
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/classes/sound.js":
/*!******************************!*\
  !*** ./src/classes/sound.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// sounds.js
var Sound = /*#__PURE__*/function () {
  function Sound(src) {
    _classCallCheck(this, Sound);

    this.sound = new Audio(src);
    this.sound.volume = 0.1;
  }

  _createClass(Sound, [{
    key: "play",
    value: function play() {
      this.sound.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.sound.pause();
    }
  }, {
    key: "incVolume",
    value: function incVolume() {
      this.sound.volume += .5;
    }
  }, {
    key: "decVolume",
    value: function decVolume() {
      this.sound.volume -= .5;
    }
  }, {
    key: "getSound",
    value: function getSound() {
      return this.sound;
    }
  }, {
    key: "setVolume",
    value: function setVolume(vol) {
      this.sound.volume = vol;
    }
  }]);

  return Sound;
}();

/* harmony default export */ __webpack_exports__["default"] = (Sound);

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCollide": function() { return /* binding */ isCollide; },
/* harmony export */   "scale": function() { return /* binding */ scale; },
/* harmony export */   "playList": function() { return /* binding */ playList; }
/* harmony export */ });
/* harmony import */ var _classes_sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/sound */ "./src/classes/sound.js");
/* harmony import */ var _assests_music_Gabby_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/music/Gabby.mp3 */ "./src/assests/music/Gabby.mp3");
/* harmony import */ var _assests_music_Do_You_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/music/Do_You.mp3 */ "./src/assests/music/Do_You.mp3");
/* harmony import */ var _assests_music_WORD_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/music/WORD.mp3 */ "./src/assests/music/WORD.mp3");
/* harmony import */ var _assests_music_KH3_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assests/music/KH3.mp3 */ "./src/assests/music/KH3.mp3");
// utils.js





function isCollide(a, b) {
  return !(a.y + a.height < b.y || a.y > b.y + b.height || a.x + a.width < b.x || a.x > b.x + b.width);
}
function scale(canvas) {
  var scaleX = window.innerWidth / canvas.width;
  var scaleY = window.innerHeight / canvas.height;
  var scaleToFit = Math.min(scaleX, scaleY) - 1.5;
  stage.style.transformOrigin = 'center'; //scale from top left

  stage.style.transform = 'scale(' + scaleToFit + ')'; // backgroundLayer.style.transform = 'scale(' + scaleToFit + ')'
}
function playList() {
  var gabbySong = new _classes_sound__WEBPACK_IMPORTED_MODULE_0__.default(_assests_music_Gabby_mp3__WEBPACK_IMPORTED_MODULE_1__);
  var wordSong = new _classes_sound__WEBPACK_IMPORTED_MODULE_0__.default(_assests_music_WORD_mp3__WEBPACK_IMPORTED_MODULE_3__);
  wordSong.setVolume(.25);
  var doYouSong = new _classes_sound__WEBPACK_IMPORTED_MODULE_0__.default(_assests_music_Do_You_mp3__WEBPACK_IMPORTED_MODULE_2__);
  doYouSong.setVolume(.35);
  var evanSong = new _classes_sound__WEBPACK_IMPORTED_MODULE_0__.default(_assests_music_KH3_mp3__WEBPACK_IMPORTED_MODULE_4__);
  var playListSongs = [gabbySong, doYouSong, wordSong, evanSong];
  var firstSong = playListSongs.shift();
  firstSong.play();
  firstSong.getSound().addEventListener('ended', function () {
    var next = playListSongs.shift();
    playListSongs.push(next);
    next.play();
  });
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assests/backgrounds/Office_Design_1.png":
/*!*****************************************************!*\
  !*** ./src/assests/backgrounds/Office_Design_1.png ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c64ceaded8c10eb8420c.png";

/***/ }),

/***/ "./src/assests/characters/chris.png":
/*!******************************************!*\
  !*** ./src/assests/characters/chris.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85499af6442d8cb5b070.png";

/***/ }),

/***/ "./src/assests/music/Do_You.mp3":
/*!**************************************!*\
  !*** ./src/assests/music/Do_You.mp3 ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "de42fcc09d1e409fd907.mp3";

/***/ }),

/***/ "./src/assests/music/Gabby.mp3":
/*!*************************************!*\
  !*** ./src/assests/music/Gabby.mp3 ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fbcf912ed9ad36c2aefd.mp3";

/***/ }),

/***/ "./src/assests/music/KH3.mp3":
/*!***********************************!*\
  !*** ./src/assests/music/KH3.mp3 ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04005a783ec0d65dc50a.mp3";

/***/ }),

/***/ "./src/assests/music/WORD.mp3":
/*!************************************!*\
  !*** ./src/assests/music/WORD.mp3 ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5a3a6e95ff12b8431a86.mp3";

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
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
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/game */ "./src/classes/game.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assests/characters/chris.png */ "./src/assests/characters/chris.png");
/* harmony import */ var _assests_backgrounds_Office_Design_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assests/backgrounds/Office_Design_1.png */ "./src/assests/backgrounds/Office_Design_1.png");
// index.js





 // ==================================
// preload images
// ==================================

var images = [];

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = i < 0 || arguments.length <= i ? undefined : arguments[i];
  }
}

preload(_assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_4__, _assests_backgrounds_Office_Design_1_png__WEBPACK_IMPORTED_MODULE_5__); //==============================
// main logic
//==============================

document.addEventListener("DOMContentLoaded", function () {
  // background
  var background = document.getElementById('backgroundLayer'); // scale(canvas)

  var game = new _classes_game__WEBPACK_IMPORTED_MODULE_2__.default();
  window.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      var dialogue = document.getElementById('dialogue');
      dialogue.classList.add('hide');
      background.classList.remove('hide');
      game.togglePause();
      game.play();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__.playList)();
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1QixDQUF2QixDQUhLLEVBSUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQUpLLEVBS0wsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQUxLLEVBTUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQU5LLEVBT0wsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQVBLLEVBUUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQVJLLEVBU0wsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQVRLLEVBVUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxF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QUNBckIsUUFBUSxDQUFDNkMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQ7QUFDQSxNQUFNNEQsVUFBVSxHQUFHekcsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFuQixDQUZrRCxDQUdsRDs7QUFDQSxNQUFNeUcsSUFBSSxHQUFHLElBQUluSCxrREFBSixFQUFiO0FBRUFxRCxFQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN4QyxRQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3RCLFVBQU00RCxRQUFRLEdBQUczRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQTBHLE1BQUFBLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkI7QUFDQUosTUFBQUEsVUFBVSxDQUFDRyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixNQUE1QjtBQUNBSixNQUFBQSxJQUFJLENBQUNLLFdBQUw7QUFDQUwsTUFBQUEsSUFBSSxDQUFDckMsSUFBTDtBQUNBb0IsTUFBQUEsc0RBQVE7QUFDVDtBQUNGLEdBVEQ7QUFZRCxDQWxCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL2NsYXNzZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvY2xhc3Nlcy9tYXAxLmpzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS8uL3NyYy9jbGFzc2VzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvY2xhc3Nlcy9zb3VuZC5qcyIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvdGFnb25pc3QgZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgTWFwIGZyb20gJy4vbWFwMSdcbmltcG9ydCB7IHNjYWxlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXAgPSBuZXcgTWFwKClcbiAgICBcbiAgICAvLyBhbmltYXRpb25zXG4gICAgdGhpcy5mcHNJbnRlcnZhbCA9IFwiXCI7XG4gICAgdGhpcy50aGVuID0gXCJcIjtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IFwiXCI7XG4gICAgdGhpcy5ub3cgPSBcIlwiO1xuICAgIHRoaXMudGhlbiA9IFwiXCI7XG4gICAgdGhpcy5lbGFwc2VkID0gXCJcIjtcblxuICAgIC8vIHBhdXNlIGdhbWVcbiAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZVxuXG4gICAgLy8gcGxheWVyIGNhbnZhcyAmIGNvbnRleHRcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKVxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgY29uc29sZS5sb2codGhpcy5kaW1lbnNpb25zKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRpbWVuc2lvbnMpO1xuICB9XG5cbiAgc3RhcnRBbmltYXRlKGZwcykge1xuICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzXG4gICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKVxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuXG4gICAgdGhpcy5hbmltYXRlKClcbiAgfVxuXG4gIGFuaW1hdGUoKSB7XG4gICAgaWYgKHRoaXMuaXNQYXVzZWQpIHJldHVyblxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcbiAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG5cbiAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICAgIHRoaXMuY2hhcmFjdGVyLmFuaW1hdGUoKTtcbiAgICB9XG4gIH1cblxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZFxuICB9XG5cbiAgcGxheSgpIHtcbiAgICBzY2FsZSh0aGlzLmNhbnZhcylcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1hcC5nZXREaW1lbnNpb25zKCkpO1xuICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKVxuICAgIHRoaXMuX3NldFBsYXllcigpXG4gICAgdGhpcy5tYXAuZHJhdygpXG4gICAgXG4gICAgdGhpcy5zdGFydEFuaW1hdGUoMTUpXG4gIH1cblxuICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB0aGlzLm1hcC5nZXREaW1lbnNpb25zKClcbiAgICAvLyBjb25zb2xlLmxvZyh3aWR0aCk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGhcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0XG4gICAgXG4gIH1cblxuICBfc2V0UGxheWVyKCl7XG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgUHJvdGFnb25pc3QodGhpcy5jdHgsIHRoaXMubWFwLmdldERpbWVuc2lvbnMoKSwgTWFwLmdldENvbGxpc2lvbk1hcCgpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiLy8gbWFwMS5qc1xuXG5pbXBvcnQgb2ZmaWNlMSBmcm9tICcuLi9hc3Nlc3RzL2JhY2tncm91bmRzL09mZmljZV9EZXNpZ25fMS5wbmcnXG5cbmNsYXNzIE1hcDEge1xuICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kTGF5ZXInKVxuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIHRoaXMuY29sbGlkZU1hcCA9IHRoaXMuY29uc3RydWN0b3IuZ2V0Q29sbGlzaW9uTWFwKClcbiAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKClcbiAgICB0aGlzLmltYWdlLnNyYyA9IG9mZmljZTFcbiAgICB0aGlzLmRyYXcoKVxuICB9XG5cbiAgc3RhdGljIGdldENvbGxpc2lvbk1hcCgpIHtcbiAgICAvLyBsYXN0IGVsZW1lbnQgaW4gYXJyYXkgaXMgN3gxNlxuICAgIHJldHVybiBbIC8vISA5eDEyXG4gICAgICAvLyBbMSwxLDEsMSwxLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgLy8gWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgIFsxLDEsMSwxLDEsMCwwLDAsMCwwLDAsMF0sXG4gICAgICBbMSwxLDEsMSwxLDEsMSwwLDAsMCwwLDBdLFxuICAgICAgWzEsMSwxLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMSwxLDEsMV0sXG4gICAgICBbMSwxLDEsMSwwLDEsMSwxLDEsMSwxLDFdLFxuICAgICAgWzEsMSwxLDEsMCwwLDEsMSwxLDEsMSwxXSxcbiAgICAgIFswLDAsMCwwLDAsMCwxLDEsMSwxLDEsMV0sXG4gICAgICBbMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxuICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXSxcbiAgICAgIFswLDAsMCwwLDAsMCwxLDEsMSwxLDEsMF0sXG4gICAgICBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLy8gYm90dG9tIHJvdyBpcyA1eDE2XG4gICAgXVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5pbWFnZS5uYXR1cmFsV2lkdGhcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDApXG4gICAgfVxuICB9XG5cbiAgZ2V0RGltZW5zaW9ucygpe1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogdGhpcy5pbWFnZS5uYXR1cmFsV2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaW1hZ2UubmF0dXJhbEhlaWdodFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXAxIiwiLy8gcGxheWVyLmpzXG5cbmltcG9ydCB5b3VuZ0NocmlzIGZyb20gJy4uL2Fzc2VzdHMvY2hhcmFjdGVycy9jaHJpcy5wbmcnXG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGN0eCwgZGltZW5zaW9ucywgY29sbGlzaW9uTWFwKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9uc1xuICAgIHRoaXMuY29sbGlzaW9uTWFwID0gY29sbGlzaW9uTWFwXG4gICAgdGhpcy5jdHggPSBjdHhcbiAgICAvLyBjb25zb2xlLmxvZyhkaW1lbnNpb25zKTtcbiAgICAvLyBwb3NcbiAgICB0aGlzLnggPSAwXG4gICAgdGhpcy55ID0gMTMwXG5cbiAgICAvLyBzcHJpdGVcbiAgICB0aGlzLndpZHRoID0gMTZcbiAgICB0aGlzLmhlaWdodCA9IDMyXG4gICAgdGhpcy5mcmFtZVggPSAzXG4gICAgdGhpcy5mcmFtZVkgPSAwXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgdGhpcy5pbWFnZS5zcmMgPSB5b3VuZ0NocmlzXG4gICAgdGhpcy5rZXlwcmVzcyA9IHt9XG4gICAgdGhpcy5TUEVFRCA9IDlcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlXG4gICAgdGhpcy5fcmVnaXN0ZXJFdmVudHMoKVxuICB9XG5cblxuICAvLyAqIGJpbmRzIGV2ZW50IGxpc3RlbmVyc1xuICBfcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgdGhpcy5rZXlwcmVzc1tlLmNvZGVdID0gdHJ1ZTtcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICBkZWxldGUgdGhpcy5rZXlwcmVzc1tlLmNvZGVdO1xuICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuZnJhbWVYID0gMVxuICAgIH0pXG4gIH1cblxuICBfZHJhd1Nwcml0ZShpbWcsIHNYLCBzWSwgc1csc0gsZFgsZFksZFcsZEgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCBzWCwgc1ksIHNXLHNILGRYLGRZLGRXLGRIKVxuICB9XG5cbiAgX2dldENvbGxpc2lvblBvc2l0aW9uKCl7XG4gICAgLy8gY29uc29sZS5sb2coe1xuICAgIC8vICAgeDogdGhpcy54LFxuICAgIC8vICAgeTogdGhpcy55XG4gICAgLy8gfSk7XG4gICAgY29uc3QgY3VyclggPSBNYXRoLmZsb29yKHRoaXMueCAvIDE1KVxuICAgIGNvbnN0IGN1cnJZID0gTWF0aC5mbG9vcih0aGlzLnkgLyAxNC4yNSlcbiAgICAvLyBjb25zb2xlLmxvZyh7Y3Vyclh9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh7Y3Vycll9KTtcblxuICAgIHJldHVybiBbY3VyclgsY3VyclldXG4gIH1cblxuICAvLyAqIG1haW4gZnVuY3Rpb24gdG8gbW92ZSB5b3VuZyBjaHJpc1xuICBhbmltYXRlKCkge1xuICAgIHRoaXMuX2RyYXdTcHJpdGUoXG4gICAgICB0aGlzLmltYWdlLCBcbiAgICAgIHRoaXMud2lkdGggKiB0aGlzLmZyYW1lWCwgXG4gICAgICB0aGlzLmhlaWdodCAqIHRoaXMuZnJhbWVZLFxuICAgICAgdGhpcy53aWR0aCwgXG4gICAgICB0aGlzLmhlaWdodCwgXG4gICAgICB0aGlzLngsXG4gICAgICB0aGlzLnksIFxuICAgICAgdGhpcy53aWR0aCwgXG4gICAgICB0aGlzLmhlaWdodFxuICAgIClcbiAgICB0aGlzLm1vdmVQbGF5ZXIoKVxuICAgIHRoaXMucGxheWVyRnJhbWUoKSAgICBcbiAgfVxuXG4gIC8vICogbW92ZXMgeC11IHBvc2l0aW9uXG4gIG1vdmVQbGF5ZXIoKSB7XG4gICAgY29uc3QgW3gseV0gPSB0aGlzLl9nZXRDb2xsaXNpb25Qb3NpdGlvbigpXG5cbiAgICBpZiAodGhpcy5rZXlwcmVzc1snS2V5VyddICYmIHRoaXMueSA+IHRoaXMuU1BFRUQgJiYgdGhpcy5jb2xsaXNpb25NYXBbeSAtIDFdW3hdID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPCA2IHx8IHRoaXMuZnJhbWVYID4gMTApIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSA2XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMlxuICAgICAgfVxuICAgICAgdGhpcy55IC09IHRoaXMuU1BFRURcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAodGhpcy5rZXlwcmVzc1snS2V5QSddICYmIHRoaXMueCA+IDAgJiYgdGhpcy5jb2xsaXNpb25NYXBbeV1beCAtIDFdID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPCAxMiB8fCB0aGlzLmZyYW1lWCA+IDE3KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMTJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAyXG4gICAgICB9XG4gICAgICB0aGlzLnggLT0gdGhpcy5TUEVFRFxuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlXG4gICAgfVxuICAgIGlmICh0aGlzLmtleXByZXNzWydLZXlEJ10gJiYgKHRoaXMueCA8IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIHRoaXMud2lkdGggKiAxLjc1KSAmJiB0aGlzLmNvbGxpc2lvbk1hcFt5XVt4ICsgMV0gPT09IDApIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+IDUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMlxuICAgICAgfVxuICAgICAgdGhpcy54ICs9IHRoaXMuU1BFRURcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAodGhpcy5rZXlwcmVzc1snS2V5UyddICYmICh0aGlzLnkgPCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC0gTWF0aC5mbG9vcih0aGlzLmhlaWdodCAqIDEuNSkpICYmIHRoaXMuY29sbGlzaW9uTWFwW3kgKyAxXVt4XSA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgMTggfHwgdGhpcy5mcmFtZVggPj0gMjMpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAxOFxuICAgICAgICB0aGlzLmZyYW1lWSA9IDJcbiAgICAgIH1cbiAgICAgIHRoaXMueSArPSB0aGlzLlNQRUVEXG4gICAgICB0aGlzLm1vdmluZyA9IHRydWVcbiAgICB9XG4gIH1cblxuICAvLyAqIGRvbnQgYXNrIGFib3V0IHJhbmRvbSBudW1iZXJzLiBpdCBqdXN0IHdvcmtzXG4gIC8vICogZnJhbWUgYW5pbWF0aW9uc1xuICBwbGF5ZXJGcmFtZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1vdmluZyk7XG4gICAgY29uc29sZS5sb2codGhpcy5mcmFtZVgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZnJhbWVZKTtcbiAgICBpZiAoIXRoaXMubW92aW5nKSB7XG4gICAgICB0aGlzLmZyYW1lWSA9IDFcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA9PT0gNSkge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID09PSAxMSkge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDZcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID09PSAxNykge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDEyXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLmZyYW1lWCA+PSAyMyl7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMThcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhbWVYID4gMjIpIHtcbiAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgIH1cbiAgICB0aGlzLmZyYW1lWCsrIC8vIFRPRE86IHRoaXMgYnVncyBvdXQgd2hlbiBob2xkaW5nIG5vdCBkaXIga2V5cyBhbmQgcnVubmluZyBpbnRvIHdhbGxzXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllciIsIi8vIHNvdW5kcy5qc1xuY2xhc3MgU291bmQge1xuICBjb25zdHJ1Y3RvcihzcmMpIHtcbiAgICB0aGlzLnNvdW5kID0gbmV3IEF1ZGlvKHNyYylcbiAgICB0aGlzLnNvdW5kLnZvbHVtZSA9IDAuMVxuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoKVxuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5zb3VuZC5wYXVzZSgpXG4gIH1cblxuICBpbmNWb2x1bWUoKSB7XG4gICAgdGhpcy5zb3VuZC52b2x1bWUgKz0gLjVcbiAgfVxuXG4gIGRlY1ZvbHVtZSgpIHtcbiAgICB0aGlzLnNvdW5kLnZvbHVtZSAtPSAuNVxuICB9XG5cbiAgZ2V0U291bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc291bmRcbiAgfVxuXG4gIHNldFZvbHVtZSh2b2wpIHtcbiAgICB0aGlzLnNvdW5kLnZvbHVtZSA9IHZvbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kIiwiLy8gdXRpbHMuanNcbmltcG9ydCBTb3VuZCBmcm9tIFwiLi4vY2xhc3Nlcy9zb3VuZFwiO1xuaW1wb3J0IGdhYmJ5IGZyb20gJy4uL2Fzc2VzdHMvbXVzaWMvR2FiYnkubXAzJ1xuaW1wb3J0IGRvWW91IGZyb20gJy4uL2Fzc2VzdHMvbXVzaWMvRG9fWW91Lm1wMydcbmltcG9ydCB3b3JkIGZyb20gJy4uL2Fzc2VzdHMvbXVzaWMvV09SRC5tcDMnXG5pbXBvcnQga2gzIGZyb20gJy4uL2Fzc2VzdHMvbXVzaWMvS0gzLm1wMydcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sbGlkZShhLCBiKSB7XG4gIHJldHVybiAhKFxuICAgICgoYS55ICsgYS5oZWlnaHQpIDwgKGIueSkpIHx8XG4gICAgKGEueSA+IChiLnkgKyBiLmhlaWdodCkpIHx8XG4gICAgKChhLnggKyBhLndpZHRoKSA8IGIueCkgfHxcbiAgICAoYS54ID4gKGIueCArIGIud2lkdGgpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoY2FudmFzKSB7XG4gIGNvbnN0IHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzLndpZHRoXG4gIGNvbnN0IHNjYWxlWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIGNhbnZhcy5oZWlnaHRcbiAgY29uc3Qgc2NhbGVUb0ZpdCA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKSAtIDEuNVxuICBzdGFnZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnY2VudGVyJyAvL3NjYWxlIGZyb20gdG9wIGxlZnRcbiAgc3RhZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKCcgKyBzY2FsZVRvRml0ICsgJyknXG4gIC8vIGJhY2tncm91bmRMYXllci5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoJyArIHNjYWxlVG9GaXQgKyAnKSdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlMaXN0KCkge1xuICBjb25zdCBnYWJieVNvbmcgPSBuZXcgU291bmQoZ2FiYnkpXG4gIGNvbnN0IHdvcmRTb25nID0gbmV3IFNvdW5kKHdvcmQpXG4gIHdvcmRTb25nLnNldFZvbHVtZSguMjUpXG5cbiAgY29uc3QgZG9Zb3VTb25nID0gbmV3IFNvdW5kKGRvWW91KVxuICBkb1lvdVNvbmcuc2V0Vm9sdW1lKC4zNSlcblxuICBjb25zdCBldmFuU29uZyA9IG5ldyBTb3VuZChraDMpXG5cbiAgY29uc3QgcGxheUxpc3RTb25ncyA9IFtnYWJieVNvbmcsIGRvWW91U29uZywgd29yZFNvbmcsIGV2YW5Tb25nXVxuXG4gIGNvbnN0IGZpcnN0U29uZyA9IHBsYXlMaXN0U29uZ3Muc2hpZnQoKVxuICBmaXJzdFNvbmcucGxheSgpXG4gIGZpcnN0U29uZy5nZXRTb3VuZCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSBwbGF5TGlzdFNvbmdzLnNoaWZ0KClcbiAgICBwbGF5TGlzdFNvbmdzLnB1c2gobmV4dClcbiAgICBuZXh0LnBsYXkoKVxuICB9KVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIGluZGV4LmpzXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcydcblxuaW1wb3J0IEdhbWUgZnJvbSAnLi9jbGFzc2VzL2dhbWUnXG5pbXBvcnQgeyBwbGF5TGlzdCB9IGZyb20gJy4vdXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQgeW91bmdDaHJpcyBmcm9tICcuL2Fzc2VzdHMvY2hhcmFjdGVycy9jaHJpcy5wbmcnXG5pbXBvcnQgb2ZmaWNlMSBmcm9tICcuL2Fzc2VzdHMvYmFja2dyb3VuZHMvT2ZmaWNlX0Rlc2lnbl8xLnBuZydcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBwcmVsb2FkIGltYWdlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgaW1hZ2VzID0gW11cblxuZnVuY3Rpb24gcHJlbG9hZCguLi51cmxzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykge1xuICAgIGltYWdlc1tpXSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2VzW2ldLnNyYyA9IHVybHNbaV1cbiAgfVxufVxuXG5wcmVsb2FkKFxuICB5b3VuZ0NocmlzLFxuICBvZmZpY2UxXG4pXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBtYWluIGxvZ2ljXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvLyBiYWNrZ3JvdW5kXG4gIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZExheWVyJylcbiAgLy8gc2NhbGUoY2FudmFzKVxuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZScpXG4gICAgICBkaWFsb2d1ZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICBnYW1lLnRvZ2dsZVBhdXNlKClcbiAgICAgIGdhbWUucGxheSgpXG4gICAgICBwbGF5TGlzdCgpXG4gICAgfVxuICB9KVxuICBcbiAgXG59KTsiXSwibmFtZXMiOlsiUHJvdGFnb25pc3QiLCJNYXAiLCJzY2FsZSIsIkdhbWUiLCJtYXAiLCJmcHNJbnRlcnZhbCIsInRoZW4iLCJzdGFydFRpbWUiLCJub3ciLCJlbGFwc2VkIiwiaXNQYXVzZWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJkaW1lbnNpb25zIiwiZnBzIiwiRGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImNoYXJhY3RlciIsImdldERpbWVuc2lvbnMiLCJfc2V0RGltZW5zaW9ucyIsIl9zZXRQbGF5ZXIiLCJkcmF3Iiwic3RhcnRBbmltYXRlIiwiZ2V0Q29sbGlzaW9uTWFwIiwib2ZmaWNlMSIsIk1hcDEiLCJwbGF5ZXIiLCJjb2xsaWRlTWFwIiwiY29uc3RydWN0b3IiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsImRyYXdJbWFnZSIsInlvdW5nQ2hyaXMiLCJQbGF5ZXIiLCJjb2xsaXNpb25NYXAiLCJ4IiwieSIsImZyYW1lWCIsImZyYW1lWSIsImtleXByZXNzIiwiU1BFRUQiLCJtb3ZpbmciLCJfcmVnaXN0ZXJFdmVudHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJpbWciLCJzWCIsInNZIiwic1ciLCJzSCIsImRYIiwiZFkiLCJkVyIsImRIIiwiY3VyclgiLCJNYXRoIiwiZmxvb3IiLCJjdXJyWSIsIl9kcmF3U3ByaXRlIiwibW92ZVBsYXllciIsInBsYXllckZyYW1lIiwiX2dldENvbGxpc2lvblBvc2l0aW9uIiwiU291bmQiLCJzb3VuZCIsIkF1ZGlvIiwidm9sdW1lIiwicGxheSIsInBhdXNlIiwidm9sIiwiZ2FiYnkiLCJkb1lvdSIsIndvcmQiLCJraDMiLCJpc0NvbGxpZGUiLCJhIiwiYiIsInNjYWxlWCIsImlubmVyV2lkdGgiLCJzY2FsZVkiLCJpbm5lckhlaWdodCIsInNjYWxlVG9GaXQiLCJtaW4iLCJzdGFnZSIsInN0eWxlIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwicGxheUxpc3QiLCJnYWJieVNvbmciLCJ3b3JkU29uZyIsInNldFZvbHVtZSIsImRvWW91U29uZyIsImV2YW5Tb25nIiwicGxheUxpc3RTb25ncyIsImZpcnN0U29uZyIsInNoaWZ0IiwiZ2V0U291bmQiLCJuZXh0IiwicHVzaCIsImltYWdlcyIsInByZWxvYWQiLCJpIiwibGVuZ3RoIiwiYmFja2dyb3VuZCIsImdhbWUiLCJkaWFsb2d1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZVBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==