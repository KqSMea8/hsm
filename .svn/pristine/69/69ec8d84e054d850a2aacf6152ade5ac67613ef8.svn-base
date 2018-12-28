(function(){
    var getHtml = function(){
        return `
        <style>
        .login_box {margin-top: 30px;height: auto;border: solid 1px #ddd;border-top: 3px solid orange;padding: 20px 50px;}
        table input{width: 55px;}
        .register_box {border-top: 3px solid red;}
        .login_box_head {padding: 10px;border-bottom: solid 1px orange;font-weight: 600;font-size: 16px}
        .register_box_head {padding: 10px;border-bottom: solid 1px #ddd;font-weight: 600;font-size: 16px}
        .register_box_head:hover {cursor: pointer;background-color: #f5f5f5;}
        .border-bottom_red {border-bottom: solid 1px red;}
        .login_box input {padding: 20px;padding-left: 50px;}
        .form-group {margin-bottom: 25px;}
        .login_box_username {height: 40px;width: 40px;left: 16px;top: 1px;background: #DDD url("../static/images/username.png") no-repeat center center;}
        .login_box_password {height: 40px;width: 40px;left: 16px;top: 1px;background: #ddd url("../static/images/password.png") no-repeat center center;}
        .login_box_oneCode {height: 40px;width: 40px;left: 16px;top: 1px;background: #ddd url("../static/imgges/dongtaima.png") no-repeat center center;}
        .qrCode {transition: all 1s ease;-webkit-transition: all 1s ease;}
        .scale_0 {transform: scale(0);-webkit-transform: scale(0);}
        </style>
         <section id="admin_login_vue">
        <div class="col-xs-1 col-md-4 col-lg-4"></div>
        <div class="col-xs-10 col-md-6 col-lg-6 txt_c">
            <div class="row login_box txtc">
                <div class="row">
                    <div class="col-xs-6 login_box_head">
                        用户名登入
                    </div>
                    <div class="col-xs-6"></div>
                </div>
                <div class="row" style="margin-top: 35px">
                    <div class="form-group col-xs-12">
                        <label for="username" class="login_box_username pos_a"></label>
                        <input v-model="input.account.text" type="text" class="form-control" id="username" placeholder="{{input.account.hint}}">
                    </div>

                    <div class="form-group col-xs-12">
                        <label for="password" class="login_box_password pos_a"></label>
                        <input v-model="input.password.text" type="password" class="form-control" id="password" placeholder="{{input.password.hint}}">
                    </div>

                    <!--<div class="form-group col-xs-12">-->
                    <!--<label for="oneCode" class="login_box_oneCode pos_a"></label>-->
                    <!--<input type="text" class="form-control" id="oneCode" placeholder="验证码">-->
                    <!--</div>-->

                    <!--<div class="col-xs-12">-->
                    <!--<img id="checkCode" style="margin-bottom: 20px" title="点击刷新" src="<?= Yii::$app->urlManager->createUrl(["admin/getcheckcodeimg"]) ?>" onclick="-->
                    <!--this.src='<?= Yii::$app->urlManager->createUrl(["admin/getcheckcodeimg"]) ?>'" />-->
                    <!--</div>-->
                </div>

                <button id="login" @click="login()" type="submit" class="btn btn-lg btn-default">登录</button>
            </div>
        </div>
        <div class="col-xs-1 col-md-4 col-lg-4"></div>
    </section>
`;
    };

    $('.right-area').append(getHtml());
})();

var admin_login = function(){};
admin_login.getInstance = function(){
    if (!this.self) {
        this.self = new admin_login();
        this.self.hash = '#admin_login';
    }
    return this.self;
};
admin_login.prototype.vue = null;
admin_login.prototype.hash = '';
admin_login.prototype.vue_ = function(){
    this.vue = new VueP({
        el: this.hash + '_vue',
        compiled:function () {},
        computed: {},
        data:{
            input: {
                account: {text:"",hint:"请输入账号"},
                password: {text:"",hint:"请输入密码"}
            }
        },
        methods: {
            login:function(){
                var password,dataStr,id;
                password = (this.input.password.text.trim().length == 32)?this.input.password.text.trim():hex_md5(this.input.password.text.trim());
                dataStr = '{' +
                    '"'+ACCOUNT+'":"'+this.input.account.text.trim()+'",' +
                    '"'+PASSWORD+'":"'+password+'"' +
                    '}';
                Util.getInstance().ajax(dataStr, db.data.api+'?r=Barber_Setting/login', function(data){
                    if (data[Api.CODE] !== 0) {
                        Message.getInstance().toast(data[MESSAGE], 3);
                    } else {
                        for(id in ids)
                            break;
                        rightAreaHref(id);
                    }
                });
            }
        }
    });
};