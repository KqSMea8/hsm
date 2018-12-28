'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bind_phone = function (_Page) {
    _inherits(bind_phone, _Page);

    function bind_phone(hash) {
        _classCallCheck(this, bind_phone);

        var css = '\n<style>\n.bindPhone{position:absolute;width:100%;height:100%;top:0}\n.bindPhone .cover{height:100%;width:100%;background:#000;opacity:.4}\n.bindPhone .box{width:94%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;height:236px;background:#fff}\n.bindPhone input{padding:0;font-size:100%;outline:0;border:0;box-shadow:none;background-color:#f5f5f5}\n.bindPhone .box .line_1{padding:5px 20px;border-bottom:1px solid #ddd}\n.bindPhone .box .line_2,.bindPhone .box .line_3,#index_vue .bindPhone .box .line_4{height:70px;padding:10px}\n.bindPhone .box .line_2 input,.bindPhone .box .line_3 input{height:50px;width:100%;padding-left:16px}\n.bindPhone .box .line_3 input{width:58%}\n.bindPhone .box .line_3{padding-top:0}\n.bindPhone .box .line_4{padding:0 10px 0 10px}\n.bindPhone .box .line_4 span{display:block;width:50%;float:left;height:50px;line-height:50px;text-align:center}\n.bindPhone .box .line_4 span:nth-of-type(1){background:red;color:#fff}\n.bindPhone .box .line_4 span:nth-of-type(2){background:#f5f5f5}\n.bindPhone .box .line_3 span{display:block;width:40%;text-align:center;background:#aaa;height:50px;float:right;color:#fff;line-height:50px}\n</style>\n';
        var html = [' \n<div class="bindPhone">\n    <!--<div class="cover" @touchstart="change(\'showBindPhoneView\')"></div>-->\n    <div class="box" style="    display: block;">\n        <div class="line_1">\n            \u7ED1\u5B9A\u624B\u673A\u53F7\n        </div>\n        <div class="line_2">\n            <input placeholder="\u8F93\u5165\u624B\u673A\u53F7" v-model="phone">\n        </div>\n        <div class="line_3">\n            <input placeholder="\u8F93\u5165\u9A8C\u8BC1\u7801" v-model="phoneCheck">\n            <span @touchstart="sendPhoneCheck()">{{checkText}}</span>\n        </div>\n        <div class="line_4">\n            <span @click="bindPhone()">\u786E\u5B9A</span>\n            <span @click="change(\'showBindPhoneView\')">\u53D6\u6D88</span>\n        </div>\n    </div>\n</div>\n', '\n\n'];
        return _possibleConstructorReturn(this, (bind_phone.__proto__ || Object.getPrototypeOf(bind_phone)).call(this, hash, html, css));
    }

    _createClass(bind_phone, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {},

                data: {
                    showBindPhoneView: false,
                    canSendPhoneCheck: true,
                    checkText: '获取短信验证码',
                    phone: '',
                    phoneCheck: '',
                    timer12: null
                },
                methods: {
                    init: function init() {},
                    sendPhoneCheck: function sendPhoneCheck() {
                        var dataStr = '{\n                        "phone":"' + this.phone + '"\n                    }';
                        var _this = this;
                        Util.ajax(dataStr, db.data.api + 'getPhoneVerificationCode.php', function (data) {
                            if (data.e !== 0) {
                                launcher.vue.handlerError(data.e);
                            } else {
                                _this.checkText = '60秒';
                                if (_this.timer12 !== null) {
                                    clearInterval(_this.timer12);
                                    _this.timer12 = null;
                                }
                                _this.timer12 = setInterval(function () {
                                    var num = Math.floor(_this.checkText.substr(0, _this.checkText.length - 1)) - 1;
                                    if (num < 0) {
                                        clearInterval(_this.timer12);
                                        _this.timer12 = null;
                                        _this.checkText = '获取短信验证码';
                                    } else {
                                        _this.checkText = num + '秒';
                                    }
                                }, 1000);
                            }
                        });
                    },
                    bindPhone: function bindPhone() {
                        if (!Util.isMobileNumber(this.phone)) throw '手机号码格式错误';
                        if (!!this.phoneCheck === false) throw '验证码格式错误';
                        var dataStr = '{\n                        "phone":"' + this.phone + '",\n                        "code":"' + this.phoneCheck + '"\n                    }';
                        var _this = this;
                        Util.ajax(dataStr, db.data.api + 'verifyPhoneCode.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast('非授权用户', 3);
                            } else {
                                app.browser.die();
                                clearInterval(_this.timer12);
                                _this.timer12 = null;
                                db.data.user.phone = _this.phone;
                                _this.phone = '';
                                _this.phoneCheck = '';
                                _this.showBindPhoneView = false;
                                _this.checkText = '获取短信验证码';
                                Message.toast('绑定成功', 3);
                                setTimeout(function () {
                                    location.href = 'https://www.jianyuepai.com.cn/api/barber/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/barber/index.php?hash=index';
                                }, 1000);
                            }
                        });
                    }
                }
            });
        }
    }]);

    return bind_phone;
}(Page);
