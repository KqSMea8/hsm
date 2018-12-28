class pay_channel extends Page {
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
                    选择支付渠道:<select v-model="channel_selected" class="form-control" style="width:60vw;margin-left:7vw;margin-top: 10%;">
                                    <option v-for="option in channel_options" v-bind:value="option.id">
                                      {{ option.name }}
                                    </option>
                                </select>
                </div>
            </td>
        </tr>
    </tr>
    <tr>
        <td style="padding-top: 10%;padding-left: 11%;">
            <div class="inbl">
                <div style="color:#fff;height:10vw;background:red;width:60vw;margin-left:7vw;margin-top: 10%;" class="flex-center" @click="setPayChannel()">确定</div>
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
                channel_selected: 0,
                channel_options: []
            },
            methods: {
                init() {
                    this.getPayChannelList();
                },
                getPayChannelList() {
                    Util.ajax(null, `${db.data.api}getPayChannelList.php`, (data) => {
                        if (data.e !== 0) {

                        } else {
                            this.channel_options = data.data;
                            this.channel_selected = 0;
                        }
                    });
                },
                setPayChannel() {
                    if (this.channel_selected == 0) {
                        Message.toast("请选择支付渠道!");
                    } else {
                        MessageBarber.dialogForSystemOutside('提示', '请确定用户在该支付渠道支付完毕!', '关闭', '确定', () => {
                            Message.removeDialog();
                        }, () => {
                            let dataStr = `{
                                "orderId":${this.db.data.setOrderId},
                                "channelId":${this.channel_selected}
                            }`;
                            Util.ajax(dataStr, `${db.data.api}setPayChannel.php`, (data) => {
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
                },
            }
        });
    }
}