(function(){
    var getHtml = function(){
        return `
<section id="admin_login_vue">
    <div class="col-md-4 col-lg-4"></div>
    <div class="col-xs-12 col-md-6 col-lg-6 txt_c">
        <div class="row login_box txtc">
            <div class="row">
                <div class="col-xs-6 login_box_head active"
                         onclick="
                    $(this).parent().find('div').removeClass('active');
                    $(this).addClass('active');
                    admin_login.getInstance().vue.model='login'"
                    >用户名登入</div>
                <div class="col-xs-6 login_box_head" onclick="
                    $(this).parent().find('div').removeClass('active');
                    $(this).addClass('active');
                    admin_login.getInstance().vue.model='register'">用户注册</div>
            </div>
            <div class="row" style="margin-top: 35px">
                <div class="form-group col-xs-12 {{(model=='login')?'':'disn'}}">
                    <label for="username" class="login_box_username pos_a"></label>
                    <input v-model="input.account.text" type="text" class="form-control" id="username" placeholder="{{input.account.hint}}" />
                </div>
                <div class="form-group col-xs-12 {{(model=='login')?'':'disn'}}">
                    <label for="password" class="login_box_password pos_a"></label>
                    <input v-model="input.password.text" type="password" class="form-control" id="password" placeholder="{{input.password.hint}}" />
                </div>
                <div class="form-group col-xs-12 {{model=='login'?'disn':''}}">
                    <label for="username2" class="login_box_username pos_a"></label>
                    <input v-model="register.account.text" type="text" class="form-control" id="username2" placeholder="{{register.account.hint}}" />
                </div>
                <div class="form-group col-xs-12 {{model=='login'?'disn':''}}">
                    <label for="password2" class="login_box_password pos_a"></label>
                    <input v-model="register.password.text" type="password" class="form-control" id="password2" placeholder="{{register.password.hint}}" />
                </div>
                <div class="form-group col-xs-12 {{model=='login'?'disn':''}}">
                    <label for="password3" class="login_box_password pos_a"></label>
                    <input v-model="register.password2.text" type="password" class="form-control" id="password3" placeholder="{{register.password2.hint}}" />
                </div>
            </div>
            <button @click="login()" class="{{model=='login'?'':'disn'}} btn btn-lg btn-default">登录</button>
            <button @click="register_click()" class="{{model=='login'?'disn':''}} btn btn-lg btn-default">注册</button>
        </div>
    </div>
    <div class="col-md-4 col-lg-4"></div>
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
            model:'login',
            input: {
                account: {text:"",hint:"请输入账号"},
                password: {text:"",hint:"请输入密码"}
            },
            register:{
                account: {text:"",hint:"请输入账号"},
                password: {text:"",hint:"请输入密码"},
                password2: {text:"",hint:"请重复密码"}
            }
        },
        methods: {
            register_click:function(){
                var password,dataStr;
                if(Util.getInstance().checkTwoPassword(this.register.password.text,this.register.password2.text)
                    !== true){
                    Message.getInstance().toast(res, 3);
                    return false;
                }
                password = (this.register.password.text.trim().length == 32)?this.register.password.text.trim():hex_md5(this.register.password.text.trim());
                dataStr = '{' +
                    '"'+ACCOUNT+'":"'+this.register.account.text.trim()+'",' +
                    '"'+PASSWORD+'":"'+password+'"' +
                    '}';
                Util.getInstance().ajax(dataStr, db.data.api+'?r=Barber_owner_setting/register', function(data){
                    if (data[CODE] !== 0)
                        Message.getInstance().toast(data[MESSAGE], 3);
                    else
                        Message.getInstance().toast('注册成功', 3);
                });
            },
            login:function(){
                var password, dataStr;
                password = (this.input.password.text.trim().length == 32)?this.input.password.text.trim():hex_md5(this.input.password.text.trim());
                dataStr = '{' +
                    '"'+ACCOUNT+'":"'+this.input.account.text.trim()+'",' +
                    '"'+PASSWORD+'":"'+password+'"' +
                    '}';
                Util.getInstance().ajax(dataStr, db.data.api+'?r=Barber_owner_setting/login', function(data){
                    if (data[CODE] !== 0)
                        Message.getInstance().toast(data[MESSAGE], 3);
                    else
                        rightAreaHref('admin_studio');
                });
            }
        }
    });
};