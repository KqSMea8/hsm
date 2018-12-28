class PixiUtil{
    static init(screenWidth, screenHeight){
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.urls = [];
        this.pixelRatio = window.devicePixelRatio;
    }
    static render(str){
        PixiUtil[str].renderer.render(PixiUtil[str].stage);
    }
    static makeImgFrame(obj, widthRate, parentWidth){
        let oWidth = obj.width;
        let oHeight = obj.height;
        if(widthRate === 1){
            obj.width = this.screenWidth;
            obj.height = this.screenHeight;
        }else{
            obj.width = (parentWidth || this.screenWidth) * widthRate;
            obj.height = obj.width/oWidth*oHeight;
        }
    };
    static addImg(url,parent,widthRate,callBack){
        let BaseTexture = PIXI.BaseTexture.from(url);
        let s = PIXI.Sprite.from(BaseTexture);
        parent.addChild(s);
        (function(s,widthRate,url){
            if(PixiUtil.urls.indexOf(url) !== -1){
                PixiUtil.makeImgFrame(s, widthRate);
                if(!!callBack){
                    callBack(s);
                }
            }else{
                BaseTexture.on('loaded',function(){
                    PixiUtil.urls.push(url);
                    setTimeout(function(){
                        PixiUtil.makeImgFrame(s, widthRate);
                        if(!!callBack){
                            callBack(s);
                        }
                    },0);
                });
            }
        }(s,widthRate,url));
        return s;
    };
    static changeImgUrl(img, url){
        let ext = url.substr(url.length-3,url.length);
        if(ext !== 'png' && ext !== 'jpg'){
            url+='.png';
        }
        img._texture.baseTexture = PIXI.BaseTexture.from(url);
    }
    static addGraphics(frame, parent, color=0xff0000, opacity=0, main = this.main){
        if(!!parent === false)
            parent = main.stage;
        let thing = new PIXI.Graphics();
        thing.beginFill(color, opacity);
        thing.drawRect(frame.x, frame.y, frame.width, frame.height);
        thing.endFill();
        parent.addChild(thing);
        return thing;
    };
    static unClick(container){
        let i,sprite;
        for(i=0;i<container.children.length;i++){
            sprite = container.children[i];
            if(typeof sprite.interactive_ === 'boolean'){
                break;
            }
            if(sprite.interactive){
                sprite.interactive = false;
                sprite.interactive_ = true;
            }else{
                sprite.interactive_ = false;
            }
        }
    }
    static enClick(container){
        let i,sprite;
        for(i=0;i<container.children.length;i++){
            sprite = container.children[i];
            if(sprite.interactive_)
                sprite.interactive = true;
            sprite.interactive_ = null;
        }
    }
    static phoneCommand(func,callBack){
        if(func === "log"){
            console.log(callBack);
        }
        if(typeof callBack === 'undefined')
            callBack = '';
        let url = "function://" + JmUtil.base64encode(func+'-'+callBack);
        let random = (Math.random()+"").substr(3,8);
        let id = `id_${random}`;
        $('body').append('<iframe id="'+id+'" class="disn" src="'+url+'"></iframe>');
        setTimeout(function(){
            $('#'+id).remove();
        },100);
    }
}