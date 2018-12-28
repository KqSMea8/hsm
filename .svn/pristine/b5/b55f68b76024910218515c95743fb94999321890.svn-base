'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main(time, url) {
        var _this = this;

        _classCallCheck(this, Main);

        this.pages = ['index', 'detail_studio', 'ticket', 'detail_barber', 'mytickets', 'getmytickets', 'orderlist', 'myhair', 'latest_comment', 'mysubscribe', 'comment_list', 'comment', 'be_here', 'place', 'jsapi', 'buy', 'commodity_detail', 'commodity_detail_store', 'share', 'recharge', 'deal_list', 'select_ticket'];
        this.loadedPages = [];
        Head.js(["pages/launcher/launcher.js?v=1542788778.8095067"], function () {
            var dataStr = '{\n                    "time" : "' + time + '"\n                }';
            Util.ajax(dataStr, db.data.api + 'AjaxFirstAuth.php', function (data) {
                if (data.e === 0) {
                    var _dataStr = '{\n                            "url" : "' + (location.href.split(':')[0] + url) + '"\n                        }';
                    Util.ajax(_dataStr, db.data.api + 'getWxJSParam.php', function (data) {
                        if (data.e === 0) {
                            Wx.config({
                                debug: false,
                                appId: data.data.appId,
                                timestamp: data.data.timestamp,
                                nonceStr: data.data.nonceStr,
                                signature: data.data.signature,
                                jsApiList: ['checkJsApi', 'openLocation', 'getLocation', 'closeWindow', 'chooseImage', 'uploadImage', 'downloadImage', 'onMenuShareTimeline', 'onMenuShareAppMessage']
                            });
                            access = true;
                            Util.ajax(null, db.data.api + 'doSharePrepare.php', function (data) {
                                if (data.e !== 0) {
                                    Message.toast('分享功能出现错误');
                                } else {
                                    var str = '送福利啦，与好友一起享受共享优惠券吧,剪约派打造最贴心的互联网造型服务，更多优惠等你体验~~~';
                                    var redirect = encodeURIComponent(Config.index_url + 'real.php?hash=ticket&share_id=' + data.data.id);
                                    var _url = Config.user_api + 'login.php?clientType=wx&redirect=' + redirect;
                                    console.log(_url);
                                    var img = db.data.oss + 'barber/images/logo.jpg';
                                    var share = function share() {
                                        // MessageBarber.alert('恭喜，你已完成了分享，每一次分享行为并成功邀请一位您的朋友（新用户）到店消费，即可获得一张优惠券（根据到店记录自动发放，可获得多张）');
                                        MessageBarber.alert('恭喜，你已完成了分享，分享行为并成功邀请一位您的朋友（新用户）到店消费，即可获得一张优惠券');
                                    };
                                    Wx.ready(function () {
                                        Wx.onMenuShareTimeline({
                                            title: str, // 分享标题
                                            link: _url, // 分享链接
                                            imgUrl: img, // 分享图标
                                            success: function success() {
                                                share();
                                            },
                                            cancel: function cancel() {}
                                        });
                                        Wx.onMenuShareAppMessage({
                                            title: str, // 分享标题
                                            desc: '', // 分享描述
                                            link: _url, // 分享链接
                                            imgUrl: img, // 分享图标
                                            type: '', // 分享类型,music、video或link，不填默认为link
                                            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                            success: function success() {
                                                share();
                                            },
                                            cancel: function cancel() {}
                                        });
                                        Head.js(["../static/js/spin.min.js?v=1542788782.2692564"], function () {});
                                    });
                                    Wx.error(function (res) {
                                        console.log('wx register error');
                                        console.log(res);
                                    });
                                }
                            });
                        }
                    });
                } else {
                    document.getElementById("alink").click();
                }
            });
            _this.run();
        });
    }

    _createClass(Main, [{
        key: 'run',
        value: function run() {
            this.addSections();
            var secondHash = 'index';
            var hash = $_GET['hash'];
            if (!!hash) {
                secondHash = hash;
                if (hash === 'mytickets') {
                    this.initMyTicketData();
                } else if (hash === 'getmytickets') {
                    this.initGetMyTicketData();
                } else if (hash === 'orderlist') {
                    this.initOrderList();
                } else if (hash === 'ticket') {
                    this.initTicket();
                } else if (hash === 'comment') {
                    this.initComment();
                } else if (hash === 'place') {
                    this.initPlace();
                } else if (hash === 'jsapi') {
                    this.addPage('jsapi');
                    Util.hasLoadJsCallBack(['app.ready', 'launcher', 'jsapi'], function () {
                        db.data.jsapi_order_id = $_GET['order_id'];
                        app.jump2('jsapi');
                    });
                } else if (hash === 'buy') {
                    this.initBuy();
                } else if (hash === 'commodity_detail') {
                    this.initCommodityDetail();
                } else if (hash === 'commodity_detail_store') {
                    this.initCommodityDetailStore();
                } else if (hash === 'share') {
                    this.initShare();
                } else if (hash === 'recharge') {
                    this.initRecharge();
                } else if (hash === 'deal_list') {
                    this.initDealList();
                } else if (hash === 'select_ticket') {
                    this.initSelectTicket();
                } else {
                    secondHash = 'index';
                }
            }
            this.addPage('index');
            Main.initApp(secondHash);
        }
    }, {
        key: 'initCommodityDetail',
        value: function initCommodityDetail() {
            this.addPage('commodity_detail');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'commodity_detail'], function () {
                db.data.buy_id = $_GET['buy_id'];
                app.jump2('commodity_detail');
            });
        }
    }, {
        key: 'initCommodityDetailStore',
        value: function initCommodityDetailStore() {
            this.addPage('commodity_detail_store');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'commodity_detail_store'], function () {
                db.data.buy_id = $_GET['buy_id'];
                app.jump2('commodity_detail_store');
            });
        }
    }, {
        key: 'initShare',
        value: function initShare() {
            this.addPage('share');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'share'], function () {
                app.jump2('share');
            });
        }
    }, {
        key: 'initRecharge',
        value: function initRecharge() {
            this.addPage('recharge');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'recharge'], function () {
                app.jump2('recharge');
            });
        }
    }, {
        key: 'initDealList',
        value: function initDealList() {
            this.addPage('deal_list');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'deal_list'], function () {
                app.jump2('deal_list');
            });
        }
    }, {
        key: 'initSelectTicket',
        value: function initSelectTicket() {
            this.addPage('select_ticket');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'select_ticket'], function () {
                app.jump2('select_ticket');
            });
        }
    }, {
        key: 'initBuy',
        value: function initBuy() {
            this.addPage('buy');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'buy'], function () {
                db.data.buy_id = $_GET['buy_id'];
                app.jump2('buy');
            });
        }
    }, {
        key: 'initComment',
        value: function initComment() {
            this.addPage('comment');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'comment'], function () {
                db.data.comment_order_id = $_GET['id'];
                app.jump2('comment');
            });
        }
    }, {
        key: 'initPlace',
        value: function initPlace() {
            this.addPage('place');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'place'], function () {
                app.jump2('place');
            });
        }
    }, {
        key: 'initMyTicketData',
        value: function initMyTicketData() {
            this.addPage('mytickets');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'mytickets'], function () {
                app.jump2('mytickets');
            });
        }
    }, {
        key: 'initGetMyTicketData',
        value: function initGetMyTicketData() {
            this.addPage('getmytickets');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'getmytickets'], function () {
                app.jump2('getmytickets');
            });
        }
    }, {
        key: 'initTicket',
        value: function initTicket() {
            this.addPage('ticket');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'ticket'], function () {
                if ($_GET['name']) {
                    db.data.ticket_name = $_GET['name'];
                    app.jump2('ticket');
                } else if ($_GET['share_id']) {
                    var flag = false;
                    var timer = setInterval(function () {
                        if (typeof Wx.checkJsApi === 'function') {
                            Wx.checkJsApi({
                                jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                                success: function success(res) {
                                    if (res.checkResult.getLocation) {
                                        if (!flag) {
                                            clearInterval(timer);
                                            flag = true;
                                            Wx.getLocation({
                                                success: function success(res) {
                                                    var dataStr = '{\n                                                    "uid" : ' + $_GET['share_id'] + '\n                                                }';
                                                    Util.ajax(dataStr, db.data.api + 'getSharedInfo.php', function (data) {
                                                        if (data.e === 0) {
                                                            if (data.data.ticket) {
                                                                db.data.ticket_name = false;
                                                                db.data.ticket_info = data.data;
                                                                app.jump2('ticket');
                                                            } else {
                                                                Message.toast("领取失败!您不是新用户或已经领取过了!");
                                                                var _timer = setInterval(function () {
                                                                    clearInterval(_timer);
                                                                    app.jump2('share');
                                                                }, 2000);
                                                            }
                                                        } else {
                                                            app.jump2('index');
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }
                                }
                            });
                        }
                    }, 500);
                }
            });
        }
    }, {
        key: 'initOrderList',
        value: function initOrderList() {
            this.addPage('orderlist');
            Util.hasLoadJsCallBack(['app.ready', 'launcher', 'orderlist'], function () {
                app.jump2('orderlist');
                setTimeout(function () {
                    if (!$_GET.index) {
                        $_GET.index = 0;
                    }
                    orderlist.vue.orderChoose(Math.floor($_GET.index));
                }, 250);
            });
        }
    }, {
        key: 'addPage',
        value: function addPage(page) {
            var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            if (Util.in_array(this.loadedPages, page)) return;
            this.loadedPages.push(page);
            var callback = function callback() {
                Util.hasLoadJsCallBack(page, function () {
                    window[page] = new window[page](page);
                    setTimeout(function () {
                        func();
                    }, 80);
                });
            };
            if (page === 'index') Head.js("pages/index/index.js?v=1542788778.489027", callback);else if (page === 'detail_studio') Head.js("pages/detail_studio/detail_studio.js?v=1542788778.5190327", callback);else if (page === 'ticket') Head.js("pages/ticket/ticket.js?v=1542788779.1887844", callback);else if (page === 'detail_barber') Head.js("pages/detail_barber/detail_barber.js?v=1542788778.503616", callback);else if (page === 'mytickets') Head.js("pages/mytickets/mytickets.js?v=1542788779.4335072", callback);else if (page === 'getmytickets') Head.js("pages/getmytickets/getmytickets.js?v=1542788778.864796", callback);else if (page === 'orderlist') Head.js("pages/orderlist/orderlist.js?v=1542788778.841932", callback);else if (page === 'myhair') Head.js("pages/myhair/myhair.js?v=1542788779.1411273", callback);else if (page === 'latest_comment') Head.js("pages/latest_comment/latest_comment.js?v=1542788778.834132", callback);else if (page === 'mysubscribe') Head.js("pages/mysubscribe/mysubscribe.js?v=1542788779.456307", callback);else if (page === 'comment_list') Head.js("pages/comment_list/comment_list.js?v=1542788778.8500493", callback);else if (page === 'comment') Head.js("pages/comment/comment.js?v=1542788778.5703409", callback);else if (page === 'be_here') Head.js("pages/be_here/be_here.js?v=1542788779.4476135", callback);else if (page === 'place') Head.js("pages/place/place.js?v=1542788779.4648829", callback);else if (page === 'jsapi') Head.js("pages/jsapi/jsapi.js?v=1542788778.8174632", callback);else if (page === 'buy') Head.js("pages/buy/buy.js?v=1543199100.045381", callback);else if (page === 'commodity_detail') Head.js("pages/commodity_detail/commodity_detail.js?v=1543472940.1637695", callback);else if (page === 'commodity_detail_store') Head.js("pages/commodity_detail_store/commodity_detail_store.js?v=1543472948.1668134", callback);else if (page === 'share') Head.js("pages/share/share.js?v=1542788778.824787", callback);else if (page === 'recharge') Head.js("pages/recharge/recharge.js?v=1542788779.1077232", callback);else if (page === 'deal_list') Head.js("pages/deal_list/deal_list.js?v=1542788779.1342266", callback);else if (page === 'select_ticket') Head.js("pages/select_ticket/select_ticket.js?v=1542788779.1251328", callback);
        }
    }, {
        key: 'addSections',
        value: function addSections() {
            var $body = $('body'),
                i = void 0;
            for (i = 0; i < this.pages.length; i++) {
                $body.append('<section id="' + this.pages[i] + '_vue"></section>');
            }
        }
    }], [{
        key: 'initApp',
        value: function initApp(secondHash) {
            var config = {
                'isDebug': true,
                'projectName': 'myapp',
                'defaultHash': 'launcher',
                'secondHash': secondHash,
                'mainHash': 'index',
                'transitionTag': 'section',
                'transitionName': 'transform',
                'transitionTime': '0.4',
                'transitionType': db.data.isIos ? 'ease' : 'ease-in-out'
            };
            var app = new H5App(config);
            app = appCreator.init(app);
            app.noDie = true;
            app.isIos = db.data.isIos;
            app.run();
            window.app = app;
            launcher = new launcher('launcher');
        }
    }]);

    return Main;
}();
//刷新上载//
