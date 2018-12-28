'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = function (_Page) {
    _inherits(index, _Page);

    function index(hash) {
        _classCallCheck(this, index);

        return _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, hash, '<style>\n    #index_vue .titleBar,#mysubscribe_vue .titleBar{height:10%;background:#fff}\n    #index_vue .titleBar>div,#mysubscribe_vue .titleBar>div{float:left;height:100%;text-align:center;width:30%}\n    #index_vue .titleBar>table,#mysubscribe_vue .titleBar>table{height:100%;width:20%;float:left}\n    #index_vue .titleBar>table td,#mysubscribe_vue .titleBar>table td{text-align:center;font-size:3vw;padding:0 4%}\n    #index_vue .titleBar_title,#mysubscribe_vue .titleBar_title{height:100%;width:100%}\n    #index_vue .titleBar_title span,#mysubscribe_vue .titleBar_title span{font-size:4.5vw;}\n    #index_vue .titleBar .glyphicon-chevron-left{transform:rotate(90deg);transition:all .4s ease}\n    #index_vue .titleBar .rotate{transform:rotate(-90deg)}\n    #index_vue .search{width:36%}\n    #index_vue .yueta{height:80%}\n    #mysubscribe_vue .yueta{height:90%}\n    #index_vue .yueta .person,#mysubscribe_vue .yueta .person{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}\n    #index_vue .yueta .store,#mysubscribe_vue .yueta .store{overflow:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:relative}\n    #index_vue .footBar{width:100%;background:#fff;height:10%}\n    .red{color:red}\n    .grey{color:#777}\n    .border_bottom_red{border-bottom:solid 2px red}\n    #index_vue .info_box,#mysubscribe_vue .info_box{margin:3%;background:#fff}\n    #index_vue .info_box>div,#mysubscribe_vue .info_box>div{background:#fff}\n    #index_vue .info_box .line1,#mysubscribe_vue .info_box .line1{padding:3% 0;font-size:4vw}\n    #index_vue .info_box .name,#mysubscribe_vue .info_box .name{font-weight:900;font-size: 4vw;}\n    #index_vue .info_box .studio,#mysubscribe_vue .info_box .studio{width:19%;color:#aaa}\n    #index_vue .info_box .waitting,#mysubscribe_vue .info_box .waitting{text-align:right}\n    #index_vue .footBar>div{width:50%;float:left;height:100%;text-align:center}\n    #index_vue .footBar>div>div{height:60%}\n    #index_vue .footBar img{height:80%;top:20%;position:relative}\n    #index_vue .info_box ul,#mysubscribe_vue .info_box ul{position:relative;width:100%;background:#fff}\n    #index_vue .info_box li,#mysubscribe_vue .info_box li{float:left}\n    #index_vue .info_box ul.block,#mysubscribe_vue .info_box ul.block{height:auto}\n    #index_vue .info_box ul:nth-of-type(1) li,#mysubscribe_vue .info_box ul:nth-of-type(1) li{width:50%;height:100%}\n    #index_vue .info_box ul:nth-of-type(1) li:nth-of-type(2),#mysubscribe_vue .info_box ul:nth-of-type(1) li:nth-of-type(2){text-align:right}\n    #index_vue .info_box ul:nth-of-type(1) span,#mysubscribe_vue .info_box ul:nth-of-type(1) span{font-size:17px}\n    #index_vue .info_box ul:nth-of-type(1) span.name,#mysubscribe_vue .info_box ul:nth-of-type(1) span.name{font-size:18px;font-weight:900}\n    #index_vue .info_box ul:nth-of-type(3) li,#mysubscribe_vue .info_box ul:nth-of-type(3) li{width:50%;height:100%}\n    #index_vue .info_box ul:nth-of-type(3) li:nth-of-type(2),#mysubscribe_vue .info_box ul:nth-of-type(3) li:nth-of-type(2){text-align:right}\n    #index_vue .info_box ul:nth-of-type(3) img,#index_vue .info_box ul:nth-of-type(4) img,#mysubscribe_vue .info_box ul:nth-of-type(3) img{height:38%;top:28%;position:relative}\n    #index_vue .info_box ul:nth-of-type(3) span,#mysubscribe_vue .info_box ul:nth-of-type(3) span{font-size:16px}\n    #index_vue .info_box ul:nth-of-type(4) li,#mysubscribe_vue .info_box ul:nth-of-type(4) li{width:50%;height:100%}\n    #index_vue .info_box ul:nth-of-type(4) li:nth-of-type(2),#mysubscribe_vue .info_box ul:nth-of-type(4) li:nth-of-type(2){text-align:right}\n    #index_vue .info_box ul:nth-of-type(4) span,#mysubscribe_vue .info_box ul:nth-of-type(4) span{font-size:16px}\n    .pink{color:pink}\n    .borderRed{border:1px solid red}\n    .borderPink{border:1px solid pink}\n    #index_vue .info_box .yijian,#mysubscribe_vue .info_box .yijian{border-radius: 53px;width: 58%;display: inline-block;text-align: center;position: relative;padding: 6% 2%;font-size: 3vw;margin-right: 10%;}\n    #index_vue .info_box .fans,#mysubscribe_vue .info_box .fans{bottom:4%;left:51%;width:46%;position:absolute;font-size: 3vw;}\n    #index_vue .info_box .fans td,#mysubscribe_vue .info_box .fans td{padding:2% 0;text-align:center;line-height:1.1;color:#fff}\n    #index_vue .info_box .fans td:nth-of-type(1),#mysubscribe_vue .info_box .fans td:nth-of-type(1){background:#D60040}\n    #index_vue .info_box .fans td:nth-of-type(2),#mysubscribe_vue .info_box .fans td:nth-of-type(2){background:#e60045}\n    #index_vue .info_box .distance,#mysubscribe_vue .info_box .distance{position:absolute;bottom:2%;font-size:4vw;color:grey;left:4%}\n    #index_vue .wode{width:100%;height:90%}\n    #index_vue .wode .person{width: 100%;height: 45%;position: relative;}\n    #index_vue .wode .person > img{    height: 100%;position: absolute;width: 100%;}\n    #index_vue .wode .person .person_box{height:100%;width:100%;}\n    #index_vue .wode .person .head-bg{    position: relative;\n        width: 52%;\n        left: 48%;}\n    #index_vue .wode .person .head{    position: absolute;\n        width: 20%;\n        left: 30%;\n        transform: translateY(14%);}\n    #index_vue .wode .person .info{width: 50%;left: 50%;height: 55%;position: relative;padding-left: 5%;transform: translateY(-30%);}\n    #index_vue .wode .person h1{margin-top:0;color:#fff}\n    #index_vue .wode .person h6{margin-top:0;color:#fff}\n    #index_vue .wode .person p{color:red}\n    #index_vue .wode ul{margin-top:5%}\n    #index_vue .wode ul li{background:#fff;height:30%;width:33.3333%;float:left;border-bottom:1px solid #ddd;border-right:1px solid #ddd}\n    #index_vue .wode ul div.h60 img{position:relative;height:50%;top:40%}\n    #index_vue .wode h2{font-size:22px;color:white}\n\n    #index_vue .area{position:absolute;width:100%;height:90%;top:20%}\n    #index_vue .area .cover{height:100%;width:100%;background:#000;opacity:.4}\n    #index_vue .area .box{height:auto;width:100%;background:#fff;position:absolute;top:0}\n    #index_vue .area .left{height:auto;width:20%;background:#ddd;float:left}\n    #index_vue .area .right{height:auto;width:80%;background:#ddd}\n    #index_vue .area .left td{height:20px;background:#ddd}\n    #index_vue .area .left td.active{height:20px;background:#fff}\n    #index_vue .area .right td{height:20px;background:#fff}\n    #index_vue .area .right td.active{color:red}\n    #index_vue .area td{text-align:center;font-size:90%;padding:0 10px}\n    #index_vue .area tr{height:50px}\n\n    .bindPhone{position:absolute;width:100%;height:100%;top:0;left:0;z-index:99999;}\n    .bindPhone .cover{height:100%;width:100%;background:#000;opacity:.4}\n    .bindPhone .box{width:94%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;height:236px;background:#fff}\n    .bindPhone input{padding:0;font-size:100%;outline:0;border:0;box-shadow:none;background-color:#f5f5f5}\n    .bindPhone .box .line_1{padding:5px 20px;border-bottom:1px solid #ddd}\n    .bindPhone .box .line_2,.bindPhone .box .line_3, .bindPhone .box .line_4{height:70px;padding:10px}\n    .bindPhone .box .line_2 input,.bindPhone .box .line_3 input{height:50px;width:100%;padding-left:16px}\n    .bindPhone .box .line_3 input{width:58%}\n    .bindPhone .box .line_3{padding-top:0}\n    .bindPhone .box .line_4{padding:0 10px 0 10px}\n    .bindPhone .box .line_4 span{display:block;width:50%;float:left;height:50px;line-height:50px;text-align:center}\n    .bindPhone .box .line_4 span:nth-of-type(1){background:red;color:#fff}\n    .bindPhone .box .line_4 span:nth-of-type(2){background:#f5f5f5}\n    .bindPhone .box .line_3 span{display:block;width:40%;text-align:center;background:#aaa;height:50px;float:right;color:#fff;line-height:50px}\n\n    #detail_barber_vue .tip,#index_vue .tip{position:absolute;width:100%;height:100%;top:0}\n    #detail_barber_vue .tip .cover,#index_vue .tip .cover{height:100%;width:100%;background:#000;opacity:.6}\n    #detail_barber_vue .tip .box,#index_vue .tip .box{border-radius:5px;width:80%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;height:180px;background:#fff}\n    #detail_barber_vue .tip .box .line_1,#index_vue .tip .box .line_1{border-bottom:1px solid #ddd;height:50px;line-height:50px;text-align:center;font-weight:900;font-size:18px}\n    #detail_barber_vue .tip .box .line_2,#index_vue .tip .box .line_2{height:80px;font-size:15px;line-height:80px;padding:0 20px}\n    #detail_barber_vue .tip .box .line_3,#index_vue .tip .box .line_3{height:50px;background:red;color:#fff;font-size:18px;line-height:50px;text-align:center}\n    .intro_h2{margin: 0;font-size: 100%;margin-bottom: 2%;margin-top: 2%;font-weight:600}\n    .intro_p{margin: 0;padding-left: 5%;color: #555;width:100%}\n\n    .textInfo{text-align: center;font-family: \u9ED1\u4F53;font-size: 110%;color: #ffffff;line-height: 200%;}\n</style>\n<div id="head_advertising">\n    <div class="swiper-container">\n        <div class="swiper-wrapper">\n            <!--<div class="swiper-slide">\n                <img style="bottom:10vh"\n                     src="https://wx-1253594735.file.myqcloud.com/barber/images/buy_index_header.gif" width="100%"\n                     @click="commodity_detail()"/>\n            </div>-->\n            <div class="swiper-slide">\n                <img style="bottom:10vh"\n                     src="https://wx-1253594735.file.myqcloud.com/barber/images/share_index_header.png" width="100%"\n                     @click="share()"/>\n            </div>\n        </div>\n        <!-- \u5982\u679C\u9700\u8981\u5206\u9875\u5668 -->\n        <div class="swiper-pagination"></div>\n    </div>\n</div>\n<div class="titleBar {{footBar[0].status?\'\':\'disn\'}}">\n    <table>\n        <tr>\n            <td @click="change(\'showArea\')">\n                {{nowCity}}\n                <span class="glyphicon glyphicon-chevron-left {{showArea?\'rotate\':\'\'}}"></span>\n            </td>\n        </tr>\n    </table>\n    <div v-for="item in titleBar" @click="titleItemClick($index)">\n        <table class="titleBar_title {{item.status?\'red border_bottom_red\':\'grey\'}}">\n            <tr>\n                <td>\n                    {{item.text}}\n                </td>\n            </tr>\n        </table>\n    </div>\n    <table>\n        <tr>\n            <td>\n                <img class="search" :src="(db.data.oss)+\'barber/images/search.png\'">\n            </td>\n        </tr>\n    </table>\n</div>\n<div class="yueta {{footBar[0].status?\'\':\'disn\'}}">\n    <div class="person {{titleBar[0].status?\'\':\'disn\'}}">\n        <div class="info_box" v-for="barber in barberList">\n            <table class="line w100 h10" @click="launcher.detail_barber(barber.id)">\n                <tr>\n                    <td class="line1 name w50">\n                        &nbsp;&nbsp;&nbsp;&nbsp;{{barber.name}}\n                        &nbsp;<span class="grey" style="font-weight: 100;transform: translateY(-3px);">{{barber.stduioName}}</span></td>\n                    <td style="    font-size: 3vw;" class="line1 w50 txtr grey" v-html="barber.waitStr+\'&nbsp;&nbsp;&nbsp;&nbsp;\'"></td>\n                </tr>\n            </table>\n            <ul class="block" @click="launcher.detail_barber(barber.id)">\n                <img class="w100" :src="(barber.img.length>10)?barber.img:db.data.oss+\'barber/images/hello.jpg\'" />\n                <div class="distance">\n                    {{launcher.getDistance(barber.distance)}}\n                </div>\n                <table class="fans">\n                    <tr>\n                        <td>\n                            {{barber.fans}}\n                            <br>\u7C89\u4E1D\u6570\n                        </td>\n                        <td>\n                            {{barber.satisfaction}}%\n                            <br>\u6EE1\u610F\u5EA6\n                        </td>\n                    </tr>\n                </table>\n            </ul>\n            <table class="w100">\n                <tr>\n                    <td class="line1">\n                        &nbsp;&nbsp;\n                        <img class="h50" :src="db.data.oss+\'barber/images/pinglun.png\'">\n                        <span class="grey" v-html="\'&nbsp;&nbsp;\u8BC4\u8BBA\u6570&nbsp;&nbsp;\'+barber.comments">&nbsp;</span>\n                    </td>\n                    <td class="txtr line1" @click="launcher.detail_barber(barber.id)">\n                        <span class="black" v-html="barber.srv+\'&nbsp;&nbsp;\'">&nbsp;</span>\n                        <b class="red">{{barber.price}}\uFFE5&nbsp;</b>\n                        <b style="color:#ddd;text-decoration:line-through;">{{barber.original_price}}\uFFE5</b>&nbsp;&nbsp;&nbsp;\n                    </td>\n                </tr>\n            </table>\n            <table class="w100" style="border-top:1px solid #ddd;">\n                <tr>\n                    <td class="line1 w50">\n                        &nbsp;&nbsp;\n                        <!--<img class="h40" :src="db.data.oss+\'barber/images/hongbao.png\'">-->\n                        <b class="red">\n                        <!--&nbsp;&nbsp;\u9996\u5355 {{studio.firstDiscountTxt}}-->\n                        </b>\n                        <!--{{db.data.strategies[Math.floor(studio.discount_id)].discount}}\u5143-->\n                    </td>\n                    <td class="line1 w50 txtr">\n                        <div class="yijian {{(barber.work_state==1)?\'red borderRed\':\'pink borderPink\'}}" @click="launcher.quhao(barber,barber.service,barber.work_state)">\n                            <span>{{(barber.work_state==1)?\'\u4E00\u952E\u53D6\u53F7\':((barber.work_state==0)?\'\u5DF2\u4E0B\u73ED\':\'\u5403\u996D\u4E2D\')}}</span>\n                        </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n    <div class="store {{titleBar[1].status?\'\':\'disn\'}}">\n        <div class="info_box" v-for="studio in studioList">\n            <table class="w100" @click="launcher.detail_studio(studio.id)">\n                <tr>\n                    <td class="line1 name w50">\n                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{studio.name}}\n                    </td>\n                    <td style="font-size:3vw" class="line1 w50 txtr grey">\n                        {{studio.stateStr}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    </td>\n                </tr>\n            </table>\n            <ul class="block" @click="launcher.detail_studio(studio.id)">\n                <img class="w100" :src="studio.img" />\n                <div class="distance">\n                    {{launcher.getDistance(studio.distance)}}\n                </div>\n                <table class="pos_a fans">\n                    <tr>\n                        <td>\n                            {{studio.fans}}\n                            <br>\u7C89\u4E1D\u6570\n                        </td>\n                        <td>\n                            {{studio.satisfaction}}%\n                            <br>\u6EE1\u610F\u5EA6\n                        </td>\n                    </tr>\n                </table>\n            </ul>\n            <table class="w100">\n                <tr>\n                    <td class="line1 name w50">\n                        &nbsp;&nbsp;\n                        <img class="h40" :src="db.data.oss+\'barber/images/hongbao.png\'">\n                        <b class="red" @click="share()">\n                            <!--&nbsp;&nbsp;\u9996\u5355 {{studio.firstDiscountTxt}}-->\n                            {{studio.titleText}}\n                        </b>\n                    </td>\n                    <td class="line1 w50 txtr">\n                        <span class="black">{{studio.srv}}</span>\n                        <b class="red">{{studio.price}}\uFFE5&nbsp;</b>\n                        <b style="color:#ddd;text-decoration:line-through;">{{studio.original_price}}\uFFE5</b>\n                        &nbsp;&nbsp;&nbsp;\n                    </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n<div class="wode {{footBar[1].status?\'\':\'disn\'}}">\n    <div class="person">\n        <img :src="db.data.osss+\'barber/images/personbg_new.png\'">\n        <table class="person_box">\n            <tr>\n                <td class="w50">\n                    <!--<img class="head-bg" :src="db.data.oss+\'barber/images/head-bg.png\'">-->\n                    <img class="head" style="border-radius: 50%;position: absolute;width: 25%;left: 37%;transform: translateY(-120%);" :src="db.data.user.avt || db.data.oss+\'barber/images/hongbao.png\'">\n                </td>\n                <!--<td class="w50" style="padding: 0 5%;">\n                    <h2 class="pos_r" style="font-size:5vw">{{db.data.user.nickname}}</h2>\n                    <h6 class="pos_r" style="font-size:3vw">{{db.data.user.phone}}</h6>\n                    <p class="pos_r" style="font-size:3vw" @touchstart="change(\'showBindPhoneView\')">{{(db.data.user.phone)?\'\u66F4\u6362..>\':\'\u7ED1\u5B9A\u624B\u673A..>\'}}</p>\n                    <p class="pos_r" style="font-size:3vw" @touchstart="exit()">\u767B\u51FA</p>\n                </td>-->\n                <td class="w50">\n                    <h2 style="position:absolute;font-size:5vw;color: #ffffff;font-family: \u9ED1\u4F53;transform: translateX(-50%);margin-top: 1%;">{{db.data.user.nickname}}</h2>\n                    <br>\n                    <h2 style="position:absolute;font-size:7vw;color: #ffc200;font-family: \u9ED1\u4F53;transform: translateX(-50%);margin-top: 3%;"><span style="font-size: 3vw;">\uFFE5&nbsp;</span>{{db.data.user.amount}}</h2>\n                    <br>\n                    <h7 style="position:absolute;font-size:3vw;color: #d5d5d5;font-family: \u9ED1\u4F53;transform: translateX(-50%);margin-top: 5%;">\u6211\u7684\u4F59\u989D</h7>\n                </td>\n            </tr>\n        </table>\n        <div class="textInfo" style="position:absolute;background-color: #e60045;margin-top: -15%;height: 25.5%;width: 33.3%;border-right: dashed 1px gray;" @click="show_deal_detail(2)">\n            <span>\u7D2F\u8BA1\u8D60\u9001</span>\n            <br>\n            <span style="font-size: 120%;">{{totalGiveAmount}}\u5143</span>\n        </div>\n        <div class="textInfo" style="position:absolute;background-color: #e60045;margin-top: -15%;margin-left:33.3%;height: 25.5%;width: 33.3%;border-right: dashed 1px gray;" @click="jump(\'mytickets\')">\n            <span>\u4F18\u60E0\u5377</span>\n            <br>\n            <span style="font-size: 120%;">{{availableTicketCount}}\u5F20</span>\n        </div>\n        <div class="textInfo" style="position:absolute;background-color: #e60045;margin-top: -15%;margin-left:66.6%;height: 25.5%;width: 33.3%;" @click="show_deal_detail(0)">\n            <span>\u6D88\u8D39\u660E\u7EC6</span>\n            <br>\n            <span style="font-size: 120%;">{{dealDetailCount}}\u6761</span>\n        </div>\n    </div>\n    <ul class="h50" style="    font-size: 3vw;">\n        <li v-for="option in options" @touchstart="jump(option.hash)">\n            <div class="h60 txtc">\n                <img :src="db.data.oss+\'barber/images/\' + option.img">\n            </div>\n            <div class="h40 txtc">\n                <span class="{{(option.status)?\'\':\'grey\'}}">{{option.text}}</span>\n            </div>\n        </li>\n        <div class="bc"></div>\n    </ul>\n</div>\n<div class="footBar" style="font-size:3vw;">\n    <div v-for="item in footBar" @touchstart="footItemClick($index)">\n        <div>\n            <img :src="getFooterImg(item)">\n        </div>\n        <span class="{{item.status?\'cl000\':\'grey\'}}">{{item.text}}</span>\n    </div>\n</div>\n<div class="area {{showArea?\'\':\'disn\'}}">\n    <div class="cover" @click="change(\'showArea\')"></div>\n    <div class="box">\n        <table class="left">\n            <tr v-for="cityObj in cityList">\n                <td class="{{(nowCity==$key)?\'active\':\'\'}}" @touchstart="db.data.nowCityIndex=$index">{{$key}}</td>\n            </tr>\n        </table>\n        <table class="right">\n            <tr>\n                <td @touchstart="areaClick($event,-1)" class="{{(nowArea)?\'\':\'active\'}}"><span class="fl">\u5168\u90E8</span><span class="fr">{{getNowCityStudioCount()}}\u5BB6\u5E97</span></td>\n            </tr>\n            <tr v-for="areaObj in cityList[nowCity]">\n                <td class="{{(nowArea==$key)?\'active\':\'\'}}"\n                    @touchstart="areaClick($event,$index,region.parentIndex)"><span class="fl">{{$key}}</span><span class="fr">{{getAreaCount(areaObj)}}\u5BB6\u5E97</span></td>\n            </tr>\n        </table>\n    </div>\n</div>\n\n<div class="bindPhone {{showBindPhoneView? \'\':\'disn\'}}">\n    <div class="cover" @touchstart="change(\'showBindPhoneView\')"></div>\n    <div class="box">\n        <div class="line_1">\n            {{(!!db.data.user.phone===false)?\'\u7ED1\u5B9A\u624B\u673A\u53F7\':\'\u66F4\u6362\u624B\u673A\u53F7\'}}\n        </div>\n        <div class="line_2">\n            <input placeholder="\u8F93\u5165\u624B\u673A\u53F7" v-model="phone">\n        </div>\n        <div class="line_3">\n            <input placeholder="\u8F93\u5165\u9A8C\u8BC1\u7801" v-model="phoneCheck">\n            <span @touchstart="sendPhoneCheck()">{{checkText}}</span>\n        </div>\n        <div class="line_4">\n            <span @click="bindPhone()">\u786E\u5B9A</span>\n            <span @click="change(\'showBindPhoneView\')">\u53D6\u6D88</span>\n        </div>\n    </div>\n</div>\n\n'));
    }

    _createClass(index, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    var _this3 = this;

                    this.db = db;
                    this.launcher = launcher.vue;
                    var lon = localStorage.getItem('lon') || 113.85785;
                    var lat = localStorage.getItem('lat') || 22.570235;
                    db.data.user.lon = lon;
                    db.data.user.lat = lat;
                    Util.ajax(this.getStudioListDataStr(), db.data.api + 'getStudioList.php', function (data) {
                        _this3.renderStudioList(data);
                        _this3.cityList = JSON.parse(JSON.stringify(_this3.cityList));
                        Util.ajax(null, db.data.api + 'getUserInfo.php', function (data) {
                            launcher.vue.renderUserInfo(data);
                        });
                        var i = void 0;
                        for (i = 0; i < m.pages.length; i++) {
                            m.addPage(m.pages[i]);
                        }
                    });
                    var flag = false;
                    var timer = setInterval(function () {
                        if (typeof wx.checkJsApi === 'function') {
                            wx.checkJsApi({
                                jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                                success: function success(res) {
                                    if (res.checkResult.getLocation) {
                                        if (!flag) {
                                            clearInterval(timer);
                                            flag = true;
                                            launcher.vue.location(function () {
                                                Util.ajax(_this3.getStudioListDataStr(), db.data.api + 'getStudioList.php', function (data) {
                                                    _this3.renderStudioList(data);
                                                    _this3.cityList = JSON.parse(JSON.stringify(_this3.cityList));
                                                    Util.ajax(null, db.data.api + 'getUserInfo.php', function (data) {
                                                        launcher.vue.renderUserInfo(data);
                                                    });
                                                    var i = void 0;
                                                    for (i = 0; i < m.pages.length; i++) {
                                                        m.addPage(m.pages[i]);
                                                    }
                                                });
                                            });
                                        }
                                    }
                                }
                            });
                        }
                    }, 500);
                    // $('.titleBar')[0].addEventListener('touchmove', function (ev) {
                    //     event.preventDefault();
                    // });
                    // $('.footBar')[0].addEventListener('touchmove', function (ev) {
                    //     event.preventDefault();
                    // });
                },
                compiled: function compiled() {},

                data: {
                    titleBar: [{ text: '口碑发型师', status: false }, { text: '专注剪发店', status: true }],
                    footBar: [{ text: '约Ta', img: 'yueta.png', click_img: 'yueta_click.png', status: true }, { text: '我De', img: 'wode.png', click_img: 'wode_click.png', status: false }],
                    options: [{ hash: 'orderlist', img: 'i-order.png', text: '我的订单', status: true }, { hash: 'myhair', img: 'i-faxing.png', text: '我的参考发型', status: true }, { hash: 'mysubscribe', img: 'i-focus.png', text: '我的关注', status: true },
                    //{hash:'mytickets',img:'i-juan.png',text:'我的优惠券',status:true},
                    { hash: '', img: 'i-msg-gray.png', text: '我的消息', status: false }, { hash: '', img: 'i-other-gray.png', text: '我的其他设置', status: false }],
                    showArea: false,
                    showBindPhoneView: false,
                    canSendPhoneCheck: true,
                    checkText: '获取短信验证码',
                    phone: '',
                    phoneCheck: '',
                    timer12: null,

                    studioList: null,
                    studioCountsPerRequest: 10,
                    barberCountsPerRequest: 20,
                    studioIndex: 0,
                    barberIndex: 0,
                    barberList: null,
                    cityList: {},
                    nowCity: null,
                    nowArea: null,
                    showCityIndex: 0,
                    nowRegionIndex: -1,

                    availableTicketCount: 0,
                    dealDetailCount: 0,
                    totalGiveAmount: 0
                },
                methods: {
                    getFooterImg: function getFooterImg(item) {
                        return db.data.oss + 'barber/images/' + (item.status ? item.click_img : item.img);
                    },
                    getAreaCount: function getAreaCount(obj) {
                        var i = 0;
                        for (var key in obj) {
                            i++;
                        }
                        return i;
                    },
                    getNowCityStudioCount: function getNowCityStudioCount() {
                        var i = 0;
                        for (var key in this.cityList[this.nowCity]) {
                            i++;
                        }
                        return i;
                    },
                    init: function init() {
                        //此处于2018年1月3日做了特殊判断 如果为管理员用户的话则删除头部的广告信息
                        if (db.data.user.phone == '18684508888') {
                            if (document.getElementById("head_advertising")) {
                                document.getElementById("head_advertising").parentNode.removeChild(document.getElementById("head_advertising"));
                            }
                        } else {}
                        var mySwiper = new Swiper('.swiper-container', {
                            autoplay: {
                                delay: 3000,
                                disableOnInteraction: false
                            },
                            speed: 1000,
                            pagination: {
                                el: '.swiper-pagination',
                                type: 'bullets'
                            }
                        });
                        this.getAvailableTicketCount();
                        this.getDealDetailList();
                    },
                    getDealDetailList: function getDealDetailList() {
                        var _this4 = this;

                        Util.ajax('{}', db.data.api + 'getDealDetailList.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this4.dealDetailCount = data.data.dealDetailCount;
                                _this4.totalGiveAmount = data.data.totalGiveAmount;
                            }
                        });
                    },
                    getAvailableTicketCount: function getAvailableTicketCount() {
                        var _this5 = this;

                        Util.ajax('{}', db.data.api + 'getUserTicketList.php', function (data) {
                            if (data.e !== 0) {} else {
                                var i = 0;
                                for (var key in data.data) {
                                    if (data.data.hasOwnProperty(key)) {
                                        if (key == '可使用') {
                                            _this5.availableTicketCount = data.data[key].length;
                                        }
                                        i++;
                                    }
                                }
                            }
                        });
                    },
                    showTicketView: function showTicketView(strategy_index, studio_index) {
                        var _this = this;
                        var dataStr, limit;
                        db.data.ticket = db.data.strategies[Math.floor(strategy_index)];
                        limit = db.data.ticket.use_count;
                        dataStr = '{' + '"' + Api.ID + '":"' + db.data.ticket.id + '"' + '}';
                        Util.ajax(dataStr, db.data.api + '?r=user/get_ticket_record', function (data) {
                            if (data[Api.CODE] === 0) {
                                if (limit == 0) {
                                    if (data[Api.MESSAGE] == 0) db.data.ticket.used = 0;else db.data.ticket.used = 1;
                                } else {
                                    if (data[Api.MESSAGE] == 0) {
                                        db.data.ticket.used = 0;
                                    } else if (data[Api.MESSAGE] == 1) {
                                        db.data.ticket.used = 1;
                                    } else {
                                        Message.toast('亲，等下次优惠活动吧');
                                        return false;
                                    }
                                }
                                _this.jump('ticket');
                            } else {
                                Message.toast(data[Api.MESSAGE]);
                            }
                        });
                        db.data.ticket.studio_index = studio_index;
                        db.data.ticket = JSON.parse(JSON.stringify(db.data.ticket));
                    },
                    areaClick: function areaClick(event, index, parentIndex) {
                        var areaObj = $(this.$el).find('.area');
                        areaObj.find('table.right td').removeClass('active');
                        var td = $(event.target);
                        td.addClass('active');

                        console.log('areaClick areaClick areaClick');

                        if (!!parentIndex === false) {
                            db.data.showCityIndex = db.data.nowCityIndex;
                        } else {
                            db.data.showCityIndex = parentIndex;
                        }
                        var area;
                        for (var i = 0; i < db.data.cityList.length; i++) {
                            if (db.data.nowCityIndex == i) {
                                if (index < 0) {
                                    area = db.data.cityList[i].name + ",";
                                    db.data.nowRegionIndex = -1;
                                } else {
                                    area = db.data.cityList[i].name + "," + td.find('.fl').text();
                                    db.data.nowRegionIndex = index;
                                }
                                break;
                            }
                        }
                        for (var studio_index = 0; studio_index < db.data.studioList.length; studio_index++) {
                            if (db.data.studioList[studio_index].area.indexOf(area) == 0) {
                                db.data.studioList[studio_index].show = true;
                            } else {
                                db.data.studioList[studio_index].show = false;
                            }
                        }
                        db.data.studioList = JSON.parse(JSON.stringify(db.data.studioList));
                    },
                    titleItemClick: function titleItemClick(index) {
                        var _this6 = this;

                        var i = void 0;
                        if (!this.titleBar[index].status) {
                            var length = this.titleBar.length;
                            for (i = 0; i < length; i++) {
                                if (index !== i) this.titleBar[i].status = false;
                            }this.titleBar[index].status = true;
                        }
                        if (index === 0) {
                            Util.ajax(this.getBarberListDataStr(), db.data.api + 'getBarberList.php', function (data) {
                                _this6.renderBarberList(data);
                            });
                        } else {
                            Util.ajax(this.getStudioListDataStr(), db.data.api + 'getStudioList.php', function (data) {
                                _this6.renderStudioList(data);
                            });
                        }
                    },
                    footItemClick: function footItemClick(index) {
                        var _this7 = this;

                        if (!this.footBar[index].status) {
                            var length = this.footBar.length;
                            for (var i = 0; i < length; i++) {
                                if (index != i) {
                                    this.footBar[i].status = false;
                                }
                            }
                            this.footBar[index].status = true;
                        }
                        if (index === 0) {
                            if (this.titleBar[0].status) {
                                Util.ajax(this.getBarberListDataStr(), db.data.api + 'getBarberList.php', function (data) {
                                    _this7.renderBarberList(data);
                                });
                            } else {
                                Util.ajax(this.getStudioListDataStr(), db.data.api + 'getStudioList.php', function (data) {
                                    _this7.renderStudioList(data);
                                });
                            }
                        } else {
                            Util.ajax(null, db.data.api + 'getUserInfo.php', function (data) {
                                launcher.vue.renderUserInfo(data);
                            });
                            this.getDealDetailList();
                            this.getAvailableTicketCount();
                        }
                    },
                    sendPhoneCheck: function sendPhoneCheck() {
                        var dataStr = '{\n                        "phone":"' + this.phone + '"\n                    }';
                        var _this = this;
                        Util.ajax(dataStr, db.data.api + 'getPhoneVerificationCode.php', function (data) {
                            if (data.e !== 0) {
                                launcher.vue.handlerError(data.e);
                            } else {
                                _this.checkText = '60秒';
                                if (_this.timer12 !== null) {
                                    clearInterval(_this.timer12);
                                    _this.timer12 = null;
                                }
                                _this.timer12 = setInterval(function () {
                                    var num = Math.floor(_this.checkText.substr(0, _this.checkText.length - 1)) - 1;
                                    if (num < 0) {
                                        clearInterval(_this.timer12);
                                        _this.timer12 = null;
                                        _this.checkText = '获取短信验证码';
                                    } else {
                                        _this.checkText = num + '秒';
                                    }
                                }, 1000);
                            }
                        });
                    },
                    bindPhone: function bindPhone() {
                        var _this8 = this;

                        if (!Util.isMobileNumber(this.phone)) throw '手机号码格式错误';
                        Message.toast('手机号码格式错误', 3);
                        if (!!this.phoneCheck === false) throw '验证码格式错误';
                        Message.toast('验证码格式错误', 3);
                        var dataStr = '{\n                        "phone":"' + this.phone + '",\n                        "code":"' + this.phoneCheck + '"\n                    }';
                        var _this = this;
                        Util.ajax(dataStr, db.data.api + 'verifyPhoneCode.php', function (data) {
                            if (data.e !== 0) {
                                launcher.vue.handlerError(data.e);
                            } else {
                                _this8.checkText = '获取短信验证码';
                                db.data.user.phone = _this.phone;
                                _this.phone = '';
                                _this.phoneCheck = '';
                                _this.showBindPhoneView = false;
                                Message.toast('绑定成功', 3);
                            }
                        });
                    },
                    exit: function exit() {
                        Util.ajax(this.getBarberListDataStr(), db.data.api + 'unlogin.php', function (data) {
                            wx.closeWindow();
                        });
                    },
                    getStudioListDataStr: function getStudioListDataStr() {
                        return '{\n                        "lat":"' + db.data.user.lat + '",\n                        "lon":"' + db.data.user.lon + '",\n                        "start":0,\n                        "count":' + (this.studioList ? this.studioList.length : this.studioCountsPerRequest) + ',\n                    }';
                    },
                    getBarberListDataStr: function getBarberListDataStr() {
                        return '{\n                        "lat":"' + db.data.user.lat + '",\n                        "lon":"' + db.data.user.lon + '",\n                        "start":0,\n                        "count":' + (this.barberList ? this.barberList.length : this.barberCountsPerRequest) + ',\n                    }';
                    },
                    renderBarberList: function renderBarberList(data) {
                        if (data.e !== 0) {
                            Message.toast("无法获取理发师信息");
                        } else {
                            var barberList = [],
                                obj = data.data;
                            for (var key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                    if (parseInt(key) < 100) {
                                        for (var k in obj[key].srv) {
                                            obj[key].srvId = obj[key].srv[k];
                                            obj[key].srv = k;
                                            break;
                                        }
                                        barberList.push(obj[key]);
                                    }
                                }
                            }

                            this.barberIndex = obj.nextStart;

                            this.initDataCityList(obj.Catalog);

                            if (this.barberList === null) {
                                this.barberList = JSON.parse(JSON.stringify(barberList));
                            } else {
                                this.barberList = barberList;
                            }
                        }
                    },
                    initDataCityList: function initDataCityList(data) {
                        for (var city in data) {
                            if (!!this.nowCity === false) {
                                this.nowCity = city;
                            }
                            if (data.hasOwnProperty(city)) {
                                if (!this.cityList.hasOwnProperty(city)) {
                                    this.cityList[city] = {};
                                }
                                for (var area in data[city]) {
                                    if (data[city].hasOwnProperty(area)) {
                                        if (!!this.cityList[city][area] === false) {
                                            this.cityList[city][area] = {};
                                        }

                                        for (var i = 0; i < data[city][area].length; i++) {
                                            this.cityList[city][area][data[city][area][i].id] = data[city][area][i].name;
                                        }
                                    }
                                }
                            }
                        }
                    },
                    renderStudioList: function renderStudioList(data) {
                        console.log(data);
                        if (data.e !== 0) {
                            Message.toast("无法获取位置");
                        } else {
                            var studioList = [],
                                cityList = [],
                                areaList = [],
                                obj = data.data;
                            for (var key in obj) {
                                if (obj.hasOwnProperty(key)) {
                                    if (parseInt(key) < 100) {
                                        for (var k in obj[key].srv) {
                                            obj[key].srv = k;
                                            break;
                                        }
                                        studioList.push(obj[key]);
                                    }
                                }
                            }

                            this.studioIndex = obj.nextStart;

                            this.initDataCityList(obj.Catalog);

                            if (this.studioList === null) {
                                this.studioList = JSON.parse(JSON.stringify(studioList));
                            } else {
                                this.studioList = studioList;
                            }
                        }
                    },
                    commodity_detail: function commodity_detail() {
                        this.jump("commodity_detail");
                    },
                    share: function share() {
                        this.jump("share");
                    },
                    show_deal_detail: function show_deal_detail(deal_type) {
                        if (deal_type == 0) {
                            this.db.deal_type = 0;
                            this.jump("deal_list");
                        } else if (deal_type == 2) {
                            this.db.deal_type = 2;
                            this.jump("deal_list");
                        }
                    }
                }
            });
        }
    }]);

    return index;
}(Page);
////////
