/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  function Player(ctx, keys) {
    _classCallCheck(this, Player);

    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 15;
    this.height = 32;
    this.frameX = 0;
    this.frameY = 0;
    this.image = new Image();
    this.image.src = _assests_characters_chris_png__WEBPACK_IMPORTED_MODULE_0__;
    this.keys = keys;
    this.speed = 9;
    this.moving = false;
    this.animate();
  }

  _createClass(Player, [{
    key: "move",
    value: function move() {
      if (this.keys[38] && this.y > 100) {
        this.y -= this.speed;
        this.frameY = 3;
      }
    }
  }, {
    key: "_drawSprite",
    value: function _drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
      this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this = this;

      this._drawSprite(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);

      this.move();
      requestAnimationFrame(function () {
        return _this.animate();
      });
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assests/characters/chris.png":
/*!******************************************!*\
  !*** ./src/assests/characters/chris.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85499af6442d8cb5b070.png";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/player */ "./src/classes/player.js");
// index.js


var canvas = document.getElementById("background");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 75;
canvas.height = window.innerHeight - 700;
var keys = [];
var youngChris = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.default(ctx, keys);
console.log(youngChris); // youngChris.animate()

window.addEventListener('keydown', function (e) {
  keys[e.key] = true;
});
window.addEventListener('keyup', function (e) {
  delete keys[e.key];
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFQLEdBQWdCMkIsTUFBTSxDQUFDRSxXQUFQLEdBQXFCLEdBQXJDO0FBRUEsSUFBTWpDLElBQUksR0FBRyxFQUFiO0FBRUEsSUFBTUgsVUFBVSxHQUFHLElBQUk2QixvREFBSixDQUFnQjNCLEdBQWhCLEVBQXFCQyxJQUFyQixDQUFuQjtBQUNBa0MsT0FBTyxDQUFDQyxHQUFSLENBQVl0QyxVQUFaLEdBQ0E7O0FBRUFrQyxNQUFNLENBQUNLLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQUFDLENBQUMsRUFBSTtBQUN0Q3JDLEVBQUFBLElBQUksQ0FBQ3FDLENBQUMsQ0FBQ0MsR0FBSCxDQUFKLEdBQWMsSUFBZDtBQUNELENBRkQ7QUFJQVAsTUFBTSxDQUFDSyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFBQyxDQUFDLEVBQUk7QUFDcEMsU0FBT3JDLElBQUksQ0FBQ3FDLENBQUMsQ0FBQ0MsR0FBSCxDQUFYO0FBQ0QsQ0FGRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlLy4vc3JjL2NsYXNzZXMvcGxheWVyLmpzIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVkZXNpZ25lZC1vY3RvLWJhcm5hY2xlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlZGVzaWduZWQtb2N0by1iYXJuYWNsZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWRlc2lnbmVkLW9jdG8tYmFybmFjbGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGxheWVyLmpzXG5cbmltcG9ydCB5b3VuZ0NocmlzIGZyb20gJy4uL2Fzc2VzdHMvY2hhcmFjdGVycy9jaHJpcy5wbmcnXG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGN0eCwga2V5cykge1xuICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgdGhpcy54ID0gMFxuICAgIHRoaXMueSA9IDBcbiAgICB0aGlzLndpZHRoID0gMTVcbiAgICB0aGlzLmhlaWdodCA9IDMyXG4gICAgdGhpcy5mcmFtZVggPSAwXG4gICAgdGhpcy5mcmFtZVkgPSAwXG4gICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgdGhpcy5pbWFnZS5zcmMgPSB5b3VuZ0NocmlzXG4gICAgdGhpcy5rZXlzID0ga2V5c1xuICAgIHRoaXMuc3BlZWQgPSA5XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZVxuXG4gICAgdGhpcy5hbmltYXRlKClcbiAgfVxuXG5cbiAgbW92ZSgpIHtcbiAgICBpZiAodGhpcy5rZXlzWzM4XSAmJiB0aGlzLnkgPiAxMDApIHtcbiAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkXG4gICAgICB0aGlzLmZyYW1lWSA9IDNcbiAgICB9XG4gIH1cblxuICBfZHJhd1Nwcml0ZShpbWcsIHNYLCBzWSwgc1csc0gsZFgsZFksZFcsZEgpIHtcbiAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCBzWCwgc1ksIHNXLHNILGRYLGRZLGRXLGRIKVxuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLl9kcmF3U3ByaXRlKFxuICAgICAgdGhpcy5pbWFnZSwgXG4gICAgICB0aGlzLndpZHRoICogdGhpcy5mcmFtZVgsIFxuICAgICAgdGhpcy5oZWlnaHQgKiB0aGlzLmZyYW1lWSxcbiAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgdGhpcy5oZWlnaHQsIFxuICAgICAgdGhpcy54LFxuICAgICAgdGhpcy55LCBcbiAgICAgIHRoaXMud2lkdGgsIFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG4gICAgdGhpcy5tb3ZlKClcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5hbmltYXRlKCkpXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllciIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBpbmRleC5qc1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvdGFnb25pc3QgZnJvbSAnLi9jbGFzc2VzL3BsYXllcidcblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDc1XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNzAwXG5cbmNvbnN0IGtleXMgPSBbXVxuXG5jb25zdCB5b3VuZ0NocmlzID0gbmV3IFByb3RhZ29uaXN0KGN0eCwga2V5cylcbmNvbnNvbGUubG9nKHlvdW5nQ2hyaXMpO1xuLy8geW91bmdDaHJpcy5hbmltYXRlKClcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAga2V5c1tlLmtleV0gPSB0cnVlXG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgZGVsZXRlIGtleXNbZS5rZXldXG59KVxuXG4iXSwibmFtZXMiOlsieW91bmdDaHJpcyIsIlBsYXllciIsImN0eCIsImtleXMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVYIiwiZnJhbWVZIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsInNwZWVkIiwibW92aW5nIiwiYW5pbWF0ZSIsImltZyIsInNYIiwic1kiLCJzVyIsInNIIiwiZFgiLCJkWSIsImRXIiwiZEgiLCJkcmF3SW1hZ2UiLCJfZHJhd1Nwcml0ZSIsIm1vdmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJQcm90YWdvbmlzdCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==