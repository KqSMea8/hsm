'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var be_here = function (_Page) {
    _inherits(be_here, _Page);

    function be_here(hash) {
        _classCallCheck(this, be_here);

        console.log('be_here be_here be_here be_here');
        return _possibleConstructorReturn(this, (be_here.__proto__ || Object.getPrototypeOf(be_here)).call(this, hash, '<style></style><iframe id="if_be_here" src="" class="w100 h100" style="border:none"></iframe>'));
    }

    _createClass(be_here, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {},

                data: {},
                methods: {
                    initData: function initData() {
                        launcher.vue.smooth(function () {
                            var lon1, lat1, lon2, lat2;
                            lon1 = db.data.user.lon;
                            lat1 = db.data.user.lat;

                            lon2 = db.data.lon;
                            lat2 = db.data.lat;
                            if (lon1 == db.data.navi.lon1 && lat1 == db.data.navi.lat1 && lon2 == db.data.navi.lon2 && lat2 == db.data.navi.lat2) {} else {
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
                    init: function init() {
                        this.initData();
                    }
                }
            });
        }
    }]);

    return be_here;
}(Page);
