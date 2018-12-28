'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var analysis_turnover = function (_Page) {
    _inherits(analysis_turnover, _Page);

    function analysis_turnover(hash) {
        _classCallCheck(this, analysis_turnover);

        var css = '\n<style>\n</style>\n';
        var html = [' \n<div class="bindPhone">\n    <!--<div class="cover" @touchstart="change(\'showBindPhoneView\')"></div>-->\n    <div class="box" style="    display: block;">\n        <div class="line_1">\n            \u7ED1\u5B9A\u624B\u673A\u53F7\n        </div>\n        <div class="line_2">\n            <input placeholder="\u8F93\u5165\u624B\u673A\u53F7" v-model="phone">\n        </div>\n        <div class="line_3">\n            <input placeholder="\u8F93\u5165\u9A8C\u8BC1\u7801" v-model="phoneCheck">\n            <span @touchstart="sendPhoneCheck()">{{checkText}}</span>\n        </div>\n        <div class="line_4">\n            <span @click="bindPhone()">\u786E\u5B9A</span>\n            <span @click="change(\'showBindPhoneView\')">\u53D6\u6D88</span>\n        </div>\n    </div>\n</div>\n', '\n\n'];
        return _possibleConstructorReturn(this, (analysis_turnover.__proto__ || Object.getPrototypeOf(analysis_turnover)).call(this, hash, html, css));
    }

    _createClass(analysis_turnover, [{
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
                                if (!launcher.vue.handlerError(data.e)) Message.toast('短信发送失败', 3);
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
                                Message.toast('短信发送失败', 3);
                            } else {
                                db.data.user.phone = _this.phone;
                                _this.phone = '';
                                _this.phoneCheck = '';
                                _this.showBindPhoneView = false;
                                _this.checkText = '获取短信验证码';
                                Message.toast('绑定成功', 3);
                            }
                        });
                    }
                }
            });
        }
    }]);

    return analysis_turnover;
}(Page);
//# sourceMappingURL=analysis_turnover.js.map