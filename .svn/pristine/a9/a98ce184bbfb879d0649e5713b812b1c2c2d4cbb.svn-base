//https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=recharge
class recharge extends Page {
    constructor(hash) {
        super(hash, require('tpl.html'));
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
            },
            compiled() {
                this.db = db;
            },
            data: {
                jsparam: {},
                info: {},
                selected_commodity_id: 0,
                user: {},
                rechargeOptionsList: {},
                amount: 0
            },
            methods: {
                init() {
                    Util.ajax(null, `${db.data.api}getUserInfo.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            this.db.data.user = data.data;
                            this.user = data.data;
                            this.amount = data.data.amount;
                        }
                    });
                    this.getRechargeOptionsList();
                    this.selected_commodity_id = 0;
                    Message.toast("加载中...", 0.5);
                },
                rechargeOptionsClick(index) {
                    let i;
                    if (!this.rechargeOptionsList[index].status) {
                        var length = this.rechargeOptionsList.length;
                        for (i = 0; i < length; i++)
                            if (index !== i)
                                this.rechargeOptionsList[i].status = false;
                        this.rechargeOptionsList[index].status = true;
                        this.selected_commodity_id = this.rechargeOptionsList[index].id;
                    }
                },
                getRechargeOptionsList() {
                    Util.ajax(null, `${db.data.api}getRechargeOptionsList.php`, (data) => {
                        if (data.e !== 0) {

                        } else {
                            this.rechargeOptionsList = data.data;
                            for (var i = 0; i < this.rechargeOptionsList.length; i++) {
                                this.rechargeOptionsList[i].status = false;
                            }
                            this.rechargeOptionsList = JSON.parse(JSON.stringify(this.rechargeOptionsList))
                        }
                    });
                },
                buy() {
                    if (this.selected_commodity_id == 0) {
                        Message.toast("请选择充值金额!");
                        return;
                    }
                    this.db.data.commodity_id = this.selected_commodity_id;
                    let dataStr = `{
                        "commodity_id" : ${this.db.data.commodity_id}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}setBuyInfo.php`, (data) => {
                        if (data.e !== 0) {
                            MessageBarber.alert('生成订单信息失败!请联系客服人员');
                        } else {
                            this.db.data.buy_id = data.data.buyId;
                            let dataStr = `{
                                "buy_id":${data.data.buyId}
                            }`;
                            Util.ajax(dataStr, `${db.data.api}getBuyPayment.php`, (data) => {
                                if (data.e !== 0) {
                                    MessageBarber.alert("获取订单信息失败，请联系客服人员");
                                } else {
                                    this.jsparam = JSON.parse(data.data.info.jsparam);
                                    this.info = JSON.parse(JSON.stringify(data.data.info));
                                    this.db.data.buy_id = this.info.id;
                                    this.callpay();
                                }
                            });
                        }
                    });
                },
                jsApiCall() {
                    let tradeNo = this.info.tradeNo;
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest',
                        this.jsparam,
                        (res) => {
                            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                                let dataStr = `{
                                    "buyId":${this.db.data.buy_id},
                                    "tradeNo":"${tradeNo}"
                                }`;
                                Util.ajax(dataStr, `${db.data.api}setBuyPaymentResult.php`, (data) => {
                                    if (data.e !== 0) {

                                    } else {
                                        let dataStr = `{
                                            "commodity_id":${this.db.data.commodity_id},
                                            "buy_id":${this.db.data.buy_id}
                                        }`;
                                        Util.ajax(dataStr, `${db.data.api}setBuyRecharge.php`, (data) => {
                                            if (data.e !== 0) {
                                                Message.toast(data.data.msg, 5);
                                            } else {
                                                Message.toast("充值成功!");
                                                let _this = this;
                                                var timer_tmp = setInterval(function () {
                                                    clearInterval(timer_tmp);
                                                    _this.init();
                                                }, 2000);
                                            }
                                        });
                                    }
                                });
                            } else {
                                this.jump('recharge');
                            }
                        }
                    );
                },
                callpay() {
                    setTimeout(() => {
                        this.jsApiCall();
                    }, 200);
                },
            }
        });
    }
}

///////////////