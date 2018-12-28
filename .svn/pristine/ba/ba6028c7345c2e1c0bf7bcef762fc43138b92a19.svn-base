class latest_comment extends Page{
    constructor (hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created() {
                this.db = db;
                this.launcher = launcher.vue;
                this.init();
            },
            compiled () {
                var obj = $('.latest_comment');
                obj.on('touchstart',()=>{
                    if(obj[0].scrollHeight - obj.scrollTop() < 7*$('body').height()){
                        let dataStr = `{
                            "start":${this.start},
                            "count":${this.count},
                            "sid":${db.data.nowStudioId},
                        }`;
                        Util.ajax(dataStr, `${db.data.api}getStudioComments.php`, (data) => {
                            this.renderStudioComments(data,true);
                        });
                    }
                });
            },
            data: {
                start:0,
                count:30,
                comments:[],
                newestComments: []
            },
            methods: {
                init(){
                    this.comments = [];
                    let dataStr = `{
                        "start":0,
                        "count":${this.comments.length||this.count},
                        "sid":${db.data.nowStudioId},
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getStudioComments.php`, (data) => {
                        this.renderStudioComments(data);
                    });
                },
                renderStudioComments(data,isAppend=false){
                    if(data.e !== 0){

                    }else{
                        let obj = data.data;
                        if(obj.Comments.length>0){
                            this.start = obj.end;
                            if(this.comments.length === 0){
                                this.comments = JSON.parse(JSON.stringify(obj.Comments));
                            }else{
                                if(isAppend){
                                    for(var comment of obj.Comments){
                                        this.comments.push(comment);
                                    }
                                }else{
                                    this.comments = obj.Comments;
                                }
                            }
                        }

                        if (obj.newestComments.length > 0) {
                            if (this.newestComments.length === 0) {
                                this.newestComments = JSON.parse(JSON.stringify(obj.newestComments));
                            } else {
                                this.newestComments = obj.newestComments;
                            }
                        }
                    }
                }
            }
        });
    }
}
//////