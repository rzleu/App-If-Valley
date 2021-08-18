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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1QixDQUF2QixDQUhLLEVBSUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQUpLLEVBS0wsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQUxLLEVBTUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQU5LLEVBT0wsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQVBLLEVBUUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQVJLLEVBU0wsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQVRLLEVBVUwsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxF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QUNBckIsUUFBUSxDQUFDNkMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQ7QUFDQSxNQUFNNEQsVUFBVSxHQUFHekcsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFuQixDQUZrRCxDQUdsRDs7QUFDQSxNQUFNeUcsSUFBSSxHQUFHLElBQUluSCxrREFBSixFQUFiO0FBRUFxRCxFQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN4QyxRQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3RCLFVBQU00RCxRQUFRLEdBQUczRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7QUFDQTBHLE1BQUFBLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkI7QUFDQUosTUFBQUEsVUFBVSxDQUFDRyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixNQUE1QjtBQUNBSixNQUFBQSxJQUFJLENBQUNLLFdBQUw7QUFDQUwsTUFBQUEsSUFBSSxDQUFDckMsSUFBTDtBQUNBb0IsTUFBQUEsc0RBQVE7QUFDVDtBQUNGLEdBVEQ7QUFZRCxDQWxCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL2NsYXNzZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvY2xhc3Nlcy9tYXAxLmpzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS8uL3NyYy9jbGFzc2VzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvY2xhc3Nlcy9zb3VuZC5qcyIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NGU0MiIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz9kZDUxIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3RhZ29uaXN0IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IE1hcCBmcm9tICcuL21hcDEnXG5pbXBvcnQgeyBzY2FsZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubWFwID0gbmV3IE1hcCgpXG4gICAgXG4gICAgLy8gYW5pbWF0aW9uc1xuICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSBcIlwiO1xuICAgIHRoaXMudGhlbiA9IFwiXCI7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBcIlwiO1xuICAgIHRoaXMubm93ID0gXCJcIjtcbiAgICB0aGlzLnRoZW4gPSBcIlwiO1xuICAgIHRoaXMuZWxhcHNlZCA9IFwiXCI7XG5cbiAgICAvLyBwYXVzZSBnYW1lXG4gICAgdGhpcy5pc1BhdXNlZCA9IHRydWVcblxuICAgIC8vIHBsYXllciBjYW52YXMgJiBjb250ZXh0XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJylcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kaW1lbnNpb25zKTtcbiAgfVxuXG4gIHN0YXJ0QW5pbWF0ZShmcHMpIHtcbiAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwc1xuICAgIHRoaXMudGhlbiA9IERhdGUubm93KClcbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlblxuICAgIHRoaXMuYW5pbWF0ZSgpXG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIGlmICh0aGlzLmlzUGF1c2VkKSByZXR1cm5cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGUoKSk7XG4gICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuXG4gICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICB0aGlzLmNoYXJhY3Rlci5hbmltYXRlKCk7XG4gICAgfVxuICB9XG5cblxuICB0b2dnbGVQYXVzZSgpIHtcbiAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWRcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgc2NhbGUodGhpcy5jYW52YXMpXG4gICAgY29uc29sZS5sb2codGhpcy5tYXAuZ2V0RGltZW5zaW9ucygpKTtcbiAgICB0aGlzLl9zZXREaW1lbnNpb25zKClcbiAgICB0aGlzLl9zZXRQbGF5ZXIoKVxuICAgIHRoaXMubWFwLmRyYXcoKVxuICAgIFxuICAgIHRoaXMuc3RhcnRBbmltYXRlKDE1KVxuICB9XG5cbiAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gdGhpcy5tYXAuZ2V0RGltZW5zaW9ucygpXG4gICAgLy8gY29uc29sZS5sb2cod2lkdGgpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5kaW1lbnNpb25zLndpZHRoXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodFxuICAgIFxuICB9XG5cbiAgX3NldFBsYXllcigpe1xuICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IFByb3RhZ29uaXN0KHRoaXMuY3R4LCB0aGlzLm1hcC5nZXREaW1lbnNpb25zKCksIE1hcC5nZXRDb2xsaXNpb25NYXAoKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsIi8vIG1hcDEuanNcblxuaW1wb3J0IG9mZmljZTEgZnJvbSAnLi4vYXNzZXN0cy9iYWNrZ3JvdW5kcy9PZmZpY2VfRGVzaWduXzEucG5nJ1xuXG5jbGFzcyBNYXAxIHtcbiAgY29uc3RydWN0b3IocGxheWVyKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZExheWVyJylcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICB0aGlzLmNvbGxpZGVNYXAgPSB0aGlzLmNvbnN0cnVjdG9yLmdldENvbGxpc2lvbk1hcCgpXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgdGhpcy5pbWFnZS5zcmMgPSBvZmZpY2UxXG4gICAgdGhpcy5kcmF3KClcbiAgfVxuXG4gIHN0YXRpYyBnZXRDb2xsaXNpb25NYXAoKSB7XG4gICAgLy8gbGFzdCBlbGVtZW50IGluIGFycmF5IGlzIDd4MTZcbiAgICByZXR1cm4gWyAvLyEgOXgxMlxuICAgICAgLy8gWzEsMSwxLDEsMSwxLDEsMSwxLDEsMSwxXSxcbiAgICAgIC8vIFsxLDEsMSwxLDEsMSwxLDEsMSwxLDEsMV0sXG4gICAgICBbMSwxLDEsMSwxLDAsMCwwLDAsMCwwLDBdLFxuICAgICAgWzEsMSwxLDEsMSwxLDEsMCwwLDAsMCwwXSxcbiAgICAgIFsxLDEsMSwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICBbMSwxLDEsMCwwLDAsMCwwLDEsMSwxLDFdLFxuICAgICAgWzEsMSwxLDEsMCwxLDEsMSwxLDEsMSwxXSxcbiAgICAgIFsxLDEsMSwxLDAsMCwxLDEsMSwxLDEsMV0sXG4gICAgICBbMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDFdLFxuICAgICAgWzAsMCwwLDAsMCwwLDEsMSwxLDEsMSwxXSxcbiAgICAgIFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0sXG4gICAgICBbMCwwLDAsMCwwLDAsMSwxLDEsMSwxLDBdLFxuICAgICAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXS8vIGJvdHRvbSByb3cgaXMgNXgxNlxuICAgIF1cbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuaW1hZ2UubmF0dXJhbFdpZHRoXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmltYWdlLm5hdHVyYWxIZWlnaHRcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCAwLCAwKVxuICAgIH1cbiAgfVxuXG4gIGdldERpbWVuc2lvbnMoKXtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IHRoaXMuaW1hZ2UubmF0dXJhbFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmltYWdlLm5hdHVyYWxIZWlnaHRcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwMSIsIi8vIHBsYXllci5qc1xuXG5pbXBvcnQgeW91bmdDaHJpcyBmcm9tICcuLi9hc3Nlc3RzL2NoYXJhY3RlcnMvY2hyaXMucG5nJ1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihjdHgsIGRpbWVuc2lvbnMsIGNvbGxpc2lvbk1hcCkge1xuICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnNcbiAgICB0aGlzLmNvbGxpc2lvbk1hcCA9IGNvbGxpc2lvbk1hcFxuICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgLy8gY29uc29sZS5sb2coZGltZW5zaW9ucyk7XG4gICAgLy8gcG9zXG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDEzMFxuXG4gICAgLy8gc3ByaXRlXG4gICAgdGhpcy53aWR0aCA9IDE2XG4gICAgdGhpcy5oZWlnaHQgPSAzMlxuICAgIHRoaXMuZnJhbWVYID0gM1xuICAgIHRoaXMuZnJhbWVZID0gMFxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIHRoaXMuaW1hZ2Uuc3JjID0geW91bmdDaHJpc1xuICAgIHRoaXMua2V5cHJlc3MgPSB7fVxuICAgIHRoaXMuU1BFRUQgPSA5XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZVxuICAgIHRoaXMuX3JlZ2lzdGVyRXZlbnRzKClcbiAgfVxuXG5cbiAgLy8gKiBiaW5kcyBldmVudCBsaXN0ZW5lcnNcbiAgX3JlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgIHRoaXMua2V5cHJlc3NbZS5jb2RlXSA9IHRydWU7XG4gICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgZGVsZXRlIHRoaXMua2V5cHJlc3NbZS5jb2RlXTtcbiAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmZyYW1lWCA9IDFcbiAgICB9KVxuICB9XG5cbiAgX2RyYXdTcHJpdGUoaW1nLCBzWCwgc1ksIHNXLHNILGRYLGRZLGRXLGRIKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgc1gsIHNZLCBzVyxzSCxkWCxkWSxkVyxkSClcbiAgfVxuXG4gIF9nZXRDb2xsaXNpb25Qb3NpdGlvbigpe1xuICAgIC8vIGNvbnNvbGUubG9nKHtcbiAgICAvLyAgIHg6IHRoaXMueCxcbiAgICAvLyAgIHk6IHRoaXMueVxuICAgIC8vIH0pO1xuICAgIGNvbnN0IGN1cnJYID0gTWF0aC5mbG9vcih0aGlzLnggLyAxNSlcbiAgICBjb25zdCBjdXJyWSA9IE1hdGguZmxvb3IodGhpcy55IC8gMTQuMjUpXG4gICAgLy8gY29uc29sZS5sb2coe2N1cnJYfSk7XG4gICAgLy8gY29uc29sZS5sb2coe2N1cnJZfSk7XG5cbiAgICByZXR1cm4gW2N1cnJYLGN1cnJZXVxuICB9XG5cbiAgLy8gKiBtYWluIGZ1bmN0aW9uIHRvIG1vdmUgeW91bmcgY2hyaXNcbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLl9kcmF3U3ByaXRlKFxuICAgICAgdGhpcy5pbWFnZSwgXG4gICAgICB0aGlzLndpZHRoICogdGhpcy5mcmFtZVgsIFxuICAgICAgdGhpcy5oZWlnaHQgKiB0aGlzLmZyYW1lWSxcbiAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgdGhpcy5oZWlnaHQsIFxuICAgICAgdGhpcy54LFxuICAgICAgdGhpcy55LCBcbiAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG4gICAgdGhpcy5tb3ZlUGxheWVyKClcbiAgICB0aGlzLnBsYXllckZyYW1lKCkgICAgXG4gIH1cblxuICAvLyAqIG1vdmVzIHgtdSBwb3NpdGlvblxuICBtb3ZlUGxheWVyKCkge1xuICAgIGNvbnN0IFt4LHldID0gdGhpcy5fZ2V0Q29sbGlzaW9uUG9zaXRpb24oKVxuXG4gICAgaWYgKHRoaXMua2V5cHJlc3NbJ0tleVcnXSAmJiB0aGlzLnkgPiB0aGlzLlNQRUVEICYmIHRoaXMuY29sbGlzaW9uTWFwW3kgLSAxXVt4XSA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgNiB8fCB0aGlzLmZyYW1lWCA+IDEwKSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gNlxuICAgICAgICB0aGlzLmZyYW1lWSA9IDJcbiAgICAgIH1cbiAgICAgIHRoaXMueSAtPSB0aGlzLlNQRUVEXG4gICAgICB0aGlzLm1vdmluZyA9IHRydWVcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5cHJlc3NbJ0tleUEnXSAmJiB0aGlzLnggPiAwICYmIHRoaXMuY29sbGlzaW9uTWFwW3ldW3ggLSAxXSA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgMTIgfHwgdGhpcy5mcmFtZVggPiAxNykge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDEyXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMlxuICAgICAgfVxuICAgICAgdGhpcy54IC09IHRoaXMuU1BFRURcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAodGhpcy5rZXlwcmVzc1snS2V5RCddICYmICh0aGlzLnggPCB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSB0aGlzLndpZHRoICogMS43NSkgJiYgdGhpcy5jb2xsaXNpb25NYXBbeV1beCArIDFdID09PSAwKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPiA1KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgICAgICB0aGlzLmZyYW1lWSA9IDJcbiAgICAgIH1cbiAgICAgIHRoaXMueCArPSB0aGlzLlNQRUVEXG4gICAgICB0aGlzLm1vdmluZyA9IHRydWVcbiAgICB9XG4gICAgaWYgKHRoaXMua2V5cHJlc3NbJ0tleVMnXSAmJiAodGhpcy55IDwgdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIE1hdGguZmxvb3IodGhpcy5oZWlnaHQgKiAxLjUpKSAmJiB0aGlzLmNvbGxpc2lvbk1hcFt5ICsgMV1beF0gPT09IDApIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA8IDE4IHx8IHRoaXMuZnJhbWVYID49IDIzKSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMThcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAyXG4gICAgICB9XG4gICAgICB0aGlzLnkgKz0gdGhpcy5TUEVFRFxuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgLy8gKiBkb250IGFzayBhYm91dCByYW5kb20gbnVtYmVycy4gaXQganVzdCB3b3Jrc1xuICAvLyAqIGZyYW1lIGFuaW1hdGlvbnNcbiAgcGxheWVyRnJhbWUoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5tb3ZpbmcpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZnJhbWVYKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZyYW1lWSk7XG4gICAgaWYgKCF0aGlzLm1vdmluZykge1xuICAgICAgdGhpcy5mcmFtZVkgPSAxXG4gICAgICBpZiAodGhpcy5mcmFtZVggPT09IDUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLmZyYW1lWCA9PT0gMTEpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSA2XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLmZyYW1lWCA9PT0gMTcpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAxMlxuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5mcmFtZVggPj0gMjMpe1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDE4XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmZyYW1lWCA+IDIyKSB7XG4gICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICB9XG4gICAgdGhpcy5mcmFtZVgrKyAvLyBUT0RPOiB0aGlzIGJ1Z3Mgb3V0IHdoZW4gaG9sZGluZyBub3QgZGlyIGtleXMgYW5kIHJ1bm5pbmcgaW50byB3YWxsc1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiLCIvLyBzb3VuZHMuanNcbmNsYXNzIFNvdW5kIHtcbiAgY29uc3RydWN0b3Ioc3JjKSB7XG4gICAgdGhpcy5zb3VuZCA9IG5ldyBBdWRpbyhzcmMpXG4gICAgdGhpcy5zb3VuZC52b2x1bWUgPSAwLjFcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5zb3VuZC5wbGF5KClcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHRoaXMuc291bmQucGF1c2UoKVxuICB9XG5cbiAgaW5jVm9sdW1lKCkge1xuICAgIHRoaXMuc291bmQudm9sdW1lICs9IC41XG4gIH1cblxuICBkZWNWb2x1bWUoKSB7XG4gICAgdGhpcy5zb3VuZC52b2x1bWUgLT0gLjVcbiAgfVxuXG4gIGdldFNvdW5kKCkge1xuICAgIHJldHVybiB0aGlzLnNvdW5kXG4gIH1cblxuICBzZXRWb2x1bWUodm9sKSB7XG4gICAgdGhpcy5zb3VuZC52b2x1bWUgPSB2b2xcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb3VuZCIsIi8vIHV0aWxzLmpzXG5pbXBvcnQgU291bmQgZnJvbSBcIi4uL2NsYXNzZXMvc291bmRcIjtcbmltcG9ydCBnYWJieSBmcm9tICcuLi9hc3Nlc3RzL211c2ljL0dhYmJ5Lm1wMydcbmltcG9ydCBkb1lvdSBmcm9tICcuLi9hc3Nlc3RzL211c2ljL0RvX1lvdS5tcDMnXG5pbXBvcnQgd29yZCBmcm9tICcuLi9hc3Nlc3RzL211c2ljL1dPUkQubXAzJ1xuaW1wb3J0IGtoMyBmcm9tICcuLi9hc3Nlc3RzL211c2ljL0tIMy5tcDMnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbGxpZGUoYSwgYikge1xuICByZXR1cm4gIShcbiAgICAoKGEueSArIGEuaGVpZ2h0KSA8IChiLnkpKSB8fFxuICAgIChhLnkgPiAoYi55ICsgYi5oZWlnaHQpKSB8fFxuICAgICgoYS54ICsgYS53aWR0aCkgPCBiLngpIHx8XG4gICAgKGEueCA+IChiLnggKyBiLndpZHRoKSlcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKGNhbnZhcykge1xuICBjb25zdCBzY2FsZVggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIGNhbnZhcy53aWR0aFxuICBjb25zdCBzY2FsZVkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyBjYW52YXMuaGVpZ2h0XG4gIGNvbnN0IHNjYWxlVG9GaXQgPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSkgLSAxLjVcbiAgc3RhZ2Uuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gJ2NlbnRlcicgLy9zY2FsZSBmcm9tIHRvcCBsZWZ0XG4gIHN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgc2NhbGVUb0ZpdCArICcpJ1xuICAvLyBiYWNrZ3JvdW5kTGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKCcgKyBzY2FsZVRvRml0ICsgJyknXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5TGlzdCgpIHtcbiAgY29uc3QgZ2FiYnlTb25nID0gbmV3IFNvdW5kKGdhYmJ5KVxuICBjb25zdCB3b3JkU29uZyA9IG5ldyBTb3VuZCh3b3JkKVxuICB3b3JkU29uZy5zZXRWb2x1bWUoLjI1KVxuXG4gIGNvbnN0IGRvWW91U29uZyA9IG5ldyBTb3VuZChkb1lvdSlcbiAgZG9Zb3VTb25nLnNldFZvbHVtZSguMzUpXG5cbiAgY29uc3QgZXZhblNvbmcgPSBuZXcgU291bmQoa2gzKVxuXG4gIGNvbnN0IHBsYXlMaXN0U29uZ3MgPSBbZ2FiYnlTb25nLCBkb1lvdVNvbmcsIHdvcmRTb25nLCBldmFuU29uZ11cblxuICBjb25zdCBmaXJzdFNvbmcgPSBwbGF5TGlzdFNvbmdzLnNoaWZ0KClcbiAgZmlyc3RTb25nLnBsYXkoKVxuICBmaXJzdFNvbmcuZ2V0U291bmQoKS5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gcGxheUxpc3RTb25ncy5zaGlmdCgpXG4gICAgcGxheUxpc3RTb25ncy5wdXNoKG5leHQpXG4gICAgbmV4dC5wbGF5KClcbiAgfSlcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBpbmRleC5qc1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnXG5cbmltcG9ydCBHYW1lIGZyb20gJy4vY2xhc3Nlcy9nYW1lJ1xuaW1wb3J0IHsgcGxheUxpc3QgfSBmcm9tICcuL3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHlvdW5nQ2hyaXMgZnJvbSAnLi9hc3Nlc3RzL2NoYXJhY3RlcnMvY2hyaXMucG5nJ1xuaW1wb3J0IG9mZmljZTEgZnJvbSAnLi9hc3Nlc3RzL2JhY2tncm91bmRzL09mZmljZV9EZXNpZ25fMS5wbmcnXG5cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gcHJlbG9hZCBpbWFnZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGltYWdlcyA9IFtdXG5cbmZ1bmN0aW9uIHByZWxvYWQoLi4udXJscykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspIHtcbiAgICBpbWFnZXNbaV0gPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlc1tpXS5zcmMgPSB1cmxzW2ldXG4gIH1cbn1cblxucHJlbG9hZChcbiAgeW91bmdDaHJpcyxcbiAgb2ZmaWNlMVxuKVxuXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gbWFpbiBsb2dpY1xuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy8gYmFja2dyb3VuZFxuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmRMYXllcicpXG4gIC8vIHNjYWxlKGNhbnZhcylcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKClcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9ndWUnKVxuICAgICAgZGlhbG9ndWUuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICAgICAgZ2FtZS50b2dnbGVQYXVzZSgpXG4gICAgICBnYW1lLnBsYXkoKVxuICAgICAgcGxheUxpc3QoKVxuICAgIH1cbiAgfSlcbiAgXG4gIFxufSk7Il0sIm5hbWVzIjpbIlByb3RhZ29uaXN0IiwiTWFwIiwic2NhbGUiLCJHYW1lIiwibWFwIiwiZnBzSW50ZXJ2YWwiLCJ0aGVuIiwic3RhcnRUaW1lIiwibm93IiwiZWxhcHNlZCIsImlzUGF1c2VkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiZGltZW5zaW9ucyIsImZwcyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyYWN0ZXIiLCJnZXREaW1lbnNpb25zIiwiX3NldERpbWVuc2lvbnMiLCJfc2V0UGxheWVyIiwiZHJhdyIsInN0YXJ0QW5pbWF0ZSIsImdldENvbGxpc2lvbk1hcCIsIm9mZmljZTEiLCJNYXAxIiwicGxheWVyIiwiY29sbGlkZU1hcCIsImNvbnN0cnVjdG9yIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJkcmF3SW1hZ2UiLCJ5b3VuZ0NocmlzIiwiUGxheWVyIiwiY29sbGlzaW9uTWFwIiwieCIsInkiLCJmcmFtZVgiLCJmcmFtZVkiLCJrZXlwcmVzcyIsIlNQRUVEIiwibW92aW5nIiwiX3JlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwiaW1nIiwic1giLCJzWSIsInNXIiwic0giLCJkWCIsImRZIiwiZFciLCJkSCIsImN1cnJYIiwiTWF0aCIsImZsb29yIiwiY3VyclkiLCJfZHJhd1Nwcml0ZSIsIm1vdmVQbGF5ZXIiLCJwbGF5ZXJGcmFtZSIsIl9nZXRDb2xsaXNpb25Qb3NpdGlvbiIsIlNvdW5kIiwic291bmQiLCJBdWRpbyIsInZvbHVtZSIsInBsYXkiLCJwYXVzZSIsInZvbCIsImdhYmJ5IiwiZG9Zb3UiLCJ3b3JkIiwia2gzIiwiaXNDb2xsaWRlIiwiYSIsImIiLCJzY2FsZVgiLCJpbm5lcldpZHRoIiwic2NhbGVZIiwiaW5uZXJIZWlnaHQiLCJzY2FsZVRvRml0IiwibWluIiwic3RhZ2UiLCJzdHlsZSIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsInBsYXlMaXN0IiwiZ2FiYnlTb25nIiwid29yZFNvbmciLCJzZXRWb2x1bWUiLCJkb1lvdVNvbmciLCJldmFuU29uZyIsInBsYXlMaXN0U29uZ3MiLCJmaXJzdFNvbmciLCJzaGlmdCIsImdldFNvdW5kIiwibmV4dCIsInB1c2giLCJpbWFnZXMiLCJwcmVsb2FkIiwiaSIsImxlbmd0aCIsImJhY2tncm91bmQiLCJnYW1lIiwiZGlhbG9ndWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ0b2dnbGVQYXVzZSJdLCJzb3VyY2VSb290IjoiIn0=