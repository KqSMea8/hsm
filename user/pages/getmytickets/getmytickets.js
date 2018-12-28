class getmytickets extends Page {
    constructor(hash) {
        super(hash, require('tpl.html'));
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.db = db;
            },
            compiled() {
            },
            data: {
                activityStrategy: 0,
                confirmReceiveTimestamp: 0
            },
            methods: {
                init() {
                    Message.toast("请点击领取按钮");
                },
                getQueryString(name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) return decodeURI(r[2]);
                    return null;
                },
                setTicket() {
                    this.activityStrategy = this.getQueryString("activityStrategy");
                    this.confirmReceiveTimestamp = this.getQueryString("confirmReceiveTimestamp");
                    let dataStr = `{
                            "activityStrategy":${this.activityStrategy},
                            "confirmReceiveTimestamp":${this.confirmReceiveTimestamp},
                        }`;
                    Util.ajax(dataStr, `${db.data.api}setActivityTicketCommon.php`, (data) => {
                        if (data.e === -1) {
                            Message.toast("参数不正确!请联系工作人员!");
                        } else if (data.e === -2) {
                            Message.toast("很抱歉!您已经领取过了!请在我的优惠卷中查看!");
                        } else if (data.e === -3) {
                            Message.toast("很抱歉!当前优惠卷策略已失效!");
                        } else if (data.e === -9) {
                            Message.toast("很抱歉!已过领取截止期限!");
                        } else {
                            Message.toast(data.data.msg);
                            location.href = 'https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=mytickets';
                        }
                    });
                },
            }
        });
    }
}
////