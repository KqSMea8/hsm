'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageBarber = function () {
    function MessageBarber() {
        _classCallCheck(this, MessageBarber);
    }

    _createClass(MessageBarber, null, [{
        key: 'alert',
        value: function alert(message) {
            this.dialog('提示', message, '取消', '确定', function () {
                Message.removeDialog();
            }, function () {
                Message.removeDialog();
            });
        }
    }, {
        key: 'confirm',
        value: function confirm(message, func) {
            this.dialog('提示', message, '取消', '确定', function () {
                Message.removeDialog();
            }, function () {
                func();

                Message.removeDialog();
            });
        }
    }, {
        key: 'upload',
        value: function upload(message) {
            this.upload1('提示', message, '取消', '确定', function () {
                Message.removeDialog();
            }, function () {
                Message.removeDialog();
            });
        }
    }, {
        key: 'upload1',
        value: function upload1(title, message, button1, button2, func1, func2) {
            var html = '\n        <div id="all_notice" class="pos_a h100 w100" style="z-index:9999;transition:opacity .4s ease;">\n            <div id="all_notice_cover" class="pos_a w100 h100" style="background:#000;opacity:0.3"></div>\n            <div class="pos_r w100 h100" style="display:flex;justify-content: center;align-items: center">\n                <table style="width: 80%;background: #fff">\n                    <tr>\n                        <td class="txtc" colspan="2" style="color: #000;font-weight:600;padding: 4%;\n    font-size: 5vw;\n    border-bottom: 1px solid #ddd;">' + title + '</td>\n                    </tr>\n                     <tr>\n                        <td class="txtc" colspan="2" style="    color: #000;\n    padding: 6% 9% 9% 9%;\n    font-size: 4vw">' + message + '</td>\n                    </tr>\n                     <tr>\n                      <td class="txtc pos_r" id="all_notice_button1" style="color:#666;font-size:4vw;border-top: solid 1px #ddd;padding: 4%;">' + button1 + '</td>\n                        <td class="txtc pos_r" id="all_notice_button2" style="background: red;color:#fff;font-size:4vw;padding: 4%;">' + button2 + '\n                        <input style="position:absolute;width:100%;height:100%;opacity:0;left:0;top:0;" type="file" onchange="index.vue.imgChange(this)" />\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>  \n';
            Message.dialog(title, message, button1, button2, func1, func2, html);
        }
    }, {
        key: 'dialog',
        value: function dialog(title, message, button1, button2, func1, func2) {
            var html = '\n        <div id="all_notice" class="pos_a h100 w100" style="z-index:9999;transition:opacity .4s ease;">\n            <div id="all_notice_cover" class="pos_a w100 h100" style="background:#000;opacity:0.3"></div>\n            <div class="pos_r w100 h100" style="display:flex;justify-content: center;align-items: center">\n                <table style="width: 80%;background: #fff">\n                    <tr>\n                        <td class="txtc" colspan="2" style="color: #000;font-weight:600;padding: 4%;\n    font-size: 5vw;\n    border-bottom: 1px solid #ddd;">' + title + '</td>\n                    </tr>\n                     <tr>\n                        <td class="txtc" colspan="2" style="    color: #000;\n    padding: 6% 9% 9% 9%;\n    font-size: 4vw">' + message + '</td>\n                    </tr>\n                     <tr>\n                      <td class="txtc" id="all_notice_button1" style="color:#666;font-size:4vw;border-top: solid 1px #ddd;padding: 4%;">' + button1 + '</td>\n                        <td class="txtc" id="all_notice_button2" style="background: red;color:#fff;font-size:4vw;padding: 4%;">' + button2 + '</td>\n                    </tr>\n                </table>\n            </div>\n        </div>  \n';
            Message.dialog(title, message, button1, button2, func1, func2, html);
        }
    }, {
        key: 'dialogForSystemOutside',
        value: function dialogForSystemOutside(title, message, button1, button2, func1, func2) {
            var html = '\n        <div id="all_notice" class="pos_a h100 w100" style="z-index:9999;transition:opacity .4s ease;">\n            <div id="all_notice_cover" class="pos_a w100 h100" style="background:#000;opacity:0.3"></div>\n            <div class="pos_r w100 h100" style="display:flex;justify-content: center;align-items: center;padding-top: 10%;">\n                <table style="width: 80%;background: #fff">\n                    <tr>\n                        <td class="txtc" colspan="2" style="color: #000;font-weight:600;padding: 4%;\n    font-size: 5vw;\n    border-bottom: 1px solid #ddd;">' + title + '</td>\n                    </tr>\n                     <tr>\n                        <td class="txtc" colspan="2" style="    color: #000;\n    padding: 6% 9% 9% 9%;\n    font-size: 4vw">' + message + '</td>\n                    </tr>\n                     <tr>\n                      <td class="txtc" id="all_notice_button1" style="color:#666;font-size:4vw;border-top: solid 1px #ddd;padding: 4%;">' + button1 + '</td>\n                        <td class="txtc" id="all_notice_button2" style="background: red;color:#fff;font-size:4vw;padding: 4%;">' + button2 + '</td>\n                    </tr>\n                </table>\n            </div>\n        </div>  \n';
            Message.dialog(title, message, button1, button2, func1, func2, html);
        }
    }, {
        key: 'showTicket',
        value: function showTicket(title, ticketArr, button1, button2, func1, func2) {
            var i,
                ticketsHtml = '',
                ticket;
            var date1, date2, timeDiff, timeres;
            for (i = 0; i < ticketArr.length; i++) {
                ticket = ticketArr[i];
                if (!!ticket.end_time === false) ticket.end_time = "2018-12-28";
                if (ticket.end_time.length > 11) {
                    ticket.end_time = ticket.end_time.substr(0, 10);
                }
                date1 = new Date();
                date2 = new Date(ticket.end_time);
                timeDiff = date2.getTime() - date1.getTime();
                timeDiff = parseInt(timeDiff / 1000);
                timeres = Math.ceil(timeDiff / 86400);
                ticketsHtml += '\n    <table class="ticket" style="background:url(./images/bg-coupon.jpg);background-size:100% 100%">\n        <tr>\n            <td class="txtc"> \n                ' + db.data.strategies[Math.floor(ticket.did)].discount + '\n            </td>\n            <td>\n                <b style="font-size:18px">\uFFE5</b><br/>\n                \u4F7F\u7528\u8303\u56F4\uFF1A' + ticket.studio + '&nbsp;&nbsp;\u8BE6\u7EC6><br/>\n                \u6709\u6548\u671F\u81F3' + (ticket.end_time ? '2018-12-30' : ticket.end_time.substr(0, 10)) + '(\u5269\n                ' + timeres + '\n                \u5929)\n            </td>\n            <td>\n                <div class="use" onclick="\n                tid = ' + ticket.id + ';\n                $(\'.use\').css(\'background\',\'none\');\n                $(this).css(\'background\',\'#fff\')">\n                    \u4F7F\u7528\n                </div>\n            </td>\n        </tr>\n    </table>\n';
            }

            var html = '\n        <table id="all_notice" style="transition:all 0.4s ease;height: 80%;width: 80%;z-index: 9999;position: absolute;opacity: 1;top: 10%;left: 10%;">\n            <tr>\n                <td style="background:#fff;">\n                    <div style="    position: relative;width: 100%;height: 100%;">\n                        <table style="height:10%;width:100%;">\n                            <tr>\n                                <td>\n                                ' + title + '\n                                </td>\n                            </tr>\n                        </table>\n                        <div class="main">\n                            ' + ticketsHtml + '\n                        </div>\n                        <table style="width: 100%;height: 10%;">\n                            <tr>\n                                <td id="all_notice_button1" class="txtc" style="width: 50%;font-size: 16px;background: red;color: white;">' + button1 + '</td>\n                                <td id="all_notice_button2" class="txtc" style="width: 50%;border-top:solid 1px #ddd;padding:4%;font-size:16px;color:#666;">' + button2 + '</td>\n                            </tr>\n                        </table>\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <div id="all_notice_cover" style="left:0;top:0;z-index:999;position:absolute;height: 100%;width: 100%;background-color: #000000;opacity: 0.6;"></div>\n';

            Message.dialog(title, '', button1, button2, func1, func2, html);
        }
    }]);

    return MessageBarber;
}();
