const db = new Vue({
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
                amount: '',
            },
            nowStudioId:0, //详情页 中 studio的i  d
            nowBarberId:0, //详情页 中 barber的id
            domain:'https://www.jianyuepai.com.cn/',
            distDir:'../dist/',
            oss:'https://wx-1253594735.file.myqcloud.com/1253480904/',
            osss:'https://wx-1253594735.file.myqcloud.com/',
            success_order:{},
            navi:{  //上一个导航地图 的 起始位置和 重点的 记录
                lon1:'',
                lat1:'',
                lon2:'',
                lat2:'',
            },
            // api:`http://www.jianyuepai.com.cn/api/user/`,
            api:Config.user_api,
            comment_close:false,
            jsapi_order_id: 0,
            buy_id: 0,
            commodity_id : 0,
            deal_type : 0,
        },
    }
});
