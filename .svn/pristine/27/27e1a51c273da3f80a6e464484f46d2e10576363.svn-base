'use strict';

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

var comment_list = function (_Page) {
    _inherits(comment_list, _Page);

    function comment_list(hash) {
        _classCallCheck(this, comment_list);

        return _possibleConstructorReturn(this, (comment_list.__proto__ || Object.getPrototypeOf(comment_list)).call(this, hash, "<style>\n    #latest_comment_vue ,#comment_list_vue{background:#f0f0f0}\n    #latest_comment_vue .bar,#comment_list_vue .bar{position:fixed;background:#fff;height:7%;z-index:99}\n    #latest_comment_vue .bar td,#comment_list_vue .bar td{text-align:center}\n    #latest_comment_vue .bar td.active,#comment_list_vue .bar td.active{border-bottom:solid 1px red;}\n    #latest_comment_vue .bar img,#comment_list_vue .bar img{width:14%;}\n    #latest_comment_vue .comment_box,#comment_list_vue .comment_box{background:#fff;width:94%;margin-left:3%;margin-bottom:3%}\n    #latest_comment_vue .comment_line_1 td:nth-of-type(1),#comment_list_vue .comment_line_1 td:nth-of-type(1){width:5%;padding:3%}\n    #latest_comment_vue .comment_line_1 td:nth-of-type(2),#comment_list_vue .comment_line_1 td:nth-of-type(2){width:10%}\n    #latest_comment_vue .comment_line_1 td:nth-of-type(3),#comment_list_vue .comment_line_1 td:nth-of-type(3){width:10%;padding-right:4%}\n    #latest_comment_vue .comment_line_1 td:nth-of-type(3) img,#comment_list_vue .comment_line_1 td:nth-of-type(3) img{width:10%;transform:scale(1.2)}\n    #latest_comment_vue .comment_line_1 .head,#comment_list_vue .comment_line_1 .head{width:100%;border-radius:50%}\n    #latest_comment_vue .content,#comment_list_vue .content{padding:0 4% 3%;word-break:break-all}\n    #latest_comment_vue .image,#comment_list_vue .image{padding:0 3% 3%}\n    #latest_comment_vue .image img,#comment_list_vue .image img{width:30%;margin-right:3%;}\n    #latest_comment_vue .time,#comment_list_vue .time{color:#aaa;padding:0 3% 2%}\n    #latest_comment_vue .box_box,#comment_list_vue .box_box{height: 93%;margin-top: 12%;padding-top: 3%;}\n</style>\n<table class=\"w100 bar\">\n    <tr>\n        <td v-for=\"title in titles\" @touchstart=\"titleClick($index)\" class=\"{{title.active?'active':''}}\">{{title.count}}<br/>\n            <img v-for=\"i in [0,1,2,3,4]\" :src=\"(i<$parent.$index)?db.data.oss+'barber/images/start_gray.svg':db.data.oss+'barber/images/start_orange.svg'\"/>\n        </td>\n    </tr>\n</table>\n\n<div class=\"box_box scroll pos_r xxx\" v-for=\"star in [5,4,3,2,1]\" :style=\"((titles[$index].active)?'':'display:none')\">\n    <div class=\"comment_box\" v-for=\"comment in comments[star]\">\n        <table class=\"comment_line_1\">\n            <tr>\n                <td>\n                    <img class=\"head\" :src=\"comment.userAvt\" />\n                </td>\n                <td>\n                    <span>{{comment.userName}}</span><br/>\n                    <span>{{comment.userPhone}}</span>\n                </td>\n                <td class=\"txtr\">\n                    <span>&nbsp;</span><br/>\n                    <img v-for=\"i in [0,1,2,3,4]\" :src=\"(i<$parent.$parent.$index)?db.data.oss+'barber/images/start_gray.svg':db.data.oss+'barber/images/start_orange.svg'\"/>\n                    <span>{{5-$parent.$index}}.0\u5206</span>\n                </td>\n            </tr>\n        </table>\n        <div class=\"content\">\n            {{comment.content}}\n        </div>\n        <div class=\"image\" v-if=\"comment.img.length > 0\">\n            <img @click=\"launcher.look(comment.img.join('|'), opu)\" v-for=\"opu in comment.img\" :src=\"opu\">\n        </div>\n        <div class=\"time w100 txtr\">\n            {{comment.create_time}}\n        </div>\n    </div>\n</div>\n\n"));
    }

    _createClass(comment_list, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                },
                compiled: function compiled() {
                    var _this = this;
                    $('.xxx').bind('touchstart', function () {
                        var diff = this.scrollHeight - this.scrollTop;
                        if (diff < 5 * $('body').height()) {
                            _this.addComments();
                        }
                    });
                },

                data: {
                    titles: [],
                    title_index: 0,
                    getCount: 0,
                    start: {
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0
                    },
                    count: 30,
                    comments: {
                        1: [],
                        2: [],
                        3: [],
                        4: [],
                        5: []
                    },
                    nowStar: 5
                },
                methods: {
                    init: function init() {
                        this.comments = {
                            1: [],
                            2: [],
                            3: [],
                            4: [],
                            5: []
                        };
                        this.titles = JSON.parse(JSON.stringify([{ star: 5, count: db.data.score5, active: true }, { star: 4, count: db.data.score4, active: false }, { star: 3, count: db.data.score3, active: false }, { star: 2, count: db.data.score2, active: false }, { star: 1, count: db.data.score1, active: false }]));
                        this.getComments();
                    },
                    getComments: function getComments() {
                        var _this3 = this;

                        var dataStr = '{\n                        "start":0,\n                        "star":' + this.nowStar + ',\n                        "count":' + (this.comments[this.nowStar].length || this.count) + ',\n                        "bid":' + db.data.nowBarberId + ',\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getBarberComments.php', function (data) {
                            _this3.renderBarberComments(data);
                        });
                    },
                    addComments: function addComments() {
                        var _this4 = this;

                        var dataStr = '{\n                        "start":' + this.start[this.nowStar] + ',\n                        "star":' + this.nowStar + ',\n                        "count":' + this.count + ',\n                        "bid":' + db.data.nowBarberId + ',\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getBarberComments.php', function (data) {
                            _this4.renderBarberComments(data, true);
                        });
                    },
                    renderBarberComments: function renderBarberComments(data) {
                        var isAppend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

                        if (data.e !== 0) {} else {
                            var obj = data.data;
                            if (obj.Comments.length > 0) {
                                this.start[this.nowStar] = obj.end;
                                if (this.comments[this.nowStar].length === 0) {
                                    this.comments[this.nowStar] = JSON.parse(JSON.stringify(obj.Comments));
                                } else {
                                    if (isAppend) {
                                        var _iteratorNormalCompletion = true;
                                        var _didIteratorError = false;
                                        var _iteratorError = undefined;

                                        try {
                                            for (var _iterator = obj.Comments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                                var comment = _step.value;

                                                this.comments[this.nowStar].push(comment);
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
                                        this.comments[this.nowStar] = obj.Comments;
                                    }
                                }
                            }
                        }
                        console.log(this.comments);
                    },
                    titleClick: function titleClick(index) {
                        var i = void 0;
                        for (i = 0; i < this.titles.length; i++) {
                            if (index === i) {
                                this.titles[i].active = true;
                                this.title_index = i;
                            } else {
                                this.titles[i].active = false;
                            }
                        }
                        this.nowStar = 5 - index;
                        this.getComments();
                    }
                }
            });
        }
    }]);

    return comment_list;
}(Page);
//
