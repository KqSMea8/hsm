"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=recharge
var recharge = function (_Page) {
    _inherits(recharge, _Page);

    function recharge(hash) {
        _classCallCheck(this, recharge);

        return _possibleConstructorReturn(this, (recharge.__proto__ || Object.getPrototypeOf(recharge)).call(this, hash, "<style>\n    #recharge_vue .titleBar,#mysubscribe_vue .titleBar{height:10%;background:#fff}\n    #recharge_vue .titleBar>div,#mysubscribe_vue .titleBar>div{float:left;height:100%;text-align:center;width:30%}\n    #recharge_vue .titleBar>table,#mysubscribe_vue .titleBar>table{height:100%;width:20%;float:left}\n    #recharge_vue .titleBar>table td,#mysubscribe_vue .titleBar>table td{text-align:center;font-size:3vw;padding:0 4%}\n    #recharge_vue .titleBar_title,#mysubscribe_vue .titleBar_title{height:100%;width:100%}\n    #recharge_vue .titleBar_title span,#mysubscribe_vue .titleBar_title span{font-size:4.5vw;}\n    #recharge_vue .titleBar .glyphicon-chevron-left{transform:rotate(90deg);transition:all .4s ease}\n    #recharge_vue .titleBar .rotate{transform:rotate(-90deg)}\n    #recharge_vue .search{width:36%}\n    #recharge_vue .yueta{height:80%}\n    #mysubscribe_vue .yueta{height:90%}\n    #recharge_vue .yueta .person,#mysubscribe_vue .yueta .person{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}\n    #recharge_vue .yueta .store,#mysubscribe_vue .yueta .store{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}\n    #recharge_vue .footBar{width:100%;background:#fff;height:10%}\n    .red{color:red}\n    .grey{color:#777}\n    .border_bottom_red{border-bottom:solid 2px red}\n    #recharge_vue .info_box,#mysubscribe_vue .info_box{margin:3%;background:#fff}\n    #recharge_vue .info_box>div,#mysubscribe_vue .info_box>div{background:#fff}\n    #recharge_vue .info_box .line1,#mysubscribe_vue .info_box .line1{padding:3% 0;font-size:4vw}\n    #recharge_vue .info_box .name,#mysubscribe_vue .info_box .name{font-weight:900;font-size: 4vw;}\n    #recharge_vue .info_box .studio,#mysubscribe_vue .info_box .studio{width:19%;color:#aaa}\n    #recharge_vue .info_box .waitting,#mysubscribe_vue .info_box .waitting{text-align:right}\n    #recharge_vue .footBar>div{width:50%;float:left;height:100%;text-align:center}\n    #recharge_vue .footBar>div>div{height:60%}\n    #recharge_vue .footBar img{height:80%;top:20%;position:relative}\n    #recharge_vue .info_box ul,#mysubscribe_vue .info_box ul{position:relative;width:100%;background:#fff}\n    #recharge_vue .info_box li,#mysubscribe_vue .info_box li{float:left}\n    #recharge_vue .info_box ul.block,#mysubscribe_vue .info_box ul.block{height:auto}\n    #recharge_vue .info_box ul:nth-of-type(1) li,#mysubscribe_vue .info_box ul:nth-of-type(1) li{width:50%;height:100%}\n    #recharge_vue .info_box ul:nth-of-type(1) li:nth-of-type(2),#mysubscribe_vue .info_box ul:nth-of-type(1) li:nth-of-type(2){text-align:right}\n    #recharge_vue .info_box ul:nth-of-type(1) span,#mysubscribe_vue .info_box ul:nth-of-type(1) span{font-size:17px}\n    #recharge_vue .info_box ul:nth-of-type(1) span.name,#mysubscribe_vue .info_box ul:nth-of-type(1) span.name{font-size:18px;font-weight:900}\n    #recharge_vue .info_box ul:nth-of-type(3) li,#mysubscribe_vue .info_box ul:nth-of-type(3) li{width:50%;height:100%}\n    #recharge_vue .info_box ul:nth-of-type(3) li:nth-of-type(2),#mysubscribe_vue .info_box ul:nth-of-type(3) li:nth-of-type(2){text-align:right}\n    #recharge_vue .info_box ul:nth-of-type(3) img,#recharge_vue .info_box ul:nth-of-type(4) img,#mysubscribe_vue .info_box ul:nth-of-type(3) img{height:38%;top:28%;position:relative}\n    #recharge_vue .info_box ul:nth-of-type(3) span,#mysubscribe_vue .info_box ul:nth-of-type(3) span{font-size:16px}\n    #recharge_vue .info_box ul:nth-of-type(4) li,#mysubscribe_vue .info_box ul:nth-of-type(4) li{width:50%;height:100%}\n    #recharge_vue .info_box ul:nth-of-type(4) li:nth-of-type(2),#mysubscribe_vue .info_box ul:nth-of-type(4) li:nth-of-type(2){text-align:right}\n    #recharge_vue .info_box ul:nth-of-type(4) span,#mysubscribe_vue .info_box ul:nth-of-type(4) span{font-size:16px}\n    .pink{color:pink}\n    .borderRed{border:1px solid red}\n    .borderPink{border:1px solid pink}\n    #recharge_vue .info_box .yijian,#mysubscribe_vue .info_box .yijian{border-radius: 53px;width: 58%;display: inline-block;text-align: center;position: relative;padding: 6% 2%;font-size: 3vw;margin-right: 10%;}\n    #recharge_vue .info_box .fans,#mysubscribe_vue .info_box .fans{bottom:4%;left:51%;width:46%;position:absolute;font-size: 3vw;}\n    #recharge_vue .info_box .fans td,#mysubscribe_vue .info_box .fans td{padding:2% 0;text-align:center;line-height:1.1;color:#fff}\n    #recharge_vue .info_box .fans td:nth-of-type(1),#mysubscribe_vue .info_box .fans td:nth-of-type(1){background:#D60040}\n    #recharge_vue .info_box .fans td:nth-of-type(2),#mysubscribe_vue .info_box .fans td:nth-of-type(2){background:#e60045}\n    #recharge_vue .info_box .distance,#mysubscribe_vue .info_box .distance{position:absolute;bottom:2%;font-size:4vw;color:grey;left:4%}\n    #recharge_vue .wode{width:100%;height:90%}\n    #recharge_vue .wode .person{width: 100%;height: 45%;position: relative;}\n    #recharge_vue .wode .person > img{height: 100%;position: absolute;width: 100%;}\n    #recharge_vue .wode .person .person_box{height:100%;width:100%;}\n    #recharge_vue .wode .person .head-bg{position: relative;width: 52%;left: 48%;}\n    #recharge_vue .wode .person .head{position: absolute;width: 20%;left: 30%;transform: translateY(24%);}\n    #recharge_vue .wode .person .info{width: 50%;left: 50%;height: 55%;position: relative;padding-left: 5%;transform: translateY(-50%);}\n    #recharge_vue .wode .person h1{margin-top:0;color:#fff}\n    #recharge_vue .wode .person h6{margin-top:0;color:#fff}\n    #recharge_vue .wode .person p{color:red}\n    #recharge_vue .wode ul{margin-top:5%}\n    #recharge_vue .wode ul li{background:#fff;height:30%;width:33.3333%;float:left;border-bottom:1px solid #ddd;border-right:1px solid #ddd}\n    #recharge_vue .wode ul div.h60 img{position:relative;height:50%;top:40%}\n    #recharge_vue .wode h2{font-size:22px;color:white}\n    #recharge_vue .area{position:absolute;width:100%;height:90%;top:10%}\n    #recharge_vue .area .cover{height:100%;width:100%;background:#000;opacity:.4}\n    #recharge_vue .area .box{height:auto;width:100%;background:#fff;position:absolute;top:0}\n    #recharge_vue .area .left{height:auto;width:20%;background:#ddd;float:left}\n    #recharge_vue .area .right{height:auto;width:80%;background:#ddd}\n    #recharge_vue .area .left td{height:20px;background:#ddd}\n    #recharge_vue .area .left td.active{height:20px;background:#fff}\n    #recharge_vue .area .right td{height:20px;background:#fff}\n    #recharge_vue .area .right td.active{color:red}\n    #recharge_vue .area td{text-align:center;font-size:90%;padding:0 10px}\n    #recharge_vue .area tr{height:50px}\n    .bindPhone{position:absolute;width:100%;height:100%;top:0;left:0;z-index:99999;}\n    .bindPhone .cover{height:100%;width:100%;background:#000;opacity:.4}\n    .bindPhone .box{width:94%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;height:236px;background:#fff}\n    .bindPhone input{padding:0;font-size:100%;outline:0;border:0;box-shadow:none;background-color:#f5f5f5}\n    .bindPhone .box .line_1{padding:5px 20px;border-bottom:1px solid #ddd}\n    .bindPhone .box .line_2,.bindPhone .box .line_3, .bindPhone .box .line_4{height:70px;padding:10px}\n    .bindPhone .box .line_2 input,.bindPhone .box .line_3 input{height:50px;width:100%;padding-left:16px}\n    .bindPhone .box .line_3 input{width:58%}\n    .bindPhone .box .line_3{padding-top:0}\n    .bindPhone .box .line_4{padding:0 10px 0 10px}\n    .bindPhone .box .line_4 span{display:block;width:50%;float:left;height:50px;line-height:50px;text-align:center}\n    .bindPhone .box .line_4 span:nth-of-type(1){background:red;color:#fff}\n    .bindPhone .box .line_4 span:nth-of-type(2){background:#f5f5f5}\n    .bindPhone .box .line_3 span{display:block;width:40%;text-align:center;background:#aaa;height:50px;float:right;color:#fff;line-height:50px}\n    #detail_barber_vue .tip,#recharge_vue .tip{position:absolute;width:100%;height:100%;top:0}\n    #detail_barber_vue .tip .cover,#recharge_vue .tip .cover{height:100%;width:100%;background:#000;opacity:.6}\n    #detail_barber_vue .tip .box,#recharge_vue .tip .box{border-radius:5px;width:80%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;height:180px;background:#fff}\n    #detail_barber_vue .tip .box .line_1,#recharge_vue .tip .box .line_1{border-bottom:1px solid #ddd;height:50px;line-height:50px;text-align:center;font-weight:900;font-size:18px}\n    #detail_barber_vue .tip .box .line_2,#recharge_vue .tip .box .line_2{height:80px;font-size:15px;line-height:80px;padding:0 20px}\n    #detail_barber_vue .tip .box .line_3,#recharge_vue .tip .box .line_3{height:50px;background:red;color:#fff;font-size:18px;line-height:50px;text-align:center}\n    .intro_h2{margin: 0;font-size: 100%;margin-bottom: 2%;margin-top: 2%;font-weight:600}\n    .intro_p{margin: 0;padding-left: 5%;color: #555;width:100%}\n    .textInfo{text-align: center;font-family: \u9ED1\u4F53;font-size: 110%;color: #ffffff;line-height: 200%;}\n\n    .selected{background-color: #D5074A;border-radius: 2vw;color: #ffffff;border: 0.6vw solid #D5074A;font-size: 5vw;}\n    .unselected{border-radius: 2vw;color: #ffffff;border: 0.6vw solid #D5074A;color: #D5074A;font-size: 5vw;}\n</style>\n\n<div class=\"titleBar\" style=\"height: 20%;\">\n    <table style=\"width: 70%;\">\n        <tr>\n            <td>\n                <label style=\"font-family:'\u9ED1\u4F53';font-size: 150%;float: left;\">{{user.nickname}}</label>\n                <br>\n                <br>\n                <label style=\"font-family:'\u9ED1\u4F53';font-size: 130%;color: #BABABA;float: left;\">\u4F59\u989D:{{amount}}\u5143</label>\n            </td>\n        </tr>\n    </table>\n    <table>\n        <tr>\n            <td>\n                <img style=\"width: 100%;border-radius: 50%;\" :src=\"user.avt\"/>\n            </td>\n        </tr>\n    </table>\n</div>\n<br>\n<div class=\"titleBar\" style=\"height: 25%;\">\n    <table style=\"width: 100%;\">\n        <tr>\n            <td colspan=\"3\">\n                <label style=\"color: #4d4d4d;font-family: '\u9ED1\u4F53';font-size: 130%;float: left;\">\u4F18\u60E0\u5145\u503C:</label>\n            </td>\n        </tr>\n        <tr>\n            <td v-for=\"recharge in rechargeOptionsList\" @click=\"rechargeOptionsClick($index)\">\n                <div class=\"{{recharge.status?'selected':'unselected'}}\">\n                    \u5145\u503C{{recharge.price}}\n                    <br>\n                    \u9001{{recharge.give_price}}\n                </div>\n            </td>\n        </tr>\n    </table>\n</div>\n<button style=\"width: 90%;margin-left: 5%;margin-top:10%;margin-bottom: 3%;\" class=\"btn btn-success btn-lg\" @click=\"buy()\">\u7ACB\u5373\u5145\u503C\n</button>\n"));
    }

    _createClass(recharge, [{
        key: "vue_",
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {
                    this.db = db;
                },

                data: {
                    jsparam: {},
                    info: {},
                    selected_commodity_id: 0,
                    user: {},
                    rechargeOptionsList: {},
                    amount: 0
                },
                methods: {
                    init: function init() {
                        var _this3 = this;

                        Util.ajax(null, db.data.api + "getUserInfo.php", function (data) {
                            if (data.e !== 0) {} else {
                                _this3.db.data.user = data.data;
                                _this3.user = data.data;
                                _this3.amount = data.data.amount;
                            }
                        });
                        this.getRechargeOptionsList();
                        this.selected_commodity_id = 0;
                        Message.toast("加载中...", 0.5);
                    },
                    rechargeOptionsClick: function rechargeOptionsClick(index) {
                        var i = void 0;
                        if (!this.rechargeOptionsList[index].status) {
                            var length = this.rechargeOptionsList.length;
                            for (i = 0; i < length; i++) {
                                if (index !== i) this.rechargeOptionsList[i].status = false;
                            }this.rechargeOptionsList[index].status = true;
                            this.selected_commodity_id = this.rechargeOptionsList[index].id;
                        }
                    },
                    getRechargeOptionsList: function getRechargeOptionsList() {
                        var _this4 = this;

                        Util.ajax(null, db.data.api + "getRechargeOptionsList.php", function (data) {
                            if (data.e !== 0) {} else {
                                _this4.rechargeOptionsList = data.data;
                                for (var i = 0; i < _this4.rechargeOptionsList.length; i++) {
                                    _this4.rechargeOptionsList[i].status = false;
                                }
                                _this4.rechargeOptionsList = JSON.parse(JSON.stringify(_this4.rechargeOptionsList));
                            }
                        });
                    },
                    buy: function buy() {
                        var _this5 = this;

                        if (this.selected_commodity_id == 0) {
                            Message.toast("请选择充值金额!");
                            return;
                        }
                        this.db.data.commodity_id = this.selected_commodity_id;
                        var dataStr = "{\n                        \"commodity_id\" : " + this.db.data.commodity_id + "\n                    }";
                        Util.ajax(dataStr, db.data.api + "setBuyInfo.php", function (data) {
                            if (data.e !== 0) {
                                MessageBarber.alert('生成订单信息失败!请联系客服人员');
                            } else {
                                _this5.db.data.buy_id = data.data.buyId;
                                var _dataStr = "{\n                                \"buy_id\":" + data.data.buyId + "\n                            }";
                                Util.ajax(_dataStr, db.data.api + "getBuyPayment.php", function (data) {
                                    if (data.e !== 0) {
                                        MessageBarber.alert("获取订单信息失败，请联系客服人员");
                                    } else {
                                        _this5.jsparam = JSON.parse(data.data.info.jsparam);
                                        _this5.info = JSON.parse(JSON.stringify(data.data.info));
                                        _this5.db.data.buy_id = _this5.info.id;
                                        _this5.callpay();
                                    }
                                });
                            }
                        });
                    },
                    jsApiCall: function jsApiCall() {
                        var _this6 = this;

                        var tradeNo = this.info.tradeNo;
                        WeixinJSBridge.invoke('getBrandWCPayRequest', this.jsparam, function (res) {
                            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                                var dataStr = "{\n                                    \"buyId\":" + _this6.db.data.buy_id + ",\n                                    \"tradeNo\":\"" + tradeNo + "\"\n                                }";
                                Util.ajax(dataStr, db.data.api + "setBuyPaymentResult.php", function (data) {
                                    if (data.e !== 0) {} else {
                                        var _dataStr2 = "{\n                                            \"commodity_id\":" + _this6.db.data.commodity_id + ",\n                                            \"buy_id\":" + _this6.db.data.buy_id + "\n                                        }";
                                        Util.ajax(_dataStr2, db.data.api + "setBuyRecharge.php", function (data) {
                                            if (data.e !== 0) {
                                                Message.toast(data.data.msg, 5);
                                            } else {
                                                Message.toast("充值成功!");
                                                var _this = _this6;
                                                var timer_tmp = setInterval(function () {
                                                    clearInterval(timer_tmp);
                                                    _this.init();
                                                }, 2000);
                                            }
                                        });
                                    }
                                });
                            } else {
                                _this6.jump('recharge');
                            }
                        });
                    },
                    callpay: function callpay() {
                        var _this7 = this;

                        setTimeout(function () {
                            _this7.jsApiCall();
                        }, 200);
                    }
                }
            });
        }
    }]);

    return recharge;
}(Page);

///////////////
