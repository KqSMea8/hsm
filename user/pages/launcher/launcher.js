class launcher extends Page{
    constructor(hash){
        super(hash);
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created() {},
            compiled(){
                setTimeout(()=>{
                    this.init();
                },400);
            },
            data: {
                hasPosition: false,
                imgIndex:0,
                imgs:[]
            },
            computed: {},
            methods: {
                handlerError(e) {
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
                init() {
                    if(app.secondHash === 'index'){
                        let timer = setInterval(() => {
                            if(typeof index !== "undefined" && access){
                                clearInterval(timer);
                                console.log(`this.jump('index')`);
                                this.jump('index');
                            }
                        },80);
                    }
                },
                renderUserInfo(data){
                    if (data.e !== 0) {

                    } else {
                        db.data.user.nickname = data.data.nickname;
                        db.data.user.phone = data.data.phone;
                        db.data.user.avt = data.data.avt;
                        db.data.user.sex = data.data.sex;
                        db.data.user.amount = data.data.amount;
                    }
                },
                location(func = null){
                    let timer = setTimeout(function(){
                        if(func !== null){
                            func();
                        }
                    });
                    wx.getLocation({
                        type: 'wgs84',
                        success: (res) => {
                            clearTimeout(timer);
                            localStorage.setItem('lon', res.longitude);
                            localStorage.setItem('lat', res.latitude);
                            db.data.user.lon = res.longitude;
                            db.data.user.lat = res.latitude;
                            if(func !== null){
                                func();
                            }
                        }
                    });
                },
                quhao(barber,srvId = null,work_state){
                    if(work_state != 1)
                        return;
                    if(this.doingQuhao){
                        Message.toast('取号过于频繁');
                        return;
                    }

                    MessageBarber.confirm("过号需重新取号，请安排好时间及时到店",()=>{
                        this.doQuhao(barber,srvId);
                        this.doingQuhao = true;
                    });
                },
                doQuhao(barber,srvId=null){
                    let dataStr = `{
                        "bid":${barber.id},
                        "srvid":${barber.service || srvId},
                        "owner_id":${barber.owner_id}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}appointmentBarber.php`, (data) => {
                        if(data.e !== 0) {
                            if (data.e == -8) {
                                Message.toast("您已经有多条处于等待中的订单了, 请移步我的订单中查看您的排队信息哦~", 5);
                            }
                        }else{
                            if(data.data.msg){
                                MessageBarber.dialog('提示',data.data.msg,'确定', '取消',function(){
                                    window[location.hash.split('#')[1]].vue.showBindPhoneView = true;
                                    Message.removeDialog();
                                },function(){
                                    Message.removeDialog();
                                });
                            }else{
                                this.jump('orderlist');
                            }
                        }
                        setTimeout(()=>{
                            this.doingQuhao = false;
                        },3000);
                    });
                },
                getDistanceWithLatLon(lat1,lng1,lat2,lng2){
                    let s = Util.getDistance(lat1,lng1,lat2,lng2);
                    return this.getDistance(s);
                },
                getDistance(s){
                    if(s<1000){
                        return Math.floor(s)+'M';
                    }else{
                        return Math.floor(s/1000)+'KM';
                    }
                },
                detail_barber(id){
                    db.data.nowBarberId = id;
                    this.jump('detail_barber');
                },
                detail_studio(id){
                    if (id != 24 && id != 25) {
                        db.data.nowStudioId = id;
                        this.jump('detail_studio');
                    }
                },
                look(imgStr, currenImg){
                    var imgArr = imgStr.split('|');
                    var urls = [];
                    for(var i=0;i<imgArr.length;i++){
                        var src = imgArr[i].trim();
                        if(!!src){
                            urls.push(src);
                        }
                    }
                    if(urls.length <= 0){
                        return;
                    }else{
                        wx.previewImage({
                            current: currenImg, // 当前显示图片的http链接
                            urls: urls // 需要预览的图片http链接列表
                        });
                    }
                },
                showAndHideCover(obj_vue){
                    obj_vue.find('.endtouch').show();
                    setTimeout(function(){
                        obj_vue.find('.endtouch').hide();
                    },800);
                },
                smooth(func){
                    if(app.isDoingAnimation){
                        var interTimer;
                        var outTimer;
                        interTimer = setInterval(function(){
                            if(!app.isDoingAnimation){
                                clearInterval(interTimer);
                                clearTimeout(outTimer);
                                func();
                            }
                        },100);
                        outTimer = setTimeout(function(){
                            try {
                                clearInterval(interTimer);
                            }catch (e){}
                        },2000);
                    }else{
                        func();
                    }
                }
            }
        });
    }
}