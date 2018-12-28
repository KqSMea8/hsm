'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = function (_Page) {
    _inherits(index, _Page);

    function index(hash) {
        _classCallCheck(this, index);

        var css = '\n<style></style>\n';
        var html = '       \n        <table class="table table-striped">\n          <caption style="text-align: center">\u5458\u5DE5\u8868<select class="form-control" v-model="selected" @change="get_barbers_detail()">  \n  <option v-for="option in options" v-bind:value="option.value">  \n    {{ option.text }}  \n  </option>  \n</select> </caption>\n          <thead>\n            <tr>\n              <th style="{{$index > 1?\'width:40%\':\'width:20%\'}}" v-for="name in title_list">{{name}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr v-for="barber in barber_list">\n              <td>\n                <img style="width:100%;;" src="{{barber.avt}}" /></td>\n              <td>{{barber.name}}</td>\n              <td>\n                <select v-model="barber.owner_id" class="form-control" @change="change_sid(barber, $event)" @change="get_barbers_detail()">  \n  <option v-for="option in barber.options" v-bind:value="option.value">  \n    {{ option.text }}  \n  </option>  \n</select>\n                \n                </td>\n              <td>\n                    <button class="btn btn-success" @click="save(barber)">\u8C03\u52A8</button>\n                    <!--<button v-if="barber.is_mobile == 0" class="btn btn-warning" @click="changeMobile(barber, 1)">\u673A\u52A8</button>\n                    <button v-if="barber.is_mobile == 1" class="btn btn-danger" @click="changeMobile(barber, 0)">\u56FA\u5B9A</button>-->\n                    <button v-if="barber.is_mobile == 0" class="btn btn-warning" @click="changeMobile(barber, 1)">\u56FA\u5B9A</button>\n                    <button v-if="barber.is_mobile == 1" class="btn btn-danger" @click="changeMobile(barber, 0)">\u673A\u52A8</button>\n                    \n                </td>\n            </tr>\n          </tbody>\n        </table>\n';
        return _possibleConstructorReturn(this, (index.__proto__ || Object.getPrototypeOf(index)).call(this, hash, html, css));
    }

    _createClass(index, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.get_barbers_detail(21);
                },
                compiled: function compiled() {},

                data: {
                    title_list: ['头像', '名称', '工作地点', '操作'],
                    sid: 21,
                    barber_list: [],
                    studio_dict: {},
                    selected: 21,
                    selected_1: 21,
                    options: [{ text: 'One', value: 'A' }, { text: 'Two', value: 'B' }, { text: 'Three', value: 'C' }]
                },
                methods: {
                    clear: function clear() {
                        alert(this.date);
                    },
                    init: function init() {},
                    change_sid: function change_sid(barber, event) {
                        barber.owner_id = $(event.target).val();
                    },
                    get_barbers_detail: function get_barbers_detail() {
                        var _this2 = this;

                        var dataStr = '{\n                        "sid" : "' + this.selected + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'get_barber_detail.php', function (json) {
                            if (json.e !== 0) {
                                alert(JSON.stringify(json));
                                Message.toast('无法开始服务');
                            } else {
                                //this.selected_1 = this.selected;
                                _this2.studio_dict = JSON.parse(JSON.stringify(json.data.studio_dict));
                                _this2.barber_list = JSON.parse(JSON.stringify(json.data.barber_list));
                                _this2.options = [];
                                Util.inEach(_this2.studio_dict, function (obj, key) {
                                    _this2.options.push({
                                        value: key,
                                        text: obj
                                    });
                                });
                                Util.inEach(_this2.barber_list, function (obj, key) {
                                    obj.options = _this2.options;
                                });
                                console.log(_this2.barber_list);
                            }
                        });
                    },
                    save: function save(barber) {
                        var _this3 = this;

                        var dataStr = '{\n                        "sid" : "' + barber.owner_id + '",\n                        "bid" : "' + barber.id + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'save_barber_detail.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('无法开始服务');
                            } else {
                                Message.toast('调动成功');
                                _this3.get_barbers_detail();
                            }
                        });
                    },
                    changeMobile: function changeMobile(barber, isMobile) {
                        var _this4 = this;

                        var dataStr = '{\n                        "bid" : "' + barber.id + '",\n                        "isMobile" : "' + isMobile + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'changeBarberMobile.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('修改失败');
                            } else {
                                Message.toast(json.data.msg);
                                _this4.get_barbers_detail();
                            }
                        });
                    },
                    get_data: function get_data() {
                        if (!this.date) {
                            var DateObj = new Date();
                            this.date = DateObj.getFullYear() + '-' + (DateObj.getMonth() + 1) + '-' + DateObj.getDate();
                        }
                        var dataStr = '{\n                        "date" : "' + this.date + '"\n                    }';
                        Util.ajax(dataStr, db.data.api + 'get_day_detail.php', function (json) {
                            if (json.e !== 0) {
                                Message.toast('无法开始服务');
                            } else {
                                console.log(json.data);
                                // this.studio_list.push({
                                //
                                // })
                            }
                        });
                    }
                }
            });
        }
    }]);

    return index;
}(Page);
