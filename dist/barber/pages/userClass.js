'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var userClass = function (_Page) {
    _inherits(userClass, _Page);

    function userClass(hash) {
        _classCallCheck(this, userClass);

        var css = '\n<style>\n    #myhair_vue table {\n        width: 96%;\n        position: absolute;\n        left: 2%;\n        background: #fff;\n        top: 2%\n    }\n\n    #myhair_vue td {\n        background: #fff;\n        text-align: center\n    }\n\n    #myhair_vue div.inbl {\n        width: 90%;\n        margin: 11% 5%\n    }\n\n    .flex-center {\n        justify-content: center;\n        align-items: center;\n    }\n</style>\n';
        var html = ['<table>\n        <tr>\n            <td style="padding-top: 10%;padding-left: 11%;">\n                <div class="inbl">\n                    \u7528\u6237\u5206\u7C7B:<select v-model="level_selected" class="form-control" style="width:60vw;margin-left:7vw;margin-top: 10%;">\n                                    <option v-for="option in level_options" v-bind:value="option.value">\n                                      {{ option.text }}\n                                    </option>\n                                </select>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td style="padding-top: 10%;padding-left: 11%;">\n                <div class="inbl">\n                    \u7528\u6237\u6027\u522B:<select v-model="sex_selected" class="form-control" style="width:60vw;margin-left:7vw;margin-top: 10%;">\n                                    <option v-for="option in sex_options" v-bind:value="option.value">\n                                      {{ option.text }}\n                                    </option>\n                                </select>\n                </div>\n            </td>\n        </tr>\n    </tr>\n    <tr>\n        <td style="padding-top: 10%;padding-left: 11%;">\n            <div class="inbl">\n                <div style="color:#fff;height:10vw;background:red;width:60vw;margin-left:7vw;margin-top: 10%;" class="flex-center" @click="setUserClass()">\u786E\u5B9A</div>\n            </div>\n        </td>\n    </tr>\n</table>\n'];
        return _possibleConstructorReturn(this, (userClass.__proto__ || Object.getPrototypeOf(userClass)).call(this, hash, html, css));
    }

    _createClass(userClass, [{
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
                    level_selected: -1,
                    level_options: [{ text: '请选择', value: -1 }, { text: 'A:最高要求, 认特定发型师', value: 1 }, { text: 'B:较高要求, 对店有选择性', value: 2 }, { text: 'C:无要求, 哪里剪都无所谓', value: 3 }, { text: 'D:哪里便宜到哪里', value: 4 }],
                    sex_selected: -1,
                    sex_options: [{ text: '请选择', value: -1 }, { text: '男', value: 1 }, { text: '女', value: 2 }, { text: '未知', value: 0 }]
                },
                methods: {
                    init: function init() {
                        console.log(this.db.data.setOrderId);
                        this.level_selected = -1;
                        this.sex_selected = -1;
                    },
                    setUserClass: function setUserClass() {
                        var dataStr = '{\n                            "oid":' + this.db.data.setOrderId + ',\n                            "class":' + this.level_selected + ',\n                            "class_sex":' + this.sex_selected + '\n                        }';
                        Util.ajax(dataStr, db.data.api + 'set_level.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast("请选择用户分类或用户性别");
                            } else {
                                Message.toast("评价成功");
                                index.vue.getBarberOrderList();
                                history.go(-1);
                            }
                        });
                    }
                }
            });
        }
    }]);

    return userClass;
}(Page);
//
