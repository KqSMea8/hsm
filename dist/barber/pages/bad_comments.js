'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bad_comments = function (_Page) {
    _inherits(bad_comments, _Page);

    function bad_comments(hash) {
        _classCallCheck(this, bad_comments);

        var css = '\n<style>\n    #bad_comments_vue ,#comment_list_vue{background:#f0f0f0}\n    #bad_comments_vue .bar,#comment_list_vue .bar{position:fixed;background:#fff;height:7%;z-index:99;font-size: 3vw;}\n    #bad_comments_vue .bar td,#comment_list_vue .bar td{text-align:center}\n    #bad_comments_vue .bar td.active,#comment_list_vue .bar td.active{border-bottom:solid 1px red;}\n    #bad_comments_vue .bar img,#comment_list_vue .bar img{width:14%;}\n    #bad_comments_vue .comment_box,#comment_list_vue .comment_box{background:#fff;width:94%;margin-left:3%;margin-bottom:3%;font-size: 3vw;}\n    #bad_comments_vue .comment_line_1 td:nth-of-type(1),#comment_list_vue .comment_line_1 td:nth-of-type(1){width:5%;padding:3%}\n    #bad_comments_vue .comment_line_1 td:nth-of-type(2),#comment_list_vue .comment_line_1 td:nth-of-type(2){width:10%}\n    #bad_comments_vue .comment_line_1 td:nth-of-type(3),#comment_list_vue .comment_line_1 td:nth-of-type(3){width:10%;padding-right:4%}\n    #bad_comments_vue .comment_line_1 td:nth-of-type(3) img,#comment_list_vue .comment_line_1 td:nth-of-type(3) img{width:10%;transform:scale(1.2)}\n    #bad_comments_vue .comment_line_1 .head,#comment_list_vue .comment_line_1 .head{width:100%;border-radius:50%}\n    #bad_comments_vue .content,#comment_list_vue .content{padding:0 4% 3%;word-break:break-all}\n    #bad_comments_vue .image,#comment_list_vue .image{padding:0 3% 3%}\n    #bad_comments_vue .image img,#comment_list_vue .image img{width:30%;margin-right:3%;}\n    #bad_comments_vue .time,#comment_list_vue .time{color:#aaa;padding:0 3% 2%}\n    #bad_comments_vue .box_box,#comment_list_vue .box_box{height: 93%;overflow: scroll;margin-top: 12%;padding-top: 3%;}\n    #bad_comments_vue div{display:block;}\n</style>\n';
        var html = '\n<div class="scroll bad_comments pos_r h100">\n    <p style="font-size: 4vw;padding: 2% 5%;margin: 0;color: #777;">\n        \u5DEE\u8BC4\u5217\u8868\n    </p>\n    <div class="comment_box" v-for="comment in comments">\n        <table class="comment_line_1">\n            <tr>\n                <td>\n                    <img class="head" :src="comment.userAvt" />\n                </td>\n                <td>\n                    <span>{{comment.userName}}</span><br/>\n                    <span>{{comment.userPhone}}</span>\n                </td>\n                <td class="txtr">\n                    <span>&nbsp;</span><br/>\n                    <img v-for="gold in comment.goldStar" :src="db.data.oss+\'barber/images/start_orange.svg\'"/>\n                    <img v-for="gray in comment.grayStar" :src="db.data.oss+\'barber/images/start_gray.svg\'"/>\n                    <span>{{comment.goldStar}}.0\u5206</span>\n                </td>\n            </tr>\n        </table>\n        <div class="content">\n            {{comment.content}}\n        </div>\n        <div class="image" v-if="comment.img.length > 0">\n            <img @click="launcher.look(comment.img.join(\'|\'), opu)" v-for="opu in comment.img" :src="opu">\n        </div>\n        <div class="time w100 txtr">\n            \u53D1\u578B\u5E08:{{comment.barberName}} &nbsp;&nbsp;{{comment.create_time}}\n        </div>\n    </div>\n</div>\n';
        return _possibleConstructorReturn(this, (bad_comments.__proto__ || Object.getPrototypeOf(bad_comments)).call(this, hash, html, css));
    }

    _createClass(bad_comments, [{
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

                    var obj = $('.bad_comments');
                    obj.on('touchstart', function () {
                        if (obj[0].scrollHeight - obj.scrollTop() < 7 * $('body').height()) {
                            var dataStr = '{\n                            "start":' + _this2.start + ',\n                            "count":' + _this2.count + '\n                        }';
                            Util.ajax(dataStr, db.data.api + 'getBadCommentsList.php', function (data) {
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
                        Util.ajax(dataStr, db.data.api + 'getBadCommentsList.php', function (data) {
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

    return bad_comments;
}(Page);

////////
