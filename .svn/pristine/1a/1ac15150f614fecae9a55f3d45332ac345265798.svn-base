class female_guest extends Page {
    constructor(hash) {
        let css =
            `
<style>
    #female_guest_vue .topNav{width:100%;background:#fff}
    #female_guest_vue .topNav{height:7vh;justify-content:space-between;align-items:center}
    #female_guest_vue .topNav>div{width:33.333333%}
    #female_guest_vue .topNav>div:nth-of-type(2){justify-content:center;align-items:center}
    #female_guest_vue .topNav>div:nth-of-type(3){justify-content:flex-end;align-items:center}
    #female_guest_vue .topNav .leftImg{width:4vh;height:3vh;margin-left:3vh}
    #female_guest_vue .body{height:93vh;background:#f5f5f5}
</style>
`;
        let html =
            [`
<div class="topNav pos_r">
    <div>
        <img class="leftImg" onclick="history.go(-1)" src="./images/index/back.png" />
    </div>
    <div style="font-size:4.6vw;font-weight:600">{{title}}</div>
    <div class="o0">
    </div>
</div>
`, `
<div style="background:#f5f5f5;padding:2vw;" class="flex-column">
    <div class="flex-center-y" v-for="barber in list" style="border-bottom:solid 1px #f5f5f5;background:#fff;padding: 2%;">
        <b style="width: 9%;">{{$index+1}}. </b><img style="width:10%;height:10%;margin-left:1%;margin-right:1%;" :src="barber.avt"/> 
        <div style="width:42%;font-size: 150%;">{{barber.name}}</div>
        <div style="width:29%;flex-direction:row-reverse;font-size:150%;" class="clred">{{barber.orderMonthFemaleProportions}}</div>
        <!--<img style="width:8%;height:8vw;" src="./images/turnover_rank/{{barber.isUp?'up':'down'}}.png"/>
        <div style="width:8%;flex-direction:row-reverse;font-size:87%;" class="clred">{{barber.levelName}}</div>-->
    </div>
</div>
`];
        console.log(html);
        super(hash, html, css);
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.db = db;
            },
            compiled() {

            },
            data: {
                title: '',
                list: '',
            },
            methods: {
                init() {
                    Util.ajax(null, `${db.data.api}getFemaleGuestRank.php`, (json) => {
                        if (json.e !== 0) {
                            Message.toast('无法开始服务');
                        } else {
                            this.title = json.data.title;
                            this.list = json.data.list;
                        }
                    });
                },
                getCTSTime() {
                },
                drawPic(dataObj) {
                    var data = [];
                    Util.inEach(dataObj, (money, date) => {
                        let dataArr = date.split('-');
                        console.log(dataArr);
                        data.push([Date.UTC(Math.floor(dataArr[0]), Math.floor(dataArr[1]) - 1, Math.floor(dataArr[2]),
                            15, 59, 59), money]);
                    });
                    console.log(data);
                    var chart = {
                        zoomType: 'x'
                    };
                    var title = {
                        text: ''
                    };
                    var subtitle = {
                        text: document.ontouchstart === undefined ?
                            'Click and drag in the plot area to zoom in' :
                            ''
                    };
                    var xAxis = {
                        type: 'datetime',
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
                                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                                ]
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
                    console.log(json);
                    $('#turnover_rank').highcharts(json);
                    $('.highcharts-credits').remove();
                },
            }
        });
    }
}