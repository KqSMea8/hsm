class myhair extends Page {
    constructor(hash) {
        super(hash, require('tpl.html'));
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
                img: "",
                hid: 0,

                old_img: "",
                img_str: "",
                isuploading: false,
                imgServerArr: [],
                nowImgIndex: 0
            },
            methods: {
                init() {
                    setTimeout(() => {
                        this.launcher.showAndHideCover($(this.$el));
                    }, 100);
                    Util.ajax(null, `${db.data.api}getUserHairHistoryList.php`, (data) => {
                        this.renderUserHairHistoryList(data);
                        Util.ajax(null, `${db.data.api}getUserHairReferenceList.php`, (data) => {
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
                setUserHairReference(oid, img) {
                    this.oid = oid;
                    this.img = img;
                    let dataStr = `{
                            "oid":"${this.oid}",
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
                },


                editImg(hid, oldImg, oldImgStr) {
                    var _this = this;
                    _this.img_str = oldImg;
                    let html = '<div id="all_notice" style="transition:opacity .4s ease;overflow: hidden;background-color:#fff;z-index:9999;border-radius:10px;position:absolute;width:70%;left:0;right:0;top:0;bottom:0;margin:auto;opacity:0;height:186px;padding: 0;">' +
                        '<div class="w100 pos_r" style="margin: 0;padding: 0;height: 120px">' +
                        '<h1 class="txtc clbl" style="font-size: 131%;font-weight: 600;padding: 2% 0;"></h1>' +
                        '<img id="all_notice_img" class="txtc clbl c w100" style="width: 40%;" src="' + oldImg + '">' +
                        '</div>' +
                        '<div class="w50 fl txtc" id="all_notice_button1" style="height:45px;padding: 4%;font-size: 18px;color: #ccf;border-top: solid 1px #ddd;border-right: solid 1px #ddd;"><a>删除</a></div>' +
                        '<div class="w50 fl txtc" id="all_notice_button2" style="height:45px;border-top: solid 1px #ddd;padding: 4%;font-size: 18px;color: #ccf;"><a>修改</a></div>' +
                        '</div>' +
                        '<div id="all_notice_cover" style="left:0;top:0;z-index:999;position:absolute;height: 100%;width: 100%;background-color: #000000;opacity: 0.6;"></div>';
                    Message.dialogForUserImg(html, function () {
                        _this.deleteUserHairReference(hid, oldImg, oldImgStr, 0);
                        Message.removeDialog();
                    }, function () {
                        _this.editUserHairReference(hid, oldImg, _this.img_str, 1);
                        Message.removeDialog();
                    }, function () {
                        _this.upload(null, null, hid);
                    });
                },
                deleteUserHairReference(hairId, oldImg, oldImgStr, commitType) {
                    let dataStr = `{
                        "hid" : ${Math.floor(hairId)},
                        "pic" : "${oldImg}",
                        "commitType" : "${commitType}",
                        "oldImgStr" : "${oldImgStr}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}editUserHairReference.php`, (data) => {
                        if (data.e !== 0) {
                            alert(JSON.stringify(data));
                            Message.toast('图片删除出现问题');
                        } else {
                            Message.toast("删除成功啦｡◕‿◕｡");
                            this.init();
                        }
                    });
                },
                editUserHairReference(hairId, oldImg, pic, commitType) {
                    let dataStr = `{
                        "hid" : ${Math.floor(hairId)},
                        "pic" : "${pic}",
                        "commitType" : "${commitType}",
                        "oldImgStr" : "${oldImg}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}editUserHairReference.php`, (data) => {
                        if (data.e !== 0) {
                            alert(JSON.stringify(data));
                            Message.toast('图片修改出现问题');
                        } else {
                            Message.toast("修改成功啦｡◕‿◕｡");
                            this.init();
                        }
                    });
                },
                renderImgArrByServerId(hairId) {
                    let dataStr = `{
                        "server_id" : "${this.imgServerArr.join("|")}",
                        "hid" : ${Math.floor(hairId)}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getImgArrByServerIdForUserHair.php`, (json) => {
                        if (json.e !== 0) {
                            Message.toast('图片上传出现问题');
                        } else {
                            if (!json.data.img_str) {
                                Message.toast('图片上传出现问题');
                            } else {
                                this.img_str = json.data.img_str;
                                document.getElementById("all_notice_img").src = this.img_str;
                            }
                        }
                    });
                },
                upload(event, index, hairId) {
                    let _this = this;
                    if (this.isuploading === true) {
                        MessageBarber.alert('有图片正在上传，请耐心等待');
                        return;
                    }
                    if (index === null) {
                        wx.checkJsApi({
                            jsApiList: ['getLocation'],
                            success: (res) => {
                                wx.chooseImage({
                                    count: 1, // 默认9
                                    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                    sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
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
                                                _this.renderImgArrByServerId(hairId)
                                            }
                                        };
                                        getServerId();
                                    }
                                });
                            }
                        });
                        return;
                    } else {
                        return;
                    }
                    if (this.isuploading === true) {
                        MessageBarber.alert('有图片正在上传，请耐心等待');
                        return;
                    }
                    var nowImgNums = 0;
                    $('#td').children('img').each(function (index, obj) {
                        if ($(obj).attr('src'))
                            nowImgNums++;
                    });

                    if (index !== null)
                        this.nowImgIndex = index;
                    else
                        this.nowImgIndex = nowImgNums;

                    if (this.nowImgIndex > 1) {
                        MessageBarber.alert('最多上传1张图片');
                        return;
                    }
                    MessageBarber.upload("选择一张满意的图片把~~~");
                },
            }
        });
    }
}
///////