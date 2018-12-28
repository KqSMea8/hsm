import watch = require("gulp-watch");
import minifyCSS = require("gulp-minify-css");
// import htmlmin = require("gulp-htmlmin");
import Util from "./static/pack/src/lib/Util";
import PackConf from "./pack.conf";
import ChildProcess from "./static/pack/src/lib/ChildProcess";
import StartServer from "./static/pack/src/StartServer";
import * as gulp from "gulp";
import GulpUtil from "./static/pack/src/GulpUtil";


let socket = null;
let client = null;
Util.killProcessByPort('127.0.0.1', PackConf.ws_port, () => {
    new ChildProcess(`python ./static/pack/handle_file_content/src/index.py ${PackConf.ws_port} ./${PackConf.dist}/${PackConf.http_root} ${PackConf.http_port}`).spawn((data) => {
        console.log(`stdout: ${data}`);
        if (socket === null && (data+'').substr(0,'WebSocket'.length)==='WebSocket') {
            setTimeout(() => {
                client = require("redis").createClient(6379, "127.0.0.1");
                let on = function (tag, func){
                      client.on(tag, func);
                };
                on("ready", function () {client.subscribe("chat");});
                on("error", function (error) {console.log("Redis Error " + error);});
                on("subscribe", function (channel, count) {console.log("client subscribed to " + channel + "," + count + "total subscriptions");});
                on("message", function (channel, message) {
                    console.log("请build ：" + message);
                    let exp = message.split('.').pop();
                    if(typeof exp_func[exp] === 'function'){
                        exp_func[exp](message)
                    }
                });
                on("unsubscribe", function (channel, count) {console.log("client unsubscribed from" + channel + ", " + count + " total subscriptions")});
                socket = new StartServer('127.0.0.1', PackConf.ws_port);
            }, 500);
        }
    });
});

let send = function(str){
    console.log("xxxxxxxxxxxxxxxxxxxx1111111111111111111111111111");
    console.log(str);
    socket.send(str);
};

let exp_func = {
    'php': GulpUtil.dec((old_file_path, data) => {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', () => {
            send(JSON.stringify({type: 'php', ...data}));
        });
    }),
    'js': GulpUtil.dec((old_file_path, data) => {
        console.log("mac mac mac");
        console.log(data.file_dir);
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', () => {
            send(JSON.stringify({type: 'js', ...data}));
        });
    }),
    'css': GulpUtil.dec((old_file_path, data) => {
        socket && gulp.src(old_file_path).pipe(minifyCSS()).pipe(gulp.dest(data.file_dir)).on('end', () => {
            send(JSON.stringify({type: 'css', ...data}));
        });
    }),
    'html': GulpUtil.dec((old_file_path, data) => {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', () => {
            send(JSON.stringify({type: 'html', ...data}));
        });
    }),
    'svg': GulpUtil.dec((old_file_path, data) => {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', () => {
            send(JSON.stringify({type: 'svg', ...data}));
        });
    }),
    'png': GulpUtil.dec((old_file_path, data) => {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', () => {
            send(JSON.stringify({type: 'png', ...data}));
        });
    }),
    'jpg': GulpUtil.dec((old_file_path, data) => {
        socket && gulp.src(old_file_path).pipe(gulp.dest(data.file_dir)).on('end', () => {
            send(JSON.stringify({type: 'jpg', ...data}));
        });
    })
};
gulp.task('default', Util.object_key_arr(exp_func));
Util.inEach(exp_func, function(func, key){
    gulp.task(key, () => {return watch(PackConf.watch[key], func);});
});
gulp.task('build', function () {
    let timer = setInterval(function () {
        if (socket) {
            clearInterval(timer);
            setTimeout(function () {
                send(JSON.stringify({
                    type: 'build',
                    root: __dirname + '\\',
                    src: PackConf.watch.build,
                    dist: PackConf.dist
                }));
            }, 100);
        }
    }, 100);
});
