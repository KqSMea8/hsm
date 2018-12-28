class user_hair extends Page {
    constructor(hash) {
        let css = `
<style>
    #index_vue .titleBar,#user_hair_vue .titleBar{height:10%;background:#fff}
    #index_vue .titleBar>div,#user_hair_vue .titleBar>div{float:left;height:100%;text-align:center;width:30%}
    #index_vue .titleBar>table,#user_hair_vue .titleBar>table{height:100%;width:20%;float:left}
    #index_vue .titleBar>table td,#user_hair_vue .titleBar>table td{text-align:center;font-size:3vw;padding:0 4%}
    #index_vue .titleBar_title,#user_hair_vue .titleBar_title{height:100%;width:100%}
    #index_vue .titleBar_title span,#user_hair_vue .titleBar_title span{font-size:4.5vw;}
    #index_vue .titleBar .glyphicon-chevron-left{transform:rotate(90deg);transition:all .4s ease}
    #index_vue .titleBar .rotate{transform:rotate(-90deg)}
    #index_vue .search{width:36%}
    #index_vue .yueta{height:80%}
    #user_hair_vue .yueta{height:90%}
    #index_vue .yueta .person,#user_hair_vue .yueta .person{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}
    #index_vue .yueta .store,#user_hair_vue .yueta .store{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}
    #index_vue .footBar{width:100%;background:#fff;height:10%}
    .red{color:red}
    .grey{color:#777}
    .border_bottom_red{border-bottom:solid 2px red}
    #index_vue .info_box,#user_hair_vue .info_box{margin:3%;background:#fff}
    #index_vue .info_box>div,#user_hair_vue .info_box>div{background:#fff}
    #index_vue .info_box .line1,#user_hair_vue .info_box .line1{padding:3% 0;font-size:4vw}
    #index_vue .info_box .name,#user_hair_vue .info_box .name{font-weight:900;font-size: 4vw;}
    #index_vue .info_box .userHairHistory,#user_hair_vue .info_box .userHairHistory{width:19%;color:#aaa}
    #index_vue .info_box .waitting,#user_hair_vue .info_box .waitting{text-align:right}
    #index_vue .footBar>div{width:50%;float:left;height:100%;text-align:center}
    #index_vue .footBar>div>div{height:60%}
    #index_vue .footBar img{height:80%;top:20%;position:relative}
    #index_vue .info_box ul,#user_hair_vue .info_box ul{position:relative;width:100%;background:#fff}
    #index_vue .info_box li,#user_hair_vue .info_box li{float:left}
    #index_vue .info_box ul.block,#user_hair_vue .info_box ul.block{height:auto}
    #index_vue .info_box ul:nth-of-type(1) li,#user_hair_vue .info_box ul:nth-of-type(1) li{width:50%;height:100%}
    #index_vue .info_box ul:nth-of-type(1) li:nth-of-type(2),#user_hair_vue .info_box ul:nth-of-type(1) li:nth-of-type(2){text-align:right}
    #index_vue .info_box ul:nth-of-type(1) span,#user_hair_vue .info_box ul:nth-of-type(1) span{font-size:17px}
    #index_vue .info_box ul:nth-of-type(1) span.name,#user_hair_vue .info_box ul:nth-of-type(1) span.name{font-size:18px;font-weight:900}
    #index_vue .info_box ul:nth-of-type(3) li,#user_hair_vue .info_box ul:nth-of-type(3) li{width:50%;height:100%}
    #index_vue .info_box ul:nth-of-type(3) li:nth-of-type(2),#user_hair_vue .info_box ul:nth-of-type(3) li:nth-of-type(2){text-align:right}
    #index_vue .info_box ul:nth-of-type(3) img,#index_vue .info_box ul:nth-of-type(4) img,#user_hair_vue .info_box ul:nth-of-type(3) img{height:38%;top:28%;position:relative}
    #index_vue .info_box ul:nth-of-type(3) span,#user_hair_vue .info_box ul:nth-of-type(3) span{font-size:16px}
    #index_vue .info_box ul:nth-of-type(4) li,#user_hair_vue .info_box ul:nth-of-type(4) li{width:50%;height:100%}
    #index_vue .info_box ul:nth-of-type(4) li:nth-of-type(2),#user_hair_vue .info_box ul:nth-of-type(4) li:nth-of-type(2){text-align:right}
    #index_vue .info_box ul:nth-of-type(4) span,#user_hair_vue .info_box ul:nth-of-type(4) span{font-size:16px}
    .pink{color:pink}
    .borderRed{border:1px solid red}
    .borderPink{border:1px solid pink}
    #index_vue .info_box .yijian,#user_hair_vue .info_box .yijian{border-radius: 53px;width: 58%;display: inline-block;text-align: center;position: relative;padding: 6% 2%;font-size: 3vw;margin-right: 10%;}
    #index_vue .info_box .fans,#user_hair_vue .info_box .fans{bottom:4%;left:51%;width:46%;position:absolute;font-size: 3vw;}
    #index_vue .info_box .fans td,#user_hair_vue .info_box .fans td{padding:2% 0;text-align:center;line-height:1.1;color:#fff}
    #index_vue .info_box .fans td:nth-of-type(1),#user_hair_vue .info_box .fans td:nth-of-type(1){background:#D60040}
    #index_vue .info_box .fans td:nth-of-type(2),#user_hair_vue .info_box .fans td:nth-of-type(2){background:#e60045}
    #index_vue .info_box .distance,#user_hair_vue .info_box .distance{position:absolute;bottom:2%;font-size:4vw;color:grey;left:4%}
    #user_hair_vue div{display: block;}
</style>
`;
        let html =
            [`
<div class="titleBar">
    <table>
        <tr>
            <td>&nbsp;</td>
        </tr>
    </table>
    <div v-for="item in titleBar" @touchstart="titleItemClick($index)">
        <table class="titleBar_title {{item.status?'red border_bottom_red':'grey'}}">
            <tr>
                <td>
                    {{item.text}}
                </td>
            </tr>
        </table>
    </div>
    <table>
        <tr>
            <td>&nbsp;</td>
        </tr>
    </table>
</div>
<div class="yueta">
    <div class="store" style="{{titleBar[0].status?'':'display: none;'}}">
        <div class="info_box" v-for="userHairReference in userHairReferenceList" style="display: block;">
            <table class="w100">
                <tr>
                    <td class="line1 name w50" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + userHairReference.studio_name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + userHairReference.barber_name"></td>
                    <td style="font-size:10px;" class="line1 w50 txtr grey">
                        {{userHairReference.create_time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
            </table>
            <ul class="block">
                <img v-for="i in userHairReference.img" class="w100" style="width: 25%;" :src="userHairReference.img[$index]" @click="look(userHairReference.img[$index], userHairReference.img)"/>
            </ul>
            <table class="w100">
                <tr>
                    <td class="line1 w50 txtr">
                        &nbsp;&nbsp;
                        <b class="red" style="font-family: 黑体;" @click="confirmCancelUserHairReference(userHairReference.id)">
                            &nbsp;&nbsp;取消当前参考发型>
                        </b>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="store" style="{{titleBar[1].status?'':'display: none;'}}">
        <div class="info_box" v-for="userHairHistory in userHairHistoryList" style="display: block;">
            <table class="w100">
                <tr>
                    <td class="line1 name w50" v-html="'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + userHairHistory.studio_name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + userHairHistory.barber_name"></td>
                    <td style="font-size:10px;" class="line1 w50 txtr grey">
                        {{userHairHistory.create_time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                </tr>
            </table>
            <ul class="block">
                <img v-for="i in userHairHistory.img" class="w100" style="width: 25%;" :src="userHairHistory.img[$index]" @click="look(userHairHistory.img[$index], userHairHistory.img)"/>
            </ul>
            <table class="w100">
                <tr>
                    <td class="line1 w50 txtr">
                        &nbsp;&nbsp;
                        <b class="red" style="font-family: 黑体;" v-if="userHairHistory.hair_id == null" @click="setUserHairReference(userHairHistory.oid, userHairHistory.uid, userHairHistory.img)">
                            &nbsp;&nbsp;设置成参考发型>
                        </b>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="endtouch w100 h100 pos_a t0"></div>
`];
        super(hash, html, css);
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
            data: {
                titleBar: [
                    {text: '我的参考发型', status: false},
                    {text: '发型历史', status: true}
                ],
                userHairHistoryList: [],
                userHairReferenceList: [],
                oid: 0,
                uid: 0,
                img: "",
                hid: 0
            },
            methods: {
                init() {
                    setTimeout(() => {
                        this.launcher.showAndHideCover($(this.$el));
                    }, 100);
                    let dataStr = `{
                        "uid":${this.db.data.setUserId}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getUserHairHistoryList.php`, (data) => {
                        this.renderUserHairHistoryList(data);
                        Util.ajax(dataStr, `${db.data.api}getUserHairReferenceList.php`, (data) => {
                            this.renderUserHairReferenceList(data);
                        });
                    });
                },
                renderUserHairHistoryList(data) {
                    if (data.e !== 0) {

                    } else {
                        this.userHairHistoryList = data.data.userHairHistoryList;
                        for (var key in this.userHairHistoryList) {
                            var imgArr = [];
                            var img = "";
                            img = this.userHairHistoryList[key].img + "";
                            imgArr = img.split("|");
                            this.userHairHistoryList[key].img = imgArr;
                        }
                    }
                },
                renderUserHairReferenceList(data) {
                    if (data.e !== 0) {

                    } else {
                        this.userHairReferenceList = data.data.userHairReferenceList;
                        for (var key in this.userHairReferenceList) {
                            var imgArr = [];
                            var img = "";
                            img = this.userHairReferenceList[key].img + "";
                            imgArr = img.split("|");
                            this.userHairReferenceList[key].img = imgArr;
                        }
                    }
                },
                titleItemClick(index) {
                    if (!this.titleBar[index].status) {
                        var length, i;
                        length = this.titleBar.length;
                        for (i = 0; i < length; i++) {
                            if (index != i) {
                                this.titleBar[i].status = false;
                            }
                        }
                        this.titleBar[index].status = true;
                    }
                },
                look(currentImg, imgStr) {
                    var imgString = "";
                    imgString = imgStr + "";
                    var imgArr = imgString.split(",");
                    var urls = [];
                    for (var i = 0; i < imgArr.length; i++) {
                        var src = imgArr[i].trim();
                        if (!!src) {
                            urls.push(src);
                        }
                    }
                    if (urls.length <= 0) {
                        return;
                    } else {
                        wx.previewImage({
                            current: currentImg, // 当前显示图片的http链接
                            urls: urls // 需要预览的图片http链接列表
                        });
                    }
                },
                setUserHairReference(oid, uid, img) {
                    this.oid = oid;
                    this.uid = uid;
                    this.img = img;
                    let dataStr = `{
                            "oid":"${this.oid}",
                            "uid":"${this.uid}",
                            "img":"${this.img}"
                        }`;
                    Util.ajax(dataStr, `${db.data.api}setUserHairReference.php`, (data) => {
                        if (data.e !== 0) {
                            Message.toast('设置失败');
                        } else {
                            Message.toast('设置成功');
                            this.init();
                        }
                    });
                },
                confirmCancelUserHairReference(hid) {
                    var _tempThis = this;
                    MessageBarber.confirm('确定要取消当前参考发型吗?', function () {
                        _tempThis.cancelUserHairReference(hid);
                    });
                },
                cancelUserHairReference(hid) {
                    this.hid = hid;
                    let dataStr = `{
                            "hid":"${this.hid}"
                        }`;
                    Util.ajax(dataStr, `${db.data.api}cancelUserHairReference.php`, (data) => {
                        if (data.e !== 0) {
                            Message.toast('取消设置失败');
                        } else {
                            Message.toast('取消设置成功');
                            this.init();
                        }
                    });
                }
            }
        });
    }
}
//