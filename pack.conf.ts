export default class PackConf {
    static root= 'hsm';
    static dist= 'dist';

    static ws_port= 9002;
    static http_port= 8000;
    static http_root= 'src';

    //upload
    static upload_host= '118.89.56.147';
    static upload_port= 22;
    static upload_user= 'root';
    static upload_pwd= 'Roger123';
    static upload_root= '/var/www/wx/hsm';

    static watch={
        build:[
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
}

