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
    <!--<link rel="stylesheet" href="../static/css/bootstrap.min.css">-->
    <link rel="stylesheet" href="../static/css/css.css">
    <link rel="stylesheet" href="./css/app.css">
    <script src="../../config.js"></script>
    <script src="../static/js/vue.min.js"></script>
    <script src="../static/js/zepto.min.js"></script>
    <link rel="stylesheet" href="../../static/js/swiper-4.1.0/swiper-4.1.0.min.css">
    <script src="../../static/js/swiper-4.1.0/swiper-4.1.0.min.js"></script>
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
<script src="../static/js/head.load.min.js"></script>
<script src="../static/js/extend.js"></script>
<script src="../static/js/util.js"></script>
<script src="../static/js/VueP.js"></script>
<script src="../static/js/Message.js"></script>
<script src="../static/js/Page.js"></script>
<script src="../static/js/App.js"></script>
<script src="../static/js/H5App.js"></script>
<script src="../static/js/browser/WechatBrowser.js"></script>
<script src="js/MessageBarber.js"></script>
<script src="js/appCreator.js"></script>
<script>
    (function(){
        var timer_tmp = setInterval(function(){
            if(typeof Util !== 'undefined'){
                clearInterval(timer_tmp);
                head.js([
                    'js/main.js',
                    'js/db.js',
                    '../static/js/jweixin-1.0.0.js',
                    'js/declaration.js',
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
