'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var launcher = function (_Page) {
    _inherits(launcher, _Page);

    function launcher(hash) {
        _classCallCheck(this, launcher);

        return _possibleConstructorReturn(this, (launcher.__proto__ || Object.getPrototypeOf(launcher)).call(this, hash));
    }

    _createClass(launcher, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {
                    this.init();
                    setTimeout(function () {
                        window.launcher_hasCompiled = true;
                    }, 300);
                },

                data: {
                    hasPosition: false
                },
                computed: {},
                methods: {
                    navChoose: function navChoose(obj, index) {
                        var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

                        var i = void 0,
                            length = obj.length;
                        for (i = 0; i < length; i++) {
                            if (i === index) {
                                obj[i].choose = true;
                            } else {
                                obj[i].choose = false;
                            }
                        }
                        if (func) {
                            func(index);
                        }
                    },
                    handlerError: function handlerError(e) {
                        switch (e) {
                            case -1:
                                Message.toast('请填写正确的手机号码', 3);
                                break;
                            case -2:
                                Message.toast('短信服务器发送失败', 3);
                                break;
                            case -6:
                                Message.toast('需要用户权限', 3);
                                break;
                            case -7:
                                Message.toast('用户权限错误', 3);
                                break;
                            case -8:
                                Message.toast('短信发送过于频繁', 3);
                                break;
                            case -9:
                                Message.toast('短信验证超时', 3);
                                break;
                            default:
                                Message.toast('其他错误代码 ' + e, 3);
                                break;
                        }
                    },
                    init: function init() {},
                    jump2index: function jump2index() {
                        var _this2 = this;

                        console.log('5555555');
                        if (app.secondHash === 'index') {
                            Util.hasLoadJsCallBack('index', function () {
                                console.log('3333');
                                console.log(index);
                                _this2.jump('index');
                            });
                        }
                    },

                    /*look(imgStr){
                        var imgArr = imgStr.split('|');
                        var urls = [];
                        for(var i=0;i<imgArr.length;i++){
                            var src = imgArr[i].trim();
                            if(!!src){
                                urls.push(src);
                            }
                        }
                          if(urls.length <= 0){
                            return;
                        }else{
                            wx.previewImage({
                                current: '', // 当前显示图片的http链接
                                urls: urls // 需要预览的图片http链接列表
                            });
                        }
                    },*/
                    look: function look(imgStr, currenImg) {
                        var imgArr = imgStr.split('|');
                        var urls = [];
                        for (var i = 0; i < imgArr.length; i++) {
                            var src = imgArr[i].trim();
                            if (!!src) {
                                urls.push(src);
                            }
                        }
                        if (urls.length <= 0) {
                            return;
                        } else {
                            wx.previewImage({
                                current: currenImg, // 当前显示图片的http链接
                                urls: urls // 需要预览的图片http链接列表
                            });
                        }
                    },
                    showAndHideCover: function showAndHideCover(obj_vue) {
                        obj_vue.find('.endtouch').show();
                        setTimeout(function () {
                            obj_vue.find('.endtouch').hide();
                        }, 800);
                    },
                    smooth: function smooth(func) {
                        if (app.isDoingAnimation) {
                            var interTimer;
                            var outTimer;
                            interTimer = setInterval(function () {
                                if (!app.isDoingAnimation) {
                                    clearInterval(interTimer);
                                    clearTimeout(outTimer);
                                    func();
                                }
                            }, 100);
                            outTimer = setTimeout(function () {
                                try {
                                    clearInterval(interTimer);
                                } catch (e) {}
                            }, 2000);
                        } else {
                            func();
                        }
                    }
                }
            });
        }
    }]);

    return launcher;
}(Page);
