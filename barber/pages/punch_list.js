class punch_list extends Page {
    constructor(hash) {
        let css;
        css = `
<style>
    #punch_list_vue .bottomNav,#punch_list_vue .topNav{width:100%;background:#fff}
    #punch_list_vue .topNav{height:7vh;justify-content:space-between;align-items:center}
    #punch_list_vue .topNav>div{width:33.333333%}
    #punch_list_vue .topNav>div:nth-of-type(2){justify-content:center;align-items:center}
    #punch_list_vue .topNav>div:nth-of-type(3){justify-content:flex-end;align-items:center}
    #punch_list_vue .topNav .leftImg{width:4vh;height:3vh;margin-left:3vh}
    #punch_list_vue .bottomNav{height:10vh;justify-content:space-around}
    #punch_list_vue .bottomNav>div{display:flex;flex-direction:column}
    #punch_list_vue .bottomNav img{width:5vh;height:5vh}
    #punch_list_vue .body{width:100vw;height:83vh;background:#f5f5f5;padding:1vh 0 1vh 0}
    .btr3{border-bottom:solid 3px red}
    #punch_list_vue div{display:flex}
    
    #punch_list_vue .yueta{height:90%; background: #f5f5f5;}
    /*#index_vue .yueta .person,#punch_list_vue .yueta .person{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}*/
    #index_vue .yueta .store,#punch_list_vue .yueta .store{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}
</style>
`;
        let html =
            [` 
<div class="flex topNav pos_r" style="z-index:9;">
    <div class="flex">
        <img class="leftImg" onclick="history.go(-1)" src="./images/index/back.png" />
    </div>
    <div class="flex" style="font-size:5vw;font-weight:600">上下班打卡</div>
    <div class="flex>
        <span class="flex flex-center"></span>
        <img style="width:4vh;height:4vh;margin:0 2vh 0 2vh;" src="./images/index/work_table.png" />
    </div>
</div>

<div class="yueta" style="display: block;">
    <div>
        <div style="font-family: 黑体;font-size: 4vw;padding-top: 3%;padding-left: 3%;display:inline;">2018年9月30日 星期日</div>
        <div style="font-family: 黑体;font-size: 4vw;padding-top: 3%;padding-left: 40%;display:inline;">下班中</div>
    </div>
    
    <div>
        <div style="font-family: 黑体;font-size: 4vw;padding-top: 3%;padding-left: 3%;display:inline;">上班打卡</div>
        <div style="font-family: 黑体;font-size: 4vw;padding-top: 3%;padding-left: 38%;display:inline;">2018-10-12 11:00:00</div>
    </div>
    <div>
        <div style="font-family: 黑体;font-size: 4vw;padding-top: 3%;padding-left: 3%;display:inline;">下班打卡</div>
        <div style="font-family: 黑体;font-size: 4vw;padding-top: 3%;padding-left: 38%;display:inline;">2018-10-13 00:00:00</div>
    </div>
    
    <div @click="upload()" style="border-radius: 50%; margin-left: 30%;margin-top: 15%;background:red; color:#FFF;width: 40vw;height: 40vw;">
        <span style="margin-left: 20%;margin-top: 40%;font-size: x-large;font-family: 黑体;">上班打卡</span>
    </div>
</div>
`];
        super(hash, html, css);
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.db = db;
                console.log('create index');
                this.launcher = launcher.vue;
                Util.forEach(m.pages, (page) => {
                    m.addPage(page);
                });
            },
            compiled() {

            },
            data: {
                //上传图片需要用到的变量
                imgArr: [],
                img_str: '',
                imgServerArr: [],
                nowImgIndex: 0,
                isuploading: false
            },
            methods: {
                init() {

                },
                renderImgByServerId() {
                    let dataStr = `{
                        "server_id" : "${this.imgServerArr.join("|")}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getImgByServerId.php`, (json) => {
                        if (json.e !== 0) {
                            Message.toast('图片上传出现问题');
                        } else {
                            if (!json.data.img_str) {
                                Message.toast('图片上传出现问题');
                            } else {
                                Message.toast('图片上传成功啦');
                                this.img_str = json.data.img_str;
                                this.imgArr = this.img_str.split('|');
                            }
                        }
                    });
                },


                upload() {
                    let _this = this;
                    if (this.isuploading === true) {
                        MessageBarber.alert('有图片正在上传，请耐心等待');
                        return;
                    }
                    wx.checkJsApi({
                        jsApiList: ['getLocation'],
                        success: (res) => {
                            wx.chooseImage({
                                count: 4, // 默认9
                                sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                                success: function (res) {
                                    let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                                    _this.isuploading = true;
                                    _this.nowImgIndex = 0;
                                    let t = setTimeout(() => {
                                        _this.isuploading = false;
                                    }, 3000);
                                    _this.imgServerArr = [];
                                    let getServerId = function () {
                                        let id = localIds[_this.nowImgIndex];
                                        if (id) {
                                            wx.uploadImage({
                                                localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
                                                isShowProgressTips: 1, // 默认为1，显示进度提示
                                                success: function (res) {
                                                    _this.imgServerArr[_this.nowImgIndex] = res.serverId;
                                                    _this.nowImgIndex++;
                                                    getServerId();
                                                }
                                            });
                                        } else {
                                            clearTimeout(t);
                                            _this.isuploading = false;
                                            _this.renderImgByServerId();
                                        }
                                    };
                                    getServerId();
                                }
                            });
                        }
                    });
                    return;
                }


            }
        });
    }
}