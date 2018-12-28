
class bind_phone extends Page {
    constructor(hash){
        let css =
            `
<style>
.bindPhone{position:absolute;width:100%;height:100%;top:0}
.bindPhone .cover{height:100%;width:100%;background:#000;opacity:.4}
.bindPhone .box{width:94%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;height:236px;background:#fff}
.bindPhone input{padding:0;font-size:100%;outline:0;border:0;box-shadow:none;background-color:#f5f5f5}
.bindPhone .box .line_1{padding:5px 20px;border-bottom:1px solid #ddd}
.bindPhone .box .line_2,.bindPhone .box .line_3,#index_vue .bindPhone .box .line_4{height:70px;padding:10px}
.bindPhone .box .line_2 input,.bindPhone .box .line_3 input{height:50px;width:100%;padding-left:16px}
.bindPhone .box .line_3 input{width:58%}
.bindPhone .box .line_3{padding-top:0}
.bindPhone .box .line_4{padding:0 10px 0 10px}
.bindPhone .box .line_4 span{display:block;width:50%;float:left;height:50px;line-height:50px;text-align:center}
.bindPhone .box .line_4 span:nth-of-type(1){background:red;color:#fff}
.bindPhone .box .line_4 span:nth-of-type(2){background:#f5f5f5}
.bindPhone .box .line_3 span{display:block;width:40%;text-align:center;background:#aaa;height:50px;float:right;color:#fff;line-height:50px}
</style>
`;
        let html=
            [` 
<div class="bindPhone">
    <!--<div class="cover" @touchstart="change('showBindPhoneView')"></div>-->
    <div class="box" style="    display: block;">
        <div class="line_1">
            绑定手机号
        </div>
        <div class="line_2">
            <input placeholder="输入手机号" v-model="phone">
        </div>
        <div class="line_3">
            <input placeholder="输入验证码" v-model="phoneCheck">
            <span @touchstart="sendPhoneCheck()">{{checkText}}</span>
        </div>
        <div class="line_4">
            <span @click="bindPhone()">确定</span>
            <span @click="change('showBindPhoneView')">取消</span>
        </div>
    </div>
</div>
`,`

`];
        super(hash, html, css);
    }

    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {},
            compiled () {},
            data: {
                showBindPhoneView:false,
                canSendPhoneCheck:true,
                checkText:'获取短信验证码',
                phone:'',
                phoneCheck:'',
                timer12:null,
            },
            methods: {
                init(){

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
                            Message.toast('非授权用户', 3);
                        }else{
                            app.browser.die();
                            clearInterval(_this.timer12);
                            _this.timer12 = null;
                            db.data.user.phone = _this.phone;
                            _this.phone = '';
                            _this.phoneCheck = '';
                            _this.showBindPhoneView = false;
                            _this.checkText = '获取短信验证码';
                            Message.toast('绑定成功', 3);
                            setTimeout(function(){
                                location.href=`https://www.jianyuepai.com.cn/api/barber/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/barber/index.php?hash=index`;
                            },1000);
                        }
                    });
                },
            }
        });
    }
}