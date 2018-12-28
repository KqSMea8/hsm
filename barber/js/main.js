class Main{
    constructor(sign,time,bid,url) {
        console.log('new Main');
        this.pages = [
            'index','bind_phone','turnover_rank','query_bind_code', 'userClass', 'user_hair', 'bad_comments', 'fixed_guest',
            'drain_guest_days', 'drain_guest_count', 'female_guest', 'pay_channel', 'online_pay', 'index_new', 'punch_list'
        ];
        this.loadedPages = [];

        let dataStr = `{
                    "sign" : "${sign}",
                    "time" : "${time}",
                    "bid" : "${bid}"
                }`;
        Util.ajax(dataStr, `${db.data.api}AjaxFirstAuth.php`, function (data) {
            if (data.e === 0) {
                let dataStr = `{
                            "url" : "${location.href.split(':')[0] + url}"
                        }`;
                Util.ajax(dataStr, db.data.api + 'getWxJSParam.php', function (data) {
                    if (data.e === 0) {
                        wx.config({
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
                        wx.error(function (res) {
                            console.log(res);
                        });
                    }
                });
            }
        });
        this.run();
    }
    run(){
        this.addSections();
        let secondHash = 'index';
        let hash = $_GET['hash'];
        if (!!hash) {
            secondHash = hash;
            if (hash === 'bind_phone') {
                this.initBind_phone(hash);
            } else{
                secondHash = 'index';
            }
        }
        this.addPage('index');
        this.initApp(secondHash);
    }
    addSections() {
        let $body = $('body'), i;
        for (i = 0; i < this.pages.length; i++)
            $body.append('<section id="' + this.pages[i] + '_vue"></section>');
    }
    addPage(page, func = function(){}) {
        if (Util.in_array(this.loadedPages, page)){
            return;
        }else{
            console.log('add page : '+page);
            console.log(func);
            this.loadedPages.push(page);
            let callback = function () {
                Util.hasLoadJsCallBack(page, () => {
                    window[page] = new window[page](page);
                    setTimeout(function () {
                        func();
                    }, 80);
                });
            };
            switch (page){
                case 'launcher':
                    head.js('../dist/barber/pages/launcher.js' + time, callback);
                    break;
                case 'index':
                    head.js('../dist/barber/pages/index.js' + time, callback);
                    break;
                case 'bind_phone':
                    head.js('../dist/barber/pages/bind_phone.js' + time, callback);
                    break;
                case 'turnover_rank':
                    head.js('../dist/barber/pages/turnover_rank.js' + time, callback);
                    break;
                case 'query_bind_code':
                    head.js('../dist/barber/pages/query_bind_code.js' + time, callback);
                    break;
                case 'userClass':
                    head.js('../dist/barber/pages/userClass.js' + time, callback);
                    break;
                case 'user_hair':
                    head.js('../dist/barber/pages/user_hair.js' + time, callback);
                    break;
                case 'bad_comments':
                    head.js('../dist/barber/pages/bad_comments.js' + time, callback);
                    break;
                case 'fixed_guest':
                    head.js('../dist/barber/pages/fixed_guest.js' + time, callback);
                    break;
                case 'drain_guest_days':
                    head.js('../dist/barber/pages/drain_guest_days.js' + time, callback);
                    break;
                case 'drain_guest_count':
                    head.js('../dist/barber/pages/drain_guest_count.js' + time, callback);
                    break;
                case 'female_guest':
                    head.js('../dist/barber/pages/female_guest.js' + time, callback);
                    break;
                case 'pay_channel':
                    head.js('../dist/barber/pages/pay_channel.js' + time, callback);
                    break;
                case 'online_pay':
                    head.js('../dist/barber/pages/online_pay.js' + time, callback);
                    break;
                case 'index_new':
                    head.js('../dist/barber/pages/index_new.js' + time, callback);
                    break;
                case 'punch_list':
                    head.js('../dist/barber/pages/punch_list.js' + time, callback);
                    break;
            }
        }
    }
    initApp(secondHash) {
        let isIos = db.data.isIos;
        let config = {
            'isDebug': true,
            'projectName': 'myapp',
            'defaultHash': 'launcher',
            'secondHash': secondHash,
            'mainHash': 'index',
            'transitionTag': 'section',
            'transitionName': 'transform',
            'transitionTime': '0.3',
            'transitionType': 'ease-in-out'
        };
        let app = new H5App(config);
        app = appCreator.init(app);
        app.noDie = true;
        app.isIos = isIos;
        window.app = app;
        console.log('app');
        this.addPage('launcher',()=>{
            console.log('app run');
            app.run();
            setTimeout(function(){
                launcher.vue.jump2index();
            },500);
        });
    }
    initBind_phone(hash){
        this.addPage(hash);
        Util.hasLoadJsCallBack([hash,'launcher_hasCompiled','app'], ()=>{
            app.jump2(hash);
        });
    }
}
////////