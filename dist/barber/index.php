<?php
//https://www.jianyuepai.com.cn/wx_cp/api/barber/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/barber/index.php?hash=index
$time = $_GET['time']??'';
$bopenid = false;
$bid = false;
if (isset($_GET['bopenid'])) {
    $bopenid = @$_GET['bopenid'];
    if (!$time || !$bopenid)
        die('no access');
    $_GET['hash'] = 'bind_phone';
    $secret = strtoupper(md5($bopenid . $time . 'b2X5OffTZttk9&@wJPMwfGh%5d@*^%'));
} else {
    $bid = @$_GET['bid'];
    if (!$time || !$bid)
        die('no access');
    $secret = strtoupper(md5($bid . $time . 'b2X5OffTZttk9&@wJPMwfGh%5d@*^%'));
}
?>
<!DOCTYPE html>
<html lang=en>
<head id="db_vue">
    <meta charset=UTF-8>
    <meta name=viewport content="width=device-width,minimum-scale=1,maximum-scale=1">
    <title>剪约派</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <!--<link rel="stylesheet" href="../static/css/bootstrap.min.css">-->
    <link rel="stylesheet" type="text/css" href="../static/css/css.css">
    <link rel="stylesheet" type="text/css" href="css/app.css">
    <style>
        section{background-color:#EFEFEF;-webkit-transform:translate(100%,0);transform:translate(100%,0);display:none}
        section#launcher_vue{display:block;-webkit-transform:translate(0,0);transform:translate(0,0);}
        section#launcher_vue .loading{width:10%;left:45%;position:absolute;top:58%}
    </style>
    <!--<script src="https://wechatfe.github.io/vconsole/lib/vconsole.min.js?v=2.5.2"></script>-->
</head>
<body ontouchstart="">
<section id="launcher_vue">
    <img style="position: absolute;top: 0;left: 0;right: 0;bottom: 10vh;margin: auto;width: 100%;"
         src="https://wx-1253594735.cosgz.myqcloud.com/barber/images/launcher.jpg"/>
    <img class="loading" src="https://wx-1253594735.cosgz.myqcloud.com/barber/images/loading.gif"/>
    <a id="alink" href="https://www.jianyuepai.com.cn/wx_cp/api/barber/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/barber/index.php?hash=index" style="visibility: hidden;"></a>
</section>

<script src="../static/js/vue.min.js"></script>
<script src="../static/js/head.load.min.js"></script>
<script src="../static/js/extend.js"></script>
<script src="../static/js/jquery.min.js"></script>
<script src="../dist/static/js/util.js"></script>
<script src="./js/db.js?a=1121"></script>
<script>
    var time, $_GET, m, app;
    <?php if(isset($_GET['hash'])){ ?>
    location.hash = '<?=$_GET['hash']?>';
    <?php } ?>
    $_GET = {};
    <?php foreach ($_GET as $k => $v){ ?>
    $_GET['<?=$k?>'] = '<?=$v?>';
    <?php } ?>
    time = '?a=' + Math.random();
    app = null;
    m = null;

    (function() {
        var timer = setInterval(function () {
            if (typeof Util !== 'undefined' && typeof db !== 'undefined') {
                clearInterval(timer);
                db.data.isIos = Util.isIos();
                head.js([
                    '../static/js/jweixin-1.0.0.js'
                ], function () {
                    Util.hasLoadJsCallBack(['wx'],function(){
                        var dataStr = '{' +
                            '"sign":"<?=$secret?>",' +
                            '"time":"<?=$time?>",' +
                            <?php if($bopenid){ ?>
                            '"bopenid":"<?=$bopenid?>"' +
                            <?php } ?>
                            <?php if($bid){ ?>
                            '"bid":"<?=$bid?>"' +
                            <?php } ?>
                            '}';
                        Util.ajax(dataStr, db.data.api + 'AjaxFirstAuth.php', function (data) {
                            if (data.e === 0) {
                                head.js([
                                    db.data.distDir + '../dist/static/js/VueP.js' + time,
                                    db.data.distDir + '../dist/static/js/Message.js' + time,
                                    db.data.distDir + '../dist/static/js/App.js' + time,
                                    db.data.distDir + '../dist/static/js/H5App.js' + time,
                                    db.data.distDir + '../dist/static/js/browser/WechatBrowser.js' + time,
                                    db.data.distDir + 'barber/js/MessageBarber.js' + time,
                                    db.data.distDir + 'barber/js/appCreator.js' + time,
                                    db.data.distDir + 'barber/pages/Page.js' + time,
                                    db.data.distDir + 'barber/pages/launcher.js' + time,
                                    db.data.distDir + 'barber/js/main.js' + time,
                                ], function () {
                                    Util.hasLoadJsCallBack(['Main','Util','VueP','Message','App','H5App','WechatBrowser','MessageBarber'
                                        ,'appCreator','Page','launcher'],function(){
                                        m = new Main("<?=$secret?>","<?=$time?>","<?=$bid?>","<?="://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"?>");
                                    });
                                });
                            } else {
                                document.getElementById("alink").click();
                            }
                        });
                    });
                });
            }
        }, 22);
    }());
</script>
<script defer src="../static/js/spin.js"></script>
<script defer src="../static/js/highcharts.js"></script>
</body>
</html>