'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index_new = function (_Page) {
    _inherits(index_new, _Page);

    function index_new(hash) {
        _classCallCheck(this, index_new);

        var css = void 0;
        css = '\n<style>\n    #index_new_vue .bottomNav,#index_new_vue .topNav{width:100%;background:#fff}\n    #index_new_vue .topNav{height:7vh;justify-content:space-between;align-items:center}\n    #index_new_vue .topNav>div{width:33.333333%}\n    #index_new_vue .topNav>div:nth-of-type(2){justify-content:center;align-items:center}\n    #index_new_vue .topNav>div:nth-of-type(3){justify-content:flex-end;align-items:center}\n    #index_new_vue .topNav .leftImg{width:4vh;height:3vh;margin-left:3vh}\n    #index_new_vue .bottomNav{height:10vh;justify-content:space-around}\n    #index_new_vue .bottomNav>div{display:flex;flex-direction:column}\n    #index_new_vue .bottomNav img{width:5vh;height:5vh}\n    #index_new_vue .body{width:100vw;height:83vh;background:#f5f5f5;padding:1vh 0 1vh 0}\n    .btr3{border-bottom:solid 3px red}\n    div{display:flex}\n</style>\n';
        var html = [' \n<div class="flex topNav pos_r {{(bottomItem.choose)?\'\':\'disn\'}}" style="z-index:9;" v-for="bottomItem in bottomNav">\n    <div class="flex">\n        <img class="leftImg" onclick="history.go(-1)" src="./images/index/back.png" />\n    </div>\n    <div class="flex" style="font-size:5vw;font-weight:600">{{bottomItem.text}}</div>\n    <div @touchstart="rightClick($index)" class="flex {{(bottomItem.right_text || bottomItem.right_img)?\'\':\'o0\'}}">\n        <span class="flex flex-center">{{bottomItem.right_text}}</span>\n        <img style="width:4vh;height:4vh;margin:0 2vh 0 2vh;" :src="\'./images/index/\'+(bottomItem.right_img)" />\n    </div>\n</div>\n', '\n <div class="{{(bottomNav[0].choose)?\'\':\'disn\'}} body flex-column pos_r">\n    <div class="pos_a h100 w100 t0 {{(workStateView)?\'\':\'disn\'}}" @touchstart="rightClick(0)" style="background:#000;opacity:0.4;height:83vh;"></div>\n    <div class="pos_a t0 w100" style="transform:translateY({{workStateView?\'0vh\':\'-15vh\'}});transition:transform 0.3s ease;">\n        <div class="w100 pos_r flex-around" style="height:15vh;background: #fff;padding: 3vh;">\n            <div @touchstart="navChoose(workStateViewItems,$index,changeWorkState)" v-for="item in workStateViewItems" class="flex-center-y flex-column"><img style="width:10vw" :src="\'./images/index/\'+((item.choose)?item.clickImg:item.unClickImg)" /><span>{{item.text}}</span></div>\n        </div>\n    </div>\n    <div class="w100" style="height:10%;background: #fff;margin-bottom:3%;">\n        <div v-for="item in line_up_nav" @touchstart="navChoose(line_up_nav,$index,updateOrderList)" class="{{(item.choose)?\'red btr3\':\'\'}} w50 flex-center flex">{{item.text}}</div>\n    </div>\n    <div v-for="obj in line_up_nav" class="scroll {{(obj.choose)?\'inbl\':\'disn\'}}" style="height:94%;">\n        <div class="flex-column" v-for="item in obj.list" style="background:#fff;width:96vw;margin:0 2vw 2vw 2vw;">\n            <template v-if="$parent.$index === 0">\n                <div class="flex-between" style="padding:2vh;">\n                    <span>{{item.desc}}</span>\n                    <span>\u5DF2\u526A\u6B21\u6570:{{item.alreadyReduceCount}}</span>\n                    <span>\u4E0A\u6B21\u526A\u53D1\u81F3\u4ECA:{{item.distanceDays}}\u5929</span>\n                    <span @click="userDetail(item.uid)">\u8BE6\u60C5></span>\n                </div>\n                <div>\n                    <div style="font-weight:700;font-size:4vw;"><b>NO:{{item.name}}</b></div>\n                  <div class="flex-column">\n                        <div class="flex-center-y"> \n                            <img :src="item.avt" style="height:12vw;width:12vw;margin: 0 2vw 0 3vw;border-radius: 50%;" />{{item.customer}} \n                            <img v-if="item.isVip === true" src="https://wx-1253594735.file.myqcloud.com/barber/images/order_list_user_vip.png" style="height:4vw;width:4vw;margin: 0 2vw 0 3vw;border-radius: 50%;" /> \n                            <div style="margin-left: 14vw;font-size: 8vw;" v-if=\'item.class != 0\'>{{level[item.class]}}</div>\n                            <button v-if=\'item.class == 0\' class="btn btn-success" style="margin-left:5vw;" @click="set_level(item.id)">\u7528\u6237\u5206\u7C7B</button>\n                        </div>\n                        <div style="padding: 3vw 5vw;"><a style="text-decoration:none;" href="tel:{{item.truePhone}}">{{item.phone}}</a>&nbsp;&nbsp;{{item.time}}</div>\n                    </div>\n                </div>\n                <div id="td" class="flex-around">\n                    <img v-for="i in [0,1,2,3]" style="width: 20%; height: 20%;" class="{{item.orderImg[$index]?\'\':\'disn\'}}" @click="upload($event,$index, item.id);" :src="item.orderImg[$index]"/>\n                    <div @click="upload($event,null, item.id);" style="display: inline-block;border: dashed 2px #ddd;margin-top: 0%;margin-left: 0%;border-radius: 14px;width: 80px;">\n                        <img style="width: 100%;transform: scale(0.5);" :src="db.data.oss+\'barber/images/add.png\'"/>\n                    </div>\n                </div>\n ', '\n                <div v-if="item.state==0" class="flex-around" style="margin: 1vh 0;">\n                    <div @click="skip(item.id,item.name)" style="color:#fff;width:45vw;height:10vw;background:#dfdfdf" class="flex-center">\u8FC7\u53F7</div>\n                    <div @click="ask(item.id,item.name)" style="color:#fff;width:45vw;height:10vw;background:red;" class="flex-center">\u53EB\u53F7</div>\n                </div>\n                <div v-if="item.state==4" class="flex-around" style="margin:1vh 0;">\n                    <div @click="skip(item.id)" style="color:#fff;width:30vw;height:10vw;background:#dfdfdf" class="flex-center">\u8FC7\u53F7</div>\n                    <div @click="ask(item.id,item.name)" style="color:#fff;width:30vw;height:10vw;background:red;" class="flex-center">\u518D\u6B21\u53EB\u53F7</div>\n                    <div @click="start_server(item.id)" style="color:#fff;width:30vw;height:10vw;background:red;" class="flex-center">\u5F00\u59CB\u526A\u53D1</div>\n                </div>\n                <div v-if="item.state==1" class="flex-around" style="margin: 1vh 0;">\n                    <div v-if="item.destroy_state==0" @click="apply_destroy(item.id)" style="color:#fff;width:45vw;height:10vw;background:#dfdfdf;" class="flex-center">\u7533\u8BF7\u9500\u5355</div>\n                    <div @click="notice_pay(item.id, item.truePhone, 0)" style="color:#fff;width:45vw;height:10vw;background:red;" class="flex-center">\u63D0\u9192\u4ED8\u6B3E</div>\n                </div>\n                <div v-if="item.state==5" class="flex-around" style="margin: 1vh 0;">\n                    <div v-if="item.destroy_state==0" @click="apply_destroy(item.id)" style="color:#fff;width:30vw;height:10vw;background:#dfdfdf;" class="flex-center">\u7533\u8BF7\u9500\u5355</div>\n                    <div @click="error(item.id, item.truePhone)" style="color: #f5f5f5;width: 30vw;height:10vw;background: #aaa;" class="flex-center">\u7EBF\u4E0B\u4ED8\u6B3E</div>\n                    <div @click="notice_pay(item.id, item.truePhone, 1)" style="color:#fff;width:31vw;height:10vw;background:red;" class="flex-center">\u518D\u6B21\u63D0\u9192\u4ED8\u6B3E</div>\n                </div>\n            </template>\n            ', '\n            <template v-if="$parent.$index === 1">\n                <div class="flex-between" style="padding:2vh;">\n                    <span>{{item.desc}}</span>\n                    <span>\u5DF2\u526A\u6B21\u6570:{{item.alreadyReduceCount}}</span>\n                    <span>\u4E0A\u6B21\u526A\u53D1\u81F3\u4ECA:{{item.distanceDays}}\u5929</span>\n                    <span @click="userDetail(item.uid)">\u8BE6\u60C5></span>\n                </div>\n                <div>\n                    <div>NO:{{item.name}}</div>\n                   <div class="flex-column">\n                        <div class="flex-center-y"> <img :src="item.avt" style="height: 12vw;width: 12vw;margin: 0 4vw 0 8vw;border-radius: 50%;" />{{item.customer}} \n                        <img v-if="item.isVip === true" src="https://wx-1253594735.file.myqcloud.com/barber/images/order_list_user_vip.png" style="height:4vw;width:4vw;margin: 0 2vw 0 3vw;border-radius: 50%;" />\n                        <div style="margin-left: 14vw;font-size: 8vw;" v-if=\'item.class != 0\'>{{level[item.class]}}</div></div>\n                        <div style="padding: 3vw 9vw;">{{item.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</div>\n                    </div>\n                </div>\n                <div id="td" class="flex-around">\n                    <img v-for="i in [0,1,2,3]" style="width: 20%; height: 20%;" class="{{item.orderImg[$index]?\'\':\'disn\'}}" @click="upload($event,$index, item.id);" :src="item.orderImg[$index]"/>\n                    <div @click="upload($event,null, item.id);" style="display: inline-block;border: dashed 2px #ddd;margin-top: 0%;margin-left: 0%;border-radius: 14px;width: 80px;">\n                        <img style="width: 100%;transform: scale(0.5);" :src="db.data.oss+\'barber/images/add.png\'"/>\n                    </div>\n                </div>\n            </template>\n             <template v-if="$parent.$index === 2">\n                <div class="flex-between" style="padding:2vh;">\n                    <span>{{item.desc}}</span>\n                    <span>\u8BE6\u60C5></span>\n                </div>\n                <div>\n                    <div>NO:{{item.name}}</div>\n                   <div class="flex-column">\n                        <div class="flex-center-y"> <img :src="item.avt" style="height: 12vw;width: 12vw;margin: 0 4vw 0 8vw;border-radius: 50%;" />{{item.customer}} </div>\n                        <div style="padding: 3vw 9vw;">{{item.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</div>\n                    </div>\n                </div>\n            </template>\n            ', '\n        </div>\n    </div>\n     <div class="pos_a h100 w100 t0 {{(workStateView)?\'\':\'disn\'}}" @touchstart="rightClick(0)" style="background:#000;opacity:0.4;height:83vh;"></div>\n    <div class="pos_a t0 w100" style="transform:translateY({{workStateView?\'0vh\':\'-15vh\'}});transition:transform 0.3s ease;">\n        <div class="w100 pos_r flex-around" style="height:15vh;background: #fff;padding: 3vh;">\n            <div @click="navChoose(workStateViewItems,$index,changeWorkState)" v-for="item in workStateViewItems" class="flex-center-y flex-column"><img style="width:10vw" :src="\'./images/index/\'+((item.choose)?item.clickImg:item.unClickImg)" /><span>{{item.text}}</span></div>\n        </div>\n    </div>\n</div>\n', '\n<div class="{{(bottomNav[1].choose)?\'\':\'disn\'}} body flex-column">\n    <div @click="look_rank(analys.page)" v-for="analys in analysis_view" class="flex-column" style="background:#{{($index&1)?\'fff\':\'ddd\'}};margin:0 2vw 2vw 2vw">\n         <div style="padding:2vw 5vw 0;font-size:3.8vw">{{analys.Title}}</div>\n        <div>\n            <div class="vw50 flex-column">\n                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.LeftValue}}</div>\n                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.LeftLabel}}</div>\n            </div>\n            <div class="vw50 flex-column">\n                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.RightValue}}</div>\n                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.RightLabel}}</div>\n            </div>\n        </div>\n        <div class="vw100 flex-between">\n             <div style="margin:2vw 3vw;font-size:3vw;" class="clbl fwei">{{analys.LeftFoot}}</div>\n             <div style="margin:2vw 3vw;font-size:3vw;" class="claaa">{{analys.RightFoot}}></div>\n        </div>\n    </div>\n</div>\n', '\n<div class="{{(bottomNav[2].choose)?\'\':\'disn\'}} body flex-column">\n    <div @click="look_rank(analys.page)" v-for="analys in evaluate_view" class="flex-column" style="background:#{{($index&1)?\'fff\':\'ddd\'}};margin:0 2vw 2vw 2vw">\n         <div style="padding:2vw 5vw 0;font-size:3.8vw">{{analys.Title}}</div>\n        <div>\n            <div class="vw50 flex-column">\n                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.LeftValue}}</div>\n                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.LeftLabel}}</div>\n            </div>\n            <div class="vw50 flex-column">\n                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.RightValue}}</div>\n                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.RightLabel}}</div>\n            </div>\n        </div>\n        <div class="vw100 flex-between">\n             <div style="margin:2vw 3vw;font-size:3vw;" class="clbl fwei">{{analys.LeftFoot}}</div>\n             <div style="margin:2vw 3vw;font-size:3vw;" class="claaa">{{analys.RightFoot}}></div>\n        </div>\n    </div>\n</div>\n', '\n<div class="{{(bottomNav[3].choose)?\'\':\'disn\'}} body flex-column">\n    <div @click="look_rank(analys.page)" v-for="analys in guest_view" class="flex-column" style="background:#{{($index&1)?\'fff\':\'ddd\'}};margin:0 2vw 2vw 2vw">\n         <div style="padding:2vw 5vw 0;font-size:3.8vw">{{analys.Title}}</div>\n        <div>\n            <div class="vw50 flex-column">\n                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.LeftValue}}</div>\n                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.LeftLabel}}</div>\n            </div>\n            <div class="vw50 flex-column">\n                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.RightValue}}</div>\n                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.RightLabel}}</div>\n            </div>\n        </div>\n        <div class="vw100 flex-between">\n             <div style="margin:2vw 3vw;font-size:3vw;" class="clbl fwei">{{analys.LeftFoot}}</div>\n             <div style="margin:2vw 3vw;font-size:3vw;" class="claaa">{{analys.RightFoot}}></div>\n        </div>\n    </div>\n</div>\n', '\n<div class="{{(bottomNav[4].choose)?\'\':\'disn\'}} body flex-column"> \n    <input class="pos_a clwh inputo0" type="text" value="{{user.name}}" style="font-size: 3.9vw;text-align: center;width: 100vw;top: 58vw;" />\n    <img class="pos_a" style="width:16vw;left:42vw;top:33vw;" :src="user.avt" />\n    <span class="pos_a txtc" style="    background: #f5f5f5;border-radius: 10vw;width: 24vw;height: 5vw;left: 38vw;top: 69vw;padding: 0 2vw;color: #999;font-size: 3vw;padding-top: 0.4vw;">\u9AD8\u7EA7\u53D1\u578B\u5E08</span>\n    <img class="100vw" style="height:58vw;" src="./images/index/personbg.jpg" />\n    <div class="flex-around bkwh" style="padding:5vw 0;margin-bottom:2vw">\n        <div v-for="item in me_items" class="flex-column" @click="this.jump(item.hash)">\n            <img style="width:8vw;height:8vw;" :src="item.img">\n            <span>{{item.text}}</span>\n        </div>\n    </div>\n    <div class="flex-column">\n        <div @click="this.jump(item.hash)" class="bkwh" style="border-bottom:solid 1px #f5f5f5;padding:2vw 0;" v-for="item in me_lines">\n            <img style="width:6vw;height:6vw;margin:0 5vw;" :src="item.img">\n            <span>{{item.text}}</span>\n        </div>\n    </div>\n</div>\n', '\n<div class="flex bottomNav flex-center-y">\n    <div v-for="bottomItem in bottomNav" @click="bottomItem.func" @touchstart="navChoose(bottomNav,$index)">\n        <img :src="\'./images/index/\'+((bottomItem.choose)?bottomItem.imgClick:bottomItem.imgUnClick)" />\n        <div>{{bottomItem.text}}</div>\n    </div>\n</div>\n'];
        return _possibleConstructorReturn(this, (index_new.__proto__ || Object.getPrototypeOf(index_new)).call(this, hash, html, css));
    }

    _createClass(index_new, [{
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
                    nowBottomIndex: 0,
                    bottomNav: [{
                        choose: true,
                        text: '排队',
                        right_text: '',
                        right_img: 'work_table.png',
                        imgUnClick: 'line_up.png',
                        imgClick: 'line_up_click.png'
                    }, {
                        choose: false,
                        text: '业绩',
                        right_text: '',
                        right_img: '',
                        imgUnClick: 'analysis.png',
                        imgClick: 'analysis_click.png',
                        func: function func() {
                            window.index_new.vue.getStatistics();
                        }
                    }, {
                        choose: false,
                        text: '评价',
                        right_text: '',
                        right_img: '',
                        imgUnClick: 'share.png',
                        imgClick: 'share_click.png',
                        func: function func() {
                            window.index_new.vue.getEveluate();
                        }
                    }, {
                        choose: false,
                        text: '客流',
                        right_text: '',
                        right_img: '',
                        imgUnClick: 'message.png',
                        imgClick: 'message_click.png',
                        func: function func() {
                            window.index_new.vue.getGuest();
                        }
                    }, {
                        choose: false,
                        text: '我的',
                        right_text: '',
                        right_img: '',
                        imgUnClick: 'me.png',
                        imgClick: 'me_click.png'
                    }],
                    line_up_nav: [],
                    orders: [{ img_arr: [], status: 0, name: 'B001' }, { img_arr: [], status: 0, name: 'B002' }],
                    history_order: [{ img_arr: [], status: 0, name: 'B001' }, { img_arr: [], status: 0, name: 'B002' }],
                    workStateView: false,
                    workStateViewItems: [{ state: 0, choose: true, unClickImg: 'analysis.png', clickImg: 'analysis_click.png', text: '下班中' }, { state: 1, choose: false, unClickImg: 'analysis.png', clickImg: 'analysis_click.png', text: '上班中' }, { state: 2, choose: false, unClickImg: 'analysis.png', clickImg: 'analysis_click.png', text: '吃饭中' }],
                    analysis_view: [],
                    evaluate_view: [],
                    guest_view: [],
                    me_items: [{ img: './images/index/order.png', text: '打卡', hash: "punch_list" }, { img: './images/index/kaoqing.png', text: '考勤', hash: "" }],
                    me_lines: [{ img: './images/index/pjia.png', text: '查询验证码', hash: "query_bind_code" }],
                    user: {
                        avt: '',
                        name: '',
                        phone: ''
                    },
                    isuploading: false,
                    level: {
                        '1': 'A',
                        '2': 'B',
                        '3': 'C',
                        '4': 'D'
                    },

                    //上传图片需要用到的变量
                    imgArr: [],
                    img_str: '',
                    imgServerArr: [],
                    nowImgIndex: 0

                },
                methods: {
                    set_level: function set_level(id) {
                        this.db.data.setOrderId = id;
                        this.jump('userClass');
                    },
                    commitUserHairHistory: function commitUserHairHistory(orderId) {
                        var _this3 = this;

                        var dataStr = '{\n                        "oid" : ' + Math.floor(orderId) + ',\n                        "pic" : "' + this.img_str + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'commitUserHairHistory.php', function (data) {
                            if (data.e !== 0) {
                                alert(JSON.stringify(data));
                                Message.toast('图片上传出现问题');
                            } else {
                                Message.toast("上传成功啦｡◕‿◕｡");
                                _this3.getBarberOrderListReload();
                            }
                        });
                    },
                    renderImgArrByServerId: function renderImgArrByServerId(orderId) {
                        var _this4 = this;

                        var dataStr = '{\n                        "server_id" : "' + this.imgServerArr.join("|") + '",\n                        "oid" : ' + Math.floor(orderId) + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'getImgArrByServerId.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('图片上传出现问题');
                            } else {
                                if (!json.data.img_str) {
                                    Message.toast('图片上传出现问题');
                                } else {
                                    _this4.img_str = json.data.img_str;
                                    _this4.imgArr = _this4.img_str.split('|');
                                    _this4.commitUserHairHistory(orderId);
                                }
                            }
                        });
                    },
                    upload: function upload(event, index, orderId) {
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
                                        count: 4, // 默认9
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
                                                    _this.renderImgArrByServerId(orderId);
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
                        if (this.nowImgIndex > 3) {
                            MessageBarber.alert('最多上传4张图片');
                            return;
                        }
                        MessageBarber.upload("选择一张满意的图片把~~~");
                    },
                    doneUpload: function doneUpload() {
                        this.isuploading = false;
                        Message.removeWait();
                    },
                    imgChange: function imgChange(_this) {
                        var _this5 = this;

                        Util.ajax(null, db.data.api + 'getObjectStoreKey.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast('图片上传出现问题');
                            } else {
                                _this5.cos = new CosCloud({
                                    appid: '1253594735', // APPID 必填参数
                                    bucket: 'wx', //bucketName 必填参数
                                    region: 'gz', //地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
                                    getAppSign: function getAppSign(callback) {
                                        callback(data.data.sign);
                                    },
                                    getAppSignOnce: function getAppSignOnce(callback) {
                                        //单次签名，参考上面的注释即可
                                        callback(data.data.sign);
                                    }
                                });
                                var file = _this.files[0];
                                if (!file) return;
                                Message.showWait('上传中');
                                _this5.isuploading = true;
                                _this5.cos.uploadFile(function (data) {
                                    _this5.line_up_nav[1].list[db.upload_index].img[_this5.nowImgIndex] = data.data.access_url;
                                    _this5.line_up_nav = JSON.parse(JSON.stringify(_this5.line_up_nav));
                                    _this5.doneUpload();
                                    var dataStr = '{\n                                    "uid":' + _this5.line_up_nav[1].list[db.upload_index].uid + ',\n                                    "img":"' + _this5.line_up_nav[1].list[db.upload_index].img.join('|') + '"\n                                }';
                                    Util.ajax(dataStr, db.data.api + 'updateUserImg.php', function (data) {
                                        if (data.e !== 0) {
                                            Message.toast('修改失败');
                                        }
                                    });
                                }, function (data) {
                                    console.log('图片上传错误!');
                                    console.log(data);
                                    _this5.doneUpload();
                                }, function (proccess) {
                                    console.log(proccess);
                                }, _this5.bucket, '/comment/' + 'user' + '_' + _this5.line_up_nav[1].list[db.upload_index].uid + '_' + file.name, file, 0); //insertOnly==0 表示允许覆盖文件 1表示不允许
                            }
                        });
                    },
                    skip: function skip(id) {
                        var _this6 = this;

                        MessageBarber.dialog('提示', '确定要过号吗?', '关闭', '确定', function () {
                            Message.removeDialog();
                        }, function () {
                            var dataStr = '{\n                            "oid":' + id + ',\n                            "state":3\n                        }';
                            Util.ajax(dataStr, db.data.api + 'changeOrderState.php', function (data) {
                                if (data.e !== 0) {
                                    Message.toast('过号失败');
                                } else {
                                    _this6.getBarberOrderListReload();
                                }
                            });
                            Message.removeDialog();
                        });
                    },
                    error: function error(id, phone) {
                        var _this7 = this;

                        if (phone == '18684508883666') {
                            this.db.data.setOrderId = id;
                            this.jump('pay_channel');
                        } else {
                            MessageBarber.dialogForSystemOutside('提示', '确定要线下付款吗?请确认该订单是否在系统外支付完毕!', '关闭', '确定', function () {
                                Message.removeDialog();
                            }, function () {
                                var dataStr = '{\n                            "oid":' + id + ',\n                            "state":6\n                        }';
                                Util.ajax(dataStr, db.data.api + 'changeOrderState.php', function (data) {
                                    if (data.e !== 0) {
                                        Message.toast('线下付款失败!');
                                    } else {
                                        _this7.getBarberOrderListReload();
                                    }
                                });
                                Message.removeDialog();
                            });
                        }
                    },
                    start_server: function start_server(id) {
                        var _this8 = this;

                        var dataStr = '{\n                        "oid":' + id + ',\n                        "state":1\n                    }';
                        Util.ajax(dataStr, db.data.api + 'changeOrderState.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast('无法开始服务');
                            } else {
                                _this8.getBarberOrderListReload();
                            }
                        });
                    },
                    look_rank: function look_rank(key) {
                        var _this9 = this;

                        switch (key) {
                            case 'rank':
                                this.jump('turnover_rank');
                                break;
                            case 'bad_comments':
                                this.jump('bad_comments');
                                break;
                            case 'fixed_guest':
                                this.jump('fixed_guest');
                                break;
                            case 'drain_guest_days':
                                this.jump('drain_guest_days');
                                break;
                            case 'drain_guest_count':
                                this.jump('drain_guest_count');
                                break;
                            case 'female_guest':
                                this.jump('female_guest');
                                break;
                            case 'hide':
                                var rightFoot = this.analysis_view[0]['RightFoot'];
                                if (rightFoot == '点击金额隐藏') {
                                    this.analysis_view[0]['RightFoot'] = '点击****显示';
                                    this.analysis_view[0]['LeftValue'] = '****';
                                    this.analysis_view[0]['RightValue'] = '****';
                                } else if (rightFoot == '点击****显示') {
                                    Util.ajax(null, db.data.api + 'getPerformance.php', function (data) {
                                        if (data.e !== 0) {} else {
                                            _this9.analysis_view = JSON.parse(JSON.stringify(data.data));
                                        }
                                    });
                                }
                                break;
                        }
                        //ajax key
                    },
                    ask: function ask(id, name) {
                        var _this10 = this;

                        MessageBarber.confirm('\u786E\u5B9A\u8981\u5BF9' + name + '\u8FDB\u884C\u53EB\u53F7\u5417', function () {
                            var dataStr = '{\n                        "oid":' + id + ',\n                        "state":4\n                    }';
                            Util.ajax(dataStr, db.data.api + 'changeOrderState.php', function (data) {
                                if (data.e !== 0) {
                                    Message.toast('叫号失败');
                                } else {
                                    _this10.getBarberOrderListReload();
                                }
                            });
                        });
                    },
                    init: function init() {
                        var _this11 = this;

                        Util.ajax(null, db.data.api + 'getBarberInfo.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this11.changeWorkState(data.data.work_state);
                                _this11.user.avt = data.data.avt;
                                _this11.user.name = data.data.name;
                                _this11.user.phone = data.data.phone;
                                console.log(_this11.user);
                            }
                        });
                        this.getBarberOrderList();
                    },
                    getStatistics: function getStatistics() {
                        var _this12 = this;

                        Util.ajax(null, db.data.api + 'getPerformance.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this12.analysis_view = JSON.parse(JSON.stringify(data.data));
                            }
                        });
                    },
                    getEveluate: function getEveluate() {
                        var _this13 = this;

                        Util.ajax(null, db.data.api + 'getEveluate.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this13.evaluate_view = JSON.parse(JSON.stringify(data.data));
                            }
                        });
                    },
                    getGuest: function getGuest() {
                        var _this14 = this;

                        Util.ajax(null, db.data.api + 'getGuest.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this14.guest_view = JSON.parse(JSON.stringify(data.data));
                            }
                        });
                    },
                    updateOrderList: function updateOrderList() {
                        var _this15 = this;

                        Util.ajax(null, db.data.api + 'getBarberOrderList.php', function (data) {
                            if (data.e === 0) {
                                Util.forEach(data.data, function (name, i) {
                                    _this15.line_up_nav[i] = {
                                        choose: _this15.line_up_nav[i].choose,
                                        text: name,
                                        list: data.data[name]
                                    };
                                });
                                //console.log(this.line_up_nav);
                                _this15.line_up_nav = JSON.parse(JSON.stringify(_this15.line_up_nav));
                            }
                        });
                    },
                    rightClick: function rightClick(index) {
                        switch (index) {
                            case 0:
                                this.workStateView = !this.workStateView;
                                break;
                        }
                    },
                    changeWorkState: function changeWorkState(index) {
                        Util.forEach(this.workStateViewItems, function (obj) {
                            obj.choose = false;
                        });
                        this.workStateViewItems[index].choose = true;
                        var state = this.workStateViewItems[index].state;
                        this.bottomNav[0].right_text = this.workStateViewItems[index].text;
                        var dataStr = '{\n                        "state":' + state + '\n                    }';
                        Util.ajax(dataStr, db.data.api + 'setBarberState.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast('失败');
                            } else {}
                        });
                    },
                    notice_pay: function notice_pay(id, phone, repeat) {
                        var _this16 = this;

                        if (repeat == 0) {
                            this.db.data.setOrderId = id;
                            this.jump("online_pay");
                        } else if (repeat == 1) {
                            var dataStr = '{\n                            "oid":' + id + '\n                        }';
                            Util.ajax(dataStr, db.data.api + 'queryOrder.php', function (json) {
                                if (json.e !== 0) {
                                    Message.toast('提示失败1');
                                } else {
                                    if (!json.data.res) {
                                        var _dataStr = '{\n                                    "oid":' + id + ',\n                                    "state":5\n                                }';
                                        Util.ajax(_dataStr, db.data.api + 'changeOrderState.php', function (data) {
                                            if (data.e !== 0) {
                                                Message.toast('提示失败2');
                                            } else {
                                                MessageBarber.alert('提示付款成功');
                                                _this16.getBarberOrderListReload();
                                            }
                                        });
                                    } else {
                                        _this16.getBarberOrderListReload();
                                    }
                                }
                            });
                        }
                    },
                    userDetail: function userDetail(uid) {
                        this.db.data.setUserId = uid;
                        this.jump('user_hair');
                    },
                    navChoose: function navChoose(workStateViewItems, $index, changeWorkState) {
                        launcher.vue.navChoose(workStateViewItems, $index, changeWorkState);
                        //点击未完成订单导航栏时刷新列表
                        if ($index == "0") {
                            this.getBarberOrderList();
                        } else if ($index == "1") {
                            this.getBarberHistoryOrderList();
                        }
                    },
                    getBarberOrderList: function getBarberOrderList() {
                        var _this17 = this;

                        Util.ajax(null, db.data.api + 'getBarberOrderList.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this17.line_up_nav = [];
                                //console.log(data.data);
                                Util.inEach(data.data, function (list, key, i) {
                                    _this17.line_up_nav.push({
                                        choose: !i,
                                        text: key,
                                        list: list
                                    });
                                });
                                //console.log(this.line_up_nav)
                                _this17.line_up_nav = JSON.parse(JSON.stringify(_this17.line_up_nav));
                            }
                        });
                    },
                    getBarberOrderListReload: function getBarberOrderListReload() {
                        var _this18 = this;

                        Util.ajax(null, db.data.api + 'getBarberOrderList.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this18.line_up_nav[0].list = data.data.未完成订单;
                                _this18.line_up_nav[1].list = data.data.历史订单;
                            }
                        });
                    },
                    getBarberHistoryOrderList: function getBarberHistoryOrderList() {
                        var _this19 = this;

                        Util.ajax(null, db.data.api + 'getBarberOrderList.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this19.line_up_nav = [];
                                //console.log(data.data);
                                Util.inEach(data.data, function (list, key, i) {
                                    _this19.line_up_nav.push({
                                        choose: i,
                                        text: key,
                                        list: list
                                    });
                                });
                                //console.log(this.line_up_nav);
                                _this19.line_up_nav = JSON.parse(JSON.stringify(_this19.line_up_nav));
                            }
                        });
                    },
                    apply_destroy: function apply_destroy(id) {
                        var _this20 = this;

                        MessageBarber.dialog('提示', '确定申请销单吗?', '关闭', '确定', function () {
                            Message.removeDialog();
                        }, function () {
                            var dataStr = '{\n                            "oid":' + id + '\n                        }';
                            Util.ajax(dataStr, db.data.api + 'changeOrderDestroyState.php', function (data) {
                                if (data.e !== 0) {
                                    Message.toast(data.data.msg, 3);
                                } else {
                                    Message.toast(data.data.msg, 3);
                                    _this20.getBarberOrderListReload();
                                }
                            });
                            Message.removeDialog();
                        });
                    }
                }
            });
        }
    }]);

    return index_new;
}(Page);
