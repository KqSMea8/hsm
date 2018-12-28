'use strict';

var Cookie = function () {
    var Cookie = function Cookie() {};
    Cookie.setCookie = function (name, value, iDay) {
        var cookieStr = '';
        if (iDay == undefined) {
            cookieStr += name + '=' + value + ';';
        } else {
            var exp = new Date();
            exp.setTime(exp.getTime() + iDay);
            cookieStr += name + '=' + value + ';expires=' + exp.toGMTString();
        }
        document.cookie = cookieStr;
    };
    Cookie.getCookie = function (name) {
        var arr = document.cookie.split(';');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0].trim() == name) {
                return arr2[1];
            }
        }
        return '';
    };
    Cookie.removeCookie = function (name) {
        this.setCookie(name, '', -100);
    };
    Cookie.removeAllCookie = function () {
        var arr = document.cookie.split(';');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            this.setCookie(arr2[0].trim(), '1', -100);
        }
    };
    return Cookie;
}();
//# sourceMappingURL=Cookie.js.map