<?php
//https://www.jianyuepai.com.cn/wx_cp/api/admin/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/admin/activity.php?hash=index
$time = @$_GET['time'];
if (!$time)
    die('no access');
?>
<!DOCTYPE html>
<html lang=en>
<head id="db_vue">
    <meta charset=UTF-8>
    <meta name=viewport content="width=device-width,minimum-scale=1,maximum-scale=1">
    <title>剪约派</title>
    <link rel="stylesheet" href="../static/css/bootstrap.min.css?v=1533006178.0011792">
    <link rel="stylesheet" type="text/css" href="../static/css/css.css?v=1533006178.0066352">
    <style>
        section {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<script>
    var access = false;
    <?php if(isset($_GET['hash'])){ ?>
    location.hash = '<?=$_GET['hash']?>';
    <?php } ?>
    var $_GET = {};
    <?php foreach ($_GET as $k => $v){ ?>
    $_GET['<?=$k?>'] = '<?=$v?>';
    <?php } ?>
</script>
<body>
<section id="index_vue">
    <a id="alink" href="https://www.jianyuepai.com.cn/wx_cp/api/admin/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/admin/activity.php?hash=index" style="visibility: hidden;"></a>
</section>
</body>
</html>
<script src="../static/js/vue.min.js?v=1538967333.5403218"></script>
<script src="../static/js/head.load.min.js?v=1533006177.6635349"></script>
<script src="../static/js/extend.js?v=1533006177.6427126"></script>
<script src="../static/js/jquery.min.js?v=1538971411.7425244"></script>
<script src="../dist/static/js/util.js?a=12"></script>
<script src="./js/db.js?a=5"></script>
<script>
    var time = '?a=' + Math.random();
    (function () {
        var timer = setInterval(function () {
            if (typeof Util !== 'undefined' && typeof db !== 'undefined') {
                clearInterval(timer);
                db.data.isIos = Util.isIos();
                db.data.distDir = '../';
                head.js([
                    db.data.distDir + "admin/js/mainActivity.js?v=1533006165.8845334" + time,
                    db.data.distDir + "static/js/Message.js?v=1533006166.5400832" + time,
                    db.data.distDir + "user/js/MessageBarber.js?v=1533006164.3145154" + time,
                ]);
                head.js([
                    "../static/js/jweixin-1.0.0.js?v=1538972834.3166013"
                ], function () {
                    Util.hasLoadJsCallBack(['wx', 'db'], function () {
                        let dataStr = `{
                            "time" : "<?=$time?>"
                        }`;
                        Util.ajax(dataStr, db.data.api + 'AjaxFirstAuth.php', function (data) {
                            if (data.e === 0) {
                                new MainActivity();
                            } else {
                                document.getElementById("alink").click();
                            }
                        });
                    });
                });
            }
        });
    }());
</script>
<script defer type="text/javascript" src="../static/js/spin.js"></script>
<script defer src="../static/js/highcharts.js?v=1533006177.0496023"></script>

<!--https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6845&from_mid=1&&format=json&ie=utf-8&oe=utf-8&query=小说&sort_key=&sort_type=1&stat0=&stat1=&stat2=&stat3=&pn=0&rn=8&cb=jQuery110207948450767373036_1498805422486&_=1498805422505-->
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
        