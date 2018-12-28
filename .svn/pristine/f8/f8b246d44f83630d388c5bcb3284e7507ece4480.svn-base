'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mysubscribe = function (_Page) {
    _inherits(mysubscribe, _Page);

    function mysubscribe(hash) {
        _classCallCheck(this, mysubscribe);

        return _possibleConstructorReturn(this, (mysubscribe.__proto__ || Object.getPrototypeOf(mysubscribe)).call(this, hash, '<style></style><div class="titleBar"><table><tr><td>&nbsp;</td></tr></table><div v-for="item in titleBar" @touchstart="titleItemClick($index)"><table class="titleBar_title {{item.status?\'red border_bottom_red\':\'grey\'}}"><tr><td>{{item.text}}</td></tr></table></div><table><tr><td>&nbsp;</td></tr></table></div><div class="yueta"><div class="person {{titleBar[0].status?\'\':\'disn\'}}"><div class="info_box" v-for="barber in barberList"><table class="line w100 h10" @click="launcher.detail_barber(barber.id)"><tr><td class="line1 name w50">&nbsp;&nbsp;&nbsp;&nbsp;{{barber.name}} &nbsp;<span class="grey" style="font-size:10px;font-weight:100;transform:translateY(-3px)">{{!!studio?studio.name:\'\'}}</span></td><td style="font-size:3vw" class="line1 w50 txtr grey" v-html="barber.waitStr+\'&nbsp;&nbsp;&nbsp;&nbsp;\'"></td></tr></table><ul class="block" @click="launcher.detail_barber(barber.id)"><img class="w100" :src="(barber.img.length>10)?barber.img:db.data.oss+\'barber/images/hello.jpg\'"><div class="distance">{{launcher.getDistance(barber.distance)}}</div><table class="fans"><tr><td>{{barber.fans}}<br>\u7C89\u4E1D\u6570</td><td>{{barber.satisfaction}}%<br>\u6EE1\u610F\u5EA6</td></tr></table></ul><table class="w100"><tr><td class="line1">&nbsp;&nbsp; <img class="h50" :src="db.data.oss+\'barber/images/pinglun.png\'"> <span class="grey" v-html="\'&nbsp;&nbsp;\u8BC4\u8BBA\u6570&nbsp;&nbsp;\'+barber.comments">&nbsp;</span></td><td class="txtr line1" @click="launcher.detail_barber(barber.id)"><span class="black" v-html="db.data.services[Math.floor(barber.service)]+\'&nbsp;&nbsp;\'">&nbsp;</span> <span class="red" v-html="barber.price+\'\uFFE5&nbsp;&nbsp;&nbsp;\'">&nbsp;</span></td></tr></table></div></div><div class="store {{titleBar[1].status?\'\':\'disn\'}}"><div class="info_box" v-for="studio in studioList"><table class="w100" @click="launcher.detail_studio(studio.id)"><tr><td class="line1 name w50" v-html="\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\' + studio.name"></td><td style="font-size:10px" class="line1 w50 txtr grey">{{studio.stateStr}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr></table><ul class="block" @click="launcher.detail_studio(studio.id)"><img class="w100" :src="(studio.img.length>10)?studio.img:db.data.oss+\'barber/images/hello.jpg\'"><div class="distance">{{launcher.getDistance(studio.distance)}}</div><table class="pos_a fans"><tr><td>{{studio.fans}}<br>\u7C89\u4E1D\u6570</td><td>{{studio.satisfaction}}%<br>\u6EE1\u610F\u5EA6</td></tr></table></ul><table class="w100"><tr><td @click="launcher.showTicketView(studio.discount_id, $index)" class="line1 name w50">&nbsp;&nbsp; <img class="h40" :src="db.data.oss+\'barber/images/hongbao.png\'"> <b class="red">&nbsp;&nbsp;{{studio.firstDiscountTxt}}</b></td><td class="line1 w50 txtr"><span class="black">{{studio.srv}}</span> <b class="red">{{studio.price}}\uFFE5&nbsp;</b> <b style="color:#ddd;text-decoration:line-through">{{studio.original_price}}\uFFE5</b> &nbsp;&nbsp;&nbsp;</td></tr></table></div></div></div><div class="endtouch w100 h100 pos_a t0"></div>'));
    }

    _createClass(mysubscribe, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.launcher = launcher.vue;
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {
                    titleBar: [{ text: '口碑发型师', status: false }, { text: '专注剪发店', status: true }],
                    studioList: [],
                    barberList: [],
                    studioStart: 0,
                    barberStart: 0,
                    count: 30
                },
                methods: {
                    init: function init() {
                        var _this2 = this;

                        setTimeout(function () {
                            _this2.launcher.showAndHideCover($(_this2.$el));
                        }, 100);

                        var dataStr = '{\n                        "lon":"' + db.data.user.lon + '",\n                        "lat":"' + db.data.user.lat + '",\n                        "start":0,\n                        "count":"' + (this.studioList.length || this.count) + '",\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getUserSubscribeStudioList.php', function (data) {
                            _this2.renderUserSubscribeStudioList(data);
                            var dataStr = '{\n                            "lon":"' + db.data.user.lon + '",\n                            "lat":"' + db.data.user.lat + '",\n                            "start":0,\n                            "count":' + (_this2.barberList.length || _this2.count) + ',\n                        }';
                            Util.ajax(dataStr, db.data.api + 'getUserSubscribeBarberList.php', function (data) {
                                _this2.renderUserSubscribeBarberList(data);
                            });
                        });
                    },
                    renderUserSubscribeStudioList: function renderUserSubscribeStudioList(data) {
                        if (data.e !== 0) {} else {
                            if (!!data.data[0]) {
                                this.studioList = [];
                                for (var key in data.data) {
                                    if (Math.floor(key) < 100) {
                                        for (var k in data.data[key].srv) {
                                            data.data[key].srv = k;
                                            break;
                                        }
                                        if (this.studioList.length === 0) {
                                            this.studioList = JSON.parse(JSON.stringify([data.data[key]]));
                                        } else {
                                            this.studioList.push(data.data[key]);
                                        }
                                    }
                                }
                                this.studioStart = data.data.nextStart;
                            }
                        }
                    },
                    renderUserSubscribeBarberList: function renderUserSubscribeBarberList(data) {
                        if (data.e !== 0) {} else {
                            if (!!data.data[0]) {
                                this.barberList = [];
                                for (var key in data.data) {
                                    if (Math.floor(key) < 100) {
                                        if (this.barberList.length === 0) {
                                            this.barberList = JSON.parse(JSON.stringify([data.data[key]]));
                                        } else {
                                            this.barberList.push(data.data[key]);
                                        }
                                    }
                                }
                                this.barberStart = data.data.nextStart;
                            }
                        }
                    },
                    titleItemClick: function titleItemClick(index) {
                        if (!this.titleBar[index].status) {
                            var length, i;
                            length = this.titleBar.length;
                            for (i = 0; i < length; i++) {
                                if (index != i) {
                                    this.titleBar[i].status = false;
                                }
                            }
                            this.titleBar[index].status = true;
                        }
                    }
                }
            });
        }
    }]);

    return mysubscribe;
}(Page);
