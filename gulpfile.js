"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var watch = require("gulp-watch");
var minifyCSS = require("gulp-minify-css");
// import htmlmin = require("gulp-htmlmin");
var Util_1 = require("./static/pack/src/lib/Util");
var pack_conf_1 = require("./pack.conf");
var ChildProcess_1 = require("./static/pack/src/lib/ChildProcess");
var StartServer_1 = require("./static/pack/src/StartServer");
var gulp = require("gulp");
var GulpUtil_1 = require("./static/pack/src/GulpUtil");
var socket = null;
var client = null;
Util_1.default.killProcessByPort('127.0.0.1', pack_conf_1.default.ws_port, function () {
    new ChildProcess_1.default("python ./static/pack/handle_file_content/src/index.py " + pack_conf_1.default.ws_port + " ./" + pack_conf_1.default.dist + "/" + pack_conf_1.default.http_root + " " + pack_conf_1.default.http_port).spawn(function (data) {
        console.log("stdout: " + data);
        if (socket === null && (data + '').substr(0, 'WebSocket'.length) === 'WebSocket') {
            setTimeout(function () {
                client = require("redis").createClient(6379, "127.0.0.1");
                var on = function (tag, func) {
                    client.on(tag, func);
                };
                on("ready", function () { client.subscribe("chat"); });
                on("error", function (error) { console.log("Redis Error " + error); });
                on("subscribe", function (channel, count) { console.log("client subscribed to " + channel + "," + count + "total subscriptions"); });
                on("message", function (channel, message) {
                    console.log("请build ：" + message);
                    var exp = message.split('.').pop();
                    if (typeof exp_func[exp] === 'function') {
                        exp_func[exp](message);
                    }
                });
                on("unsubscribe", function (channel, count) { console.log("client unsubscribed from" + channel + ", " + count + " total subscriptions"); });
                socket = new StartServer_1.default('127.0.0.1', pack_conf_1.default.ws_port);
            }, 500);
        }
    });
});
var send = function (str) {
    socket.send(str);
};
var exp_func = {
    'php': GulpUtil_1.default.dec(function (old_file_path, data) {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', function () {
            send(JSON.stringify(__assign({ type: 'php' }, data)));
        });
    }),
    'js': GulpUtil_1.default.dec(function (old_file_path, data) {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', function () {

            send(JSON.stringify(__assign({ type: 'js' }, data)));
        });
    }),
    'css': GulpUtil_1.default.dec(function (old_file_path, data) {
        socket && gulp.src(old_file_path).pipe(minifyCSS()).pipe(gulp.dest(data.file_dir)).on('end', function () {
            send(JSON.stringify(__assign({ type: 'css' }, data)));
        });
    }),
    'html': GulpUtil_1.default.dec(function (old_file_path, data) {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', function () {
            send(JSON.stringify(__assign({ type: 'html' }, data)));
        });
    }),
    'svg': GulpUtil_1.default.dec(function (old_file_path, data) {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', function () {
            send(JSON.stringify(__assign({ type: 'svg' }, data)));
        });
    }),
    'png': GulpUtil_1.default.dec(function (old_file_path, data) {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', function () {
            send(JSON.stringify(__assign({ type: 'png' }, data)));
        });
    }),
    'jpg': GulpUtil_1.default.dec(function (old_file_path, data) {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', function () {
            send(JSON.stringify(__assign({ type: 'jpg' }, data)));
        });
    })
};
gulp.task('default', Util_1.default.object_key_arr(exp_func));
Util_1.default.inEach(exp_func, function (func, key) {
    gulp.task(key, function () { return watch(pack_conf_1.default.watch[key], func); });
});
gulp.task('build', function () {
    var timer = setInterval(function () {
        if (socket) {
            clearInterval(timer);
            setTimeout(function () {
                send(JSON.stringify({
                    type: 'build',
                    root: __dirname + '\\',
                    src: pack_conf_1.default.watch.build,
                    dist: pack_conf_1.default.dist
                }));
            }, 100);
        }
    }, 100);
});
//# sourceMappingURL=gulpfile.js.map