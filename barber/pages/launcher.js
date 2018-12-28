
class launcher extends Page{
    constructor(hash){
        super(hash);
    }
    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created() {},
            compiled(){
                this.init();
                setTimeout(function(){
                    window.launcher_hasCompiled = true;
                },300);
            },
            data: {
                hasPosition: false
            },
            computed: {},
            methods: {
                navChoose(obj,index,func=null){
                    let i,length=obj.length;
                    for(i=0;i<length;i++){
                        if(i===index){
                            obj[i].choose = true;
                        }else{
                            obj[i].choose = false;
                        }
                    }
                    if(func){
                        func(index);
                    }
                },
                handlerError(e) {
                    switch (e) {
                        case -1:
                            Message.toast('请填写正确的手机号码', 3);
                            break;
                        case -2:
                            Message.toast('短信服务器发送失败', 3);
                            break;
                        case -6:
                            Message.toast('需要用户权限', 3);
                            break;
                        case -7:
                            Message.toast('用户权限错误', 3);
                            break;
                        case -8:
                            Message.toast('短信发送过于频繁', 3);
                            break;
                        case -9:
                            Message.toast('短信验证超时', 3);
                            break;
                        default:
                            Message.toast('其他错误代码 ' + e, 3);
                            break;
                    }
                },
                init() {},
                jump2index(){
                    console.log('5555555')
                    if(app.secondHash === 'index'){
                        Util.hasLoadJsCallBack('index', ()=>{
                            console.log('3333')
                            console.log(index)
                            this.jump('index');
                        });
                    }
                },
                /*look(imgStr){
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
                },*/
                look(imgStr, currenImg){
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
                            current: currenImg, // 当前显示图片的http链接
                            urls: urls // 需要预览的图片http链接列表
                        });
                    }
                },
                showAndHideCover(obj_vue){
                    obj_vue.find('.endtouch').show();
                    setTimeout(function(){
                        obj_vue.find('.endtouch').hide();
                    },800);
                },
                smooth(func){
                    if(app.isDoingAnimation){
                        var interTimer;
                        var outTimer;
                        interTimer = setInterval(function(){
                            if(!app.isDoingAnimation){
                                clearInterval(interTimer);
                                clearTimeout(outTimer);
                                func();
                            }
                        },100);
                        outTimer = setTimeout(function(){
                            try {
                                clearInterval(interTimer);
                            }catch (e){}
                        },2000);
                    }else{
                        func();
                    }
                }
            }
        });
    }
}