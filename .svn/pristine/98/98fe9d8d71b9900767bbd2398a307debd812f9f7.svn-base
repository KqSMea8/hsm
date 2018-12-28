'use strict';

app = {
    API_URL: db.data.domain + 'src/index.php',
    controller: 'Barber_barber_setting',
    key: 'bid'
};
index_vue = new Vue({
    el: '#index_vue',
    compiled: function compiled() {
        this.initData();
    },
    data: {
        timer0: null,
        timer: null,
        service: ['aaa', 'aaa', 'aaa', 'aaa'],
        footBar: [{ text: '我的信息', img: 'wode.png', click_img: 'wode_click.png', status: false }, { text: '订单', img: 'yueta.png', click_img: 'yueta_click.png', status: true }],
        orderTitle: [{ state: 0, text: '待消费', choose: true, list: [] }, { state: 2, text: '已完成', choose: false, list: [] }, { state: 12, text: '问题订单', choose: false, list: [] }, { state: 3, text: '已取消', choose: false, list: [] }],
        user: {
            img: '',
            phone: '',
            fans: 2
        },
        work_: true,
        launch_: false,
        users: [],
        list: [],
        yestodayTime: ''
    },
    computed: {
        work: {
            set: function set(val) {
                var _this = this;
                var dataStr;
                if (val) {
                    //上班
                    dataStr = '{' + '"' + Api.TABLE + '":"' + BARBER_TABLE + '",' + '"' + Api.KEY + '":{phone:"' + this.user.phone + '"},' + '"' + Api.MESSAGE + '":{"work_state":1}' + '}';
                    console.log('update shangb');
                } else {
                    //下班
                    dataStr = '{' + '"' + Api.TABLE + '":"' + BARBER_TABLE + '",' + '"' + Api.KEY + '":{phone:"' + this.user.phone + '"},' + '"' + Api.MESSAGE + '":{"work_state":0}' + '}';
                    console.log('update down down');
                }
                Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Update_obj', function (data) {
                    if (data[Api.CODE] === 0) {
                        _this.work_ = val;
                        var index_vue = $('#index_vue');
                        if (val) {
                            index_vue.find('.b1').css('background', '#aaa');
                            index_vue.find('.b2').css('background', '#eee');
                            index_vue.find('.b3').css('background', '#eee');
                        } else {
                            index_vue.find('.b1').css('background', '#eee');
                            index_vue.find('.b2').css('background', '#eee');
                            index_vue.find('.b3').css('background', '#aaa');
                        }
                    } else {
                        Message.getInstance().toast(data[Api.MESSAGE], 3);
                    }
                });
            },
            get: function get() {
                return this.work_;
            }
        },
        launch: {
            set: function set(val) {
                var _this = this;
                var dataStr;
                dataStr = '{' + '"' + Api.TABLE + '":"' + BARBER_TABLE + '",' + '"' + Api.KEY + '":{phone:"' + this.user.phone + '"},' + '"' + Api.MESSAGE + '":{"work_state":2}' + '}';
                Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Update_obj', function (data) {
                    ////alert('07');
                    if (data[Api.CODE] === 0) {
                        _this.launch_ = val;
                        var index_vue = $('#index_vue');
                        index_vue.find('.b1').css('background', '#eee');
                        index_vue.find('.b2').css('background', '#aaa');
                        index_vue.find('.b3').css('background', '#eee');
                    } else {
                        Message.getInstance().toast(data[Api.MESSAGE], 3);
                    }
                    ////alert(7);
                });
            },
            get: function get() {
                return this.launch_;
            }
        }
    },
    methods: {
        change2user: function change2user() {
            Util.getInstance().ajax("{}", db.data.api + '?r=' + app.controller + '/change_2_user', function (data) {
                if (data[Api.CODE] === 0) {
                    location.href = 'index.php';
                }
            }, 'get');
        },
        doOrderError: function doOrderError(dataStr) {
            var _this = this;
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Change_order_error', function (data) {
                if (data[Api.CODE] === 0) {
                    _this.initOrderList();
                }
            });
        },
        cancelOrderError: function cancelOrderError(order) {
            var dataStr = '{' + '"' + Api.ID + '":"' + order.id + '",' + '"' + Api.MESSAGE + '":0' + '}';
            this.doOrderError(dataStr);
        },
        orderError: function orderError(order, val) {
            var dataStr = '{' + '"' + Api.ID + '":"' + order.id + '",' + '"' + Api.MESSAGE + '":' + val + '}';
            this.doOrderError(dataStr);
        },
        cancelCallOrder: function cancelCallOrder(order, event) {
            var _this = this;
            var obj = $(event.target);
            if (confirm('确认要取消叫号吗')) {
                var dataStr = '{' + '"' + Api.ID + '":"' + order.id + '"' + '}';
                Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Cancel_call_order', function (data) {
                    if (data[Api.CODE] === 0) {

                        _this.initOrderList();
                    } else {
                        if (_this.timer !== null) {
                            clearInterval(_this.timer);
                            _this.timer = null;
                        }

                        var remain = 60 - data[Api.MESSAGE];
                        _this.timer = setInterval(function () {
                            obj.text('\u53D6\u6D88\u53EB\u53F7(' + remain-- + ')');
                            if (remain < 0) {
                                clearInterval(_this.timer);
                                _this.timer = null;
                            }
                        }, 1000);
                    }
                });
            }
        },
        callOrder: function callOrder(order) {
            var _this = this;
            var dataStr;
            if (confirm('确认要对其进行叫号吗')) {
                dataStr = '{' + '"' + Api.ID + '":"' + order.id + '"' + '}';
                Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Into_call_order', function (data) {
                    //alert('08');
                    if (data[Api.CODE] === 0) {
                        _this.initOrderList();
                    } else {
                        Message.getInstance().toast(data[Api.MESSAGE], 3);
                    }
                    //alert(8);
                });
            }
        },
        getUsersInfo: function getUsersInfo(uidArr) {
            for (var i = 0; i < uidArr.length; i++) {
                if (!!db.data.users[uidArr[i].id] === true) db.data.users.remove(db.data.users[uidArr[i].id]);
            }if (uidArr.length === 0) return;
            uidArr = Util.getInstance().outRepeat(uidArr);
            var uidStr = uidArr.join('|');
            var dataStr = '\n                    {\n                        "' + Api.ID + '":"' + uidStr + '"\n                    }\n                    ';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=barber/get_user_info_by_uid', function (data) {
                if (data[Api.CODE] === 0) {
                    if (!!data[Api.MESSAGE] && data[Api.MESSAGE].length) {
                        var i;
                        for (i = 0; i < data[Api.MESSAGE].length; i++) {
                            db.data.users[Math.floor(data[Api.MESSAGE][i].id)] = data[Api.MESSAGE][i];
                        }
                    }
                }
            });
        },
        orderChoose: function orderChoose(index) {
            var i,
                _this = this;
            for (i = 0; i < this.orderTitle.length; i++) {
                this.orderTitle[i].choose = false;
            }
            this.orderTitle[index].choose = true;
            if (index < 2) {
                if (_this.timer !== null) clearInterval(_this.timer);
                _this.timer = setInterval(function () {
                    _this.Get_order_list_by_time(_this.yestodayTime);
                }, 10000);
                this.Get_order_list_by_time(this.yestodayTime);
            }
        },
        initFans: function initFans() {
            var _this = this;
            var dataStr;
            dataStr = '{' + '"' + Api.TABLE + '":"' + USER_BARBER_TABLE + '",' + '"' + Api.KEY + '":"' + app.key + '"' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Get_obj_count', function (data) {
                //alert('01');
                if (data[Api.CODE] === 0) {
                    _this.user.fans = data[Api.MESSAGE];
                } else {
                    Message.getInstance().toast(data[Api.MESSAGE], 3);
                }
                //alert(1);
            });
        },
        into_service: function into_service(order) {
            Util.getInstance().ajax('{}', db.data.api + '?r=' + app.controller + '/into_service', function (data) {
                //alert('02');
                if (data[Api.CODE] === 0) {
                    order.state = 1;
                } else {
                    Message.getInstance().toast(data[Api.MESSAGE], 3);
                }
                //alert(2);
            });
        },
        initWorkState: function initWorkState() {
            var _this = this;
            var dataStr, work_state;
            dataStr = '{' + '"' + Api.TABLE + '":"' + BARBER_TABLE + '",' + '"' + Api.KEY + '":{phone:"' + this.user.phone + '"}' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Get_obj', function (data) {
                //alert('03');
                if (data[Api.CODE] === 0) {
                    work_state = Math.floor(data[Api.MESSAGE]['work_state']);
                    if (work_state === 0) {
                        _this.work = false;
                    } else if (work_state === 1) {
                        _this.work = true;
                    } else if (work_state === 2) {
                        _this.launch = true;
                    }
                } else {
                    Message.getInstance().toast(data[Api.MESSAGE], 3);
                }
                //alert(31);
            });
        },
        init: function init() {},
        initData: function initData() {
            var _this = this;
            this.db = db;
            Util.getInstance().ajax('{}', db.data.api + '?r=' + app.controller + '/get_info', function (data) {
                //alert('09');
                if (data[Api.CODE] === 0) {
                    _this.user.img = data[Api.MESSAGE].img;
                    _this.user.phone = data[Api.MESSAGE].phone;
                    _this.initFans();
                    _this.initWorkState();
                    _this.initService();
                    _this.initOrderList();
                } else {
                    alert(JSON.stringify(data[Api.MESSAGE]));
                }
                //alert(9);
            }, 'get');
        },
        initService: function initService() {
            var dataStr, i;
            var _this = this;
            dataStr = '{' + '"' + Api.TABLE + '":"' + SERVICE_TABLE + '"' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Get_obj_arr', function (data) {
                //alert('041');
                if (data[Api.CODE] === 0) {
                    for (i = 0; i < data[Api.MESSAGE].length; i++) {
                        _this.service[Math.floor(data[Api.MESSAGE][i].id)] = data[Api.MESSAGE][i].name;
                    }
                } else {
                    Message.getInstance().toast(data[Api.MESSAGE], 3);
                }
                //alert(4);
            });
        },
        initOrderList: function initOrderList() {
            var _this = this;
            var todayObj = new Date();
            todayObj.setHours(0);
            todayObj.setMinutes(0);
            todayObj.setSeconds(0);
            var today0timeStamp = Math.floor(todayObj.getTime() / 1000);

            var yestodayStamp = today0timeStamp;
            var yestodayObj = new Date(yestodayStamp * 1000);
            var yestodayYear = yestodayObj.getFullYear();
            var yestodayMonth = Util.getInstance().int2string(yestodayObj.getMonth() + 1, 2);
            var yestodayDay = Util.getInstance().int2string(yestodayObj.getDate(), 2);
            this.yestodayTime = yestodayYear + '-' + yestodayMonth + '-' + yestodayDay + ' 00:00:00';

            var bannianStamp = today0timeStamp - 86400 * 30;
            var bannianObj = new Date(bannianStamp * 1000);
            var bannianYear = Util.getInstance().int2string(bannianObj.getMonth() + 1, 2);
            var bannianMonth = Util.getInstance().int2string(bannianObj.getDate(), 2);
            var bannianDay = bannianObj.getDate();

            _this.Get_order_list_by_time(bannianYear + '-' + bannianMonth + '-' + bannianDay + ' 00:00:00');

            if (_this.timer !== null) clearInterval(_this.timer);
            _this.timer = setInterval(function () {
                _this.Get_order_list_by_time(_this.yestodayTime);
            }, 10000);
        },
        Get_order_list_by_time: function Get_order_list_by_time(time) {
            var _this = this;
            var dataStr = '{' + '"' + Api.TABLE + '":"' + ORDER_TABLE + '",' + '"' + Api.KEY + '":"' + app.key + '",' + '"' + Api.AND_ + '": {create_time:[">","' + time + '"]}' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/Get_obj_arr', function (data) {
                var i = void 0,
                    uidArr = [];
                //alert('06');
                if (data[Api.CODE] === 0) {
                    var list = data[Api.MESSAGE];
                    if (list.length > 0) {
                        list.reverse();
                        for (i = 0; i < list.length; i++) {
                            uidArr.push(list[i].uid);
                        }
                        _this.getUsersInfo(uidArr);
                        for (i = 0; i < _this.list.length; i++) {
                            if (_this.list[i].create_time < _this.yestodayTime) {
                                list.push(_this.list[i]);
                            }
                        }
                        _this.list = list;
                    }
                } else {
                    Message.getInstance().toast(data[Api.MESSAGE], 3);
                }
            });
        },
        titleItemClick: function titleItemClick(index) {
            var length, i;
            if (!this.titleBar[index].status) {
                length = this.titleBar.length;
                for (i = 0; i < length; i++) {
                    if (index !== i) {
                        this.titleBar[i].status = false;
                    }
                }
                this.titleBar[index].status = true;
            }
        },
        footItemClick: function footItemClick(index) {
            var length, i;
            if (!this.footBar[index].status) {
                length = this.footBar.length;
                for (i = 0; i < length; i++) {
                    if (index !== i) {
                        this.footBar[i].status = false;
                    }
                }
                this.footBar[index].status = true;
            }
        },
        pushPay: function pushPay(order) {
            var dataStr = '{' + '"' + Api.ID + '":' + order.id + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + app.controller + '/push_pay', function (data) {
                if (data[Api.CODE] === 0) {
                    alert('提醒成功');
                } else {
                    Message.getInstance().toast(data[Api.MESSAGE], 3);
                }
            });
        }
    }
});
//# sourceMappingURL=admin_barber.js.map