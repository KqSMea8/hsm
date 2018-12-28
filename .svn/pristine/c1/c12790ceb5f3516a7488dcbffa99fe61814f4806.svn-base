'use strict';

(function () {
    var getHtml = function getHtml() {
        return '\n<section id="admin_login_vue">\n    <div class="col-md-4 col-lg-4"></div>\n    <div class="col-xs-12 col-md-6 col-lg-6 txt_c">\n        <div class="row login_box txtc">\n            <div class="row">\n                <div class="col-xs-6 login_box_head active"\n                         onclick="\n                    $(this).parent().find(\'div\').removeClass(\'active\');\n                    $(this).addClass(\'active\');\n                    admin_login.getInstance().vue.model=\'login\'"\n                    >\u7528\u6237\u540D\u767B\u5165</div>\n                <div class="col-xs-6 login_box_head" onclick="\n                    $(this).parent().find(\'div\').removeClass(\'active\');\n                    $(this).addClass(\'active\');\n                    admin_login.getInstance().vue.model=\'register\'">\u7528\u6237\u6CE8\u518C</div>\n            </div>\n            <div class="row" style="margin-top: 35px">\n                <div class="form-group col-xs-12 {{(model==\'login\')?\'\':\'disn\'}}">\n                    <label for="username" class="login_box_username pos_a"></label>\n                    <input v-model="input.account.text" type="text" class="form-control" id="username" placeholder="{{input.account.hint}}" />\n                </div>\n                <div class="form-group col-xs-12 {{(model==\'login\')?\'\':\'disn\'}}">\n                    <label for="password" class="login_box_password pos_a"></label>\n                    <input v-model="input.password.text" type="password" class="form-control" id="password" placeholder="{{input.password.hint}}" />\n                </div>\n                <div class="form-group col-xs-12 {{model==\'login\'?\'disn\':\'\'}}">\n                    <label for="username2" class="login_box_username pos_a"></label>\n                    <input v-model="register.account.text" type="text" class="form-control" id="username2" placeholder="{{register.account.hint}}" />\n                </div>\n                <div class="form-group col-xs-12 {{model==\'login\'?\'disn\':\'\'}}">\n                    <label for="password2" class="login_box_password pos_a"></label>\n                    <input v-model="register.password.text" type="password" class="form-control" id="password2" placeholder="{{register.password.hint}}" />\n                </div>\n                <div class="form-group col-xs-12 {{model==\'login\'?\'disn\':\'\'}}">\n                    <label for="password3" class="login_box_password pos_a"></label>\n                    <input v-model="register.password2.text" type="password" class="form-control" id="password3" placeholder="{{register.password2.hint}}" />\n                </div>\n            </div>\n            <button @click="login()" class="{{model==\'login\'?\'\':\'disn\'}} btn btn-lg btn-default">\u767B\u5F55</button>\n            <button @click="register_click()" class="{{model==\'login\'?\'disn\':\'\'}} btn btn-lg btn-default">\u6CE8\u518C</button>\n        </div>\n    </div>\n    <div class="col-md-4 col-lg-4"></div>\n</section>    \n';
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
            model: 'login',
            input: {
                account: { text: "", hint: "请输入账号" },
                password: { text: "", hint: "请输入密码" }
            },
            register: {
                account: { text: "", hint: "请输入账号" },
                password: { text: "", hint: "请输入密码" },
                password2: { text: "", hint: "请重复密码" }
            }
        },
        methods: {
            register_click: function register_click() {
                var password, dataStr;
                if (Util.getInstance().checkTwoPassword(this.register.password.text, this.register.password2.text) !== true) {
                    Message.getInstance().toast(res, 3);
                    return false;
                }
                password = this.register.password.text.trim().length == 32 ? this.register.password.text.trim() : hex_md5(this.register.password.text.trim());
                dataStr = '{' + '"' + ACCOUNT + '":"' + this.register.account.text.trim() + '",' + '"' + PASSWORD + '":"' + password + '"' + '}';
                Util.getInstance().ajax(dataStr, db.data.api + '?r=Barber_owner_setting/register', function (data) {
                    if (data[CODE] !== 0) Message.getInstance().toast(data[MESSAGE], 3);else Message.getInstance().toast('注册成功', 3);
                });
            },
            login: function login() {
                var password, dataStr;
                password = this.input.password.text.trim().length == 32 ? this.input.password.text.trim() : hex_md5(this.input.password.text.trim());
                dataStr = '{' + '"' + ACCOUNT + '":"' + this.input.account.text.trim() + '",' + '"' + PASSWORD + '":"' + password + '"' + '}';
                Util.getInstance().ajax(dataStr, db.data.api + '?r=Barber_owner_setting/login', function (data) {
                    if (data[CODE] !== 0) Message.getInstance().toast(data[MESSAGE], 3);else rightAreaHref('admin_studio');
                });
            }
        }
    });
};
//# sourceMappingURL=admin_add_right_bar_login_register.js.map