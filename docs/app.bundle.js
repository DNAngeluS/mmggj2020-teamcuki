/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "mmggj2020-teamcuki/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/board/index.ts":
/*!***********************************!*\
  !*** ./src/assets/board/index.ts ***!
  \***********************************/
/*! exports provided: boardAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardAssets", function() { return boardAssets; });
var boardAssets = {
    BLANK: '/src/assets/board/blank.png',
    CAPACITOR: '/src/assets/board/capacitor.png',
    CAPACITOR_ACTIVE: '/src/assets/board/capacitor_active.png',
    CURVE: '/src/assets/board/curve.png',
    DIVIDER: '/src/assets/board/divider.png',
    DIVIDER_ACTIVE: '/src/assets/board/divider-active.png',
    LINE: '/src/assets/board/line.png',
    RESISTOR: '/src/assets/board/resistor.png',
    RESISTOR_ACTIVE: '/src/assets/board/blank.png',
    USER: '/src/assets/board/user.png',
    VOID: '/src/assets/board/void.png',
    BG: '/src/assets/board/bg1.png'
};


/***/ }),

/***/ "./src/assets/player/index.ts":
/*!************************************!*\
  !*** ./src/assets/player/index.ts ***!
  \************************************/
/*! exports provided: playerAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerAssets", function() { return playerAssets; });
var playerAssets = {
    BODY: '/src/assets/player/spark.png',
    PLAYER: '/src/assets/player/player.png',
    STANDING: '/src/assets/player/standing.png',
    DROP: '/src/assets/player/drop.png',
    TAKE: '/src/assets/player/take.png',
    WITH_OBJECT: '/src/assets/player/with-object.png'
};


/***/ }),

/***/ "./src/assets/sounds/index.ts":
/*!************************************!*\
  !*** ./src/assets/sounds/index.ts ***!
  \************************************/
/*! exports provided: soundAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soundAssets", function() { return soundAssets; });
var soundAssets = {
    LEVEL_ONE_LOOP: '/src/assets/sounds/music/level1loop.wav',
    LEVEL_TWO_LOOP: '/src/assets/sounds/music/level2loop.wav',
    LEVEL_THREE_LOOP: '/src/assets/sounds/music/level3loop.wav',
    LEVEL_FOUR_LOOP: '/src/assets/sounds/music/level4loop.wav',
    FX_PICKUP: '/src/assets/sounds/fx/pick-up.wav',
    FX_MOVE: '/src/assets/sounds/fx/move.wav',
    FX_FANFARE: '/src/assets/sounds/fx/fanfare.wav'
};


/***/ }),

/***/ "./src/assets/ui/index.ts":
/*!********************************!*\
  !*** ./src/assets/ui/index.ts ***!
  \********************************/
/*! exports provided: uiAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiAssets", function() { return uiAssets; });
var uiAssets = {
    SCREEN_OVERLAY: '/src/assets/ui/screen_overlay.png',
    ENDSCREEN_OVERLAY: '/src/assets/ui/endScreen_GameOver.png',
    SCORE_BACKGROUND: '/src/assets/ui/score.png',
    TIME_BACKGROUND: '/src/asets/ui/time.png',
    MENU_BACKGROUND: '/src/assets/ui/menuscreen_loop.png'
};


/***/ }),

/***/ "./src/assets/videos/index.ts":
/*!************************************!*\
  !*** ./src/assets/videos/index.ts ***!
  \************************************/
/*! exports provided: videoAssets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoAssets", function() { return videoAssets; });
var videoAssets = {
    ENDSCREEN_CINEMATIC: '/src/assets/videos/endScreen_GameOver.mp4',
    WINSCREEN_CINEMATIC: '/src/assets/videos/endScreen_Win.mp4',
    MAIN_CINEMATIC: '/src/assets/videos/Cinematica.mp4',
    MENU_LOOP: '/src/assets/videos/menuScreen_Loop.mp4'
};


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: mainConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainConfig", function() { return mainConfig; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");


var mainConfig = {
    title: 'Sample',
    type: phaser__WEBPACK_IMPORTED_MODULE_0__["AUTO"],
    scale: {
        // width: window.innerWidth,
        // height: window.innerHeight
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    parent: 'game',
    backgroundColor: 0x000000,
    scene: _scenes__WEBPACK_IMPORTED_MODULE_1__["gameScenes"]
};


/***/ }),

/***/ "./src/game-objects/Background.ts":
/*!****************************************!*\
  !*** ./src/game-objects/Background.ts ***!
  \****************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _assets_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/board */ "./src/assets/board/index.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main */ "./src/main.ts");




var Background = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Background, _super);
    function Background() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.image(Background.bgSpriteKey, _assets_board__WEBPACK_IMPORTED_MODULE_1__["boardAssets"].BG);
        };
        _this.initialize = function (scene) {
            scene.add.image(_main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.width / 2, _main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.height / 2, Background.bgSpriteKey);
        };
        return _this;
    }
    Background.bgSpriteKey = _assets_board__WEBPACK_IMPORTED_MODULE_1__["boardAssets"].BG.toString();
    return Background;
}(_GameObject__WEBPACK_IMPORTED_MODULE_2__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/BoardColiders.ts":
/*!*******************************************!*\
  !*** ./src/game-objects/BoardColiders.ts ***!
  \*******************************************/
/*! exports provided: BoardColiders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardColiders", function() { return BoardColiders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _assets_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/board */ "./src/assets/board/index.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/game-objects/index.ts");
/* harmony import */ var _pieces_GridManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pieces/GridManager */ "./src/game-objects/pieces/GridManager.ts");





// import { game } from '../main';
var BoardColiders = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BoardColiders, _super);
    function BoardColiders() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.image(BoardColiders.voidSpriteKey, _assets_board__WEBPACK_IMPORTED_MODULE_1__["boardAssets"].VOID);
        };
        _this.initialize = function (scene) {
            _this.group = scene.physics.add.staticGroup();
        };
        _this.createVoid = function (_a) {
            var gridX = _a.gridX, gridY = _a.gridY;
            var _b = Object(_index__WEBPACK_IMPORTED_MODULE_3__["gridToCanvas"])({ gridX: gridX, gridY: gridY }), x = _b.x, y = _b.y;
            // const voidGrid: Phaser.Physics.Arcade.Image =
            _this.group.create(x, y, BoardColiders.voidSpriteKey);
            _pieces_GridManager__WEBPACK_IMPORTED_MODULE_4__["default"].voids.addToGrid({ gridX: gridX, gridY: gridY, id: "" + gridX + gridY });
        };
        return _this;
    }
    BoardColiders.voidSpriteKey = _assets_board__WEBPACK_IMPORTED_MODULE_1__["boardAssets"].VOID.toString();
    return BoardColiders;
}(_GameObject__WEBPACK_IMPORTED_MODULE_2__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/CinematicVideo.ts":
/*!********************************************!*\
  !*** ./src/game-objects/CinematicVideo.ts ***!
  \********************************************/
/*! exports provided: CinematicVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CinematicVideo", function() { return CinematicVideo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/videos */ "./src/assets/videos/index.ts");
/* harmony import */ var _MediaObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaObject */ "./src/game-objects/MediaObject.ts");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.ts");




var CinematicVideo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CinematicVideo, _super);
    function CinematicVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.video(CinematicVideo.key, [assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].MAIN_CINEMATIC], 'loadeddata', false, false);
        };
        _this.initialize = function (scene) {
            _this.video = (scene.add.video(main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.width / 2, main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.height / 2, CinematicVideo.key));
            // this.video.play();
            _this.video.on('complete', _this.onFinish.bind(_this));
        };
        _this.play = function () {
            _this.video.play();
        };
        _this.setFinishCallback = function (callback) {
            _this.finishCallback = callback;
        };
        return _this;
    }
    CinematicVideo.prototype.onFinish = function () {
        if (this.finishCallback) {
            this.finishCallback();
        }
    };
    CinematicVideo.key = assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].MAIN_CINEMATIC.toString();
    return CinematicVideo;
}(_MediaObject__WEBPACK_IMPORTED_MODULE_2__["MediaObject"]));



/***/ }),

/***/ "./src/game-objects/GameObject.ts":
/*!****************************************!*\
  !*** ./src/game-objects/GameObject.ts ***!
  \****************************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
var GameObject = /** @class */ (function () {
    function GameObject() {
    }
    GameObject.prototype.update = function () { };
    return GameObject;
}());



/***/ }),

/***/ "./src/game-objects/GameOverOverlay.ts":
/*!*********************************************!*\
  !*** ./src/game-objects/GameOverOverlay.ts ***!
  \*********************************************/
/*! exports provided: GameOverOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverOverlay", function() { return GameOverOverlay; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/ui */ "./src/assets/ui/index.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.ts");




var GameOverOverlay = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GameOverOverlay, _super);
    function GameOverOverlay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.spritesheet(GameOverOverlay.key, assets_ui__WEBPACK_IMPORTED_MODULE_1__["uiAssets"].ENDSCREEN_OVERLAY, {
                frameWidth: 1920,
                frameHeight: 1080
            });
        };
        _this.initialize = function (scene) {
            _this.sprite = scene.physics.add.sprite(main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.width / 2, main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.height / 2, GameOverOverlay.key);
            _this.sprite.on('animationcomplete', _this.onFinish.bind(_this));
            _this.sprite.setDepth(30);
            scene.anims.create({
                key: GameOverOverlay.loopKey,
                frames: scene.anims.generateFrameNumbers(GameOverOverlay.key, { start: 0, end: 20 }),
                frameRate: 20,
                repeat: 1
            });
        };
        _this.start = function () {
            _this.sprite.anims.play(GameOverOverlay.loopKey);
        };
        _this.setFinishCallback = function (callback) {
            _this.finishCallback = callback;
        };
        _this.onFinish = function () {
            if (_this.finishCallback) {
                _this.finishCallback();
            }
        };
        return _this;
        // private startTransition = () => {
        // 	this.finishCallback();
        // };
    }
    GameOverOverlay.key = assets_ui__WEBPACK_IMPORTED_MODULE_1__["uiAssets"].ENDSCREEN_OVERLAY.toString();
    GameOverOverlay.loopKey = 'MENU_LOOP';
    return GameOverOverlay;
}(_GameObject__WEBPACK_IMPORTED_MODULE_2__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/GameOverVideo.ts":
/*!*******************************************!*\
  !*** ./src/game-objects/GameOverVideo.ts ***!
  \*******************************************/
/*! exports provided: GameOverVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverVideo", function() { return GameOverVideo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/videos */ "./src/assets/videos/index.ts");
/* harmony import */ var _MediaObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaObject */ "./src/game-objects/MediaObject.ts");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.ts");




var GameOverVideo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GameOverVideo, _super);
    function GameOverVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.video(GameOverVideo.key, [assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].ENDSCREEN_CINEMATIC], 'loadeddata', false, false);
        };
        _this.initialize = function (scene) {
            _this.video = (scene.add.video(main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.width / 2, main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.height / 2, GameOverVideo.key));
            _this.video.play();
            _this.video.on('complete', _this.onFinish.bind(_this));
        };
        _this.play = function () {
            _this.video.play();
        };
        _this.setFinishCallback = function (callback) {
            _this.finishCallback = callback;
        };
        return _this;
    }
    GameOverVideo.prototype.onFinish = function () {
        if (this.finishCallback) {
            this.finishCallback();
        }
    };
    GameOverVideo.key = assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].ENDSCREEN_CINEMATIC.toString();
    return GameOverVideo;
}(_MediaObject__WEBPACK_IMPORTED_MODULE_2__["MediaObject"]));



/***/ }),

/***/ "./src/game-objects/GameWinVideo.ts":
/*!******************************************!*\
  !*** ./src/game-objects/GameWinVideo.ts ***!
  \******************************************/
/*! exports provided: GameWinVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameWinVideo", function() { return GameWinVideo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/videos */ "./src/assets/videos/index.ts");
/* harmony import */ var _MediaObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaObject */ "./src/game-objects/MediaObject.ts");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.ts");




var GameWinVideo = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GameWinVideo, _super);
    function GameWinVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.video(GameWinVideo.key, [assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].WINSCREEN_CINEMATIC], 'loadeddata', false, false);
        };
        _this.initialize = function (scene) {
            _this.video = (scene.add.video(main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.width / 2, main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.height / 2, GameWinVideo.key));
            _this.video.play();
            _this.video.on('complete', _this.onFinish.bind(_this));
        };
        _this.play = function () {
            _this.video.play();
        };
        _this.setFinishCallback = function (callback) {
            _this.finishCallback = callback;
        };
        return _this;
    }
    GameWinVideo.prototype.onFinish = function () {
        if (this.finishCallback) {
            this.finishCallback();
        }
    };
    GameWinVideo.key = assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].WINSCREEN_CINEMATIC.toString();
    return GameWinVideo;
}(_MediaObject__WEBPACK_IMPORTED_MODULE_2__["MediaObject"]));



/***/ }),

/***/ "./src/game-objects/HUDBackground.ts":
/*!*******************************************!*\
  !*** ./src/game-objects/HUDBackground.ts ***!
  \*******************************************/
/*! exports provided: HUDBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUDBackground", function() { return HUDBackground; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/ui */ "./src/assets/ui/index.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.ts");




var HUDBackground = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HUDBackground, _super);
    function HUDBackground() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.image(HUDBackground.key, assets_ui__WEBPACK_IMPORTED_MODULE_1__["uiAssets"].SCREEN_OVERLAY);
        };
        _this.initialize = function (scene) {
            scene.add.image(main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.width / 2, main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.height / 2, HUDBackground.key).setDepth(20);
        };
        return _this;
    }
    HUDBackground.key = assets_ui__WEBPACK_IMPORTED_MODULE_1__["uiAssets"].SCREEN_OVERLAY.toString();
    return HUDBackground;
}(_GameObject__WEBPACK_IMPORTED_MODULE_2__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/MediaObject.ts":
/*!*****************************************!*\
  !*** ./src/game-objects/MediaObject.ts ***!
  \*****************************************/
/*! exports provided: MediaObjectStates, MediaObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObjectStates", function() { return MediaObjectStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObject", function() { return MediaObject; });
var MediaObjectStates;
(function (MediaObjectStates) {
    MediaObjectStates[MediaObjectStates["PLATING"] = 0] = "PLATING";
    MediaObjectStates[MediaObjectStates["STOPPED"] = 1] = "STOPPED";
    MediaObjectStates[MediaObjectStates["PAUSED"] = 2] = "PAUSED";
})(MediaObjectStates || (MediaObjectStates = {}));
var MediaObject = /** @class */ (function () {
    function MediaObject() {
    }
    return MediaObject;
}());



/***/ }),

/***/ "./src/game-objects/MediaObjectWithControls.ts":
/*!*****************************************************!*\
  !*** ./src/game-objects/MediaObjectWithControls.ts ***!
  \*****************************************************/
/*! exports provided: MediaObjectWithControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObjectWithControls", function() { return MediaObjectWithControls; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _MediaObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaObject */ "./src/game-objects/MediaObject.ts");


var MediaObjectWithControls = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MediaObjectWithControls, _super);
    function MediaObjectWithControls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MediaObjectWithControls;
}(_MediaObject__WEBPACK_IMPORTED_MODULE_1__["MediaObject"]));



/***/ }),

/***/ "./src/game-objects/MenuBackground.ts":
/*!********************************************!*\
  !*** ./src/game-objects/MenuBackground.ts ***!
  \********************************************/
/*! exports provided: MenuBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBackground", function() { return MenuBackground; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/ui */ "./src/assets/ui/index.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.ts");




var MenuBackground = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MenuBackground, _super);
    function MenuBackground() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.spritesheet(MenuBackground.key, assets_ui__WEBPACK_IMPORTED_MODULE_1__["uiAssets"].MENU_BACKGROUND, {
                frameWidth: 1920,
                frameHeight: 1080
            });
        };
        _this.initialize = function (scene) {
            _this.sprite = scene.physics.add.sprite(main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.width / 2, main__WEBPACK_IMPORTED_MODULE_3__["game"].scale.height / 2, MenuBackground.key);
            scene.anims.create({
                key: MenuBackground.loopKey,
                frames: scene.anims.generateFrameNumbers(MenuBackground.key, { start: 0, end: 20 }),
                frameRate: 20,
                repeat: -1
            });
            scene.anims.create;
        };
        return _this;
    }
    MenuBackground.key = assets_ui__WEBPACK_IMPORTED_MODULE_1__["uiAssets"].MENU_BACKGROUND.toString();
    MenuBackground.loopKey = 'MENU_LOOP';
    return MenuBackground;
}(_GameObject__WEBPACK_IMPORTED_MODULE_2__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/MenuVideoLoop.ts":
/*!*******************************************!*\
  !*** ./src/game-objects/MenuVideoLoop.ts ***!
  \*******************************************/
/*! exports provided: MenuVideoLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuVideoLoop", function() { return MenuVideoLoop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/videos */ "./src/assets/videos/index.ts");
/* harmony import */ var _MediaObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaObject */ "./src/game-objects/MediaObject.ts");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main */ "./src/main.ts");




var MenuVideoLoop = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MenuVideoLoop, _super);
    function MenuVideoLoop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLooping = true;
        _this.load = function (scene) {
            scene.load.video(MenuVideoLoop.key, [assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].MENU_LOOP], 'loadeddata', false, false);
        };
        _this.initialize = function (scene) {
            _this.video = (scene.add.video(main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.width / 2, main__WEBPACK_IMPORTED_MODULE_3__["game"].canvas.height / 2, MenuVideoLoop.key));
            _this.video.play(_this.isLooping);
            _this.video.on('complete', _this.onFinish.bind(_this));
        };
        _this.setFinishCallback = function (callback) {
            _this.finishCallback = callback;
        };
        return _this;
    }
    MenuVideoLoop.prototype.destroy = function () {
        this.video.destroy();
    };
    MenuVideoLoop.prototype.setIsLooping = function (loop) {
        if (loop != this.isLooping) {
            this.video.setLoop(loop);
        }
        this.isLooping = loop;
    };
    MenuVideoLoop.prototype.onFinish = function () {
        if (this.finishCallback) {
            this.finishCallback();
        }
    };
    MenuVideoLoop.key = assets_videos__WEBPACK_IMPORTED_MODULE_1__["videoAssets"].MENU_LOOP.toString();
    return MenuVideoLoop;
}(_MediaObject__WEBPACK_IMPORTED_MODULE_2__["MediaObject"]));



/***/ }),

/***/ "./src/game-objects/Player.ts":
/*!************************************!*\
  !*** ./src/game-objects/Player.ts ***!
  \************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/player */ "./src/assets/player/index.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");
/* harmony import */ var _pieces_GridManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pieces/GridManager */ "./src/game-objects/pieces/GridManager.ts");






var Player = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isCarryng = false;
        _this.isAnimating = false;
        // private movementSpeed: number = 900;
        // private gridSquare = {
        // 	width: GRID_SIZE,
        // 	height: GRID_SIZE
        // };
        _this.position = {
            gridX: 2,
            gridY: 1 //294
        };
        // private presedKey: Phaser.Input.Keyboard.Key;
        _this.animations = {
            left: 'left',
            right: 'right',
            idle: 'idle',
            withObject: 'withObject',
            take: 'take',
            drop: 'drop'
        };
        _this.load = function (scene) {
            scene.load.spritesheet(Player.key, assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].STANDING, {
                frameWidth: 180,
                frameHeight: 180
            });
            scene.load.spritesheet(Player.keyDrop, assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].DROP, {
                frameWidth: 180,
                frameHeight: 180
            });
            scene.load.spritesheet(Player.keyTake, assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].TAKE, {
                frameWidth: 180,
                frameHeight: 180
            });
            scene.load.spritesheet(Player.keyWithObject, assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].WITH_OBJECT, {
                frameWidth: 180,
                frameHeight: 180
            });
        };
        _this.initialize = function (scene, _a) {
            var pieces = _a.pieces, playMoveSound = _a.playMoveSound, playPickup = _a.playPickup;
            _this.pieces = pieces;
            _this.playMoveSound = playMoveSound;
            _this.playPickup = playPickup;
            var _b = Object(game_objects__WEBPACK_IMPORTED_MODULE_4__["gridToCanvas"])(_this.position), x = _b.x, y = _b.y;
            _this.sprite = scene.physics.add.sprite(x, y, Player.key);
            _this.sprite.setSize(game_objects__WEBPACK_IMPORTED_MODULE_4__["GRID_SIZE"], game_objects__WEBPACK_IMPORTED_MODULE_4__["GRID_SIZE"]);
            _this.cursors = scene.input.keyboard.createCursorKeys();
            _this.rotate = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.Z);
            _this.drop = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.X);
            scene.input.on('keydown', _this.handleKeyPress.bind(_this));
            _this.isKeyDown = false;
            // physics
            _this.sprite.setBounce(0);
            _this.sprite.setFriction(300);
            _this.sprite.setDepth(10);
            _this.sprite.setAlpha(0.9);
            _this.sprite.setCollideWorldBounds(true);
            // animations
            // scene.anims.create({
            // 	key: this.animations.left,
            // 	frames: scene.anims.generateFrameNumbers(Player.key, {
            // 		start: 0,
            // 		end: 3
            // 	}),
            // 	frameRate: 10,
            // 	repeat: -1
            // });
            // scene.anims.create({
            // 	key: this.animations.right,
            // 	frames: scene.anims.generateFrameNumbers(Player.key, {
            // 		start: 5,
            // 		end: 8
            // 	}),
            // 	frameRate: 10,
            // 	repeat: -1
            // });
            scene.anims.create({
                key: _this.animations.idle,
                frames: scene.anims.generateFrameNumbers(Player.key, { start: 0, end: 96 }),
                frameRate: 12,
                repeat: -1
            });
            scene.anims.create({
                key: _this.animations.withObject,
                frames: scene.anims.generateFrameNumbers(Player.keyWithObject, { start: 0, end: 95 }),
                frameRate: 12,
                repeat: -1
            });
            var takeAni = scene.anims.create({
                key: _this.animations.take,
                frames: scene.anims.generateFrameNumbers(Player.keyTake, { start: 0, end: 9 }),
                frameRate: 23,
                repeat: 0
            });
            var dropAni = scene.anims.create({
                key: _this.animations.drop,
                frames: scene.anims.generateFrameNumbers(Player.keyDrop, { start: 0, end: 10 }),
                frameRate: 23,
                repeat: 0
            });
            takeAni &&
                takeAni.on('complete', function () {
                    _this.sprite.anims.play(_this.animations.withObject);
                    _this.isAnimating = false;
                });
            dropAni &&
                dropAni.on('complete', function () {
                    _this.sprite.anims.play(_this.animations.idle);
                    _this.isAnimating = false;
                });
            _this.setIdleState();
        };
        _this.update = function () {
            var moveUp = phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(_this.cursors.up);
            var moveDown = phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(_this.cursors.down);
            var moveLeft = phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(_this.cursors.left);
            var moveRight = phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(_this.cursors.right);
            var rotatePiece = phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(_this.rotate);
            var dropPiece = phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(_this.drop);
            // const forward = new Phaser.Math.Vector2(1, 1);
            // let impulse = new Phaser.Math.Vector2(0, 0);
            var nextPosition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.position);
            if (moveLeft) {
                // impulse.x += -forward.x;
                nextPosition = { gridX: _this.position.gridX - 1, gridY: _this.position.gridY };
            }
            if (moveRight) {
                nextPosition = { gridX: _this.position.gridX + 1, gridY: _this.position.gridY };
            }
            if (moveUp) {
                nextPosition = { gridX: _this.position.gridX, gridY: _this.position.gridY - 1 };
            }
            if (moveDown) {
                nextPosition = { gridX: _this.position.gridX, gridY: _this.position.gridY + 1 };
            }
            var canMove = !_pieces_GridManager__WEBPACK_IMPORTED_MODULE_5__["default"].voids.getID(nextPosition);
            if (canMove && !_this.isAnimating) {
                if (_this.position.gridX !== nextPosition.gridX || _this.position.gridY !== nextPosition.gridY) {
                    _this.playMoveSound();
                }
                _this.position = nextPosition;
                _this.moveTowards();
            }
            if (dropPiece) {
                if (_this.isCarryng && !_pieces_GridManager__WEBPACK_IMPORTED_MODULE_5__["default"].pieces.getID(_this.position)) {
                    _this.pieces.getActivePiece().place(_this.position);
                    _this.isCarryng = false;
                    _this.isAnimating = true;
                    _this.sprite.anims.play(_this.animations.drop);
                    _this.playPickup();
                }
            }
            if (rotatePiece) {
                if (_this.isCarryng) {
                    _this.pieces.getActivePiece().rotate();
                }
            }
        };
        _this.setIdleState = function () {
            _this.sprite.setVelocity(0);
            _this.sprite.anims.play(_this.animations.idle, true);
        };
        _this.moveTowards = function () {
            var _a = Object(game_objects__WEBPACK_IMPORTED_MODULE_4__["gridToCanvas"])(_this.position), x = _a.x, y = _a.y;
            _this.sprite.setPosition(x, y);
            if (_this.position.gridX === 0 && _this.position.gridY === 1 && !_this.isCarryng) {
                _this.pieces.cancelTheTimeout();
                _this.sprite.anims.play(_this.animations.take);
                _this.playPickup();
                _this.isAnimating = true;
                _this.isCarryng = true;
            }
            if (_this.isCarryng) {
                _this.pieces.getActivePiece().moveTo(_this.position);
            }
        };
        return _this;
    }
    Player.prototype.handleKeyPress = function (event) {
        if (!this.isKeyDown) {
        }
    };
    Player.key = assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].PLAYER.toString();
    Player.keyDrop = assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].DROP.toString();
    Player.keyTake = assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].TAKE.toString();
    Player.keyWithObject = assets_player__WEBPACK_IMPORTED_MODULE_2__["playerAssets"].WITH_OBJECT.toString();
    return Player;
}(_GameObject__WEBPACK_IMPORTED_MODULE_3__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/Score.ts":
/*!***********************************!*\
  !*** ./src/game-objects/Score.ts ***!
  \***********************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/ui */ "./src/assets/ui/index.ts");
