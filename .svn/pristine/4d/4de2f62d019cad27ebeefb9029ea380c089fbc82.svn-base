class detail_studio extends Page {
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.db = db;
                this.launcher = launcher.vue;
            },
            compiled () {},
            data:{
                studio:{},
                showBindPhoneView:false,
                canSendPhoneCheck:true,
                checkText:'获取短信验证码',
                phone:'',
                phoneCheck:'',
                barber: []
            },
            computed:{
                followImg:{get(){
                    return (this.studio.subscribed)?
                        (db.data.oss+'barber/images/heart_white.svg') :
                        (db.data.oss+'barber/images/heart.svg');
                }}
            },
            methods: {
                init(){
                    let dataStr = `{
                            "lat":"${db.data.user.lat}",
                            "lon":"${db.data.user.lon}",
                            "sid":"${db.data.nowStudioId}",
                        }`;
                    Util.ajax(dataStr, `${db.data.api}getStudioDetail.php`, (data) => {
                        this.renderDetialStudio(data);
                    });
                    setTimeout(()=>{
                        this.launcher.showAndHideCover($(this.$el));
                    },100);
                },
                renderDetialStudio(data){
                    if(data.e !== 0){

                    }else{
                        console.log(data.data);
                        data = data.data;
                        for(var k in data.srv){
                            data.srvId = data.srv[k];
                            data.srv = k;
                            break;
                        }
                        this.studio = JSON.parse(JSON.stringify(data));
                        db.data.lon = this.studio.lon;
                        db.data.lat = this.studio.lat;
                    }
                },
                subscribeStudio(){
                    let dataStr = `{
                            "sid":"${db.data.nowStudioId}",
                        }`;
                    Util.ajax(dataStr, `${db.data.api}subscribeStudio.php`, (data) => {
                        if(data.e !== 0){

                        }else{
                            let obj = data.data;
                            if(obj.subscribe === 1){
                                Message.toast("谢谢支持 (●'◡'●)ﾉ♥");
                                this.studio.subscribed = true;
                            }else{
                                this.studio.subscribed = false;
                            }
                        }
                    });
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
                    if(!!this.phoneCheck === false)
                        throw '验证码格式错误';
                    let dataStr = `{
                        "phone":"${this.phone}",
                        "code":"${this.phoneCheck}"
                    }`;
                    let _this = this;
                    Util.ajax(dataStr, `${db.data.api}verifyPhoneCode.php`, (data) => {
                        if(data.e !== 0){
                            launcher.vue.handlerError(data.e);
                        }else{
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
                readeyTakeNumber(barber) {
                    ////
                    this.barber = barber;
                    console.log(this.barber);
                    this.launcher.quhao(this.barber, this.barber.service, this.barber.work_state);
                },
                beHere(){
                    var lon1,lat1,lon2,lat2;
                    lon1 = db.data.user.lon;
                    lat1 = db.data.user.lat;

                    lon2 = db.data.lon;
                    lat2 = db.data.lat;
                    if(lon1==db.data.navi.lon1&&lat1==db.data.navi.lat1&&lon2==db.data.navi.lon2&&lat2==db.data.navi.lat2){

                    }else{
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
                commodity_detail() {
                    this.jump("commodity_detail");
                }
            }
        });
    }
}
//