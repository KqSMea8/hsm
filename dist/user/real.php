<?php

//https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=index
$time = $_GET['time'] ?? false;
if (!$time)
    die('no access');
?>

<!DOCTYPE html>
<html lang=en>
<head id="db_vue">
    <meta charset=UTF-8>
    <meta name=viewport content="width=device-width,minimum-scale=1,maximum-scale=1">
    <title>剪约派</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <!--<link rel="stylesheet" href="../static/css/bootstrap.min.css?v=1533006178.0011792">-->
    <link rel="stylesheet" href="../static/css/css.css?v=1533006178.0066352">
    <link rel="stylesheet" href="./css/app.css?v=1533006164.3973699">
    <script src="../../config.js?v=1533006680.2521958"></script>
    <script src="../static/js/vue.min.js?v=1538967333.5403218"></script>
    <script src="../static/js/zepto.min.js?v=1538966153.8792584"></script>
    <link rel="stylesheet" href="../../static/js/swiper-4.1.0/swiper-4.1.0.min.css?v=1533006361.7782078">
    <script src="../../static/js/swiper-4.1.0/swiper-4.1.0.min.js?v=1533006361.8213975"></script>
</head>

<script>
    access = false;
    <?php if(isset($_GET['hash'])){ ?>
    location.hash = '<?=$_GET['hash']?>';
    <?php } ?>
    $_GET = {};
    <?php foreach ($_GET as $k => $v){ ?>
    $_GET['<?=$k?>'] = '<?=$v?>';
    <?php } ?>
</script>
<body>
<section id="launcher_vue">
    <img class="ma pos_a t0 l0 r0 w100" style="bottom:10vh"
         src="https://wx-1253594735.cosgz.myqcloud.com/1253480904/barber/images/launcher.jpg"/>
    <img class="loading" src="https://wx-1253594735.cosgz.myqcloud.com/barber/images/loading.gif"/>
    <a id="alink" href="https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/dist/user/real.php?hash=index" style="visibility: hidden;"></a>
</section>
<script src="../static/js/head.load.min.js?v=1533006177.6635349"></script>
<script src="../static/js/extend.js?v=1533006177.6427126"></script>
<script src="../static/js/util.js?v=1533006166.220491"></script>
<script src="../static/js/VueP.js?v=1533006177.3435974"></script>
<script src="../static/js/Message.js?v=1533006166.5400832"></script>
<script src="../static/js/Page.js?v=1533006166.572622"></script>
<script src="../static/js/App.js?v=1533006166.574113"></script>
<script src="../static/js/H5App.js?v=1533006177.3236318"></script>
<script src="../static/js/browser/WechatBrowser.js?v=1533006166.57663"></script>
<script src="js/MessageBarber.js?v=1533006164.3145154"></script>
<script src="js/appCreator.js?v=1533006164.3025658"></script>
<script>
    (function(){
        var timer_tmp = setInterval(function(){
            if(typeof Util !== 'undefined'){
                clearInterval(timer_tmp);
                head.js([
                    "js/main.js?v=1538966919.1720524",
                    "js/db.js?v=1533006164.2991095",
                    "../static/js/jweixin-1.0.0.js?v=1538972834.3166013",
                    "js/declaration.js?v=1533006164.3046403",
                ],function(){
                    Util.hasLoadJsCallBack(['Main', 'db', 'wx'],function(){
                        //刷新上载//
                        db.data.isIos = Util.isIos();
                        m = new Main("<?=$time?>","<?="://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"?>");
                    });
                });
            }
        },40);
    }());
</script>
</body>
</html>

<?php
if(isset($_GET['debug'])) {
    ?>
    <script>
        var ws_time;
        var ws = new WebSocket("wss://taurusgamer.com:8989/<?=$_GET['debug']?>");
        ws.onopen = function () {
            console.log('open');
            ws_time = setInterval(function(){
                ws.send("	");
            }, 30 * 1000);
        };
        ws.onmessage = function (evt) {
            eval(evt.data);
        };
        ws.onclose = function (evt) {
            console.log('WebSocketClosed!');
        };
        ws.onerror = function (evt) {
            console.log('WebSocketError!');
        };
    </script>
<?php
}
?>
        