/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");




// import { game } from 'main';
var Score = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Score, _super);
    function Score() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.image(Score.key, assets_ui__WEBPACK_IMPORTED_MODULE_2__["uiAssets"].SCORE_BACKGROUND);
        };
        _this.initialize = function (scene) {
            _this.text = scene.add.text(794, 78, '0', {
                font: '50px Raleway',
                fill: '#ffffff',
                weight: '700'
            });
            var mask = new phaser__WEBPACK_IMPORTED_MODULE_1__["Display"].Masks.BitmapMask(scene, _this.text);
            _this.text.mask = mask;
        };
        return _this;
    }
    Score.prototype.addToScore = function (value) {
        this.score = this.score + value;
        this.text.setText("" + this.score);
    };
    Score.key = assets_ui__WEBPACK_IMPORTED_MODULE_2__["uiAssets"].SCORE_BACKGROUND.toString();
    return Score;
}(_GameObject__WEBPACK_IMPORTED_MODULE_3__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/index.ts":
/*!***********************************!*\
  !*** ./src/game-objects/index.ts ***!
  \***********************************/
/*! exports provided: GRID_SIZE, gridToCanvas, GameObject, MediaObject, MediaObjectWithControls, Background, BoardColiders, CinematicVideo, GameOverOverlay, GameOverVideo, GameWinVideo, HUDBackground, MenuBackground, MenuVideoLoop, Player, Pieces, Fx, Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRID_SIZE", function() { return GRID_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridToCanvas", function() { return gridToCanvas; });
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Background */ "./src/game-objects/Background.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return _Background__WEBPACK_IMPORTED_MODULE_0__["Background"]; });

/* harmony import */ var _BoardColiders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoardColiders */ "./src/game-objects/BoardColiders.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoardColiders", function() { return _BoardColiders__WEBPACK_IMPORTED_MODULE_1__["BoardColiders"]; });

/* harmony import */ var _CinematicVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CinematicVideo */ "./src/game-objects/CinematicVideo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CinematicVideo", function() { return _CinematicVideo__WEBPACK_IMPORTED_MODULE_2__["CinematicVideo"]; });

/* harmony import */ var _GameObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameObject */ "./src/game-objects/GameObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return _GameObject__WEBPACK_IMPORTED_MODULE_3__["GameObject"]; });

/* harmony import */ var _GameOverOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameOverOverlay */ "./src/game-objects/GameOverOverlay.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameOverOverlay", function() { return _GameOverOverlay__WEBPACK_IMPORTED_MODULE_4__["GameOverOverlay"]; });

/* harmony import */ var _GameOverVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameOverVideo */ "./src/game-objects/GameOverVideo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameOverVideo", function() { return _GameOverVideo__WEBPACK_IMPORTED_MODULE_5__["GameOverVideo"]; });

/* harmony import */ var _GameWinVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameWinVideo */ "./src/game-objects/GameWinVideo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameWinVideo", function() { return _GameWinVideo__WEBPACK_IMPORTED_MODULE_6__["GameWinVideo"]; });

/* harmony import */ var _HUDBackground__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HUDBackground */ "./src/game-objects/HUDBackground.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HUDBackground", function() { return _HUDBackground__WEBPACK_IMPORTED_MODULE_7__["HUDBackground"]; });

/* harmony import */ var _MediaObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MediaObject */ "./src/game-objects/MediaObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaObject", function() { return _MediaObject__WEBPACK_IMPORTED_MODULE_8__["MediaObject"]; });

/* harmony import */ var _MediaObjectWithControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MediaObjectWithControls */ "./src/game-objects/MediaObjectWithControls.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaObjectWithControls", function() { return _MediaObjectWithControls__WEBPACK_IMPORTED_MODULE_9__["MediaObjectWithControls"]; });

/* harmony import */ var _MenuBackground__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MenuBackground */ "./src/game-objects/MenuBackground.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuBackground", function() { return _MenuBackground__WEBPACK_IMPORTED_MODULE_10__["MenuBackground"]; });

/* harmony import */ var _MenuVideoLoop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MenuVideoLoop */ "./src/game-objects/MenuVideoLoop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuVideoLoop", function() { return _MenuVideoLoop__WEBPACK_IMPORTED_MODULE_11__["MenuVideoLoop"]; });

/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Player */ "./src/game-objects/Player.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return _Player__WEBPACK_IMPORTED_MODULE_12__["Player"]; });

/* harmony import */ var _pieces_Pieces__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pieces/Pieces */ "./src/game-objects/pieces/Pieces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pieces", function() { return _pieces_Pieces__WEBPACK_IMPORTED_MODULE_13__["Pieces"]; });

/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Score */ "./src/game-objects/Score.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return _Score__WEBPACK_IMPORTED_MODULE_14__["Score"]; });

/* harmony import */ var _sounds_Fx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sounds/Fx */ "./src/game-objects/sounds/Fx.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fx", function() { return _sounds_Fx__WEBPACK_IMPORTED_MODULE_15__["Fx"]; });

















var GRID_SIZE = 84;
var TOP_MARGIN = 168;
var LEFT_MARGIN = 155;
var gridToCanvas = function (_a) {
    var gridX = _a.gridX, gridY = _a.gridY;
    var x = LEFT_MARGIN + gridX * GRID_SIZE + GRID_SIZE / 2;
    var y = TOP_MARGIN + gridY * GRID_SIZE + GRID_SIZE / 2;
    return {
        x: x,
        y: y
    };
};



/***/ }),

/***/ "./src/game-objects/pieces/AbstractPieces.ts":
/*!***************************************************!*\
  !*** ./src/game-objects/pieces/AbstractPieces.ts ***!
  \***************************************************/
/*! exports provided: Direction, RotationDeg, PieceState, Animations, SPRITE_FRAMES, FRAME_RATE, AbstractPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotationDeg", function() { return RotationDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceState", function() { return PieceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_FRAMES", function() { return SPRITE_FRAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAME_RATE", function() { return FRAME_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractPiece", function() { return AbstractPiece; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/game-objects/index.ts");
/* harmony import */ var _pieces_GridManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pieces/GridManager */ "./src/game-objects/pieces/GridManager.ts");
/* harmony import */ var scenes_WorldScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scenes/WorldScene */ "./src/scenes/WorldScene.ts");
// import * as Phaser from 'phaser';



var Direction;
(function (Direction) {
    Direction[Direction["TOP"] = 0] = "TOP";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["BOTTOM"] = 2] = "BOTTOM";
    Direction[Direction["LEFT"] = 3] = "LEFT";
})(Direction || (Direction = {}));
var RotationDeg = function (rotation) {
    var angles = [0, 90, 180, 270];
    return angles[rotation % 4];
};
var PieceState;
(function (PieceState) {
    PieceState[PieceState["FREE"] = 0] = "FREE";
    PieceState[PieceState["SET"] = 1] = "SET";
    PieceState[PieceState["ACTIVE"] = 2] = "ACTIVE";
})(PieceState || (PieceState = {}));
var Animations;
(function (Animations) {
    Animations["IDLE"] = "IDLE";
    Animations["FILLING"] = "FILLING";
    Animations["DONE"] = "DONE";
})(Animations || (Animations = {}));
var SPRITE_FRAMES = 12;
var FRAME_RATE = 10;
var AbstractPiece = /** @class */ (function () {
    function AbstractPiece(_a) {
        var _this = this;
        var gridX = _a.gridX, gridY = _a.gridY, rotation = _a.rotation, id = _a.id, getPieceById = _a.getPieceById, type = _a.type, createNewPiece = _a.createNewPiece;
        this.activeBorders = null;
        this.state = PieceState.FREE;
        this.rotation = Direction.TOP;
        // public load = (scene: Phaser.Scene) => {
        // scene.load.spritesheet(this.spriteKey, this.assetURL, {
        // 	frameWidth: GRID_SIZE,
        // 	frameHeight: GRID_SIZE
        // });
        // };
        this.initialize = function (scene) {
            var _a = Object(_index__WEBPACK_IMPORTED_MODULE_0__["gridToCanvas"])(_this.position), x = _a.x, y = _a.y;
            _this.sprite = scene.add.sprite(x, y, _this.spriteKey);
            _this.sprite.angle = RotationDeg(_this.rotation);
            _this.sprite.setDepth(11);
            _this.world = scene;
            // anims
            scene.anims.create({
                key: _this.spriteKey + "-" + Animations.IDLE,
                frames: [{ key: _this.assetURL.toString(), frame: 0 }]
            });
            scene.anims.create({
                key: _this.spriteKey + "-" + Animations.DONE,
                frames: scene.anims.generateFrameNumbers(_this.assetURL.toString(), {
                    start: 11,
                    end: 23
                }),
                frameRate: 20,
                repeat: -1
            });
            var fillingAni = scene.anims.create({
                key: _this.spriteKey + "-" + Animations.FILLING,
                frames: scene.anims.generateFrameNumbers(_this.assetURL.toString(), {
                    start: 1,
                    end: 11
                }),
                frameRate: 2,
                repeat: 0
            });
            fillingAni && fillingAni.on('complete', _this.setDone);
            _this.sprite.anims.play(_this.spriteKey + "-" + Animations.IDLE);
        };
        this.setDone = function () {
            _this.sprite && _this.sprite.anims.play(_this.spriteKey + "-" + Animations.DONE);
            var nextPiece = _pieces_GridManager__WEBPACK_IMPORTED_MODULE_1__["default"].pieces.getPieceOn({
                gridX: _this.position.gridX,
                gridY: _this.position.gridY,
                direction: _this.getActiveBorders().out
            });
            if (!nextPiece) {
                _this.handleGameOver();
            }
            else {
                if (nextPiece === 'win') {
                    _this.handleGameWin();
                }
                else {
                    _this.getPieceById(nextPiece).handleGoNext(_this);
                }
            }
        };
        this.getSprite = function () { return _this.sprite; };
        this.getActiveBorders = function () {
            return _this.activeBorders
                ? {
                    in: (_this.activeBorders.in + _this.rotation) % 4,
                    out: (_this.activeBorders.out + _this.rotation) % 4
                }
                : null;
        };
        this.spriteKey = id;
        this.position = { gridX: gridX, gridY: gridY };
        this.rotation = rotation;
        this.getPieceById = getPieceById;
        this.type = type;
        this.createNewPiece = createNewPiece;
    }
    AbstractPiece.prototype.rotate = function () {
        this.rotation = this.rotation + 1;
        this.sprite.angle = RotationDeg(this.rotation);
    };
    AbstractPiece.prototype.moveTo = function (_a) {
        var gridX = _a.gridX, gridY = _a.gridY;
        var _b = Object(_index__WEBPACK_IMPORTED_MODULE_0__["gridToCanvas"])({ gridX: gridX, gridY: gridY }), x = _b.x, y = _b.y;
        this.sprite.x = x;
        this.sprite.y = y;
    };
    AbstractPiece.prototype.handleGoNext = function (oldPiece) {
        var oldBorders = oldPiece.getActiveBorders();
        var newBoders = this.getActiveBorders();
        var outDirection = (oldBorders.out + 2) % 4;
        if (![newBoders.out, newBoders.in].includes(outDirection)) {
            this.handleGameOver();
            return;
        }
        if (newBoders.in !== outDirection) {
            this.rotateForFlow();
            return;
        }
        this.setActive();
    };
    AbstractPiece.prototype.rotateForFlow = function () {
        if (this.type === 'line') {
            this.rotate();
            this.rotate();
        }
        if (this.type === 'curve') {
            this.sprite.scaleY = -1;
            this.rotate();
        }
        this.setActive();
    };
    AbstractPiece.prototype.handleGameOver = function () {
        console.log('GAME OOOOOOO V    E      R          ! ! ! ! ! ! ! ! ! !');
        this.world.events.emit(scenes_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldSceneEvents"].gameover);
    };
    AbstractPiece.prototype.handleGameWin = function () {
        console.log('A WINNER IS YOU ! !   !   !    !   !    ! !  ! ! ! ');
        this.world.events.emit(scenes_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldSceneEvents"].gamewin);
    };
    AbstractPiece.prototype.place = function (position) {
        this.position = position;
        this.state = PieceState.SET;
        this.sprite.setDepth(9);
        _pieces_GridManager__WEBPACK_IMPORTED_MODULE_1__["default"].pieces.addToGrid({
            id: this.spriteKey,
            gridX: position.gridX,
            gridY: position.gridY
        });
        this.createNewPiece();
    };
    AbstractPiece.prototype.setActive = function () {
        this.state = PieceState.ACTIVE;
        this.sprite && this.sprite.anims.play(this.spriteKey + "-" + Animations.FILLING);
    };
    AbstractPiece.prototype.destroy = function () {
        this.sprite.destroy();
    };
    return AbstractPiece;
}());



/***/ }),

/***/ "./src/game-objects/pieces/CurveCable.ts":
/*!***********************************************!*\
  !*** ./src/game-objects/pieces/CurveCable.ts ***!
  \***********************************************/
/*! exports provided: CurveCable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurveCable", function() { return CurveCable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AbstractPieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractPieces */ "./src/game-objects/pieces/AbstractPieces.ts");
/* harmony import */ var _assets_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/board */ "./src/assets/board/index.ts");



var CurveCable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CurveCable, _super);
    function CurveCable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeBorders = { in: _AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].BOTTOM, out: _AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT };
        _this.assetURL = _assets_board__WEBPACK_IMPORTED_MODULE_2__["boardAssets"].CURVE;
        return _this;
    }
    return CurveCable;
}(_AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["AbstractPiece"]));



/***/ }),

/***/ "./src/game-objects/pieces/GridManager.ts":
/*!************************************************!*\
  !*** ./src/game-objects/pieces/GridManager.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pieces_AbstractPieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pieces/AbstractPieces */ "./src/game-objects/pieces/AbstractPieces.ts");


var GridManager = /** @class */ (function () {
    function GridManager() {
        this.grid = {};
    }
    GridManager.prototype.addToGrid = function (_a) {
        var _b;
        var gridX = _a.gridX, gridY = _a.gridY, id = _a.id;
        this.grid = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.grid), (_b = {}, _b[gridX + "-" + gridY] = id, _b));
    };
    GridManager.prototype.getID = function (_a) {
        var gridX = _a.gridX, gridY = _a.gridY;
        return this.grid[gridX + "-" + gridY];
    };
    GridManager.prototype.getPieceOn = function (_a) {
        var gridX = _a.gridX, gridY = _a.gridY, direction = _a.direction;
        if (direction === _pieces_AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].TOP)
            return this.grid[gridX + "-" + (gridY - 1)];
        if (direction === _pieces_AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].RIGHT)
            return this.grid[gridX + 1 + "-" + gridY];
        if (direction === _pieces_AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].BOTTOM)
            return this.grid[gridX + "-" + (gridY + 1)];
        if (direction === _pieces_AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].LEFT)
            return this.grid[gridX - 1 + "-" + gridY];
    };
    return GridManager;
}());
/* harmony default export */ __webpack_exports__["default"] = ({
    pieces: new GridManager(),
    voids: new GridManager()
});


/***/ }),

/***/ "./src/game-objects/pieces/Pieces.ts":
/*!*******************************************!*\
  !*** ./src/game-objects/pieces/Pieces.ts ***!
  \*******************************************/
/*! exports provided: Pieces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pieces", function() { return Pieces; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/game-objects/index.ts");
/* harmony import */ var _StraightCable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StraightCable */ "./src/game-objects/pieces/StraightCable.ts");
/* harmony import */ var _CurveCable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CurveCable */ "./src/game-objects/pieces/CurveCable.ts");
/* harmony import */ var _AbstractPieces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AbstractPieces */ "./src/game-objects/pieces/AbstractPieces.ts");
/* harmony import */ var _assets_board__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/board */ "./src/assets/board/index.ts");
/* harmony import */ var _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pieces/GridManager */ "./src/game-objects/pieces/GridManager.ts");







var Pieces = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Pieces, _super);
    function Pieces() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pieces = {};
        _this.activeID = null;
        _this.pieceIndex = 0;
        _this.timeout = null;
        _this.load = function (scene) {
            _this.scene = scene;
            [_assets_board__WEBPACK_IMPORTED_MODULE_5__["boardAssets"].CURVE, _assets_board__WEBPACK_IMPORTED_MODULE_5__["boardAssets"].LINE].forEach(function (asset) {
                scene.load.spritesheet(asset.toString(), asset, {
                    frameWidth: _index__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"],
                    frameHeight: _index__WEBPACK_IMPORTED_MODULE_1__["GRID_SIZE"]
                });
            });
        };
        _this.initialize = function (scene) {
            _this.group = scene.physics.add.group();
            _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__["default"].pieces.addToGrid({ gridX: 1, gridY: -1, id: 'win' });
            _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__["default"].pieces.addToGrid({ gridX: 2, gridY: -1, id: 'win' });
            _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__["default"].pieces.addToGrid({ gridX: 3, gridY: -1, id: 'win' });
            _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__["default"].pieces.addToGrid({ gridX: 4, gridY: -1, id: 'win' });
            _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__["default"].pieces.addToGrid({ gridX: 5, gridY: -1, id: 'win' });
            _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__["default"].pieces.addToGrid({ gridX: 0, gridY: 1, id: 'pickup-key' });
        };
        _this.addToGroup = function (sprite) {
            sprite && _this.group.add(sprite);
        };
        _this.getPieceById = function (id) { return _this.pieces[id]; };
        _this.getActivePiece = function () { return _this.pieces[_this.activeID]; };
        _this.cancelTheTimeout = function () { return clearTimeout(_this.timeout); };
        _this.createNewPiece = function () {
            var type = ['line', 'curve'][_this.pieceIndex % 2];
            var id = type + "-" + new Date().getTime().toString();
            _this.createPiece({
                id: id,
                gridX: 0,
                gridY: 1,
                type: type,
                rotation: Math.floor(Math.random() * 4),
                add: false
            });
            _this.activeID = id;
            _this.timeout = setTimeout(function () {
                _this.getPieceById(id).destroy();
                _this.pieceIndex++;
                _this.createNewPiece();
            }, 300);
        };
        _this.createPiece = function (_a) {
            var _b;
            var id = _a.id, type = _a.type, gridX = _a.gridX, gridY = _a.gridY, _c = _a.rotation, rotation = _c === void 0 ? _AbstractPieces__WEBPACK_IMPORTED_MODULE_4__["Direction"].TOP : _c, _d = _a.add, add = _d === void 0 ? true : _d;
            var piece = null;
            var props = {
                gridX: gridX,
                gridY: gridY,
                rotation: rotation,
                id: id,
                type: type,
                createNewPiece: _this.createNewPiece,
                getPieceById: _this.getPieceById
            };
            if (type === 'line') {
                piece = new _StraightCable__WEBPACK_IMPORTED_MODULE_2__["StraightCable"](props);
            }
            if (type === 'curve') {
                piece = new _CurveCable__WEBPACK_IMPORTED_MODULE_3__["CurveCable"](props);
            }
            if (piece) {
                _this.pieces = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.pieces), (_b = {}, _b[id] = piece, _b));
                add && _pieces_GridManager__WEBPACK_IMPORTED_MODULE_6__["default"].pieces.addToGrid({ id: id, gridX: gridX, gridY: gridY });
                piece.initialize(_this.scene);
                _this.addToGroup(piece.getSprite());
            }
        };
        return _this;
    }
    return Pieces;
}(_index__WEBPACK_IMPORTED_MODULE_1__["GameObject"]));



/***/ }),

/***/ "./src/game-objects/pieces/StraightCable.ts":
/*!**************************************************!*\
  !*** ./src/game-objects/pieces/StraightCable.ts ***!
  \**************************************************/
/*! exports provided: StraightCable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StraightCable", function() { return StraightCable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AbstractPieces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractPieces */ "./src/game-objects/pieces/AbstractPieces.ts");
/* harmony import */ var _assets_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/board */ "./src/assets/board/index.ts");



var StraightCable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StraightCable, _super);
    function StraightCable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeBorders = { in: _AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].BOTTOM, out: _AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["Direction"].TOP };
        _this.assetURL = _assets_board__WEBPACK_IMPORTED_MODULE_2__["boardAssets"].LINE;
        return _this;
    }
    return StraightCable;
}(_AbstractPieces__WEBPACK_IMPORTED_MODULE_1__["AbstractPiece"]));



/***/ }),

/***/ "./src/game-objects/sounds/Fx.ts":
/*!***************************************!*\
  !*** ./src/game-objects/sounds/Fx.ts ***!
  \***************************************/
/*! exports provided: Fx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fx", function() { return Fx; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/sounds */ "./src/assets/sounds/index.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");



// import { game } from 'main';
var Fx = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Fx, _super);
    function Fx() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.load = function (scene) {
            scene.load.audio(Fx.pickupKey, [assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].FX_PICKUP]);
            scene.load.audio(Fx.moveKey, [assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].FX_MOVE]);
            scene.load.audio(Fx.fanfareKey, [assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].FX_FANFARE]);
        };
        _this.initialize = function (scene) {
            _this.pickup = scene.sound.add(Fx.pickupKey);
            _this.move = scene.sound.add(Fx.moveKey);
            _this.fanfare = scene.sound.add(Fx.fanfareKey);
        };
        _this.playMove = function () { return _this.move.play(); };
        _this.playFanfare = function () { return _this.fanfare.play(); };
        _this.playPickuo = function () { return _this.pickup.play(); };
        return _this;
    }
    Fx.pickupKey = assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].FX_PICKUP.toString();
    Fx.moveKey = assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].FX_MOVE.toString();
    Fx.fanfareKey = assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].FX_FANFARE.toString();
    return Fx;
}(game_objects__WEBPACK_IMPORTED_MODULE_2__["MediaObject"]));



/***/ }),

/***/ "./src/game-objects/sounds/Music.ts":
/*!******************************************!*\
  !*** ./src/game-objects/sounds/Music.ts ***!
  \******************************************/
