class orderlist extends Page {
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.db = db;
                this.launcher = launcher.vue;
            },
            compiled () {
                let i;
                for(i=1;i<m.pages.length;i++)
                    m.addPage(m.pages[i]);
            },
            data: {
                orderTitle:null,
                isService : 0
            },
            methods: {
                init(){
                    Util.ajax(null, `${db.data.api}getUserOrderList.php`, (data) => {
                        this.renderOrderList(data);
                        console.log(data);
                    });
                },
                renderOrderList(data){
                    if(data.e !== 0){

                    }else{
                        data = data.data;
                        if(this.orderTitle === null){
                            this.orderTitle = {};
                            let i = 0;

                            for(var key in data) {
                                if(data.hasOwnProperty(key)){
                                    if (key == "isService") {
                                        this.isService = data[key];
                                        break;
                                    }
                                }
                            }

                            for(var key in data){
                                if(data.hasOwnProperty(key)){
                                    if (key == "isService") {
                                        continue;
                                    }
                                    if (this.isService == 1) {
                                        this.orderTitle[key] = {
                                            choose:(i===1)?true:false,
                                            list:data[key]
                                        };
                                        i++;
                                    } else {
                                        this.orderTitle[key] = {
                                            choose:(i===0)?true:false,
                                            list:data[key]
                                        };
                                        i++;
                                    }
                                }
                            }

                            this.orderTitle = JSON.parse(JSON.stringify(this.orderTitle));
                        }else{
                            for(var key in data){
                                if(data.hasOwnProperty(key)){

                                    if (key == "isService") {
                                        continue;
                                    }

                                    this.orderTitle[key].list = data[key];
                                }
                            }
                        }
                    }
                },
                orderChoose(index){
                    let i=0;
                    for(var key in this.orderTitle){
                        if(this.orderTitle.hasOwnProperty(key)){
                            if(i===index){
                                this.orderTitle[key].choose = true;
                            }else{
                                this.orderTitle[key].choose = false;
                            }
                            i++;
                        }
                    }
                    Util.ajax(null, `${db.data.api}getUserOrderList.php`, (data) => {
                        this.renderOrderList(data);
                    });
                },
                orderClick(order, immediate = false){
                    let cancel = () => {
                        let dataStr = `{
                            "oid" : ${Math.floor(order.id)}
                        }`;
                        Util.ajax(dataStr, `${db.data.api}cancelOrder.php`, (data) => {
                            if(data.e !== 0){
                                Message.toast('取消订单失败');
                            }else{
                                Util.ajax(null, `${db.data.api}getUserOrderList.php`, (data) => {
                                    this.renderOrderList(data);
                                });
                            }
                        });
                    };
                    if(immediate){
                        cancel();
                    }else{
                        MessageBarber.confirm('确定要取消排队吗',function(){
                            cancel();
                        });
                    }
                },
                orderSuccess(order){
                    location.href = `${db.data.domain}src/pub/example/jsapi.php?order_id=${order.id}`
                },
                checkOrder(order){
                    db.data.jsapi_order_id = Math.floor(order.id);
                    this.jump('jsapi');
                },
                jump2comment(order){
                    db.data.comment_order_id = order.id;
                    this.jump('comment');
                },
                look(imgStr){
                    var imgArr = imgStr.split('|');
                    var urls = [];
                    for(var i=0;i<imgArr.length;i++){
                        var src = imgArr[i].trim();
                        if(!!src){
                            urls.push(src);
                        }
                    }

                    if(urls.length <= 0){
                        return;
                    }else{
                        wx.previewImage({
                            current: '', // 当前显示图片的http链接
                            urls: urls // 需要预览的图片http链接列表
                        });
                    }
                },
            }
        });
    }
}
//