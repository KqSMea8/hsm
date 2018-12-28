'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buy = function (_Page) {
    _inherits(buy, _Page);

    function buy(hash) {
        _classCallCheck(this, buy);

        return _possibleConstructorReturn(this, (buy.__proto__ || Object.getPrototypeOf(buy)).call(this, hash, '<style>\n    body {\n        background: #f5f5f5;\n    }\n\n    .table tr td {\n        color: #aaa;\n    }\n\n    .table tr td:nth-of-type(1) {\n        width: 30%;\n        padding: 2% 0 2% 5%;\n    }\n\n    .table tr td:nth-of-type(2) {\n        text-align: right;\n        width: 70%;\n        padding: 2% 5% 2% 0;\n    }\n\n    #all_notice .main {\n        width: 100%;\n        height: 80%;\n        overflow: scroll;\n        padding: 0 1%;\n    }\n\n    #all_notice .ticket {\n        margin-bottom: 4%;\n        width: 100%;\n        height: 24%;\n    }\n\n    #all_notice .ticket img {\n        width: 100%\n    }\n\n    #all_notice .ticket td > div {\n        padding: 3% 11%;\n        text-align: center;\n        font-size: 13px;\n        display: inline-block\n    }\n\n    #all_notice .ticket td:nth-of-type(1) {\n        width: 7%;\n        font-size: 45px;\n        color: #fff;\n        text-align: center\n    }\n\n    #all_notice .ticket td:nth-of-type(2) {\n        width: 24%;\n        font-size: 10px;\n        color: #fff\n    }\n\n    #all_notice .ticket td:nth-of-type(3) {\n        width: 15%;\n        text-align: center\n    }\n</style>\n<table style="width:100%">\n    <tr>\n        <td style="background: #fff;\n    padding: 2% 5%;width:100%">\n            <img style="width: 16%;\n    border-radius: 50%;\n    border: solid 1px #f5f5f5;" src="https://wx-1253594735.cosgz.myqcloud.com/barber/images/logo.png">\n            &nbsp;&nbsp;&nbsp;\n            <b>\u526A\u7EA6\u6D3E</b>\n        </td>\n    </tr>\n</table>\n<table class="table" style="    width: 100%;margin-top: 5%;background: #fff;">\n    <tr style="border-bottom: 1px dashed #f5f5f5;">\n        <td style="    padding: 5% 0 5% 5%;">\u4ED8\u6B3E\u91D1\u989D</td>\n        <td style="padding:5%;color:#000"><b class="clbl">\uFFE5</b>{{info.price}}</td>\n    </tr>\n    <tr>\n        <td>\u8BA2\u5355\u53F7</td>\n        <td>\n            {{info.tradeNo}}\n        </td>\n    </tr>\n    <tr>\n        <td>\u5546\u6237\u540D\u79F0</td>\n        <td>\u526A\u7EA6\u6D3E</td>\n    </tr>\n    <tr>\n        <td>\u793C\u5305\u540D\u79F0</td>\n        <td>{{info.name}}</td>\n    </tr>\n</table>\n<button style="width: 90%;\n    margin-left: 5%;\n    margin-top: 6%;" class="btn1 btn btn-lg btn-success" disabled>\u4ED8\u6B3E\u4E2D\n</button>'));
    }

    _createClass(buy, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {
                    this.db = db;
                },

                data: {
                    jsparam: {},
                    info: {}
                },
                methods: {
                    init: function init() {
                        var _this2 = this;

                        var dataStr = '{\n                        "buy_id":' + db.data.buy_id + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getBuyPayment.php', function (data) {
                            // alert(JSON.stringify(data));
                            if (data.e !== 0) {
                                MessageBarber.alert("获取订单信息失败，请联系客服人员");
                            } else {
                                _this2.jsparam = JSON.parse(data.data.info.jsparam);
                                _this2.info = JSON.parse(JSON.stringify(data.data.info));
                                _this2.callpay();
                            }
                        });
                    },
                    jsApiCall: function jsApiCall() {
                        var _this3 = this;

                        var tradeNo = this.info.tradeNo;
                        WeixinJSBridge.invoke('getBrandWCPayRequest', this.jsparam, function (res) {
                            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                                var dataStr = '{\n                                    "buyId":' + db.data.buy_id + ',\n                                    "tradeNo":"' + tradeNo + '"\n                                }';
                                Util.ajax(dataStr, db.data.api + 'setBuyPaymentResult.php', function (data) {
                                    if (data.e !== 0) {} else {

                                        var _dataStr = '{\n                                            "did":' + data.data.did + ',\n                                            "quantity":' + data.data.quantity + ',\n                                            "sid":' + data.data.sid + '\n                                        }';
                                        Util.ajax(_dataStr, db.data.api + 'setBuyTicket.php', function (data) {
                                            if (data.e !== 0) {
                                                Message.toast(data.data.msg, 5);
                                            } else {
                                                _this3.jump('mytickets');
                                            }
                                        });
                                    }
                                });
                            } else {
                                _this3.jump('commodity_detail');
                            }
                        });
                    },
                    callpay: function callpay() {
                        var _this4 = this;

                        setTimeout(function () {
                            _this4.jsApiCall();
                        }, 200);
                    }
                }
            });
        }
    }]);

    return buy;
}(Page);

/////////
