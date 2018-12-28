'use strict';

(function () {
    var getHtml = function getHtml() {
        return '\n        <style>\n        .login_box {margin-top: 30px;height: auto;border: solid 1px #ddd;border-top: 3px solid orange;padding: 20px 50px;}\n        table input{width: 55px;}\n        .register_box {border-top: 3px solid red;}\n        .login_box_head {padding: 10px;border-bottom: solid 1px orange;font-weight: 600;font-size: 16px}\n        .register_box_head {padding: 10px;border-bottom: solid 1px #ddd;font-weight: 600;font-size: 16px}\n        .register_box_head:hover {cursor: pointer;background-color: #f5f5f5;}\n        .border-bottom_red {border-bottom: solid 1px red;}\n        .login_box input {padding: 20px;padding-left: 50px;}\n        .form-group {margin-bottom: 25px;}\n        .login_box_username {height: 40px;width: 40px;left: 16px;top: 1px;background: #DDD url("../static/images/username.png") no-repeat center center;}\n        .login_box_password {height: 40px;width: 40px;left: 16px;top: 1px;background: #ddd url("../static/images/password.png") no-repeat center center;}\n        .login_box_oneCode {height: 40px;width: 40px;left: 16px;top: 1px;background: #ddd url("../static/imgges/dongtaima.png") no-repeat center center;}\n        .qrCode {transition: all 1s ease;-webkit-transition: all 1s ease;}\n        .scale_0 {transform: scale(0);-webkit-transform: scale(0);}\n        </style>\n         <section id="admin_login_vue">\n        <div class="col-xs-1 col-md-4 col-lg-4"></div>\n        <div class="col-xs-10 col-md-6 col-lg-6 txt_c">\n            <div class="row login_box txtc">\n                <div class="row">\n                    <div class="col-xs-6 login_box_head">\n                        \u7528\u6237\u540D\u767B\u5165\n                    </div>\n                    <div class="col-xs-6"></div>\n                </div>\n                <div class="row" style="margin-top: 35px">\n                    <div class="form-group col-xs-12">\n                        <label for="username" class="login_box_username pos_a"></label>\n                        <input v-model="input.account.text" type="text" class="form-control" id="username" placeholder="{{input.account.hint}}">\n                    </div>\n\n                    <div class="form-group col-xs-12">\n                        <label for="password" class="login_box_password pos_a"></label>\n                        <input v-model="input.password.text" type="password" class="form-control" id="password" placeholder="{{input.password.hint}}">\n                    </div>\n\n                    <!--<div class="form-group col-xs-12">-->\n                    <!--<label for="oneCode" class="login_box_oneCode pos_a"></label>-->\n                    <!--<input type="text" class="form-control" id="oneCode" placeholder="\u9A8C\u8BC1\u7801">-->\n                    <!--</div>-->\n\n                    <!--<div class="col-xs-12">-->\n                    <!--<img id="checkCode" style="margin-bottom: 20px" title="\u70B9\u51FB\u5237\u65B0" src="<?= Yii::$app->urlManager->createUrl(["admin/getcheckcodeimg"]) ?>" onclick="-->\n                    <!--this.src=\'<?= Yii::$app->urlManager->createUrl(["admin/getcheckcodeimg"]) ?>\'" />-->\n                    <!--</div>-->\n                </div>\n\n                <button id="login" @click="login()" type="submit" class="btn btn-lg btn-default">\u767B\u5F55</button>\n            </div>\n        </div>\n        <div class="col-xs-1 col-md-4 col-lg-4"></div>\n    </section>\n';
    };

    $('.right-area').append(getHtml());
})();

var admin_login = function admin_login() {};
admin_login.getInstance = function () {
    if (!this.self) {
        this.self = new admin_login();
        this.self.hash = '#admin_login';
    }
    return this.self;
};
admin_login.prototype.vue = null;
admin_login.prototype.hash = '';
admin_login.prototype.vue_ = function () {
    this.vue = new VueP({
        el: this.hash + '_vue',
        compiled: function compiled() {},
        computed: {},
        data: {
            input: {
                account: { text: "", hint: "请输入账号" },
                password: { text: "", hint: "请输入密码" }
            }
        },
        methods: {
            login: function login() {
                var password, dataStr, id;
                password = this.input.password.text.trim().length == 32 ? this.input.password.text.trim() : hex_md5(this.input.password.text.trim());
                dataStr = '{' + '"' + ACCOUNT + '":"' + this.input.account.text.trim() + '",' + '"' + PASSWORD + '":"' + password + '"' + '}';
                Util.getInstance().ajax(dataStr, db.data.api + '?r=Barber_Setting/login', function (data) {
                    if (data[Api.CODE] !== 0) {
                        Message.getInstance().toast(data[MESSAGE], 3);
                    } else {
                        for (id in ids) {
                            break;
                        }rightAreaHref(id);
                    }
                });
            }
        }
    });
};
//# sourceMappingURL=admin_add_right_bar_login.js.map