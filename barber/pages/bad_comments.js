class bad_comments extends Page {
    constructor(hash) {
        let css =
            `
<style>
    #bad_comments_vue ,#comment_list_vue{background:#f0f0f0}
    #bad_comments_vue .bar,#comment_list_vue .bar{position:fixed;background:#fff;height:7%;z-index:99;font-size: 3vw;}
    #bad_comments_vue .bar td,#comment_list_vue .bar td{text-align:center}
    #bad_comments_vue .bar td.active,#comment_list_vue .bar td.active{border-bottom:solid 1px red;}
    #bad_comments_vue .bar img,#comment_list_vue .bar img{width:14%;}
    #bad_comments_vue .comment_box,#comment_list_vue .comment_box{background:#fff;width:94%;margin-left:3%;margin-bottom:3%;font-size: 3vw;}
    #bad_comments_vue .comment_line_1 td:nth-of-type(1),#comment_list_vue .comment_line_1 td:nth-of-type(1){width:5%;padding:3%}
    #bad_comments_vue .comment_line_1 td:nth-of-type(2),#comment_list_vue .comment_line_1 td:nth-of-type(2){width:10%}
    #bad_comments_vue .comment_line_1 td:nth-of-type(3),#comment_list_vue .comment_line_1 td:nth-of-type(3){width:10%;padding-right:4%}
    #bad_comments_vue .comment_line_1 td:nth-of-type(3) img,#comment_list_vue .comment_line_1 td:nth-of-type(3) img{width:10%;transform:scale(1.2)}
    #bad_comments_vue .comment_line_1 .head,#comment_list_vue .comment_line_1 .head{width:100%;border-radius:50%}
    #bad_comments_vue .content,#comment_list_vue .content{padding:0 4% 3%;word-break:break-all}
    #bad_comments_vue .image,#comment_list_vue .image{padding:0 3% 3%}
    #bad_comments_vue .image img,#comment_list_vue .image img{width:30%;margin-right:3%;}
    #bad_comments_vue .time,#comment_list_vue .time{color:#aaa;padding:0 3% 2%}
    #bad_comments_vue .box_box,#comment_list_vue .box_box{height: 93%;overflow: scroll;margin-top: 12%;padding-top: 3%;}
    #bad_comments_vue div{display:block;}
</style>
`;
        let html =
            `
<div class="scroll bad_comments pos_r h100">
    <p style="font-size: 4vw;padding: 2% 5%;margin: 0;color: #777;">
        差评列表
    </p>
    <div class="comment_box" v-for="comment in comments">
        <table class="comment_line_1">
            <tr>
                <td>
                    <img class="head" :src="comment.userAvt" />
                </td>
                <td>
                    <span>{{comment.userName}}</span><br/>
                    <span>{{comment.userPhone}}</span>
                </td>
                <td class="txtr">
                    <span>&nbsp;</span><br/>
                    <img v-for="gold in comment.goldStar" :src="db.data.oss+'barber/images/start_orange.svg'"/>
                    <img v-for="gray in comment.grayStar" :src="db.data.oss+'barber/images/start_gray.svg'"/>
                    <span>{{comment.goldStar}}.0分</span>
                </td>
            </tr>
        </table>
        <div class="content">
            {{comment.content}}
        </div>
        <div class="image" v-if="comment.img.length > 0">
            <img @click="launcher.look(comment.img.join('|'), opu)" v-for="opu in comment.img" :src="opu">
        </div>
        <div class="time w100 txtr">
            发型师:{{comment.barberName}} &nbsp;&nbsp;{{comment.create_time}}
        </div>
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
                var obj = $('.bad_comments');
                obj.on('touchstart', () => {
                    if (obj[0].scrollHeight - obj.scrollTop() < 7 * $('body').height()) {
                        let dataStr = `{
                            "start":${this.start},
                            "count":${this.count}
                        }`;
                        Util.ajax(dataStr, `${db.data.api}getBadCommentsList.php`, (data) => {
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
                    Util.ajax(dataStr, `${db.data.api}getBadCommentsList.php`, (data) => {
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

////////