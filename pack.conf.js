"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PackConf = /** @class */ (function () {
    function PackConf() {
    }
    PackConf.root = 'hsm';
    PackConf.dist = 'dist';
    PackConf.ws_port = 9002;
    PackConf.http_port = 8000;
    PackConf.http_root = 'src';
    //upload
    PackConf.upload_host = '118.89.56.147';
    PackConf.upload_port = 22;
    PackConf.upload_user = 'root';
    PackConf.upload_pwd = 'Roger123';
    PackConf.upload_root = '/var/www/wx/hsm';
    PackConf.watch = {
        build: [
            'user', 'barber', 'admin', 'static'
        ],
        php: [
            'user/**/*.php', 'barber/**/*.php', 'admin/**/*.php',
        ],
        js: [
            'user/**/*.js', 'barber/**/*.js', 'admin/**/*.js', 'static/js/**/*.js'
        ],
        css: [
            'user/css/*.css', 'barber/css/*.css', 'admin/css/*.css', 'static/css/**/*.css'
        ],
        html: [
            'user/pages/**/*.html', 'barber/pages/**/*.html', 'admin/pages/**/*.html'
        ],
        svg: [
            'user/images/**/*.svg', 'barber/images/**/*.svg', 'admin/images/**/*.svg'
        ],
        png: [
            'user/images/**/*.png', 'barber/images/**/*.png', 'admin/images/**/*.png'
        ],
        jpg: [
            'user/images/**/*.jpg', 'barber/images/**/*.jpg', 'admin/images/**/*.jpg'
        ]
    };
    return PackConf;
}());
exports.default = PackConf;
//# sourceMappingURL=pack.conf.js.map