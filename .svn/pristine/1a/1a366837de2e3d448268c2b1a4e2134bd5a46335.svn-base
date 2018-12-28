//https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=share
class share extends Page {
    constructor(hash) {
        super(hash, require('tpl.html'));
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.launcher = launcher.vue;
                this.db = db;
            },
            compiled() {
            },
            data: {},
            methods: {
                init() {
                    Message.toast("欢迎参加分享活动!", 1);
                },
                share() {
                    Message.toast("请点击右上角分享按钮!", 3);
                },
                forget() {
                    this.jump('index');
                }
            }
        });
    }
}

//