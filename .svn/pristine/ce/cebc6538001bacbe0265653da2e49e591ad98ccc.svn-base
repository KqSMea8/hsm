'use strict';

function Browser() {
    this.UNAVALIABLE = 0;
    this.WIFI = 1;
    this.JIZHAN = 2;
    this.userLocationType = '';

    this.positionSupport = null;

    this.die = function () {
        alert('die');
        try {
            wx.closeWindow();
        } catch (e) {}
        close();
    };

    this.getPlaceByLatLon_CallBack = function (addComp) {
        if (addComp) {
            var placeInfo = addComp.province + " " + addComp.city + " " + addComp.district + " " + addComp.street + " " + addComp.streetNumber;
            this.setUserPosition(placeInfo);
        } else {
            Message.toast('error', 2);
        }
    };
    this.getUserPosition = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPositionSuccess, this.getPositionError, {
                enableHighAccuracy: true, // 指示浏览器获取高精度的位置，默认为false
                timeout: 5000, // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
                maximumAge: 3000 // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
            });
        } else {
            this.positionSupport = false;
        }
    };
    this.getPositionSuccess = function (position) {
        //alert(position);
        var coords = position.coords;
        var lon, lat;
        lon = coords.longitude;
        lat = coords.latitude;
        console.log(lon + "," + lat);
    };
    this.getPositionError = function () {
        this.positionSupport = false;
        Message.toast('定位功能被禁用', 2);
    };
}
//# sourceMappingURL=Browser.js.map