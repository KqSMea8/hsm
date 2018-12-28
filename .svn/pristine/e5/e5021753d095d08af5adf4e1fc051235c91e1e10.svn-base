'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ticket = function (_Page) {
    _inherits(ticket, _Page);

    function ticket(hash) {
        _classCallCheck(this, ticket);

        return _possibleConstructorReturn(this, (ticket.__proto__ || Object.getPrototypeOf(ticket)).call(this, hash, '<style>\n    #ticket_vue{overflow: hidden}\n    #ticket_vue .main{background: #fff;width: 92%;height: auto;position: relative;text-align: center;margin-left: 4%;padding-bottom: 16%}\n    #ticket_vue .talk{width: 94%;margin-left: 3%;font-size: 6vw}\n    #ticket_vue .main .info{font-size: 2.6vw;color: #aaa}\n    #ticket_vue .main .info:nth-of-type(1){margin-top: 2%}\n    #ticket_vue .main .info:nth-of-type(2){margin-bottom: 2%}\n    #ticket_vue .talk .t1{padding: 6% 0 0}\n    #ticket_vue .talk .t1 img{width: 15%;border-radius: 50%;border: solid 2px #ddd}\n    #ticket_vue .talk .t1 span:nth-of-type(2){display: inline-block;width: 66%;text-align: right;font-size: 40%;color: #777}\n    #ticket_vue .talk .t2{padding: 4% 0 6%;border-bottom: 1px solid #aaa;font-size: 58%;color: #666}\n    #ticket_vue .bottom{background: #aaa;position: fixed;height: 8%;bottom: -1px;font-size: 4vw}\n    #ticket_vue .bottom table{width: 100%;background: red;height: 100%}\n    #ticket_vue .bottom td{text-align: center;color: #fff}\n    #ticket_vue .ticket{margin-bottom: 4%;width: 100%;height: 20%;}\n    #ticket_vue .ticket img{width: 100%}\n    #ticket_vue .ticket td > div{background: #fff;padding: 3% 11%;text-align: center;font-size: 3vw;display: inline-block}\n    #ticket_vue .ticket td:nth-of-type(1){width: 7%;font-size: 11vw;color: #fff;text-align: center}\n    #ticket_vue .ticket td:nth-of-type(2){width: 24%;font-size: 3vw;color: #fff}\n    #ticket_vue .ticket td:nth-of-type(3){width: 15%;text-align: center}\n    #ticket_vue .comment_box, #comment_list_vue .comment_box{background: #fff;width: 94%;margin-left: 3%;margin-bottom: 3%;font-size: 3vw;}\n    #ticket_vue .comment_line_1 td:nth-of-type(1), #comment_list_vue .comment_line_1 td:nth-of-type(1){width: 5%;padding: 3%}\n    #ticket_vue .comment_line_1 td:nth-of-type(2), #comment_list_vue .comment_line_1 td:nth-of-type(2){width: 10%}\n    #ticket_vue .comment_line_1 td:nth-of-type(3), #comment_list_vue .comment_line_1 td:nth-of-type(3){width: 10%;padding-right: 4%}\n    #ticket_vue .comment_line_1 td:nth-of-type(3) img, #comment_list_vue .comment_line_1 td:nth-of-type(3) img{width: 10%;transform: scale(1.2)}\n    #ticket_vue .comment_line_1 .head, #comment_list_vue .comment_line_1 .head{width: 100%;border-radius: 50%}\n    #ticket_vue .content, #comment_list_vue .content{padding: 0 4% 3%;word-break: break-all}\n    #ticket_vue .image, #comment_list_vue .image{padding: 0 3% 3%}\n    #ticket_vue .image img, #comment_list_vue .image img{width: 30%;margin-right: 3%;}\n    #ticket_vue .time, #comment_list_vue .time{color: #aaa;padding: 0 3% 2%}\n    #ticket_vue .box_box, #comment_list_vue .box_box{height: 93%;overflow: scroll;margin-top: 12%;padding-top: 3%;}\n</style>\n<div class="w100 h100" style="overflow: scroll;-webkit-overflow-scrolling:touch;overflow-x: hidden;">\n    <div class="w100 pos_r t0"\n         style="background: url(\'https://wx-1253594735.file.myqcloud.com/barber/images/friend_share_info.png\');background-size:100% 100%;height: 300%;">\n    </div>\n    <table class="ticket"\n           style="background:url(\'https://wx-1253594735.cosgz.myqcloud.com/1253480904/barber/images/bg-coupon.jpg\');background-size:100% 100%;\n           position: relative;top: -245%;">\n        <tr>\n            <td>\n                {{ticket.discount}}\n            </td>\n            <td>\n                <b style="font-size:4vw">\uFFE5</b>\n                <span style="color:#ddd;display:inline;" :class="(ticket.from)?\'\':\'disn\'">{{(ticket.from)?\'(\u7531\'+ticket.from+\'\u5206\u4EAB\u7ED9\u60A8\u7684)\':\'\'}}</span>\n                <br/>\n                \u4F7F\u7528\u8303\u56F4\uFF1A{{ticket.studio?ticket.studio:\'\u901A\u7528\'}}<br/>\n                \u6709\u6548\u671F\u81F3{{ticket.end_time}}\n            </td>\n            <td>\n                <div style="background:none;color:#fff;">\n                    {{ticket.keyword}}\n                </div>\n            </td>\n        </tr>\n    </table>\n    <div style="position: relative;top: -240%;left: 36%;">\n        <a @click="mytickets()" style="color: #ef1356;font-size: 120%;font-family: \u9ED1\u4F53">\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5&gt;&gt;&gt;</a>\n    </div>\n    <div class="comment_box" v-for="comment in comments" style="position: relative;top: -230%;">\n        <table class="comment_line_1">\n            <tr>\n                <td>\n                    <img class="head" :src="comment.userAvt"/>\n                </td>\n                <td>\n                    <span>{{comment.userName}}</span><br/>\n                    <span>{{comment.userPhone}}</span>\n                </td>\n                <td class="txtr">\n                    <span>&nbsp;</span><br/>\n                    <img :src="db.data.oss+\'barber/images/start_orange.svg\'"/>\n                    <img :src="db.data.oss+\'barber/images/start_orange.svg\'"/>\n                    <img :src="db.data.oss+\'barber/images/start_orange.svg\'"/>\n                    <img :src="db.data.oss+\'barber/images/start_orange.svg\'"/>\n                    <img :src="db.data.oss+\'barber/images/start_orange.svg\'"/>\n                    <span>5.0\u5206</span>\n                </td>\n            </tr>\n        </table>\n        <div class="content">\n            {{comment.content}}\n        </div>\n        <!--<div class="image" v-if="comment.img.length > 0">\n            <img @click="launcher.look(comment.img.join(\'|\'), opu)" v-for="opu in comment.img" :src="opu">\n        </div>-->\n        <div class="time w100 txtr">\n            \u53D1\u578B\u5E08:{{comment.barberName}} &nbsp;&nbsp;{{comment.create_time}}\n        </div>\n    </div>\n    <div style="position: relative;top: -230%;left: 36%;">\n        <a @click="comment(barber.id)" style="color: #feae57;font-size: 120%;font-family: \u9ED1\u4F53">\u70B9\u51FB\u67E5\u770B\u66F4\u591A&gt;&gt;&gt;</a>\n    </div>\n    <div style="position: relative;top: -225%;left: 27%;">\n        <span style="color: #ef1356;font-size: 120%;font-family: \u9ED1\u4F53">&lt;\u6211\u7684\u4E13\u5C5E\u53D1\u578B\u8BBE\u8BA1\u5E08&gt;</span>\n    </div>\n    <div style="position: relative;top: -223%;left: 35%;">\n        <img style="width: 100%;border-radius: 50%;width: 30%;"\n             src="{{barber.avt}}">\n    </div>\n    <div style="position: relative;top: -220%;text-align: center;">\n        <span style="color: #545454;font-size: 120%;font-family: \u9ED1\u4F53">{{barber.name}}</span>\n    </div>\n    <div style="position: relative;top: -219%;text-align: center;">\n        <span style="color: #545454;font-size: 120%;font-family: \u9ED1\u4F53">{{barber.introduce}}</span>\n    </div>\n\n    <div style="position: relative;top: -200%;text-align: left;">\n        <span style="color: #e62129;font-size: 120%;font-family: \u9ED1\u4F53;padding-left: 5%;">\u86C7\u53E3\u5E97</span>\n        <br>\n        <br>\n        <span style="color: #818181;font-size: 120%;font-family: \u9ED1\u4F53;padding-left: 5%;">\u5357\u5C71\u533A\u86C7\u53E3\u6B65\u884C\u8857209\u53F7\u5546\u94FA</span>\n        <br>\n        <br>\n        <img v-for="i in shekouImgArr" :src="shekouImgArr[$index]" width="30%" style="margin-left: 2%;" @click="look(shekouImgArr[$index],shekouImgArr)"/>\n        <hr>\n    </div>\n    <div style="position: relative;top: -200%;text-align: left;">\n        <span style="color: #e62129;font-size: 120%;font-family: \u9ED1\u4F53;padding-left: 5%;">\u4E0B\u6C99\u5E97</span>\n        <br>\n        <br>\n        <span style="color: #818181;font-size: 120%;font-family: \u9ED1\u4F53;padding-left: 5%;">\u798F\u7530\u533A\u8F66\u516C\u5E99\u4E0B\u6C99\u4E94\u574A88\u53F7-2\u5546\u94FA(\u4E0B\u6C99\u4E3B\u8857\u5341\u5B57\u8DEF\u53E3)</span>\n        <br>\n        <br>\n        <img v-for="i in pingzhouImgArr" :src="pingzhouImgArr[$index]" width="30%" style="margin-left: 2%;" @click="look(pingzhouImgArr[$index], pingzhouImgArr)"/>\n        <hr>\n    </div>\n    <div style="position: relative;top: -200%;text-align: left;">\n        <span style="color: #e62129;font-size: 120%;font-family: \u9ED1\u4F53;padding-left: 5%;">\u576A\u6D32\u5E97</span>\n        <br>\n        <br>\n        <span style="color: #818181;font-size: 120%;font-family: \u9ED1\u4F53;padding-left: 5%;">\u5B9D\u5B89\u533A\u897F\u4E61\u8857\u9053\u576A\u6D32\u8F7B\u94C1\u897F\u4E94\u5DF71\u53F7102(\u8D22\u5BCC\u6E2FC\u5EA7\u80CC\u9762)</span>\n        <br>\n        <br>\n        <img v-for="i in xiashaImgArr" :src="xiashaImgArr[$index]" width="30%" style="margin-left: 2%;" @click="look(xiashaImgArr[$index], xiashaImgArr)"/>\n        <hr>\n    </div>\n\n</div>\n\n\n'));
    }

    _createClass(ticket, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                    var i = void 0;
                    for (i = 1; i < m.pages.length; i++) {
                        m.addPage(m.pages[i]);
                    }
                },
                compiled: function compiled() {},

                data: {
                    comments: [],
                    ticket: null,
                    barber: null,
                    shekouImgArr: ['https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg'],
                    pingzhouImgArr: ['https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg'],
                    xiashaImgArr: ['https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg']
                },
                methods: {
                    init: function init() {
                        var _this2 = this;

                        if (db.data.ticket_name) {
                            var dataStr = '{\n                            "name" : "' + db.data.ticket_name + '"\n                        }';
                            Util.ajax(dataStr, db.data.api + 'getTicketInfo.php', function (json) {
                                if (json.e !== 0) {} else {
                                    _this2.comments = json.data.comments;
                                    _this2.ticket = json.data.ticket;
                                }
                            });
                        } else if (db.data.ticket_info) {
                            this.comments = db.data.ticket_info.comments;
                            this.ticket = db.data.ticket_info.ticket;
                            this.barber = db.data.ticket_info.barber;
                        }
                        Message.toast("加载中...", 0.5);
                    },
                    mytickets: function mytickets() {
                        this.jump('mytickets');
                    },
                    comment: function comment(id) {
                        var _this3 = this;

                        db.data.nowBarberId = id;
                        var dataStr = '{\n                            "lat":"' + db.data.user.lat + '",\n                            "lon":"' + db.data.user.lon + '",\n                            "bid":"' + db.data.nowBarberId + '",\n                        }';
                        Util.ajax(dataStr, db.data.api + 'getBarberDetail.php', function (data) {
                            _this3.renderBarberStudio(data);
                        });
                        this.jump('comment_list');
                    },
                    renderBarberStudio: function renderBarberStudio(data) {
                        if (data.e !== 0) {} else {
                            var obj = data.data;
                            if (this.barber === null) {
                                for (var k in obj.srv) {
                                    obj.srvId = obj.srv[k];
                                    obj.srv = k;
                                    break;
                                }
                                this.barber = JSON.parse(JSON.stringify(obj));
                            } else {
                                this.barber = obj;
                            }
                            db.data.score1 = obj.score1;
                            db.data.score2 = obj.score2;
                            db.data.score3 = obj.score3;
                            db.data.score4 = obj.score4;
                            db.data.score5 = obj.score5;
                        }
                    },
                    look: function look(currentImg, imgStr) {
                        var imgString = "";
                        imgString = imgStr + "";
                        var imgArr = imgString.split(",");
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
                                current: currentImg, // 当前显示图片的http链接
                                urls: urls // 需要预览的图片http链接列表
                            });
                        }
                    }
                }
            });
        }
    }]);

    return ticket;
}(Page);

/////////////////////////////
