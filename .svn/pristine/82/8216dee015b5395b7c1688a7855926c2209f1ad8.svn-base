'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WechatBrowser = function () {
    function WechatBrowser() {
        _classCallCheck(this, WechatBrowser);
    }

    _createClass(WechatBrowser, [{
        key: 'die',
        value: function die() {
            wx.closeWindow();
        }
    }, {
        key: 'getUserPosition',
        value: function getUserPosition(func) {
            wx.getLocation({
                success: function success(res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    // var speed = res.speed; // 速度，以米/每秒计
                    // var accuracy = res.accuracy; // 位置精度
                    func([longitude, latitude]);
                },
                cancel: function cancel(res) {
                    Message.getInstance().toast('用户拒绝授权获取地理位置');
                }
            });
        }
    }]);

    return WechatBrowser;
}();
