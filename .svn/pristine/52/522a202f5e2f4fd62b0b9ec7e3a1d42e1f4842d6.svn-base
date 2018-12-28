class drain_guest_days extends Page {
    constructor(hash) {
        let css =
            `
<style>
    #drain_guest_days_vue ,#comment_list_vue{background:#f0f0f0}
    #drain_guest_days_vue .bar,#comment_list_vue .bar{position:fixed;background:#fff;height:7%;z-index:99;font-size: 3vw;}
    #drain_guest_days_vue .bar td,#comment_list_vue .bar td{text-align:center}
    #drain_guest_days_vue .bar td.active,#comment_list_vue .bar td.active{border-bottom:solid 1px red;}
    #drain_guest_days_vue .bar img,#comment_list_vue .bar img{width:14%;}
    #drain_guest_days_vue .comment_box,#comment_list_vue .comment_box{background:#fff;width:94%;margin-left:3%;margin-bottom:3%;font-size: 3vw;}
    #drain_guest_days_vue .comment_line_1 td:nth-of-type(1),#comment_list_vue .comment_line_1 td:nth-of-type(1){width:5%;padding:3%}
    #drain_guest_days_vue .comment_line_1 td:nth-of-type(2),#comment_list_vue .comment_line_1 td:nth-of-type(2){width:10%}
    #drain_guest_days_vue .comment_line_1 td:nth-of-type(3),#comment_list_vue .comment_line_1 td:nth-of-type(3){width:10%;padding-right:4%}
    #drain_guest_days_vue .comment_line_1 td:nth-of-type(3) img,#comment_list_vue .comment_line_1 td:nth-of-type(3) img{width:10%;transform:scale(1.2)}
    #drain_guest_days_vue .comment_line_1 .head,#comment_list_vue .comment_line_1 .head{width:100%;border-radius:50%}
    #drain_guest_days_vue .content,#comment_list_vue .content{padding:0 4% 3%;word-break:break-all}
    #drain_guest_days_vue .image,#comment_list_vue .image{padding:0 3% 3%}
    #drain_guest_days_vue .image img,#comment_list_vue .image img{width:30%;margin-right:3%;}
    #drain_guest_days_vue .time,#comment_list_vue .time{color:#aaa;padding:0 3% 2%}
    #drain_guest_days_vue .box_box,#comment_list_vue .box_box{height: 93%;overflow: scroll;margin-top: 12%;padding-top: 3%;}
    #drain_guest_days_vue div{display:block;}
</style>
`;
        let html =
            `
<div class="scroll drain_guest_days pos_r h100">
    <p style="font-size: 4vw;padding: 2% 5%;margin: 0;color: #777;">
        流失客历史记录
    </p>
    <div class="comment_box" v-for="comment in comments">
        <table class="comment_line_1">
            <tr>
                <td>
                    <span>天数范围</span><br/>
                    <span>{{comment.range_days}}</span>
                </td>
                <td>
                    <span>流失客</span><br/>
                    <span>{{comment.drain_guest}}</span>
                </td>
            </tr>
        </table>
        <!--<div class="time w100 txtr">
            {{comment.yearMonth}}
        </div>-->
    </div>
</div>
`;
        super(hash, html, css);
    }

    vue_() {
        this.vue = new VueP({
            el: this.hash + '_vue',
            created() {
                this.db = db;
                this.launcher = launcher.vue;
                this.init();
            },
            compiled() {
                var obj = $('.drain_guest_days');
                obj.on('touchstart', () => {
                    if (obj[0].scrollHeight - obj.scrollTop() < 7 * $('body').height()) {
                        let dataStr = `{
                            "start":${this.start},
                            "count":${this.count}
                        }`;
                        Util.ajax(dataStr, `${db.data.api}getDrainGuestDaysList.php`, (data) => {
                            this.renderStudioComments(data, true);
                        });
                    }
                });
            },
            data: {
                start: 0,
                count: 30,
                comments: [],
            },
            methods: {
                init() {
                    this.comments = [];
                    let dataStr = `{
                        "start":0,
                        "count":${this.comments.length || this.count}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getDrainGuestDaysList.php`, (data) => {
                        this.renderStudioComments(data);
                    });
                },
                renderStudioComments(data, isAppend = false) {
                    if (data.e !== 0) {

                    } else {
                        let obj = data.data;
                        if (obj.Comments.length > 0) {
                            this.start = obj.end;
                            if (this.comments.length === 0) {
                                this.comments = JSON.parse(JSON.stringify(obj.Comments));
                            } else {
                                if (isAppend) {
                                    for (var comment of obj.Comments) {
                                        this.comments.push(comment);
                                    }
                                } else {
                                    this.comments = obj.Comments;
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}

//////