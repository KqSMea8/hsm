'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var place = function (_Page) {
    _inherits(place, _Page);

    function place(hash) {
        _classCallCheck(this, place);

        return _possibleConstructorReturn(this, (place.__proto__ || Object.getPrototypeOf(place)).call(this, hash, '<style>#place_vue{background:#fff;padding:2% 3%;overflow:scroll;-webkit-overflow-scrolling:touch}#place_vue h1{margin-top:0;font-size:167%;font-weight:900;color:#000}#place_vue p{color:#000}#place_vue h2{font-size:120%;font-weight:900;text-align:center}#place_vue img{width:100%;margin-bottom:2%}</style><h1>\u86C7\u53E3\u5E97</h1><p>\u8054\u7CFB\u65B9\u5F0F\uFF1A\u5468\u5E97\u957F 15820428079</p><p>\u95E8\u5E97\u5730\u5740\uFF1A\u5357\u5C71\u533A\u86C7\u53E3\u5357\u6C34\u6B65\u884C\u8857209\u53F7\u5546\u94FA</p><img :src="db.data.oss+\'barber/images/place0.jpg\'"><h2>\u95E8\u5E97\u5730\u56FE\u5F15\u5BFC\uFF0C\u56FE\u89E3\uFF1A</h2><img :data-src="db.data.oss+\'barber/images/place1.jpg\'"> <img :data-src="db.data.oss+\'barber/images/place2.jpg\'"> <img :data-src="db.data.oss+\'barber/images/place3.jpg\'"> <img :data-src="db.data.oss+\'barber/images/place4.jpg\'"> <img :data-src="db.data.oss+\'barber/images/place5.jpg\'"> <img :data-src="db.data.oss+\'barber/images/place6.jpg\'"> <img :data-src="db.data.oss+\'barber/images/place7.jpg\'">'));
    }

    _createClass(place, [{
        key: 'vue_',
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.init();
                },
                compiled: function compiled() {},

                data: {},
                methods: {
                    initData: function initData() {
                        var _this = this;
                        this.db = db;
                        setTimeout(function () {
                            launcher.vue.smooth(function () {
                                $(_this.$el).find('img').each(function (index, obj) {
                                    obj = $(obj);
                                    var data_src = obj.attr('data-src');
                                    if (data_src) {
                                        obj.attr('src', data_src);
                                    }
                                });
                            });
                        }, 100);
                    },
                    init: function init() {
                        this.initData();
                    }
                }
            });
        }
    }]);

    return place;
}(Page);
