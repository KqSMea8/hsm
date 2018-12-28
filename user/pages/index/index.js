class index extends Page{
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.db = db;
                this.launcher = launcher.vue;
                let lon = localStorage.getItem('lon')||113.85785;
                let lat = localStorage.getItem('lat')||22.570235;
                db.data.user.lon = lon;
                db.data.user.lat = lat;
                Util.ajax(this.getStudioListDataStr(), `${db.data.api}getStudioList.php`, (data) => {
                    this.renderStudioList(data);
                    this.cityList = JSON.parse(JSON.stringify(this.cityList));
                    Util.ajax(null, `${db.data.api}getUserInfo.php`, (data) => {
                        launcher.vue.renderUserInfo(data);
                    });
                    let i;
                    for (i = 0; i < m.pages.length; i++)
                        m.addPage(m.pages[i]);
                });
                let flag = false;
                let timer = setInterval(()=>{
                    if(typeof wx.checkJsApi === 'function'){
                        wx.checkJsApi({
                            jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                            success: (res) => {
                                if(res.checkResult.getLocation){
                                    if(!flag){
                                        clearInterval(timer);
                                        flag = true;
                                        launcher.vue.location(()=>{
                                            Util.ajax(this.getStudioListDataStr(), `${db.data.api}getStudioList.php`, (data) => {
                                                this.renderStudioList(data);
                                                this.cityList = JSON.parse(JSON.stringify(this.cityList));
                                                Util.ajax(null, `${db.data.api}getUserInfo.php`, (data) => {
                                                    launcher.vue.renderUserInfo(data);
                                                });
                                                let i;
                                                for (i = 0; i < m.pages.length; i++)
                                                    m.addPage(m.pages[i]);
                                            });
                                        });
                                    }
                                }
                            }
                        });
                    }
                },500);
                // $('.titleBar')[0].addEventListener('touchmove', function (ev) {
                //     event.preventDefault();
                // });
                // $('.footBar')[0].addEventListener('touchmove', function (ev) {
                //     event.preventDefault();
                // });
            },
            compiled () {},
            data: {
                titleBar:[
                    {text:'口碑发型师', status:false},
                    {text:'专注剪发店', status:true}
                ],
                footBar:[
                    {text:'约Ta',img:'yueta.png',click_img:'yueta_click.png',status:true},
                    {text:'我De',img:'wode.png',click_img:'wode_click.png',status:false}
                ],
                options:[
                    {hash:'orderlist',img:'i-order.png',text:'我的订单',status:true},
                    {hash:'myhair',img:'i-faxing.png',text:'我的参考发型',status:true},
                    {hash:'mysubscribe',img:'i-focus.png',text:'我的关注',status:true},
                    //{hash:'mytickets',img:'i-juan.png',text:'我的优惠券',status:true},
                    {hash:'',img:'i-msg-gray.png',text:'我的消息',status:false},
                    {hash:'',img:'i-other-gray.png',text:'我的其他设置',status:false}
                ],
                showArea:false,
                showBindPhoneView:false,
                canSendPhoneCheck:true,
                checkText:'获取短信验证码',
                phone:'',
                phoneCheck:'',
                timer12:null,

                studioList:null,
                studioCountsPerRequest: 10,
                barberCountsPerRequest: 20,
                studioIndex: 0,
                barberIndex: 0,
                barberList:null,
                cityList:{},
                nowCity:null,
                nowArea:null,
                showCityIndex:0,
                nowRegionIndex:-1,

                availableTicketCount: 0,
                dealDetailCount: 0,
                totalGiveAmount: 0,
            },
            methods: {
                getFooterImg(item){
                    return (db.data.oss)+'barber/images/'+((item.status)?item.click_img:item.img);
                },
                getAreaCount(obj){
                    let i=0;
                    for(var key in obj){
                        i++;
                    }
                    return i;
                },
                getNowCityStudioCount(){
                    let i=0;
                    for(var key in this.cityList[this.nowCity]){
                        i++;
                    }
                    return i;
                },
                init() {
                    //此处于2018年1月3日做了特殊判断 如果为管理员用户的话则删除头部的广告信息
                    if (db.data.user.phone == '1868450888') {
                        if (document.getElementById("head_advertising")) {
                            document.getElementById("head_advertising").parentNode.removeChild(document.getElementById("head_advertising"));
                        }
                    } else {

                    }
                    var mySwiper = new Swiper('.swiper-container', {
                        autoplay: {
                            delay: 3000,
                            disableOnInteraction: false,
                        },
                        speed: 1000,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                        },
                    });
                    this.getAvailableTicketCount();
                    this.getDealDetailList();
                },
                getDealDetailList() {
                    Util.ajax('{}', `${db.data.api}getDealDetailList.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            this.dealDetailCount = data.data.dealDetailCount;
                            this.totalGiveAmount = data.data.totalGiveAmount;
                        }
                    });
                },
                getAvailableTicketCount() {
                    Util.ajax('{}', `${db.data.api}getUserTicketList.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            let i = 0;
                            for (var key in data.data) {
                                if (data.data.hasOwnProperty(key)) {
                                    if (key == '可使用') {
                                        this.availableTicketCount = data.data[key].length;
                                    }
                                    i++;
                                }
                            }
                        }
                    });
                },
                showTicketView(strategy_index, studio_index){
                    var _this = this;
                    var dataStr,limit;
                    db.data.ticket = db.data.strategies[Math.floor(strategy_index)];
                    limit = db.data.ticket.use_count;
                    dataStr = '{' +
                        '"'+Api.ID+'":"'+db.data.ticket.id+'"' +
                        '}';
                    Util.ajax(dataStr, db.data.api+'?r=user/get_ticket_record', function(data){
                        if(data[Api.CODE] === 0){
                            if(limit == 0){
                                if(data[Api.MESSAGE] == 0)
                                    db.data.ticket.used = 0;
                                else
                                    db.data.ticket.used = 1;
                            }else{
                                if(data[Api.MESSAGE] == 0){
                                    db.data.ticket.used = 0;
                                }else if (data[Api.MESSAGE] == 1){
                                    db.data.ticket.used = 1;
                                }else{
                                    Message.toast('亲，等下次优惠活动吧');
                                    return false
                                }
                            }
                            _this.jump('ticket');
                        }else{
                            Message.toast(data[Api.MESSAGE]);
                        }
                    });
                    db.data.ticket.studio_index = studio_index;
                    db.data.ticket = JSON.parse(JSON.stringify(db.data.ticket));
                },
                areaClick(event,index,parentIndex){
                    var areaObj = $(this.$el).find('.area');
                    areaObj.find('table.right td').removeClass('active');
                    var td = $(event.target);
                    td.addClass('active');

                    console.log('areaClick areaClick areaClick');

                    if(!!parentIndex === false){
                        db.data.showCityIndex = db.data.nowCityIndex;
                    }else{
                        db.data.showCityIndex = parentIndex;
                    }
                    var area;
                    for(var i=0;i<db.data.cityList.length;i++){
                        if(db.data.nowCityIndex == i){
                            if(index<0){
                                area = db.data.cityList[i].name+",";
                                db.data.nowRegionIndex = -1;
                            }else{
                                area = db.data.cityList[i].name+","+td.find('.fl').text();
                                db.data.nowRegionIndex = index;
                            }
                            break;
                        }
                    }
                    for(var studio_index=0;studio_index<db.data.studioList.length;studio_index++){
                        if(db.data.studioList[studio_index].area.indexOf(area) == 0){
                            db.data.studioList[studio_index].show = true;
                        }else{
                            db.data.studioList[studio_index].show = false;
                        }
                    }
                    db.data.studioList = JSON.parse(JSON.stringify(db.data.studioList));
                },
                titleItemClick(index){
                    let i;
                    if(!this.titleBar[index].status){
                        var length = this.titleBar.length;
                        for(i=0;i<length;i++)
                            if(index !== i)
                                this.titleBar[i].status = false;
                        this.titleBar[index].status = true;
                    }
                    if(index===0){
                        Util.ajax(this.getBarberListDataStr(), `${db.data.api}getBarberList.php`, (data) => {
                            this.renderBarberList(data);
                        });
                    }else{
                        Util.ajax(this.getStudioListDataStr(), `${db.data.api}getStudioList.php`, (data) => {
                            this.renderStudioList(data);
                        });
                    }
                },
                footItemClick(index){
                    if(!this.footBar[index].status){
                        var length = this.footBar.length;
                        for(var i=0;i<length;i++){
                            if(index != i){
                                this.footBar[i].status = false;
                            }
                        }
                        this.footBar[index].status = true;
                    }
                    if(index===0){
                        if(this.titleBar[0].status){
                            Util.ajax(this.getBarberListDataStr(), `${db.data.api}getBarberList.php`, (data) => {
                                this.renderBarberList(data);
                            });
                        }else{
                            Util.ajax(this.getStudioListDataStr(), `${db.data.api}getStudioList.php`, (data) => {
                                this.renderStudioList(data);
                            });
                        }
                    }else{
                        Util.ajax(null, `${db.data.api}getUserInfo.php`, (data) => {
                            launcher.vue.renderUserInfo(data);
                        });
                        this.getDealDetailList();
                        this.getAvailableTicketCount();
                    }
                },
                sendPhoneCheck(){
                    let dataStr = `{
                        "phone":"${this.phone}"
                    }`;
                    let _this = this;
                    Util.ajax(dataStr, `${db.data.api}getPhoneVerificationCode.php`, (data) => {
                        if(data.e !== 0){
                            launcher.vue.handlerError(data.e);
                        }else{
                            _this.checkText = '60秒';
                            if(_this.timer12 !== null){
                                clearInterval(_this.timer12);
                                _this.timer12 = null;
                            }
                            _this.timer12 = setInterval(function(){
                                var num = Math.floor(_this.checkText.substr(0,_this.checkText.length-1))-1;
                                if(num<0){
                                    clearInterval(_this.timer12);
                                    _this.timer12 = null;
                                    _this.checkText = '获取短信验证码';
                                }else{
                                    _this.checkText = num + '秒';
                                }
                            },1000);
                        }
                    });
                },
                bindPhone(){
                    if(!Util.isMobileNumber(this.phone))
                        throw '手机号码格式错误';
                        Message.toast('手机号码格式错误', 3);
                    if(!!this.phoneCheck === false)
                        throw '验证码格式错误';
                        Message.toast('验证码格式错误', 3);
                    let dataStr = `{
                        "phone":"${this.phone}",
                        "code":"${this.phoneCheck}"
                    }`;
                    let _this = this;
                    Util.ajax(dataStr, `${db.data.api}verifyPhoneCode.php`, (data) => {
                        if(data.e !== 0){
                            launcher.vue.handlerError(data.e);
                        }else{
                            this.checkText = '获取短信验证码';
                            db.data.user.phone = _this.phone;
                            _this.phone = '';
                            _this.phoneCheck = '';
                            _this.showBindPhoneView = false;
                            Message.toast('绑定成功', 3);
                        }
                    });
                },
                exit(){
                    Util.ajax(this.getBarberListDataStr(), `${db.data.api}unlogin.php`, (data) => {
                        wx.closeWindow();
                    });
                },
                getStudioListDataStr(){
                    return `{
                        "lat":"${db.data.user.lat}",
                        "lon":"${db.data.user.lon}",
                        "start":0,
                        "count":${this.studioList?this.studioList.length:this.studioCountsPerRequest},
                    }`;
                },
                getBarberListDataStr(){
                    return `{
                        "lat":"${db.data.user.lat}",
                        "lon":"${db.data.user.lon}",
                        "start":0,
                        "count":${this.barberList?this.barberList.length:this.barberCountsPerRequest},
                    }`;
                },
                renderBarberList(data){
                    if (data.e !== 0) {
                        Message.toast("无法获取理发师信息");
                    } else {
                        let barberList = [],obj = data.data;
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                if (parseInt(key) < 100) {
                                    for(var k in obj[key].srv){
                                        obj[key].srvId = obj[key].srv[k];
                                        obj[key].srv = k;
                                        break;
                                    }
                                    barberList.push(obj[key]);
                                }
                            }
                        }

                        this.barberIndex = obj.nextStart;

                        this.initDataCityList(obj.Catalog);

                        if(this.barberList === null){
                            this.barberList = JSON.parse(JSON.stringify(barberList));
                        }else{
                            this.barberList = barberList;
                        }
                    }
                },
                initDataCityList(data){
                    for(var city in data){
                        if(!!this.nowCity === false){
                            this.nowCity = city;
                        }
                        if(data.hasOwnProperty(city)){
                            if(!this.cityList.hasOwnProperty(city)){
                                this.cityList[city] = {};
                            }
                            for(var area in data[city]){
                                if(data[city].hasOwnProperty(area)){
                                    if(!!this.cityList[city][area]===false){
                                        this.cityList[city][area] = {};
                                    }

                                    for(var i=0;i<data[city][area].length;i++){
                                        this.cityList[city][area][data[city][area][i].id] = data[city][area][i].name;
                                    }
                                }
                            }
                        }
                    }
                },
                renderStudioList(data){
                    console.log(data);
                    if (data.e !== 0) {
                        Message.toast("无法获取位置");
                    } else {
                        let studioList = [], cityList = [], areaList = [], obj = data.data;
                        for (var key in obj) {
                            if (obj.hasOwnProperty(key)) {
                                if (parseInt(key) < 100) {
                                    for(var k in obj[key].srv){
                                        obj[key].srv = k;
                                        break;
                                    }
                                    studioList.push(obj[key]);
                                }
                            }
                        }

                        this.studioIndex = obj.nextStart;

                        this.initDataCityList(obj.Catalog);

                        if(this.studioList === null){
                            this.studioList = JSON.parse(JSON.stringify(studioList));
                        }else{
                            this.studioList = studioList;
                        }
                    }
                },
                commodity_detail() {
                    this.jump("commodity_detail");
                },
                share(){
                    this.jump("share");
                },
                show_deal_detail(deal_type) {
                    if (deal_type == 0) {
                        this.db.deal_type = 0;
                        this.jump("deal_list");
                    } else if (deal_type == 2) {
                        this.db.deal_type = 2;
                        this.jump("deal_list");
                    }
                }
            }
        });
    }
}
////////