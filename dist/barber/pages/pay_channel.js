'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pay_channel = function (_Page) {
    _inherits(pay_channel, _Page);

    function pay_channel(hash) {
        _classCallCheck(this, pay_channel);

        var css = '\n<style>\n    #myhair_vue table {\n        width: 96%;\n        position: absolute;\n        left: 2%;\n        background: #fff;\n        top: 2%\n    }\n\n    #myhair_vue td {\n        background: #fff;\n        text-align: center\n    }\n\n    #myhair_vue div.inbl {\n        width: 90%;\n        margin: 11% 5%\n    }\n\n    .flex-center {\n        justify-content: center;\n        align-items: center;\n    }\n</style>\n';
        var html = ['<table>\n        <tr>\n            <td style="padding-top: 10%;padding-left: 11%;">\n                <div class="inbl">\n                    \u9009\u62E9\u652F\u4ED8\u6E20\u9053:<select v-model="channel_selected" class="form-control" style="width:60vw;margin-left:7vw;margin-top: 10%;">\n                                    <option v-for="option in channel_options" v-bind:value="option.id">\n                                      {{ option.name }}\n                                    </option>\n                                </select>\n                </div>\n            </td>\n        </tr>\n    </tr>\n    <tr>\n        <td style="padding-top: 10%;padding-left: 11%;">\n            <div class="inbl">\n                <div style="color:#fff;height:10vw;background:red;width:60vw;margin-left:7vw;margin-top: 10%;" class="flex-center" @click="setPayChannel()">\u786E\u5B9A</div>\n            </div>\n        </td>\n    </tr>\n</table>\n'];
        return _possibleConstructorReturn(this, (pay_channel.__proto__ || Object.getPrototypeOf(pay_channel)).call(this, hash, html, css));
    }

    _createClass(pay_channel, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                },
                compiled: function compiled() {
                    this.init();
                },

                data: {
                    channel_selected: 0,
                    channel_options: []
                },
                methods: {
                    init: function init() {
                        this.getPayChannelList();
                    },
                    getPayChannelList: function getPayChannelList() {
                        var _this2 = this;

                        Util.ajax(null, db.data.api + 'getPayChannelList.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this2.channel_options = data.data;
                                _this2.channel_selected = 0;
                            }
                        });
                    },
                    setPayChannel: function setPayChannel() {
                        var _this3 = this;

                        if (this.channel_selected == 0) {
                            Message.toast("请选择支付渠道!");
                        } else {
                            MessageBarber.dialogForSystemOutside('提示', '请确定用户在该支付渠道支付完毕!', '关闭', '确定', function () {
                                Message.removeDialog();
                            }, function () {
                                var dataStr = '{\n                                "orderId":' + _this3.db.data.setOrderId + ',\n                                "channelId":' + _this3.channel_selected + '\n                            }';
                                Util.ajax(dataStr, db.data.api + 'setPayChannel.php', function (data) {
                                    if (data.e !== 0) {
                                        Message.toast(data.data.msg);
                                    } else {
                                        Message.toast(data.data.msg);
                                        index.vue.getBarberOrderList();
                                        history.go(-1);
                                    }
                                });
                                Message.removeDialog();
                            });
                        }
                    }
                }
            });
        }
    }]);

    return pay_channel;
}(Page);
