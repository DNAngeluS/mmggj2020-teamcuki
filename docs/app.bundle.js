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
    BLANK: 'assets/board/blank.png',
    CAPACITOR: 'assets/board/capacitor.png',
    CAPACITOR_ACTIVE: 'assets/board/capacitor_active.png',
    CURVE: 'assets/board/curve.png',
    DIVIDER: 'assets/board/divider.png',
    DIVIDER_ACTIVE: 'assets/board/divider-active.png',
    LINE: 'assets/board/line.png',
    RESISTOR: 'assets/board/resistor.png',
    RESISTOR_ACTIVE: 'assets/board/blank.png',
    USER: 'assets/board/user.png',
    VOID: 'assets/board/void.png',
    BG: 'assets/board/bg1.png',
    CREDITS: 'assets/board/credits-and-keys.png'
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
    BODY: 'assets/player/spark.png',
    PLAYER: 'assets/player/player.png',
    STANDING: 'assets/player/standing.png',
    DROP: 'assets/player/drop.png',
    TAKE: 'assets/player/take.png',
    WITH_OBJECT: 'assets/player/with-object.png'
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
    LEVEL_ONE_LOOP: 'assets/sounds/music/level1loop.wav',
    LEVEL_TWO_LOOP: 'assets/sounds/music/level2loop.wav',
    LEVEL_THREE_LOOP: 'assets/sounds/music/level3loop.wav',
    LEVEL_FOUR_LOOP: 'assets/sounds/music/level4loop.wav',
    FX_PICKUP: 'assets/sounds/fx/pick-up.wav',
    FX_MOVE: 'assets/sounds/fx/move.wav',
    FX_FANFARE: 'assets/sounds/fx/fanfare.wav'
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
    SCREEN_OVERLAY: 'assets/ui/screen_overlay.png',
    ENDSCREEN_OVERLAY: 'assets/ui/endScreen_GameOver.png',
    SCORE_BACKGROUND: 'assets/ui/score.png',
    TIME_BACKGROUND: 'asets/ui/time.png',
    MENU_BACKGROUND: 'assets/ui/menuscreen_loop.png'
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
    ENDSCREEN_CINEMATIC: 'assets/videos/endScreen_GameOver.mp4',
    WINSCREEN_CINEMATIC: 'assets/videos/endScreen_Win.mp4',
    MAIN_CINEMATIC: 'assets/videos/Cinematica.mp4',
    MENU_LOOP: 'assets/videos/menuScreen_Loop.mp4'
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
/* harmony import */ var _GameOverScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameOverScene */ "./src/scenes/GameOverScene.ts");
/* harmony import */ var _GameWinScene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameWinScene */ "./src/scenes/GameWinScene.ts");
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
        this.scene.switch(_GameOverScene__WEBPACK_IMPORTED_MODULE_3__["GameOverScene"].name);
    };
    WorldScene.prototype.switchGameWin = function () {
        this.music.stop();
        this.scene.switch(_GameWinScene__WEBPACK_IMPORTED_MODULE_4__["GameWinScene"].name);
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