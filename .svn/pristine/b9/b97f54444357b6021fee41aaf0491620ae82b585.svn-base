class activity extends Page {
    constructor(hash) {
        let css =
            `
<style>
    .flex-center {
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 250%;
    }
    table.altrowstable {
        font-family: verdana,arial,sans-serif;
        font-size:11px;
        color:#333333;
        border-width: 1px;
        border-color: #a9c6c9;
        border-collapse: collapse;
    }
    table.altrowstable th {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #a9c6c9;
    }
    table.altrowstable td {
        border-width: 1px;
        padding: 8px;
        border-style: solid;
        border-color: #a9c6c9;
    }
    .oddrowcolor{
        background-color:#d4e3e5;
    }
    .evenrowcolor{
        background-color:#c3dde0;
    }
</style>
`;
        let html =
            [`
                <table>
                    <tr>
                        <td>
                            <img style="height: 100vw; width: 100vw;" src="{{url}}"  alt="二维码" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select v-model="type_selected" class="form-control" style="width:80%;margin-left:10vw;">
                                <option v-for="option in type_options" v-bind:value="option.value">
                                  {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select v-model="quantity_selected" class="form-control" style="width:80%;margin-left:10vw;margin-top: 3vw;">
                                <option v-for="option in quantity_options" v-bind:value="option.value">
                                  {{ option.text }}
                                </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="color:#fff;width:45vw;height:10vw;background:red; margin: 0 auto;margin-top: 3vw;" class="flex-center" @click="createQRcode()">生成二维码</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style="color:#fff;width:45vw;height:10vw;background:red; margin: 0 auto;margin-top: 3vw;" class="flex-center" @click="resetting()">重置</div>
                        </td>
                    </tr>
                </table>
              <table class="altrowstable" style="margin-top: 3vw;">
                  <tr class="evenrowcolor">
                    <th>用户昵称</th>
                    <th>用户手机</th>
                    <th>领取时间</th>
                    <th>优惠卷类型</th>
                    <th>优惠卷张数</th>
                  </tr>
                  <tr v-for="activity in activityReceiveInfoList" :class="$index%2==0? 'oddrowcolor':'evenrowcolor'">
                      <td>{{activity.nickname}}</td>
                      <td>{{activity.phone}}</td>
                      <td>{{activity.create_time}}</td>
                      <td>{{activity.keyword}}</td>
                      <td>{{activity.confirm_receive_timestamp}}</td>
                  </tr>
            </table>
            <table class="altrowstable" style="margin-top: 3vw;">
                  <tr class="evenrowcolor">
                    <th>用户昵称</th>
                    <th>最近发放时间</th>
                    <th>优惠卷类型</th>
                    <th>当天发放优惠卷张数</th>
                  </tr>
                  <tr v-for="activity in activitySendDetailList" :class="$index%2==0? 'oddrowcolor':'evenrowcolor'">
                      <td>{{activity.nickname}}</td>
                      <td>{{activity.create_time}}</td>
                      <td>{{activity.keyword}}</td>
                      <td>{{activity.countNum}}</td>
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

            },
            data: {
                url: "",
                type_selected: 0,
                type_options: [],
                ticket_dict: {},
                activityReceiveInfoList: {},
                activitySendDetailList: {},
                quantity_selected: 0,
                quantity_options: [
                    {text: '请选择优惠卷张数', value: 0},
                    {text: '1张', value: 1},
                    {text: '2张', value: 2},
                    {text: '3张', value: 3},
                    {text: '4张', value: 4},
                    {text: '5张', value: 5}
                ]
            },
            methods: {
                init() {
                    this.type_options = [];
                    Util.ajax(null, `${db.data.api}getActivityDiscountStrategy.php`, (json) => {
                        if (json.e !== 0) {
                            Message.toast('无法读取优惠卷分类信息');
                        } else {
                            this.ticket_dict = JSON.parse(JSON.stringify(json.data.discountStrategyList));
                            this.type_options.push({
                                value: 0,
                                text: "请选择优惠卷类型",
                            });
                            Util.inEach(this.ticket_dict, (obj, key) => {
                                this.type_options.push({
                                    value: key,
                                    text: obj,
                                });
                            });
                        }
                    });
                    this.getActivityReceiveInfo();
                    this.getActivitySendDetail();
                },
                createQRcode() {
                    let dataStr = `{
                            "ticketType":${this.type_selected},
                            "quantity":${this.quantity_selected}
                        }`;
                    if (this.type_selected != 0 && this.quantity_selected != 0) {
                        Util.ajax(dataStr, `${db.data.script}createQRcode.php`, (json) => {
                            if (json.e !== 0) {
                                Message.toast('无法生成二维码');
                            } else {
                                this.url = json.data;
                                Message.toast('已生成二维码');
                            }
                        });
                    } else {
                        this.url = "";
                        Message.toast('请先选择优惠卷类型及张数');
                    }
                },
                resetting() {
                    this.type_selected = 0;
                    this.quantity_selected = 0;
                    this.url = "null";
                    this.getActivityReceiveInfo();
                    this.getActivitySendDetail();
                    Message.toast('重置成功');
                },
                getActivityReceiveInfo() {
                    Util.ajax(null, `${db.data.api}getActivityReceiveInfo.php`, (json) => {
                        if (json.e !== 0) {
                            this.activityReceiveInfoList = {};
                            Message.toast('无法获得活动领卷详情');
                        } else {
                            this.activityReceiveInfoList = json.data.activityReceiveInfoList;
                        }
                    });
                },
                getActivitySendDetail() {
                    Util.ajax(null, `${db.data.api}getActivitySendDetail.php`, (json) => {
                        if (json.e !== 0) {
                            this.activitySendDetailList = {};
                            Message.toast('无法获得活动发卷详情');
                        } else {
                            this.activitySendDetailList = json.data.activitySendDetailList;
                        }
                    });
                }
            }
        });
    }
}