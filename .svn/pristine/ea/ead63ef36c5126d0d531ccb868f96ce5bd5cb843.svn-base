'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Main = function () {
    function Main(sign, time, bid, url) {
        _classCallCheck(this, Main);

        console.log('new Main');
        this.pages = ['index', 'bind_phone', 'turnover_rank', 'query_bind_code', 'userClass', 'user_hair', 'bad_comments', 'fixed_guest', 'drain_guest_days', 'drain_guest_count', 'female_guest', 'pay_channel', 'online_pay', 'index_new', 'punch_list'];
        this.loadedPages = [];

        var dataStr = '{\n                    "sign" : "' + sign + '",\n                    "time" : "' + time + '",\n                    "bid" : "' + bid + '"\n                }';
        Util.ajax(dataStr, db.data.api + 'AjaxFirstAuth.php', function (data) {
            if (data.e === 0) {
                var _dataStr = '{\n                            "url" : "' + (location.href.split(':')[0] + url) + '"\n                        }';
                Util.ajax(_dataStr, db.data.api + 'getWxJSParam.php', function (data) {
                    if (data.e === 0) {
                        wx.config({
                            debug: false,
                            appId: data.data.appId,
                            timestamp: data.data.timestamp,
                            nonceStr: data.data.nonceStr,
                            signature: data.data.signature,
                            jsApiList: ['checkJsApi', 'openLocation', 'getLocation', 'closeWindow', 'chooseImage', 'uploadImage', 'downloadImage', 'onMenuShareTimeline', 'onMenuShareAppMessage']
                        });
                        wx.error(function (res) {
                            console.log(res);
                        });
                    }
                });
            }
        });
        this.run();
    }

    _createClass(Main, [{
        key: 'run',
        value: function run() {
            this.addSections();
            var secondHash = 'index';
            var hash = $_GET['hash'];
            if (!!hash) {
                secondHash = hash;
                if (hash === 'bind_phone') {
                    this.initBind_phone(hash);
                } else {
                    secondHash = 'index';
                }
            }
            this.addPage('index');
            this.initApp(secondHash);
        }
    }, {
        key: 'addSections',
        value: function addSections() {
            var $body = $('body'),
                i = void 0;
            for (i = 0; i < this.pages.length; i++) {
                $body.append('<section id="' + this.pages[i] + '_vue"></section>');
            }
        }
    }, {
        key: 'addPage',
        value: function addPage(page) {
            var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            if (Util.in_array(this.loadedPages, page)) {
                return;
            } else {
                console.log('add page : ' + page);
                console.log(func);
                this.loadedPages.push(page);
                var callback = function callback() {
                    Util.hasLoadJsCallBack(page, function () {
                        window[page] = new window[page](page);
                        setTimeout(function () {
                            func();
                        }, 80);
                    });
                };
                switch (page) {
                    case 'launcher':
                        head.js("../dist/barber/pages/launcher.js?v=1533006165.4162045" + time, callback);
                        break;
                    case 'index':
                        head.js("../dist/barber/pages/index.js?v=1537957205.2751186" + time, callback);
                        break;
                    case 'bind_phone':
                        head.js("../dist/barber/pages/bind_phone.js?v=1533006165.34531" + time, callback);
                        break;
                    case 'turnover_rank':
                        head.js("../dist/barber/pages/turnover_rank.js?v=1533006165.3687263" + time, callback);
                        break;
                    case 'query_bind_code':
                        head.js("../dist/barber/pages/query_bind_code.js?v=1533006165.4562142" + time, callback);
                        break;
                    case 'userClass':
                        head.js("../dist/barber/pages/userClass.js?v=1533006165.3712099" + time, callback);
                        break;
                    case 'user_hair':
                        head.js("../dist/barber/pages/user_hair.js?v=1533006165.3593054" + time, callback);
                        break;
                    case 'bad_comments':
                        head.js("../dist/barber/pages/bad_comments.js?v=1533006165.4126675" + time, callback);
                        break;
                    case 'fixed_guest':
                        head.js("../dist/barber/pages/fixed_guest.js?v=1533006165.4011707" + time, callback);
                        break;
                    case 'drain_guest_days':
                        head.js("../dist/barber/pages/drain_guest_days.js?v=1533006165.3907535" + time, callback);
                        break;
                    case 'drain_guest_count':
                        head.js("../dist/barber/pages/drain_guest_count.js?v=1533006165.382005" + time, callback);
                        break;
                    case 'female_guest':
                        head.js("../dist/barber/pages/female_guest.js?v=1533006165.3730958" + time, callback);
                        break;
                    case 'pay_channel':
                        head.js("../dist/barber/pages/pay_channel.js?v=1533006165.349386" + time, callback);
                        break;
                    case 'online_pay':
                        head.js("../dist/barber/pages/online_pay.js?v=1533006165.3468401" + time, callback);
                        break;
                    case 'index_new':
                        head.js("../dist/barber/pages/index_new.js?v=1538043753.0326486" + time, callback);
                        break;
                    case 'punch_list':
                        head.js('../dist/barber/pages/punch_list.js' + time, callback);
                        break;
                }
            }
        }
    }, {
        key: 'initApp',
        value: function initApp(secondHash) {
            var isIos = db.data.isIos;
            var config = {
                'isDebug': true,
                'projectName': 'myapp',
                'defaultHash': 'launcher',
                'secondHash': secondHash,
                'mainHash': 'index',
                'transitionTag': 'section',
                'transitionName': 'transform',
                'transitionTime': '0.3',
                'transitionType': 'ease-in-out'
            };
            var app = new H5App(config);
            app = appCreator.init(app);
            app.noDie = true;
            app.isIos = isIos;
            window.app = app;
            console.log('app');
            this.addPage('launcher', function () {
                console.log('app run');
                app.run();
                setTimeout(function () {
                    launcher.vue.jump2index();
                }, 500);
            });
        }
    }, {
        key: 'initBind_phone',
        value: function initBind_phone(hash) {
            this.addPage(hash);
            Util.hasLoadJsCallBack([hash, 'launcher_hasCompiled', 'app'], function () {
                app.jump2(hash);
            });
        }
    }]);

    return Main;
}();
////////
