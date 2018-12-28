'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detail_studio = function (_Page) {
    _inherits(detail_studio, _Page);

    function detail_studio(hash) {
        _classCallCheck(this, detail_studio);

        return _possibleConstructorReturn(this, (detail_studio.__proto__ || Object.getPrototypeOf(detail_studio)).call(this, hash, '<style>\n    #detail_studio_vue{float:left;background:#efefef}\n    #detail_studio_vue .header{width:100%;height:78vw;background:#fff;}\n    #detail_studio_vue .banner{width:100vw;height:48.98148vw;float:left;position:relative}\n    #detail_studio_vue .bannerImg{position:absolute;width:100%;height:100%}\n    #detail_barber_vue .geolocation,#detail_studio_vue .geolocation{position:absolute;width:19vw;height:6vw;right:1.2vw;bottom:1.2vw;text-align:center;color:#fff;font-size:3.2vw;line-height:6vw;border-radius:1vw}\n    #detail_barber_vue .geolocation>div,#detail_studio_vue .geolocation>div{position:absolute;width:100%;height:100%;background:#000;opacity:.2}\n    #detail_barber_vue .geolocation>span,#detail_studio_vue .geolocation>span{z-index:999;position:relative}\n    #detail_barber_vue .geolocation>img,#detail_studio_vue .geolocation>img{position:absolute;left:-17%}\n    #detail_studio_vue .title{float:left;position:relative;width:100vw;height:14.72222vw;border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb}\n    #detail_studio_vue .tBox{position:absolute;width:27.77778vw;height:9.62963vw;right:2.77778vw;bottom:2.77778vw}\n    #detail_studio_vue .tBox .fans{width:50%;height:100%;background:#d60040;text-align:center;float:left;color:#fff;font-size:3.2vw;line-height:3.51852vw;padding-top:1vw}\n    #detail_studio_vue .tBox .follow{width:50%;height:100%;background:#e60146;text-align:center;float:left;color:#fff;font-size:3.2vw;line-height:3.51852vw;padding-top:1vw}\n    #detail_barber_vue .follow>img,#detail_studio_vue .follow>img{width:15%;position:absolute;left:68%;top:5%}\n    #detail_studio_vue .designation{font-size:4.2vw}\n    #detail_studio_vue .lBox{position:absolute;}\n    #detail_studio_vue .satisfaction{line-height: 4.48148vw;color: #a4a4a4;width: 69vw;height: 14vw;padding: 0 5vw}\n    #detail_studio_vue .satisfactionTxt{color:#f60052}\n    #detail_studio_vue .promise{position:relative;float:left;width:100%;height:11.38889vw}\n    #detail_studio_vue .promiseItem{position:relative;float:left;width:23%;line-height:11vw;font-size:3.2vw;color:#9e9e9e;text-align:center}\n    #detail_studio_vue .promiseItem:nth-child(1){margin-left:4%}\n    #detail_studio_vue .promiseItem .circle{position:relative;width:4.81481vw;height:4.81481vw;background:url(https://wx-1253594735.cosgz.myqcloud.com/barber/images/icon-check.png) no-repeat;background-size:100% 100%;display:inline-block;top:1.2vw;margin-right:1vw}\n    #detail_studio_vue .memberList{float:left;margin-top:3vw;width:100%;position:relative}\n    #detail_studio_vue .listItem{position:relative;float:left;width:100%;height:23.5vw;background:#fff;border-bottom:.27778vw solid #f4f4f4}\n    #detail_studio_vue .head{width:15.55556vw;height:23.5vw;padding-left:3.7037vw}\n    #detail_studio_vue .head img{width:15.55556vw;height:15.55556vw;border-radius:50%}\n    #detail_studio_vue .desc{width:42vw;height:23.5vw;padding-left:2.5vw}\n    #detail_studio_vue .price{width:15.6vw;color:#e20145;text-align:center;font-size:4.8vw;font-weight:700}\n    #detail_studio_vue .price .yuan{position:relative;font-size:70%;top:-3vw}\n    #detail_studio_vue .name{font-size:4vw;font-weight:600;line-height:5.2vw}\n    #detail_studio_vue .intro{font-size:3.5vw;line-height:5vw}\n    #detail_studio_vue .more{font-size:80%;color:#a5a5a5;line-height:4.2vw}\n    #detail_studio_vue .cell{position:relative;display:table-cell;vertical-align:middle}\n    #detail_studio_vue .status{width:20vw;height:10.74074vw;background:#ddd9d8;line-height:10.74074vw;text-align:center;font-size:3.8vw;font-weight:700;color:#fff;border-radius:1vw}\n    #detail_studio_vue .status.on{background:#e60146}\n    #detail_studio_vue .detailIntro{width:100%;background:#fff;float:left;margin-top:3.6vw}\n    #detail_studio_vue .detailTitle{float:left;height:12.5vw;width:33.33333vw;line-height:12.5vw;text-align:center;color:#ff1f66;font-size:4.4vw;border-bottom:1px solid #e30047}\n    #detail_studio_vue .content{float:left;width:100vw;height:25vw;font-size:3.3vw;line-height:5vw}\n    #detail_studio_vue .inLine{height:25vw;padding:0 7vw;color:#9d9d9d;text-indent:6.8vw;border-top:1px solid #e5e5e5}\n    #detail_studio_vue .bottom{color:#646464;float:left;width:100vw;background:#fff;margin-top:3.6vw;font-size:3.3vw}\n    #detail_studio_vue .line{height:11vw}\n    #detail_studio_vue .icon{height:15vw;padding-left:4vw}\n    #detail_studio_vue .iconL{width:5vw;height:6.48148vw}\n    #detail_studio_vue .txtLocation{line-height:4.4vw;width:75.92593vw;height:15vw;padding-left:2vw}\n    #detail_studio_vue .cell.check{color:#9e9e9e;font-size:3.8vw;padding-left:1vw}\n    #detail_studio_vue .iconZ{width:5vw;height:5vw}\n    #detail_studio_vue .line_2 .icon{height:9vw}\n    #detail_studio_vue .txtTime{height:9vw;padding-left:2vw}\n    #detail_studio_vue .iconD{width:5vw;height:5vw}\n    #detail_studio_vue .line_3 .icon{height:9vw}\n    #detail_studio_vue .txtTel{height:9vw;padding-left:2vw}\n    #detail_studio_vue .txtTel span{font-weight:700;font-size:4vw;color:#979797}\n    #latest_comment_vue .comment,#detail_studio_vue .comment{float:left;width:100vw;background:#fff;margin-top:4vw}\n    #latest_comment_vue .commentTitle,#detail_studio_vue .commentTitle{float:left;height:12.5vw;width:41.66667vw;line-height:12.5vw;text-align:center;color:#ff1f66;font-size:4.4vw;border-bottom:1px solid #e30047}\n    #latest_comment_vue .commentList,#detail_studio_vue .commentList,#detail_barber_vue .commentList{float:left;border-top:1px solid #e8e8e8}\n    #latest_comment_vue .commentCheck,#detail_studio_vue .commentCheck{float:left;height:16.94444vw;width:100vw;border-top:1px solid #e8e8e8}\n    #latest_comment_vue .commentCheckAll,#detail_studio_vue .commentCheckAll{float:left;width:91.66667vw;height:10.83333vw;line-height:10.83333vw;border:1px solid #e8e8e8;margin:3.05556vw 4.16667vw;text-align:center;color:#9d9d9d;font-size:3.8vw}\n    #detail_studio_vue .commentCheckAll:active,#latest_comment_vue .commentCheckAll:active{background:#eee;color:#fff}\n    #latest_comment_vue .commentListItem,#detail_studio_vue .commentListItem{float:left;width:100vw}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo{margin:2vw auto 3vw auto;width:89.53704vw;height:13.61111vw}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo .userHead{float:left;height:13.61111vw;width:13.61111vw;border-radius:50%}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo .userInfoBox{float:left;width:37vw;height:100%;margin-left:2.5vw;font-size:3.4vw;padding-top:2vw}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo .nameLine{line-height:6vw}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo .telLine{line-height:6vw;color:#c5c5c5}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo .fa{color:#feb005;font-size:4vw}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo .starArea{margin-top:8vw;float:left}\n    #latest_comment_vue .userInfo,#detail_studio_vue .userInfo .marks,#detail_barber_vue .commentListItem .userInfo .marks{text-align:right;color:#747474;font-size:3.6vw;margin-top:7vw;margin-left:2.5vw;float:left;width:33vw;}\n    #latest_comment_vue .commentDetail,#detail_studio_vue .commentDetail,#detail_barber_vue .commentDetail{word-break:break-all;width:97vw;color:#767676;padding-left:5.8vw;line-height:5.5vw;font-size:3.3vw;display:inline-block}\n    #latest_comment_vue .commentDate,#detail_studio_vue .commentDate{color:#c9c9c9;font-size:3.3vw;line-height:9vw;float:right;margin-right:9vw}\n    #latest_comment_vue .wokerName,#detail_studio_vue .wokerName{padding-right:3vw}\n</style>\n\n<div v-if="studio.id == 20">\n    <!--<img style="width: 100%;" src="https://wx-1253594735.file.myqcloud.com/studio/20/temp_20180407.png"/>-->\n</div>\n\n<div class="w100 pos_r h100" style="overflow:scroll;-webkit-overflow-scrolling:touch;">\n    <div class="header">\n        <div class="banner">\n            <img :src="studio.img" class="bannerImg">\n            <div class="geolocation">\n                <div></div>\n                <img :src="db.data.oss+\'barber/images/location.svg\'" class="h100">\n                <span>{{studio.distance/1000}}KM</span>\n            </div>\n        </div>\n        <div class="title">\n            <div class="lBox">\n                <div class="satisfaction flex flex-column" style="justify-content: center">\n                    <span style="font-size:5vw;color:#000;font-weight:600">{{studio.name}}</span>\n                    <span style="font-size:3vw;">\u8425\u4E1A\u65F6\u95F4:{{studio.work_time}} &nbsp;\u6EE1\u610F\u5EA6: {{studio.satisfaction}}%</span>\n                </div>\n            </div>\n            <div class="tBox">\n                <div class="fans">{{studio.fans}}<br>\u7C89\u4E1D\u6570</div>\n                <div class="follow" @touchstart="subscribeStudio()">\n                    <img :src="followImg"><br>{{(studio.subscribed)?\'\u5DF2\u5173\u6CE8\':\'\u5173\u6CE8\'}}\n                </div>\n            </div>\n        </div>\n        <table style="height:8.9vh;" class="w100">\n            <tr>\n                <td style="width:75%;padding:0 20% 0 5%;font-size:3.5vw;color:#a4a4a4;">\n                    {{studio.place}} <span style="padding: 0 3%;background: #ddd;border-radius: 20px;">\n       {{studio.distance/1000}}KM</span>\n                </td>\n                <td @touchstart="beHere()" class="txtc" style="font-size:3.5vw;">\n                    <img :src="db.data.oss+\'barber/images/icon-l.png\'" class="iconL w50" style="width: 16%;height: 32%;"><br/>\n                    \u5BFC\u822A&gt;\n                </td>\n            </tr>\n        </table>\n        <!--<div class="title" @click="commodity_detail()" style="margin-bottom: -3%;">\n            <img style="bottom:10vh"\n                 src="https://wx-1253594735.file.myqcloud.com/barber/images/buy_studio_banner_new.gif"\n                 width="100%" @click="commodity_detail()"/>\n        </div>-->\n        <div class="memberList">\n            <div class="listItem" v-for="barber in studio.barbers" style="{{barber.last_barber?\'background:url(https://wx-1253594735.cosgz.myqcloud.com/barber/images/last_barber_background.png);\':\'\'}}">\n                <div @click="launcher.detail_barber(barber.id);" class="cell head"><img :src="barber.avt"></div>\n                <div @click="launcher.detail_barber(barber.id);" class="cell desc">\n                    <div class="name">{{barber.name}}\n                        <!--<span style="font-size: 3vw;">{{barber.price > 38 ? \'(\u9996\u5E2D)\' : \'(\u8D44\u6DF1)\'}}</span>-->\n                        <img v-if="barber.last_barber" :src="db.data.osss+\'barber/images/last_barber_subscribe.png\'" style="width: 40%;"/>\n                    </div>\n                    <div class="intro">{{barber.waitStr}}</div>\n                    <!--<div class="more">\u7D2F\u8BA1{{barber.comments_count}}\u6761\u8BC4\u8BBA,\u70B9\u51FB\u67E5\u770B</div>-->\n                </div>\n                <div @click="launcher.detail_barber(db.data.detail_studio_index,$index);" class="cell price">{{barber.price}}<i class="yuan">\uFFE5</i></div>\n                <div class="cell">\n                    <!--<div class="status" @click="launcher.quhao(barber,barber.service,barber.work_state)" :style="(barber.work_state==1)?\'background:#e60146;\':\'\'">{{(barber.work_state==1)?\'\u4E00\u952E\u53D6\u53F7\':((barber.work_state==0)?\'\u5DF2\u4E0B\u73ED\':\'\u5403\u996D\u4E2D\')}}</div>-->\n                    <div class="status" @click="readeyTakeNumber(barber)" :style="(barber.work_state==1)?\'background:#e60146;\':\'\'">{{(barber.work_state==1)?\'\u4E00\u952E\u53D6\u53F7\':((barber.work_state==0)?\'\u5DF2\u4E0B\u73ED\':\'\u5403\u996D\u4E2D\')}}</div>\n                </div>\n            </div>\n        </div>\n        <div class="comment" v-if="studio.comments>0">\n            <div class="commentTitle">\u7528\u6237\u597D\u8BC4({{studio.comments}})</div>\n            <div class="commentList">\n                <div class="commentListItem" v-for="comment in studio.lastComment">\n                    <div class="userInfo"><img :src="comment.userAvt" class="userHead">\n                        <div class="userInfoBox">\n                            <div class="nameLine">{{comment.userName}}</div>\n                            <div class="telLine">{{comment.userPhone}}</div>\n                        </div>\n                        <div class="marks">\n                            <img v-for="i in [0,1,2,3,4]" :src="db.data.oss+\'barber/images/start_orange.svg\'" style="width:12%;">\n                            5.0\u5206\n                        </div>\n                    </div> <span class="commentDetail">{{comment.content}}</span>\n                    <div class="image" v-if="comment.img.length > 0">\n                        <img style="    width: 30%;\n    margin-left: 3%;" @click="launcher.look(comment.img.join(\'|\'), src)" v-for="src in comment.img" :src="src">\n                    </div>\n                    <div class="commentDate"><span>\u53D1\u578B\u5E08\uFF1A</span> <span class="wokerName">{{comment.barberName}}</span> <span>{{comment.create_time}}</span></div>\n                </div>\n            </div>\n            <div class="commentCheck" @click="jump(\'latest_comment\');">\n                <div class="cell commentCheckAll">\u67E5\u770B\u5168\u90E8</div>\n            </div>\n        </div>\n        <div class="bottom">\n            <div class="cell line">\n                <div class="line_3">\n                    <div class="cell icon"><img :src="db.data.oss+\'barber/images/icon-d.png\'" class="iconD"></div>\n                    <div class="cell txtTel">\u7535\u8BDD\uFF1A<span>{{studio.phone}}</span></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="endtouch w100 h100 pos_a t0"></div>\n</div>\n<div class="bindPhone {{showBindPhoneView? \'\':\'disn\'}}">\n    <div class="cover" @click="change(\'showBindPhoneView\')"></div>\n    <div class="box">\n        <div class="line_1">\n            {{(!!db.data.user.phone===false)?\'\u7ED1\u5B9A\u624B\u673A\u53F7\':\'\u66F4\u6362\u624B\u673A\u53F7\'}}\n        </div>\n        <div class="line_2">\n            <input placeholder="\u8F93\u5165\u624B\u673A\u53F7" v-model="phone">\n        </div>\n        <div class="line_3">\n            <input placeholder="\u8F93\u5165\u9A8C\u8BC1\u7801" v-model="phoneCheck">\n            <span @click="sendPhoneCheck()">{{checkText}}</span>\n        </div>\n        <div class="line_4">\n            <span @click="bindPhone()">\u786E\u5B9A</span>\n            <span @click="change(\'showBindPhoneView\')">\u53D6\u6D88</span>\n        </div>\n    </div>\n</div>'));
    }

    _createClass(detail_studio, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                },
                compiled: function compiled() {},

                data: {
                    studio: {},
                    showBindPhoneView: false,
                    canSendPhoneCheck: true,
                    checkText: '获取短信验证码',
                    phone: '',
                    phoneCheck: '',
                    barber: []
                },
                computed: {
                    followImg: {
                        get: function get() {
                            return this.studio.subscribed ? db.data.oss + 'barber/images/heart_white.svg' : db.data.oss + 'barber/images/heart.svg';
                        }
                    }
                },
                methods: {
                    init: function init() {
                        var _this3 = this;

                        var dataStr = '{\n                            "lat":"' + db.data.user.lat + '",\n                            "lon":"' + db.data.user.lon + '",\n                            "sid":"' + db.data.nowStudioId + '",\n                        }';
                        Util.ajax(dataStr, db.data.api + 'getStudioDetail.php', function (data) {
                            _this3.renderDetialStudio(data);
                        });
                        setTimeout(function () {
                            _this3.launcher.showAndHideCover($(_this3.$el));
                        }, 100);
                    },
                    renderDetialStudio: function renderDetialStudio(data) {
                        if (data.e !== 0) {} else {
                            console.log(data.data);
                            data = data.data;
                            for (var k in data.srv) {
                                data.srvId = data.srv[k];
                                data.srv = k;
                                break;
                            }
                            this.studio = JSON.parse(JSON.stringify(data));
                            db.data.lon = this.studio.lon;
                            db.data.lat = this.studio.lat;
                        }
                    },
                    subscribeStudio: function subscribeStudio() {
                        var _this4 = this;

                        var dataStr = '{\n                            "sid":"' + db.data.nowStudioId + '",\n                        }';
                        Util.ajax(dataStr, db.data.api + 'subscribeStudio.php', function (data) {
                            if (data.e !== 0) {} else {
                                var obj = data.data;
                                if (obj.subscribe === 1) {
                                    Message.toast("谢谢支持 (●'◡'●)ﾉ♥");
                                    _this4.studio.subscribed = true;
                                } else {
                                    _this4.studio.subscribed = false;
                                }
                            }
                        });
                    },
                    sendPhoneCheck: function sendPhoneCheck() {
                        var dataStr = '{\n                        "phone":"' + this.phone + '"\n                    }';
                        var _this = this;
                        Util.ajax(dataStr, db.data.api + 'getPhoneVerificationCode.php', function (data) {
                            if (data.e !== 0) {
                                launcher.vue.handlerError(data.e);
                            } else {
                                _this.checkText = '60秒';
                                if (_this.timer12 !== null) {
                                    clearInterval(_this.timer12);
                                    _this.timer12 = null;
                                }
                                _this.timer12 = setInterval(function () {
                                    var num = Math.floor(_this.checkText.substr(0, _this.checkText.length - 1)) - 1;
                                    if (num < 0) {
                                        clearInterval(_this.timer12);
                                        _this.timer12 = null;
                                        _this.checkText = '获取短信验证码';
                                    } else {
                                        _this.checkText = num + '秒';
                                    }
                                }, 1000);
                            }
                        });
                    },
                    bindPhone: function bindPhone() {
                        if (!Util.isMobileNumber(this.phone)) throw '手机号码格式错误';
                        if (!!this.phoneCheck === false) throw '验证码格式错误';
                        var dataStr = '{\n                        "phone":"' + this.phone + '",\n                        "code":"' + this.phoneCheck + '"\n                    }';
                        var _this = this;
                        Util.ajax(dataStr, db.data.api + 'verifyPhoneCode.php', function (data) {
                            if (data.e !== 0) {
                                launcher.vue.handlerError(data.e);
                            } else {
                                db.data.user.phone = _this.phone;
                                _this.phone = '';
                                _this.phoneCheck = '';
                                _this.showBindPhoneView = false;
                                _this.checkText = '获取短信验证码';
                                Message.toast('绑定成功', 3);
                                _this.readeyTakeNumber(_this.barber);
                            }
                        });
                    },
                    readeyTakeNumber: function readeyTakeNumber(barber) {
                        ////
                        this.barber = barber;
                        console.log(this.barber);
                        this.launcher.quhao(this.barber, this.barber.service, this.barber.work_state);
                    },
                    beHere: function beHere() {
                        var lon1, lat1, lon2, lat2;
                        lon1 = db.data.user.lon;
                        lat1 = db.data.user.lat;

                        lon2 = db.data.lon;
                        lat2 = db.data.lat;
                        if (lon1 == db.data.navi.lon1 && lat1 == db.data.navi.lat1 && lon2 == db.data.navi.lon2 && lat2 == db.data.navi.lat2) {} else {
                            console.log(this.studio.lat);
                            console.log(this.studio.lon);
                            wx.openLocation({
                                latitude: this.studio.lat, // 纬度，浮点数，范围为90 ~ -90
                                longitude: this.studio.lon, // 经度，浮点数，范围为180 ~ -180。
                                name: this.studio.name, // 位置名
                                address: this.studio.place, // 地址详情说明
                                scale: 20, // 地图缩放级别,整形值,范围从1~28。默认为最大
                                infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                            });
                            // $('#if_be_here').attr('src',`https://m.amap.com/navi/?start=${lon1},${lat1}&dest=${lon2},${lat2}&destName=&key=e26b8cda40107bdb109530c28990582b`);
                            // db.data.navi.lon1 = lon1;
                            // db.data.navi.lat1 = lat1;
                            // db.data.navi.lon2 = lon2;
                            // db.data.navi.lat2 = lat2;
                        }
                    },
                    commodity_detail: function commodity_detail() {
                        this.jump("commodity_detail");
                    }
                }
            });
        }
    }]);

    return detail_studio;
}(Page);
//
