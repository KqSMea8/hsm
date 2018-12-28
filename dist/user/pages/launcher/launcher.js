'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var launcher = function (_Page) {
    _inherits(launcher, _Page);

    function launcher(hash) {
        _classCallCheck(this, launcher);

        return _possibleConstructorReturn(this, (launcher.__proto__ || Object.getPrototypeOf(launcher)).call(this, hash));
    }

    _createClass(launcher, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {
                    var _this2 = this;

                    setTimeout(function () {
                        _this2.init();
                    }, 400);
                },

                data: {
                    hasPosition: false,
                    imgIndex: 0,
                    imgs: []
                },
                computed: {},
                methods: {
                    handlerError: function handlerError(e) {
                        switch (e) {
                            case -1:
                                Message.toast('请填写正确的手机号码', 3);
                                break;
                            case -2:
                                Message.toast('短信服务器发送失败', 3);
                                break;
                            case -6:
                                Message.toast('需要用户权限', 3);
                                break;
                            case -7:
                                Message.toast('用户权限错误', 3);
                                break;
                            case -8:
                                Message.toast('短信发送过于频繁', 3);
                                break;
                            case -9:
                                Message.toast('短信验证超时', 3);
                                break;
                            default:
                                Message.toast('其他错误代码 ' + e, 3);
                                break;
                        }
                    },
                    init: function init() {
                        var _this3 = this;

                        if (app.secondHash === 'index') {
                            var timer = setInterval(function () {
                                if (typeof index !== "undefined" && access) {
                                    clearInterval(timer);
                                    console.log('this.jump(\'index\')');
                                    _this3.jump('index');
                                }
                            }, 80);
                        }
                    },
                    renderUserInfo: function renderUserInfo(data) {
                        if (data.e !== 0) {} else {
                            db.data.user.nickname = data.data.nickname;
                            db.data.user.phone = data.data.phone;
                            db.data.user.avt = data.data.avt;
                            db.data.user.sex = data.data.sex;
                            db.data.user.amount = data.data.amount;
                        }
                    },
                    location: function location() {
                        var func = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                        var timer = setTimeout(function () {
                            if (func !== null) {
                                func();
                            }
                        });
                        wx.getLocation({
                            type: 'wgs84',
                            success: function success(res) {
                                clearTimeout(timer);
                                localStorage.setItem('lon', res.longitude);
                                localStorage.setItem('lat', res.latitude);
                                db.data.user.lon = res.longitude;
                                db.data.user.lat = res.latitude;
                                if (func !== null) {
                                    func();
                                }
                            }
                        });
                    },
                    quhao: function quhao(barber) {
                        var _this4 = this;

                        var srvId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                        var work_state = arguments[2];

                        if (work_state != 1) return;
                        if (this.doingQuhao) {
                            Message.toast('取号过于频繁');
                            return;
                        }

                        MessageBarber.confirm("过号需重新取号，请安排好时间及时到店", function () {
                            _this4.doQuhao(barber, srvId);
                            _this4.doingQuhao = true;
                        });
                    },
                    doQuhao: function doQuhao(barber) {
                        var _this5 = this;

                        var srvId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

                        var dataStr = '{\n                        "bid":' + barber.id + ',\n                        "srvid":' + (barber.service || srvId) + ',\n                        "owner_id":' + barber.owner_id + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'appointmentBarber.php', function (data) {
                            if (data.e !== 0) {
                                if (data.e == -8) {
                                    Message.toast("您已经有多条处于等待中的订单了, 请移步我的订单中查看您的排队信息哦~", 5);
                                }
                            } else {
                                if (data.data.msg) {
                                    MessageBarber.dialog('提示', data.data.msg, '确定', '取消', function () {
                                        window[location.hash.split('#')[1]].vue.showBindPhoneView = true;
                                        Message.removeDialog();
                                    }, function () {
                                        Message.removeDialog();
                                    });
                                } else {
                                    _this5.jump('orderlist');
                                }
                            }
                            setTimeout(function () {
                                _this5.doingQuhao = false;
                            }, 3000);
                        });
                    },
                    getDistanceWithLatLon: function getDistanceWithLatLon(lat1, lng1, lat2, lng2) {
                        var s = Util.getDistance(lat1, lng1, lat2, lng2);
                        return this.getDistance(s);
                    },
                    getDistance: function getDistance(s) {
                        if (s < 1000) {
                            return Math.floor(s) + 'M';
                        } else {
                            return Math.floor(s / 1000) + 'KM';
                        }
                    },
                    detail_barber: function detail_barber(id) {
                        db.data.nowBarberId = id;
                        this.jump('detail_barber');
                    },
                    detail_studio: function detail_studio(id) {
                        if (id != 24 && id != 25) {
                            db.data.nowStudioId = id;
                            this.jump('detail_studio');
                        }
                    },
                    look: function look(imgStr, currenImg) {
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
                                current: currenImg, // 当前显示图片的http链接
                                urls: urls // 需要预览的图片http链接列表
                            });
                        }
                    },
                    showAndHideCover: function showAndHideCover(obj_vue) {
                        obj_vue.find('.endtouch').show();
                        setTimeout(function () {
                            obj_vue.find('.endtouch').hide();
                        }, 800);
                    },
                    smooth: function smooth(func) {
                        if (app.isDoingAnimation) {
                            var interTimer;
                            var outTimer;
                            interTimer = setInterval(function () {
                                if (!app.isDoingAnimation) {
                                    clearInterval(interTimer);
                                    clearTimeout(outTimer);
                                    func();
                                }
                            }, 100);
                            outTimer = setTimeout(function () {
                                try {
                                    clearInterval(interTimer);
                                } catch (e) {}
                            }, 2000);
                        } else {
                            func();
                        }
                    }
                }
            });
        }
    }]);

    return launcher;
}(Page);
