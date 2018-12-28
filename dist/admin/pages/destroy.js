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

var destroy = function (_Page) {
    _inherits(destroy, _Page);

    function destroy(hash) {
        _classCallCheck(this, destroy);

        var css = '\n            ';
        var html = ["\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>\u5355\u53F7</th>\n      <th>\u53D1\u578B\u5E08</th>\n      <th>\u7533\u8BF7\u65F6\u95F4</th>\n      <th>\u72B6\u6001</th>\n      <th>\u64CD\u4F5C</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr v-for=\"obj in destroyList\">\n      <td>{{obj.name}}</td>\n      <td>{{obj.barber_name}}</td>\n      <td>{{obj.destroy_apply_time}}</td>\n      <td>{{obj.destroy_state==1?'\u5F85\u9500\u5355':'\u5DF2\u9500\u5355'}}</td>\n      <td><button v-if=\"obj.destroy_state==1\" class=\"btn btn-success\" @click=\"fill_selected_order_id(obj.id)\" data-toggle=\"modal\" data-target=\"#myModal\">\u786E\u5B9A</button></td>\n    </tr>\n  </tbody>\n</table>\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t\u786E\u8BA4\u8981\u9500\u5355\u5417?\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\u5173\u95ED\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" @click=\"destroy()\">\n\t\t\t\t\t\u786E\u8BA4\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n            "];
        return _possibleConstructorReturn(this, (destroy.__proto__ || Object.getPrototypeOf(destroy)).call(this, hash, html, css));
    }

    _createClass(destroy, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {
                    destroyList: [],
                    selected_order_id: 0
                },
                methods: {
                    init: function init() {
                        this.getDestroyList();
                    },
                    getDestroyList: function getDestroyList() {
                        var _this2 = this;

                        Util.ajax(null, db.data.api + 'getOrderDestroyList.php', function (data) {
                            if (data.e !== 0) {} else {
                                _this2.destroyList = data.data.destroyList;
                            }
                        });
                    },
                    fill_selected_order_id: function fill_selected_order_id(id) {
                        this.selected_order_id = id;
                    },
                    destroy: function destroy() {
                        var _this3 = this;

                        var dataStr = '{\n                            "oid" : ' + this.selected_order_id + '\n                        }';
                        Util.ajax(dataStr, db.data.api + 'changeOrderDestroyState.php', function (data) {
                            if (data.e !== 0) {
                                Message.toast(data.data.msg, 3);
                            } else {
                                Message.toast(data.data.msg, 3);
                                _this3.getDestroyList();
                            }
                        });
                        this.selected_order_id = 0;
                    }
                }
            });
        }
    }]);

    return destroy;
}(Page);
