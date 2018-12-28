var App = function(config) {
    this.APP_EVENT_ANIMATION_END = 'APP_EVENT_ANIMATION_END';
    this.APP_EVENT_ANIMATION_BEGIN = 'APP_EVENT_ANIMATION_BEGIN';
    this.APP_EVENT_HASH_CHANGE = 'APP_EVENT_HASH_CHANGE';
    this.isDoingAnimation = false;
    this.oprationStacks = [];
    this.createTime = new Date();
    this.$modals = {};
    this.stacks = [];
    this.noDie = false;
    this.projectName = '';
    this.lastHash = '';
    this.defaultHash = null;
    this.secondHash = null;
    this.mainHash = null;
    this.isDebug = null;
    this.isIos = false;
    this.transitionTag = null;
    this.transitionName = null;
    this.transitionTime = null;
    this.transitionType = null;
    this.maxZindex = 100;
    this.defaultHash = config['defaultHash']?config['defaultHash']:'launcher';
    this.secondHash = config['secondHash']?config['secondHash']:'index';
    this.mainHash = config['mainHash']?config['mainHash']:'index';
    this.isDebug = config['isDebug'];
    this.transitionTag = config['transitionTag']?config['transitionTag']:'section';
    this.transitionName = config['transitionName']?config['transitionName']:'all';
    this.transitionTime = config['transitionTime']?config['transitionTime']:'0';
    this.transitionType = config['transitionType']?config['transitionType']:'ease';
    this.projectName = config['projectName']?config['projectName']:'myapp';
    this.reSetHash('');
    this.initBind();
    this.initView();
};

App.prototype.loadCss = function (addr) {
    var addString = (this.isDebug) ? '?time=' + this.createTime.getTime() : '';
    var str = '';
    var i;
    for (i = 0; i < addr.length; i++) {
        str += '<link rel="stylesheet" href="' + addr[i] + addString + '" type="text/css"/>';
    }
    $('body').append(str);
};
App.prototype.getJqModal = function (modal) {
    modal += '_vue';
    if (!modal) {
        return '';
    }
    else {
        if (this.$modals[modal]) {
            return this.$modals[modal];
        }
        else {
            var obj = $('#' + modal);
            this.$modals[modal] = obj;
            return obj;
        }
    }
};
App.prototype.doPull = function (modal) { };
App.prototype.pull = function (modal) {
    console.log('pull ' + modal);
    if (this.isDoingAnimation) {
        this.oprationStacks.push(modal);
        return false;
    }else {
        this.isDoingAnimation = true;
        this.doPull(modal);
    }
    // if (modal == this.defaultHash + "_vue") {
    if (modal === this.defaultHash) {
        this.isDoingAnimation = false;
        if (this.defaultHash !== 'launcher') {
            this.defaultHash = 'launcher';
        }
    }
};
App.prototype.loadModal = function (modal) {
    console.log('loadModal:'+modal);
    if (db.data.isIos){
        if (modal === 'index'){
            window[modal].vue.init();
            if(!!this.stacks[this.stacks.length - 2] === false)
                this.doAnimation(null, this.getJqModal(this.stacks[this.stacks.length - 1]), false);
            else
                this.doAnimation(this.getJqModal(this.stacks[this.stacks.length - 2]), this.getJqModal(this.stacks[this.stacks.length - 1]), false);
            return
        }
    }
    Util.hasLoadJsCallBack(modal+'.vue',()=>{
        window[modal].vue.init();
        if(!!this.stacks[this.stacks.length - 2] === false)
            this.doAnimation(null, this.getJqModal(this.stacks[this.stacks.length - 1]), false);
        else
            this.doAnimation(this.getJqModal(this.stacks[this.stacks.length - 2]), this.getJqModal(this.stacks[this.stacks.length - 1]), false);
    });
};
App.prototype.doAnimation = function (nowActive, nextActive, isfirst) {};
/**
 * 取消推出的时候 用来返回hash的
 * @param hash
 */
App.prototype.hashGoBack = function (hash) {
    this.reSetHash(hash);
};
App.prototype.subscribe = function (str, func) {
    $('title').bind(str, func);
};
App.prototype.publish = function (str) {
    $('title').trigger(str);
};
App.prototype.unSubscribe = function (str) {
    $('title').unbind(str);
};
App.prototype.sectionTransitionEnd = function (event) { };
App.prototype.initBind = function () {
    var _this = this;
    var body = $('body')[0];
    try {
        body.addEventListener("transitionend", function (event) {
            _this.sectionTransitionEnd(event);
        });
    }
    catch (e) {
        console.log('addEventListener has Error:' + e);
        try {
            body.attachEvent("transitionend", function (event) {
                this.sectionTransitionEnd(event);
            });
        } catch (e) {
            console.log('attachEvent has Error:' + e);
        }
    }
    this.subscribe(this.APP_EVENT_ANIMATION_END, function () {
        if (_this.oprationStacks.length) {
            console.log('opration modal : ' + _this.oprationStacks[0]);
            setTimeout(function () {
                _this.pull(_this.oprationStacks[0]);
                _this.oprationStacks.remove(0);
            }, 0);
        }

        console.log(app.mainHash == app.lastHash);
        if(app.stacks[1] != app.mainHash && app.stacks.length==3 && app.mainHash == app.lastHash){
            app.getJqModal(app.stacks[1]).css({
                '-webkit-transform':'translate(100%, 0)',
                'transform':'translate(100%, 0)',
                'display':'none',
            });
            app.stacks = [app.defaultHash, app.mainHash];
        }
    });
};
App.prototype.initView = function () {
    $('section').css({
        '-webkit-transition': 'all 0.3s ease',
    });
};
App.prototype.hashChange = function (hash) {};
App.prototype.reSetHash = function (hash) {
    var _this = this;
    var $window = $(window);
    $window.unbind('hashchange');
    location.hash = hash;
    setTimeout(function () {
        $window.bind('hashchange', function () {
            var hash = location.hash.substr(1, location.hash.length - 1);
            console.log('hashchange:' + hash);
            if (!hash) {
                return false;
            } else {
                _this.hashChange(hash);
            }
        });
    }, 300);
};