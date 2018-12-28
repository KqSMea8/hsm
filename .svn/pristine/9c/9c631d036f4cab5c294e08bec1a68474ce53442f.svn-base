class JmUtil{
    static loadJs(url, func){
        let script = document.createElement("script");
        script.setAttribute("src", url);
        document.body.appendChild(script);
        script.onload = function () {
            func();
        };

    }
    static ajax(dataStr = '{}', url, success, method = 'post'){
        let data = this.getJsonObj(dataStr);
        $.ajax({ type: method, url: url,
            data: data, dataType: 'json',
            success: function (data) {
                success(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
    static phoneCommand(func,callBack){
        if(func === "log"){
            console.log(callBack);
        }
        if(typeof callBack === 'undefined')
            callBack = '';
        let url = "function://" + JmUtil.base64encode(func+'-'+callBack);
        let random = (Math.random()+"").substr(3,8);
        let id = `id_${random}`;
        $('body').append('<iframe id="'+id+'" class="disn" src="'+url+'"></iframe>');
        setTimeout(function(){
            $('#'+id).remove();
        },100);
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
        for (key in obj){
            if(obj.hasOwnProperty(key)){
                ret = func.call(this, obj[key], key);//回调函数
                if (ret === false) break;
            }
        }
    }
    static clone(obj){
        let o;
        if (obj.constructor === Object)
            o = new obj.constructor();
        else
            o = new obj.constructor(obj.valueOf());
        let key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (o[key] !== obj[key]) {
                    if (typeof (obj[key]) === 'object')
                        o[key] = this.clone(obj[key]);
                    else
                        o[key] = obj[key];
                }
            }
        }
        o.toString = obj.toString;
        o.valueOf = obj.valueOf;
        return o;
    }
    static getFileName(str){
        let arr = str.split('/');
        return arr[arr.length - 1].split('.')[0];
    }
    static isMobileNumber(tel){
        if (!tel)
            return false;
        let telReg = !!tel.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
        return (telReg !== false);
    }
    static checkTwoPassword(password, password1){
        let allIsNumber = /^[0-9]{1,20}$/; //纯数字
        let allIsEn = /^[a-zA-Z]{1,20}$/; //纯数字
        let hasSpecial = /[^0-9a-zA-Z]/; //除英文和数字
        let six = /.{6,}/; //六位以上
        if (allIsNumber.exec(password) || allIsEn.exec(password) || hasSpecial.exec(password) || !six.exec(password))
            return ("密码为6位以上，带字母和数字！");
        if (password !== password1)
            return ("两次输入的密码不一致！");
        return true;
    }
    static getLastChar(str){
        str = str.trim();
        return str.substr(str.length - 1, str.length);
    }
    static getJsonObj(str){
        return eval('(' + str + ')');
    }
    static isWeChat(){
        return !!(window.navigator.userAgent.match(/MicroMessenger/i));
    }
    static isIos(){
        let ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua))
            return true;
        else if (/android/.test(ua))
            return false;
        return false;
    }
    static isAndroid(){
        let ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua))
            return false;
        else if (/android/.test(ua))
            return true;
        return true;
    }
    static hasObjKey(obj){
        let using;
        for (using in obj)
            if (obj.hasOwnProperty(using))
                return obj[using];
        return false;
    }
    static in_array(arr, val){
        let i;
        for (i = 0; i < arr.length; i++)
            if (arr[i] === val)
                return true;
        return false;
    }
    static addZero(int, num){
        let string = int + '',ling = '',i,dif;
        if (string.length < num) {
            dif = num - string.length;
            for (i = 0; i < dif; i++)
                ling += '0';
        }
        return (ling + string);
    }
    static getCubicBezier(points, begin, end) {
        let arr = points.split(',');
        return new CubicBezier([parseFloat(arr[0]),parseFloat(arr[1])],[parseFloat(arr[2]),parseFloat(arr[3])],begin,end);
    }
    static base64encode(s){
        let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        function utf16to8(str) {
            let out, i, len, c;
            out = "";
            len = str.length;
            for(i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if ((c >= 0x0001) && (c <= 0x007F)) {
                    out += str.charAt(i);
                } else if (c > 0x07FF) {
                    out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                    out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
                } else {
                    out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));
                    out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));
                }
            }
            return out;
        }
        function encode(str) {
            let out, i, len;
            let c1, c2, c3;
            len = str.length;
            i = 0;
            out = "";
            while(i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if(i === len)
                {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if(i === len)
                {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3)<< 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >>6));
                out += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        }
        return encode(utf16to8(s));
    }

    static base64decode(s){
        let base64DecodeChars = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
        function decode(str) {
            let c1, c2, c3, c4;
            let i, len, out;
            len = str.length;
            i = 0;
            out = "";
            while(i < len) {

                do {
                    c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while(i < len && c1 === -1);
                if(c1 === -1)
                    break;

                do {
                    c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
                } while(i < len && c2 === -1);
                if(c2 === -1)
                    break;
                out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

                do {
                    c3 = str.charCodeAt(i++) & 0xff;
                    if(c3 === 61)
                        return out;
                    c3 = base64DecodeChars[c3];
                } while(i < len && c3 === -1);
                if(c3 === -1)
                    break;
                out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

                do {
                    c4 = str.charCodeAt(i++) & 0xff;
                    if(c4 === 61)
                        return out;
                    c4 = base64DecodeChars[c4];
                } while(i < len && c4 === -1);
                if(c4 === -1)
                    break;
                out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
            }
            return out;
        }
        function utf8to16(str) {
            let out, i, len, c;
            let char2, char3;
            out = "";
            len = str.length;
            i = 0;
            while(i < len) {
                c = str.charCodeAt(i++);
                switch(c >> 4)
                {
                    case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                    // 0xxxxxxx
                    out += str.charAt(i-1);
                    break;
                    case 12: case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                    case 14:
                        // 1110 xxxx  10xx xxxx  10xx xxxx
                        char2 = str.charCodeAt(i++);
                        char3 = str.charCodeAt(i++);
                        out += String.fromCharCode(((c & 0x0F) << 12) |
                            ((char2 & 0x3F) << 6) |
                            ((char3 & 0x3F) << 0));
                        break;
                }
            }
            return out;
        }
        return utf8to16(decode(s))
    }
    static getDistance(lat1, lng1, lat2, lng2){
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
    static hasLoadJsCallBack(objArr,func=function(){}){
        objArr = (typeof objArr === 'string')? [objArr]:objArr;
        let str = '';
        objArr.forEach(function(obj){
            str += `typeof ${obj} !== 'undefined' &&`;
        });
        str = str.substr(0,str.length-2);
        let timer = setInterval(() => {
            if (eval(str)){
                clearInterval(timer);
                func();
            }
        }, 80);
    }
    static require(src){}
}
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
};
Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (let i = 0, n = 0; i < this.length; i++) {
        if (this[i] !== this[dx])
            this[n++] = this[i];
    }
    this.length -= 1;
};