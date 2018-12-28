class Main{
    constructor(){
        this.init()
    }
    init(){
        head.js([
            db.data.distDir + 'static/js/VueP.js' + time,
            db.data.distDir + 'admin/pages/Page.js' + time,
            db.data.distDir + 'admin/pages/index.js' + time
        ],function(){
            index = new index('index');
            setTimeout(()=>{
                index.vue.init()
            },100);
        })
    }
}