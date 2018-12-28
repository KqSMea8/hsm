'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Page = function () {
    function Page(hash, html, css) {
        _classCallCheck(this, Page);

        this.hash = '#' + hash;
        this.render(html, css);
    }

    _createClass(Page, [{
        key: 'render',
        value: function render() {
            var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var css = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (typeof css !== 'string') css = css.join('');
            if (typeof html !== 'string') html = html.join('');
            $(this.hash + '_vue').append(css).append(html);
            this.vue_();
        }
    }]);

    return Page;
}();
//# sourceMappingURL=Page.js.map