class WechatBrowser{
    die(){
        wx.closeWindow();
    }
    getUserPosition(func){
        wx.getLocation({
            success: function (res) {
                var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                // var speed = res.speed; // 速度，以米/每秒计
                // var accuracy = res.accuracy; // 位置精度
                func([longitude, latitude]);
            },
            cancel: function (res) {
                Message.getInstance().toast('用户拒绝授权获取地理位置');
            }
        });
    }
}