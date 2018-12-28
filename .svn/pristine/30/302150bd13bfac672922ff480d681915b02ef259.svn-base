class buy extends Page {
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
                info: {}
            },
            methods: {
                init() {
                    let dataStr = `{
                        "buy_id":${db.data.buy_id}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getBuyPayment.php`, (data) => {
                        // alert(JSON.stringify(data));
                        if (data.e !== 0) {
                            MessageBarber.alert("获取订单信息失败，请联系客服人员");
                        } else {
                            this.jsparam = JSON.parse(data.data.info.jsparam);
                            this.info = JSON.parse(JSON.stringify(data.data.info));
                            this.callpay();
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
                                    "buyId":${db.data.buy_id},
                                    "tradeNo":"${tradeNo}"
                                }`;
                                Util.ajax(dataStr, `${db.data.api}setBuyPaymentResult.php`, (data) => {
                                    if (data.e !== 0) {

                                    } else {

                                        let dataStr = `{
                                            "did":${data.data.did},
                                            "quantity":${data.data.quantity},
                                            "sid":${data.data.sid}
                                        }`;
                                        Util.ajax(dataStr, `${db.data.api}setBuyTicket.php`, (data) => {
                                            if (data.e !== 0) {
                                                Message.toast(data.data.msg, 5);
                                            } else {
                                                this.jump('mytickets');
                                            }
                                        });
                                    }
                                });
                            } else {
                                this.jump('commodity_detail');
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

/////////