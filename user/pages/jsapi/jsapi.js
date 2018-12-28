class jsapi extends Page {
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {},
            compiled () {},
            data: {
                jsparam:{},
                info:{},
                isShow: false
            },
            methods: {
                init() {
                    let dataStr = `{
                            "oid":${db.data.jsapi_order_id}
                        }`;
                    Util.ajax(dataStr, `${db.data.api}getOrderPayment.php`, (data) => {
                        // alert(JSON.stringify(data));
                        if (data.e !== 0) {
                            if (data.e != -2) {
                                MessageBarber.alert("付款失败，请询问发型师服务是否已经完成");
                            }
                            this.jump('index');
                        } else {
                            this.jsparam = JSON.parse(data.data.info.jsparam);
                            this.info = JSON.parse(JSON.stringify(data.data.info));
                            this.isShow = true;
                            ////
                        }
                    });
                },
                jsApiCall(){
                    let tradeNo = this.info.tradeNo;
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest',
                        this.jsparam,
                        (res) => {
                            // alert(JSON.stringify(res));
                            if (res.err_msg === 'get_brand_wcpay_request:ok') {
                                let dataStr = `{
                                    "oid":${db.data.jsapi_order_id},
                                    "tradeNo":"${tradeNo}"
                                }`;
                                Util.ajax(dataStr, `${db.data.api}setOrderPaymentResult.php`, (data) => {
                                    db.data.comment_order_id = db.data.jsapi_order_id;
                                    db.data.comment_close = true;
                                    this.jump('comment');
                                });
                            }else{
                                db.data.comment_order_id = db.data.jsapi_order_id;
                                db.data.comment_close = true;
                            }
                        }
                    );
                },
                callpay(){
                    setTimeout(()=>{
                        this.jsApiCall();
                    },200);
                },
                immediatePayment() {
                    this.callpay();
                }
            }
        });
    }
}
//