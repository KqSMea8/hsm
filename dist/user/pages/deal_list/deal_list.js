'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var deal_list = function (_Page) {
    _inherits(deal_list, _Page);

    function deal_list(hash) {
        _classCallCheck(this, deal_list);

        return _possibleConstructorReturn(this, (deal_list.__proto__ || Object.getPrototypeOf(deal_list)).call(this, hash, '<style>\n    #deal_list_vue ,#comment_list_vue{background:#f0f0f0}\n    #deal_list_vue .bar,#comment_list_vue .bar{position:fixed;background:#fff;height:7%;z-index:99;font-size: 3vw;}\n    #deal_list_vue .bar td,#comment_list_vue .bar td{text-align:center}\n    #deal_list_vue .bar td.active,#comment_list_vue .bar td.active{border-bottom:solid 1px red;}\n    #deal_list_vue .bar img,#comment_list_vue .bar img{width:14%;}\n    #deal_list_vue .comment_box,#comment_list_vue .comment_box{background:#fff;width:94%;margin-left:3%;margin-bottom:3%;font-size: 4vw;}\n    #deal_list_vue .comment_line_1 td:nth-of-type(1),#comment_list_vue .comment_line_1 td:nth-of-type(1){width:5%;padding:3%}\n    #deal_list_vue .comment_line_1 td:nth-of-type(2),#comment_list_vue .comment_line_1 td:nth-of-type(2){width:10%}\n    #deal_list_vue .comment_line_1 td:nth-of-type(3),#comment_list_vue .comment_line_1 td:nth-of-type(3){width:10%;padding-right:4%}\n    #deal_list_vue .comment_line_1 td:nth-of-type(3) img,#comment_list_vue .comment_line_1 td:nth-of-type(3) img{width:10%;transform:scale(1.2)}\n    #deal_list_vue .comment_line_1 .head,#comment_list_vue .comment_line_1 .head{width:100%;border-radius:50%}\n    #deal_list_vue .content,#comment_list_vue .content{padding:0 4% 3%;word-break:break-all}\n    #deal_list_vue .image,#comment_list_vue .image{padding:0 3% 3%}\n    #deal_list_vue .image img,#comment_list_vue .image img{width:30%;margin-right:3%;}\n    #deal_list_vue .time,#comment_list_vue .time{color:#aaa;padding:0 3% 2%}\n    #deal_list_vue .box_box,#comment_list_vue .box_box{height: 93%;overflow: scroll;margin-top: 12%;padding-top: 3%;}\n    .rechargeFontColor{color: #ff9f05;}\n    .giveFontColor{color: #006600;}\n    .grey{color: #bababa;}\n</style>\n<div class="scroll deal_list pos_r h100" style="font-family: \u9ED1\u4F53;">\n    <p style="font-size: 4vw;padding: 2% 5%;margin: 0;color: #777;">\n        \u6D88\u8D39\u660E\u7EC6\n    </p>\n    <div class="comment_box" v-for="dealDetail in dealDetailList">\n        <table class="comment_line_1">\n            <tr>\n                <td style="width: 45%;">\n                    <span class="{{dealDetail.deal_type == 1?\'rechargeFontColor\':\'\'}}{{dealDetail.deal_type == 2?\'giveFontColor\':\'\'}}">{{dealDetail.deal_type_name}}</span>\n                </td>\n                <td>\n                    <span class="{{dealDetail.deal_type == 1?\'rechargeFontColor\':\'\'}}{{dealDetail.deal_type == 2?\'giveFontColor\':\'\'}}">{{dealDetail.operational_character}}{{dealDetail.price}}</span>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <span class="grey">{{dealDetail.create_time}}</span>\n                </td>\n                <td>\n                    <span class="grey">\u4F59\u989D:{{dealDetail.present_amount}}</span>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>'));
    }

    _createClass(deal_list, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                data: {
                    dealDetailList: [],
                    start: 0,
                    count: 10
                },
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                    this.init();
                },
                compiled: function compiled() {
                    var _this2 = this;

                    var obj = $('.deal_list');
                    obj.on('touchstart', function () {
                        if (obj[0].scrollHeight - obj.scrollTop() < 7 * $('body').height()) {
                            var dataStr = '{\n                            "start":' + _this2.start + ',\n                            "count":' + _this2.count + ',\n                            "deal_type": ' + _this2.db.deal_type + '\n                        }';
                            Util.ajax(dataStr, db.data.api + 'getDealDetailList.php', function (data) {
                                _this2.renderDealDetail(data, true);
                            });
                        }
                    });
                },

                methods: {
                    init: function init() {
                        var _this3 = this;

                        var dataStr = '{\n                        "start":0,\n                        "count":' + (this.dealDetailList.length || this.count) + ',\n                        "deal_type": ' + this.db.deal_type + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getDealDetailList.php', function (data) {
                            _this3.renderDealDetail(data);
                        });
                    },
                    renderDealDetail: function renderDealDetail(data) {
                        var isAppend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                        if (data.e !== 0) {} else {
                            var obj = data.data;
                            if (obj.dealDetailList.length > 0) {
                                this.start = obj.end;
                                if (this.dealDetailList.length === 0) {
                                    this.dealDetailList = JSON.parse(JSON.stringify(obj.dealDetailList));
                                } else {
                                    if (isAppend) {
                                        var _iteratorNormalCompletion = true;
                                        var _didIteratorError = false;
                                        var _iteratorError = undefined;

                                        try {
                                            for (var _iterator = obj.dealDetailList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                                var dealDetail = _step.value;

                                                this.dealDetailList.push(dealDetail);
                                            }
                                        } catch (err) {
                                            _didIteratorError = true;
                                            _iteratorError = err;
                                        } finally {
                                            try {
                                                if (!_iteratorNormalCompletion && _iterator.return) {
                                                    _iterator.return();
                                                }
                                            } finally {
                                                if (_didIteratorError) {
                                                    throw _iteratorError;
                                                }
                                            }
                                        }
                                    } else {
                                        this.dealDetailList = obj.dealDetailList;
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    }]);

    return deal_list;
}(Page);

////