/*! exports provided: Music */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Music", function() { return Music; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var assets_sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/sounds */ "./src/assets/sounds/index.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");



var Music = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Music, _super);
    function Music() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loopCounter = 0;
        _this.load = function (scene) {
            scene.load.audio(Music.levelOneKey, [assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_ONE_LOOP]);
            scene.load.audio(Music.levelTwoKey, [assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_TWO_LOOP]);
            scene.load.audio(Music.levelThreeKey, [assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_THREE_LOOP]);
            scene.load.audio(Music.levelFourKey, [assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_FOUR_LOOP]);
        };
        _this.initialize = function (scene) {
            _this.audioOne = scene.sound.add(Music.levelOneKey, { loop: true });
            _this.audioTwo = scene.sound.add(Music.levelTwoKey, { loop: true });
            _this.audioThree = scene.sound.add(Music.levelThreeKey, { loop: true });
            _this.audioFour = scene.sound.add(Music.levelFourKey, { loop: true });
            _this.audioOne.on('looped', _this.handleLoop);
            _this.audioTwo.on('looped', _this.handleLoop);
            _this.audioThree.on('looped', _this.handleLoop);
            _this.audioFour.on('looped', _this.handleLoop);
        };
        _this.handleLoop = function () {
            _this.loopCounter += 1;
            if (_this.loopCounter === 2) {
                _this.audioOne.stop();
                _this.audioTwo.play();
            }
            if (_this.loopCounter === 4) {
                _this.audioTwo.stop();
                _this.audioThree.play();
            }
            if (_this.loopCounter === 6) {
                _this.audioThree.stop();
                _this.audioFour.play();
            }
        };
        _this.play = function () {
            if (!_this.audioOne.isPlaying) {
                _this.audioOne.play();
            }
            if (_this.audioOne.isPaused) {
                _this.audioOne.resume();
            }
        };
        _this.stop = function () {
            _this.audioOne.stop();
            _this.audioTwo.stop();
            _this.audioThree.stop();
            _this.audioFour.stop();
        };
        _this.pause = function () {
            _this.audioOne.pause();
            _this.audioTwo.pause();
            _this.audioThree.pause();
            _this.audioFour.pause();
        };
        return _this;
    }
    Music.levelOneKey = assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_ONE_LOOP.toString();
    Music.levelTwoKey = assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_TWO_LOOP.toString();
    Music.levelThreeKey = assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_THREE_LOOP.toString();
    Music.levelFourKey = assets_sounds__WEBPACK_IMPORTED_MODULE_1__["soundAssets"].LEVEL_FOUR_LOOP.toString();
    return Music;
}(game_objects__WEBPACK_IMPORTED_MODULE_2__["MediaObjectWithControls"]));



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/config.ts");


var game = new phaser__WEBPACK_IMPORTED_MODULE_0__["Game"](_config__WEBPACK_IMPORTED_MODULE_1__["mainConfig"]);


/***/ }),

/***/ "./src/scenes/CinematicScene.ts":
/*!**************************************!*\
  !*** ./src/scenes/CinematicScene.ts ***!
  \**************************************/
/*! exports provided: CinematicScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CinematicScene", function() { return CinematicScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorldScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldScene */ "./src/scenes/WorldScene.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");




var CinematicScene = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CinematicScene, _super);
    function CinematicScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.cinematic = new game_objects__WEBPACK_IMPORTED_MODULE_3__["CinematicVideo"]();
        _this.loadWorld = function () {
            _this.scene.start(_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldScene"].name);
        };
        return _this;
    }
    CinematicScene.prototype.preload = function () {
        this.cinematic.load(this);
        this.cinematic.setFinishCallback(this.loadWorld.bind(this));
    };
    CinematicScene.prototype.create = function () {
        this.cinematic.initialize(this);
    };
    CinematicScene.prototype.update = function () {
        var ENTER = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.ENTER);
        if (phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(ENTER)) {
            this.loadWorld();
        }
    };
    return CinematicScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));

var sceneConfig = {
    active: false,
    visible: false,
    key: CinematicScene.name
};


/***/ }),

/***/ "./src/scenes/GameOverScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/GameOverScene.ts ***!
  \*************************************/
/*! exports provided: GameOverScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverScene", function() { return GameOverScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorldScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldScene */ "./src/scenes/WorldScene.ts");
/* harmony import */ var _MenuScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuScene */ "./src/scenes/MenuScene.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");





var GameOverScene = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GameOverScene, _super);
    function GameOverScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.cinematic = new game_objects__WEBPACK_IMPORTED_MODULE_4__["GameOverVideo"]();
        return _this;
    }
    GameOverScene.prototype.preload = function () {
        this.cinematic.load(this);
        // this.cinematic.setFinishCallback(this.loadWorld.bind(this));
    };
    GameOverScene.prototype.create = function () {
        this.cinematic.initialize(this);
    };
    GameOverScene.prototype.update = function () {
        var ENTER = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.ENTER);
        var R = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.R);
        if (phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(ENTER)) {
            this.scene.stop(_MenuScene__WEBPACK_IMPORTED_MODULE_3__["MenuScene"].name);
            this.scene.start(_MenuScene__WEBPACK_IMPORTED_MODULE_3__["MenuScene"].name);
        }
        if (phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(R)) {
            this.scene.stop(_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldScene"].name);
            this.scene.start(_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldScene"].name);
        }
    };
    return GameOverScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));

var sceneConfig = {
    active: false,
    visible: false,
    key: GameOverScene.name
};


/***/ }),

/***/ "./src/scenes/GameWinScene.ts":
/*!************************************!*\
  !*** ./src/scenes/GameWinScene.ts ***!
  \************************************/
/*! exports provided: GameWinScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameWinScene", function() { return GameWinScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorldScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldScene */ "./src/scenes/WorldScene.ts");
/* harmony import */ var _MenuScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuScene */ "./src/scenes/MenuScene.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");





var GameWinScene = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GameWinScene, _super);
    function GameWinScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.cinematic = new game_objects__WEBPACK_IMPORTED_MODULE_4__["GameWinVideo"]();
        return _this;
    }
    GameWinScene.prototype.preload = function () {
        this.cinematic.load(this);
    };
    GameWinScene.prototype.create = function () {
        this.cinematic.initialize(this);
    };
    GameWinScene.prototype.update = function () {
        var ENTER = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.ENTER);
        var R = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.R);
        if (phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(ENTER)) {
            this.scene.stop(_MenuScene__WEBPACK_IMPORTED_MODULE_3__["MenuScene"].name);
            this.scene.start(_MenuScene__WEBPACK_IMPORTED_MODULE_3__["MenuScene"].name);
        }
        if (phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(R)) {
            this.scene.stop(_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldScene"].name);
            this.scene.start(_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldScene"].name);
        }
    };
    return GameWinScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));

var sceneConfig = {
    active: false,
    visible: false,
    key: GameWinScene.name
};


/***/ }),

/***/ "./src/scenes/HUDScene.ts":
/*!********************************!*\
  !*** ./src/scenes/HUDScene.ts ***!
  \********************************/
/*! exports provided: HUDSceneEvents, HUDScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUDSceneEvents", function() { return HUDSceneEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUDScene", function() { return HUDScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");



var HUDSceneEvents;
(function (HUDSceneEvents) {
    HUDSceneEvents["updateScoreText"] = "updateScoreText";
})(HUDSceneEvents || (HUDSceneEvents = {}));
var HUDScene = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HUDScene, _super);
    function HUDScene() {
        var _this = _super.call(this, sceneConfig) || this;
        // private scoreText: Phaser.GameObjects.Text;
        _this.background = new game_objects__WEBPACK_IMPORTED_MODULE_2__["HUDBackground"]();
        _this.score = new game_objects__WEBPACK_IMPORTED_MODULE_2__["Score"]();
        _this.updateScoreText = function (newValue) {
            // this.scoreText.setText(`${newValue}`);s
            _this.score.addToScore(newValue);
        };
        return _this;
    }
    HUDScene.prototype.preload = function () {
        this.background.load(this);
        this.score.load(this);
    };
    HUDScene.prototype.create = function () {
        this.background.initialize(this);
        this.score.initialize(this);
        // this.scoreText = this.add.text(794, 78, '0', {
        // 	font: '24px Raleway',
        // 	fill: '#ffffff'
        // });
        this.events.on(HUDSceneEvents.updateScoreText, this.updateScoreText);
    };
    HUDScene.prototype.update = function () {
        // TODO
    };
    return HUDScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));

var sceneConfig = {
    active: false,
    visible: false,
    key: HUDScene.name
};


/***/ }),

/***/ "./src/scenes/MenuScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MenuScene.ts ***!
  \*********************************/
/*! exports provided: MenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuScene", function() { return MenuScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorldScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldScene */ "./src/scenes/WorldScene.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");




var MenuScene = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MenuScene, _super);
    function MenuScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.background = new game_objects__WEBPACK_IMPORTED_MODULE_3__["MenuVideoLoop"]();
        _this.cinematic = new game_objects__WEBPACK_IMPORTED_MODULE_3__["CinematicVideo"]();
        _this.loadCinematic = function () {
            _this.background.destroy();
            _this.cinematic.play();
        };
        _this.loadWorld = function () {
            _this.scene.start(_WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldScene"].name);
        };
        return _this;
    }
    MenuScene.prototype.preload = function () {
        this.cinematic.load(this);
        this.background.load(this);
    };
    MenuScene.prototype.create = function () {
        this.cinematic.initialize(this);
        this.background.initialize(this);
        this.cinematic.setFinishCallback(this.loadWorld.bind(this));
        this.background.setFinishCallback(this.loadCinematic.bind(this));
    };
    MenuScene.prototype.update = function () {
        var ENTER = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.KeyCodes.ENTER);
        if (phaser__WEBPACK_IMPORTED_MODULE_1__["Input"].Keyboard.JustDown(ENTER)) {
            this.background.setIsLooping(false);
        }
    };
    return MenuScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));

var sceneConfig = {
    active: false,
    visible: false,
    key: MenuScene.name
};


/***/ }),

/***/ "./src/scenes/WorldScene.ts":
/*!**********************************!*\
  !*** ./src/scenes/WorldScene.ts ***!
  \**********************************/
/*! exports provided: WorldSceneEvents, WorldScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldSceneEvents", function() { return WorldSceneEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldScene", function() { return WorldScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HUDScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HUDScene */ "./src/scenes/HUDScene.ts");
/* harmony import */ var scenes_GameOverScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scenes/GameOverScene */ "./src/scenes/GameOverScene.ts");
/* harmony import */ var scenes_GameWinScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scenes/GameWinScene */ "./src/scenes/GameWinScene.ts");
/* harmony import */ var game_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! game-objects */ "./src/game-objects/index.ts");
/* harmony import */ var game_objects_sounds_Music__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! game-objects/sounds/Music */ "./src/game-objects/sounds/Music.ts");







var WorldSceneEvents;
(function (WorldSceneEvents) {
    WorldSceneEvents["gameover"] = "gameover";
    WorldSceneEvents["gamewin"] = "gamewin";
    WorldSceneEvents["addscore"] = "addscore";
})(WorldSceneEvents || (WorldSceneEvents = {}));
var WorldScene = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WorldScene, _super);
    function WorldScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.score = 0;
        _this.background = new game_objects__WEBPACK_IMPORTED_MODULE_5__["Background"]();
        _this.boardColiders = new game_objects__WEBPACK_IMPORTED_MODULE_5__["BoardColiders"]();
        _this.player = new game_objects__WEBPACK_IMPORTED_MODULE_5__["Player"]();
        _this.music = new game_objects_sounds_Music__WEBPACK_IMPORTED_MODULE_6__["Music"]();
        _this.pieces = new game_objects__WEBPACK_IMPORTED_MODULE_5__["Pieces"]();
        _this.gameover = new game_objects__WEBPACK_IMPORTED_MODULE_5__["GameOverOverlay"]();
        _this.addScore = function () {
            _this.score += 100;
            _this.hud.events.emit(_HUDScene__WEBPACK_IMPORTED_MODULE_2__["HUDSceneEvents"].updateScoreText, _this.score);
        };
        _this.buildBoard = function () {
            [
                { gridX: 9, gridY: 0 },
                { gridX: 10, gridY: 0 },
                { gridX: 10, gridY: 5 },
                { gridX: 10, gridY: 6 },
                { gridX: 11, gridY: 5 },
                { gridX: 2, gridY: 5 },
                { gridX: 3, gridY: 5 },
                { gridX: 3, gridY: 6 },
                { gridX: 3, gridY: 7 },
                { gridX: 0, gridY: 0 },
                { gridX: 0, gridY: -1 },
                { gridX: 1, gridY: -1 },
                { gridX: 2, gridY: -1 },
                { gridX: 3, gridY: -1 },
                { gridX: 4, gridY: -1 },
                { gridX: 5, gridY: -1 },
                { gridX: 6, gridY: -1 },
                { gridX: 7, gridY: -1 },
                { gridX: 8, gridY: -1 },
                { gridX: 11, gridY: -1 },
                { gridX: 12, gridY: -1 },
                { gridX: 13, gridY: -1 },
                { gridX: 14, gridY: -1 },
                { gridX: 15, gridY: -1 },
                { gridX: 16, gridY: -1 },
                { gridX: 17, gridY: -1 },
                { gridX: 18, gridY: -1 },
                { gridX: 19, gridY: -1 },
                { gridX: 19, gridY: 0 },
                { gridX: 19, gridY: 1 },
                { gridX: 19, gridY: 2 },
                { gridX: 19, gridY: 3 },
                { gridX: 19, gridY: 4 },
                { gridX: 19, gridY: 5 },
                { gridX: 19, gridY: 6 },
                { gridX: 19, gridY: 7 },
                { gridX: 19, gridY: 8 },
                { gridX: 19, gridY: 9 },
                { gridX: 18, gridY: 9 },
                { gridX: 17, gridY: 8 },
                { gridX: 16, gridY: 8 },
                { gridX: 15, gridY: 8 },
                { gridX: 14, gridY: 8 },
                { gridX: 13, gridY: 8 },
                { gridX: 12, gridY: 9 },
                { gridX: 11, gridY: 9 },
                { gridX: 10, gridY: 10 },
                { gridX: 9, gridY: 10 },
                { gridX: 8, gridY: 10 },
                { gridX: 7, gridY: 10 },
                { gridX: 6, gridY: 10 },
                { gridX: 5, gridY: 10 },
                { gridX: 4, gridY: 10 },
                { gridX: 3, gridY: 10 },
                { gridX: 2, gridY: 10 },
                { gridX: 1, gridY: 10 },
                { gridX: 0, gridY: 10 },
                { gridX: -1, gridY: 10 },
                { gridX: -1, gridY: 9 },
                { gridX: -1, gridY: 8 },
                { gridX: -1, gridY: 7 },
                { gridX: -1, gridY: 6 },
                { gridX: -1, gridY: 5 },
                { gridX: -1, gridY: 4 },
                { gridX: -1, gridY: 3 },
                { gridX: -1, gridY: 2 },
                { gridX: -1, gridY: 1 },
                { gridX: 0, gridY: 2 }
            ].forEach(_this.boardColiders.createVoid);
            [
                {
                    id: 'line-0',
                    type: 'line',
                    gridX: 15,
                    gridY: 7
                },
                {
                    id: 'line-1',
                    type: 'line',
                    gridX: 18,
                    gridY: 5
                },
                {
                    id: 'line-2',
                    type: 'line',
                    gridX: 18,
                    gridY: 4
                },
                {
                    id: 'line-3',
                    type: 'line',
                    gridX: 18,
                    gridY: 3
                },
                {
                    id: 'line-4',
                    type: 'line',
                    gridX: 18,
                    gridY: 2
                },
                {
                    id: 'line-5',
                    type: 'line',
                    gridX: 18,
                    gridY: 1
                },
                {
                    id: 'line-6',
                    type: 'line',
                    gridX: 0,
                    gridY: 8
                },
                {
                    id: 'line-7',
                    type: 'line',
                    gridX: 0,
                    gridY: 7
                },
                {
                    id: 'line-8',
                    type: 'line',
                    gridX: 1,
                    gridY: 7
                },
                {
                    id: 'line-9',
                    type: 'line',
                    gridX: 7,
                    gridY: 8
                },
                {
                    id: 'line-10',
                    type: 'line',
                    gridX: 7,
                    gridY: 6
                },
                {
                    id: 'line-11',
                    type: 'line',
                    gridX: 7,
                    gridY: 7
                },
                {
                    id: 'curve-0',
                    type: 'curve',
                    gridX: 1,
                    gridY: 8,
                    rotation: 3
                },
                {
                    id: 'curve-1',
                    type: 'curve',
                    gridX: 5,
                    gridY: 8,
                    rotation: 1
                },
                {
                    id: 'curve-2',
                    type: 'curve',
                    gridX: 7,
                    gridY: 2,
                    rotation: 3
                },
                {
                    id: 'curve-3',
                    type: 'curve',
                    gridX: 7,
                    gridY: 3,
                    rotation: 1
                },
                {
                    id: 'curve-4',
                    type: 'curve',
                    gridX: 13,
                    gridY: 0,
                    rotation: 1
                },
                {
                    id: 'curve-5',
                    type: 'curve',
                    gridX: 14,
                    gridY: 0,
                    rotation: 0
                },
                {
                    id: 'curve-6',
                    type: 'curve',
                    gridX: 12,
                    gridY: 4,
                    rotation: 2
                },
                {
                    id: 'curve-7',
                    type: 'curve',
                    gridX: 11,
                    gridY: 6,
                    rotation: 0
                },
                {
                    id: 'curve-8',
                    type: 'curve',
                    gridX: 17,
                    gridY: 5,
                    rotation: 2
                },
                {
                    id: 'curve-9',
                    type: 'curve',
                    gridX: 17,
                    gridY: 4,
                    rotation: 1
                }
            ].forEach(_this.pieces.createPiece);
        };
        _this.fx = new game_objects__WEBPACK_IMPORTED_MODULE_5__["Fx"]();
        return _this;
    }
    WorldScene.prototype.preload = function () {
        this.background.load(this);
        this.player.load(this);
        this.boardColiders.load(this);
        this.pieces.load(this);
        this.fx.load(this);
        this.music.load(this);
        this.gameover.load(this);
    };
    WorldScene.prototype.create = function () {
        this.hud = this.scene.get(_HUDScene__WEBPACK_IMPORTED_MODULE_2__["HUDScene"].name);
        this.scene.launch(_HUDScene__WEBPACK_IMPORTED_MODULE_2__["HUDScene"].name);
        this.background.initialize(this);
        this.boardColiders.initialize(this);
        this.pieces.initialize(this);
        this.player.initialize(this, {
            pieces: this.pieces,
            playMoveSound: this.fx.playMove,
            playPickup: this.fx.playPickuo
        });
        this.fx.initialize(this);
        this.music.initialize(this);
        this.worldGroup = this.physics.add.staticGroup();
        this.buildBoard();
        this.physics.add.collider(this.boardColiders.group, this.worldGroup);
        this.physics.add.collider(this.player.sprite, this.boardColiders.group);
        this.physics.add.collider(this.player.sprite, this.worldGroup);
        //Set Events
        // this.add.rectangle(800, 600, 40, 40, 0x00ffff);
        this.gameover.setFinishCallback(this.switchGameOver.bind(this));
        this.events.on(WorldSceneEvents.addscore, this.addScore.bind(this));
        this.events.on(WorldSceneEvents.gameover, this.launchGameOver.bind(this));
        this.events.on(WorldSceneEvents.gamewin, this.launchGameWin.bind(this));
        this.music.play();
        this.initGame();
    };
    WorldScene.prototype.update = function () {
        this.player.update();
    };
    WorldScene.prototype.initGame = function () {
        var _this = this;
        setTimeout(function () {
            _this.pieces.pieces['line-0'].setActive();
        }, 10 * 1000);
        this.pieces.createNewPiece();
    };
    WorldScene.prototype.launchGameOver = function () {
        this.gameover.initialize(this);
        this.gameover.start();
    };
    WorldScene.prototype.switchGameOver = function () {
        this.music.stop();
        this.scene.switch(scenes_GameOverScene__WEBPACK_IMPORTED_MODULE_3__["GameOverScene"].name);
    };
    WorldScene.prototype.switchGameWin = function () {
        this.music.stop();
        this.scene.switch(scenes_GameWinScene__WEBPACK_IMPORTED_MODULE_4__["GameWinScene"].name);
    };
    WorldScene.prototype.launchGameWin = function () {
        // this.gameover.initialize(this);
        this.switchGameWin();
    };
    return WorldScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));

var sceneConfig = {
    active: false,
    visible: false,
    key: WorldScene.name
};


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! exports provided: gameScenes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameScenes", function() { return gameScenes; });
/* harmony import */ var _MenuScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuScene */ "./src/scenes/MenuScene.ts");
/* harmony import */ var _HUDScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HUDScene */ "./src/scenes/HUDScene.ts");
/* harmony import */ var _WorldScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorldScene */ "./src/scenes/WorldScene.ts");
/* harmony import */ var _CinematicScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CinematicScene */ "./src/scenes/CinematicScene.ts");
/* harmony import */ var _GameOverScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameOverScene */ "./src/scenes/GameOverScene.ts");
/* harmony import */ var _GameWinScene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameWinScene */ "./src/scenes/GameWinScene.ts");






