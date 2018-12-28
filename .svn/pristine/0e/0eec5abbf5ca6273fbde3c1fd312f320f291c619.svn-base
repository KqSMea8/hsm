'use strict';

function appCreator() {}
appCreator.init = function (app) {
    // if(location.href.split('payqi').length >=2){
    //     db.data.api = `https://wwww.jianyuepai.com.cn/api/barber/`;
    // }else{
    //     db.data.api = 'http://123.207.243.228/html/myapp/src/index.php';
    // }
    app.browser = new WechatBrowser();
    app.screenWidth = $(window).width();
    app.screenWidth_04 = app.screenWidth * 0.4;

    app.subscribe(app.APP_EVENT_BEGIN_RIGHT_TO_LEFT, function () {
        console.log('APP_EVENT_BEGIN_RIGHT_TO_LEFT');
        var nextActive = app.getJqModal(app.stacks[app.stacks.length - 1]);
        var nowActive = app.getJqModal(app.stacks[app.stacks.length - 2]);
        nextActive.css('z-index', ++app.maxZindex);
        if (nowActive) {
            nowActive.attr('data-willHide', 1);
        } else {
            app.publish(app.APP_EVENT_TRANSITION_END); //第一次回没有对象
        }
        nextActive.attr('data-isActive', 1);
        nextActive.css({
            '-webkit-transform': 'translate(0,0)',
            'transform': 'translate(0,0)'
        });
        if (app.isIos) {
            if (nowActive) {
                nowActive.css({
                    '-webkit-transform': 'translate(-' + app.screenWidth_04 + 'px,0)',
                    'transform': 'translate(-' + app.screenWidth_04 + 'px,0)'
                });
            }
        }
    });
    app.subscribe(app.APP_EVENT_BEGIN_LEFT_TO_RIGHT, function () {
        console.log('APP_EVENT_BEGIN_LEFT_TO_RIGHT');
        var nextActive = app.getJqModal(app.stacks[app.stacks.length - 1]);
        var nowActive = app.getJqModal(app.stacks[app.stacks.length - 2]);
        nowActive.attr('data-willHide', 1);
        nowActive.css({
            '-webkit-transform': 'translate(' + app.screenWidth + 'px,0)',
            'transform': 'translate(' + app.screenWidth + 'px,0)'
        });
        if (app.isIos) {
            nextActive.css({
                '-webkit-transform': 'translate(0,0)',
                'transform': 'translate(0,0)'
            });
        }
    });
    app.subscribe(app.APP_EVENT_TRANSITION_END, function () {
        console.log('APP_EVENT_TRANSITION_END');
        $(app.transitionTag + '[data-willHide="1"]').attr('data-willHide', 0).hide();
        app.isDoingAnimation = false;
        app.publish(app.APP_EVENT_ANIMATION_END);
    });
    return app;
};
