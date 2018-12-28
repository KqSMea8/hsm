'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fixed_guest = function (_Page) {
    _inherits(fixed_guest, _Page);

    function fixed_guest(hash) {
        _classCallCheck(this, fixed_guest);

        var css = '\n<style>\n    #fixed_guest_vue ,#comment_list_vue{background:#f0f0f0}\n    #fixed_guest_vue .bar,#comment_list_vue .bar{position:fixed;background:#fff;height:7%;z-index:99;font-size: 3vw;}\n    #fixed_guest_vue .bar td,#comment_list_vue .bar td{text-align:center}\n    #fixed_guest_vue .bar td.active,#comment_list_vue .bar td.active{border-bottom:solid 1px red;}\n    #fixed_guest_vue .bar img,#comment_list_vue .bar img{width:14%;}\n    #fixed_guest_vue .comment_box,#comment_list_vue .comment_box{background:#fff;width:94%;margin-left:3%;margin-bottom:3%;font-size: 3vw;}\n    #fixed_guest_vue .comment_line_1 td:nth-of-type(1),#comment_list_vue .comment_line_1 td:nth-of-type(1){width:5%;padding:3%}\n    #fixed_guest_vue .comment_line_1 td:nth-of-type(2),#comment_list_vue .comment_line_1 td:nth-of-type(2){width:10%}\n    #fixed_guest_vue .comment_line_1 td:nth-of-type(3),#comment_list_vue .comment_line_1 td:nth-of-type(3){width:10%;padding-right:4%}\n    #fixed_guest_vue .comment_line_1 td:nth-of-type(3) img,#comment_list_vue .comment_line_1 td:nth-of-type(3) img{width:10%;transform:scale(1.2)}\n    #fixed_guest_vue .comment_line_1 .head,#comment_list_vue .comment_line_1 .head{width:100%;border-radius:50%}\n    #fixed_guest_vue .content,#comment_list_vue .content{padding:0 4% 3%;word-break:break-all}\n    #fixed_guest_vue .image,#comment_list_vue .image{padding:0 3% 3%}\n    #fixed_guest_vue .image img,#comment_list_vue .image img{width:30%;margin-right:3%;}\n    #fixed_guest_vue .time,#comment_list_vue .time{color:#aaa;padding:0 3% 2%}\n    #fixed_guest_vue .box_box,#comment_list_vue .box_box{height: 93%;overflow: scroll;margin-top: 12%;padding-top: 3%;}\n    #fixed_guest_vue div{display:block;}\n</style>\n';
        var html = '\n<div class="scroll fixed_guest pos_r h100">\n    <p style="font-size: 4vw;padding: 2% 5%;margin: 0;color: #777;">\n        \u56FA\u5B9A\u5BA2\u5386\u53F2\u8BB0\u5F55\n    </p>\n    <div class="comment_box" v-for="comment in comments">\n        <table class="comment_line_1">\n            <tr>\n                <td>\n                    <span>\u56FA\u5B9A\u5BA2</span><br/>\n                    <span>{{comment.currentMonthFixedGuestTotal}}</span>\n                </td>\n                <td>\n                    <span>\u5F53\u6708\u603B\u5BA2\u6570</span><br/>\n                    <span>{{comment.currentMonthGuestTotal}}</span>\n                </td>\n            </tr>\n        </table>\n        <div class="time w100 txtr">\n            {{comment.yearMonth}}\n        </div>\n    </div>\n</div>\n';
        return _possibleConstructorReturn(this, (fixed_guest.__proto__ || Object.getPrototypeOf(fixed_guest)).call(this, hash, html, css));
    }

    _createClass(fixed_guest, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                    this.init();
                },
                compiled: function compiled() {
                    var _this2 = this;

                    var obj = $('.fixed_guest');
                    obj.on('touchstart', function () {
                        if (obj[0].scrollHeight - obj.scrollTop() < 7 * $('body').height()) {
                            var dataStr = '{\n                            "start":' + _this2.start + ',\n                            "count":' + _this2.count + '\n                        }';
                            Util.ajax(dataStr, db.data.api + 'getFixedGuestHistoryList.php', function (data) {
                                _this2.renderStudioComments(data, true);
                            });
                        }
                    });
                },

                data: {
                    start: 0,
                    count: 30,
                    comments: []
                },
                methods: {
                    init: function init() {
                        var _this3 = this;

                        this.comments = [];
                        var dataStr = '{\n                        "start":0,\n                        "count":' + (this.comments.length || this.count) + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getFixedGuestHistoryList.php', function (data) {
                            _this3.renderStudioComments(data);
                        });
                    },
                    renderStudioComments: function renderStudioComments(data) {
                        var isAppend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                        if (data.e !== 0) {} else {
                            var obj = data.data;
                            if (obj.Comments.length > 0) {
                                this.start = obj.end;
                                if (this.comments.length === 0) {
                                    this.comments = JSON.parse(JSON.stringify(obj.Comments));
                                } else {
                                    if (isAppend) {
                                        var _iteratorNormalCompletion = true;
                                        var _didIteratorError = false;
                                        var _iteratorError = undefined;

                                        try {
                                            for (var _iterator = obj.Comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                                var comment = _step.value;

                                                this.comments.push(comment);
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
                                        this.comments = obj.Comments;
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    }]);

    return fixed_guest;
}(Page);

////////
