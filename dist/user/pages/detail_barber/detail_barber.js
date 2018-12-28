'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detail_barber = function (_Page) {
    _inherits(detail_barber, _Page);

    function detail_barber(hash) {
        _classCallCheck(this, detail_barber);

        return _possibleConstructorReturn(this, (detail_barber.__proto__ || Object.getPrototypeOf(detail_barber)).call(this, hash, '<style>\n    #detail_barber_vue{background:#efefef;float:left}\n    #detail_barber_vue .PhotoGallery{float:left;width:100vw;height:auto;overflow:hidden;position:relative}\n    #detail_barber_vue .PhotoScroller{position:absolute;height:100%;left:0}\n    #detail_barber_vue .PhotoScroller img{width:100vw;height:100%}\n    #detail_barber_vue .scrollerIndex{position:absolute;bottom:5vw;width:100%;text-align:center}\n    #detail_barber_vue .scrollerIndex span{display:inline-block;width:2.7vw;height:2.7vw;background:#000;margin-left:1.5vw;margin-right:1.5vw;border-radius:50%}\n    #detail_barber_vue .title{background:#efefef;float:left;position:relative;width:100vw;height:17.5vw;border-bottom:1px solid #ebebeb;border-top:1px solid #ebebeb}\n    #detail_barber_vue .tBox{position:absolute;width:27.77778vw;height:9.62963vw;right:4vw;bottom:3.8vw}\n    #detail_barber_vue .tBox .fans{width:50%;height:100%;background:#d60040;text-align:center;float:left;color:#fff;font-size:3.2vw;line-height:3.51852vw;padding-top:1vw}\n    #detail_barber_vue .tBox .follow{width:50%;height:100%;background:#e60146;text-align:center;float:left;color:#fff;font-size:3.2vw;line-height:3.51852vw;padding-top:1vw}\n    #detail_barber_vue .heart{font-size:3.6vw}\n    #detail_barber_vue .designation{font-size:4.5vw;font-weight:700}\n    #detail_barber_vue .lBox{position:absolute;left:3.33333vw;top:4.5vw}\n    #detail_barber_vue .satisfaction{line-height:5.55556vw;color:#a4a4a4;font-size:3.6vw}\n    #detail_barber_vue .promise{background:#fff;position:relative;float:left;width:100%;height:11.38889vw}\n    #detail_barber_vue .promiseItem{position:relative;float:left;width:23%;line-height:11vw;font-size:3.2vw;color:#9e9e9e;text-align:center}\n    #detail_barber_vue .promiseItem:nth-child(1){margin-left:4%}\n    #detail_barber_vue .promiseItem .circle{position:relative;width:4.81481vw;height:4.81481vw;background:url(' + db.data.oss + 'barber/images/icon-check.png) no-repeat;background-size:100% 100%;display:inline-block;top:1.2vw;margin-right:1vw}\n    #detail_barber_vue .studio{background:#fff;float:left;width:100vw;height:14.81481vw}\n    .cell{position:relative;display:table-cell;vertical-align:middle;height:14.81481vw}\n    #detail_barber_vue .studio .cell-l{top:2vw;width:76vw}\n    #detail_barber_vue .studio .cell-r{top:2vw;width:24vw;text-align:left}\n    #detail_barber_vue .cell-l .icon{width:5.83333vw;height:5.27778vw;display:inline-block;margin:-1vw 0 0 5vw;vertical-align:middle}\n    #detail_barber_vue .cell-r .icon{width:3.98148vw;height:5.27778vw;background:url(' + db.data.oss + 'barber/images/icon-l.png) no-repeat;background-size:100% 100%;display:inline-block;margin:-1vw 0 0 0;vertical-align:middle}\n    #detail_barber_vue .studioName{display:inline-block;font-size:3.8vw;color:#9a9a9a}\n    #detail_barber_vue .studioDistance{display:inline-block;font-size:3.8vw;color:#666}\n    #detail_barber_vue .comment{float:left;margin-top:3vw;background:#fff}\n    #detail_barber_vue .commentTitle{float:left;width:100vw;height:12.77778vw}\n    #detail_barber_vue .commentTitleTxt{float:left;width:33.51852vw;height:12.5vw;line-height:12.5vw;border-bottom:1px solid #e80048;color:#e30048;text-align:center;font-size:4vw;font-weight:700}\n    #detail_barber_vue .impression{float:left;height:24.72222vw;width:100vw}\n    #detail_barber_vue .satisfaction_{font-weight:700;font-size:3.4vw;color:#e30048;display:inline-block;width:17.96296vw;height:17.96296vw;border:1px solid #e30048;border-radius:50%;position:relative;text-align:center;line-height:.8;padding-top:4.2vw}\n    #detail_barber_vue .satisfaction_number{margin-left:.5vw;font-size:7vw}\n    #detail_barber_vue .satisfaction_ i{font-size:100%;padding-bottom:1.5vw;display:inline-block}\n    #detail_barber_vue .impression .cell-l{height:24.72222vw;text-align:right;width:25vw}\n    #detail_barber_vue .impression .cell-r{height:24.72222vw;text-align:left;width:75vw;padding-left:4vw}\n    #detail_barber_vue .impression .cell-r .starBox{line-height:6.11111vw;display:inline-block;font-size:3.2vw;color:#e30048;border:.5vw solid #e30048;border-radius:30vw;padding-left:2.2vw;padding-right:2.2vw;margin-top:1vw;margin-bottom:1vw;font-weight:700}\n    #detail_barber_vue .commentListItem{border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;float:left;width:100vw}\n    #detail_barber_vue .commentListItem .userInfo{margin:2vw auto 3vw auto;width:89.53704vw;height:13.61111vw}\n    #detail_barber_vue .commentListItem .userInfo .userHead{float:left;height:13.61111vw;width:13.61111vw;border-radius:50%}\n    #detail_barber_vue .commentListItem .userInfo .userInfoBox{float:left;width:37vw;height:100%;margin-left:2.5vw;font-size:3.4vw;padding-top:2vw}\n    #detail_barber_vue .commentListItem .userInfo .nameLine{line-height:6vw}\n    #detail_barber_vue .commentListItem .userInfo .telLine{line-height:6vw;color:#c5c5c5}\n    #detail_barber_vue .commentListItem .userInfo .fa{color:#feb005;font-size:4vw}\n    #detail_barber_vue .commentListItem .userInfo .marks{text-align:right;color:#747474;font-size:3.6vw;margin-top:7vw;margin-left:2.5vw;float:left;width:33vw;}\n    #detail_barber_vue .commentListItem .commentDetail{word-break:break-all;width:97vw;color:#767676;padding-left:5.8vw;line-height:5.5vw;font-size:3.3vw;display:inline-block}\n    #detail_barber_vue .commentListItem .commentDate{color:#c9c9c9;font-size:3.3vw;line-height:9vw;float:right;margin-right:9vw}\n    #detail_barber_vue .checkAll{height:11.66667vw;float:left;width:100vw}\n    #detail_barber_vue .checkAll span{font-size:3.8vw;float:left;width:80%;margin-left:10%;text-align:center;line-height:8.88889vw;margin-top:1.38889vw;color:#a8a8a8;border:1px solid #dfdfdf;border-radius:2vw}\n    #detail_barber_vue .checkAll span:active{background:#eee;color:#fff}\n    #detail_barber_vue .personalInfo{float:left;background:#fff;margin-top:3vw}\n    #detail_barber_vue .personalInfo_{float:left;padding:4vw 4vw 4vw 4vw;font-size:4vw;width:100%}\n    #detail_barber_vue .bottom{color:#646464;float:left;width:100vw;background:#fff;margin-top:3.6vw;font-size:3.3vw}\n    #detail_barber_vue .line{height:38vw}\n    #detail_barber_vue .icon{height:15vw;padding-left:4vw}\n    #detail_barber_vue .iconL{width:5vw;height:6.48148vw}\n    #detail_barber_vue .txtLocation{line-height:4.4vw;width:75.92593vw;height:15vw;padding-left:2vw}\n    #detail_barber_vue .cell.check{color:#9e9e9e;font-size:3.8vw;padding-left:1vw}\n    #detail_barber_vue .iconZ{width:5vw;height:5vw}\n    #detail_barber_vue .line_2 .icon{height:9vw}\n    #detail_barber_vue .txtTime{height:9vw;padding-left:2vw}\n    #detail_barber_vue .iconD{width:5vw;height:5vw}\n    #detail_barber_vue .line_3 .icon{height:9vw}\n    #detail_barber_vue .txtTel{height:9vw;padding-left:2vw}\n    #detail_barber_vue .txtTel span{font-weight:700;font-size:4vw;color:#979797}\n    #detail_barber_vue .yjqh{color:#fff;font-size:4vw;text-align:center;line-height:13.33333vw;background:#e60146;position:fixed;bottom:0;width:100vw}\n    #detail_barber_vue .personalWorks{margin-top:3vw;background:#fff;float:left}\n    #detail_barber_vue .worksTitle{font-size:3.2vw;color:#9a9a9a;width:100vw;padding-left:5vw;line-height:12vw}\n    #detail_barber_vue .showBox img:nth-child(1){margin-left:5vw}\n    #detail_barber_vue .showBox{margin-bottom:4vw;float:left}\n    #detail_barber_vue .showBox img{float:left;margin-right:1.11111vw;width:29.16667vw;height:33.88889vw}\n</style>\n<div class="w100 pos_r" style="overflow:scroll;height:93%;-webkit-overflow-scrolling:touch;">\n    <div class="PhotoGallery">\n        <img class="w100" :src="barber.img">\n    </div>\n    <div class="title">\n        <div class="lBox">\n            <div class="designation">{{barber.name}}</div>\n            <div class="satisfaction"><span>{{barber.waitStr}}</span></div>\n        </div>\n        <div class="tBox">\n            <div class="fans">{{barber.fans}} <br> \u7C89\u4E1D\u6570</div>\n            <div class="follow" @touchstart="subscribeBarber()">\n                <img :src="followImg"><br>{{(barber.subscribed)?\'\u5DF2\u5173\u6CE8\':\'\u5173\u6CE8\'}}\n            </div>\n        </div>\n    </div>\n    <div class="studio">\n        <div class="cell cell-l">\n            <div class="icon"></div>\n            <div class="studioName">{{barber.studio.name}}&gt;</div>\n        </div>\n        <div class="cell cell-r" @click="beHere()">\n            <div class="icon"></div>\n            <div class="studioDistance">{{launcher.getDistanceWithLatLon(barber.studio.lat/1000000,barber.studio.lon/1000000,db.data.user.lat,db.data.user.lon)}}&gt;</div>\n        </div>\n    </div>\n    <div class="promise">\n        <div class="promiseItem"><span class="circle"></span> <span>\u54C1\u8D28\u4FDD\u969C</span></div>\n        <div class="promiseItem"><span class="circle"></span> <span>\u51CF\u5C11\u7B49\u5F85</span></div>\n        <div class="promiseItem"><span class="circle"></span> <span>\u6D88\u8D39\u900F\u660E</span></div>\n        <div class="promiseItem"><span class="circle"></span> <span>\u4F18\u60E0\u7279\u4EF7</span></div>\n    </div>\n    <div class="comment">\n        <div class="commentTitle">\n            <div class="commentTitleTxt">\u8BC4\u8BBA({{barber.comments}})</div>\n        </div>\n        <div class="impression">\n            <div class="cell cell-l">\n                <div class="satisfaction_"><span class="satisfaction_number">{{barber.satisfaction}}</span> <i>%</i><br><span style="margin-top: -16%;position:relative;">\u6EE1\u610F\u5EA6</span></div>\n            </div>\n            <div class="cell cell-r">\n                <div class="starBox">\u4E94\u661F({{barber.score5}})</div>\n                <div class="starBox">\u56DB\u661F({{barber.score4}})</div>\n                <div class="starBox">\u4E09\u661F({{barber.score3}})</div>\n                <div class="starBox">\u4E8C\u661F({{barber.score2}})</div>\n                <div class="starBox">\u4E00\u661F({{barber.score1}})</div>\n            </div>\n        </div>\n        <div class="commentListItem" v-for="comment in barber.lastComment">\n            <div class="userInfo"><img :src="comment.userAvt" class="userHead">\n                <div class="userInfoBox">\n                    <div class="nameLine">{{comment.userName}}</div>\n                    <div class="telLine">{{comment.userPhone}}</div>\n                </div>\n                <div class="marks">\n                    <img v-for="i in [0,1,2,3,4]" :src="db.data.oss+\'barber/images/start_orange.svg\'" style="width:12%;">\n                    {{5.0}}\u5206\n                </div>\n            </div> <span class="commentDetail">{{comment.content}}</span>\n            <div class="image" v-if="comment.img.length > 0">\n                <img style="width: 30%;margin-left: 3%;" @click="launcher.look(comment.img.join(\'|\'), src)" v-for="src in comment.img" :src="src" class="{{src?\'\':\'disn\'}}">\n            </div>\n            <div class="commentDate"><span>{{comment.create_time}}</span></div>\n        </div>\n        <div @click="jump(\'comment_list\')" class="checkAll" v-if="(barber.comments > 0)"><span>\u67E5\u770B\u6240\u6709{{barber.comments}}\u6761\u8BC4\u8BBA</span></div>\n    </div>\n    <div class="personalInfo" style="font-size:2.6vw;">\n        <div class="commentTitle">\n            <div class="commentTitleTxt">\u4E2A\u4EBA\u8D44\u6599</div>\n        </div>\n        <div class="personalInfo_">\n            {{{barber.introduce}}}\n        </div>\n    </div>\n    <div class="personalWorks">\n        <div class="worksTitle">Ta\u7684\u4F5C\u54C1(3)</div>\n        <div class="showBox">\n            <img @click="launcher.look(barber.opus.join(\'|\'), opu)" v-for="opu in barber.opus" :src="opu" alt="">\n        </div>\n        <div class="bottom">\n            <div class="cell line">\n                <div class="line_1" >\n                    <div class="cell icon" @click="jump(\'place\')"><img :src="db.data.oss+\'barber/images/icon-l.png\'" class="iconL"></div>\n                    <div class="cell txtLocation" @click="jump(\'place\')"><span class="distance_">{{launcher.getDistanceWithLatLon(barber.studio.lat,barber.studio.lon,db.data.user.lat,db.data.user.lon)}}</span> <br> <span class="address">{{barber.studio.place}}</span></div>\n                    <div class="cell check" @touchstart="beHere()">\u5BFC\u822A></div>\n                </div>\n                <div class="line_3">\n                    <div class="cell icon"><img :src="db.data.oss+\'barber/images/icon-d.png\'" class="iconD">\n                    </div>\n                    <div class="cell txtTel">\n                        \u7535\u8BDD<span>{{barber.studio.phone}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="tip {{(!!tipView === false)? \'disn\':\'\'}}">\n    <div class="cover" @click="empty(\'tipView\')"></div>\n    <div class="box">\n        <div class="line_1">\n            \u6E29\u99A8\u63D0\u793A\n        </div>\n        <div class="line_2">\n            {{tipView}}\n        </div>\n        <div class="line_3" @click="falseVal(\'tipView\')">\n            <span>\u786E\u5B9A</span>\n        </div>\n    </div>\n</div>\n<div class="bindPhone {{showBindPhoneView? \'\':\'disn\'}}">\n    <div class="cover" @click="change(\'showBindPhoneView\')"></div>\n    <div class="box">\n        <div class="line_1">\n            {{(!!db.data.user.phone===false)?\'\u7ED1\u5B9A\u624B\u673A\u53F7\':\'\u66F4\u6362\u624B\u673A\u53F7\'}}\n        </div>\n        <div class="line_2">\n            <input placeholder="\u8F93\u5165\u624B\u673A\u53F7" v-model="phone">\n        </div>\n        <div class="line_3">\n            <input placeholder="\u8F93\u5165\u9A8C\u8BC1\u7801" v-model="phoneCheck">\n            <span @click="sendPhoneCheck()">{{checkText}}</span>\n        </div>\n        <div class="line_4">\n            <span @click="bindPhone()">\u786E\u5B9A</span>\n            <span @click="change(\'showBindPhoneView\')">\u53D6\u6D88</span>\n        </div>\n    </div>\n</div>\n<!--\n<div class="yjqh" @click="launcher.quhao(barber,barber.service,barber.work_state)" :style="((barber.work_state==1)?\'\':\'background: #bbb;\')">\n    {{(barber.work_state==1)?\'\u4E00\u952E\u53D6\u53F7\':((barber.work_state==0)?\'\u5DF2\u4E0B\u73ED\':\'\u5403\u996D\u4E2D\')}}\n</div>-->\n<div class="yjqh" @click="readeyTakeNumber(barber)" :style="((barber.work_state==1)?\'\':\'background: #bbb;\')">\n    {{(barber.work_state==1)?\'\u4E00\u952E\u53D6\u53F7\':((barber.work_state==0)?\'\u5DF2\u4E0B\u73ED\':\'\u5403\u996D\u4E2D\')}}\n</div>\n'));
    }

    _createClass(detail_barber, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                },
                compiled: function compiled() {},

                data: _defineProperty({
                    barber: null,
                    tipView: '',
                    showBindPhoneView: false,
                    canSendPhoneCheck: true,
                    checkText: '获取短信验证码',
                    phone: '',
                    phoneCheck: ''
                }, 'barber', []),
                computed: {
                    followImg: {
                        get: function get() {
                            return this.barber.subscribed ? db.data.oss + 'barber/images/heart_white.svg' : db.data.oss + 'barber/images/heart.svg';
                        }
                    }
                },
                methods: {
                    init: function init() {
                        var _this3 = this;

                        setTimeout(function () {
                            _this3.launcher.showAndHideCover($(_this3.$el));
                        }, 100);
                        this.launcher.location(function () {
                            var dataStr = '{\n                            "lat":"' + db.data.user.lat + '",\n                            "lon":"' + db.data.user.lon + '",\n                            "bid":"' + db.data.nowBarberId + '",\n                        }';
                            console.log(db.data.api + 'getBarberDetail.php');
                            Util.ajax(dataStr, db.data.api + 'getBarberDetail.php', function (data) {
                                _this3.renderBarberStudio(data);
                                console.log(data);
                                _this3.studio = data.data.studio;
                            });
                        });
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
                    subscribeBarber: function subscribeBarber() {
                        var _this4 = this;

                        var dataStr = '{\n                            "bid":"' + db.data.nowBarberId + '",\n                        }';
                        Util.ajax(dataStr, db.data.api + 'subscribeBarber.php', function (data) {
                            if (data.e !== 0) {} else {
                                var obj = data.data;
                                if (obj.subscribe === 1) {
                                    Message.toast("谢谢支持 (●'◡'●)ﾉ♥");
                                    _this4.barber.subscribed = true;
                                } else {
                                    _this4.barber.subscribed = false;
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
                            wx.openLocation({
                                latitude: this.studio.lat / 1000000, // 纬度，浮点数，范围为90 ~ -90
                                longitude: this.studio.lon / 1000000, // 经度，浮点数，范围为180 ~ -180。
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
                    }
                }
            });
        }
    }]);

    return detail_barber;
}(Page);
//
