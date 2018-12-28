var db;
var timer = setInterval(function(){
    if(typeof Vue !== 'undefined') {
        clearInterval(timer);
        timer = null;
        db = new Vue({
            el: '#db_vue',
            data: {
                data: {
                    user:{
                        nickname:'',
                        sex:'',
                        city:'',
                        province:'',
                        country:'',
                        img:'',
                        avt:'',
                        phone:'',
                        lon:'',
                        lat:'',
                    },
                    nowStudioId:0, //详情页 中 studio的i  d
                    nowBarberId:0, //详情页 中 barber的id
                    domain:'https://www.jianyuepai.com.cn/',
                    distDir:'../dist/',
                    oss:'https://wx-1253594735.file.myqcloud.com/1253480904/',
                    success_order:{},
                    navi:{  //上一个导航地图 的 起始位置和 重点的 记录
                        lon1:'',
                        lat1:'',
                        lon2:'',
                        lat2:'',
                    },
                    // api:`http://www.jianyuepai.com.cn/api/user/`,
                    api:'https://www.jianyuepai.com.cn/wx_cp/api/admin/',
                    script:'https://www.jianyuepai.com.cn/wx_cp/api/script/',
                    comment_close:false,
                },
            }
        });
    }
},20);
