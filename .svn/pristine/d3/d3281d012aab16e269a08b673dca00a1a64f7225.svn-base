String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
Number.prototype.addZ = function () {
    let int = parseInt(this);
    if (int < 10) {
        return '0' + this;
    }
    else {
        return this + '';
    }
};
Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    let i, n;
    for (i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i];
        }
    }
    this.length -= 1;
};
class Util {
    static loadJs(url, func) {
        let script = document.createElement("script");
        script.setAttribute("src", url);
        document.body.appendChild(script);
        script.onload = function () {
            func();
        };
    }
    static ajax(dataStr='{}', url, success, method = 'post', error = null) {
        $.ajax({
            type: method, url: url,
            data: Util.getJsonObj(dataStr), dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                success(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (error !== null) {
                    error(errorThrown);
                }
            }
        });
    }
    static outRepeat(a) {
        let hash = [], arr = [];
        let i, e;
        for (i = 0; (e = a[i]) != null; i++) {
            if (!hash[e]) {
                arr.push(e);
                hash[e] = true;
            }
        }
        return arr;
    }
    static mid(el) {
        $(el).find('.mid').each(function () {
            $(this).css({
                'top': ($(this).parent().height() - $(this).height()) * 0.5,
                'position': 'relative'
            });
            $(this).removeClass('mid');
        });
    }

    static forEach(arr, func) {
        let i,ret;
        for (i = 0; i < arr.length; i++) {
            ret = func.call(this, arr[i], i);//回调函数
            if (ret === false) break;
        }
    }
    static inEach(obj, func) {
        let ret,key;
        let i = 0;
        for (key in obj){
            if(obj.hasOwnProperty(key)){
                ret = func.call(this, obj[key], key, i++);//回调函数
                if (ret === false) break;
            }
        }
    }

    static clone(obj) {
        let o;
        if (obj.constructor == Object)
            o = new obj.constructor();
        else
            o = new obj.constructor(obj.valueOf());
        let key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (o[key] !== obj[key]) {
                    if (typeof (obj[key]) === 'object') {
                        o[key] = this.clone(obj[key]);
                    }
                    else {
                        o[key] = obj[key];
                    }
                }
            }
        }
        o.toString = obj.toString;
        o.valueOf = obj.valueOf;
        return o;
    }

    static getFileName(str) {
        let arr = str.split('/');
        return arr[arr.length - 1].split('.')[0];
    }

    static isMobileNumber(tel) {
        if (!tel)
            return false;
        //let telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/);
        let telReg = !!tel.match(/^1[3456789]{1}\d{9}$/);
        return (telReg != false);
    }

    static checkTwoPassword(password, password1) {
        let allIsNumber = /^[0-9]{1,20}$/; //纯数字
        let allIsEn = /^[a-zA-Z]{1,20}$/; //纯数字
        let hasSpecial = /[^0-9a-zA-Z]/; //除英文和数字
        let six = /.{6,}/; //六位以上
        if (allIsNumber.exec(password) || allIsEn.exec(password) || hasSpecial.exec(password) || !six.exec(password)) {
            return ("密码为6位以上，带字母和数字！");
        }
        if (password !== password1) {
            return ("两次输入的密码不一致！");
        }
        return true;
    }

    static getLastChar(str) {
        str = str.trim();
        return str.substr(str.length - 1, str.length);
    }

    static getJsonObj(str) {
        return eval('(' + str + ')');
    }

    static isWeChat() {
        return !!(window.navigator.userAgent.match(/MicroMessenger/i));
    }
    static isIos() {
        let ua = navigator.userAgent.toLowerCase();
        //alert(ua);
        if (/iphone|ipad|ipod/.test(ua)) {
            return true;
        }
        else if (/android/.test(ua)) {
            return false;
        }
        return false;
    }

    static isAndroid() {
        let ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            return false;
        }
        else if (/android/.test(ua)) {
            return true;
        }
    }

    static hasObjKey(obj) {
        let flag = false;
        for (let using in obj) {
            if (obj.hasOwnProperty(using)) {
                flag = obj[using];
                break;
            }
        }
        return flag;
    }

    static in_array(arr, val) {
        let i;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                return true;
            }
        }
        return false;
    }

    static int2string(int, num) {
        let string = int + '';
        let ling = '';
        if (string.length < num) {
            let dif = num - string.length;
            let i;
            for (i = 0; i < dif; i++)
                ling += '0';
        }
        return (ling + string);
    }

    static base64encode(str) {
        let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        let out, i, len;
        let c1, c2, c3;
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
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                out += "=";
                break;
            }
            c3 = str.charCodeAt(i++);
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
            out += base64EncodeChars.charAt(c3 & 0x3F);
        }
        return out;
    }

    static getDistance(lat1, lng1, lat2, lng2) {
        let EARTH_RADIUS = 6378137.0; //单位M
        let PI = Math.PI;
        let getRad = function (d) {
            return d * PI / 180.0;
        };
        let radLat1 = getRad(lat1);
        let radLat2 = getRad(lat2);
        let a = radLat1 - radLat2;
        let b = getRad(lng1) - getRad(lng2);
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000.0;
        return s;
    }
    static hasLoadJsCallBack(objArr,func){
        objArr = (typeof objArr === 'string')? [objArr]:objArr;
        let timer = setInterval(() => {
            let hasAll = true;
            Util.forEach(objArr,function(val){
                let o;
                let valArr = val.split('.');
                if (valArr.length == 1){
                    o = window[valArr[0]]
                }else if(valArr.length == 2){
                    o = window[valArr[0]][valArr[1]]
                }else if (valArr.length == 3){
                    o = window[valArr[0]][valArr[1]][valArr[2]]
                }
                if(typeof o === 'undefined'){
                    console.log(valArr);
                    hasAll = false;
                    return false;
                }
            });
            if(hasAll){
                clearInterval(timer);
                func()
            }
        }, 80);
    }
}