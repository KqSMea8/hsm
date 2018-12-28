class mytickets extends Page {
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.db = db;
            },
            compiled () {},
            data: {
                list:[],
                ticketTitle:[
                    {text:'',num:0,list:[],choose:true},
                    {text:'',num:0,list:[],choose:false},
                    {text:'',num:0,list:[],choose:false}
                ],
            },
            methods: {
                share(){
                    Message.toast('点击右上角，请分享给您的好友', 3);
                },
                init(){
                    Util.ajax('{}', `${db.data.api}getUserTicketList.php`, (data) => {
                        if(data.e !== 0){
                        }else{
                            let i=0;
                            for(var key in data.data){
                                if(data.data.hasOwnProperty(key)){
                                    this.ticketTitle[i].text = key;
                                    if(this.ticketTitle[i].list.length === 0){
                                        this.ticketTitle[i].list = JSON.parse(JSON.stringify(data.data[key]));
                                    }else{
                                        this.ticketTitle[i].list = data.data[key];
                                    }
                                    this.ticketTitle[i].num = this.ticketTitle[i].list.length;
                                    i++;
                                }
                            }
                        }
                    });
                },
                getDaydiff(end_time) {
                    var date1, date2, timeDiff;
                    if (!!end_time === false) end_time = "2018-12-28";

                    if (end_time.length > 11) {
                        end_time = end_time.substr(0, 10);
                    }

                    date1 = new Date();
                    date2 = new Date(end_time);
                    timeDiff = date2.getTime() - date1.getTime();
                    timeDiff = parseInt(timeDiff / 1000);
                    return Math.ceil(timeDiff / 86400);
                },
                useTicket(studio_name, status, isEnd){
                    if(status != 0){
                        return;
                    }

                    if(isEnd){
                        Message.toast('活动已经结束');
                        return;
                    }

                    var i;
                    var _this = this;
                    //今天是否有未付款 状态的 项目
                    Util.ajax('{}', db.data.api+'?r=user/has_unpay', function(data){
                        if(data[Api.CODE] === 0){
                            _this.jump('orderlist');
                            setTimeout(function(){
                                orderlist.vue.orderChoose(1);
                            },100);
                        }else{
                            for(i=0;i<db.data.studioList.length;i++){
                                if(db.data.studioList[i].name.trim() === studio_name.trim()){
                                    db.data.detail_studio_index = i;
                                    _this.jump('detail_studio');
                                }
                            }
                        }
                    });
                },
                orderChoose(index){
                    let i;
                    for(i=0;i<this.ticketTitle.length;i++){
                        this.ticketTitle[i].choose = false;
                    }
                    this.ticketTitle[index].choose = true;
                },
            }
        });
    }
}
//////////