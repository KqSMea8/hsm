'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=commodity_detail
var commodity_detail = function (_Page) {
    _inherits(commodity_detail, _Page);

    function commodity_detail(hash) {
        _classCallCheck(this, commodity_detail);

        return _possibleConstructorReturn(this, (commodity_detail.__proto__ || Object.getPrototypeOf(commodity_detail)).call(this, hash, '<img class="ma pos_a t0 l0 r0 w100" style="bottom:0%"\n     src="https://wx-1253594735.file.myqcloud.com/studio/26/buy_one_get_twenty_news.png"/>\n<img id="buy" style="bottom:0%;position: absolute;left: 25%;"\n     src="https://wx-1253594735.file.myqcloud.com/barber/images/buy_button.png" width="50%" @click="buy()"/>'));
    }

    _createClass(commodity_detail, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.launcher = launcher.vue;
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {},
                methods: {
                    init: function init() {
                        /*Message.toast("该礼包已下架, 请关注其他优惠活动", 3);
                        console.log(db.data.user);*/
                    },
                    buy: function buy() {
                        var _this2 = this;

                        var dataStr = '{\n                        "commodity_id" : 4,\n                        "in_store" : 0    //\u9ED8\u8BA4\u4E3A\u5E97\u5916\u63A8\u5E7F\n                    }';
                        Util.ajax(dataStr, db.data.api + 'setBuyInfo.php', function (data) {
                            if (data.e !== 0) {
                                if (data.e == -5) {
                                    Message.toast("您已经购买过该礼包了, 看看其他活动吧!", 5);
                                } else {
                                    MessageBarber.alert('生成订单信息失败!请联系工作人员');
                                }
                            } else {
                                _this2.db.data.buy_id = data.data.buyId;
                                _this2.jump('buy');
                            }
                        });
                    }
                }
            });
        }
    }]);

    return commodity_detail;
}(Page);

//
