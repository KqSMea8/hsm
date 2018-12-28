class online_pay extends Page {
    constructor(hash) {
        let css =
            `
<style>
    #myhair_vue table {
        width: 96%;
        position: absolute;
        left: 2%;
        background: #fff;
        top: 2%
    }

    #myhair_vue td {
        background: #fff;
        text-align: center
    }

    #myhair_vue div.inbl {
        width: 90%;
        margin: 11% 5%
    }

    .flex-center {
        justify-content: center;
        align-items: center;
    }
</style>
`;
        let html =
            [`<table>
    <tr>
        <td style="padding-top: 10%;padding-left: 11%;">
            <div class="inbl">
                选择线上支付方式:
                <select v-model="online_pay_selected" class="form-control" style="width:60vw;margin-left:7vw;margin-top: 10%;">
                    <option v-for="option in online_pay_options" v-bind:value="option">
                      {{ option.name }}
                    </option>
                </select>
            </div>
        </td>
    </tr>
    <tr>
        <td style="padding-top: 10%;padding-left: 11%;">
            <div class="inbl">
                预计支付:
                <span style="width:80vw;margin-left:7vw;font-size: 20vw;margin-top: 10%;">
                       ￥<span style="color: red;">{{online_pay_selected.expectedPayment}}</span>元
                </span>
            </div>
        </td>
    </tr>
    <tr>
        <td style="padding-top: 10%;padding-left: 11%;">
            <div class="inbl">
                <div style="color:#fff;height:10vw;background:red;width:60vw;margin-left:7vw;margin-top: 10%;" class="flex-center" @click="setOnlinePay()">确定</div>
            </div>
        </td>
    </tr>
</table>
`];
        super(hash, html, css);
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.db = db;
            },
            compiled() {
                this.init();
            },
            data: {
                online_pay_selected: {id: "0", name: "请选择线上支付方式", expectedPayment: "0", did: "0"},
                online_pay_options: []
            },
            methods: {
                init() {
                    this.online_pay_selected = {id: "0", name: "请选择线上支付方式", expectedPayment: "0", did: "0"};
                    this.getOnlinePayList();
                },
                getOnlinePayList() {
                    let dataStr = `{
                        "orderId":${this.db.data.setOrderId}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getOnlinePayList.php`, (data) => {
                        if (data.e !== 0) {
                            Message.toast(data.data.msg);
                        } else {
                            this.online_pay_options = data.data;
                            if (this.online_pay_options.length <= 2) {
                                this.online_pay_selected = this.online_pay_options[1];
                            }
                        }
                    });
                },
                setOnlinePay() {
                    if (this.online_pay_selected.id == 0) {
                        Message.toast("请选择线上支付方式!");
                    } else {
                        MessageBarber.dialogForSystemOutside('提示', '确定选择该线上支付方式吗?', '关闭', '确定', () => {
                            Message.removeDialog();
                        }, () => {
                            let dataStr = `{
                                "orderId":${this.db.data.setOrderId},
                                "did":${this.online_pay_selected.did}
                            }`;
                            Util.ajax(dataStr, `${db.data.api}setOnlinePay.php`, (data) => {
                                if (data.e !== 0) {
                                    Message.toast(data.data.msg);
                                } else {
                                    Message.toast(data.data.msg);
                                    index.vue.getBarberOrderList();
                                    history.go(-1);
                                }
                            });
                            Message.removeDialog();
                        });
                    }
                }
            }
        });
    }
}

////