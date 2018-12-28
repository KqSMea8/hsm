class mysubscribe extends Page {
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.launcher = launcher.vue;
                this.db = db;
            },
            compiled () {

            },
            data: {
                titleBar:[
                    {text:'口碑发型师', status:false},
                    {text:'专注剪发店', status:true}
                ],
                studioList:[],
                barberList:[],
                studioStart:0,
                barberStart:0,
                count:30,
            },
            methods: {
                init(){
                    setTimeout(()=>{
                        this.launcher.showAndHideCover($(this.$el));
                    },100);

                    let dataStr = `{
                        "lon":"${db.data.user.lon}",
                        "lat":"${db.data.user.lat}",
                        "start":0,
                        "count":"${this.studioList.length||this.count}",
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getUserSubscribeStudioList.php`, (data) => {
                        this.renderUserSubscribeStudioList(data);
                        let dataStr = `{
                            "lon":"${db.data.user.lon}",
                            "lat":"${db.data.user.lat}",
                            "start":0,
                            "count":${this.barberList.length||this.count},
                        }`;
                        Util.ajax(dataStr, `${db.data.api}getUserSubscribeBarberList.php`, (data) => {
                            this.renderUserSubscribeBarberList(data);
                        });
                    });

                },
                renderUserSubscribeStudioList(data){
                    if(data.e !== 0){

                    }else{
                        if(!!data.data[0]){
                            this.studioList = [];
                            for(var key in data.data){
                                if(Math.floor(key) < 100){
                                    for(var k in data.data[key].srv){
                                        data.data[key].srv = k;
                                        break;
                                    }
                                    if(this.studioList.length === 0){
                                        this.studioList = JSON.parse(JSON.stringify([
                                            data.data[key]
                                        ]));
                                    }else{
                                        this.studioList.push(data.data[key]);
                                    }
                                }
                            }
                            this.studioStart = data.data.nextStart;
                        }
                    }
                },
                renderUserSubscribeBarberList(data){
                    if(data.e !== 0){

                    }else{
                        if(!!data.data[0]){
                            this.barberList = [];
                            for(var key in data.data){
                                if(Math.floor(key) < 100){
                                    if(this.barberList.length === 0){
                                        this.barberList = JSON.parse(JSON.stringify([
                                            data.data[key]
                                        ]));
                                    }else{
                                        this.barberList.push(data.data[key]);
                                    }
                                }
                            }
                            this.barberStart = data.data.nextStart;
                        }
                    }
                },
                titleItemClick(index){
                    if(!this.titleBar[index].status){
                        var length,i;
                        length = this.titleBar.length;
                        for(i=0;i<length;i++){
                            if(index != i){
                                this.titleBar[i].status = false;
                            }
                        }
                        this.titleBar[index].status = true;
                    }
                }
            }
        });
    }
}