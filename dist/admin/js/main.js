'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);

        this.init();
    }

    _createClass(Main, [{
        key: 'init',
        value: function init() {
            head.js([db.data.distDir + 'static/js/VueP.js' + time, db.data.distDir + 'admin/pages/Page.js' + time, db.data.distDir + 'admin/pages/index.js' + time], function () {
                Util.hasLoadJsCallBack(['Page', 'index'], function () {
                    index = new index('index');
                    setTimeout(function () {
                        index.vue.init();
                    }, 100);
                });
            });
        }
    }]);

    return Main;
}();
//# sourceMappingURL=main.js.map