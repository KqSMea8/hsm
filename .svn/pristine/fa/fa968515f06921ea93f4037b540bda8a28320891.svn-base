<?php
//https://www.jianyuepai.com.cn/wx_cp/api/admin/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/admin/destroy.php?hash=index
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
    <link rel="stylesheet" type="text/css" href="../static/css/css.css">
    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="../static/css/bootstrap.min.css">
    <!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
    <link rel="stylesheet" href="../static/css/bootstrap-theme.min.css">
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
    <a id="alink" href="https://www.jianyuepai.com.cn/wx_cp/api/admin/login.php?clientType=wx&redirect=https://www.jianyuepai.com.cn/hsm/admin/destroy.php?hash=index" style="visibility: hidden;"></a>
</section>
</body>
</html>
<script src="../static/js/vue.min.js"></script>
<script src="../static/js/head.load.min.js"></script>
<script src="../static/js/extend.js"></script>
<script src="../static/js/jquery.min.js"></script>
<script src="../dist/static/js/util.js?a=12"></script>
<script src="./js/db.js?a=5"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="../static/js/bootstrap.min.js"></script>
<script>
    var time = '?a=' + Math.random();
    (function () {
        var timer = setInterval(function () {
            if (typeof Util !== 'undefined' && typeof db !== 'undefined') {
                clearInterval(timer);
                db.data.isIos = Util.isIos();
                db.data.distDir = '../';
                head.js([
                    db.data.distDir + 'admin/js/mainDestroy.js' + time,
                    db.data.distDir + 'static/js/Message.js' + time,
                    db.data.distDir + 'user/js/MessageBarber.js' + time,
                ]);
                head.js([
                    '../static/js/jweixin-1.0.0.js'
                ], function () {
                    Util.hasLoadJsCallBack(['wx', 'db'], function () {
                        let dataStr = `{
                            "sign" : "<?=$secret?>",
                            "time" : "<?=$time?>",
                            "uid" : "<?=$uid?>"
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
<script defer src="../static/js/highcharts.js"></script>

<!--https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=6845&from_mid=1&&format=json&ie=utf-8&oe=utf-8&query=小说&sort_key=&sort_type=1&stat0=&stat1=&stat2=&stat3=&pn=0&rn=8&cb=jQuery110207948450767373036_1498805422486&_=1498805422505-->
