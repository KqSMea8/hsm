'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jsapi = function (_Page) {
    _inherits(jsapi, _Page);

    function jsapi(hash) {
        _classCallCheck(this, jsapi);

        return _possibleConstructorReturn(this, (jsapi.__proto__ || Object.getPrototypeOf(jsapi)).call(this, hash, '<style>\n    body{\n        background: #f5f5f5;\n    }\n    .table tr td{\n        color: #aaa;\n    }\n    .table tr td:nth-of-type(1){\n        width: 30%;\n        padding: 2% 0 2% 5%;\n    }\n    .table tr td:nth-of-type(2){\n        text-align: right;\n        width:70%;\n        padding: 2% 5% 2% 0;\n    }\n    #all_notice .main{width: 100%;height: 80%;overflow: scroll;padding: 0 1%;}\n    #all_notice .ticket{margin-bottom: 4%;width: 100%;height: 24%;}\n    #all_notice .ticket img{width:100%}\n    #all_notice .ticket td>div{padding:3% 11%;text-align:center;font-size:13px;display:inline-block}\n    #all_notice .ticket td:nth-of-type(1){width:7%;font-size:45px;color:#fff;text-align:center}\n    #all_notice .ticket td:nth-of-type(2){width:24%;font-size:10px;color:#fff}\n    #all_notice .ticket td:nth-of-type(3){width:15%;text-align:center}\n</style>\n<table style="width:100%">\n    <tr>\n        <td style="background: #fff;\n    padding: 2% 5%;width:100%">\n            <img style="width: 16%;\n    border-radius: 50%;\n    border: solid 1px #f5f5f5;" src="https://wx-1253594735.cosgz.myqcloud.com/barber/images/logo.png">\n            &nbsp;&nbsp;&nbsp;\n            <b>\u526A\u7EA6\u6D3E</b>\n        </td>\n    </tr>\n</table>\n<table class="table" style="    width: 100%;margin-top: 5%;background: #fff;">\n    <tr style="border-bottom: 1px dashed #f5f5f5;">\n        <td style="    padding: 5% 0 5% 5%;">\u4ED8\u6B3E\u91D1\u989D</td><td style="padding:5%;color:#000"><b class="clbl">\uFFE5</b>{{info.price}}</td>\n    </tr>\n    <tr>\n        <td>\u8BA2\u5355\u53F7</td><td><?php if(isset($orderObj[\'name\'])){ ?>\n        {{info.tradeNo}}\n        <?php } ?></td>\n    </tr>\n    <tr>\n        <td>\u5546\u6237\u540D\u79F0</td><td>\u526A\u7EA6\u6D3E</td>\n    </tr>\n    <tr>\n        <td>\u8BA2\u5355\u6392\u53F7</td><td>{{info.tradeNo}}</td>\n    </tr>\n    <tr>\n        <td>\u670D\u52A1\u9879\u76EE</td><td>{{info.srv}}</td>\n    </tr>\n    <tr>\n        <td>\u4F18\u60E0\u5238</td><td>{{info.ticket.keyword?info.ticket.keyword:\'\'}}<span v-if="isShow" style="color: blue;" @click="jump(\'select_ticket\')">\u66F4\u6362</span></td>\n    </tr>\n</table>\n<button style="width: 90%;margin-left: 5%;margin-top: 6%;" class="btn1 btn btn-lg btn-success" @click="immediatePayment()">\u7ACB\u5373\u652F\u4ED8</button>'));
    }

    _createClass(jsapi, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {},

                data: {
                    jsparam: {},
                    info: {},
                    isShow: false
                },
                methods: {
                    init: function init() {
                        var _this2 = this;

                        var dataStr = '{\n                            "oid":' + db.data.jsapi_order_id + '\n                        }';
                        Util.ajax(dataStr, db.data.api + 'getOrderPayment.php', function (data) {
                            // alert(JSON.stringify(data));
                            if (data.e !== 0) {
                                if (data.e != -2) {
                                    MessageBarber.alert("付款失败，请询问发型师服务是否已经完成");
                                }
                                _this2.jump('index');
                            } else {
                                _this2.jsparam = JSON.parse(data.data.info.jsparam);
                                _this2.info = JSON.parse(JSON.stringify(data.data.info));
                                _this2.isShow = true;
                                ////
                            }
                        });
                    },
                    jsApiCall: function jsApiCall() {
                        var _this3 = this;

                        var tradeNo = this.info.tradeNo;
                        WeixinJSBridge.invoke('getBrandWCPayRequest', this.jsparam, function (res) {
                            // alert(JSON.stringify(res));
                            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                                var dataStr = '{\n                                    "oid":' + db.data.jsapi_order_id + ',\n                                    "tradeNo":"' + tradeNo + '"\n                                }';
                                Util.ajax(dataStr, db.data.api + 'setOrderPaymentResult.php', function (data) {
                                    db.data.comment_order_id = db.data.jsapi_order_id;
                                    db.data.comment_close = true;
                                    _this3.jump('comment');
                                });
                            } else {
                                db.data.comment_order_id = db.data.jsapi_order_id;
                                db.data.comment_close = true;
                            }
                        });
                    },
                    callpay: function callpay() {
                        var _this4 = this;

                        setTimeout(function () {
                            _this4.jsApiCall();
                        }, 200);
                    },
                    immediatePayment: function immediatePayment() {
                        this.callpay();
                    }
                }
            });
        }
    }]);

    return jsapi;
}(Page);
//
