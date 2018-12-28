class Main {
    constructor(time,url) {
        this.pages = [
            'index', 'detail_studio', 'ticket', 'detail_barber', 'mytickets', 'getmytickets', 'orderlist', 'myhair',
            'latest_comment', 'mysubscribe', 'comment_list', 'comment', 'be_here', 'place', 'jsapi', 'buy',
            'commodity_detail', 'commodity_detail_store', 'share', 'recharge', 'deal_list', 'select_ticket'
        ];
        this.loadedPages = [];
        Head.js([
            'pages/launcher/launcher.js',
        ], () => {
            let dataStr = `{
                    "time" : "${time}"
                }`;
            Util.ajax(dataStr, `${db.data.api}AjaxFirstAuth.php`, function (data) {
                if (data.e === 0) {
                    let dataStr = `{
                            "url" : "${location.href.split(':')[0] + url}"
                        }`;
                    Util.ajax(dataStr, db.data.api + 'getWxJSParam.php', function (data) {
                        if (data.e === 0) {
                            Wx.config({
                                debug: false,
                                appId: data.data.appId,
                                timestamp: data.data.timestamp,
                                nonceStr: data.data.nonceStr,
                                signature: data.data.signature,
                                jsApiList: [
                                    'checkJsApi',
                                    'openLocation',
                                    'getLocation',
                                    'closeWindow',
                                    'chooseImage',
                                    'uploadImage',
                                    'downloadImage',
                                    'onMenuShareTimeline',
                                    'onMenuShareAppMessage'
                                ]
                            });
                            access = true;
                            Util.ajax(null, db.data.api+'doSharePrepare.php', (data) => {
                                if(data.e !== 0){
                                    Message.toast('分享功能出现错误');
                                }else{
                                    let str = '送福利啦，与好友一起享受共享优惠券吧,剪约派打造最贴心的互联网造型服务，更多优惠等你体验~~~';
                                    let redirect = encodeURIComponent(`${Config.index_url}real.php?hash=ticket&share_id=${data.data.id}`);
                                    let url = `${Config.user_api}login.php?clientType=wx&redirect=${redirect}`;
                                    console.log(url);
                                    let img = db.data.oss + 'barber/images/logo.jpg';
                                    let share = function () {
                                        // MessageBarber.alert('恭喜，你已完成了分享，每一次分享行为并成功邀请一位您的朋友（新用户）到店消费，即可获得一张优惠券（根据到店记录自动发放，可获得多张）');
                                        MessageBarber.alert('恭喜，你已完成了分享，分享行为并成功邀请一位您的朋友（新用户）到店消费，即可获得一张优惠券');
                                    };
                                    Wx.ready(function () {
                                        Wx.onMenuShareTimeline({
                                            title: str, // 分享标题
                                            link: url, // 分享链接
                                            imgUrl: img, // 分享图标
                                            success: function () {
                                                share();
                                            },
                                            cancel: function () {}
                                        });
                                        Wx.onMenuShareAppMessage({
                                            title: str, // 分享标题
                                            desc: '', // 分享描述
                                            link: url, // 分享链接
                                            imgUrl: img, // 分享图标
                                            type: '', // 分享类型,music、video或link，不填默认为link
                                            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                                            success: function () {
                                                share();
                                            },
                                            cancel: function () {}
                                        });
                                        Head.js([
                                            '../static/js/spin.min.js'
                                        ], function () {});
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
            this.run();
        })
    }
    run() {
        this.addSections();
        let secondHash = 'index';
        let hash = $_GET['hash'];
        if (!!hash) {
            secondHash = hash;
            if (hash === 'mytickets') {
                this.initMyTicketData();
            } else if (hash === 'getmytickets') {
                this.initGetMyTicketData();
            }else if (hash === 'orderlist') {
                this.initOrderList();
            }else if (hash === 'ticket') {
                this.initTicket();
            }else if (hash === 'comment') {
                this.initComment();
            }else if (hash === 'place') {
                this.initPlace();
            }else if (hash === 'jsapi') {
                this.addPage('jsapi');
                Util.hasLoadJsCallBack(['app.ready','launcher','jsapi'],()=>{
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
            }else{
                secondHash = 'index';
            }
        }
        this.addPage('index');
        Main.initApp(secondHash);
    }

    initCommodityDetail() {
        this.addPage('commodity_detail');
        Util.hasLoadJsCallBack(['app.ready', 'launcher', 'commodity_detail'], () => {
            db.data.buy_id = $_GET['buy_id'];
            app.jump2('commodity_detail');
        });
    }

    initCommodityDetailStore() {
        this.addPage('commodity_detail_store');
        Util.hasLoadJsCallBack(['app.ready', 'launcher', 'commodity_detail_store'], () => {
            db.data.buy_id = $_GET['buy_id'];
            app.jump2('commodity_detail_store');
        });
    }

    initShare() {
        this.addPage('share');
        Util.hasLoadJsCallBack(['app.ready', 'launcher', 'share'], () => {
            app.jump2('share');
        });
    }

    initRecharge() {
        this.addPage('recharge');
        Util.hasLoadJsCallBack(['app.ready', 'launcher', 'recharge'], () => {
            app.jump2('recharge');
        });
    }

    initDealList() {
        this.addPage('deal_list');
        Util.hasLoadJsCallBack(['app.ready', 'launcher', 'deal_list'], () => {
            app.jump2('deal_list');
        });
    }

    initSelectTicket() {
        this.addPage('select_ticket');
        Util.hasLoadJsCallBack(['app.ready', 'launcher', 'select_ticket'], () => {
            app.jump2('select_ticket');
        });
    }

    initBuy() {
        this.addPage('buy');
        Util.hasLoadJsCallBack(['app.ready', 'launcher', 'buy'], () => {
            db.data.buy_id = $_GET['buy_id'];
            app.jump2('buy');
        });
    }

    initComment() {
        this.addPage('comment');
        Util.hasLoadJsCallBack(['app.ready','launcher','comment'],()=>{
            db.data.comment_order_id = $_GET['id'];
            app.jump2('comment');
        });
    }
    initPlace() {
        this.addPage('place');
        Util.hasLoadJsCallBack(['app.ready','launcher','place'],()=>{
            app.jump2('place');
        });
    }
    initMyTicketData() {
        this.addPage('mytickets');
        Util.hasLoadJsCallBack(['app.ready','launcher','mytickets'],()=>{
            app.jump2('mytickets');
        });
    };

    initGetMyTicketData() {
        this.addPage('getmytickets');
        Util.hasLoadJsCallBack(['app.ready','launcher','getmytickets'],()=>{
            app.jump2('getmytickets');
        });
    };

    initTicket() {
        this.addPage('ticket');
        Util.hasLoadJsCallBack(['app.ready','launcher','ticket'],()=>{
            if($_GET['name']){
                db.data.ticket_name = $_GET['name'];
                app.jump2('ticket');
            } else if($_GET['share_id']){
                let flag = false;
                let timer = setInterval(()=>{
                    if(typeof Wx.checkJsApi === 'function'){
                        Wx.checkJsApi({
                            jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                            success: (res) => {
                                if(res.checkResult.getLocation){
                                    if(!flag){
                                        clearInterval(timer);
                                        flag = true;
                                        Wx.getLocation({
                                            success: (res) => {
                                                let dataStr = `{
                                                    "uid" : ${$_GET['share_id']}
                                                }`;
                                                Util.ajax(dataStr, db.data.api + 'getSharedInfo.php', (data) => {
                                                    if (data.e === 0) {
                                                        if (data.data.ticket) {
                                                            db.data.ticket_name = false;
                                                            db.data.ticket_info = data.data;
                                                            app.jump2('ticket');
                                                        } else {
                                                            Message.toast("领取失败!您不是新用户或已经领取过了!");
                                                            let timer = setInterval(() => {
                                                                clearInterval(timer);
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
                },500);
            }
        });
    }
    initOrderList() {
        this.addPage('orderlist');
        Util.hasLoadJsCallBack(['app.ready','launcher','orderlist'],()=>{
            app.jump2('orderlist');
            setTimeout(function () {
                if(!$_GET.index){
                    $_GET.index = 0;
                }
                orderlist.vue.orderChoose(Math.floor($_GET.index));
            }, 250);
        });
    }
    addPage(page, func=function(){}) {
        if (Util.in_array(this.loadedPages, page))
            return;
        this.loadedPages.push(page);
        let callback = function () {
            Util.hasLoadJsCallBack(page, () => {
                window[page] = new window[page](page);
                setTimeout(function () {func();}, 80);
            });
        };
        if (page === 'index')
            Head.js('pages/index/index.js', callback);
        else if(page === 'detail_studio')
            Head.js('pages/detail_studio/detail_studio.js', callback);
        else if(page === 'ticket')
            Head.js('pages/ticket/ticket.js', callback);
        else if(page === 'detail_barber')
            Head.js('pages/detail_barber/detail_barber.js', callback);
        else if(page === 'mytickets')
            Head.js('pages/mytickets/mytickets.js', callback);
        else if (page === 'getmytickets')
            Head.js('pages/getmytickets/getmytickets.js', callback);
        else if(page === 'orderlist')
            Head.js('pages/orderlist/orderlist.js', callback);
        else if(page === 'myhair')
            Head.js('pages/myhair/myhair.js', callback);
        else if(page === 'latest_comment')
            Head.js('pages/latest_comment/latest_comment.js', callback);
        else if(page === 'mysubscribe')
            Head.js('pages/mysubscribe/mysubscribe.js', callback);
        else if(page === 'comment_list')
            Head.js('pages/comment_list/comment_list.js', callback);
        else if(page === 'comment')
            Head.js('pages/comment/comment.js', callback);
        else if(page === 'be_here')
            Head.js('pages/be_here/be_here.js', callback);
        else if(page === 'place')
            Head.js('pages/place/place.js', callback);
        else if(page === 'jsapi')
            Head.js('pages/jsapi/jsapi.js', callback);
        else if(page === 'buy')
            Head.js('pages/buy/buy.js', callback);
        else if(page === 'commodity_detail')
            Head.js('pages/commodity_detail/commodity_detail.js', callback);
        else if(page === 'commodity_detail_store')
            Head.js('pages/commodity_detail_store/commodity_detail_store.js', callback);
        else if(page === 'share')
            Head.js('pages/share/share.js', callback);
        else if(page === 'recharge')
            Head.js('pages/recharge/recharge.js', callback);
        else if(page === 'deal_list')
            Head.js('pages/deal_list/deal_list.js', callback);
        else if(page === 'select_ticket')
            Head.js('pages/select_ticket/select_ticket.js', callback);
    }
    addSections() {
        let $body = $('body'), i;
        for (i = 0; i < this.pages.length; i++) {
            $body.append('<section id="' + this.pages[i] + '_vue"></section>');
        }
    }
    static initApp(secondHash) {
        let config = {
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
        let app = new H5App(config);
        app = appCreator.init(app);
        app.noDie = true;
        app.isIos = db.data.isIos;
        app.run();
        window.app = app;
        launcher = new launcher('launcher');
    }
}
//刷新上载//