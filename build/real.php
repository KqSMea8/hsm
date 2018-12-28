<?php
//https://www.jianyuepai.com.cn/wx_cp/api/user/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/user/real.php?hash=index
$time = $_GET['time'] ?? false;
$uid = $_GET['uid'] ?? false;
if (!$time || !$uid)
    die('no access');
$secret = strtoupper(md5($uid . $time . 'b2X5OffTZttk9&@wJPMwfGh%5d@*^%'));
?>
<!DOCTYPE html>
<html lang=en>
<head id="db_vue">
    <meta charset=UTF-8>
    <meta name=viewport content="width=device-width,minimum-scale=1,maximum-scale=1">
    <title>剪约派</title>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css">
    <link rel="stylesheet" href="../static/css/css.css">
    <link rel="stylesheet" href="./css/app.css">
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
</section>
<script src="../static/js/vue.js"></script>
<script src="../static/js/head.load.min.js"></script>
<script src="../static/js/extend.js"></script>
<script src="../static/js/Zepto.js"></script>
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
    time = '?a=' + '442134';
    (function(){
        var timer_tmp = setInterval(function(){
            if(typeof Util !== 'undefined'){
                clearInterval(timer_tmp);
                head.js([
                    'js/main.js'
                    'js/db.js'
                ],function(){
                    Util.hasLoadJsCallBack(['Main', 'db'],function(){
                        db.data.isIos = Util.isIos();
                        m = new Main("<?=$secret?>","<?=$time?>","<?=$uid?>","<?="://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"?>");
                    });
                });
            }
        },20);
    }());
</script>
</body>
</html>
