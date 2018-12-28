'use strict';

__extends(PcApp, App);
function PcApp(config) {
    var _this = App.call(this, config) || this;
    return _this;
}
PcApp.prototype.doPull = function (modal) {
    console.log('do pull : ' + modal);
    this.stacks.push(modal);
    var nextActive = this.getJqModal(modal);

    nextActive.css({
        'position': 'relative',
        'z-index': 1,
        'opacity': 0
    }).show();
    var nowActive;
    if (!!app.stacks[app.stacks.length - 2] !== false) {
        nowActive = this.getJqModal(app.stacks[app.stacks.length - 2]);
        nowActive.css({
            'position': 'absolute',
            'z-index': 9
        });
    }

    console.log(nextActive);
    console.log(nowActive);

    this.loadModal(modal);
    app.publish(this.APP_EVENT_ANIMATION_BEGIN);
};
PcApp.prototype.doAnimation = function (nowActive, nextActive, firstLoad) {
    var self = this;
    setTimeout(function () {
        if (nowActive) {
            nowActive.css(self.transitionName, '0');
        }
        nextActive.css(self.transitionName, '1');
    }, firstLoad ? 50 : 20);
};
PcApp.prototype.hashChange = function () {
    app.publish(this.APP_EVENT_HASH_CHANGE);
    this.pull(location.hash.split('#')[1]);
};
PcApp.prototype.sectionTransitionEnd = function (event) {
    var self = this;
    var obj, $obj;
    obj = event.target;
    if (event.propertyName === this.transitionName && obj.tagName === this.transitionTag.toUpperCase()) {
        console.log('sectionTransitionEnd');
        this.isDoingAnimation = false;
        $obj = $(obj);
        setTimeout(function () {
            if ($obj.css(self.transitionName) == 0) $obj.hide();
        }, 100);
        app.publish(this.APP_EVENT_ANIMATION_END);
    }
};
PcApp.prototype.run = function () {
    var self = this;
    setTimeout(function () {
        requirejs(['Cookie'], function (Cookie) {
            location.hash = Cookie.getCookie('hash') || self.defaultHash;
        });
    }, 300);
};
//# sourceMappingURL=PcApp.js.map