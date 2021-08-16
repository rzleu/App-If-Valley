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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    // context
    this.ctx = ctx; // main character

    this.character = new _player__WEBPACK_IMPORTED_MODULE_0__.default(this.ctx); // animations

    this.fpsInterval = "";
    this.then = "";
    this.startTime = "";
    this.now = "";
    this.then = "";
    this.elapsed = ""; // canvas dimensions

    this.dimensions = {
      width: 480,
      height: 320
    };
    this.x = this.dimensions.width;
    this.y = this.dimensions.height; // pause game

    this.isPaused = true;
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
    key: "start",
    value: function start() {
      this.startAnimate(15);
    }
  }], [{
    key: "drawBackground",
    value: function drawBackground(canvas, ctx, bg) {
      canvas.width = bg.naturalWidth;
      canvas.height = bg.naturalHeight;
      ctx.drawImage(bg, 0, 0);
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/characters/chris.png */ "./src/assests/characters/chris.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// player.js


var Player = /*#__PURE__*/function () {
  function Player(ctx) {
    _classCallCheck(this, Player);

    this.ctx = ctx;
    this.x = 200;
    this.y = 200; // sprite

    this.width = 16;
    this.height = 32;
    this.frameX = 3;
    this.frameY = 0;
    this.image = new Image();
    this.image.src = _assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_0__;
    this.keypress = {};
    this.speed = 9;
    this.moving = false;

    this._registerEvents();
  } // * binds event listeners


  _createClass(Player, [{
    key: "_registerEvents",
    value: function _registerEvents() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        return _this.keyDown(e);
      });
      window.addEventListener("keyup", function (e) {
        return _this.keyUp(e);
      });
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      this.keypress[e.code] = true;
      this.moving = true;
    }
  }, {
    key: "keyUp",
    value: function keyUp(e) {
      delete this.keypress[e.code];
      this.moving = false;
    }
  }, {
    key: "_drawSprite",
    value: function _drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
      this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    } // * main function to move young chris

  }, {
    key: "animate",
    value: function animate() {
      this._drawSprite(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);

      this.movePlayer();
      this.playerFrame(); // requestAnimationFrame(() => this.animate())
    } // * moves x-u position

  }, {
    key: "movePlayer",
    value: function movePlayer() {
      if (this.keypress['KeyW']) {
        if (this.frameX < 6 || this.frameX > 10) {
          this.frameX = 6;
          this.frameY = 2;
        }

        this.y -= this.speed;
        this.moving = true;
      }

      if (this.keypress['KeyA']) {
        if (this.frameX < 12 || this.frameX > 17) {
          this.frameX = 12;
          this.frameY = 2;
        }

        this.x -= this.speed;
        this.moving = true;
      }

      if (this.keypress['KeyD']) {
        if (this.frameX > 5) {
          this.frameX = 0;
          this.frameY = 2;
        }

        this.x += this.speed;
        this.moving = true;
      }

      if (this.keypress['KeyS']) {
        if (this.frameX < 18 || this.frameX >= 23) {
          this.frameX = 18;
          this.frameY = 2;
        }

        this.y += this.speed;
        this.moving = true;
      }
    } // * dont ask about random numbers. it just works
    // * frame animations

  }, {
    key: "playerFrame",
    value: function playerFrame() {
      // console.log(this.frameX);
      if (this.moving) {
        this.frameX += 1;
      } else {
        if (this.frameX > 17) {
          this.frameX = 18;
          this.frameY = 1;
        } else if (this.frameX > 11) {
          this.frameX = 12;
          this.frameY = 1;
        } else if (this.frameX > 5) {
          this.frameX = 6;
          this.frameY = 1;
        } else if (this.frameX < 6) {
          this.frameX = 0;
          this.frameY = 1;
        }
      }
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

    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  _createClass(Sound, [{
    key: "play",
    value: function play() {
      this.sound.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.sound.pause();
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
/* harmony export */   "scale": function() { return /* binding */ scale; }
/* harmony export */ });
// utils.js
function isCollide(a, b) {
  return !(a.y + a.height < b.y || a.y > b.y + b.height || a.x + a.width < b.x || a.x > b.x + b.width);
}
function scale(canvas) {
  var scaleX = window.innerWidth / canvas.width;
  var scaleY = window.innerHeight / canvas.height;
  var scaleToFit = Math.min(scaleX, scaleY);
  stage.style.transformOrigin = '40% 60%'; //scale from top left

  stage.style.transform = 'scale(' + scaleToFit + ')';
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

module.exports = __webpack_require__.p + "01a49cfc7a0f9014cbdc.png";

/***/ }),

/***/ "./src/assests/characters/chris.png":
/*!******************************************!*\
  !*** ./src/assests/characters/chris.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85499af6442d8cb5b070.png";

/***/ }),

/***/ "./src/assests/music/Gabby.mp3":
/*!*************************************!*\
  !*** ./src/assests/music/Gabby.mp3 ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fbcf912ed9ad36c2aefd.mp3";

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
/* harmony import */ var _classes_sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/sound */ "./src/classes/sound.js");
/* harmony import */ var _assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assests/characters/chris.png */ "./src/assests/characters/chris.png");
/* harmony import */ var _assests_backgrounds_Office_Design_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assests/backgrounds/Office_Design_1.png */ "./src/assests/backgrounds/Office_Design_1.png");
/* harmony import */ var _assests_music_Gabby_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assests/music/Gabby.mp3 */ "./src/assests/music/Gabby.mp3");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.js");
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
  var music = new _classes_sound__WEBPACK_IMPORTED_MODULE_3__.default(_assests_music_Gabby_mp3__WEBPACK_IMPORTED_MODULE_6__); // player

  var canvas = document.getElementById('player');
  canvas.width = 480;
  canvas.height = 320;
  var ctx = canvas.getContext('2d'); // background

  var background = document.getElementById('background-layer');
  var ctxBG = background.getContext('2d');
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__.scale)(canvas);
  var game = new _classes_game__WEBPACK_IMPORTED_MODULE_2__.default(ctx, ctxBG);

  images[1].onload = function () {
    _classes_game__WEBPACK_IMPORTED_MODULE_2__.default.drawBackground(background, ctxBG, images[1]);
  };

  window.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      var dialogue = document.getElementById('dialogue');
      dialogue.classList.add('hide');
      background.classList.remove('hide');
      game.togglePause();
      game.start();
      music.play();
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVYsR0FBbUIsWUFBTTtBQUN2QjNGLElBQUFBLGlFQUFBLENBQW9Cd0YsVUFBcEIsRUFBZ0NDLEtBQWhDLEVBQXVDUixNQUFNLENBQUMsQ0FBRCxDQUE3QztBQUNELEdBRkQ7O0FBSUE3QyxFQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN4QyxRQUFJQSxDQUFDLENBQUNHLElBQUYsS0FBVyxPQUFmLEVBQXdCO0FBQ3RCLFVBQU1vRCxRQUFRLEdBQUdyQyxRQUFRLENBQUM4QixjQUFULENBQXdCLFVBQXhCLENBQWpCO0FBQ0FPLE1BQUFBLFFBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkI7QUFDQVAsTUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixNQUE1QjtBQUNBTixNQUFBQSxJQUFJLENBQUNPLFdBQUw7QUFDQVAsTUFBQUEsSUFBSSxDQUFDUSxLQUFMO0FBQ0FiLE1BQUFBLEtBQUssQ0FBQ3RCLElBQU47QUFDRDtBQUNGLEdBVEQ7QUFZRCxDQS9CRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL2NsYXNzZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvY2xhc3Nlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL2NsYXNzZXMvc291bmQuanMiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3RhZ29uaXN0IGZyb20gJy4vcGxheWVyJ1xuXG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAvLyBjb250ZXh0XG4gICAgdGhpcy5jdHggPSBjdHhcblxuICAgIC8vIG1haW4gY2hhcmFjdGVyXG4gICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgUHJvdGFnb25pc3QodGhpcy5jdHgpXG5cbiAgICAvLyBhbmltYXRpb25zXG4gICAgdGhpcy5mcHNJbnRlcnZhbCA9IFwiXCI7XG4gICAgdGhpcy50aGVuID0gXCJcIjtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IFwiXCI7XG4gICAgdGhpcy5ub3cgPSBcIlwiO1xuICAgIHRoaXMudGhlbiA9IFwiXCI7XG4gICAgdGhpcy5lbGFwc2VkID0gXCJcIjtcblxuICAgIC8vIGNhbnZhcyBkaW1lbnNpb25zXG4gICAgdGhpcy5kaW1lbnNpb25zID0ge1xuICAgICAgd2lkdGg6IDQ4MCxcbiAgICAgIGhlaWdodDogMzIwXG4gICAgfTtcbiAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGg7XG4gICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodDtcblxuICAgIC8vIHBhdXNlIGdhbWVcbiAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZVxuICB9XG5cbiAgc3RhdGljIGRyYXdCYWNrZ3JvdW5kKGNhbnZhcywgY3R4LGJnKXtcbiAgICBjYW52YXMud2lkdGggPSBiZy5uYXR1cmFsV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGJnLm5hdHVyYWxIZWlnaHQ7XG4gICAgY3R4LmRyYXdJbWFnZShiZywwLDApXG4gIH1cblxuICBzdGFydEFuaW1hdGUoZnBzKSB7XG4gICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHNcbiAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW5cbiAgICB0aGlzLmFuaW1hdGUoKVxuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBpZiAodGhpcy5pc1BhdXNlZCkgcmV0dXJuXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpO1xuICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcblxuICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbnMud2lkdGgsIHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpO1xuICAgICAgdGhpcy5jaGFyYWN0ZXIuYW5pbWF0ZSgpO1xuICAgIH1cbiAgfVxuXG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9ICF0aGlzLmlzUGF1c2VkXG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnN0YXJ0QW5pbWF0ZSgxNSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiLy8gcGxheWVyLmpzXG5cbmltcG9ydCB5b3VuZ0NocmlzIGZyb20gJy4uL2Fzc2VzdHMvY2hhcmFjdGVycy9jaHJpcy5wbmcnXG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgdGhpcy54ID0gMjAwXG4gICAgdGhpcy55ID0gMjAwXG5cbiAgICAvLyBzcHJpdGVcbiAgICB0aGlzLndpZHRoID0gMTZcbiAgICB0aGlzLmhlaWdodCA9IDMyXG4gICAgdGhpcy5mcmFtZVggPSAzXG4gICAgdGhpcy5mcmFtZVkgPSAwXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgdGhpcy5pbWFnZS5zcmMgPSB5b3VuZ0NocmlzXG4gICAgdGhpcy5rZXlwcmVzcyA9IHt9XG4gICAgdGhpcy5zcGVlZCA9IDlcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlXG5cbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpXG4gIH1cblxuXG4gIC8vICogYmluZHMgZXZlbnQgbGlzdGVuZXJzXG4gIF9yZWdpc3RlckV2ZW50cygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB0aGlzLmtleURvd24oZSkpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHRoaXMua2V5VXAoZSkpXG4gIH1cblxuICBrZXlEb3duKGUpIHtcbiAgICB0aGlzLmtleXByZXNzW2UuY29kZV0gPSB0cnVlO1xuICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcblxuICB9XG5cbiAga2V5VXAoZSkge1xuICAgIGRlbGV0ZSB0aGlzLmtleXByZXNzW2UuY29kZV07XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgfVxuXG5cbiAgX2RyYXdTcHJpdGUoaW1nLCBzWCwgc1ksIHNXLHNILGRYLGRZLGRXLGRIKSB7XG4gICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgc1gsIHNZLCBzVyxzSCxkWCxkWSxkVyxkSClcbiAgfVxuXG4gIC8vICogbWFpbiBmdW5jdGlvbiB0byBtb3ZlIHlvdW5nIGNocmlzXG4gIGFuaW1hdGUoKSB7XG4gICAgdGhpcy5fZHJhd1Nwcml0ZShcbiAgICAgIHRoaXMuaW1hZ2UsIFxuICAgICAgdGhpcy53aWR0aCAqIHRoaXMuZnJhbWVYLCBcbiAgICAgIHRoaXMuaGVpZ2h0ICogdGhpcy5mcmFtZVksXG4gICAgICB0aGlzLndpZHRoLCBcbiAgICAgIHRoaXMuaGVpZ2h0LCBcbiAgICAgIHRoaXMueCxcbiAgICAgIHRoaXMueSwgXG4gICAgICB0aGlzLndpZHRoLCBcbiAgICAgIHRoaXMuaGVpZ2h0XG4gICAgKVxuICAgIHRoaXMubW92ZVBsYXllcigpXG4gICAgdGhpcy5wbGF5ZXJGcmFtZSgpXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKVxuICB9XG5cbiAgLy8gKiBtb3ZlcyB4LXUgcG9zaXRpb25cbiAgbW92ZVBsYXllcigpIHtcbiAgICBpZiAodGhpcy5rZXlwcmVzc1snS2V5VyddKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPCA2IHx8IHRoaXMuZnJhbWVYID4gMTApIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSA2XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMlxuICAgICAgfVxuICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWRcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAodGhpcy5rZXlwcmVzc1snS2V5QSddKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPCAxMiB8fCB0aGlzLmZyYW1lWCA+IDE3KSB7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMTJcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAyXG4gICAgICB9XG4gICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZFxuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlXG4gICAgfVxuICAgIGlmICh0aGlzLmtleXByZXNzWydLZXlEJ10pIHtcbiAgICAgIGlmICh0aGlzLmZyYW1lWCA+IDUpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMlxuICAgICAgfVxuICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWRcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgIH1cbiAgICBpZiAodGhpcy5rZXlwcmVzc1snS2V5UyddKSB7XG4gICAgICBpZiAodGhpcy5mcmFtZVggPCAxOCB8fCB0aGlzLmZyYW1lWCA+PSAyMykge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDE4XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMlxuICAgICAgfVxuICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWRcbiAgICAgIHRoaXMubW92aW5nID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIC8vICogZG9udCBhc2sgYWJvdXQgcmFuZG9tIG51bWJlcnMuIGl0IGp1c3Qgd29ya3NcbiAgLy8gKiBmcmFtZSBhbmltYXRpb25zXG4gIHBsYXllckZyYW1lKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZnJhbWVYKTtcbiAgICBpZiAodGhpcy5tb3ZpbmcpIHtcbiAgICAgIHRoaXMuZnJhbWVYICs9IDFcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZnJhbWVYID4gMTcpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAxOFxuICAgICAgICB0aGlzLmZyYW1lWSA9IDFcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID4gMTEpIHtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAxMlxuICAgICAgICB0aGlzLmZyYW1lWSA9IDFcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID4gNSkge1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDZcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAxXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLmZyYW1lWCA8IDYpe1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAxXG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXIiLCIvLyBzb3VuZHMuanNcblxuY2xhc3MgU291bmQge1xuICBjb25zdHJ1Y3RvcihzcmMpIHtcbiAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpXG4gICAgdGhpcy5zb3VuZC5zcmMgPSBzcmNcbiAgICB0aGlzLnNvdW5kLnNldEF0dHJpYnV0ZShcInByZWxvYWRcIiwgXCJhdXRvXCIpXG4gICAgdGhpcy5zb3VuZC5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcIm5vbmVcIilcbiAgICB0aGlzLnNvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zb3VuZCk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuc291bmQucGxheSgpXG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuc291bmQucGF1c2UoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdW5kIiwiLy8gdXRpbHMuanNcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29sbGlkZShhLCBiKSB7XG4gIHJldHVybiAhKFxuICAgICgoYS55ICsgYS5oZWlnaHQpIDwgKGIueSkpIHx8XG4gICAgKGEueSA+IChiLnkgKyBiLmhlaWdodCkpIHx8XG4gICAgKChhLnggKyBhLndpZHRoKSA8IGIueCkgfHxcbiAgICAoYS54ID4gKGIueCArIGIud2lkdGgpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoY2FudmFzKSB7XG4gIGNvbnN0IHNjYWxlWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gY2FudmFzLndpZHRoXG4gIGNvbnN0IHNjYWxlWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIGNhbnZhcy5oZWlnaHRcbiAgY29uc3Qgc2NhbGVUb0ZpdCA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKVxuICBzdGFnZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnNDAlIDYwJScgLy9zY2FsZSBmcm9tIHRvcCBsZWZ0XG4gIHN0YWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgc2NhbGVUb0ZpdCArICcpJ1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIGluZGV4LmpzXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcydcbmltcG9ydCBHYW1lIGZyb20gJy4vY2xhc3Nlcy9nYW1lJ1xuaW1wb3J0IFNvdW5kIGZyb20gJy4vY2xhc3Nlcy9zb3VuZCdcblxuaW1wb3J0IHlvdW5nQ2hyaXMgZnJvbSAnLi9hc3Nlc3RzL2NoYXJhY3RlcnMvY2hyaXMucG5nJ1xuaW1wb3J0IG9mZmljZTEgZnJvbSAnLi9hc3Nlc3RzL2JhY2tncm91bmRzL09mZmljZV9EZXNpZ25fMS5wbmcnXG5pbXBvcnQgZ2FiYnkgZnJvbSAnLi9hc3Nlc3RzL211c2ljL0dhYmJ5Lm1wMydcbmltcG9ydCB7IHNjYWxlIH0gZnJvbSAnLi91dGlscy91dGlscydcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIHByZWxvYWQgaW1hZ2VzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBpbWFnZXMgPSBbXVxuXG5mdW5jdGlvbiBwcmVsb2FkKC4uLnVybHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgaSsrKSB7XG4gICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICBpbWFnZXNbaV0uc3JjID0gdXJsc1tpXVxuICB9XG59XG5cbnByZWxvYWQoXG4gIHlvdW5nQ2hyaXMsXG4gIG9mZmljZTFcbilcblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIG1haW4gbG9naWNcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG11c2ljID0gbmV3IFNvdW5kKGdhYmJ5KVxuICAvLyBwbGF5ZXJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpXG4gIGNhbnZhcy53aWR0aCA9IDQ4MFxuICBjYW52YXMuaGVpZ2h0ID0gMzIwXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgLy8gYmFja2dyb3VuZFxuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtbGF5ZXInKVxuXG4gIGNvbnN0IGN0eEJHID0gYmFja2dyb3VuZC5nZXRDb250ZXh0KCcyZCcpXG4gIHNjYWxlKGNhbnZhcylcbiAgXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgsIGN0eEJHKVxuICBpbWFnZXNbMV0ub25sb2FkID0gKCkgPT4ge1xuICAgIEdhbWUuZHJhd0JhY2tncm91bmQoYmFja2dyb3VuZCwgY3R4QkcsIGltYWdlc1sxXSlcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2d1ZScpXG4gICAgICBkaWFsb2d1ZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICBnYW1lLnRvZ2dsZVBhdXNlKClcbiAgICAgIGdhbWUuc3RhcnQoKVxuICAgICAgbXVzaWMucGxheSgpXG4gICAgfVxuICB9KVxuICBcbiAgXG59KTsiXSwibmFtZXMiOlsiUHJvdGFnb25pc3QiLCJHYW1lIiwiY3R4IiwiY2hhcmFjdGVyIiwiZnBzSW50ZXJ2YWwiLCJ0aGVuIiwic3RhcnRUaW1lIiwibm93IiwiZWxhcHNlZCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiaXNQYXVzZWQiLCJmcHMiLCJEYXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInN0YXJ0QW5pbWF0ZSIsImNhbnZhcyIsImJnIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsImRyYXdJbWFnZSIsInlvdW5nQ2hyaXMiLCJQbGF5ZXIiLCJmcmFtZVgiLCJmcmFtZVkiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwia2V5cHJlc3MiLCJzcGVlZCIsIm1vdmluZyIsIl9yZWdpc3RlckV2ZW50cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5RG93biIsImtleVVwIiwiY29kZSIsImltZyIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJfZHJhd1Nwcml0ZSIsIm1vdmVQbGF5ZXIiLCJwbGF5ZXJGcmFtZSIsIlNvdW5kIiwic291bmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJwbGF5IiwicGF1c2UiLCJpc0NvbGxpZGUiLCJhIiwiYiIsInNjYWxlIiwic2NhbGVYIiwiaW5uZXJXaWR0aCIsInNjYWxlWSIsImlubmVySGVpZ2h0Iiwic2NhbGVUb0ZpdCIsIk1hdGgiLCJtaW4iLCJzdGFnZSIsInRyYW5zZm9ybU9yaWdpbiIsInRyYW5zZm9ybSIsIm9mZmljZTEiLCJnYWJieSIsImltYWdlcyIsInByZWxvYWQiLCJpIiwibGVuZ3RoIiwibXVzaWMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kIiwiY3R4QkciLCJnYW1lIiwib25sb2FkIiwiZHJhd0JhY2tncm91bmQiLCJkaWFsb2d1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZVBhdXNlIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9