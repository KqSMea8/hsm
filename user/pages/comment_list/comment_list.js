class comment_list extends Page {
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created() {
                this.db = db;
                this.launcher = launcher.vue;
            },
            compiled() {
                let _this = this;
                $('.xxx').bind('touchstart',function(){
                    let diff = this.scrollHeight - this.scrollTop;
                    if(diff < 5*$('body').height()){
                        _this.addComments();
                    }
                });
            },
            data: {
                titles:[],
                title_index:0,
                getCount:0,
                start: {
                    1 : 0,
                    2 : 0,
                    3 : 0,
                    4 : 0,
                    5 : 0,
                },
                count:30,
                comments:{
                    1 : [],
                    2 : [],
                    3 : [],
                    4 : [],
                    5 : [],
                },
                nowStar : 5,
            },
            methods: {
                init (){
                    this.comments = {
                        1: [],
                        2: [],
                        3: [],
                        4: [],
                        5: []
                    };
                    this.titles = JSON.parse(JSON.stringify([
                        {star:5,count:db.data.score5,active:true},
                        {star:4,count:db.data.score4,active:false},
                        {star:3,count:db.data.score3,active:false},
                        {star:2,count:db.data.score2,active:false},
                        {star:1,count:db.data.score1,active:false}
                    ]));
                    this.getComments();
                },
                getComments(){
                    let dataStr = `{
                        "start":0,
                        "star":${this.nowStar},
                        "count":${this.comments[this.nowStar].length||this.count},
                        "bid":${db.data.nowBarberId},
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getBarberComments.php`, (data) => {
                        this.renderBarberComments(data);
                    });
                },
                addComments(){
                    let dataStr = `{
                        "start":${this.start[this.nowStar]},
                        "star":${this.nowStar},
                        "count":${this.count},
                        "bid":${db.data.nowBarberId},
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getBarberComments.php`, (data) => {
                        this.renderBarberComments(data,true);
                    });
                },
                renderBarberComments(data,isAppend=false){
                    if(data.e !== 0){

                    }else{
                        let obj = data.data;
                        if(obj.Comments.length>0){
                            this.start[this.nowStar] = obj.end;
                            if(this.comments[this.nowStar].length === 0){
                                this.comments[this.nowStar] = JSON.parse(JSON.stringify(obj.Comments));
                            }else{
                                if(isAppend){
                                    for(var comment of obj.Comments){
                                        this.comments[this.nowStar].push(comment);
                                    }
                                }else{
                                    this.comments[this.nowStar] = obj.Comments;
                                }
                            }
                        }
                    }
                    console.log(this.comments);
                },
                titleClick (index){
                    let i;
                    for(i=0;i<this.titles.length;i++){
                        if(index === i){
                            this.titles[i].active = true;
                            this.title_index = i;
                        }else{
                            this.titles[i].active = false;
                        }
                    }
                    this.nowStar = 5-index;
                    this.getComments();
                },
            }
        });
    }
}
//