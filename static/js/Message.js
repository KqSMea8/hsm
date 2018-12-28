class Message{
    static getToast () {
        return $("#toast");
    };
    static toast (str, time) {
        if (!!time === false) { time = 2; }
        if (this.toastTimer !== -1) {
            clearTimeout(this.toastTimer);
            this.toastTimer = -1;
            this.getToast().remove();
        }
        let $window = $(window);
        $("body").append('<div id="toast" style="position: fixed;opacity:0;height:auto;z-index:999;max-width:' + $window.width() * 0.7 + 'px;transition:opacity .3s ease;">' +
            '<div class="pos_a w100 h100" style="background:#000;opacity:.8"></div>' +
            '<table class="w100 h100 pos_r">' +
            '<tr>' +
            '<td style="color:#fff;padding:5px 17px;font-size: 4vw">' + str + '</td>' +
            '</tr>' +
            '</table>' +
            '</div>');
        let toast = this.getToast();
        toast.css('left', ($(window).width() - toast.width()) * 0.5);
        toast.css('top', ($(window).height() * 0.8));
        toast.show();
        setTimeout(function () {
            toast.css({ opacity: 1 });
        }, 20);
        this.toastTimer = setTimeout(function () {
            toast.css("opacity", 0);
            setTimeout(function () {
                toast.remove();
            }, 500);
        }, (time || 2) * 1000);
    };
    static getDialog () {
        return $("#all_notice");
    };
    static getDialogCover () {
        return $("#all_notice_cover");
    };

    static dialog (title, message, button1, button2, func1, func2, html) {
        let dialog = this.getDialog();
        let dialogCover = this.getDialogCover();
        if (!!dialog.html() !== false) {
            dialog.remove();
            dialogCover.remove();
        }
        if(html){
            $("body").append(html);
        }else{
            $("body").append('<div id="all_notice" style="transition:opacity .4s ease;overflow: hidden;background-color:#fff;z-index:9999;border-radius:10px;position:absolute;width:70%;left:0;right:0;top:0;bottom:0;margin:auto;opacity:0;height:186px;padding: 0;">' +
                '<div class="w100 pos_r" style="margin: 0;padding: 0;height: 120px">' +
                '<h1 class="txtc clbl" style="font-size: 131%;font-weight: 600;padding: 2% 0;">' + title + '</h1>' +
                '<p class="txtc clbl c w100" style="margin: 55px auto auto auto;padding:0 10%;position: relative;line-height: 21px;font-size: 15px;word-break: break-all;">' + message + '</p>' +
                '</div>' +
                '<div class="w50 fl txtc" id="all_notice_button1" style="height:45px;padding: 4%;font-size: 18px;color: #ccf;border-top: solid 1px #ddd;border-right: solid 1px #ddd;"><a>' + button2 + '</a></div>' +
                '<div class="w50 fl txtc" id="all_notice_button2" style="height:45px;border-top: solid 1px #ddd;padding: 4%;font-size: 18px;color: #ccf;"><a>' + button1 + '</a></div>' +
                '</div>' +
                '<div id="all_notice_cover" style="left:0;top:0;z-index:999;position:absolute;height: 100%;width: 100%;background-color: #000000;opacity: 0.6;"></div>');
        }

        dialog = this.getDialog();
        dialogCover = this.getDialogCover();
        // var p = dialog.find("p");
        // p.css({
        //     'height': p.height() + 'px',
        //     'position': 'absolute'
        // });
        // dialog.find('div.pos_r').css('height', p.height()+70);
        // dialog.css('height', p.height()+115);
        setTimeout(function () {
            dialog.css({
                "opacity": "1"
            });
        }, 100);
        this.hasDialog = true;
        dialog.find("#all_notice_button1").on("click", func1);
        dialog.find("#all_notice_button2").on("click", func2);
        dialogCover.on("click", function () {
            Message.removeDialog();
        });
    };

    static dialogForUserImg(html, func1, func2, fun3) {
        let dialog = this.getDialog();
        let dialogCover = this.getDialogCover();
        if (!!dialog.html() !== false) {
            dialog.remove();
            dialogCover.remove();
        }
        if (html) {
            $("body").append(html);
        }

        dialog = this.getDialog();
        dialogCover = this.getDialogCover();
        setTimeout(function () {
            dialog.css({
                "opacity": "1"
            });
        }, 100);
        this.hasDialog = true;
        dialog.find("#all_notice_button1").on("click", func1);
        dialog.find("#all_notice_button2").on("click", func2);
        dialog.find("#all_notice_img").on("click", fun3);
        dialogCover.on("click", function () {
            Message.removeDialog();
        });
    };

    static removeDialog () {
        let dialog = this.getDialog();
        let dialogCover = this.getDialogCover();
        Message.hasDialog = false;
        dialog.css({
            //"transform": "scale(.9)",
            "opacity": "0"
        });
        setTimeout(function () {
            dialog.remove();
            dialogCover.remove();
        }, 390);
    };
    static showLoad (obj) {
        obj.append('<div class="load pos_a h100 w100"><div class="cover h100 w100 pos_a"></div><div class="loading"><span>历史消息数据加载中</span><ul class="spinner"><li></li><li></li><li></li><li></li></ul></div></div>');
    };
    static showWait (str) {
        this.removeWait();
        let template = '<div id="waitTip" class="pos_a w100 h100 t0 l0" style="z-index: 999;">' +
            // '<img class="pos_a w100 h100 t0 l0" src="./img/s.png" />'+
            '<div class="content c pos_a" style="border-radius: 15px;width: 100px;height: 100px;">' +
            '<div class="pos_a w100 t0 l0" style="border-radius: 15px;background-color:#000;opacity:0.7;height:100%"></div>' +
            '<div class="pos_a t0 l0 w100 h70">' +
            '</div>' +
            '<div class="pos_a b0 l0 w100 h30 txtc clwh">' +
            str +
            '</div>' +
            '</div>' +
            '</div>';
        $('body').append(template);
        let opts = {
            lines: 13, // The number of lines to draw
            length: 28, // The length of each line
            width: 14, // The line thickness
            radius: 48, // The radius of the inner circle
            scale: 0.25, // Scales overall size of the spinner
            corners: 1, // Corner roundness (0..1)
            color: '#fff', // #rgb or #rrggbb or array of colors
            opacity: 0.25, // Opacity of the lines
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            speed: 1.1, // Rounds per second
            trail: 60, // Afterglow percentage
            fps: 20, // Frames per second when using setTimeout() as a fallback for CSS
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            className: 'spinner', // The CSS class to assign to the spinner
            top: '50%', // Top position relative to parent
            left: '50%', // Left position relative to parent
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            position: 'absolute' // Element positioning
        };
        let spinner = new Spinner(opts).spin();
        $('#waitTip').find('div.h70').append(spinner.el);
    };
    static removeWait () {
        try {
            $('#waitTip').remove();
        }catch (e) { }
    };
}
Message.toastTimer = -1;
Message.hasDialog = false;