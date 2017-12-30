webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n    margin:  0;\n    margin: 15px 0;\n    color: white;\n    font-weight: bold;\n}\n\n.navbar {\n    background-color: #337ab7;\n}\n\nbutton {\n    margin-top: 12px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\nspan.user-name {\n    color: yellow;\n    font-weight: bold;\n    text-transform: capitalize;\n    margin-top: 8px;\n    font-size: 25px;\n}\n\nh3 {\n    text-align: center;\n    margin: 0 0 10px 0;\n    font-weight: bold;\n}\n\np#text, p#text-sample, #result {\n    border: solid thin black;\n    text-align: justify;\n    height: 400px;\n    max-height: 400px;\n    word-wrap: break-word;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px;\n    line-height: 25px;\n    font-size: 20px;\n    margin-bottom: 30px;\n}\n\n#result {\n    height: 300px;\n    max-height: 300px;    \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <nav class=\"navbar navbar-default col-lg-12\">\n            <div class=\"navbar-header col-lg-2\">\n                <h2>Speech Recogniser</h2>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" id=\"btn-test\" [class]=\"isStopped ? 'btn btn-success col-lg-12' : 'btn btn-danger col-lg-12'\" (click)=\"timer(isStopped);\">\n                    {{isStopped ? 'Start Test' : 'End Test'}}\n                </button>\n            </div>\n            <div class=\"col-lg-2\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name\">Time - {{time || '00 : 00'}}</span>\n            </div>\n            <div class=\"col-lg-6\">\n                <span *ngIf=\"user\" class=\"navbar-brand user-name pull-right text-right\">Hello {{user?.displayName}}!</span>\n            </div>\n            <div class=\"col-lg-1\">\n                <button *ngIf=\"user\" (click)=\"logout();\" class=\"btn btn-danger pull-right col-lg-12\">Logout</button>\n            </div>\n            <div [class]=\"user ? 'col-lg-1' : 'col-lg-10'\">\n                <button *ngIf=\"!user\" (click)=\"login();\" class=\"btn btn-success pull-right\">Login</button>\n            </div>\n        </nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <h3>Input</h3>\n        </div>\n        <div class=\"col-lg-6\">\n            <h3>Output</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <p id=\"text-sample\">\n                The Universe is everything we can touch, feel, sense, measure or detect. It includes living things, planets, stars, galaxies,\n                dust clouds, light, and even time. Before the birth of the Universe, time, space and matter did not exist.\n                The Universe contains billions of galaxies, each containing millions or billions of stars. The space between\n                the stars and galaxies is largely empty. However, even places far from stars and planets contain scattered\n                particles of dust or a few hydrogen atoms per cubic centimeter. Space is also filled with radiation (e.g.\n                light and heat), magnetic fields and high energy particles (e.g. cosmic rays). The Universe is incredibly\n                huge. It would take a modern jet fighter more than a million years to reach the nearest star to the Sun.\n                Travelling at the speed of light (300,000 km per second), it would take 100,000 years to cross our Milky\n                Way galaxy alone. No one knows the exact size of the Universe, because we cannot see the edge – if there\n                is one. All we do know is that the visible Universe is at least 93 billion light years across. (A light year\n                is the distance light travels in one year – about 9 trillion km.)\n            </p>\n        </div>\n        <div id=\"text-generated\" class=\"col-lg-6\">\n            <p id=\"text\">recognised speech...</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h3>Difference</h3>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div id=\"result\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_diff__ = __webpack_require__("../../../../text-diff/diff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_diff___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_text_diff__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speech_recognition__ = __webpack_require__("../../../../../src/app/speech-recognition.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(_AngularFireAuth, _db) {
        this._AngularFireAuth = _AngularFireAuth;
        this._db = _db;
        this.isStopped = true;
        this.window = window;
        this.finalResults = "";
        this.diff = new __WEBPACK_IMPORTED_MODULE_3_text_diff__();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._AngularFireAuth.authState.subscribe(function (user) {
            if (user) {
                _this.updateStorage(user);
                _this.initialiseDatabase();
            }
        });
    };
    AppComponent.prototype.initialise = function () {
        if (this._SpeechRecognition) {
            return;
        }
        this.textBody = document.getElementById('text');
        this._SpeechRecognition = this._SpeechRecognition || new __WEBPACK_IMPORTED_MODULE_5__speech_recognition__["a" /* SpeechRecognition */]('en-Uk', true, true, 1);
        this._SpeechRecognition.onresult = this.onResult.bind(this);
        this._SpeechRecognition.start();
    };
    AppComponent.prototype.onResult = function (event) {
        if (this.isStopped) {
            return;
        }
        var intermidiateResults = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if (event.results[i].isFinal) {
                this.finalResults += transcript;
            }
            else {
                intermidiateResults += transcript;
            }
        }
        this.finalResults = this.translatePanctuations(this.finalResults);
        intermidiateResults = this.translatePanctuations(intermidiateResults);
        this.textBody.innerHTML = this.finalResults + '<span style="color:#777">' + intermidiateResults + '</span>';
    };
    AppComponent.prototype.translatePanctuations = function (message) {
        message = message.replace(/full stop/ig, '.');
        message = message.replace(/comma/ig, ',');
        message = message.replace(/exclamation/ig, '!');
        message = message.replace(/question mark/ig, '?');
        message = message.replace(' .', '. ');
        message = message.replace(' ,', ', ');
        message = message.replace(' !', '! ');
        message = message.replace(' ?', '? ');
        message = message.replace('.  ', '. ');
        message = message.replace(',  ', ', ');
        message = message.replace('!  ', '! ');
        message = message.replace('?  ', '? ');
        return message.trim();
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this._AngularFireAuth.auth.signOut().then(function (response) {
            _this.isStopped = true;
            _this.time = null;
            document.getElementById('text').innerText = "recognised speech...";
            document.getElementById('result').innerHTML = "";
            if (_this.resetTimer) {
                clearTimeout(_this.resetTimer);
            }
            _this.user = null;
            sessionStorage.removeItem('user');
        });
    };
    AppComponent.prototype.login = function () {
        this._AngularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider());
    };
    AppComponent.prototype.updateStorage = function (user) {
        this.user = {
            displayName: user.displayName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            providerId: user.providerId,
            uid: user.uid
        };
        sessionStorage.setItem('user', JSON.stringify(this.user));
    };
    AppComponent.prototype.initialiseDatabase = function () {
        if (this.user && this.user.uid) {
            this.dbList = this._db.list("/speech/" + this.user.uid);
        }
    };
    AppComponent.prototype.timer = function () {
        var _this = this;
        this.isStopped = !this.isStopped;
        if (this.isStopped) {
            if (this.resetTimer) {
                clearInterval(this.resetTimer);
                var textDiff = this.diff.main(document.getElementById('text-sample').innerText, document.getElementById('text').innerText);
                document.getElementById('result').innerHTML = this.diff.prettyHtml(textDiff);
                this.updateData(document.getElementById('result').innerHTML);
            }
            return;
        }
        this.initialise();
        var time = 0;
        this.resetTimer = setInterval(function () {
            ++time;
            var minutes = Math.floor(time / 60);
            var seconds = time % 60;
            _this.time = (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);
        }, 1000);
    };
    AppComponent.prototype.updateData = function (data) {
        this.dbList.push({ name: this.user.displayName, diff: data }).then(function (response) {
            console.log(response);
        }).catch(function (error) { return console.log(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/speech-recognition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognition; });
var SpeechRecognition = (function () {
    function SpeechRecognition(lang, continuous, interimResults, maxAlternatives) {
        if ("webkitSpeechRecognition" in window) {
            this.initialise();
            this._SpeechRecognition.lang = lang || 'en-UK';
            this._SpeechRecognition.continuous = !!continuous;
            this._SpeechRecognition.interimResults = !!interimResults;
            this._SpeechRecognition.maxAlternatives = maxAlternatives || 1;
            return;
        }
        throw new Error("speech recognition is not supported on this browser!");
    }
    SpeechRecognition.prototype.abort = function () {
        this._SpeechRecognition && this._SpeechRecognition.abort();
    };
    SpeechRecognition.prototype.start = function () {
        this._SpeechRecognition && this._SpeechRecognition.start();
    };
    SpeechRecognition.prototype.stop = function () {
        this._SpeechRecognition && this._SpeechRecognition.stop();
    };
    SpeechRecognition.prototype.initialise = function () {
        var _this = this;
        this._SpeechRecognition = new window['webkitSpeechRecognition']();
        this._SpeechRecognition.onaudiostart = function (event) {
            console.log(event.type);
            typeof _this.onaudiostart === 'function' && _this.onaudiostart(event);
        };
        this._SpeechRecognition.onaudioendonend = function (event) {
            console.log(event.type);
            typeof _this.onaudioendonend === 'function' && _this.onaudioendonend(event);
        };
        this._SpeechRecognition.onresult = function (event) {
            console.log(event.type);
            typeof _this.onresult === 'function' && _this.onresult(event);
        };
        this._SpeechRecognition.onnomatch = function (event) {
            console.log(event.type);
            typeof _this.onnomatch === 'function' && _this.onnomatch(event);
        };
        this._SpeechRecognition.onsoundstart = function (event) {
            console.log(event.type);
            typeof _this.onsoundstart === 'function' && _this.onsoundstart(event);
        };
        this._SpeechRecognition.onsoundend = function (event) {
            console.log(event.type);
            typeof _this.onsoundend === 'function' && _this.onsoundend(event);
        };
        this._SpeechRecognition.onspeechstart = function (event) {
            console.log(event.type);
            typeof _this.onspeechstart === 'function' && _this.onspeechstart(event);
        };
        this._SpeechRecognition.onspeechend = function (event) {
            console.log(event.type);
            typeof _this.onspeechend === 'function' && _this.onspeechend(event);
        };
        this._SpeechRecognition.onstart = function (event) {
            console.log(event.type);
            typeof _this.onstart === 'function' && _this.onstart(event);
        };
        this._SpeechRecognition.onend = function (event) {
            console.log(event.type);
            typeof _this.onend === 'function' && _this.onend(event);
            _this.abort();
            _this.start();
        };
        this._SpeechRecognition.onerror = function (event) {
            console.log(event);
            typeof _this.onerror === 'function' && _this.onerror(event);
        };
    };
    return SpeechRecognition;
}());

//# sourceMappingURL=speech-recognition.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCyB4cu00prvg504Y_XXVlZaJ15GErwJG8",
        authDomain: "mark-it-1.firebaseapp.com",
        databaseURL: "https://mark-it-1.firebaseio.com",
        projectId: "mark-it-1",
        storageBucket: "mark-it-1.appspot.com",
        messagingSenderId: "978631038383"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map