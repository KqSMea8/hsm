"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var orderlist = function (_Page) {
    _inherits(orderlist, _Page);

    function orderlist(hash) {
        _classCallCheck(this, orderlist);

        return _possibleConstructorReturn(this, (orderlist.__proto__ || Object.getPrototypeOf(orderlist)).call(this, hash, "<style>\n    #mytickets_vue,#orderlist_vue{float:left;background:#efefef;width:100%}\n    .orderlistHeader{background:#fff;float:left;width:100%;height:13.33333vw;position:fixed}\n    .orderlistHeader .item{float:left;width:25%;height:100%;display:flex;justify-content:center;align-items:center;text-align: center}\n    .orderlistHeader .item span{color:#000;line-height:13.33333vw;font-size:4vw}\n    .orderlistHeader .item.on span{border-bottom:2px solid #eb5789}\n    .orderlistList{float:left;height:91%;width:100%;margin-top:15%;overflow:scroll;-webkit-overflow-scrolling:touch;}\n    .orderlistList .item{background:#fff;float:left;width:96vw;margin-left:2vw;padding-left:4.25926vw;padding-right:4.25926vw;margin-top:1.85185vw;}\n    .orderlistList .item header{float:left;width:100%;height:11.85185vw;line-height:11.85185vw}\n    .orderlistList .item header .title{float:left;font-size:4vw}\n    .orderlistList .item header .status{float:right;color:#b57f8f;font-size:3.2vw}\n    .orderlistList .item article{float:left;width:100%;font-size:3.4vw;box-sizing:border-box}\n    .orderlistList .item article .items{line-height:6vw}\n    .orderlistList span.desc{color:#000;line-height:5vw}\n    .orderlistList span.desc._{position:relative;top:-1vw}\n    .orderlistList span.number{font-weight:700;font-size:5.6vw;color:#df0045;padding-left:2.77778vw}\n    .orderlistList span.wait{color:#b57f8f}\n    .orderlistList .item .floatRight{float:right}\n    .orderlistList .item article .date{color:#a1a1a1;float:left;margin-top:1vw}\n    .orderlistList .item footer{float:left;width:100%;height:10.81481vw;line-height:14.81481vw;color:#9f9f9f;font-size:3.6vw}\n    .orderlistList .item footer .btn{width:25.92593vw;float:right;text-align:center}\n    .orderlistList .item footer img{display:inline-block;width:5.55556vw;height:5.55556vw;position:relative;top:1.2vw}\n    #all_notice .main{width: 100%;height: 80%;overflow: scroll;padding: 0 1%;}\n    #all_notice .ticket{margin-bottom: 4%;width: 100%;height: 24%;}\n    #all_notice .ticket img{width:100%}\n    #all_notice .ticket td>div{padding:3% 11%;text-align:center;font-size:13px;display:inline-block}\n    #all_notice .ticket td:nth-of-type(1){width:7%;font-size:45px;color:#fff;text-align:center}\n    #all_notice .ticket td:nth-of-type(2){width:24%;font-size:10px;color:#fff}\n    #all_notice .ticket td:nth-of-type(3){width:15%;text-align:center}\n</style>\n<div class=\"orderlistHeader\">\n    <div class=\"item {{(obj.choose)?'on':''}}\" v-for=\"obj in orderTitle\" @touchstart=\"orderChoose($index)\">\n        <span>{{$key}}</span>\n    </div>\n</div>\n<div class=\"orderlistList {{obj.choose?'':'disn'}}\" v-for=\"obj in orderTitle\">\n    <div class=\"item\" v-for=\"order in obj.list\">\n        <header>\n            <span class=\"title\">\n                {{order.studioName}}\n            </span>\n            <span class=\"status\">{{order.desc}}</span>\n        </header>\n        <article>\n            <div class=\"items\">\n                <span class=\"desc _\">NO\uFF1A</span><span class=\"number\">{{order.name}}</span>\n            </div>\n            <div class=\"items\">\n                <span class=\"desc\">\u670D\u52A1\u9879\u76EE\uFF1A</span><span>{{order.srv}}</span>\n                <div class=\"float _\" v-if=\"order.state==0\">\n                    <span class=\"desc\">\u7B49\u5F85\u4EBA\u6570\uFF1A</span><span class=\"wait\">{{order.wait}}</span>\n                </div>\n            </div>\n            <div class=\"items\">\n                <span class=\"desc\" v-if=\"order.state==0\">\u7B49\u5F85\u65F6\u95F4\uFF1A</span><span class=\"wait\" v-if=\"order.state==0\">{{order.wait}}</span>\n                <div class=\"floatRight\">\n                    <span class=\"desc\">\u53D1\u578B\u5E08\uFF1A</span><span class=\"wait\">{{order.barber}}</span>\n                </div>\n            </div>\n            <div class=\"items\">\n                <span class=\"desc\">\u9879\u76EE\u4EF7\u683C\uFF1A</span><span>\uFFE5{{order.cost}}</span>\n            </div>\n            <div class=\"items\" v-if=\"order.ticket\">\n                <span class=\"desc\">\u4F18\u60E0\u5238\uFF1A</span><span>\uFFE5{{order.ticket}}</span>\n            </div>\n            <div class=\"items\">\n                <span class=\"desc\">\u5730\u5740\uFF1A</span><span>{{order.studioPlace}}</span>\n            </div>\n            <!--<div class=\"items\">-->\n            <!--<span class=\"desc\">\u7535\u8BDD\uFF1A</span><span>{{order.tel}}</span>-->\n            <!--</div>-->\n            <div class=\"items\">\n            <span class=\"date\">\n                {{order.time}}\n            </span>\n            </div>\n        </article>\n        <footer>\n            <!--<img src=\"db.data.oss+'barber/images/icon.png'\">-->\n            <!--<span>\u4E0A\u4F20\u51CF\u6CD5\u53C2\u8003\u53D1\u884C</span>-->\n            <!--<div class=\"btn btn-success\" v-if=\"order.state==4\" @click=\"into_service(order)\">\u8FDB\u5165\u670D\u52A1</div>-->\n            <div class=\"btn btn-default\" v-if=\"$parent.$index==4\">\u53EB\u53F7\u4E2D</div>\n            <div class=\"btn btn-default\" v-if=\"$parent.$index==0\" @click=\"orderClick(order)\">\u53D6\u6D88\u6392\u961F</div>\n            <div class=\"btn btn-success\" v-if=\"$parent.$index==1 && order.waitPay == 1\" @touchstart=\"checkOrder(order)\">\u4ED8\u6B3E</div>\n            <!--<div class=\"btn btn-default\" v-if=\"$parent.$index==2\" @touchstart=\"checkOrder(order)\">\u67E5\u770B\u8BA2\u5355</div>-->\n            <div class=\"btn btn-default\" v-if=\"$parent.$index==2\" @touchstart=\"jump2comment(order)\">\u8FDB\u5165\u8BC4\u8BBA</div>\n        </footer>\n    </div>\n</div>\n"));
    }

    _createClass(orderlist, [{
        key: "vue_",
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                },
                compiled: function compiled() {
                    var i = void 0;
                    for (i = 1; i < m.pages.length; i++) {
                        m.addPage(m.pages[i]);
                    }
                },

                data: {
                    orderTitle: null,
                    isService: 0
                },
                methods: {
                    init: function init() {
                        var _this2 = this;

                        Util.ajax(null, db.data.api + "getUserOrderList.php", function (data) {
                            _this2.renderOrderList(data);
                            console.log(data);
                        });
                    },
                    renderOrderList: function renderOrderList(data) {
                        if (data.e !== 0) {} else {
                            data = data.data;
                            if (this.orderTitle === null) {
                                this.orderTitle = {};
                                var i = 0;

                                for (var key in data) {
                                    if (data.hasOwnProperty(key)) {
                                        if (key == "isService") {
                                            this.isService = data[key];
                                            break;
                                        }
                                    }
                                }

                                for (var key in data) {
                                    if (data.hasOwnProperty(key)) {
                                        if (key == "isService") {
                                            continue;
                                        }
                                        if (this.isService == 1) {
                                            this.orderTitle[key] = {
                                                choose: i === 1 ? true : false,
                                                list: data[key]
                                            };
                                            i++;
                                        } else {
                                            this.orderTitle[key] = {
                                                choose: i === 0 ? true : false,
                                                list: data[key]
                                            };
                                            i++;
                                        }
                                    }
                                }

                                this.orderTitle = JSON.parse(JSON.stringify(this.orderTitle));
                            } else {
                                for (var key in data) {
                                    if (data.hasOwnProperty(key)) {

                                        if (key == "isService") {
                                            continue;
                                        }

                                        this.orderTitle[key].list = data[key];
                                    }
                                }
                            }
                        }
                    },
                    orderChoose: function orderChoose(index) {
                        var _this3 = this;

                        var i = 0;
                        for (var key in this.orderTitle) {
                            if (this.orderTitle.hasOwnProperty(key)) {
                                if (i === index) {
                                    this.orderTitle[key].choose = true;
                                } else {
                                    this.orderTitle[key].choose = false;
                                }
                                i++;
                            }
                        }
                        Util.ajax(null, db.data.api + "getUserOrderList.php", function (data) {
                            _this3.renderOrderList(data);
                        });
                    },
                    orderClick: function orderClick(order) {
                        var _this4 = this;

                        var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                        var cancel = function cancel() {
                            var dataStr = "{\n                            \"oid\" : " + Math.floor(order.id) + "\n                        }";
                            Util.ajax(dataStr, db.data.api + "cancelOrder.php", function (data) {
                                if (data.e !== 0) {
                                    Message.toast('取消订单失败');
                                } else {
                                    Util.ajax(null, db.data.api + "getUserOrderList.php", function (data) {
                                        _this4.renderOrderList(data);
                                    });
                                }
                            });
                        };
                        if (immediate) {
                            cancel();
                        } else {
                            MessageBarber.confirm('确定要取消排队吗', function () {
                                cancel();
                            });
                        }
                    },
                    orderSuccess: function orderSuccess(order) {
                        location.href = db.data.domain + "src/pub/example/jsapi.php?order_id=" + order.id;
                    },
                    checkOrder: function checkOrder(order) {
                        db.data.jsapi_order_id = Math.floor(order.id);
                        this.jump('jsapi');
                    },
                    jump2comment: function jump2comment(order) {
                        db.data.comment_order_id = order.id;
                        this.jump('comment');
                    },
                    look: function look(imgStr) {
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
                                current: '', // 当前显示图片的http链接
                                urls: urls // 需要预览的图片http链接列表
                            });
                        }
                    }
                }
            });
        }
    }]);

    return orderlist;
}(Page);
//
