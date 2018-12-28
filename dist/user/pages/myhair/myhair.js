'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myhair = function (_Page) {
    _inherits(myhair, _Page);

    function myhair(hash) {
        _classCallCheck(this, myhair);

        return _possibleConstructorReturn(this, (myhair.__proto__ || Object.getPrototypeOf(myhair)).call(this, hash, '<style>\n    #index_vue .titleBar,#myhair_vue .titleBar{height:10%;background:#fff}\n    #index_vue .titleBar>div,#myhair_vue .titleBar>div{float:left;height:100%;text-align:center;width:30%}\n    #index_vue .titleBar>table,#myhair_vue .titleBar>table{height:100%;width:20%;float:left}\n    #index_vue .titleBar>table td,#myhair_vue .titleBar>table td{text-align:center;font-size:3vw;padding:0 4%}\n    #index_vue .titleBar_title,#myhair_vue .titleBar_title{height:100%;width:100%}\n    #index_vue .titleBar_title span,#myhair_vue .titleBar_title span{font-size:4.5vw;}\n    #index_vue .titleBar .glyphicon-chevron-left{transform:rotate(90deg);transition:all .4s ease}\n    #index_vue .titleBar .rotate{transform:rotate(-90deg)}\n    #index_vue .search{width:36%}\n    #index_vue .yueta{height:80%}\n    #myhair_vue .yueta{height:90%}\n    #index_vue .yueta .person,#myhair_vue .yueta .person{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}\n    #index_vue .yueta .store,#myhair_vue .yueta .store{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}\n    #index_vue .footBar{width:100%;background:#fff;height:10%}\n    .red{color:red}\n    .grey{color:#777}\n    .border_bottom_red{border-bottom:solid 2px red}\n    #index_vue .info_box,#myhair_vue .info_box{margin:3%;background:#fff}\n    #index_vue .info_box>div,#myhair_vue .info_box>div{background:#fff}\n    #index_vue .info_box .line1,#myhair_vue .info_box .line1{padding:3% 0;font-size:4vw}\n    #index_vue .info_box .name,#myhair_vue .info_box .name{font-weight:900;font-size: 4vw;}\n    #index_vue .info_box .userHairHistory,#myhair_vue .info_box .userHairHistory{width:19%;color:#aaa}\n    #index_vue .info_box .waitting,#myhair_vue .info_box .waitting{text-align:right}\n    #index_vue .footBar>div{width:50%;float:left;height:100%;text-align:center}\n    #index_vue .footBar>div>div{height:60%}\n    #index_vue .footBar img{height:80%;top:20%;position:relative}\n    #index_vue .info_box ul,#myhair_vue .info_box ul{position:relative;width:100%;background:#fff}\n    #index_vue .info_box li,#myhair_vue .info_box li{float:left}\n    #index_vue .info_box ul.block,#myhair_vue .info_box ul.block{height:auto}\n    #index_vue .info_box ul:nth-of-type(1) li,#myhair_vue .info_box ul:nth-of-type(1) li{width:50%;height:100%}\n    #index_vue .info_box ul:nth-of-type(1) li:nth-of-type(2),#myhair_vue .info_box ul:nth-of-type(1) li:nth-of-type(2){text-align:right}\n    #index_vue .info_box ul:nth-of-type(1) span,#myhair_vue .info_box ul:nth-of-type(1) span{font-size:17px}\n    #index_vue .info_box ul:nth-of-type(1) span.name,#myhair_vue .info_box ul:nth-of-type(1) span.name{font-size:18px;font-weight:900}\n    #index_vue .info_box ul:nth-of-type(3) li,#myhair_vue .info_box ul:nth-of-type(3) li{width:50%;height:100%}\n    #index_vue .info_box ul:nth-of-type(3) li:nth-of-type(2),#myhair_vue .info_box ul:nth-of-type(3) li:nth-of-type(2){text-align:right}\n    #index_vue .info_box ul:nth-of-type(3) img,#index_vue .info_box ul:nth-of-type(4) img,#myhair_vue .info_box ul:nth-of-type(3) img{height:38%;top:28%;position:relative}\n    #index_vue .info_box ul:nth-of-type(3) span,#myhair_vue .info_box ul:nth-of-type(3) span{font-size:16px}\n    #index_vue .info_box ul:nth-of-type(4) li,#myhair_vue .info_box ul:nth-of-type(4) li{width:50%;height:100%}\n    #index_vue .info_box ul:nth-of-type(4) li:nth-of-type(2),#myhair_vue .info_box ul:nth-of-type(4) li:nth-of-type(2){text-align:right}\n    #index_vue .info_box ul:nth-of-type(4) span,#myhair_vue .info_box ul:nth-of-type(4) span{font-size:16px}\n    .pink{color:pink}\n    .borderRed{border:1px solid red}\n    .borderPink{border:1px solid pink}\n    #index_vue .info_box .yijian,#myhair_vue .info_box .yijian{border-radius: 53px;width: 58%;display: inline-block;text-align: center;position: relative;padding: 6% 2%;font-size: 3vw;margin-right: 10%;}\n    #index_vue .info_box .fans,#myhair_vue .info_box .fans{bottom:4%;left:51%;width:46%;position:absolute;font-size: 3vw;}\n    #index_vue .info_box .fans td,#myhair_vue .info_box .fans td{padding:2% 0;text-align:center;line-height:1.1;color:#fff}\n    #index_vue .info_box .fans td:nth-of-type(1),#myhair_vue .info_box .fans td:nth-of-type(1){background:#D60040}\n    #index_vue .info_box .fans td:nth-of-type(2),#myhair_vue .info_box .fans td:nth-of-type(2){background:#e60045}\n    #index_vue .info_box .distance,#myhair_vue .info_box .distance{position:absolute;bottom:2%;font-size:4vw;color:grey;left:4%}\n</style>\n<div class="titleBar">\n    <table>\n        <tr>\n            <td>&nbsp;</td>\n        </tr>\n    </table>\n    <div v-for="item in titleBar" @touchstart="titleItemClick($index)">\n        <table class="titleBar_title {{item.status?\'red border_bottom_red\':\'grey\'}}">\n            <tr>\n                <td>\n                    {{item.text}}\n                </td>\n            </tr>\n        </table>\n    </div>\n    <table>\n        <tr>\n            <td>&nbsp;</td>\n        </tr>\n    </table>\n</div>\n<div class="yueta">\n    <div class="store {{titleBar[0].status?\'\':\'disn\'}}">\n        <div class="info_box" v-for="userHairReference in userHairReferenceList">\n            <table class="w100">\n                <tr>\n                    <td class="line1 name w50" v-html="\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\' + userHairReference.studio_name + \'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\' + userHairReference.barber_name"></td>\n                    <td style="font-size:10px;" class="line1 w50 txtr grey">\n                        {{userHairReference.create_time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    </td>\n                </tr>\n            </table>\n            <ul class="block">\n                <img v-for="i in userHairReference.img" class="w100" style="width: 25%;" :src="userHairReference.img[$index]" @click="editImg(userHairReference.id, userHairReference.img[$index], userHairReference.img)"/>\n            </ul>\n            <table class="w100">\n                <tr>\n                    <td class="line1 w50 txtr">\n                        &nbsp;&nbsp;\n                        <b class="red" style="font-family: \u9ED1\u4F53;" @click="confirmCancelUserHairReference(userHairReference.id)">\n                            &nbsp;&nbsp;\u53D6\u6D88\u5F53\u524D\u53C2\u8003\u53D1\u578B>\n                        </b>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n    <div class="store {{titleBar[1].status?\'\':\'disn\'}}">\n        <div class="info_box" v-for="userHairHistory in userHairHistoryList">\n            <table class="w100">\n                <tr>\n                    <td class="line1 name w50" v-html="\'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\' + userHairHistory.studio_name + \'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\' + userHairHistory.barber_name"></td>\n                    <td style="font-size:10px;" class="line1 w50 txtr grey">\n                        {{userHairHistory.create_time}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    </td>\n                </tr>\n            </table>\n            <ul class="block">\n                <img v-for="i in userHairHistory.img" class="w100" style="width: 25%;" :src="userHairHistory.img[$index]" @click="look(userHairHistory.img[$index], userHairHistory.img)"/>\n            </ul>\n            <table class="w100">\n                <tr>\n                    <td class="line1 w50 txtr">\n                        &nbsp;&nbsp;\n                        <b class="red" style="font-family: \u9ED1\u4F53;" v-if="userHairHistory.hair_id == null" @click="setUserHairReference(userHairHistory.oid, userHairHistory.img)">\n                            &nbsp;&nbsp;\u8BBE\u7F6E\u6210\u53C2\u8003\u53D1\u578B>\n                        </b>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n<div class="endtouch w100 h100 pos_a t0"></div>'));
    }

    _createClass(myhair, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.launcher = launcher.vue;
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {
                    titleBar: [{ text: '我的参考发型', status: false }, { text: '发型历史', status: true }],
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
                    init: function init() {
                        var _this3 = this;

                        setTimeout(function () {
                            _this3.launcher.showAndHideCover($(_this3.$el));
                        }, 100);
                        Util.ajax(null, db.data.api + 'getUserHairHistoryList.php', function (data) {
                            _this3.renderUserHairHistoryList(data);
                            Util.ajax(null, db.data.api + 'getUserHairReferenceList.php', function (data) {
                                _this3.renderUserHairReferenceList(data);
                            });
                        });
                    },
                    renderUserHairHistoryList: function renderUserHairHistoryList(data) {
                        if (data.e !== 0) {} else {
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
                    renderUserHairReferenceList: function renderUserHairReferenceList(data) {
                        if (data.e !== 0) {} else {
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
                    titleItemClick: function titleItemClick(index) {
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
                    look: function look(currentImg, imgStr) {
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
                    setUserHairReference: function setUserHairReference(oid, img) {
                        var _this4 = this;

                        this.oid = oid;
                        this.img = img;
                        var dataStr = '{\n                            "oid":"' + this.oid + '",\n                            "img":"' + this.img + '"\n                        }';
                        Util.ajax(dataStr, db.data.api + 'setUserHairReference.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast('设置失败');
                            } else {
                                Message.toast('设置成功');
                                _this4.init();
                            }
                        });
                    },
                    confirmCancelUserHairReference: function confirmCancelUserHairReference(hid) {
                        var _tempThis = this;
                        MessageBarber.confirm('确定要取消当前参考发型吗?', function () {
                            _tempThis.cancelUserHairReference(hid);
                        });
                    },
                    cancelUserHairReference: function cancelUserHairReference(hid) {
                        var _this5 = this;

                        this.hid = hid;
                        var dataStr = '{\n                            "hid":"' + this.hid + '"\n                        }';
                        Util.ajax(dataStr, db.data.api + 'cancelUserHairReference.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast('取消设置失败');
                            } else {
                                Message.toast('取消设置成功');
                                _this5.init();
                            }
                        });
                    },
                    editImg: function editImg(hid, oldImg, oldImgStr) {
                        var _this = this;
                        _this.img_str = oldImg;
                        var html = '<div id="all_notice" style="transition:opacity .4s ease;overflow: hidden;background-color:#fff;z-index:9999;border-radius:10px;position:absolute;width:70%;left:0;right:0;top:0;bottom:0;margin:auto;opacity:0;height:186px;padding: 0;">' + '<div class="w100 pos_r" style="margin: 0;padding: 0;height: 120px">' + '<h1 class="txtc clbl" style="font-size: 131%;font-weight: 600;padding: 2% 0;"></h1>' + '<img id="all_notice_img" class="txtc clbl c w100" style="width: 40%;" src="' + oldImg + '">' + '</div>' + '<div class="w50 fl txtc" id="all_notice_button1" style="height:45px;padding: 4%;font-size: 18px;color: #ccf;border-top: solid 1px #ddd;border-right: solid 1px #ddd;"><a>删除</a></div>' + '<div class="w50 fl txtc" id="all_notice_button2" style="height:45px;border-top: solid 1px #ddd;padding: 4%;font-size: 18px;color: #ccf;"><a>修改</a></div>' + '</div>' + '<div id="all_notice_cover" style="left:0;top:0;z-index:999;position:absolute;height: 100%;width: 100%;background-color: #000000;opacity: 0.6;"></div>';
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
                    deleteUserHairReference: function deleteUserHairReference(hairId, oldImg, oldImgStr, commitType) {
                        var _this6 = this;

                        var dataStr = '{\n                        "hid" : ' + Math.floor(hairId) + ',\n                        "pic" : "' + oldImg + '",\n                        "commitType" : "' + commitType + '",\n                        "oldImgStr" : "' + oldImgStr + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'editUserHairReference.php', function (data) {
                            if (data.e !== 0) {
                                alert(JSON.stringify(data));
                                Message.toast('图片删除出现问题');
                            } else {
                                Message.toast("删除成功啦｡◕‿◕｡");
                                _this6.init();
                            }
                        });
                    },
                    editUserHairReference: function editUserHairReference(hairId, oldImg, pic, commitType) {
                        var _this7 = this;

                        var dataStr = '{\n                        "hid" : ' + Math.floor(hairId) + ',\n                        "pic" : "' + pic + '",\n                        "commitType" : "' + commitType + '",\n                        "oldImgStr" : "' + oldImg + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'editUserHairReference.php', function (data) {
                            if (data.e !== 0) {
                                alert(JSON.stringify(data));
                                Message.toast('图片修改出现问题');
                            } else {
                                Message.toast("修改成功啦｡◕‿◕｡");
                                _this7.init();
                            }
                        });
                    },
                    renderImgArrByServerId: function renderImgArrByServerId(hairId) {
                        var _this8 = this;

                        var dataStr = '{\n                        "server_id" : "' + this.imgServerArr.join("|") + '",\n                        "hid" : ' + Math.floor(hairId) + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getImgArrByServerIdForUserHair.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('图片上传出现问题');
                            } else {
                                if (!json.data.img_str) {
                                    Message.toast('图片上传出现问题');
                                } else {
                                    _this8.img_str = json.data.img_str;
                                    document.getElementById("all_notice_img").src = _this8.img_str;
                                }
                            }
                        });
                    },
                    upload: function upload(event, index, hairId) {
                        var _this = this;
                        if (this.isuploading === true) {
                            MessageBarber.alert('有图片正在上传，请耐心等待');
                            return;
                        }
                        if (index === null) {
                            wx.checkJsApi({
                                jsApiList: ['getLocation'],
                                success: function success(res) {
                                    wx.chooseImage({
                                        count: 1, // 默认9
                                        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                        sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                                        success: function success(res) {
                                            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                                            _this.isuploading = true;
                                            _this.nowImgIndex = 0;
                                            var t = setTimeout(function () {
                                                _this.isuploading = false;
                                            }, 3000);
                                            _this.imgServerArr = [];
                                            var getServerId = function getServerId() {
                                                var id = localIds[_this.nowImgIndex];
                                                if (id) {
                                                    wx.uploadImage({
                                                        localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
                                                        isShowProgressTips: 1, // 默认为1，显示进度提示
                                                        success: function success(res) {
                                                            _this.imgServerArr[_this.nowImgIndex] = res.serverId;
                                                            _this.nowImgIndex++;
                                                            getServerId();
                                                        }
                                                    });
                                                } else {
                                                    clearTimeout(t);
                                                    _this.isuploading = false;
                                                    _this.renderImgArrByServerId(hairId);
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
                            if ($(obj).attr('src')) nowImgNums++;
                        });

                        if (index !== null) this.nowImgIndex = index;else this.nowImgIndex = nowImgNums;

                        if (this.nowImgIndex > 1) {
                            MessageBarber.alert('最多上传1张图片');
                            return;
                        }
                        MessageBarber.upload("选择一张满意的图片把~~~");
                    }
                }
            });
        }
    }]);

    return myhair;
}(Page);
///////
