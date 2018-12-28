'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var punch_list = function (_Page) {
    _inherits(punch_list, _Page);

    function punch_list(hash) {
        _classCallCheck(this, punch_list);

        var css = void 0;
        css = '\n<style>\n    #punch_list_vue .bottomNav,#punch_list_vue .topNav{width:100%;background:#fff}\n    #punch_list_vue .topNav{height:7vh;justify-content:space-between;align-items:center}\n    #punch_list_vue .topNav>div{width:33.333333%}\n    #punch_list_vue .topNav>div:nth-of-type(2){justify-content:center;align-items:center}\n    #punch_list_vue .topNav>div:nth-of-type(3){justify-content:flex-end;align-items:center}\n    #punch_list_vue .topNav .leftImg{width:4vh;height:3vh;margin-left:3vh}\n    #punch_list_vue .bottomNav{height:10vh;justify-content:space-around}\n    #punch_list_vue .bottomNav>div{display:flex;flex-direction:column}\n    #punch_list_vue .bottomNav img{width:5vh;height:5vh}\n    #punch_list_vue .body{width:100vw;height:83vh;background:#f5f5f5;padding:1vh 0 1vh 0}\n    .btr3{border-bottom:solid 3px red}\n    #punch_list_vue div{display:flex}\n    \n    #punch_list_vue .yueta{height:90%; background: #f5f5f5;}\n    /*#index_vue .yueta .person,#punch_list_vue .yueta .person{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}*/\n    #index_vue .yueta .store,#punch_list_vue .yueta .store{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}\n</style>\n';
        var html = [' \n<div class="flex topNav pos_r" style="z-index:9;">\n    <div class="flex">\n        <img class="leftImg" onclick="history.go(-1)" src="./images/index/back.png" />\n    </div>\n    <div class="flex" style="font-size:5vw;font-weight:600">\u4E0A\u4E0B\u73ED\u6253\u5361</div>\n    <div class="flex>\n        <span class="flex flex-center"></span>\n        <img style="width:4vh;height:4vh;margin:0 2vh 0 2vh;" src="./images/index/work_table.png" />\n    </div>\n</div>\n\n<div class="yueta" style="display: block;">\n    <div>\n        <div style="font-family: \u9ED1\u4F53;font-size: 4vw;padding-top: 3%;padding-left: 3%;display:inline;">2018\u5E749\u670830\u65E5 \u661F\u671F\u65E5</div>\n        <div style="font-family: \u9ED1\u4F53;font-size: 4vw;padding-top: 3%;padding-left: 40%;display:inline;">\u4E0B\u73ED\u4E2D</div>\n    </div>\n    \n    <div>\n        <div style="font-family: \u9ED1\u4F53;font-size: 4vw;padding-top: 3%;padding-left: 3%;display:inline;">\u4E0A\u73ED\u6253\u5361</div>\n        <div style="font-family: \u9ED1\u4F53;font-size: 4vw;padding-top: 3%;padding-left: 38%;display:inline;">2018-10-12 11:00:00</div>\n    </div>\n    <div>\n        <div style="font-family: \u9ED1\u4F53;font-size: 4vw;padding-top: 3%;padding-left: 3%;display:inline;">\u4E0B\u73ED\u6253\u5361</div>\n        <div style="font-family: \u9ED1\u4F53;font-size: 4vw;padding-top: 3%;padding-left: 38%;display:inline;">2018-10-13 00:00:00</div>\n    </div>\n    \n    <div @click="upload()" style="border-radius: 50%; margin-left: 30%;margin-top: 15%;background:red; color:#FFF;width: 40vw;height: 40vw;">\n        <span style="margin-left: 20%;margin-top: 40%;font-size: x-large;font-family: \u9ED1\u4F53;">\u4E0A\u73ED\u6253\u5361</span>\n    </div>\n</div>\n'];
        return _possibleConstructorReturn(this, (punch_list.__proto__ || Object.getPrototypeOf(punch_list)).call(this, hash, html, css));
    }

    _createClass(punch_list, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                    console.log('create index');
                    this.launcher = launcher.vue;
                    Util.forEach(m.pages, function (page) {
                        m.addPage(page);
                    });
                },
                compiled: function compiled() {},

                data: {
                    //上传图片需要用到的变量
                    imgArr: [],
                    img_str: '',
                    imgServerArr: [],
                    nowImgIndex: 0,
                    isuploading: false
                },
                methods: {
                    init: function init() {},
                    renderImgByServerId: function renderImgByServerId() {
                        var _this3 = this;

                        var dataStr = '{\n                        "server_id" : "' + this.imgServerArr.join("|") + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getImgByServerId.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('图片上传出现问题');
                            } else {
                                if (!json.data.img_str) {
                                    Message.toast('图片上传出现问题');
                                } else {
                                    Message.toast('图片上传成功啦');
                                    _this3.img_str = json.data.img_str;
                                    _this3.imgArr = _this3.img_str.split('|');
                                }
                            }
                        });
                    },
                    upload: function upload() {
                        var _this = this;
                        if (this.isuploading === true) {
                            MessageBarber.alert('有图片正在上传，请耐心等待');
                            return;
                        }
                        wx.checkJsApi({
                            jsApiList: ['getLocation'],
                            success: function success(res) {
                                wx.chooseImage({
                                    count: 4, // 默认9
                                    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                    sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
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
    }]);

    return punch_list;
}(Page);
