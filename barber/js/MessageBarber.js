
class MessageBarber{
    static alert(message){
        this.dialog('提示', message, '取消', '确定', function(){
            Message.removeDialog();
        },function(){
            Message.removeDialog();
        });
    }



    static confirm(message, func){
        this.dialog('提示', message, '取消', '确定', function(){
            Message.removeDialog();
        },function(){
            func();

            Message.removeDialog();
        });
    }

    static upload(message){
        this.upload1('提示', message, '取消', '确定', function(){
            Message.removeDialog();
        },function(){
            Message.removeDialog();
        });
    }
    static upload1(title, message, button1, button2, func1, func2){
        let html =
            `
        <div id="all_notice" class="pos_a h100 w100" style="z-index:9999;transition:opacity .4s ease;">
            <div id="all_notice_cover" class="pos_a w100 h100" style="background:#000;opacity:0.3"></div>
            <div class="pos_r w100 h100" style="display:flex;justify-content: center;align-items: center">
                <table style="width: 80%;background: #fff">
                    <tr>
                        <td class="txtc" colspan="2" style="color: #000;font-weight:600;padding: 4%;
    font-size: 5vw;
    border-bottom: 1px solid #ddd;">${title}</td>
                    </tr>
                     <tr>
                        <td class="txtc" colspan="2" style="    color: #000;
    padding: 6% 9% 9% 9%;
    font-size: 4vw">${message}</td>
                    </tr>
                     <tr>
                      <td class="txtc pos_r" id="all_notice_button1" style="color:#666;font-size:4vw;border-top: solid 1px #ddd;padding: 4%;">${button1}</td>
                        <td class="txtc pos_r" id="all_notice_button2" style="background: red;color:#fff;font-size:4vw;padding: 4%;">${button2}
                        <input style="position:absolute;width:100%;height:100%;opacity:0;left:0;top:0;" type="file" onchange="index.vue.imgChange(this)" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>  
`;
        Message.dialog(title, message, button1, button2, func1, func2, html);
    }

    static dialog(title, message, button1, button2, func1, func2){
        var html =
            `
        <div id="all_notice" class="pos_a h100 w100" style="z-index:9999;transition:opacity .4s ease;">
            <div id="all_notice_cover" class="pos_a w100 h100" style="background:#000;opacity:0.3"></div>
            <div class="pos_r w100 h100" style="display:flex;justify-content: center;align-items: center">
                <table style="width: 80%;background: #fff">
                    <tr>
                        <td class="txtc" colspan="2" style="color: #000;font-weight:600;padding: 4%;
    font-size: 5vw;
    border-bottom: 1px solid #ddd;">${title}</td>
                    </tr>
                     <tr>
                        <td class="txtc" colspan="2" style="    color: #000;
    padding: 6% 9% 9% 9%;
    font-size: 4vw">${message}</td>
                    </tr>
                     <tr>
                      <td class="txtc" id="all_notice_button1" style="color:#666;font-size:4vw;border-top: solid 1px #ddd;padding: 4%;">${button1}</td>
                        <td class="txtc" id="all_notice_button2" style="background: red;color:#fff;font-size:4vw;padding: 4%;">${button2}</td>
                    </tr>
                </table>
            </div>
        </div>  
`;
        Message.dialog(title, message, button1, button2, func1, func2, html);
    }

    static dialogForSystemOutside(title, message, button1, button2, func1, func2) {
        var html =
            `
        <div id="all_notice" class="pos_a h100 w100" style="z-index:9999;transition:opacity .4s ease;">
            <div id="all_notice_cover" class="pos_a w100 h100" style="background:#000;opacity:0.3"></div>
            <div class="pos_r w100 h100" style="display:flex;justify-content: center;align-items: center;padding-top: 10%;">
                <table style="width: 80%;background: #fff">
                    <tr>
                        <td class="txtc" colspan="2" style="color: #000;font-weight:600;padding: 4%;
    font-size: 5vw;
    border-bottom: 1px solid #ddd;">${title}</td>
                    </tr>
                     <tr>
                        <td class="txtc" colspan="2" style="    color: #000;
    padding: 6% 9% 9% 9%;
    font-size: 4vw">${message}</td>
                    </tr>
                     <tr>
                      <td class="txtc" id="all_notice_button1" style="color:#666;font-size:4vw;border-top: solid 1px #ddd;padding: 4%;">${button1}</td>
                        <td class="txtc" id="all_notice_button2" style="background: red;color:#fff;font-size:4vw;padding: 4%;">${button2}</td>
                    </tr>
                </table>
            </div>
        </div>  
`;
        Message.dialog(title, message, button1, button2, func1, func2, html);
    }

    static showTicket(title, ticketArr, button1, button2, func1, func2){
        var i,ticketsHtml='',ticket;
        var date1,date2,timeDiff,timeres;
        for(i=0;i<ticketArr.length;i++){
            ticket = ticketArr[i];
            if(!!ticket.end_time === false)
                ticket.end_time = "2018-12-28";
            if(ticket.end_time.length >11){
                ticket.end_time = ticket.end_time.substr(0,10);
            }
            date1 = new Date();
            date2 = new Date(ticket.end_time);
            timeDiff = date2.getTime()-date1.getTime();
            timeDiff = parseInt(timeDiff/1000);
            timeres = Math.ceil(timeDiff/86400);
            ticketsHtml += `
    <table class="ticket" style="background:url(./images/bg-coupon.jpg);background-size:100% 100%">
        <tr>
            <td class="txtc"> 
                ${db.data.strategies[Math.floor(ticket.did)].discount}
            </td>
            <td>
                <b style="font-size:18px">￥</b><br/>
                使用范围：${ticket.studio}&nbsp;&nbsp;详细><br/>
                有效期至${(ticket.end_time)?('2018-12-30'):ticket.end_time.substr(0,10)}(剩
                ${timeres}
                天)
            </td>
            <td>
                <div class="use" onclick="
                tid = ${ticket.id};
                $('.use').css('background','none');
                $(this).css('background','#fff')">
                    使用
                </div>
            </td>
        </tr>
    </table>
`;
        }

        var html =
            `
        <table id="all_notice" style="transition:all 0.4s ease;height: 80%;width: 80%;z-index: 9999;position: absolute;opacity: 1;top: 10%;left: 10%;">
            <tr>
                <td style="background:#fff;">
                    <div style="    position: relative;width: 100%;height: 100%;">
                        <table style="height:10%;width:100%;">
                            <tr>
                                <td>
                                ${title}
                                </td>
                            </tr>
                        </table>
                        <div class="main">
                            ${ticketsHtml}
                        </div>
                        <table style="width: 100%;height: 10%;">
                            <tr>
                                <td id="all_notice_button1" class="txtc" style="width: 50%;font-size: 16px;background: red;color: white;">${button1}</td>
                                <td id="all_notice_button2" class="txtc" style="width: 50%;border-top:solid 1px #ddd;padding:4%;font-size:16px;color:#666;">${button2}</td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
        <div id="all_notice_cover" style="left:0;top:0;z-index:999;position:absolute;height: 100%;width: 100%;background-color: #000000;opacity: 0.6;"></div>
`;

        Message.dialog(title, '', button1, button2, func1, func2, html);
    }
}