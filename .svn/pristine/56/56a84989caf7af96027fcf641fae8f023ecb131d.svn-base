function appCreator(){}
appCreator.init = function(app){
    app.browser = new WechatBrowser();
    app.screenWidth = $(window).width();
    app.screenWidth_04 = app.screenWidth*0.4;
    app.subscribe(app.APP_EVENT_ANIMATION_BEGIN, function() {
        //APP_EVENT_ANIMATION_BEGIN => will move
        // var nextActive = $('#'+app.stacks[app.stacks.length-1]+'_vue');
        // if(nextActive.attr('data-isActive') != '1'){//下一个active 不在 stacks中 说明 是 right2left
        //     nextActive.css('z-index',++app.maxZindex);
        // }adsfads
        // }
    });
    app.subscribe(app.APP_EVENT_BEGIN_RIGHT_TO_LEFT,function() {
        console.log('APP_EVENT_BEGIN_RIGHT_TO_LEFT');
        var nextActive = app.getJqModal(app.stacks[app.stacks.length-1]);
        var nowActive = app.getJqModal(app.stacks[app.stacks.length-2]);
        nextActive.css('z-index',++app.maxZindex);
        if(nowActive){
            nowActive.attr('data-willHide',1);
        }else{
            app.publish(app.APP_EVENT_TRANSITION_END);//第一次回没有对象
        }
        nextActive.attr('data-isActive',1);
        nextActive.css({
            'transform':'translate3d(0,0,0)',
            '-webkit-transform':'translate3d(0,0,0)'
        });
        if(app.isIos){
            if(nowActive){
                nowActive.css({
                    'transform':'translate3d(-'+app.screenWidth_04+'px,0,0)',
                    '-webkit-transform':'translate3d(-'+app.screenWidth_04+'px,0,0)'
                });
            }
        }

    });
    app.subscribe(app.APP_EVENT_BEGIN_LEFT_TO_RIGHT,function() {
        console.log('APP_EVENT_BEGIN_LEFT_TO_RIGHT');
        var nextActive = app.getJqModal(app.stacks[app.stacks.length-1]);
        var nowActive = app.getJqModal(app.stacks[app.stacks.length-2]);
        nowActive.attr('data-willHide',1);
        nowActive.css({
            'transform':'translate3d('+app.screenWidth+'px,0,0)',
            '-webkit-transform':'translate3d('+app.screenWidth+'px,0,0)'
        });
        if(app.isIos){
            nextActive.css({
                'transform':'translate3d(0,0,0)',
                '-webkit-transform':'translate3d(0,0,0)'
            });
        }
    });
    app.subscribe(app.APP_EVENT_TRANSITION_END,function() {
        console.log('APP_EVENT_TRANSITION_END');
        $(app.transitionTag+'[data-willHide="1"]').attr('data-willHide',0).hide();
        app.isDoingAnimation = false;
        app.publish(app.APP_EVENT_ANIMATION_END);
    });
    app.subscribe(app.APP_EVENT_LOGOUT,function(){
        // app.isLogingout = true;
        // location.hash='login';
        // Cookie.removeCookie("sessionId");
        // app.publish(app.APP_EVENT_LOAD_SESSIONID);
        // db.sessionId = '';
        // localStorage.setItem('using','');
    });
    return app;
};
