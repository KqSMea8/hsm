var db = new Vue({
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
            domain:'https://www.jianyuepai.com.cn/hsm/',
            distDir:'../dist/',
            oss:'https://wx-1253594735.file.myqcloud.com/1253480904/',
            osss:'https://wx-1253594735.file.myqcloud.com/',
            api:'https://www.jianyuepai.com.cn/wx_cp/api/barber/',
            ORDER_STATE_WAIT : '0',
            ORDER_STATE_CUTTING : '1',
            ORDER_STATE_SUCCESS : '2',
            ORDER_STATE_CANCEL : '3',
            ORDER_STATE_ASKING : '4',
            ORDER_STATE_UNPAY : '5',
            rank_list:[],
            setOrderId : '0',
            setUserId : '0',
        },
    }
});
