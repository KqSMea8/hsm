"use strict";

function VueP(obj) {
    obj.methods.jump = function (hash) {
        app.jump2(hash);
    };
    obj.methods.change = function (val) {
        console.log("this." + val + " = !this." + val + ";");
        eval("this." + val + " = !this." + val + ";");
    };
    obj.methods.empty = function (val) {
        console.log("this." + val + " = '';");
        eval("this." + val + " = '';");
    };
    obj.methods.falseVal = function (val) {
        eval("this." + val + " = false;");
    };
    return new Vue(obj);
}
//# sourceMappingURL=VueP.js.map