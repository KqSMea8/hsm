__extends(H5App, App);
function H5App(config) {
    var _this;
    _this = App.call(this, config) || this;

    _this.APP_EVENT_BEGIN_RIGHT_TO_LEFT = 'APP_EVENT_BEGIN_RIGHT_TO_LEFT';
    _this.APP_EVENT_BEGIN_LEFT_TO_RIGHT = 'APP_EVENT_BEGIN_LEFT_TO_RIGHT';
    _this.APP_EVENT_TRANSITION_END = 'APP_EVENT_TRANSITION_END';
    _this.APP_EVENT_LOGOUT = 'APP_EVENT_LOGOUT';
    _this.APP_EVENT_LOAD_SESSIONID = 'APP_EVENT_LOAD_SESSIONID';
    _this.pageName = '';
    return _this;
}
H5App.prototype.doPull = function (modal) {
    console.log('do pull : ' + modal);
    this.stacks.push(modal);
    var nextActive = this.getJqModal(modal);
    nextActive.show();
    this.loadModal(modal);
    this.publish(this.APP_EVENT_ANIMATION_BEGIN);
};
H5App.prototype.doAnimation = function (nowActive, nextActive, isfirst) {
    var _this = this;
    var wait;
    if (nextActive == _this.getJqModal(_this.stacks[_this.stacks.length - 3])) {
        setTimeout(function () {
            _this.publish(_this.APP_EVENT_BEGIN_LEFT_TO_RIGHT);
            _this.stacks.pop();
            _this.stacks.pop();
        }, 0);
    }else {
        if(isfirst){
            wait = 150;
        }else{
            wait = 50;
        }
        setTimeout(function () {
            _this.publish(_this.APP_EVENT_BEGIN_RIGHT_TO_LEFT);
        }, wait);
    }
};
H5App.prototype.hashChange = function (hash) {
    var _this = this;
    //app.publish(APP_EVENT_HASH_CHANGE);
    if (this.stacks.length && hash == this.defaultHash) {
        console.log('this.lastHash');
        console.log(this.lastHash);
        if(this.stacks.length<=2 && this.lastHash !== this.mainHash){
            this.lastHash = this.mainHash;
            this.hashGoBack(this.mainHash);
            this.pull(this.mainHash);
            return;
        }

        if (this.noDie) {
            this.hashGoBack(this.lastHash);
        }else {
            Message.dialog('提醒', "是否要退出应用程序", '确定', '取消', function () {
                _this.functionApi('die');
                Message.removeDialog();
            }, function () {
                _this.hashGoBack(_this.lastHash);
                Message.removeDialog();
            });
        }
    }
    else {
        this.lastHash = hash;
        // this.pull(hash + '_vue');
        this.pull(hash);
    }
};
H5App.prototype.sectionTransitionEnd = function (event) {
    var obj = event.target;
    if ((event.propertyName == '-webkit-transform' || event.propertyName == 'transform') && obj.tagName == this.transitionTag.toUpperCase()) {
        this.publish(this.APP_EVENT_TRANSITION_END);
    }
};
H5App.prototype.run = function () {
    var _this = this;
    var self = this;
    setTimeout(function () {
        console.log('the first hash is : ' + _this.defaultHash);
        location.hash = self.defaultHash;
        setTimeout(function(){
            _this.ready = true;
        },400);
    }, 100);
};
H5App.prototype.functionApi = function (func, callBack) {
    if (callBack === void 0) { callBack = ''; }
    if (Util.isWeChat()) {
        app.browser[func]()
    }
    else {
        var url = "function://" + Util.base64encode(func + '-' + callBack);
        $('body').append('<iframe id="functionApi" class="disn" src="' + url + '"></iframe>');
        setTimeout(function () {
            $('#functionApi').remove();
        }, 100);
    }
};
H5App.prototype.jump2 = function (pageName) {
    try {
        if (!pageName)
            return;
        location.hash = pageName;
    }
    catch (err) {
        location.hash = pageName;
    }
};
H5App.prototype.push = function (pageName) {
    db.data.history.push(pageName);
    this.functionApi('setDbJson', JSON.stringify(db.data));
    this.functionApi('pushPage', pageName);
};
H5App.prototype.pop = function () {
    if (db.data.history.length - 2 >= 0) {
        db.data.history.pop();
        this.functionApi('setDbJson', JSON.stringify(db.data));
        this.functionApi('popPage', db.data.history[db.data.history.length - 1]);
    }
    else {
        Message.toast('是否要退出软件？', 2);
    }
};
H5App.prototype.init = function () {
    var _this = this;
    this.pageName = location.hash.split("#")[1];
    $('section').each(function () {
        var id = $(_this).attr('id');
        if (id == _this.pageName + "_vue") {
            $(_this).css({
                '-webkit-transform': 'translate(0,0)',
                'transform': 'translate(0,0)'
            }).show();
            return;
        }
    });
    try {
        let val = this.pageName + "_vue"
        console.log(this.pageName + "_vue();");
        _this[val]();
    }
    catch (err) {
        console.log(err);
    }
};
