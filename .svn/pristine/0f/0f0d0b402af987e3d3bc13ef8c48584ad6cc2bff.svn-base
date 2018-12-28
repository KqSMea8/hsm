class ticket extends Page {
    constructor(hash) {
        super(hash, require('tpl.html'));
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.db = db;
                this.launcher = launcher.vue;
                let i;
                for (i = 1; i < m.pages.length; i++) {
                    m.addPage(m.pages[i]);
                }
            },
            compiled() {
            },
            data: {
                comments: [],
                ticket: null,
                barber: null,
                shekouImgArr: ['https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg'],
                pingzhouImgArr: ['https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg'],
                xiashaImgArr: ['https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg', 'https://wx-1253594735.cosgz.myqcloud.com/1253480904/upload/studio/20/image.jpg']
            },
            methods: {
                init() {
                    if (db.data.ticket_name) {
                        let dataStr = `{
                            "name" : "${db.data.ticket_name}"
                        }`;
                        Util.ajax(dataStr, `${db.data.api}getTicketInfo.php`, (json) => {
                            if (json.e !== 0) {
                            } else {
                                this.comments = json.data.comments;
                                this.ticket = json.data.ticket;
                            }
                        });
                    } else if (db.data.ticket_info) {
                        this.comments = db.data.ticket_info.comments;
                        this.ticket = db.data.ticket_info.ticket;
                        this.barber = db.data.ticket_info.barber;
                    }
                    Message.toast("加载中...", 0.5);
                },
                mytickets() {
                    this.jump('mytickets');
                },
                comment(id) {
                    db.data.nowBarberId = id;
                    let dataStr = `{
                            "lat":"${db.data.user.lat}",
                            "lon":"${db.data.user.lon}",
                            "bid":"${db.data.nowBarberId}",
                        }`;
                    Util.ajax(dataStr, `${db.data.api}getBarberDetail.php`, (data) => {
                        this.renderBarberStudio(data);
                    });
                    this.jump('comment_list');
                },
                renderBarberStudio(data) {
                    if (data.e !== 0) {

                    } else {
                        let obj = data.data;
                        if (this.barber === null) {
                            for (var k in obj.srv) {
                                obj.srvId = obj.srv[k];
                                obj.srv = k;
                                break;
                            }
                            this.barber = JSON.parse(JSON.stringify(obj));
                        } else {
                            this.barber = obj;
                        }
                        db.data.score1 = obj.score1;
                        db.data.score2 = obj.score2;
                        db.data.score3 = obj.score3;
                        db.data.score4 = obj.score4;
                        db.data.score5 = obj.score5;
                    }
                },
                look(currentImg, imgStr) {
                    var imgString = "";
                    imgString = imgStr + "";
                    var imgArr = imgString.split(",");
                    var urls = [];
                    for (var i = 0; i < imgArr.length; i++) {
                        var src = imgArr[i].trim();
                        if (!!src) {
                            urls.push(src);
                        }
                    }
                    if (urls.length <= 0) {
                        return;
                    } else {
                        wx.previewImage({
                            current: currentImg, // 当前显示图片的http链接
                            urls: urls // 需要预览的图片http链接列表
                        });
                    }
                }
            }
        });
    }
}

/////////////////////////////