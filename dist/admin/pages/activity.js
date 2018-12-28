'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var activity = function (_Page) {
    _inherits(activity, _Page);

    function activity(hash) {
        _classCallCheck(this, activity);

        var css = '\n<style>\n    .flex-center {\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n        line-height: 250%;\n    }\n    table.altrowstable {\n        font-family: verdana,arial,sans-serif;\n        font-size:11px;\n        color:#333333;\n        border-width: 1px;\n        border-color: #a9c6c9;\n        border-collapse: collapse;\n    }\n    table.altrowstable th {\n        border-width: 1px;\n        padding: 8px;\n        border-style: solid;\n        border-color: #a9c6c9;\n    }\n    table.altrowstable td {\n        border-width: 1px;\n        padding: 8px;\n        border-style: solid;\n        border-color: #a9c6c9;\n    }\n    .oddrowcolor{\n        background-color:#d4e3e5;\n    }\n    .evenrowcolor{\n        background-color:#c3dde0;\n    }\n</style>\n';
        var html = ["\n            \n                <table>\n                    <tr>\n                        <td>\n                            <img style=\"height: 100vw; width: 100vw;\" src=\"{{url}}\"  alt=\"\u4E8C\u7EF4\u7801\" />\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <select v-model=\"type_selected\" class=\"form-control\" style=\"width:80%;margin-left:10vw;\">\n                                <option v-for=\"option in type_options\" v-bind:value=\"option.value\">\n                                  {{ option.text }}\n                                </option>\n                            </select>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <select v-model=\"quantity_selected\" class=\"form-control\" style=\"width:80%;margin-left:10vw;margin-top: 3vw;\">\n                                <option v-for=\"option in quantity_options\" v-bind:value=\"option.value\">\n                                  {{ option.text }}\n                                </option>\n                            </select>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <div style=\"color:#fff;width:45vw;height:10vw;background:red; margin: 0 auto;margin-top: 3vw;\" class=\"flex-center\" @click=\"createQRcode()\">\u751F\u6210\u4E8C\u7EF4\u7801</div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <div style=\"color:#fff;width:45vw;height:10vw;background:red; margin: 0 auto;margin-top: 3vw;\" class=\"flex-center\" @click=\"resetting()\">\u91CD\u7F6E</div>\n                        </td>\n                    </tr>\n                </table>\n              <table class=\"altrowstable\" style=\"margin-top: 3vw;\">\n                  <tr class=\"evenrowcolor\">\n                    <th>\u7528\u6237\u6635\u79F0</th>\n                    <th>\u7528\u6237\u624B\u673A</th>\n                    <th>\u9886\u53D6\u65F6\u95F4</th>\n                    <th>\u4F18\u60E0\u5377\u7C7B\u578B</th>\n                    <th>\u4F18\u60E0\u5377\u5F20\u6570</th>\n                  </tr>\n                  <tr v-for=\"activity in activityReceiveInfoList\" :class=\"$index%2==0? 'oddrowcolor':'evenrowcolor'\">\n                      <td>{{activity.nickname}}</td>\n                      <td>{{activity.phone}}</td>\n                      <td>{{activity.create_time}}</td>\n                      <td>{{activity.keyword}}</td>\n                      <td>{{activity.confirm_receive_timestamp}}</td>\n                  </tr>\n            </table>\n            <table class=\"altrowstable\" style=\"margin-top: 3vw;\">\n                  <tr class=\"evenrowcolor\">\n                    <th>\u7528\u6237\u6635\u79F0</th>\n                    <th>\u6700\u8FD1\u53D1\u653E\u65F6\u95F4</th>\n                    <th>\u4F18\u60E0\u5377\u7C7B\u578B</th>\n                    <th>\u5F53\u5929\u53D1\u653E\u4F18\u60E0\u5377\u5F20\u6570</th>\n                  </tr>\n                  <tr v-for=\"activity in activitySendDetailList\" :class=\"$index%2==0? 'oddrowcolor':'evenrowcolor'\">\n                      <td>{{activity.nickname}}</td>\n                      <td>{{activity.create_time}}</td>\n                      <td>{{activity.keyword}}</td>\n                      <td>{{activity.countNum}}</td>\n                  </tr>\n            </table>\n"];
        return _possibleConstructorReturn(this, (activity.__proto__ || Object.getPrototypeOf(activity)).call(this, hash, html, css));
    }

    _createClass(activity, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {
                    url: "",
                    type_selected: 0,
                    type_options: [],
                    ticket_dict: {},
                    activityReceiveInfoList: {},
                    activitySendDetailList: {},
                    quantity_selected: 0,
                    quantity_options: [{ text: '请选择优惠卷张数', value: 0 }, { text: '1张', value: 1 }, { text: '2张', value: 2 }, { text: '3张', value: 3 }, { text: '4张', value: 4 }, { text: '5张', value: 5 }]
                },
                methods: {
                    init: function init() {
                        var _this2 = this;

                        this.type_options = [];
                        Util.ajax(null, db.data.api + 'getActivityDiscountStrategy.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('无法读取优惠卷分类信息');
                            } else {
                                _this2.ticket_dict = JSON.parse(JSON.stringify(json.data.discountStrategyList));
                                _this2.type_options.push({
                                    value: 0,
                                    text: "请选择优惠卷类型"
                                });
                                Util.inEach(_this2.ticket_dict, function (obj, key) {
                                    _this2.type_options.push({
                                        value: key,
                                        text: obj
                                    });
                                });
                            }
                        });
                        this.getActivityReceiveInfo();
                        this.getActivitySendDetail();
                    },
                    createQRcode: function createQRcode() {
                        var _this3 = this;

                        var dataStr = '{\n                            "ticketType":' + this.type_selected + ',\n                            "quantity":' + this.quantity_selected + '\n                        }';
                        if (this.type_selected != 0 && this.quantity_selected != 0) {
                            Util.ajax(dataStr, db.data.script + 'createQRcode.php', function (json) {
                                if (json.e !== 0) {
                                    Message.toast('无法生成二维码');
                                } else {
                                    _this3.url = json.data;
                                    Message.toast('已生成二维码');
                                }
                            });
                        } else {
                            this.url = "";
                            Message.toast('请先选择优惠卷类型及张数');
                        }
                    },
                    resetting: function resetting() {
                        this.type_selected = 0;
                        this.quantity_selected = 0;
                        this.url = "null";
                        this.getActivityReceiveInfo();
                        this.getActivitySendDetail();
                        Message.toast('重置成功');
                    },
                    getActivityReceiveInfo: function getActivityReceiveInfo() {
                        var _this4 = this;

                        Util.ajax(null, db.data.api + 'getActivityReceiveInfo.php', function (json) {
                            if (json.e !== 0) {
                                _this4.activityReceiveInfoList = {};
                                Message.toast('无法获得活动领卷详情');
                            } else {
                                _this4.activityReceiveInfoList = json.data.activityReceiveInfoList;
                            }
                        });
                    },
                    getActivitySendDetail: function getActivitySendDetail() {
                        var _this5 = this;

                        Util.ajax(null, db.data.api + 'getActivitySendDetail.php', function (json) {
                            if (json.e !== 0) {
                                _this5.activitySendDetailList = {};
                                Message.toast('无法获得活动发卷详情');
                            } else {
                                _this5.activitySendDetailList = json.data.activitySendDetailList;
                            }
                        });
                    }
                }
            });
        }
    }]);

    return activity;
}(Page);
