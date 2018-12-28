'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mytickets = function (_Page) {
    _inherits(mytickets, _Page);

    function mytickets(hash) {
        _classCallCheck(this, mytickets);

        return _possibleConstructorReturn(this, (mytickets.__proto__ || Object.getPrototypeOf(mytickets)).call(this, hash, '<style>\n    /*#mytickets_vue{background:#f0f0f0;padding:4% 4%}*/\n    #mytickets_vue,#orderlist_vue{float:left;background:#efefef;width:100%}\n    .orderlistHeader{background:#fff;float:left;width:100%;height:13.33333vw;position:fixed}\n    .orderlistHeader .item{float:left;width:25%;height:100%;display:flex;justify-content:center;align-items:center}\n    .orderlistHeader .item span{color:#000;line-height:13.33333vw;font-size:4vw}\n    .orderlistHeader .item.on span{border-bottom:2px solid #eb5789}\n    .orderlistList{float:left;height:91%;width:100%;margin-top:15%;overflow:scroll}\n    .orderlistList .item{background:#fff;float:left;width:96vw;margin-left:2vw;padding-left:4.25926vw;padding-right:4.25926vw;margin-top:1.85185vw;}\n    .orderlistList .item header{float:left;width:100%;height:11.85185vw;line-height:11.85185vw}\n    .orderlistList .item header .title{float:left;font-size:4vw}\n    .orderlistList .item header .status{float:right;color:#b57f8f;font-size:3.2vw}\n    .orderlistList .item article{float:left;width:100%;font-size:3.4vw;box-sizing:border-box}\n    .orderlistList .item article .items{line-height:6vw}\n    .orderlistList span.desc{color:#000;line-height:5vw}\n    .orderlistList span.desc._{position:relative;top:-1vw}\n    .orderlistList span.number{font-weight:700;font-size:5.6vw;color:#df0045;padding-left:2.77778vw}\n    .orderlistList span.wait{color:#b57f8f}\n    .orderlistList .item .floatRight{float:right}\n    .orderlistList .item article .date{color:#a1a1a1;float:left;margin-top:1vw}\n    .orderlistList .item footer{float:left;width:100%;height:10.81481vw;line-height:14.81481vw;color:#9f9f9f;font-size:3.6vw}\n    .orderlistList .item footer .btn{width:25.92593vw;float:right;text-align:center}\n    .orderlistList .item footer img{display:inline-block;width:5.55556vw;height:5.55556vw;position:relative;top:1.2vw}\n    #mytickets_vue .main{width:100%;height:100%;overflow:scroll}\n    #mytickets_vue .ticket{margin-bottom:4%;width:100%;height:20%;}\n    #mytickets_vue .ticket img{width:100%}\n    #mytickets_vue .ticket td>div{background:#fff;padding:3% 11%;text-align:center;font-size:3vw;display:inline-block}\n    #mytickets_vue .ticket td:nth-of-type(1){width:7%;font-size:11vw;color:#fff;text-align:center}\n    #mytickets_vue .ticket td:nth-of-type(2){width:24%;font-size:3vw;color:#fff}\n    #mytickets_vue .ticket td:nth-of-type(3){width:15%;text-align:center}\n    #mytickets_vue .orderlistHeader .item{float:left;width:33%;height:100%;display:flex;justify-content:center;align-items:center}\n    #mytickets_vue .orderlistList{padding:4%;}\n</style>\n<div class="orderlistHeader">\n    <div class="item {{(item.choose)?\'on\':\'\'}}" v-for="item in ticketTitle" @touchstart="orderChoose($index)">\n        <span>{{item.text+\'(\'+item.num+\')\'}}</span>\n    </div>\n</div>\n\n<div class="orderlistList {{obj.choose?\'\':\'disn\'}}" v-for="obj in ticketTitle">\n    <div v-if="$index === 0" class="pos_r" style="margin-bottom:5%;display: none;">\n        <img class="w100" :src="(db.data.oss)+\'barber/images/ticket-invite.jpg\'">\n        <div class="pos_a h100 w100 t0" @touchstart="share()">\n            <table class="h100 w100">\n                <tr>\n                    <td style="color: white;\n            width: 68%;\n            padding: 0 2% 0 25%;\n            font-size: 3.3vw;">\u9080\u8BF7\u597D\u53CB \u5404\u5F975\u5143 \u6BCF\u4E00\u4E2A\u597D\u53CB\uFF08\u65B0\u5BA2\u6237\uFF09\u6765\u526A\uFF0C\u53EF\u518D\u83B7\u5F97\u4E00\u5F205\u5143\u9996\u5355\u51CF\u4F18\u60E0\u5238</td>\n                    <td style="    width: 32%;"><span style="    color: white;\n        background: rgb(18,40,81);\n        padding: 5% 0%;\n        width: 60%;\n        margin-left: 20%;\n        text-align: center;\n        font-size: 3vw;">\u53BB\u9080\u8BF7</span></td>\n                </tr>\n            </table>\n        </div>\n    </div>\n\n    <table v-for="ticket in obj.list" class="ticket" :style="\'background:\'+((ticket.isRed)?\'url(https://wx-1253594735.cosgz.myqcloud.com/1253480904/barber/images/bg-coupon.jpg)\':\'url(https://wx-1253480904.cosgz.myqcloud.com/barber/images/bg-couponGray.jpg)\')+\';background-size:100% 100%\'">\n        <tr>\n            <td>\n                {{ticket.discount}}\n            </td>\n            <td>\n                <b style="font-size:4vw">\uFFE5</b>\n                <span style="color:#ddd;display:inline;" :class="(ticket.from)?\'\':\'disn\'">{{(ticket.from)?\'(\u662F\'+ticket.from+\'\u5206\u4EAB\u7ED9\u60A8\u7684)\':\'\'}}</span>\n                <span style="color:#ddd;display:inline;" :class="(ticket.to)?\'\':\'disn\'">{{(ticket.to)?\'(\'+ticket.to+\'\u9886\u53D6\u4E86\u60A8\u7684\u5206\u4EAB\u5238)\':\'\'}}</span>\n                <br/>\n                \u4F7F\u7528\u8303\u56F4\uFF1A{{ticket.studio?ticket.studio:\'\u901A\u7528\'}}&nbsp;&nbsp;\u8BE6\u7EC6><br/>\n                \u6709\u6548\u671F\u81F3{{ticket.endTime}}\n                {{ticket.isRed?\'(\u5269\'+getDaydiff(ticket.endTime)+\'\u5929)\':\'\'}}\n            </td>\n            <td>\n                <div style="background:none;color:#fff;">\n                    {{ticket.name}}\n                </div>\n            </td>\n        </tr>\n    </table>\n</div>'));
    }

    _createClass(mytickets, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {
                    list: [],
                    ticketTitle: [{ text: '', num: 0, list: [], choose: true }, { text: '', num: 0, list: [], choose: false }, { text: '', num: 0, list: [], choose: false }]
                },
                methods: {
                    share: function share() {
                        Message.toast('点击右上角，请分享给您的好友', 3);
                    },
                    init: function init() {
                        var _this3 = this;

                        Util.ajax('{}', db.data.api + 'getUserTicketList.php', function (data) {
                            if (data.e !== 0) {} else {
                                var i = 0;
                                for (var key in data.data) {
                                    if (data.data.hasOwnProperty(key)) {
                                        _this3.ticketTitle[i].text = key;
                                        if (_this3.ticketTitle[i].list.length === 0) {
                                            _this3.ticketTitle[i].list = JSON.parse(JSON.stringify(data.data[key]));
                                        } else {
                                            _this3.ticketTitle[i].list = data.data[key];
                                        }
                                        _this3.ticketTitle[i].num = _this3.ticketTitle[i].list.length;
                                        i++;
                                    }
                                }
                            }
                        });
                    },
                    getDaydiff: function getDaydiff(end_time) {
                        var date1, date2, timeDiff;
                        if (!!end_time === false) end_time = "2018-12-28";

                        if (end_time.length > 11) {
                            end_time = end_time.substr(0, 10);
                        }

                        date1 = new Date();
                        date2 = new Date(end_time);
                        timeDiff = date2.getTime() - date1.getTime();
                        timeDiff = parseInt(timeDiff / 1000);
                        return Math.ceil(timeDiff / 86400);
                    },
                    useTicket: function useTicket(studio_name, status, isEnd) {
                        if (status != 0) {
                            return;
                        }

                        if (isEnd) {
                            Message.toast('活动已经结束');
                            return;
                        }

                        var i;
                        var _this = this;
                        //今天是否有未付款 状态的 项目
                        Util.ajax('{}', db.data.api + '?r=user/has_unpay', function (data) {
                            if (data[Api.CODE] === 0) {
                                _this.jump('orderlist');
                                setTimeout(function () {
                                    orderlist.vue.orderChoose(1);
                                }, 100);
                            } else {
                                for (i = 0; i < db.data.studioList.length; i++) {
                                    if (db.data.studioList[i].name.trim() === studio_name.trim()) {
                                        db.data.detail_studio_index = i;
                                        _this.jump('detail_studio');
                                    }
                                }
                            }
                        });
                    },
                    orderChoose: function orderChoose(index) {
                        var i = void 0;
                        for (i = 0; i < this.ticketTitle.length; i++) {
                            this.ticketTitle[i].choose = false;
                        }
                        this.ticketTitle[index].choose = true;
                    }
                }
            });
        }
    }]);

    return mytickets;
}(Page);
//////////
