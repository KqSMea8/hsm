'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
Number.prototype.addZ = function () {
    var int = parseInt(this);
    if (int < 10) {
        return '0' + this;
    } else {
        return this + '';
    }
};
Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    var i = void 0,
        n = void 0;
    for (i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i];
        }
    }
    this.length -= 1;
};

var Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: 'loadJs',
        value: function loadJs(url, func) {
            var script = document.createElement("script");
            script.setAttribute("src", url);
            document.body.appendChild(script);
            script.onload = function () {
                func();
            };
        }
    }, {
        key: 'ajax',
        value: function ajax() {
            var dataStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '{}';
            var url = arguments[1];
            var _success = arguments[2];
            var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'post';

            var _error = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

            $.ajax({
                type: method, url: url,
                data: Util.getJsonObj(dataStr), dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                success: function success(data) {
                    _success(data);
                },
                error: function error(jqXHR, textStatus, errorThrown) {
                    if (_error !== null) {
                        _error(errorThrown);
                    }
                }
            });
        }
    }, {
        key: 'outRepeat',
        value: function outRepeat(a) {
            var hash = [],
                arr = [];
            var i = void 0,
                e = void 0;
            for (i = 0; (e = a[i]) != null; i++) {
                if (!hash[e]) {
                    arr.push(e);
                    hash[e] = true;
                }
            }
            return arr;
        }
    }, {
        key: 'mid',
        value: function mid(el) {
            $(el).find('.mid').each(function () {
                $(this).css({
                    'top': ($(this).parent().height() - $(this).height()) * 0.5,
                    'position': 'relative'
                });
                $(this).removeClass('mid');
            });
        }
    }, {
        key: 'forEach',
        value: function forEach(arr, func) {
            var i = void 0,
                ret = void 0;
            for (i = 0; i < arr.length; i++) {
                ret = func.call(this, arr[i], i); //回调函数
                if (ret === false) break;
            }
        }
    }, {
        key: 'inEach',
        value: function inEach(obj, func) {
            var ret = void 0,
                key = void 0;
            var i = 0;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ret = func.call(this, obj[key], key, i++); //回调函数
                    if (ret === false) break;
                }
            }
        }
    }, {
        key: 'clone',
        value: function clone(obj) {
            var o = void 0;
            if (obj.constructor == Object) o = new obj.constructor();else o = new obj.constructor(obj.valueOf());
            var key = void 0;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (o[key] !== obj[key]) {
                        if (_typeof(obj[key]) === 'object') {
                            o[key] = this.clone(obj[key]);
                        } else {
                            o[key] = obj[key];
                        }
                    }
                }
            }
            o.toString = obj.toString;
            o.valueOf = obj.valueOf;
            return o;
        }
    }, {
        key: 'getFileName',
        value: function getFileName(str) {
            var arr = str.split('/');
            return arr[arr.length - 1].split('.')[0];
        }
    }, {
        key: 'isMobileNumber',
        value: function isMobileNumber(tel) {
            if (!tel) return false;
            //let telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/);
            var telReg = !!tel.match(/^1[3456789]{1}\d{9}$/);
            return telReg != false;
        }
    }, {
        key: 'checkTwoPassword',
        value: function checkTwoPassword(password, password1) {
            var allIsNumber = /^[0-9]{1,20}$/; //纯数字
            var allIsEn = /^[a-zA-Z]{1,20}$/; //纯数字
            var hasSpecial = /[^0-9a-zA-Z]/; //除英文和数字
            var six = /.{6,}/; //六位以上
            if (allIsNumber.exec(password) || allIsEn.exec(password) || hasSpecial.exec(password) || !six.exec(password)) {
                return "密码为6位以上，带字母和数字！";
            }
            if (password !== password1) {
                return "两次输入的密码不一致！";
            }
            return true;
        }
    }, {
        key: 'getLastChar',
        value: function getLastChar(str) {
            str = str.trim();
            return str.substr(str.length - 1, str.length);
        }
    }, {
        key: 'getJsonObj',
        value: function getJsonObj(str) {
            return eval('(' + str + ')');
        }
    }, {
        key: 'isWeChat',
        value: function isWeChat() {
            return !!window.navigator.userAgent.match(/MicroMessenger/i);
        }
    }, {
        key: 'isIos',
        value: function isIos() {
            var ua = navigator.userAgent.toLowerCase();
            //alert(ua);
            if (/iphone|ipad|ipod/.test(ua)) {
                return true;
            } else if (/android/.test(ua)) {
                return false;
            }
            return false;
        }
    }, {
        key: 'isAndroid',
        value: function isAndroid() {
            var ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                return false;
            } else if (/android/.test(ua)) {
                return true;
            }
        }
    }, {
        key: 'hasObjKey',
        value: function hasObjKey(obj) {
            var flag = false;
            for (var using in obj) {
                if (obj.hasOwnProperty(using)) {
                    flag = obj[using];
                    break;
                }
            }
            return flag;
        }
    }, {
        key: 'in_array',
        value: function in_array(arr, val) {
            var i = void 0;
            for (i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'int2string',
        value: function int2string(int, num) {
            var string = int + '';
            var ling = '';
            if (string.length < num) {
                var dif = num - string.length;
                var i = void 0;
                for (i = 0; i < dif; i++) {
                    ling += '0';
                }
            }
            return ling + string;
        }
    }, {
        key: 'base64encode',
        value: function base64encode(str) {
            var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var out = void 0,
                i = void 0,
                len = void 0;
            var c1 = void 0,
                c2 = void 0,
                c3 = void 0;
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i === len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i === len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
                    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
                out += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
                out += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        }
    }, {
        key: 'getDistance',
        value: function getDistance(lat1, lng1, lat2, lng2) {
            var EARTH_RADIUS = 6378137.0; //单位M
            var PI = Math.PI;
            var getRad = function getRad(d) {
                return d * PI / 180.0;
            };
            var radLat1 = getRad(lat1);
            var radLat2 = getRad(lat2);
            var a = radLat1 - radLat2;
            var b = getRad(lng1) - getRad(lng2);
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * EARTH_RADIUS;
            s = Math.round(s * 10000) / 10000.0;
            return s;
        }
    }, {
        key: 'hasLoadJsCallBack',
        value: function hasLoadJsCallBack(objArr, func) {
            objArr = typeof objArr === 'string' ? [objArr] : objArr;
            var timer = setInterval(function () {
                var hasAll = true;
                Util.forEach(objArr, function (val) {
                    var o = void 0;
                    var valArr = val.split('.');
                    if (valArr.length == 1) {
                        o = window[valArr[0]];
                    } else if (valArr.length == 2) {
                        o = window[valArr[0]][valArr[1]];
                    } else if (valArr.length == 3) {
                        o = window[valArr[0]][valArr[1]][valArr[2]];
                    }
                    if (typeof o === 'undefined') {
                        console.log(valArr);
                        hasAll = false;
                        return false;
                    }
                });
                if (hasAll) {
                    clearInterval(timer);
                    func();
                }
            }, 80);
        }
    }]);

    return Util;
}();