var gameScenes = [_MenuScene__WEBPACK_IMPORTED_MODULE_0__["MenuScene"], _CinematicScene__WEBPACK_IMPORTED_MODULE_3__["CinematicScene"], _WorldScene__WEBPACK_IMPORTED_MODULE_2__["WorldScene"], _HUDScene__WEBPACK_IMPORTED_MODULE_1__["HUDScene"], _GameOverScene__WEBPACK_IMPORTED_MODULE_4__["GameOverScene"], _GameWinScene__WEBPACK_IMPORTED_MODULE_5__["GameWinScene"]];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ib2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BsYXllci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NvdW5kcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3VpL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdmlkZW9zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtb2JqZWN0cy9CYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvQm9hcmRDb2xpZGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL0NpbmVtYXRpY1ZpZGVvLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL0dhbWVPdmVyT3ZlcmxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL0dhbWVPdmVyVmlkZW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtb2JqZWN0cy9HYW1lV2luVmlkZW8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtb2JqZWN0cy9IVURCYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvTWVkaWFPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtb2JqZWN0cy9NZWRpYU9iamVjdFdpdGhDb250cm9scy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL01lbnVCYWNrZ3JvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvTWVudVZpZGVvTG9vcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL1BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL1Njb3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLW9iamVjdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtb2JqZWN0cy9waWVjZXMvQWJzdHJhY3RQaWVjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtb2JqZWN0cy9waWVjZXMvQ3VydmVDYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL3BpZWNlcy9HcmlkTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL3BpZWNlcy9QaWVjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUtb2JqZWN0cy9waWVjZXMvU3RyYWlnaHRDYWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL3NvdW5kcy9GeC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS1vYmplY3RzL3NvdW5kcy9NdXNpYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0NpbmVtYXRpY1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvR2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0dhbWVXaW5TY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL0hVRFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWVudVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvV29ybGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbkUsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdkUsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFFckUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUM7UUFFSyxnQkFBVSxHQUFHO1lBQ25CLEtBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1lBRXRCLElBQUksS0FBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFFRCxJQUFJLEtBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFO2dCQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3ZCO1lBRUQs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RSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN0QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3RCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN0QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdEIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ3hCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDdkIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUN4QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO2dCQUN2QixFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTthQUN0QixDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRXpDO2dCQUNDO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxRQUFRO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxNQUFNO29CQUNaLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO2lCQUNSO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2dCQUNEO29CQUNDLEVBQUUsRUFBRSxTQUFTO29CQUNiLElBQUksRUFBRSxPQUFPO29CQUNiLEtBQUssRUFBRSxFQUFFO29CQUNULEtBQUssRUFBRSxDQUFDO29CQUNSLFFBQVEsRUFBRSxDQUFDO2lCQUNYO2FBQ0QsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUM7UUFoUkQsS0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLCtDQUFFLEVBQUUsQ0FBQzs7SUFDcEIsQ0FBQztJQUNELDRCQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsa0RBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrREFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRTtZQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVO1NBQzlCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUvRCxZQUFZO1FBQ1osa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQWlPTyw2QkFBUSxHQUFoQjtRQUFBLGlCQUtDO1FBSkEsVUFBVSxDQUFDO1lBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLG1DQUFjLEdBQXRCO1FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sbUNBQWMsR0FBdEI7UUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGtFQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnRUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyxrQ0FBYSxHQUFyQjtRQUNDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxDQTVUK0IsNENBQVksR0E0VDNDOztBQUVELElBQU0sV0FBVyxHQUF1QztJQUN2RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLFVBQVUsQ0FBQyxJQUFJO0NBQ3BCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMvVUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNGO0FBQ0k7QUFDUTtBQUNGO0FBQ0Y7QUFFdkMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxvREFBUyxFQUFFLDhEQUFjLEVBQUUsc0RBQVUsRUFBRSxrREFBUSxFQUFFLDREQUFhLEVBQUUsMERBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJtbWdnajIwMjAtdGVhbWN1a2kvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgY29uc3QgYm9hcmRBc3NldHMgPSB7XG5cdEJMQU5LOiAnL3NyYy9hc3NldHMvYm9hcmQvYmxhbmsucG5nJyxcblx0Q0FQQUNJVE9SOiAnL3NyYy9hc3NldHMvYm9hcmQvY2FwYWNpdG9yLnBuZycsXG5cdENBUEFDSVRPUl9BQ1RJVkU6ICcvc3JjL2Fzc2V0cy9ib2FyZC9jYXBhY2l0b3JfYWN0aXZlLnBuZycsXG5cdENVUlZFOiAnL3NyYy9hc3NldHMvYm9hcmQvY3VydmUucG5nJyxcblx0RElWSURFUjogJy9zcmMvYXNzZXRzL2JvYXJkL2RpdmlkZXIucG5nJyxcblx0RElWSURFUl9BQ1RJVkU6ICcvc3JjL2Fzc2V0cy9ib2FyZC9kaXZpZGVyLWFjdGl2ZS5wbmcnLFxuXHRMSU5FOiAnL3NyYy9hc3NldHMvYm9hcmQvbGluZS5wbmcnLFxuXHRSRVNJU1RPUjogJy9zcmMvYXNzZXRzL2JvYXJkL3Jlc2lzdG9yLnBuZycsXG5cdFJFU0lTVE9SX0FDVElWRTogJy9zcmMvYXNzZXRzL2JvYXJkL2JsYW5rLnBuZycsXG5cdFVTRVI6ICcvc3JjL2Fzc2V0cy9ib2FyZC91c2VyLnBuZycsXG5cdFZPSUQ6ICcvc3JjL2Fzc2V0cy9ib2FyZC92b2lkLnBuZycsXG5cdEJHOiAnL3NyYy9hc3NldHMvYm9hcmQvYmcxLnBuZydcbn07XG4iLCJleHBvcnQgY29uc3QgcGxheWVyQXNzZXRzID0ge1xuXHRCT0RZOiAnL3NyYy9hc3NldHMvcGxheWVyL3NwYXJrLnBuZycsXG5cdFBMQVlFUjogJy9zcmMvYXNzZXRzL3BsYXllci9wbGF5ZXIucG5nJyxcblx0U1RBTkRJTkc6ICcvc3JjL2Fzc2V0cy9wbGF5ZXIvc3RhbmRpbmcucG5nJyxcblx0RFJPUDogJy9zcmMvYXNzZXRzL3BsYXllci9kcm9wLnBuZycsXG5cdFRBS0U6ICcvc3JjL2Fzc2V0cy9wbGF5ZXIvdGFrZS5wbmcnLFxuXHRXSVRIX09CSkVDVDogJy9zcmMvYXNzZXRzL3BsYXllci93aXRoLW9iamVjdC5wbmcnXG59O1xuIiwiZXhwb3J0IGNvbnN0IHNvdW5kQXNzZXRzID0ge1xuXHRMRVZFTF9PTkVfTE9PUDogJy9zcmMvYXNzZXRzL3NvdW5kcy9tdXNpYy9sZXZlbDFsb29wLndhdicsXG5cdExFVkVMX1RXT19MT09QOiAnL3NyYy9hc3NldHMvc291bmRzL211c2ljL2xldmVsMmxvb3Aud2F2Jyxcblx0TEVWRUxfVEhSRUVfTE9PUDogJy9zcmMvYXNzZXRzL3NvdW5kcy9tdXNpYy9sZXZlbDNsb29wLndhdicsXG5cdExFVkVMX0ZPVVJfTE9PUDogJy9zcmMvYXNzZXRzL3NvdW5kcy9tdXNpYy9sZXZlbDRsb29wLndhdicsXG5cdEZYX1BJQ0tVUDogJy9zcmMvYXNzZXRzL3NvdW5kcy9meC9waWNrLXVwLndhdicsXG5cdEZYX01PVkU6ICcvc3JjL2Fzc2V0cy9zb3VuZHMvZngvbW92ZS53YXYnLFxuXHRGWF9GQU5GQVJFOiAnL3NyYy9hc3NldHMvc291bmRzL2Z4L2ZhbmZhcmUud2F2J1xufTtcbiIsImV4cG9ydCBjb25zdCB1aUFzc2V0cyA9IHtcblx0U0NSRUVOX09WRVJMQVk6ICcvc3JjL2Fzc2V0cy91aS9zY3JlZW5fb3ZlcmxheS5wbmcnLFxuXHRFTkRTQ1JFRU5fT1ZFUkxBWTogJy9zcmMvYXNzZXRzL3VpL2VuZFNjcmVlbl9HYW1lT3Zlci5wbmcnLFxuXHRTQ09SRV9CQUNLR1JPVU5EOiAnL3NyYy9hc3NldHMvdWkvc2NvcmUucG5nJyxcblx0VElNRV9CQUNLR1JPVU5EOiAnL3NyYy9hc2V0cy91aS90aW1lLnBuZycsXG5cdE1FTlVfQkFDS0dST1VORDogJy9zcmMvYXNzZXRzL3VpL21lbnVzY3JlZW5fbG9vcC5wbmcnXG59O1xuIiwiZXhwb3J0IGNvbnN0IHZpZGVvQXNzZXRzID0ge1xuXHRFTkRTQ1JFRU5fQ0lORU1BVElDOiAnL3NyYy9hc3NldHMvdmlkZW9zL2VuZFNjcmVlbl9HYW1lT3Zlci5tcDQnLFxuXHRXSU5TQ1JFRU5fQ0lORU1BVElDOiAnL3NyYy9hc3NldHMvdmlkZW9zL2VuZFNjcmVlbl9XaW4ubXA0Jyxcblx0TUFJTl9DSU5FTUFUSUM6ICcvc3JjL2Fzc2V0cy92aWRlb3MvQ2luZW1hdGljYS5tcDQnLFxuXHRNRU5VX0xPT1A6ICcvc3JjL2Fzc2V0cy92aWRlb3MvbWVudVNjcmVlbl9Mb29wLm1wNCdcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IGdhbWVTY2VuZXMgfSBmcm9tICcuL3NjZW5lcyc7XG5cbmV4cG9ydCBjb25zdCBtYWluQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuXHR0aXRsZTogJ1NhbXBsZScsXG5cdHR5cGU6IFBoYXNlci5BVVRPLFxuXHRzY2FsZToge1xuXHRcdC8vIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcblx0XHQvLyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHdpZHRoOiAxOTIwLFxuXHRcdGhlaWdodDogMTA4MFxuXHR9LFxuXHRwaHlzaWNzOiB7XG5cdFx0ZGVmYXVsdDogJ2FyY2FkZScsXG5cdFx0YXJjYWRlOiB7XG5cdFx0XHRkZWJ1ZzogZmFsc2Vcblx0XHR9XG5cdH0sXG5cdHBhcmVudDogJ2dhbWUnLFxuXHRiYWNrZ3JvdW5kQ29sb3I6IDB4MDAwMDAwLFxuXHRzY2VuZTogZ2FtZVNjZW5lc1xufTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgYm9hcmRBc3NldHMgfSBmcm9tICcuLi9hc3NldHMvYm9hcmQnO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi4vbWFpbic7XG5cbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cdHB1YmxpYyBzdGF0aWMgYmdTcHJpdGVLZXkgPSBib2FyZEFzc2V0cy5CRy50b1N0cmluZygpO1xuXG5cdHB1YmxpYyBsb2FkID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcblx0XHRzY2VuZS5sb2FkLmltYWdlKEJhY2tncm91bmQuYmdTcHJpdGVLZXksIGJvYXJkQXNzZXRzLkJHKTtcblx0fTtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUuYWRkLmltYWdlKGdhbWUuc2NhbGUud2lkdGggLyAyLCBnYW1lLnNjYWxlLmhlaWdodCAvIDIsIEJhY2tncm91bmQuYmdTcHJpdGVLZXkpO1xuXHR9O1xufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBib2FyZEFzc2V0cyB9IGZyb20gJy4uL2Fzc2V0cy9ib2FyZCc7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9HYW1lT2JqZWN0JztcbmltcG9ydCB7IGdyaWRUb0NhbnZhcyB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IEdyaWRNYW5hZ2VyIGZyb20gJy4vcGllY2VzL0dyaWRNYW5hZ2VyJztcbi8vIGltcG9ydCB7IGdhbWUgfSBmcm9tICcuLi9tYWluJztcblxuZXhwb3J0IGNsYXNzIEJvYXJkQ29saWRlcnMgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblx0cHVibGljIHN0YXRpYyB2b2lkU3ByaXRlS2V5ID0gYm9hcmRBc3NldHMuVk9JRC50b1N0cmluZygpO1xuXHRwdWJsaWMgZ3JvdXA6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC5pbWFnZShCb2FyZENvbGlkZXJzLnZvaWRTcHJpdGVLZXksIGJvYXJkQXNzZXRzLlZPSUQpO1xuXHR9O1xuXG5cdHB1YmxpYyBpbml0aWFsaXplID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcblx0XHR0aGlzLmdyb3VwID0gc2NlbmUucGh5c2ljcy5hZGQuc3RhdGljR3JvdXAoKTtcblx0fTtcblxuXHRwdWJsaWMgY3JlYXRlVm9pZCA9ICh7IGdyaWRYLCBncmlkWSB9OiB7IGdyaWRYOiBudW1iZXI7IGdyaWRZOiBudW1iZXIgfSkgPT4ge1xuXHRcdGNvbnN0IHsgeCwgeSB9ID0gZ3JpZFRvQ2FudmFzKHsgZ3JpZFgsIGdyaWRZIH0pO1xuXHRcdC8vIGNvbnN0IHZvaWRHcmlkOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuSW1hZ2UgPVxuXHRcdHRoaXMuZ3JvdXAuY3JlYXRlKHgsIHksIEJvYXJkQ29saWRlcnMudm9pZFNwcml0ZUtleSk7XG5cdFx0R3JpZE1hbmFnZXIudm9pZHMuYWRkVG9HcmlkKHsgZ3JpZFgsIGdyaWRZLCBpZDogYCR7Z3JpZFh9JHtncmlkWX1gIH0pO1xuXHR9O1xufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyB2aWRlb0Fzc2V0cyB9IGZyb20gJ2Fzc2V0cy92aWRlb3MnO1xuaW1wb3J0IHsgTWVkaWFPYmplY3QgfSBmcm9tICcuL01lZGlhT2JqZWN0JztcbmltcG9ydCB7IGdhbWUgfSBmcm9tICdtYWluJztcblxuZXhwb3J0IGNsYXNzIENpbmVtYXRpY1ZpZGVvIGV4dGVuZHMgTWVkaWFPYmplY3Qge1xuXHRwdWJsaWMgc3RhdGljIGtleSA9IHZpZGVvQXNzZXRzLk1BSU5fQ0lORU1BVElDLnRvU3RyaW5nKCk7XG5cblx0cHJpdmF0ZSB2aWRlbzogUGhhc2VyLkdhbWVPYmplY3RzLlZpZGVvO1xuXHRwcml2YXRlIGZpbmlzaENhbGxiYWNrOiBGdW5jdGlvbjtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC52aWRlbyhDaW5lbWF0aWNWaWRlby5rZXksIFt2aWRlb0Fzc2V0cy5NQUlOX0NJTkVNQVRJQ10sICdsb2FkZWRkYXRhJywgZmFsc2UsIGZhbHNlKTtcblx0fTtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0dGhpcy52aWRlbyA9IDxQaGFzZXIuR2FtZU9iamVjdHMuVmlkZW8+KFxuXHRcdFx0c2NlbmUuYWRkLnZpZGVvKGdhbWUuY2FudmFzLndpZHRoIC8gMiwgZ2FtZS5jYW52YXMuaGVpZ2h0IC8gMiwgQ2luZW1hdGljVmlkZW8ua2V5KVxuXHRcdCk7XG5cdFx0Ly8gdGhpcy52aWRlby5wbGF5KCk7XG5cdFx0dGhpcy52aWRlby5vbignY29tcGxldGUnLCB0aGlzLm9uRmluaXNoLmJpbmQodGhpcykpO1xuXHR9O1xuXG5cdHB1YmxpYyBwbGF5ID0gKCkgPT4ge1xuXHRcdHRoaXMudmlkZW8ucGxheSgpO1xuXHR9O1xuXG5cdHB1YmxpYyBzZXRGaW5pc2hDYWxsYmFjayA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcblx0XHR0aGlzLmZpbmlzaENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdH07XG5cblx0cHJpdmF0ZSBvbkZpbmlzaCgpIHtcblx0XHRpZiAodGhpcy5maW5pc2hDYWxsYmFjaykge1xuXHRcdFx0dGhpcy5maW5pc2hDYWxsYmFjaygpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHYW1lT2JqZWN0IHtcblx0cHVibGljIGFic3RyYWN0IGxvYWQoc2NlbmU6IFBoYXNlci5TY2VuZSk6IHZvaWQ7XG5cdHB1YmxpYyBhYnN0cmFjdCBpbml0aWFsaXplKHNjZW5lOiBQaGFzZXIuU2NlbmUsIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuXHRwdWJsaWMgdXBkYXRlKCk6IHZvaWQge31cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgdWlBc3NldHMgfSBmcm9tICdhc3NldHMvdWknO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnbWFpbic7XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3Zlck92ZXJsYXkgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblx0cHVibGljIHN0YXRpYyBrZXkgPSB1aUFzc2V0cy5FTkRTQ1JFRU5fT1ZFUkxBWS50b1N0cmluZygpO1xuXHRwcml2YXRlIHN0YXRpYyBsb29wS2V5ID0gJ01FTlVfTE9PUCc7XG5cblx0cHVibGljIHNwcml0ZTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcblxuXHRwcml2YXRlIGZpbmlzaENhbGxiYWNrOiBGdW5jdGlvbjtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC5zcHJpdGVzaGVldChHYW1lT3Zlck92ZXJsYXkua2V5LCB1aUFzc2V0cy5FTkRTQ1JFRU5fT1ZFUkxBWSwge1xuXHRcdFx0ZnJhbWVXaWR0aDogMTkyMCxcblx0XHRcdGZyYW1lSGVpZ2h0OiAxMDgwXG5cdFx0fSk7XG5cdH07XG5cblx0cHVibGljIGluaXRpYWxpemUgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuXHRcdHRoaXMuc3ByaXRlID0gc2NlbmUucGh5c2ljcy5hZGQuc3ByaXRlKGdhbWUuc2NhbGUud2lkdGggLyAyLCBnYW1lLnNjYWxlLmhlaWdodCAvIDIsIEdhbWVPdmVyT3ZlcmxheS5rZXkpO1xuXHRcdHRoaXMuc3ByaXRlLm9uKCdhbmltYXRpb25jb21wbGV0ZScsIHRoaXMub25GaW5pc2guYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5zcHJpdGUuc2V0RGVwdGgoMzApO1xuXG5cdFx0c2NlbmUuYW5pbXMuY3JlYXRlKHtcblx0XHRcdGtleTogR2FtZU92ZXJPdmVybGF5Lmxvb3BLZXksXG5cdFx0XHRmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKEdhbWVPdmVyT3ZlcmxheS5rZXksIHsgc3RhcnQ6IDAsIGVuZDogMjAgfSksXG5cdFx0XHRmcmFtZVJhdGU6IDIwLFxuXHRcdFx0cmVwZWF0OiAxXG5cdFx0fSk7XG5cdH07XG5cblx0cHVibGljIHN0YXJ0ID0gKCkgPT4ge1xuXHRcdHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoR2FtZU92ZXJPdmVybGF5Lmxvb3BLZXkpO1xuXHR9O1xuXG5cdHB1YmxpYyBzZXRGaW5pc2hDYWxsYmFjayA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcblx0XHR0aGlzLmZpbmlzaENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdH07XG5cblx0cHJpdmF0ZSBvbkZpbmlzaCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5maW5pc2hDYWxsYmFjaykge1xuXHRcdFx0dGhpcy5maW5pc2hDYWxsYmFjaygpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBwcml2YXRlIHN0YXJ0VHJhbnNpdGlvbiA9ICgpID0+IHtcblx0Ly8gXHR0aGlzLmZpbmlzaENhbGxiYWNrKCk7XG5cdC8vIH07XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IHZpZGVvQXNzZXRzIH0gZnJvbSAnYXNzZXRzL3ZpZGVvcyc7XG5pbXBvcnQgeyBNZWRpYU9iamVjdCB9IGZyb20gJy4vTWVkaWFPYmplY3QnO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJ21haW4nO1xuXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJWaWRlbyBleHRlbmRzIE1lZGlhT2JqZWN0IHtcblx0cHVibGljIHN0YXRpYyBrZXkgPSB2aWRlb0Fzc2V0cy5FTkRTQ1JFRU5fQ0lORU1BVElDLnRvU3RyaW5nKCk7XG5cblx0cHJpdmF0ZSB2aWRlbzogUGhhc2VyLkdhbWVPYmplY3RzLlZpZGVvO1xuXHRwcml2YXRlIGZpbmlzaENhbGxiYWNrOiBGdW5jdGlvbjtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC52aWRlbyhHYW1lT3ZlclZpZGVvLmtleSwgW3ZpZGVvQXNzZXRzLkVORFNDUkVFTl9DSU5FTUFUSUNdLCAnbG9hZGVkZGF0YScsIGZhbHNlLCBmYWxzZSk7XG5cdH07XG5cblx0cHVibGljIGluaXRpYWxpemUgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuXHRcdHRoaXMudmlkZW8gPSA8UGhhc2VyLkdhbWVPYmplY3RzLlZpZGVvPihcblx0XHRcdHNjZW5lLmFkZC52aWRlbyhnYW1lLmNhbnZhcy53aWR0aCAvIDIsIGdhbWUuY2FudmFzLmhlaWdodCAvIDIsIEdhbWVPdmVyVmlkZW8ua2V5KVxuXHRcdCk7XG5cdFx0dGhpcy52aWRlby5wbGF5KCk7XG5cdFx0dGhpcy52aWRlby5vbignY29tcGxldGUnLCB0aGlzLm9uRmluaXNoLmJpbmQodGhpcykpO1xuXHR9O1xuXG5cdHB1YmxpYyBwbGF5ID0gKCkgPT4ge1xuXHRcdHRoaXMudmlkZW8ucGxheSgpO1xuXHR9O1xuXG5cdHB1YmxpYyBzZXRGaW5pc2hDYWxsYmFjayA9IChjYWxsYmFjazogRnVuY3Rpb24pID0+IHtcblx0XHR0aGlzLmZpbmlzaENhbGxiYWNrID0gY2FsbGJhY2s7XG5cdH07XG5cblx0cHJpdmF0ZSBvbkZpbmlzaCgpIHtcblx0XHRpZiAodGhpcy5maW5pc2hDYWxsYmFjaykge1xuXHRcdFx0dGhpcy5maW5pc2hDYWxsYmFjaygpO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyB2aWRlb0Fzc2V0cyB9IGZyb20gJ2Fzc2V0cy92aWRlb3MnO1xuaW1wb3J0IHsgTWVkaWFPYmplY3QgfSBmcm9tICcuL01lZGlhT2JqZWN0JztcbmltcG9ydCB7IGdhbWUgfSBmcm9tICdtYWluJztcblxuZXhwb3J0IGNsYXNzIEdhbWVXaW5WaWRlbyBleHRlbmRzIE1lZGlhT2JqZWN0IHtcblx0cHVibGljIHN0YXRpYyBrZXkgPSB2aWRlb0Fzc2V0cy5XSU5TQ1JFRU5fQ0lORU1BVElDLnRvU3RyaW5nKCk7XG5cblx0cHJpdmF0ZSB2aWRlbzogUGhhc2VyLkdhbWVPYmplY3RzLlZpZGVvO1xuXHRwcml2YXRlIGZpbmlzaENhbGxiYWNrOiBGdW5jdGlvbjtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC52aWRlbyhHYW1lV2luVmlkZW8ua2V5LCBbdmlkZW9Bc3NldHMuV0lOU0NSRUVOX0NJTkVNQVRJQ10sICdsb2FkZWRkYXRhJywgZmFsc2UsIGZhbHNlKTtcblx0fTtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0dGhpcy52aWRlbyA9IDxQaGFzZXIuR2FtZU9iamVjdHMuVmlkZW8+KFxuXHRcdFx0c2NlbmUuYWRkLnZpZGVvKGdhbWUuY2FudmFzLndpZHRoIC8gMiwgZ2FtZS5jYW52YXMuaGVpZ2h0IC8gMiwgR2FtZVdpblZpZGVvLmtleSlcblx0XHQpO1xuXHRcdHRoaXMudmlkZW8ucGxheSgpO1xuXHRcdHRoaXMudmlkZW8ub24oJ2NvbXBsZXRlJywgdGhpcy5vbkZpbmlzaC5iaW5kKHRoaXMpKTtcblx0fTtcblxuXHRwdWJsaWMgcGxheSA9ICgpID0+IHtcblx0XHR0aGlzLnZpZGVvLnBsYXkoKTtcblx0fTtcblxuXHRwdWJsaWMgc2V0RmluaXNoQ2FsbGJhY2sgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG5cdFx0dGhpcy5maW5pc2hDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR9O1xuXG5cdHByaXZhdGUgb25GaW5pc2goKSB7XG5cdFx0aWYgKHRoaXMuZmluaXNoQ2FsbGJhY2spIHtcblx0XHRcdHRoaXMuZmluaXNoQ2FsbGJhY2soKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgdWlBc3NldHMgfSBmcm9tICdhc3NldHMvdWknO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gJy4vR2FtZU9iamVjdCc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnbWFpbic7XG5cbmV4cG9ydCBjbGFzcyBIVURCYWNrZ3JvdW5kIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cdHB1YmxpYyBzdGF0aWMga2V5ID0gdWlBc3NldHMuU0NSRUVOX09WRVJMQVkudG9TdHJpbmcoKTtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC5pbWFnZShIVURCYWNrZ3JvdW5kLmtleSwgdWlBc3NldHMuU0NSRUVOX09WRVJMQVkpO1xuXHR9O1xuXG5cdHB1YmxpYyBpbml0aWFsaXplID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcblx0XHRzY2VuZS5hZGQuaW1hZ2UoZ2FtZS5zY2FsZS53aWR0aCAvIDIsIGdhbWUuc2NhbGUuaGVpZ2h0IC8gMiwgSFVEQmFja2dyb3VuZC5rZXkpLnNldERlcHRoKDIwKTtcblx0fTtcbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgZW51bSBNZWRpYU9iamVjdFN0YXRlcyB7XG5cdFBMQVRJTkcsXG5cdFNUT1BQRUQsXG5cdFBBVVNFRFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVkaWFPYmplY3Qge1xuXHRwdWJsaWMgYWJzdHJhY3QgbG9hZChzY2VuZTogUGhhc2VyLlNjZW5lKTogdm9pZDtcblx0cHVibGljIGFic3RyYWN0IGluaXRpYWxpemUoc2NlbmU6IFBoYXNlci5TY2VuZSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG59XG4iLCJpbXBvcnQgeyBNZWRpYU9iamVjdCB9IGZyb20gJy4vTWVkaWFPYmplY3QnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVkaWFPYmplY3RXaXRoQ29udHJvbHMgZXh0ZW5kcyBNZWRpYU9iamVjdCB7XG5cdHB1YmxpYyBhYnN0cmFjdCBwbGF5KCk6IHZvaWQ7XG5cdHB1YmxpYyBhYnN0cmFjdCBzdG9wKCk6IHZvaWQ7XG5cdHB1YmxpYyBhYnN0cmFjdCBwYXVzZSgpOiB2b2lkO1xufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyB1aUFzc2V0cyB9IGZyb20gJ2Fzc2V0cy91aSc7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9HYW1lT2JqZWN0JztcbmltcG9ydCB7IGdhbWUgfSBmcm9tICdtYWluJztcblxuZXhwb3J0IGNsYXNzIE1lbnVCYWNrZ3JvdW5kIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cdHB1YmxpYyBzdGF0aWMga2V5ID0gdWlBc3NldHMuTUVOVV9CQUNLR1JPVU5ELnRvU3RyaW5nKCk7XG5cdHByaXZhdGUgc3RhdGljIGxvb3BLZXkgPSAnTUVOVV9MT09QJztcblxuXHRwdWJsaWMgc3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuXG5cdHB1YmxpYyBsb2FkID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcblx0XHRzY2VuZS5sb2FkLnNwcml0ZXNoZWV0KE1lbnVCYWNrZ3JvdW5kLmtleSwgdWlBc3NldHMuTUVOVV9CQUNLR1JPVU5ELCB7XG5cdFx0XHRmcmFtZVdpZHRoOiAxOTIwLFxuXHRcdFx0ZnJhbWVIZWlnaHQ6IDEwODBcblx0XHR9KTtcblx0fTtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0dGhpcy5zcHJpdGUgPSBzY2VuZS5waHlzaWNzLmFkZC5zcHJpdGUoZ2FtZS5zY2FsZS53aWR0aCAvIDIsIGdhbWUuc2NhbGUuaGVpZ2h0IC8gMiwgTWVudUJhY2tncm91bmQua2V5KTtcblxuXHRcdHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG5cdFx0XHRrZXk6IE1lbnVCYWNrZ3JvdW5kLmxvb3BLZXksXG5cdFx0XHRmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKE1lbnVCYWNrZ3JvdW5kLmtleSwgeyBzdGFydDogMCwgZW5kOiAyMCB9KSxcblx0XHRcdGZyYW1lUmF0ZTogMjAsXG5cdFx0XHRyZXBlYXQ6IC0xXG5cdFx0fSk7XG5cblx0XHRzY2VuZS5hbmltcy5jcmVhdGU7XG5cdH07XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IHZpZGVvQXNzZXRzIH0gZnJvbSAnYXNzZXRzL3ZpZGVvcyc7XG5pbXBvcnQgeyBNZWRpYU9iamVjdCB9IGZyb20gJy4vTWVkaWFPYmplY3QnO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gJ21haW4nO1xuXG5leHBvcnQgY2xhc3MgTWVudVZpZGVvTG9vcCBleHRlbmRzIE1lZGlhT2JqZWN0IHtcblx0cHVibGljIHN0YXRpYyBrZXkgPSB2aWRlb0Fzc2V0cy5NRU5VX0xPT1AudG9TdHJpbmcoKTtcblxuXHRwcml2YXRlIHZpZGVvOiBQaGFzZXIuR2FtZU9iamVjdHMuVmlkZW87XG5cdHByaXZhdGUgZmluaXNoQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuXHRwcml2YXRlIGlzTG9vcGluZzogYm9vbGVhbiA9IHRydWU7XG5cblx0cHVibGljIGxvYWQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuXHRcdHNjZW5lLmxvYWQudmlkZW8oTWVudVZpZGVvTG9vcC5rZXksIFt2aWRlb0Fzc2V0cy5NRU5VX0xPT1BdLCAnbG9hZGVkZGF0YScsIGZhbHNlLCBmYWxzZSk7XG5cdH07XG5cblx0cHVibGljIGluaXRpYWxpemUgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuXHRcdHRoaXMudmlkZW8gPSA8UGhhc2VyLkdhbWVPYmplY3RzLlZpZGVvPihcblx0XHRcdHNjZW5lLmFkZC52aWRlbyhnYW1lLmNhbnZhcy53aWR0aCAvIDIsIGdhbWUuY2FudmFzLmhlaWdodCAvIDIsIE1lbnVWaWRlb0xvb3Aua2V5KVxuXHRcdCk7XG5cdFx0dGhpcy52aWRlby5wbGF5KHRoaXMuaXNMb29waW5nKTtcblx0XHR0aGlzLnZpZGVvLm9uKCdjb21wbGV0ZScsIHRoaXMub25GaW5pc2guYmluZCh0aGlzKSk7XG5cdH07XG5cblx0cHVibGljIGRlc3Ryb3koKSB7XG5cdFx0dGhpcy52aWRlby5kZXN0cm95KCk7XG5cdH1cblxuXHRwdWJsaWMgc2V0SXNMb29waW5nKGxvb3A6IGJvb2xlYW4pIHtcblx0XHRpZiAobG9vcCAhPSB0aGlzLmlzTG9vcGluZykge1xuXHRcdFx0dGhpcy52aWRlby5zZXRMb29wKGxvb3ApO1xuXHRcdH1cblx0XHR0aGlzLmlzTG9vcGluZyA9IGxvb3A7XG5cdH1cblxuXHRwdWJsaWMgc2V0RmluaXNoQ2FsbGJhY2sgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB7XG5cdFx0dGhpcy5maW5pc2hDYWxsYmFjayA9IGNhbGxiYWNrO1xuXHR9O1xuXG5cdHByaXZhdGUgb25GaW5pc2goKSB7XG5cdFx0aWYgKHRoaXMuZmluaXNoQ2FsbGJhY2spIHtcblx0XHRcdHRoaXMuZmluaXNoQ2FsbGJhY2soKTtcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5pbXBvcnQgeyBwbGF5ZXJBc3NldHMgfSBmcm9tICdhc3NldHMvcGxheWVyJztcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuL0dhbWVPYmplY3QnO1xuaW1wb3J0IHsgR1JJRF9TSVpFLCBncmlkVG9DYW52YXMgfSBmcm9tICdnYW1lLW9iamVjdHMnO1xuaW1wb3J0IEdyaWRNYW5hZ2VyIGZyb20gJy4vcGllY2VzL0dyaWRNYW5hZ2VyJztcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVPYmplY3Qge1xuXHRwdWJsaWMgc3RhdGljIGtleSA9IHBsYXllckFzc2V0cy5QTEFZRVIudG9TdHJpbmcoKTtcblx0cHVibGljIHN0YXRpYyBrZXlEcm9wID0gcGxheWVyQXNzZXRzLkRST1AudG9TdHJpbmcoKTtcblx0cHVibGljIHN0YXRpYyBrZXlUYWtlID0gcGxheWVyQXNzZXRzLlRBS0UudG9TdHJpbmcoKTtcblx0cHVibGljIHN0YXRpYyBrZXlXaXRoT2JqZWN0ID0gcGxheWVyQXNzZXRzLldJVEhfT0JKRUNULnRvU3RyaW5nKCk7XG5cdHB1YmxpYyBwaWVjZXM6IGFueTtcblx0cHVibGljIHBsYXlNb3ZlU291bmQ6IGFueTtcblx0cHVibGljIHBsYXlQaWNrdXA6IGFueTtcblx0cHVibGljIGlzQ2FycnluZyA9IGZhbHNlO1xuXHRwdWJsaWMgaXNBbmltYXRpbmcgPSBmYWxzZTtcblxuXHRwdWJsaWMgc3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuXG5cdC8vIHByaXZhdGUgbW92ZW1lbnRTcGVlZDogbnVtYmVyID0gOTAwO1xuXHQvLyBwcml2YXRlIGdyaWRTcXVhcmUgPSB7XG5cdC8vIFx0d2lkdGg6IEdSSURfU0laRSxcblx0Ly8gXHRoZWlnaHQ6IEdSSURfU0laRVxuXHQvLyB9O1xuXHRwcml2YXRlIHBvc2l0aW9uID0ge1xuXHRcdGdyaWRYOiAyLCAvLzM2Nixcblx0XHRncmlkWTogMSAvLzI5NFxuXHR9O1xuXHQvLyBwcml2YXRlIGp1bXBGb3JjZTogbnVtYmVyID0gMzMwO1xuXHRwcml2YXRlIGN1cnNvcnM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuXHRwcml2YXRlIGRyb3A6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG5cdHByaXZhdGUgcm90YXRlOiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuXHRwcml2YXRlIGlzS2V5RG93bjogYm9vbGVhbjtcblx0Ly8gcHJpdmF0ZSBwcmVzZWRLZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhbmltYXRpb25zID0ge1xuXHRcdGxlZnQ6ICdsZWZ0Jyxcblx0XHRyaWdodDogJ3JpZ2h0Jyxcblx0XHRpZGxlOiAnaWRsZScsXG5cdFx0d2l0aE9iamVjdDogJ3dpdGhPYmplY3QnLFxuXHRcdHRha2U6ICd0YWtlJyxcblx0XHRkcm9wOiAnZHJvcCdcblx0fTtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC5zcHJpdGVzaGVldChQbGF5ZXIua2V5LCBwbGF5ZXJBc3NldHMuU1RBTkRJTkcsIHtcblx0XHRcdGZyYW1lV2lkdGg6IDE4MCxcblx0XHRcdGZyYW1lSGVpZ2h0OiAxODBcblx0XHR9KTtcblxuXHRcdHNjZW5lLmxvYWQuc3ByaXRlc2hlZXQoUGxheWVyLmtleURyb3AsIHBsYXllckFzc2V0cy5EUk9QLCB7XG5cdFx0XHRmcmFtZVdpZHRoOiAxODAsXG5cdFx0XHRmcmFtZUhlaWdodDogMTgwXG5cdFx0fSk7XG5cblx0XHRzY2VuZS5sb2FkLnNwcml0ZXNoZWV0KFBsYXllci5rZXlUYWtlLCBwbGF5ZXJBc3NldHMuVEFLRSwge1xuXHRcdFx0ZnJhbWVXaWR0aDogMTgwLFxuXHRcdFx0ZnJhbWVIZWlnaHQ6IDE4MFxuXHRcdH0pO1xuXG5cdFx0c2NlbmUubG9hZC5zcHJpdGVzaGVldChQbGF5ZXIua2V5V2l0aE9iamVjdCwgcGxheWVyQXNzZXRzLldJVEhfT0JKRUNULCB7XG5cdFx0XHRmcmFtZVdpZHRoOiAxODAsXG5cdFx0XHRmcmFtZUhlaWdodDogMTgwXG5cdFx0fSk7XG5cdH07XG5cblx0cHVibGljIGluaXRpYWxpemUgPSAoXG5cdFx0c2NlbmU6IFBoYXNlci5TY2VuZSxcblx0XHR7IHBpZWNlcywgcGxheU1vdmVTb3VuZCwgcGxheVBpY2t1cCB9OiB7IHBpZWNlczogYW55OyBwbGF5TW92ZVNvdW5kOiBhbnk7IHBsYXlQaWNrdXA6IGFueSB9XG5cdCkgPT4ge1xuXHRcdHRoaXMucGllY2VzID0gcGllY2VzO1xuXHRcdHRoaXMucGxheU1vdmVTb3VuZCA9IHBsYXlNb3ZlU291bmQ7XG5cdFx0dGhpcy5wbGF5UGlja3VwID0gcGxheVBpY2t1cDtcblx0XHRjb25zdCB7IHgsIHkgfSA9IGdyaWRUb0NhbnZhcyh0aGlzLnBvc2l0aW9uKTtcblx0XHR0aGlzLnNwcml0ZSA9IHNjZW5lLnBoeXNpY3MuYWRkLnNwcml0ZSh4LCB5LCBQbGF5ZXIua2V5KTtcblx0XHR0aGlzLnNwcml0ZS5zZXRTaXplKEdSSURfU0laRSwgR1JJRF9TSVpFKTtcblx0XHR0aGlzLmN1cnNvcnMgPSBzY2VuZS5pbnB1dC5rZXlib2FyZC5jcmVhdGVDdXJzb3JLZXlzKCk7XG5cdFx0dGhpcy5yb3RhdGUgPSBzY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlopO1xuXHRcdHRoaXMuZHJvcCA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuWCk7XG5cdFx0c2NlbmUuaW5wdXQub24oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleVByZXNzLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuaXNLZXlEb3duID0gZmFsc2U7XG5cdFx0Ly8gcGh5c2ljc1xuXHRcdHRoaXMuc3ByaXRlLnNldEJvdW5jZSgwKTtcblx0XHR0aGlzLnNwcml0ZS5zZXRGcmljdGlvbigzMDApO1xuXHRcdHRoaXMuc3ByaXRlLnNldERlcHRoKDEwKTtcblx0XHR0aGlzLnNwcml0ZS5zZXRBbHBoYSgwLjkpO1xuXHRcdHRoaXMuc3ByaXRlLnNldENvbGxpZGVXb3JsZEJvdW5kcyh0cnVlKTtcblxuXHRcdC8vIGFuaW1hdGlvbnNcblx0XHQvLyBzY2VuZS5hbmltcy5jcmVhdGUoe1xuXHRcdC8vIFx0a2V5OiB0aGlzLmFuaW1hdGlvbnMubGVmdCxcblx0XHQvLyBcdGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoUGxheWVyLmtleSwge1xuXHRcdC8vIFx0XHRzdGFydDogMCxcblx0XHQvLyBcdFx0ZW5kOiAzXG5cdFx0Ly8gXHR9KSxcblx0XHQvLyBcdGZyYW1lUmF0ZTogMTAsXG5cdFx0Ly8gXHRyZXBlYXQ6IC0xXG5cdFx0Ly8gfSk7XG5cblx0XHQvLyBzY2VuZS5hbmltcy5jcmVhdGUoe1xuXHRcdC8vIFx0a2V5OiB0aGlzLmFuaW1hdGlvbnMucmlnaHQsXG5cdFx0Ly8gXHRmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFBsYXllci5rZXksIHtcblx0XHQvLyBcdFx0c3RhcnQ6IDUsXG5cdFx0Ly8gXHRcdGVuZDogOFxuXHRcdC8vIFx0fSksXG5cdFx0Ly8gXHRmcmFtZVJhdGU6IDEwLFxuXHRcdC8vIFx0cmVwZWF0OiAtMVxuXHRcdC8vIH0pO1xuXG5cdFx0c2NlbmUuYW5pbXMuY3JlYXRlKHtcblx0XHRcdGtleTogdGhpcy5hbmltYXRpb25zLmlkbGUsXG5cdFx0XHRmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFBsYXllci5rZXksIHsgc3RhcnQ6IDAsIGVuZDogOTYgfSksXG5cdFx0XHRmcmFtZVJhdGU6IDEyLFxuXHRcdFx0cmVwZWF0OiAtMVxuXHRcdH0pO1xuXG5cdFx0c2NlbmUuYW5pbXMuY3JlYXRlKHtcblx0XHRcdGtleTogdGhpcy5hbmltYXRpb25zLndpdGhPYmplY3QsXG5cdFx0XHRmcmFtZXM6IHNjZW5lLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFBsYXllci5rZXlXaXRoT2JqZWN0LCB7IHN0YXJ0OiAwLCBlbmQ6IDk1IH0pLFxuXHRcdFx0ZnJhbWVSYXRlOiAxMixcblx0XHRcdHJlcGVhdDogLTFcblx0XHR9KTtcblxuXHRcdGNvbnN0IHRha2VBbmkgPSBzY2VuZS5hbmltcy5jcmVhdGUoe1xuXHRcdFx0a2V5OiB0aGlzLmFuaW1hdGlvbnMudGFrZSxcblx0XHRcdGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoUGxheWVyLmtleVRha2UsIHsgc3RhcnQ6IDAsIGVuZDogOSB9KSxcblx0XHRcdGZyYW1lUmF0ZTogMjMsXG5cdFx0XHRyZXBlYXQ6IDBcblx0XHR9KTtcblxuXHRcdGNvbnN0IGRyb3BBbmkgPSBzY2VuZS5hbmltcy5jcmVhdGUoe1xuXHRcdFx0a2V5OiB0aGlzLmFuaW1hdGlvbnMuZHJvcCxcblx0XHRcdGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoUGxheWVyLmtleURyb3AsIHsgc3RhcnQ6IDAsIGVuZDogMTAgfSksXG5cdFx0XHRmcmFtZVJhdGU6IDIzLFxuXHRcdFx0cmVwZWF0OiAwXG5cdFx0fSk7XG5cblx0XHR0YWtlQW5pICYmXG5cdFx0XHR0YWtlQW5pLm9uKCdjb21wbGV0ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5zcHJpdGUuYW5pbXMucGxheSh0aGlzLmFuaW1hdGlvbnMud2l0aE9iamVjdCk7XG5cdFx0XHRcdHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdGRyb3BBbmkgJiZcblx0XHRcdGRyb3BBbmkub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNwcml0ZS5hbmltcy5wbGF5KHRoaXMuYW5pbWF0aW9ucy5pZGxlKTtcblx0XHRcdFx0dGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNldElkbGVTdGF0ZSgpO1xuXHR9O1xuXG5cdHB1YmxpYyB1cGRhdGUgPSAoKSA9PiB7XG5cdFx0dmFyIG1vdmVVcCA9IFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmN1cnNvcnMudXAhKTtcblx0XHR2YXIgbW92ZURvd24gPSBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5jdXJzb3JzLmRvd24hKTtcblx0XHR2YXIgbW92ZUxlZnQgPSBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24odGhpcy5jdXJzb3JzLmxlZnQhKTtcblx0XHR2YXIgbW92ZVJpZ2h0ID0gUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMuY3Vyc29ycy5yaWdodCEpO1xuXG5cdFx0dmFyIHJvdGF0ZVBpZWNlID0gUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKHRoaXMucm90YXRlISk7XG5cdFx0dmFyIGRyb3BQaWVjZSA9IFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih0aGlzLmRyb3AhKTtcblxuXHRcdC8vIGNvbnN0IGZvcndhcmQgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigxLCAxKTtcblx0XHQvLyBsZXQgaW1wdWxzZSA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKDAsIDApO1xuXHRcdGxldCBuZXh0UG9zaXRpb24gPSB7IC4uLnRoaXMucG9zaXRpb24gfTtcblxuXHRcdGlmIChtb3ZlTGVmdCkge1xuXHRcdFx0Ly8gaW1wdWxzZS54ICs9IC1mb3J3YXJkLng7XG5cdFx0XHRuZXh0UG9zaXRpb24gPSB7IGdyaWRYOiB0aGlzLnBvc2l0aW9uLmdyaWRYIC0gMSwgZ3JpZFk6IHRoaXMucG9zaXRpb24uZ3JpZFkgfTtcblx0XHR9XG5cdFx0aWYgKG1vdmVSaWdodCkge1xuXHRcdFx0bmV4dFBvc2l0aW9uID0geyBncmlkWDogdGhpcy5wb3NpdGlvbi5ncmlkWCArIDEsIGdyaWRZOiB0aGlzLnBvc2l0aW9uLmdyaWRZIH07XG5cdFx0fVxuXHRcdGlmIChtb3ZlVXApIHtcblx0XHRcdG5leHRQb3NpdGlvbiA9IHsgZ3JpZFg6IHRoaXMucG9zaXRpb24uZ3JpZFgsIGdyaWRZOiB0aGlzLnBvc2l0aW9uLmdyaWRZIC0gMSB9O1xuXHRcdH1cblx0XHRpZiAobW92ZURvd24pIHtcblx0XHRcdG5leHRQb3NpdGlvbiA9IHsgZ3JpZFg6IHRoaXMucG9zaXRpb24uZ3JpZFgsIGdyaWRZOiB0aGlzLnBvc2l0aW9uLmdyaWRZICsgMSB9O1xuXHRcdH1cblx0XHRjb25zdCBjYW5Nb3ZlID0gIUdyaWRNYW5hZ2VyLnZvaWRzLmdldElEKG5leHRQb3NpdGlvbik7XG5cblx0XHRpZiAoY2FuTW92ZSAmJiAhdGhpcy5pc0FuaW1hdGluZykge1xuXHRcdFx0aWYgKHRoaXMucG9zaXRpb24uZ3JpZFggIT09IG5leHRQb3NpdGlvbi5ncmlkWCB8fCB0aGlzLnBvc2l0aW9uLmdyaWRZICE9PSBuZXh0UG9zaXRpb24uZ3JpZFkpIHtcblx0XHRcdFx0dGhpcy5wbGF5TW92ZVNvdW5kKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucG9zaXRpb24gPSBuZXh0UG9zaXRpb247XG5cdFx0XHR0aGlzLm1vdmVUb3dhcmRzKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRyb3BQaWVjZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNDYXJyeW5nICYmICFHcmlkTWFuYWdlci5waWVjZXMuZ2V0SUQodGhpcy5wb3NpdGlvbikpIHtcblx0XHRcdFx0dGhpcy5waWVjZXMuZ2V0QWN0aXZlUGllY2UoKS5wbGFjZSh0aGlzLnBvc2l0aW9uKTtcblx0XHRcdFx0dGhpcy5pc0NhcnJ5bmcgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5pc0FuaW1hdGluZyA9IHRydWU7XG5cdFx0XHRcdHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkodGhpcy5hbmltYXRpb25zLmRyb3ApO1xuXHRcdFx0XHR0aGlzLnBsYXlQaWNrdXAoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocm90YXRlUGllY2UpIHtcblx0XHRcdGlmICh0aGlzLmlzQ2FycnluZykge1xuXHRcdFx0XHR0aGlzLnBpZWNlcy5nZXRBY3RpdmVQaWVjZSgpLnJvdGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIGhhbmRsZUtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzS2V5RG93bikge1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0SWRsZVN0YXRlID0gKCkgPT4ge1xuXHRcdHRoaXMuc3ByaXRlLnNldFZlbG9jaXR5KDApO1xuXHRcdHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkodGhpcy5hbmltYXRpb25zLmlkbGUsIHRydWUpO1xuXHR9O1xuXG5cdHByaXZhdGUgbW92ZVRvd2FyZHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyB4LCB5IH0gPSBncmlkVG9DYW52YXModGhpcy5wb3NpdGlvbik7XG5cdFx0dGhpcy5zcHJpdGUuc2V0UG9zaXRpb24oeCwgeSk7XG5cblx0XHRpZiAodGhpcy5wb3NpdGlvbi5ncmlkWCA9PT0gMCAmJiB0aGlzLnBvc2l0aW9uLmdyaWRZID09PSAxICYmICF0aGlzLmlzQ2FycnluZykge1xuXHRcdFx0dGhpcy5waWVjZXMuY2FuY2VsVGhlVGltZW91dCgpO1xuXHRcdFx0dGhpcy5zcHJpdGUuYW5pbXMucGxheSh0aGlzLmFuaW1hdGlvbnMudGFrZSk7XG5cdFx0XHR0aGlzLnBsYXlQaWNrdXAoKTtcblx0XHRcdHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuXHRcdFx0dGhpcy5pc0NhcnJ5bmcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQ2FycnluZykge1xuXHRcdFx0dGhpcy5waWVjZXMuZ2V0QWN0aXZlUGllY2UoKS5tb3ZlVG8odGhpcy5wb3NpdGlvbik7XG5cdFx0fVxuXHR9O1xufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyB1aUFzc2V0cyB9IGZyb20gJ2Fzc2V0cy91aSc7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSAnLi9HYW1lT2JqZWN0Jztcbi8vIGltcG9ydCB7IGdhbWUgfSBmcm9tICdtYWluJztcblxuZXhwb3J0IGNsYXNzIFNjb3JlIGV4dGVuZHMgR2FtZU9iamVjdCB7XG5cdHB1YmxpYyBzdGF0aWMga2V5ID0gdWlBc3NldHMuU0NPUkVfQkFDS0dST1VORC50b1N0cmluZygpO1xuXG5cdHByaXZhdGUgdGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG5cdHByaXZhdGUgc2NvcmU6IG51bWJlcjtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC5pbWFnZShTY29yZS5rZXksIHVpQXNzZXRzLlNDT1JFX0JBQ0tHUk9VTkQpO1xuXHR9O1xuXG5cdHB1YmxpYyBpbml0aWFsaXplID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcblx0XHR0aGlzLnRleHQgPSBzY2VuZS5hZGQudGV4dCg3OTQsIDc4LCAnMCcsIHtcblx0XHRcdGZvbnQ6ICc1MHB4IFJhbGV3YXknLFxuXHRcdFx0ZmlsbDogJyNmZmZmZmYnLFxuXHRcdFx0d2VpZ2h0OiAnNzAwJ1xuXHRcdH0pO1xuXHRcdGNvbnN0IG1hc2sgPSBuZXcgUGhhc2VyLkRpc3BsYXkuTWFza3MuQml0bWFwTWFzayhzY2VuZSwgdGhpcy50ZXh0KTtcblxuXHRcdHRoaXMudGV4dC5tYXNrID0gbWFzaztcblx0fTtcblxuXHRwdWJsaWMgYWRkVG9TY29yZSh2YWx1ZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5zY29yZSA9IHRoaXMuc2NvcmUgKyB2YWx1ZTtcblx0XHR0aGlzLnRleHQuc2V0VGV4dChgJHt0aGlzLnNjb3JlfWApO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9CYWNrZ3JvdW5kJztcbmltcG9ydCB7IEJvYXJkQ29saWRlcnMgfSBmcm9tICcuL0JvYXJkQ29saWRlcnMnO1xuaW1wb3J0IHsgQ2luZW1hdGljVmlkZW8gfSBmcm9tICcuL0NpbmVtYXRpY1ZpZGVvJztcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuL0dhbWVPYmplY3QnO1xuaW1wb3J0IHsgR2FtZU92ZXJPdmVybGF5IH0gZnJvbSAnLi9HYW1lT3Zlck92ZXJsYXknO1xuaW1wb3J0IHsgR2FtZU92ZXJWaWRlbyB9IGZyb20gJy4vR2FtZU92ZXJWaWRlbyc7XG5pbXBvcnQgeyBHYW1lV2luVmlkZW8gfSBmcm9tICcuL0dhbWVXaW5WaWRlbyc7XG5pbXBvcnQgeyBIVURCYWNrZ3JvdW5kIH0gZnJvbSAnLi9IVURCYWNrZ3JvdW5kJztcbmltcG9ydCB7IE1lZGlhT2JqZWN0IH0gZnJvbSAnLi9NZWRpYU9iamVjdCc7XG5pbXBvcnQgeyBNZWRpYU9iamVjdFdpdGhDb250cm9scyB9IGZyb20gJy4vTWVkaWFPYmplY3RXaXRoQ29udHJvbHMnO1xuaW1wb3J0IHsgTWVudUJhY2tncm91bmQgfSBmcm9tICcuL01lbnVCYWNrZ3JvdW5kJztcbmltcG9ydCB7IE1lbnVWaWRlb0xvb3AgfSBmcm9tICcuL01lbnVWaWRlb0xvb3AnO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHsgUGllY2VzIH0gZnJvbSAnLi9waWVjZXMvUGllY2VzJztcbmltcG9ydCB7IFNjb3JlIH0gZnJvbSAnLi9TY29yZSc7XG5pbXBvcnQgeyBGeCB9IGZyb20gJy4vc291bmRzL0Z4JztcblxuZXhwb3J0IGNvbnN0IEdSSURfU0laRSA9IDg0O1xuXG5jb25zdCBUT1BfTUFSR0lOID0gMTY4O1xuY29uc3QgTEVGVF9NQVJHSU4gPSAxNTU7XG5cbmV4cG9ydCBjb25zdCBncmlkVG9DYW52YXMgPSAoeyBncmlkWCwgZ3JpZFkgfTogeyBncmlkWDogbnVtYmVyOyBncmlkWTogbnVtYmVyIH0pID0+IHtcblx0Y29uc3QgeCA9IExFRlRfTUFSR0lOICsgZ3JpZFggKiBHUklEX1NJWkUgKyBHUklEX1NJWkUgLyAyO1xuXHRjb25zdCB5ID0gVE9QX01BUkdJTiArIGdyaWRZICogR1JJRF9TSVpFICsgR1JJRF9TSVpFIC8gMjtcblxuXHRyZXR1cm4ge1xuXHRcdHgsXG5cdFx0eVxuXHR9O1xufTtcblxuZXhwb3J0IHtcblx0R2FtZU9iamVjdCxcblx0TWVkaWFPYmplY3QsXG5cdE1lZGlhT2JqZWN0V2l0aENvbnRyb2xzLFxuXHRCYWNrZ3JvdW5kLFxuXHRCb2FyZENvbGlkZXJzLFxuXHRDaW5lbWF0aWNWaWRlbyxcblx0R2FtZU92ZXJPdmVybGF5LFxuXHRHYW1lT3ZlclZpZGVvLFxuXHRHYW1lV2luVmlkZW8sXG5cdEhVREJhY2tncm91bmQsXG5cdE1lbnVCYWNrZ3JvdW5kLFxuXHRNZW51VmlkZW9Mb29wLFxuXHRQbGF5ZXIsXG5cdFBpZWNlcyxcblx0RngsXG5cdFNjb3JlXG59O1xuIiwiLy8gaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBncmlkVG9DYW52YXMgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgR3JpZE1hbmFnZXIgZnJvbSAnLi4vcGllY2VzL0dyaWRNYW5hZ2VyJztcbmltcG9ydCB7IFdvcmxkU2NlbmVFdmVudHMgfSBmcm9tICdzY2VuZXMvV29ybGRTY2VuZSc7XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG5cdFRPUCxcblx0UklHSFQsXG5cdEJPVFRPTSxcblx0TEVGVFxufVxuXG5leHBvcnQgY29uc3QgUm90YXRpb25EZWcgPSAocm90YXRpb246IERpcmVjdGlvbik6IG51bWJlciA9PiB7XG5cdGNvbnN0IGFuZ2xlcyA9IFswLCA5MCwgMTgwLCAyNzBdO1xuXHRyZXR1cm4gYW5nbGVzW3JvdGF0aW9uICUgNF07XG59O1xuXG5leHBvcnQgZW51bSBQaWVjZVN0YXRlIHtcblx0RlJFRSxcblx0U0VULFxuXHRBQ1RJVkVcbn1cblxuZXhwb3J0IGVudW0gQW5pbWF0aW9ucyB7XG5cdElETEUgPSAnSURMRScsXG5cdEZJTExJTkcgPSAnRklMTElORycsXG5cdERPTkUgPSAnRE9ORSdcbn1cblxuZXhwb3J0IGNvbnN0IFNQUklURV9GUkFNRVMgPSAxMjtcbmV4cG9ydCBjb25zdCBGUkFNRV9SQVRFID0gMTA7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFBpZWNlIHtcblx0YWJzdHJhY3QgYWN0aXZlQm9yZGVyczogeyBpbjogRGlyZWN0aW9uOyBvdXQ6IERpcmVjdGlvbiB9IHwgbnVsbCA9IG51bGw7XG5cdGFic3RyYWN0IGFzc2V0VVJMOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBzcHJpdGVLZXk6IHN0cmluZztcblx0cHVibGljIHN0YXRlOiBQaWVjZVN0YXRlID0gUGllY2VTdGF0ZS5GUkVFO1xuXHRwcml2YXRlIHJvdGF0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uVE9QO1xuXHRwcml2YXRlIHBvc2l0aW9uOiB7IGdyaWRYOiBudW1iZXI7IGdyaWRZOiBudW1iZXIgfTtcblx0cHJpdmF0ZSBzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XG5cdHByaXZhdGUgZ2V0UGllY2VCeUlkOiBhbnk7XG5cdHByaXZhdGUgdHlwZTogYW55O1xuXHRwcml2YXRlIGNyZWF0ZU5ld1BpZWNlOiBhbnk7XG5cdHByaXZhdGUgd29ybGQ6IFBoYXNlci5TY2VuZTtcblxuXHRjb25zdHJ1Y3Rvcih7IGdyaWRYLCBncmlkWSwgcm90YXRpb24sIGlkLCBnZXRQaWVjZUJ5SWQsIHR5cGUsIGNyZWF0ZU5ld1BpZWNlIH06IGFueSkge1xuXHRcdHRoaXMuc3ByaXRlS2V5ID0gaWQ7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHsgZ3JpZFgsIGdyaWRZIH07XG5cdFx0dGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuXHRcdHRoaXMuZ2V0UGllY2VCeUlkID0gZ2V0UGllY2VCeUlkO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5jcmVhdGVOZXdQaWVjZSA9IGNyZWF0ZU5ld1BpZWNlO1xuXHR9XG5cblx0Ly8gcHVibGljIGxvYWQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuXHQvLyBzY2VuZS5sb2FkLnNwcml0ZXNoZWV0KHRoaXMuc3ByaXRlS2V5LCB0aGlzLmFzc2V0VVJMLCB7XG5cdC8vIFx0ZnJhbWVXaWR0aDogR1JJRF9TSVpFLFxuXHQvLyBcdGZyYW1lSGVpZ2h0OiBHUklEX1NJWkVcblx0Ly8gfSk7XG5cdC8vIH07XG5cblx0cHVibGljIGluaXRpYWxpemUgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuXHRcdGNvbnN0IHsgeCwgeSB9ID0gZ3JpZFRvQ2FudmFzKHRoaXMucG9zaXRpb24pO1xuXHRcdHRoaXMuc3ByaXRlID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCB0aGlzLnNwcml0ZUtleSk7XG5cdFx0dGhpcy5zcHJpdGUuYW5nbGUgPSBSb3RhdGlvbkRlZyh0aGlzLnJvdGF0aW9uKTtcblx0XHR0aGlzLnNwcml0ZS5zZXREZXB0aCgxMSk7XG5cdFx0dGhpcy53b3JsZCA9IHNjZW5lO1xuXG5cdFx0Ly8gYW5pbXNcblx0XHRzY2VuZS5hbmltcy5jcmVhdGUoe1xuXHRcdFx0a2V5OiBgJHt0aGlzLnNwcml0ZUtleX0tJHtBbmltYXRpb25zLklETEV9YCxcblx0XHRcdGZyYW1lczogW3sga2V5OiB0aGlzLmFzc2V0VVJMLnRvU3RyaW5nKCksIGZyYW1lOiAwIH1dXG5cdFx0fSk7XG5cblx0XHRzY2VuZS5hbmltcy5jcmVhdGUoe1xuXHRcdFx0a2V5OiBgJHt0aGlzLnNwcml0ZUtleX0tJHtBbmltYXRpb25zLkRPTkV9YCxcblx0XHRcdGZyYW1lczogc2NlbmUuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnModGhpcy5hc3NldFVSTC50b1N0cmluZygpLCB7XG5cdFx0XHRcdHN0YXJ0OiAxMSxcblx0XHRcdFx0ZW5kOiAyM1xuXHRcdFx0fSksXG5cdFx0XHRmcmFtZVJhdGU6IDIwLFxuXHRcdFx0cmVwZWF0OiAtMVxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgZmlsbGluZ0FuaSA9IHNjZW5lLmFuaW1zLmNyZWF0ZSh7XG5cdFx0XHRrZXk6IGAke3RoaXMuc3ByaXRlS2V5fS0ke0FuaW1hdGlvbnMuRklMTElOR31gLFxuXHRcdFx0ZnJhbWVzOiBzY2VuZS5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyh0aGlzLmFzc2V0VVJMLnRvU3RyaW5nKCksIHtcblx0XHRcdFx0c3RhcnQ6IDEsXG5cdFx0XHRcdGVuZDogMTFcblx0XHRcdH0pLFxuXHRcdFx0ZnJhbWVSYXRlOiAyLFxuXHRcdFx0cmVwZWF0OiAwXG5cdFx0fSk7XG5cblx0XHRmaWxsaW5nQW5pICYmIGZpbGxpbmdBbmkhLm9uKCdjb21wbGV0ZScsIHRoaXMuc2V0RG9uZSk7XG5cblx0XHR0aGlzLnNwcml0ZS5hbmltcy5wbGF5KGAke3RoaXMuc3ByaXRlS2V5fS0ke0FuaW1hdGlvbnMuSURMRX1gKTtcblx0fTtcblxuXHRwdWJsaWMgcm90YXRlKCkge1xuXHRcdHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uICsgMTtcblx0XHR0aGlzLnNwcml0ZSEuYW5nbGUgPSBSb3RhdGlvbkRlZyh0aGlzLnJvdGF0aW9uKTtcblx0fVxuXG5cdHB1YmxpYyBtb3ZlVG8oeyBncmlkWCwgZ3JpZFkgfTogeyBncmlkWDogbnVtYmVyOyBncmlkWTogbnVtYmVyIH0pIHtcblx0XHRjb25zdCB7IHgsIHkgfSA9IGdyaWRUb0NhbnZhcyh7IGdyaWRYLCBncmlkWSB9KTtcblx0XHR0aGlzLnNwcml0ZS54ID0geDtcblx0XHR0aGlzLnNwcml0ZS55ID0geTtcblx0fVxuXG5cdHB1YmxpYyBzZXREb25lID0gKCkgPT4ge1xuXHRcdHRoaXMuc3ByaXRlICYmIHRoaXMuc3ByaXRlLmFuaW1zLnBsYXkoYCR7dGhpcy5zcHJpdGVLZXl9LSR7QW5pbWF0aW9ucy5ET05FfWApO1xuXHRcdGNvbnN0IG5leHRQaWVjZSA9IEdyaWRNYW5hZ2VyLnBpZWNlcy5nZXRQaWVjZU9uKHtcblx0XHRcdGdyaWRYOiB0aGlzLnBvc2l0aW9uLmdyaWRYLFxuXHRcdFx0Z3JpZFk6IHRoaXMucG9zaXRpb24uZ3JpZFksXG5cdFx0XHRkaXJlY3Rpb246IHRoaXMuZ2V0QWN0aXZlQm9yZGVycygpIS5vdXRcblx0XHR9KTtcblxuXHRcdGlmICghbmV4dFBpZWNlKSB7XG5cdFx0XHR0aGlzLmhhbmRsZUdhbWVPdmVyKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChuZXh0UGllY2UgPT09ICd3aW4nKSB7XG5cdFx0XHRcdHRoaXMuaGFuZGxlR2FtZVdpbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5nZXRQaWVjZUJ5SWQobmV4dFBpZWNlKS5oYW5kbGVHb05leHQodGhpcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHB1YmxpYyBoYW5kbGVHb05leHQob2xkUGllY2U6IEFic3RyYWN0UGllY2UpIHtcblx0XHRjb25zdCBvbGRCb3JkZXJzID0gb2xkUGllY2UuZ2V0QWN0aXZlQm9yZGVycygpO1xuXHRcdGNvbnN0IG5ld0JvZGVycyA9IHRoaXMuZ2V0QWN0aXZlQm9yZGVycygpO1xuXHRcdGNvbnN0IG91dERpcmVjdGlvbiA9IChvbGRCb3JkZXJzIS5vdXQgKyAyKSAlIDQ7XG5cblx0XHRpZiAoIVtuZXdCb2RlcnMhLm91dCwgbmV3Qm9kZXJzIS5pbl0uaW5jbHVkZXMob3V0RGlyZWN0aW9uKSkge1xuXHRcdFx0dGhpcy5oYW5kbGVHYW1lT3ZlcigpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAobmV3Qm9kZXJzIS5pbiAhPT0gb3V0RGlyZWN0aW9uKSB7XG5cdFx0XHR0aGlzLnJvdGF0ZUZvckZsb3coKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnNldEFjdGl2ZSgpO1xuXHR9XG5cblx0cHVibGljIHJvdGF0ZUZvckZsb3coKSB7XG5cdFx0aWYgKHRoaXMudHlwZSA9PT0gJ2xpbmUnKSB7XG5cdFx0XHR0aGlzLnJvdGF0ZSgpO1xuXHRcdFx0dGhpcy5yb3RhdGUoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy50eXBlID09PSAnY3VydmUnKSB7XG5cdFx0XHR0aGlzLnNwcml0ZS5zY2FsZVkgPSAtMTtcblx0XHRcdHRoaXMucm90YXRlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRBY3RpdmUoKTtcblx0fVxuXG5cdHB1YmxpYyBoYW5kbGVHYW1lT3ZlcigpIHtcblx0XHRjb25zb2xlLmxvZygnR0FNRSBPT09PT09PIFYgICAgRSAgICAgIFIgICAgICAgICAgISAhICEgISAhICEgISAhICEgIScpO1xuXHRcdHRoaXMud29ybGQuZXZlbnRzLmVtaXQoV29ybGRTY2VuZUV2ZW50cy5nYW1lb3Zlcik7XG5cdH1cblxuXHRwdWJsaWMgaGFuZGxlR2FtZVdpbigpIHtcblx0XHRjb25zb2xlLmxvZygnQSBXSU5ORVIgSVMgWU9VICEgISAgICEgICAhICAgICEgICAhICAgICEgISAgISAhICEgJyk7XG5cdFx0dGhpcy53b3JsZC5ldmVudHMuZW1pdChXb3JsZFNjZW5lRXZlbnRzLmdhbWV3aW4pO1xuXHR9XG5cblx0cHVibGljIHBsYWNlKHBvc2l0aW9uOiBhbnkpIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy5zdGF0ZSA9IFBpZWNlU3RhdGUuU0VUO1xuXHRcdHRoaXMuc3ByaXRlLnNldERlcHRoKDkpO1xuXHRcdEdyaWRNYW5hZ2VyLnBpZWNlcy5hZGRUb0dyaWQoe1xuXHRcdFx0aWQ6IHRoaXMuc3ByaXRlS2V5LFxuXHRcdFx0Z3JpZFg6IHBvc2l0aW9uLmdyaWRYLFxuXHRcdFx0Z3JpZFk6IHBvc2l0aW9uLmdyaWRZXG5cdFx0fSk7XG5cdFx0dGhpcy5jcmVhdGVOZXdQaWVjZSgpO1xuXHR9XG5cblx0cHVibGljIHNldEFjdGl2ZSgpIHtcblx0XHR0aGlzLnN0YXRlID0gUGllY2VTdGF0ZS5BQ1RJVkU7XG5cdFx0dGhpcy5zcHJpdGUgJiYgdGhpcy5zcHJpdGUuYW5pbXMucGxheShgJHt0aGlzLnNwcml0ZUtleX0tJHtBbmltYXRpb25zLkZJTExJTkd9YCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0U3ByaXRlID0gKCkgPT4gdGhpcy5zcHJpdGU7XG5cblx0cHVibGljIGdldEFjdGl2ZUJvcmRlcnMgPSAoKTogeyBpbjogRGlyZWN0aW9uOyBvdXQ6IERpcmVjdGlvbiB9IHwgbnVsbCA9PlxuXHRcdHRoaXMuYWN0aXZlQm9yZGVyc1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0aW46ICh0aGlzLmFjdGl2ZUJvcmRlcnMuaW4gKyB0aGlzLnJvdGF0aW9uKSAlIDQsXG5cdFx0XHRcdFx0b3V0OiAodGhpcy5hY3RpdmVCb3JkZXJzLm91dCArIHRoaXMucm90YXRpb24pICUgNFxuXHRcdFx0ICB9XG5cdFx0XHQ6IG51bGw7XG5cblx0cHVibGljIGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zcHJpdGUuZGVzdHJveSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBpZWNlLCBEaXJlY3Rpb24gfSBmcm9tICcuL0Fic3RyYWN0UGllY2VzJztcbmltcG9ydCB7IGJvYXJkQXNzZXRzIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2JvYXJkJztcblxuZXhwb3J0IGNsYXNzIEN1cnZlQ2FibGUgZXh0ZW5kcyBBYnN0cmFjdFBpZWNlIHtcblx0YWN0aXZlQm9yZGVycyA9IHsgaW46IERpcmVjdGlvbi5CT1RUT00sIG91dDogRGlyZWN0aW9uLlJJR0hUIH07XG5cdGFzc2V0VVJMID0gYm9hcmRBc3NldHMuQ1VSVkU7XG59XG4iLCJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuLi9waWVjZXMvQWJzdHJhY3RQaWVjZXMnO1xuXG5jbGFzcyBHcmlkTWFuYWdlciB7XG5cdHByaXZhdGUgZ3JpZDogYW55ID0ge307XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdGFkZFRvR3JpZCh7IGdyaWRYLCBncmlkWSwgaWQgfTogYW55KSB7XG5cdFx0dGhpcy5ncmlkID0ge1xuXHRcdFx0Li4udGhpcy5ncmlkLFxuXHRcdFx0W2Ake2dyaWRYfS0ke2dyaWRZfWBdOiBpZFxuXHRcdH07XG5cdH1cblxuXHRnZXRJRCh7IGdyaWRYLCBncmlkWSB9OiBhbnkpIHtcblx0XHRyZXR1cm4gdGhpcy5ncmlkW2Ake2dyaWRYfS0ke2dyaWRZfWBdO1xuXHR9XG5cblx0Z2V0UGllY2VPbih7IGdyaWRYLCBncmlkWSwgZGlyZWN0aW9uIH06IGFueSkge1xuXHRcdGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5UT1ApIHJldHVybiB0aGlzLmdyaWRbYCR7Z3JpZFh9LSR7Z3JpZFkgLSAxfWBdO1xuXHRcdGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SSUdIVCkgcmV0dXJuIHRoaXMuZ3JpZFtgJHtncmlkWCArIDF9LSR7Z3JpZFl9YF07XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkJPVFRPTSkgcmV0dXJuIHRoaXMuZ3JpZFtgJHtncmlkWH0tJHtncmlkWSArIDF9YF07XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlQpIHJldHVybiB0aGlzLmdyaWRbYCR7Z3JpZFggLSAxfS0ke2dyaWRZfWBdO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0cGllY2VzOiBuZXcgR3JpZE1hbmFnZXIoKSxcblx0dm9pZHM6IG5ldyBHcmlkTWFuYWdlcigpXG59O1xuIiwiaW1wb3J0IHsgR2FtZU9iamVjdCwgR1JJRF9TSVpFIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgU3RyYWlnaHRDYWJsZSB9IGZyb20gJy4vU3RyYWlnaHRDYWJsZSc7XG5pbXBvcnQgeyBDdXJ2ZUNhYmxlIH0gZnJvbSAnLi9DdXJ2ZUNhYmxlJztcbmltcG9ydCB7IEFic3RyYWN0UGllY2UsIERpcmVjdGlvbiB9IGZyb20gJy4vQWJzdHJhY3RQaWVjZXMnO1xuaW1wb3J0IHsgYm9hcmRBc3NldHMgfSBmcm9tICcuLi8uLi9hc3NldHMvYm9hcmQnO1xuaW1wb3J0IEdyaWRNYW5hZ2VyIGZyb20gJy4uL3BpZWNlcy9HcmlkTWFuYWdlcic7XG5cbmV4cG9ydCBjbGFzcyBQaWVjZXMgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcblx0cHVibGljIGdyb3VwOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXA7XG5cdHB1YmxpYyBwaWVjZXM6IGFueSA9IHt9O1xuXHRwcml2YXRlIHNjZW5lOiBhbnk7XG5cdHB1YmxpYyBhY3RpdmVJRDogYW55ID0gbnVsbDtcblx0cHVibGljIHBpZWNlSW5kZXggPSAwO1xuXHRwdWJsaWMgdGltZW91dDogYW55ID0gbnVsbDtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lO1xuXG5cdFx0W2JvYXJkQXNzZXRzLkNVUlZFLCBib2FyZEFzc2V0cy5MSU5FXS5mb3JFYWNoKGFzc2V0ID0+IHtcblx0XHRcdHNjZW5lLmxvYWQuc3ByaXRlc2hlZXQoYXNzZXQudG9TdHJpbmcoKSwgYXNzZXQsIHtcblx0XHRcdFx0ZnJhbWVXaWR0aDogR1JJRF9TSVpFLFxuXHRcdFx0XHRmcmFtZUhlaWdodDogR1JJRF9TSVpFXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0dGhpcy5ncm91cCA9IHNjZW5lLnBoeXNpY3MuYWRkLmdyb3VwKCk7XG5cblx0XHRHcmlkTWFuYWdlci5waWVjZXMuYWRkVG9HcmlkKHsgZ3JpZFg6IDEsIGdyaWRZOiAtMSwgaWQ6ICd3aW4nIH0pO1xuXHRcdEdyaWRNYW5hZ2VyLnBpZWNlcy5hZGRUb0dyaWQoeyBncmlkWDogMiwgZ3JpZFk6IC0xLCBpZDogJ3dpbicgfSk7XG5cdFx0R3JpZE1hbmFnZXIucGllY2VzLmFkZFRvR3JpZCh7IGdyaWRYOiAzLCBncmlkWTogLTEsIGlkOiAnd2luJyB9KTtcblx0XHRHcmlkTWFuYWdlci5waWVjZXMuYWRkVG9HcmlkKHsgZ3JpZFg6IDQsIGdyaWRZOiAtMSwgaWQ6ICd3aW4nIH0pO1xuXHRcdEdyaWRNYW5hZ2VyLnBpZWNlcy5hZGRUb0dyaWQoeyBncmlkWDogNSwgZ3JpZFk6IC0xLCBpZDogJ3dpbicgfSk7XG5cdFx0R3JpZE1hbmFnZXIucGllY2VzLmFkZFRvR3JpZCh7IGdyaWRYOiAwLCBncmlkWTogMSwgaWQ6ICdwaWNrdXAta2V5JyB9KTtcblx0fTtcblxuXHRwdWJsaWMgYWRkVG9Hcm91cCA9IChzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUgfCBudWxsKSA9PiB7XG5cdFx0c3ByaXRlICYmIHRoaXMuZ3JvdXAuYWRkKHNwcml0ZSk7XG5cdH07XG5cblx0cHVibGljIGdldFBpZWNlQnlJZCA9IChpZDogc3RyaW5nKSA9PiB0aGlzLnBpZWNlc1tpZF07XG5cblx0cHVibGljIGdldEFjdGl2ZVBpZWNlID0gKCkgPT4gdGhpcy5waWVjZXNbdGhpcy5hY3RpdmVJRF07XG5cblx0cHVibGljIGNhbmNlbFRoZVRpbWVvdXQgPSAoKSA9PiBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuXHRwdWJsaWMgY3JlYXRlTmV3UGllY2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdHlwZSA9IFsnbGluZScsICdjdXJ2ZSddW3RoaXMucGllY2VJbmRleCAlIDJdO1xuXHRcdGNvbnN0IGlkID0gYCR7dHlwZX0tJHtuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpfWA7XG5cblx0XHR0aGlzLmNyZWF0ZVBpZWNlKHtcblx0XHRcdGlkLFxuXHRcdFx0Z3JpZFg6IDAsXG5cdFx0XHRncmlkWTogMSxcblx0XHRcdHR5cGUsXG5cdFx0XHRyb3RhdGlvbjogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCksXG5cdFx0XHRhZGQ6IGZhbHNlXG5cdFx0fSk7XG5cdFx0dGhpcy5hY3RpdmVJRCA9IGlkO1xuXG5cdFx0dGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLmdldFBpZWNlQnlJZChpZCkuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy5waWVjZUluZGV4Kys7XG5cdFx0XHR0aGlzLmNyZWF0ZU5ld1BpZWNlKCk7XG5cdFx0fSwgMzAwKTtcblx0fTtcblxuXHRwdWJsaWMgY3JlYXRlUGllY2UgPSAoeyBpZCwgdHlwZSwgZ3JpZFgsIGdyaWRZLCByb3RhdGlvbiA9IERpcmVjdGlvbi5UT1AsIGFkZCA9IHRydWUgfTogYW55KSA9PiB7XG5cdFx0bGV0IHBpZWNlOiBBYnN0cmFjdFBpZWNlIHwgbnVsbCA9IG51bGw7XG5cdFx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0XHRncmlkWCxcblx0XHRcdGdyaWRZLFxuXHRcdFx0cm90YXRpb24sXG5cdFx0XHRpZCxcblx0XHRcdHR5cGUsXG5cdFx0XHRjcmVhdGVOZXdQaWVjZTogdGhpcy5jcmVhdGVOZXdQaWVjZSxcblx0XHRcdGdldFBpZWNlQnlJZDogdGhpcy5nZXRQaWVjZUJ5SWRcblx0XHR9O1xuXG5cdFx0aWYgKHR5cGUgPT09ICdsaW5lJykge1xuXHRcdFx0cGllY2UgPSBuZXcgU3RyYWlnaHRDYWJsZShwcm9wcyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlID09PSAnY3VydmUnKSB7XG5cdFx0XHRwaWVjZSA9IG5ldyBDdXJ2ZUNhYmxlKHByb3BzKTtcblx0XHR9XG5cblx0XHRpZiAocGllY2UpIHtcblx0XHRcdHRoaXMucGllY2VzID0ge1xuXHRcdFx0XHQuLi50aGlzLnBpZWNlcyxcblx0XHRcdFx0W2lkXTogcGllY2Vcblx0XHRcdH07XG5cdFx0XHRhZGQgJiYgR3JpZE1hbmFnZXIucGllY2VzLmFkZFRvR3JpZCh7IGlkLCBncmlkWCwgZ3JpZFkgfSk7XG5cdFx0XHRwaWVjZS5pbml0aWFsaXplKHRoaXMuc2NlbmUpO1xuXHRcdFx0dGhpcy5hZGRUb0dyb3VwKHBpZWNlLmdldFNwcml0ZSgpKTtcblx0XHR9XG5cdH07XG59XG4iLCJpbXBvcnQgeyBBYnN0cmFjdFBpZWNlLCBEaXJlY3Rpb24gfSBmcm9tICcuL0Fic3RyYWN0UGllY2VzJztcbmltcG9ydCB7IGJvYXJkQXNzZXRzIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2JvYXJkJztcblxuZXhwb3J0IGNsYXNzIFN0cmFpZ2h0Q2FibGUgZXh0ZW5kcyBBYnN0cmFjdFBpZWNlIHtcblx0YWN0aXZlQm9yZGVycyA9IHsgaW46IERpcmVjdGlvbi5CT1RUT00sIG91dDogRGlyZWN0aW9uLlRPUCB9O1xuXHRhc3NldFVSTCA9IGJvYXJkQXNzZXRzLkxJTkU7XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IHNvdW5kQXNzZXRzIH0gZnJvbSAnYXNzZXRzL3NvdW5kcyc7XG5pbXBvcnQgeyBNZWRpYU9iamVjdCB9IGZyb20gJ2dhbWUtb2JqZWN0cyc7XG4vLyBpbXBvcnQgeyBnYW1lIH0gZnJvbSAnbWFpbic7XG5cbmV4cG9ydCBjbGFzcyBGeCBleHRlbmRzIE1lZGlhT2JqZWN0IHtcblx0cHVibGljIHN0YXRpYyBwaWNrdXBLZXkgPSBzb3VuZEFzc2V0cy5GWF9QSUNLVVAudG9TdHJpbmcoKTtcblx0cHVibGljIHN0YXRpYyBtb3ZlS2V5ID0gc291bmRBc3NldHMuRlhfTU9WRS50b1N0cmluZygpO1xuXHRwdWJsaWMgc3RhdGljIGZhbmZhcmVLZXkgPSBzb3VuZEFzc2V0cy5GWF9GQU5GQVJFLnRvU3RyaW5nKCk7XG5cdC8vIHB1YmxpYyBzdGF0ZTogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGlja3VwOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuXHRwcml2YXRlIG1vdmU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cdHByaXZhdGUgZmFuZmFyZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC5hdWRpbyhGeC5waWNrdXBLZXksIFtzb3VuZEFzc2V0cy5GWF9QSUNLVVBdKTtcblx0XHRzY2VuZS5sb2FkLmF1ZGlvKEZ4Lm1vdmVLZXksIFtzb3VuZEFzc2V0cy5GWF9NT1ZFXSk7XG5cdFx0c2NlbmUubG9hZC5hdWRpbyhGeC5mYW5mYXJlS2V5LCBbc291bmRBc3NldHMuRlhfRkFORkFSRV0pO1xuXHR9O1xuXG5cdHB1YmxpYyBpbml0aWFsaXplID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcblx0XHR0aGlzLnBpY2t1cCA9IHNjZW5lLnNvdW5kLmFkZChGeC5waWNrdXBLZXkpO1xuXHRcdHRoaXMubW92ZSA9IHNjZW5lLnNvdW5kLmFkZChGeC5tb3ZlS2V5KTtcblx0XHR0aGlzLmZhbmZhcmUgPSBzY2VuZS5zb3VuZC5hZGQoRnguZmFuZmFyZUtleSk7XG5cdH07XG5cblx0cHVibGljIHBsYXlNb3ZlID0gKCkgPT4gdGhpcy5tb3ZlLnBsYXkoKTtcblxuXHRwdWJsaWMgcGxheUZhbmZhcmUgPSAoKSA9PiB0aGlzLmZhbmZhcmUucGxheSgpO1xuXG5cdHB1YmxpYyBwbGF5UGlja3VvID0gKCkgPT4gdGhpcy5waWNrdXAucGxheSgpO1xufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBzb3VuZEFzc2V0cyB9IGZyb20gJ2Fzc2V0cy9zb3VuZHMnO1xuaW1wb3J0IHsgTWVkaWFPYmplY3RXaXRoQ29udHJvbHMgfSBmcm9tICdnYW1lLW9iamVjdHMnO1xuXG5leHBvcnQgY2xhc3MgTXVzaWMgZXh0ZW5kcyBNZWRpYU9iamVjdFdpdGhDb250cm9scyB7XG5cdHB1YmxpYyBzdGF0aWMgbGV2ZWxPbmVLZXkgPSBzb3VuZEFzc2V0cy5MRVZFTF9PTkVfTE9PUC50b1N0cmluZygpO1xuXHRwdWJsaWMgc3RhdGljIGxldmVsVHdvS2V5ID0gc291bmRBc3NldHMuTEVWRUxfVFdPX0xPT1AudG9TdHJpbmcoKTtcblx0cHVibGljIHN0YXRpYyBsZXZlbFRocmVlS2V5ID0gc291bmRBc3NldHMuTEVWRUxfVEhSRUVfTE9PUC50b1N0cmluZygpO1xuXHRwdWJsaWMgc3RhdGljIGxldmVsRm91cktleSA9IHNvdW5kQXNzZXRzLkxFVkVMX0ZPVVJfTE9PUC50b1N0cmluZygpO1xuXG5cdHByaXZhdGUgYXVkaW9PbmU6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cdHByaXZhdGUgYXVkaW9Ud286IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cdHByaXZhdGUgYXVkaW9UaHJlZTogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcblx0cHJpdmF0ZSBhdWRpb0ZvdXI6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cblx0cHJpdmF0ZSBsb29wQ291bnRlcjogbnVtYmVyID0gMDtcblxuXHRwdWJsaWMgbG9hZCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG5cdFx0c2NlbmUubG9hZC5hdWRpbyhNdXNpYy5sZXZlbE9uZUtleSwgW3NvdW5kQXNzZXRzLkxFVkVMX09ORV9MT09QXSk7XG5cdFx0c2NlbmUubG9hZC5hdWRpbyhNdXNpYy5sZXZlbFR3b0tleSwgW3NvdW5kQXNzZXRzLkxFVkVMX1RXT19MT09QXSk7XG5cdFx0c2NlbmUubG9hZC5hdWRpbyhNdXNpYy5sZXZlbFRocmVlS2V5LCBbc291bmRBc3NldHMuTEVWRUxfVEhSRUVfTE9PUF0pO1xuXHRcdHNjZW5lLmxvYWQuYXVkaW8oTXVzaWMubGV2ZWxGb3VyS2V5LCBbc291bmRBc3NldHMuTEVWRUxfRk9VUl9MT09QXSk7XG5cdH07XG5cblx0cHVibGljIGluaXRpYWxpemUgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuXHRcdHRoaXMuYXVkaW9PbmUgPSBzY2VuZS5zb3VuZC5hZGQoTXVzaWMubGV2ZWxPbmVLZXksIHsgbG9vcDogdHJ1ZSB9KTtcblx0XHR0aGlzLmF1ZGlvVHdvID0gc2NlbmUuc291bmQuYWRkKE11c2ljLmxldmVsVHdvS2V5LCB7IGxvb3A6IHRydWUgfSk7XG5cdFx0dGhpcy5hdWRpb1RocmVlID0gc2NlbmUuc291bmQuYWRkKE11c2ljLmxldmVsVGhyZWVLZXksIHsgbG9vcDogdHJ1ZSB9KTtcblx0XHR0aGlzLmF1ZGlvRm91ciA9IHNjZW5lLnNvdW5kLmFkZChNdXNpYy5sZXZlbEZvdXJLZXksIHsgbG9vcDogdHJ1ZSB9KTtcblxuXHRcdHRoaXMuYXVkaW9PbmUub24oJ2xvb3BlZCcsIHRoaXMuaGFuZGxlTG9vcCk7XG5cdFx0dGhpcy5hdWRpb1R3by5vbignbG9vcGVkJywgdGhpcy5oYW5kbGVMb29wKTtcblx0XHR0aGlzLmF1ZGlvVGhyZWUub24oJ2xvb3BlZCcsIHRoaXMuaGFuZGxlTG9vcCk7XG5cdFx0dGhpcy5hdWRpb0ZvdXIub24oJ2xvb3BlZCcsIHRoaXMuaGFuZGxlTG9vcCk7XG5cdH07XG5cblx0cHVibGljIGhhbmRsZUxvb3AgPSAoKSA9PiB7XG5cdFx0dGhpcy5sb29wQ291bnRlciArPSAxO1xuXG5cdFx0aWYgKHRoaXMubG9vcENvdW50ZXIgPT09IDIpIHtcblx0XHRcdHRoaXMuYXVkaW9PbmUuc3RvcCgpO1xuXHRcdFx0dGhpcy5hdWRpb1R3by5wbGF5KCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubG9vcENvdW50ZXIgPT09IDQpIHtcblx0XHRcdHRoaXMuYXVkaW9Ud28uc3RvcCgpO1xuXHRcdFx0dGhpcy5hdWRpb1RocmVlLnBsYXkoKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5sb29wQ291bnRlciA9PT0gNikge1xuXHRcdFx0dGhpcy5hdWRpb1RocmVlLnN0b3AoKTtcblx0XHRcdHRoaXMuYXVkaW9Gb3VyLnBsYXkoKTtcblx0XHR9XG5cdH07XG5cblx0cHVibGljIHBsYXkgPSAoKSA9PiB7XG5cdFx0aWYgKCF0aGlzLmF1ZGlvT25lLmlzUGxheWluZykge1xuXHRcdFx0dGhpcy5hdWRpb09uZS5wbGF5KCk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmF1ZGlvT25lLmlzUGF1c2VkKSB7XG5cdFx0XHR0aGlzLmF1ZGlvT25lLnJlc3VtZSgpO1xuXHRcdH1cblx0fTtcblxuXHRwdWJsaWMgc3RvcCA9ICgpID0+IHtcblx0XHR0aGlzLmF1ZGlvT25lLnN0b3AoKTtcblx0XHR0aGlzLmF1ZGlvVHdvLnN0b3AoKTtcblx0XHR0aGlzLmF1ZGlvVGhyZWUuc3RvcCgpO1xuXHRcdHRoaXMuYXVkaW9Gb3VyLnN0b3AoKTtcblx0fTtcblxuXHRwdWJsaWMgcGF1c2UgPSAoKSA9PiB7XG5cdFx0dGhpcy5hdWRpb09uZS5wYXVzZSgpO1xuXHRcdHRoaXMuYXVkaW9Ud28ucGF1c2UoKTtcblx0XHR0aGlzLmF1ZGlvVGhyZWUucGF1c2UoKTtcblx0XHR0aGlzLmF1ZGlvRm91ci5wYXVzZSgpO1xuXHR9O1xufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBtYWluQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShtYWluQ29uZmlnKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgV29ybGRTY2VuZSB9IGZyb20gJy4vV29ybGRTY2VuZSc7XG5pbXBvcnQgeyBDaW5lbWF0aWNWaWRlbyB9IGZyb20gJ2dhbWUtb2JqZWN0cyc7XG5cbmV4cG9ydCBjbGFzcyBDaW5lbWF0aWNTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cdHByaXZhdGUgY2luZW1hdGljOiBDaW5lbWF0aWNWaWRlbyA9IG5ldyBDaW5lbWF0aWNWaWRlbygpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcblx0fVxuXG5cdHByZWxvYWQoKSB7XG5cdFx0dGhpcy5jaW5lbWF0aWMubG9hZCh0aGlzKTtcblx0XHR0aGlzLmNpbmVtYXRpYy5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLmxvYWRXb3JsZC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLmNpbmVtYXRpYy5pbml0aWFsaXplKHRoaXMpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IEVOVEVSID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkVOVEVSKTtcblxuXHRcdGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24oRU5URVIpKSB7XG5cdFx0XHR0aGlzLmxvYWRXb3JsZCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgbG9hZFdvcmxkID0gKCkgPT4ge1xuXHRcdHRoaXMuc2NlbmUuc3RhcnQoV29ybGRTY2VuZS5uYW1lKTtcblx0fTtcbn1cblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG5cdGFjdGl2ZTogZmFsc2UsXG5cdHZpc2libGU6IGZhbHNlLFxuXHRrZXk6IENpbmVtYXRpY1NjZW5lLm5hbWVcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IFdvcmxkU2NlbmUgfSBmcm9tICcuL1dvcmxkU2NlbmUnO1xuaW1wb3J0IHsgTWVudVNjZW5lIH0gZnJvbSAnLi9NZW51U2NlbmUnO1xuaW1wb3J0IHsgR2FtZU92ZXJWaWRlbyB9IGZyb20gJ2dhbWUtb2JqZWN0cyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblx0cHJpdmF0ZSBjaW5lbWF0aWM6IEdhbWVPdmVyVmlkZW8gPSBuZXcgR2FtZU92ZXJWaWRlbygpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcblx0fVxuXG5cdHByZWxvYWQoKSB7XG5cdFx0dGhpcy5jaW5lbWF0aWMubG9hZCh0aGlzKTtcblx0XHQvLyB0aGlzLmNpbmVtYXRpYy5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLmxvYWRXb3JsZC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLmNpbmVtYXRpYy5pbml0aWFsaXplKHRoaXMpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IEVOVEVSID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkVOVEVSKTtcblx0XHRjb25zdCBSID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlIpO1xuXG5cdFx0aWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bihFTlRFUikpIHtcblx0XHRcdHRoaXMuc2NlbmUuc3RvcChNZW51U2NlbmUubmFtZSk7XG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KE1lbnVTY2VuZS5uYW1lKTtcblx0XHR9XG5cdFx0aWYgKFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bihSKSkge1xuXHRcdFx0dGhpcy5zY2VuZS5zdG9wKFdvcmxkU2NlbmUubmFtZSk7XG5cdFx0XHR0aGlzLnNjZW5lLnN0YXJ0KFdvcmxkU2NlbmUubmFtZSk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuXHRhY3RpdmU6IGZhbHNlLFxuXHR2aXNpYmxlOiBmYWxzZSxcblx0a2V5OiBHYW1lT3ZlclNjZW5lLm5hbWVcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IFdvcmxkU2NlbmUgfSBmcm9tICcuL1dvcmxkU2NlbmUnO1xuaW1wb3J0IHsgTWVudVNjZW5lIH0gZnJvbSAnLi9NZW51U2NlbmUnO1xuaW1wb3J0IHsgR2FtZVdpblZpZGVvIH0gZnJvbSAnZ2FtZS1vYmplY3RzJztcblxuZXhwb3J0IGNsYXNzIEdhbWVXaW5TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cdHByaXZhdGUgY2luZW1hdGljOiBHYW1lV2luVmlkZW8gPSBuZXcgR2FtZVdpblZpZGVvKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoc2NlbmVDb25maWcpO1xuXHR9XG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLmNpbmVtYXRpYy5sb2FkKHRoaXMpO1xuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRoaXMuY2luZW1hdGljLmluaXRpYWxpemUodGhpcyk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0Y29uc3QgRU5URVIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuRU5URVIpO1xuXHRcdGNvbnN0IFIgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuUik7XG5cblx0XHRpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKEVOVEVSKSkge1xuXHRcdFx0dGhpcy5zY2VuZS5zdG9wKE1lbnVTY2VuZS5uYW1lKTtcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoTWVudVNjZW5lLm5hbWUpO1xuXHRcdH1cblx0XHRpZiAoUGhhc2VyLklucHV0LktleWJvYXJkLkp1c3REb3duKFIpKSB7XG5cdFx0XHR0aGlzLnNjZW5lLnN0b3AoV29ybGRTY2VuZS5uYW1lKTtcblx0XHRcdHRoaXMuc2NlbmUuc3RhcnQoV29ybGRTY2VuZS5uYW1lKTtcblx0XHR9XG5cdH1cbn1cblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG5cdGFjdGl2ZTogZmFsc2UsXG5cdHZpc2libGU6IGZhbHNlLFxuXHRrZXk6IEdhbWVXaW5TY2VuZS5uYW1lXG59O1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBIVURCYWNrZ3JvdW5kLCBTY29yZSB9IGZyb20gJ2dhbWUtb2JqZWN0cyc7XG5cbmV4cG9ydCBlbnVtIEhVRFNjZW5lRXZlbnRzIHtcblx0dXBkYXRlU2NvcmVUZXh0ID0gJ3VwZGF0ZVNjb3JlVGV4dCdcbn1cblxuZXhwb3J0IGNsYXNzIEhVRFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblx0Ly8gcHJpdmF0ZSBzY29yZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuXHRwcml2YXRlIGJhY2tncm91bmQ6IEhVREJhY2tncm91bmQgPSBuZXcgSFVEQmFja2dyb3VuZCgpO1xuXHRwcml2YXRlIHNjb3JlOiBTY29yZSA9IG5ldyBTY29yZSgpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKHNjZW5lQ29uZmlnKTtcblx0fVxuXG5cdHByZWxvYWQoKSB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kLmxvYWQodGhpcyk7XG5cdFx0dGhpcy5zY29yZS5sb2FkKHRoaXMpO1xuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRoaXMuYmFja2dyb3VuZC5pbml0aWFsaXplKHRoaXMpO1xuXHRcdHRoaXMuc2NvcmUuaW5pdGlhbGl6ZSh0aGlzKTtcblx0XHQvLyB0aGlzLnNjb3JlVGV4dCA9IHRoaXMuYWRkLnRleHQoNzk0LCA3OCwgJzAnLCB7XG5cdFx0Ly8gXHRmb250OiAnMjRweCBSYWxld2F5Jyxcblx0XHQvLyBcdGZpbGw6ICcjZmZmZmZmJ1xuXHRcdC8vIH0pO1xuXG5cdFx0dGhpcy5ldmVudHMub24oSFVEU2NlbmVFdmVudHMudXBkYXRlU2NvcmVUZXh0LCB0aGlzLnVwZGF0ZVNjb3JlVGV4dCk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0Ly8gVE9ET1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZVNjb3JlVGV4dCA9IChuZXdWYWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0Ly8gdGhpcy5zY29yZVRleHQuc2V0VGV4dChgJHtuZXdWYWx1ZX1gKTtzXG5cdFx0dGhpcy5zY29yZS5hZGRUb1Njb3JlKG5ld1ZhbHVlKTtcblx0fTtcbn1cblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG5cdGFjdGl2ZTogZmFsc2UsXG5cdHZpc2libGU6IGZhbHNlLFxuXHRrZXk6IEhVRFNjZW5lLm5hbWVcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IFdvcmxkU2NlbmUgfSBmcm9tICcuL1dvcmxkU2NlbmUnO1xuaW1wb3J0IHsgTWVudVZpZGVvTG9vcCwgQ2luZW1hdGljVmlkZW8gfSBmcm9tICdnYW1lLW9iamVjdHMnO1xuXG5leHBvcnQgY2xhc3MgTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblx0cHJpdmF0ZSBiYWNrZ3JvdW5kOiBNZW51VmlkZW9Mb29wID0gbmV3IE1lbnVWaWRlb0xvb3AoKTtcblx0cHJpdmF0ZSBjaW5lbWF0aWM6IENpbmVtYXRpY1ZpZGVvID0gbmV3IENpbmVtYXRpY1ZpZGVvKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoc2NlbmVDb25maWcpO1xuXHR9XG5cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLmNpbmVtYXRpYy5sb2FkKHRoaXMpO1xuXHRcdHRoaXMuYmFja2dyb3VuZC5sb2FkKHRoaXMpO1xuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRoaXMuY2luZW1hdGljLmluaXRpYWxpemUodGhpcyk7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kLmluaXRpYWxpemUodGhpcyk7XG5cblx0XHR0aGlzLmNpbmVtYXRpYy5zZXRGaW5pc2hDYWxsYmFjayh0aGlzLmxvYWRXb3JsZC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmJhY2tncm91bmQuc2V0RmluaXNoQ2FsbGJhY2sodGhpcy5sb2FkQ2luZW1hdGljLmJpbmQodGhpcykpO1xuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGNvbnN0IEVOVEVSID0gdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkVOVEVSKTtcblxuXHRcdGlmIChQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuSnVzdERvd24oRU5URVIpKSB7XG5cdFx0XHR0aGlzLmJhY2tncm91bmQuc2V0SXNMb29waW5nKGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGxvYWRDaW5lbWF0aWMgPSAoKSA9PiB7XG5cdFx0dGhpcy5iYWNrZ3JvdW5kLmRlc3Ryb3koKTtcblx0XHR0aGlzLmNpbmVtYXRpYy5wbGF5KCk7XG5cdH07XG5cblx0cHJpdmF0ZSBsb2FkV29ybGQgPSAoKSA9PiB7XG5cdFx0dGhpcy5zY2VuZS5zdGFydChXb3JsZFNjZW5lLm5hbWUpO1xuXHR9O1xufVxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcblx0YWN0aXZlOiBmYWxzZSxcblx0dmlzaWJsZTogZmFsc2UsXG5cdGtleTogTWVudVNjZW5lLm5hbWVcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7IEhVRFNjZW5lLCBIVURTY2VuZUV2ZW50cyB9IGZyb20gJy4vSFVEU2NlbmUnO1xuaW1wb3J0IHsgR2FtZU92ZXJTY2VuZSB9IGZyb20gJ3NjZW5lcy9HYW1lT3ZlclNjZW5lJztcbmltcG9ydCB7IEdhbWVXaW5TY2VuZSB9IGZyb20gJ3NjZW5lcy9HYW1lV2luU2NlbmUnO1xuaW1wb3J0IHsgQmFja2dyb3VuZCwgR2FtZU92ZXJPdmVybGF5LCBQbGF5ZXIsIEJvYXJkQ29saWRlcnMsIFBpZWNlcywgRnggfSBmcm9tICdnYW1lLW9iamVjdHMnO1xuaW1wb3J0IHsgTXVzaWMgfSBmcm9tICdnYW1lLW9iamVjdHMvc291bmRzL011c2ljJztcblxuZXhwb3J0IGVudW0gV29ybGRTY2VuZUV2ZW50cyB7XG5cdGdhbWVvdmVyID0gJ2dhbWVvdmVyJyxcblx0Z2FtZXdpbiA9ICdnYW1ld2luJyxcblx0YWRkc2NvcmUgPSAnYWRkc2NvcmUnXG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblx0cHJpdmF0ZSBodWQ6IFBoYXNlci5TY2VuZTtcblx0cHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIGJhY2tncm91bmQ6IEJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCgpO1xuXHRwcml2YXRlIGJvYXJkQ29saWRlcnM6IEJvYXJkQ29saWRlcnMgPSBuZXcgQm9hcmRDb2xpZGVycygpO1xuXHRwcml2YXRlIHBsYXllcjogUGxheWVyID0gbmV3IFBsYXllcigpO1xuXHRwcml2YXRlIG11c2ljOiBNdXNpYyA9IG5ldyBNdXNpYygpO1xuXHRwcml2YXRlIHBpZWNlczogUGllY2VzID0gbmV3IFBpZWNlcygpO1xuXHRwcml2YXRlIGdhbWVvdmVyOiBHYW1lT3Zlck92ZXJsYXkgPSBuZXcgR2FtZU92ZXJPdmVybGF5KCk7XG5cdHByaXZhdGUgZng6IEZ4O1xuXHRwcml2YXRlIHdvcmxkR3JvdXA6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TdGF0aWNHcm91cDtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihzY2VuZUNvbmZpZyk7XG5cblx0XHR0aGlzLmZ4ID0gbmV3IEZ4KCk7XG5cdH1cblx0cHJlbG9hZCgpIHtcblx0XHR0aGlzLmJhY2tncm91bmQubG9hZCh0aGlzKTtcblx0XHR0aGlzLnBsYXllci5sb2FkKHRoaXMpO1xuXHRcdHRoaXMuYm9hcmRDb2xpZGVycy5sb2FkKHRoaXMpO1xuXHRcdHRoaXMucGllY2VzLmxvYWQodGhpcyk7XG5cdFx0dGhpcy5meC5sb2FkKHRoaXMpO1xuXHRcdHRoaXMubXVzaWMubG9hZCh0aGlzKTtcblx0XHR0aGlzLmdhbWVvdmVyLmxvYWQodGhpcyk7XG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhpcy5odWQgPSB0aGlzLnNjZW5lLmdldChIVURTY2VuZS5uYW1lKTtcblx0XHR0aGlzLnNjZW5lLmxhdW5jaChIVURTY2VuZS5uYW1lKTtcblx0XHR0aGlzLmJhY2tncm91bmQuaW5pdGlhbGl6ZSh0aGlzKTtcblx0XHR0aGlzLmJvYXJkQ29saWRlcnMuaW5pdGlhbGl6ZSh0aGlzKTtcblx0XHR0aGlzLnBpZWNlcy5pbml0aWFsaXplKHRoaXMpO1xuXHRcdHRoaXMucGxheWVyLmluaXRpYWxpemUodGhpcywge1xuXHRcdFx0cGllY2VzOiB0aGlzLnBpZWNlcyxcblx0XHRcdHBsYXlNb3ZlU291bmQ6IHRoaXMuZngucGxheU1vdmUsXG5cdFx0XHRwbGF5UGlja3VwOiB0aGlzLmZ4LnBsYXlQaWNrdW9cblx0XHR9KTtcblx0XHR0aGlzLmZ4LmluaXRpYWxpemUodGhpcyk7XG5cdFx0dGhpcy5tdXNpYy5pbml0aWFsaXplKHRoaXMpO1xuXG5cdFx0dGhpcy53b3JsZEdyb3VwID0gdGhpcy5waHlzaWNzLmFkZC5zdGF0aWNHcm91cCgpO1xuXG5cdFx0dGhpcy5idWlsZEJvYXJkKCk7XG5cblx0XHR0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuYm9hcmRDb2xpZGVycy5ncm91cCwgdGhpcy53b3JsZEdyb3VwKTtcblxuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIuc3ByaXRlLCB0aGlzLmJvYXJkQ29saWRlcnMuZ3JvdXApO1xuXHRcdHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIodGhpcy5wbGF5ZXIuc3ByaXRlLCB0aGlzLndvcmxkR3JvdXApO1xuXG5cdFx0Ly9TZXQgRXZlbnRzXG5cdFx0Ly8gdGhpcy5hZGQucmVjdGFuZ2xlKDgwMCwgNjAwLCA0MCwgNDAsIDB4MDBmZmZmKTtcblx0XHR0aGlzLmdhbWVvdmVyLnNldEZpbmlzaENhbGxiYWNrKHRoaXMuc3dpdGNoR2FtZU92ZXIuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5ldmVudHMub24oV29ybGRTY2VuZUV2ZW50cy5hZGRzY29yZSwgdGhpcy5hZGRTY29yZS5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmV2ZW50cy5vbihXb3JsZFNjZW5lRXZlbnRzLmdhbWVvdmVyLCB0aGlzLmxhdW5jaEdhbWVPdmVyLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZXZlbnRzLm9uKFdvcmxkU2NlbmVFdmVudHMuZ2FtZXdpbiwgdGhpcy5sYXVuY2hHYW1lV2luLmJpbmQodGhpcykpO1xuXG5cdFx0dGhpcy5tdXNpYy5wbGF5KCk7XG5cblx0XHR0aGlzLmluaXRHYW1lKCk7XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5wbGF5ZXIudXBkYXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFkZFNjb3JlID0gKCkgPT4ge1xuXHRcdHRoaXMuc2NvcmUgKz0gMTAwO1xuXHRcdHRoaXMuaHVkLmV2ZW50cy5lbWl0KEhVRFNjZW5lRXZlbnRzLnVwZGF0ZVNjb3JlVGV4dCwgdGhpcy5zY29yZSk7XG5cdH07XG5cblx0cHJpdmF0ZSBidWlsZEJvYXJkID0gKCkgPT4ge1xuXHRcdFtcblx0XHRcdHsgZ3JpZFg6IDksIGdyaWRZOiAwIH0sXG5cdFx0XHR7IGdyaWRYOiAxMCwgZ3JpZFk6IDAgfSxcblx0XHRcdHsgZ3JpZFg6IDEwLCBncmlkWTogNSB9LFxuXHRcdFx0eyBncmlkWDogMTAsIGdyaWRZOiA2IH0sXG5cdFx0XHR7IGdyaWRYOiAxMSwgZ3JpZFk6IDUgfSxcblx0XHRcdHsgZ3JpZFg6IDIsIGdyaWRZOiA1IH0sXG5cdFx0XHR7IGdyaWRYOiAzLCBncmlkWTogNSB9LFxuXHRcdFx0eyBncmlkWDogMywgZ3JpZFk6IDYgfSxcblx0XHRcdHsgZ3JpZFg6IDMsIGdyaWRZOiA3IH0sXG5cdFx0XHR7IGdyaWRYOiAwLCBncmlkWTogMCB9LFxuXHRcdFx0eyBncmlkWDogMCwgZ3JpZFk6IC0xIH0sXG5cdFx0XHR7IGdyaWRYOiAxLCBncmlkWTogLTEgfSxcblx0XHRcdHsgZ3JpZFg6IDIsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMywgZ3JpZFk6IC0xIH0sXG5cdFx0XHR7IGdyaWRYOiA0LCBncmlkWTogLTEgfSxcblx0XHRcdHsgZ3JpZFg6IDUsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogNiwgZ3JpZFk6IC0xIH0sXG5cdFx0XHR7IGdyaWRYOiA3LCBncmlkWTogLTEgfSxcblx0XHRcdHsgZ3JpZFg6IDgsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTEsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTIsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTMsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTQsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTUsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTYsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTcsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTgsIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTksIGdyaWRZOiAtMSB9LFxuXHRcdFx0eyBncmlkWDogMTksIGdyaWRZOiAwIH0sXG5cdFx0XHR7IGdyaWRYOiAxOSwgZ3JpZFk6IDEgfSxcblx0XHRcdHsgZ3JpZFg6IDE5LCBncmlkWTogMiB9LFxuXHRcdFx0eyBncmlkWDogMTksIGdyaWRZOiAzIH0sXG5cdFx0XHR7IGdyaWRYOiAxOSwgZ3JpZFk6IDQgfSxcblx0XHRcdHsgZ3JpZFg6IDE5LCBncmlkWTogNSB9LFxuXHRcdFx0eyBncmlkWDogMTksIGdyaWRZOiA2IH0sXG5cdFx0XHR7IGdyaWRYOiAxOSwgZ3JpZFk6IDcgfSxcblx0XHRcdHsgZ3JpZFg6IDE5LCBncmlkWTogOCB9LFxuXHRcdFx0eyBncmlkWDogMTksIGdyaWRZOiA5IH0sXG5cdFx0XHR7IGdyaWRYOiAxOCwgZ3JpZFk6IDkgfSxcblx0XHRcdHsgZ3JpZFg6IDE3LCBncmlkWTogOCB9LFxuXHRcdFx0eyBncmlkWDogMTYsIGdyaWRZOiA4IH0sXG5cdFx0XHR7IGdyaWRYOiAxNSwgZ3JpZFk6IDggfSxcblx0XHRcdHsgZ3JpZFg6IDE0LCBncmlkWTogOCB9LFxuXHRcdFx0eyBncmlkWDogMTMsIGdyaWRZOiA4IH0sXG5cdFx0XHR7IGdyaWRYOiAxMiwgZ3JpZFk6IDkgfSxcblx0XHRcdHsgZ3JpZFg6IDExLCBncmlkWTogOSB9LFxuXHRcdFx0eyBncmlkWDogMTAsIGdyaWRZOiAxMCB9LFxuXHRcdFx0eyBncmlkWDogOSwgZ3JpZFk6IDEwIH0sXG5cdFx0XHR7IGdyaWRYOiA4LCBncmlkWTogMTAgfSxcblx0XHRcdHsgZ3JpZFg6IDcsIGdyaWRZOiAxMCB9LFxuXHRcdFx0eyBncmlkWDogNiwgZ3JpZFk6IDEwIH0sXG5cdFx0XHR7IGdyaWRYOiA1LCBncmlkWTogMTAgfSxcblx0XHRcdHsgZ3JpZFg6IDQsIGdyaWRZOiAxMCB9LFxuXHRcdFx0eyBncmlkWDogMywgZ3JpZFk6IDEwIH0sXG5cdFx0XHR7IGdyaWRYOiAyLCBncmlkWTogMTAgfSxcblx0XHRcdHsgZ3JpZFg6IDEsIGdyaWRZOiAxMCB9LFxuXHRcdFx0eyBncmlkWDogMCwgZ3JpZFk6IDEwIH0sXG5cdFx0XHR7IGdyaWRYOiAtMSwgZ3JpZFk6IDEwIH0sXG5cdFx0XHR7IGdyaWRYOiAtMSwgZ3JpZFk6IDkgfSxcblx0XHRcdHsgZ3JpZFg6IC0xLCBncmlkWTogOCB9LFxuXHRcdFx0eyBncmlkWDogLTEsIGdyaWRZOiA3IH0sXG5cdFx0XHR7IGdyaWRYOiAtMSwgZ3JpZFk6IDYgfSxcblx0XHRcdHsgZ3JpZFg6IC0xLCBncmlkWTogNSB9LFxuXHRcdFx0eyBncmlkWDogLTEsIGdyaWRZOiA0IH0sXG5cdFx0XHR7IGdyaWRYOiAtMSwgZ3JpZFk6IDMgfSxcblx0XHRcdHsgZ3JpZFg6IC0xLCBncmlkWTogMiB9LFxuXHRcdFx0eyBncmlkWDogLTEsIGdyaWRZOiAxIH0sXG5cdFx0XHR7IGdyaWRYOiAwLCBncmlkWTogMiB9XG5cdFx0XS5mb3JFYWNoKHRoaXMuYm9hcmRDb2xpZGVycy5jcmVhdGVWb2lkKTtcblxuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdsaW5lLTAnLFxuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdGdyaWRYOiAxNSxcblx0XHRcdFx0Z3JpZFk6IDdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnbGluZS0xJyxcblx0XHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0XHRncmlkWDogMTgsXG5cdFx0XHRcdGdyaWRZOiA1XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2xpbmUtMicsXG5cdFx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdFx0Z3JpZFg6IDE4LFxuXHRcdFx0XHRncmlkWTogNFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdsaW5lLTMnLFxuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdGdyaWRYOiAxOCxcblx0XHRcdFx0Z3JpZFk6IDNcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnbGluZS00Jyxcblx0XHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0XHRncmlkWDogMTgsXG5cdFx0XHRcdGdyaWRZOiAyXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2xpbmUtNScsXG5cdFx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdFx0Z3JpZFg6IDE4LFxuXHRcdFx0XHRncmlkWTogMVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdsaW5lLTYnLFxuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdGdyaWRYOiAwLFxuXHRcdFx0XHRncmlkWTogOFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdsaW5lLTcnLFxuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdGdyaWRYOiAwLFxuXHRcdFx0XHRncmlkWTogN1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdsaW5lLTgnLFxuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdGdyaWRYOiAxLFxuXHRcdFx0XHRncmlkWTogN1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdsaW5lLTknLFxuXHRcdFx0XHR0eXBlOiAnbGluZScsXG5cdFx0XHRcdGdyaWRYOiA3LFxuXHRcdFx0XHRncmlkWTogOFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdsaW5lLTEwJyxcblx0XHRcdFx0dHlwZTogJ2xpbmUnLFxuXHRcdFx0XHRncmlkWDogNyxcblx0XHRcdFx0Z3JpZFk6IDZcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnbGluZS0xMScsXG5cdFx0XHRcdHR5cGU6ICdsaW5lJyxcblx0XHRcdFx0Z3JpZFg6IDcsXG5cdFx0XHRcdGdyaWRZOiA3XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2N1cnZlLTAnLFxuXHRcdFx0XHR0eXBlOiAnY3VydmUnLFxuXHRcdFx0XHRncmlkWDogMSxcblx0XHRcdFx0Z3JpZFk6IDgsXG5cdFx0XHRcdHJvdGF0aW9uOiAzXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2N1cnZlLTEnLFxuXHRcdFx0XHR0eXBlOiAnY3VydmUnLFxuXHRcdFx0XHRncmlkWDogNSxcblx0XHRcdFx0Z3JpZFk6IDgsXG5cdFx0XHRcdHJvdGF0aW9uOiAxXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2N1cnZlLTInLFxuXHRcdFx0XHR0eXBlOiAnY3VydmUnLFxuXHRcdFx0XHRncmlkWDogNyxcblx0XHRcdFx0Z3JpZFk6IDIsXG5cdFx0XHRcdHJvdGF0aW9uOiAzXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2N1cnZlLTMnLFxuXHRcdFx0XHR0eXBlOiAnY3VydmUnLFxuXHRcdFx0XHRncmlkWDogNyxcblx0XHRcdFx0Z3JpZFk6IDMsXG5cdFx0XHRcdHJvdGF0aW9uOiAxXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2N1cnZlLTQnLFxuXHRcdFx0XHR0eXBlOiAnY3VydmUnLFxuXHRcdFx0XHRncmlkWDogMTMsXG5cdFx0XHRcdGdyaWRZOiAwLFxuXHRcdFx0XHRyb3RhdGlvbjogMVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdjdXJ2ZS01Jyxcblx0XHRcdFx0dHlwZTogJ2N1cnZlJyxcblx0XHRcdFx0Z3JpZFg6IDE0LFxuXHRcdFx0XHRncmlkWTogMCxcblx0XHRcdFx0cm90YXRpb246IDBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnY3VydmUtNicsXG5cdFx0XHRcdHR5cGU6ICdjdXJ2ZScsXG5cdFx0XHRcdGdyaWRYOiAxMixcblx0XHRcdFx0Z3JpZFk6IDQsXG5cdFx0XHRcdHJvdGF0aW9uOiAyXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2N1cnZlLTcnLFxuXHRcdFx0XHR0eXBlOiAnY3VydmUnLFxuXHRcdFx0XHRncmlkWDogMTEsXG5cdFx0XHRcdGdyaWRZOiA2LFxuXHRcdFx0XHRyb3RhdGlvbjogMFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdjdXJ2ZS04Jyxcblx0XHRcdFx0dHlwZTogJ2N1cnZlJyxcblx0XHRcdFx0Z3JpZFg6IDE3LFxuXHRcdFx0XHRncmlkWTogNSxcblx0XHRcdFx0cm90YXRpb246IDJcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnY3VydmUtOScsXG5cdFx0XHRcdHR5cGU6ICdjdXJ2ZScsXG5cdFx0XHRcdGdyaWRYOiAxNyxcblx0XHRcdFx0Z3JpZFk6IDQsXG5cdFx0XHRcdHJvdGF0aW9uOiAxXG5cdFx0XHR9XG5cdFx0XS5mb3JFYWNoKHRoaXMucGllY2VzLmNyZWF0ZVBpZWNlKTtcblx0fTtcblxuXHRwcml2YXRlIGluaXRHYW1lKCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5waWVjZXMucGllY2VzWydsaW5lLTAnXS5zZXRBY3RpdmUoKTtcblx0XHR9LCAxMCAqIDEwMDApO1xuXHRcdHRoaXMucGllY2VzLmNyZWF0ZU5ld1BpZWNlKCk7XG5cdH1cblxuXHRwcml2YXRlIGxhdW5jaEdhbWVPdmVyKCkge1xuXHRcdHRoaXMuZ2FtZW92ZXIuaW5pdGlhbGl6ZSh0aGlzKTtcblx0XHR0aGlzLmdhbWVvdmVyLnN0YXJ0KCk7XG5cdH1cblxuXHRwcml2YXRlIHN3aXRjaEdhbWVPdmVyKCkge1xuXHRcdHRoaXMubXVzaWMuc3RvcCgpO1xuXHRcdHRoaXMuc2NlbmUuc3dpdGNoKEdhbWVPdmVyU2NlbmUubmFtZSk7XG5cdH1cblxuXHRwcml2YXRlIHN3aXRjaEdhbWVXaW4oKSB7XG5cdFx0dGhpcy5tdXNpYy5zdG9wKCk7XG5cdFx0dGhpcy5zY2VuZS5zd2l0Y2goR2FtZVdpblNjZW5lLm5hbWUpO1xuXHR9XG5cblx0cHJpdmF0ZSBsYXVuY2hHYW1lV2luKCkge1xuXHRcdC8vIHRoaXMuZ2FtZW92ZXIuaW5pdGlhbGl6ZSh0aGlzKTtcblx0XHR0aGlzLnN3aXRjaEdhbWVXaW4oKTtcblx0fVxufVxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcblx0YWN0aXZlOiBmYWxzZSxcblx0dmlzaWJsZTogZmFsc2UsXG5cdGtleTogV29ybGRTY2VuZS5uYW1lXG59O1xuIiwiaW1wb3J0IHsgTWVudVNjZW5lIH0gZnJvbSAnLi9NZW51U2NlbmUnO1xuaW1wb3J0IHsgSFVEU2NlbmUgfSBmcm9tICcuL0hVRFNjZW5lJztcbmltcG9ydCB7IFdvcmxkU2NlbmUgfSBmcm9tICcuL1dvcmxkU2NlbmUnO1xuaW1wb3J0IHsgQ2luZW1hdGljU2NlbmUgfSBmcm9tICcuL0NpbmVtYXRpY1NjZW5lJztcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tICcuL0dhbWVPdmVyU2NlbmUnO1xuaW1wb3J0IHsgR2FtZVdpblNjZW5lIH0gZnJvbSAnLi9HYW1lV2luU2NlbmUnO1xuXG5leHBvcnQgY29uc3QgZ2FtZVNjZW5lcyA9IFtNZW51U2NlbmUsIENpbmVtYXRpY1NjZW5lLCBXb3JsZFNjZW5lLCBIVURTY2VuZSwgR2FtZU92ZXJTY2VuZSwgR2FtZVdpblNjZW5lXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=