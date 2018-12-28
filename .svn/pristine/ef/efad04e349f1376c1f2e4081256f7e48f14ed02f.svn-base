'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var turnover_rank = function (_Page) {
    _inherits(turnover_rank, _Page);

    function turnover_rank(hash) {
        _classCallCheck(this, turnover_rank);

        var css = '\n<style>\n    #turnover_rank_vue .topNav{width:100%;background:#fff}\n    #turnover_rank_vue .topNav{height:7vh;justify-content:space-between;align-items:center}\n    #turnover_rank_vue .topNav>div{width:33.333333%}\n    #turnover_rank_vue .topNav>div:nth-of-type(2){justify-content:center;align-items:center}\n    #turnover_rank_vue .topNav>div:nth-of-type(3){justify-content:flex-end;align-items:center}\n    #turnover_rank_vue .topNav .leftImg{width:4vh;height:3vh;margin-left:3vh}\n    \n     #turnover_rank_vue .body{height:93vh;background:#f5f5f5}\n</style>\n';
        var html = ['\n<div class="topNav pos_r">\n    <div>\n        <img class="leftImg" onclick="history.go(-1)" src="./images/index/back.png" />\n    </div>\n    <div style="font-size:4.6vw;font-weight:600">{{title}}</div>\n    <div class="o0">\n        <!--<span class="flex flex-center">{{bottomItem.right_text}}</span>-->\n        <!--<img @click="rightClick($index)" style="width:4vh;height:4vh;margin:0 2vh 0 2vh;" :src="\'./images/index/\'+(bottomItem.right_img)" />-->\n    </div>\n</div>\n', '\n<!--<div id="turnover_rank" style="width: 100vw;height: 50vw;"></div>-->\n<div style="background:#f5f5f5;padding:2vw;" class="flex-column">\n    <div class="flex-center-y" v-for="barber in list" style="border-bottom:solid 1px #f5f5f5;background:#fff;padding: 2%;">\n        <b style="width: 9%;">{{$index+1}}. </b><img style="width:10%;height:10%;margin-left:1%;margin-right:1%;" :src="barber.avt"/> \n        <div style="width:42%;font-size: 150%;">{{barber.name}}</div>\n        <div style="width:29%;flex-direction:row-reverse;font-size:150%;" class="clred">{{barber.money}}</div>\n        <img style="width:8%;height:8vw;" src="./images/turnover_rank/{{barber.isUp?\'up\':\'down\'}}.png"/>\n        <div style="width:8%;flex-direction:row-reverse;font-size:87%;" class="clred">{{barber.levelName}}</div>\n    </div>\n   \n</div>\n'];
        console.log(html);
        return _possibleConstructorReturn(this, (turnover_rank.__proto__ || Object.getPrototypeOf(turnover_rank)).call(this, hash, html, css));
    }

    _createClass(turnover_rank, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {
                    title: '',
                    list: '',
                    user: {
                        avt: '',
                        name: '',
                        phone: ''
                    }
                },
                methods: {
                    init: function init() {
                        this.getBarberInfo();
                    },
                    getData: function getData() {
                        var _this2 = this;

                        Util.ajax(null, db.data.api + 'getPerformanceRank.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('无法开始服务');
                            } else {
                                _this2.title = json.data.title;
                                _this2.list = json.data.list;
                                //this.drawPic(json.data.data);
                            }
                        });
                    },
                    getBarberInfo: function getBarberInfo() {
                        var _this3 = this;

                        Util.ajax(null, db.data.api + 'getBarberInfo.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this3.user.avt = data.data.avt;
                                _this3.user.name = data.data.name;
                                _this3.user.phone = data.data.phone;
                                _this3.getData();
                            }
                        });
                    },
                    getCTSTime: function getCTSTime() {},
                    drawPic: function drawPic(dataObj) {
                        var data = [];

                        Util.inEach(dataObj, function (money, date) {
                            var dataArr = date.split('-');
                            console.log(dataArr);
                            data.push([Date.UTC(Math.floor(dataArr[0]), Math.floor(dataArr[1]) - 1, Math.floor(dataArr[2]), 15, 59, 59), money]);
                        });
                        console.log(data);

                        var chart = {
                            zoomType: 'x'
                        };
                        var title = {
                            //text: 'USD to EUR exchange rate from 2006 through 2008'
                            text: ''
                        };
                        var subtitle = {
                            text: document.ontouchstart === undefined ? 'Click and drag in the plot area to zoom in' : ''
                        };
                        var xAxis = {
                            type: 'datetime',
                            //minRange: 3600000 // 1小时
                            minRange: 86400000 // 1小时
                        };
                        var yAxis = {
                            title: {
                                text: '营业额'
                            }
                        };
                        var legend = {
                            enabled: false
                        };
                        var plotOptions = {
                            area: {
                                fillColor: {
                                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                    stops: [[0, Highcharts.getOptions().colors[0]], [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]]
                                },
                                marker: {
                                    radius: 2
                                },
                                lineWidth: 1,
                                states: {
                                    hover: {
                                        lineWidth: 1
                                    }
                                },
                                threshold: null
                            }
                        };

                        var series = [{
                            type: 'area',
                            name: '营业额',
                            //pointInterval: 600*1000,//10分钟记录一次
                            //pointStart: startTime,
                            data: data
                        }];

                        var json = {};
                        json.chart = chart;
                        json.title = title;
                        json.subtitle = subtitle;
                        json.legend = legend;
                        json.xAxis = xAxis;
                        json.yAxis = yAxis;
                        json.series = series;
                        json.plotOptions = plotOptions;
                        // Highcharts.setOptions({ global: { useUTC: false } });
                        console.log(json);
                        $('#turnover_rank').highcharts(json);
                        $('.highcharts-credits').remove();
                    }
                }
            });
        }
    }]);

    return turnover_rank;
}(Page);
