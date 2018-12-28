'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var comment = function (_Page) {
    _inherits(comment, _Page);

    function comment(hash) {
        _classCallCheck(this, comment);

        return _possibleConstructorReturn(this, (comment.__proto__ || Object.getPrototypeOf(comment)).call(this, hash, '<style>\n    body{\n        background: #f0f0f0;\n    }\n    #comment_vue{background:#f0f0f0;overflow: scroll;-webkit-overflow-scrolling:touch;}\n    #comment_vue .img_box table{height:76%;}\n    #comment_vue h1{color: #aaa;font-size: 117%;font-weight: 600;}\n    #comment_vue h2{color: #aaa;  font-size: 80%;}\n    #comment_vue .start{width: 12%;margin-left: 2%;margin-right: 2%;}\n</style>\n<div class="scroll" style="height: 100%;">\n<table class="w100 h10" style="background: #fff;margin-bottom: 3%;">\n    <tr>\n        <td class="txtc" style="padding: 2% 0;">\n            <h2>\u53D1\u578B\u5E08\u4E5F\u5F88\u8F9B\u82E6\uFF0C\u7ED9\u4ED6\u4E00\u4E2A\u4E2D\u80AF\u7684\u8BC4\u4EF7\u5427</h2>\n            <img class="start" v-for="star in stars" @click="starClick($index)" :src="(star.choose)?(db.data.oss+\'barber/images/start_orange.svg\'):(db.data.oss+\'barber/images/start_gray.svg\')"/>\n            <h1>{{tip}}</h1>\n        </td>\n    </tr>\n</table>\n<div class="w100" style="background: #fff;\n    margin-bottom: 3%;\n    height: 24%;">\n    <p style="padding:3% 8% 0;"><b>\u8BC4\u4EF7</b></p>\n    <textarea v-if="isFirst" style="    height: 66%;\n    width: 84%;\n    margin-left: 8%;\n    border: none;" class="w100" placeholder="\u53D1\u578B\u5E08\u7684\u624B\u827A\u5982\u4F55\uFF0C\u670D\u52A1\u5982\u4F55\uFF0C\u95E8\u5E97\u73AF\u5883\u5982\u4F55\u3002\u5199\u591F9\u5B57\uFF0C\u624D\u662F\u597D\u7AE5\u978B~\u3002\u6CA1\u5199\u591F\u4E5F\u662F\u597D\u7AE5\u978B (\u25CF\u02C7\u2200\u02C7\u25CF)" v-model="content"></textarea>\n    <textarea readonly v-if="!isFirst" style="height: 66%;\n    width: 84%;\n    margin-left: 8%;\n    border: none;" class="w100" placeholder="\u53D1\u578B\u5E08\u7684\u624B\u827A\u5982\u4F55\uFF0C\u670D\u52A1\u5982\u4F55\uFF0C\u95E8\u5E97\u73AF\u5883\u5982\u4F55\u3002\u5199\u591F9\u5B57\uFF0C\u624D\u662F\u597D\u7AE5\u978B~\u3002\u6CA1\u5199\u591F\u4E5F\u662F\u597D\u7AE5\u978B (\u25CF\u02C7\u2200\u02C7\u25CF)" v-model="content"></textarea>\n</div>\n<table class="w100 img_box" style="background: #fff;\n    margin-bottom: 3%;\n    height: auto">\n    <tr>\n        <td id="td" class="txtc" style="padding: 3% 0%;">\n            <img v-for="i in [0,1,2]" style="width:32.5%" class="{{imgArr[$index]?\'\':\'disn\'}}" @touchstart="upload($event,$index);" :src="imgArr[$index]"/>\n            <div @touchstart="upload($event,null);" v-if="isFirst" style="display: inline-block;border: dashed 2px #ddd;margin-top: 4%;margin-left: 4%;border-radius: 14px;width: 80px;">\n                <img style="width: 100%;\n    transform: scale(0.5);" :src="db.data.oss+\'barber/images/add.png\'"/>\n            </div>\n            <table class="w100 cb">\n                <tr>\n                    <td>\n         <span v-if="isFirst" style="color:orangered;padding: 4%;\n    padding-bottom: 1%;">&nbsp;&nbsp;&nbsp;\u62CD\u51E0\u5F20\u7167\u7247\u79C0\u79C0\u5427\uFF01~~~ </span>\n                    </td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n</table>\n<button style="width: 90%;margin-left: 5%;margin-top:1%;margin-bottom: 3%;" class="btn btn-success btn-lg {{isFirst?\'\':\'disn\'}}" @touchstart="comment()">\u63D0\u4EA4</button>\n<button style="width: 90%;margin-left: 5%;margin-top:1%;margin-bottom: 4%;" class="btn btn-danger btn-lg {{isFirst?\'\':\'disn\'}}" @touchstart="late_comment()">\u4E0B\u6B21\u518D\u8BC4\u8BBA</button>\n<button style="width: 90%;margin-left: 5%;margin-top:1%;margin-bottom: 4%;" class="btn btn-success btn-lg {{!isFirst?\'\':\'disn\'}}" @touchstart="goback()">\u8FD4\u56DE</button>\n<iframe class="disn" id="iframe" name="demoIframe"></iframe>\n<form class="disn" target="demoIframe" id="fff" method="post" enctype="multipart/form-data">\n    <input id="btn" type="submit" value="\u63D0\u4EA4">\n</form>\n<div class="endtouch w100 h100 pos_a t0"></div>\n</div>'));
    }

    _createClass(comment, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                data: {
                    stars: [{ choose: true }, { choose: true }, { choose: true }, { choose: true }, { choose: true }],
                    tipText: ['差评', '不咋地', '一般般', '还不错', '很满意'],
                    tip: '',
                    score: 100,
                    content: '',
                    imgArr: [],
                    img_str: '',
                    imgServerArr: [],
                    uploading: false,

                    serverIds: [],
                    imgCount: 0,
                    nowImgIndex: 0,
                    isFirst: true
                    //isCommentting:false    //此处屏蔽的原因是某些用户在极端情况下点击不了提交按钮
                },
                methods: {
                    init: function init() {
                        var _this3 = this;

                        var dataStr = '{\n                        "oid" : ' + Math.floor(db.data.comment_order_id) + '\n                    }';
                        console.log(dataStr);
                        Util.ajax(dataStr, db.data.api + 'getOrderComment.php', function (data) {
                            if (data.e !== 0) {} else {
                                if (data.data.comment) {
                                    _this3.isFirst = false;
                                    _this3.score = data.data.comment.score * 20;
                                    _this3.content = data.data.comment.content;
                                    _this3.imgArr = data.data.comment.img;
                                } else {
                                    _this3.isFirst = true;
                                    _this3.score = 100;
                                    _this3.content = '';
                                    _this3.imgArr = [];
                                    _this3.img_str = '';
                                }
                                _this3.starClick(_this3.score / 20 - 1);
                            }
                        });
                        setTimeout(function () {
                            _this3.launcher.showAndHideCover($(_this3.$el));
                        }, 100);
                    },
                    starClick: function starClick(index) {
                        console.log(index);
                        var i = void 0;
                        for (i = 0; i < 5; i++) {
                            if (i > index) {
                                this.stars[i].choose = false;
                            } else {
                                this.stars[i].choose = true;
                            }
                        }
                        this.score = (index + 1) * 20;
                        this.tip = this.tipText[index];
                    },
                    goback: function goback() {
                        if (db.data.comment_close) {
                            app.browser.die();
                        } else {
                            history.go(-1);
                        }
                    },
                    comment: function comment() {
                        var _this4 = this;

                        /*if(this.isCommentting){    //此处屏蔽的原因是某些用户在极端情况下点击不了提交按钮
                            return;
                        }
                        this.isCommentting = true;
                        let timer = setTimeout(()=>{
                            this.isCommentting = false;
                        },1000);*/

                        this.content = this.content.replace(/^\s+|\s+$/g, "");
                        if (this.content.length < 1) {
                            this.content = '该用户未填写评价';
                        }
                        var dataStr = '{\n                        "oid" : ' + Math.floor(db.data.comment_order_id) + ',\n                        "text" : "' + this.content + '",\n                        "star" : ' + this.score + ',\n                        "pic" : "' + this.img_str + '"\n                    }';
                        console.log(dataStr);
                        Util.ajax(dataStr, db.data.api + 'commitUserComment.php', function (data) {
                            if (data.e == -5) {
                                Message.toast('您已经评论过啦!,,ԾㅂԾ,,');
                            } else if (data.e !== 0) {
                                alert(JSON.stringify(data));
                                Message.toast('图片上传出现问题');
                            } else {
                                _this4.isFirst = false;
                                Message.toast("评论成功啦｡◕‿◕｡");
                                _this4.jump('share');
                            }
                            /*clearTimeout(timer);    //此处屏蔽的原因是某些用户在极端情况下点击不了提交按钮
                            this.isCommentting = false;*/
                        });
                        // MessageBarber.alert(data[Api.MESSAGE]);
                    },
                    renderImgArrByServerId: function renderImgArrByServerId() {
                        var _this5 = this;

                        var dataStr = '{\n                        "server_id" : "' + this.imgServerArr.join("|") + '",\n                        "oid" : ' + Math.floor(db.data.comment_order_id) + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getImgArrByServerId.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('图片上传出现问题');
                            } else {
                                if (!json.data.img_str) {
                                    Message.toast('图片上传出现问题');
                                } else {
                                    _this5.img_str = json.data.img_str;
                                    _this5.imgArr = _this5.img_str.split('|');
                                }
                            }
                        });
                    },
                    upload: function upload(event, index) {
                        var _this = this;
                        if (this.isuploading === true) {
                            MessageBarber.alert('有图片正在上传，请耐心等待');
                            return;
                        }
                        if (index === null) {
                            // alert('check')
                            wx.checkJsApi({
                                jsApiList: ['getLocation'],
                                success: function success(res) {
                                    // alert('success')
                                    wx.chooseImage({
                                        count: 3, // 默认9
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
                                                    _this.renderImgArrByServerId();
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

                        if (!this.isFirst) {
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

                        if (this.nowImgIndex > 2) {
                            MessageBarber.alert('最多上传3张图片');
                            return;
                        }

                        MessageBarber.upload("选择一张满意的图片把~~~");
                    },
                    doneUpload: function doneUpload() {
                        this.isisuploading = false;
                        Message.removeWait();
                    },
                    imgChange: function imgChange(_this) {
                        var _this6 = this;

                        var img = new Image();

                        var file0 = _this.files[0];
                        var dataUrl = window.URL.createObjectURL(file0);
                        console.log(file0);

                        var maxWidth = 500;
                        img.src = dataUrl;

                        Util.ajax(null, db.data.api + 'getObjectStoreKey.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast('图片上传出现问题');
                            } else {
                                _this6.cos = new CosCloud({
                                    appid: _this6.appid, // APPID 必填参数
                                    bucket: _this6.bucket, //bucketName 必填参数
                                    region: _this6.region, //地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
                                    getAppSign: function getAppSign(callback) {
                                        callback(data.data.sign);
                                    },
                                    getAppSignOnce: function getAppSignOnce(callback) {
                                        //单次签名，参考上面的注释即可
                                        callback(data.data.sign);
                                    }
                                });

                                setTimeout(function () {
                                    if (img.width > maxWidth) {
                                        var rate = img.height / img.width;
                                        img.width = maxWidth;
                                        img.height = img.width * rate;
                                    }
                                    alert(img.width);
                                    alert(img.height);
                                    function dataURItoBlob(dataURI) {
                                        // convert base64 to raw binary data held in a string
                                        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
                                        var byteString = atob(dataURI.split(',')[1]);

                                        // separate out the mime component
                                        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                                        // write the bytes of the string to an ArrayBuffer
                                        var ab = new ArrayBuffer(byteString.length);
                                        var ia = new Uint8Array(ab);
                                        for (var i = 0; i < byteString.length; i++) {
                                            ia[i] = byteString.charCodeAt(i);
                                        }
                                        // return new Blob([ia], {type:mimeString});
                                        return new Blob([ab], { type: mimeString });
                                    }

                                    var canvas = document.createElement('canvas');
                                    var ctx = canvas.getContext("2d");
                                    canvas.width = img.width;
                                    canvas.height = img.height;
                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                                    ctx.drawImage(img, 0, 0, img.width, img.height); // 将图像绘制到canvas上
                                    var dataUri = canvas.toDataURL("image/jpeg");
                                    var file = dataURItoBlob(dataUri);

                                    file.name = file0.name;
                                    file.lastModified = file0.lastModified;
                                    file.lastModifiedDate = file0.lastModifiedDate;

                                    if (!file) return;
                                    Message.showWait('上传中');
                                    _this6.isisuploading = true;
                                    _this6.cos.uploadFile(function (data) {
                                        setTimeout(function () {
                                            alert(data.data.access_url);
                                            _this6.imgArr[_this6.nowImgIndex] = data.data.access_url;
                                            _this6.imgArr = JSON.parse(JSON.stringify(_this6.imgArr));
                                            _this6.doneUpload();
                                        }, 500);
                                    }, function (data) {
                                        alert('error');
                                        console.log(data);
                                        _this6.doneUpload();
                                    }, function (proccess) {
                                        console.log(proccess);
                                    }, _this6.bucket, '/comment/' + db.data.comment_order_id + '_' + file.name, file, 0); //insertOnly==0 表示允许覆盖文件 1表示不允许
                                }, 1000);
                            }
                        });
                    },
                    late_comment: function late_comment() {
                        this.jump('share');
                    }
                },
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    this.launcher = launcher.vue;
                },
                compiled: function compiled() {}
            });
        }
    }]);

    return comment;
}(Page);
/////////////////////
