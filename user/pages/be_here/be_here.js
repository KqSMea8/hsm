class be_here extends Page {
    constructor(hash){
        console.log('be_here be_here be_here be_here');
        super(hash, require('tpl.html'));
    }

    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
            },
            compiled () {},
            data: {},
            methods: {
                initData(){
                    launcher.vue.smooth(function(){
                        var lon1,lat1,lon2,lat2;
                        lon1 = db.data.user.lon;
                        lat1 = db.data.user.lat;

                        lon2 = db.data.lon;
                        lat2 = db.data.lat;
                        if(lon1==db.data.navi.lon1&&lat1==db.data.navi.lat1&&lon2==db.data.navi.lon2&&lat2==db.data.navi.lat2){
                        }else{
                            wx.openLocation({
                                latitude: lat2, // 纬度，浮点数，范围为90 ~ -90
                                longitude: lon2, // 经度，浮点数，范围为180 ~ -180。
                                name: '1', // 位置名
                                address: '22', // 地址详情说明
                                scale: 5, // 地图缩放级别,整形值,范围从1~28。默认为最大
                                infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
                            });
                            // $('#if_be_here').attr('src',`https://m.amap.com/navi/?start=${lon1},${lat1}&dest=${lon2},${lat2}&destName=&key=e26b8cda40107bdb109530c28990582b`);
                            // db.data.navi.lon1 = lon1;
                            // db.data.navi.lat1 = lat1;
                            // db.data.navi.lon2 = lon2;
                            // db.data.navi.lat2 = lat2;
                        }
                    });
                },
                init(){
                    this.initData();
                }
            }
        });
    }
}