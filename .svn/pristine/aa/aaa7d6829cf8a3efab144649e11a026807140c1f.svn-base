'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var query_bind_code = function (_Page) {
    _inherits(query_bind_code, _Page);

    function query_bind_code(hash) {
        _classCallCheck(this, query_bind_code);

        var css = '\n<style></style>\n';
        var html = '\n<p>\u7528\u6237\u624B\u673A\u9A8C\u8BC1\u7801\u67E5\u8BE2</p>\n<input style="width: 79vw;" type="text" v-model="phone" />\n<button style="width: 19vw;" class="btn btn-success" @touchstart="search">\u67E5\u8BE2</button>\n';
        return _possibleConstructorReturn(this, (query_bind_code.__proto__ || Object.getPrototypeOf(query_bind_code)).call(this, hash, html, css));
    }

    _createClass(query_bind_code, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {},
                compiled: function compiled() {},

                data: {
                    phone: ''
                },
                methods: {
                    search: function search() {
                        var _this2 = this;

                        var dataStr = '{\n                        "phone":"' + this.phone + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'queryBindCode.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast("请输入手机号");
                            } else {
                                if (data.data.code) {
                                    _this2.phone = data.data.code;
                                } else {
                                    Message.toast("查不到相关信息");
                                }
                            }
                        });
                    },
                    init: function init() {}
                }
            });
        }
    }]);

    return query_bind_code;
}(Page);
//# sourceMappingURL=query_bind_code.js.map