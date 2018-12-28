"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=share
var share = function (_Page) {
    _inherits(share, _Page);

    function share(hash) {
        _classCallCheck(this, share);

        return _possibleConstructorReturn(this, (share.__proto__ || Object.getPrototypeOf(share)).call(this, hash, "<img class=\"ma pos_a t0 l0 r0 w100\" style=\"bottom:10vh\"\n     src=\"https://wx-1253594735.file.myqcloud.com/barber/images/share_background.png\"/>\n<img id=\"buy\" style=\"bottom:10vh;position: absolute;left: 10%;top: 70%;\"\n     src=\"https://wx-1253594735.file.myqcloud.com/barber/images/share_button.png\" width=\"80%\" @click=\"share()\"/>\n<a @click=\"forget()\" style=\"color: #ef1356;font-size: 120%;font-family: \u9ED1\u4F53;position: absolute;left: 38%;top: 80%;\">\u4EE5\u540E\u518D\u8BF4\u5427</a>\n<!---->\n\n"));
    }

    _createClass(share, [{
        key: "vue_",
        value: function vue_() {
            this.vue = new VueP({
                el: this.hash + '_vue',
                created: function created() {
                    this.launcher = launcher.vue;
                    this.db = db;
                },
                compiled: function compiled() {},

                data: {},
                methods: {
                    init: function init() {
                        Message.toast("欢迎参加分享活动!", 1);
                    },
                    share: function share() {
                        Message.toast("请点击右上角分享按钮!", 3);
                    },
                    forget: function forget() {
                        this.jump('index');
                    }
                }
            });
        }
    }]);

    return share;
}(Page);

//
