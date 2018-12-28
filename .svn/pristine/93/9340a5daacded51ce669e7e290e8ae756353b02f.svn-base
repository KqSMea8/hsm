class userClass extends Page {
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
                    用户分类:<select v-model="level_selected" class="form-control" style="width:60vw;margin-left:7vw;margin-top: 10%;">
                                    <option v-for="option in level_options" v-bind:value="option.value">
                                      {{ option.text }}
                                    </option>
                                </select>
                </div>
            </td>
        </tr>
        <tr>
            <td style="padding-top: 10%;padding-left: 11%;">
                <div class="inbl">
                    用户性别:<select v-model="sex_selected" class="form-control" style="width:60vw;margin-left:7vw;margin-top: 10%;">
                                    <option v-for="option in sex_options" v-bind:value="option.value">
                                      {{ option.text }}
                                    </option>
                                </select>
                </div>
            </td>
        </tr>
    </tr>
    <tr>
        <td style="padding-top: 10%;padding-left: 11%;">
            <div class="inbl">
                <div style="color:#fff;height:10vw;background:red;width:60vw;margin-left:7vw;margin-top: 10%;" class="flex-center" @click="setUserClass()">确定</div>
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
                level_selected: -1,
                level_options: [
                    {text: '请选择', value: -1},
                    {text: 'A:最高要求, 认特定发型师', value: 1},
                    {text: 'B:较高要求, 对店有选择性', value: 2},
                    {text: 'C:无要求, 哪里剪都无所谓', value: 3},
                    {text: 'D:哪里便宜到哪里', value: 4},
                ],
                sex_selected: -1,
                sex_options: [
                    {text: '请选择', value: -1},
                    {text: '男', value: 1},
                    {text: '女', value: 2},
                    {text: '未知', value: 0},
                ]
            },
            methods: {
                init() {
                    console.log(this.db.data.setOrderId);
                    this.level_selected = -1;
                    this.sex_selected = -1;
                },
                setUserClass() {
                    let dataStr = `{
                            "oid":${this.db.data.setOrderId},
                            "class":${this.level_selected},
                            "class_sex":${this.sex_selected}
                        }`;
                    Util.ajax(dataStr, `${db.data.api}set_level.php`, (data) => {
                        if (data.e !== 0) {
                            Message.toast("请选择用户分类或用户性别");
                        } else {
                            Message.toast("评价成功");
                            index.vue.getBarberOrderList();
                            history.go(-1);
                        }
                    });
                },
            }
        });
    }
}
//