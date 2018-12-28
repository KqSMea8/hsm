class place extends Page {
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.init();
            },
            compiled () {},
            data: {},
            methods: {
                initData(){
                    var _this = this;
                    this.db = db;
                    setTimeout(function(){
                        launcher.vue.smooth(function(){
                            $(_this.$el).find('img').each(function(index, obj){
                                obj = $(obj);
                                var data_src = obj.attr('data-src');
                                if(data_src){
                                    obj.attr('src', data_src);
                                }
                            });
                        });
                    },100);

                },
                init(){
                    this.initData();
                },
            }
        });
    }
}