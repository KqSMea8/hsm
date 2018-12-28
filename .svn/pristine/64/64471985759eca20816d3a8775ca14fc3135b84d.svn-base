"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getmytickets = function (_Page) {
    _inherits(getmytickets, _Page);

    function getmytickets(hash) {
        _classCallCheck(this, getmytickets);

        return _possibleConstructorReturn(this, (getmytickets.__proto__ || Object.getPrototypeOf(getmytickets)).call(this, hash, "<style>.flex-center{justify-content:center;align-items:center;text-align:center;line-height:250%;position:relative;top:45%}</style><div style=\"color:#fff;width:45vw;height:10vw;background:red;margin:0 auto;margin-top:3vw\" class=\"flex-center\" @click=\"setTicket()\">\u70B9\u51FB\u9886\u53D6\u4F18\u60E0\u5377</div>"));
    }

    _createClass(getmytickets, [{
        key: "vue_",
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {
                    activityStrategy: 0,
                    confirmReceiveTimestamp: 0
                },
                methods: {
                    init: function init() {
                        Message.toast("请点击领取按钮");
                    },
                    getQueryString: function getQueryString(name) {
                        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                        var r = window.location.search.substr(1).match(reg);
                        if (r != null) return decodeURI(r[2]);
                        return null;
                    },
                    setTicket: function setTicket() {
                        this.activityStrategy = this.getQueryString("activityStrategy");
                        this.confirmReceiveTimestamp = this.getQueryString("confirmReceiveTimestamp");
                        var dataStr = "{\n                            \"activityStrategy\":" + this.activityStrategy + ",\n                            \"confirmReceiveTimestamp\":" + this.confirmReceiveTimestamp + ",\n                        }";
                        Util.ajax(dataStr, db.data.api + "setActivityTicketCommon.php", function (data) {
                            if (data.e === -1) {
                                Message.toast("参数不正确!请联系工作人员!");
                            } else if (data.e === -2) {
                                Message.toast("很抱歉!您已经领取过了!请在我的优惠卷中查看!");
                            } else if (data.e === -3) {
                                Message.toast("很抱歉!当前优惠卷策略已失效!");
                            } else if (data.e === -9) {
                                Message.toast("很抱歉!已过领取截止期限!");
                            } else {
                                Message.toast(data.data.msg);
                                location.href = 'https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=mytickets';
                            }
                        });
                    }
                }
            });
        }
    }]);

    return getmytickets;
}(Page);
////
