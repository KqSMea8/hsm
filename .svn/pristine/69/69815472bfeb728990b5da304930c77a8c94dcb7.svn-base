"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var online_pay = function (_Page) {
    _inherits(online_pay, _Page);

    function online_pay(hash) {
        _classCallCheck(this, online_pay);

        var css = "\n<style>\n    #myhair_vue table {\n        width: 96%;\n        position: absolute;\n        left: 2%;\n        background: #fff;\n        top: 2%\n    }\n\n    #myhair_vue td {\n        background: #fff;\n        text-align: center\n    }\n\n    #myhair_vue div.inbl {\n        width: 90%;\n        margin: 11% 5%\n    }\n\n    .flex-center {\n        justify-content: center;\n        align-items: center;\n    }\n</style>\n";
        var html = ["<table>\n    <tr>\n        <td style=\"padding-top: 10%;padding-left: 11%;\">\n            <div class=\"inbl\">\n                \u9009\u62E9\u7EBF\u4E0A\u652F\u4ED8\u65B9\u5F0F:\n                <select v-model=\"online_pay_selected\" class=\"form-control\" style=\"width:60vw;margin-left:7vw;margin-top: 10%;\">\n                    <option v-for=\"option in online_pay_options\" v-bind:value=\"option\">\n                      {{ option.name }}\n                    </option>\n                </select>\n            </div>\n        </td>\n    </tr>\n    <tr>\n        <td style=\"padding-top: 10%;padding-left: 11%;\">\n            <div class=\"inbl\">\n                \u9884\u8BA1\u652F\u4ED8:\n                <span style=\"width:80vw;margin-left:7vw;font-size: 20vw;margin-top: 10%;\">\n                       \uFFE5<span style=\"color: red;\">{{online_pay_selected.expectedPayment}}</span>\u5143\n                </span>\n            </div>\n        </td>\n    </tr>\n    <tr>\n        <td style=\"padding-top: 10%;padding-left: 11%;\">\n            <div class=\"inbl\">\n                <div style=\"color:#fff;height:10vw;background:red;width:60vw;margin-left:7vw;margin-top: 10%;\" class=\"flex-center\" @click=\"setOnlinePay()\">\u786E\u5B9A</div>\n            </div>\n        </td>\n    </tr>\n</table>\n"];
        return _possibleConstructorReturn(this, (online_pay.__proto__ || Object.getPrototypeOf(online_pay)).call(this, hash, html, css));
    }

    _createClass(online_pay, [{
        key: "vue_",
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                },
                compiled: function compiled() {
                    this.init();
                },

                data: {
                    online_pay_selected: { id: "0", name: "请选择线上支付方式", expectedPayment: "0", did: "0" },
                    online_pay_options: []
                },
                methods: {
                    init: function init() {
                        this.online_pay_selected = { id: "0", name: "请选择线上支付方式", expectedPayment: "0", did: "0" };
                        this.getOnlinePayList();
                    },
                    getOnlinePayList: function getOnlinePayList() {
                        var _this2 = this;

                        var dataStr = "{\n                        \"orderId\":" + this.db.data.setOrderId + "\n                    }";
                        Util.ajax(dataStr, db.data.api + "getOnlinePayList.php", function (data) {
                            if (data.e !== 0) {
                                Message.toast(data.data.msg);
                            } else {
                                _this2.online_pay_options = data.data;
                                if (_this2.online_pay_options.length <= 2) {
                                    _this2.online_pay_selected = _this2.online_pay_options[1];
                                }
                            }
                        });
                    },
                    setOnlinePay: function setOnlinePay() {
                        var _this3 = this;

                        if (this.online_pay_selected.id == 0) {
                            Message.toast("请选择线上支付方式!");
                        } else {
                            MessageBarber.dialogForSystemOutside('提示', '确定选择该线上支付方式吗?', '关闭', '确定', function () {
                                Message.removeDialog();
                            }, function () {
                                var dataStr = "{\n                                \"orderId\":" + _this3.db.data.setOrderId + ",\n                                \"did\":" + _this3.online_pay_selected.did + "\n                            }";
                                Util.ajax(dataStr, db.data.api + "setOnlinePay.php", function (data) {
                                    if (data.e !== 0) {
                                        Message.toast(data.data.msg);
                                    } else {
                                        Message.toast(data.data.msg);
                                        index.vue.getBarberOrderList();
                                        history.go(-1);
                                    }
                                });
                                Message.removeDialog();
                            });
                        }
                    }
                }
            });
        }
    }]);

    return online_pay;
}(Page);

////
