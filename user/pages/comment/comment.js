class comment extends Page{
    constructor(hash){
        super(hash, require('tpl.html'));
    }
    vue_(){
        this.vue = new VueP({
            data: {
                stars:[
                    {choose:true},{choose:true},{choose:true},{choose:true},{choose:true},
                ],
                tipText:['差评', '不咋地', '一般般', '还不错', '很满意',],
                tip:'',
                score:100,
                content:'',
                imgArr:[],
                img_str:'',
                imgServerArr:[],
                uploading:false,

                serverIds:[],
                imgCount : 0,
                nowImgIndex:0,
                isFirst:true,
                //isCommentting:false    //此处屏蔽的原因是某些用户在极端情况下点击不了提交按钮
            },
            methods: {
                init() {
                    let dataStr = `{
                        "oid" : ${Math.floor(db.data.comment_order_id)}
                    }`;
                    console.log(dataStr);
                    Util.ajax(dataStr, `${db.data.api}getOrderComment.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            if (data.data.comment) {
                                this.isFirst = false;
                                this.score = data.data.comment.score * 20;
                                this.content = data.data.comment.content;
                                this.imgArr = data.data.comment.img;
                            } else {
                                this.isFirst = true;
                                this.score = 100;
                                this.content = '';
                                this.imgArr = [];
                                this.img_str = '';
                            }
                            this.starClick(this.score / 20 - 1);
                        }
                    });
                    setTimeout(() => {
                        this.launcher.showAndHideCover($(this.$el));
                    }, 100);
                },
                starClick(index){
                    console.log(index);
                    let i;
                    for(i=0;i<5;i++){
                        if(i>index){
                            this.stars[i].choose = false;
                        }else{
                            this.stars[i].choose = true;
                        }
                    }
                    this.score = (index+1)*20;
                    this.tip = this.tipText[index];
                },
                goback(){
                    if(db.data.comment_close){
                        app.browser.die();
                    }else{
                        history.go(-1);
                    }
                },
                comment(){
                    /*if(this.isCommentting){    //此处屏蔽的原因是某些用户在极端情况下点击不了提交按钮
                        return;
                    }
                    this.isCommentting = true;
                    let timer = setTimeout(()=>{
                        this.isCommentting = false;
                    },1000);*/

                    this.content = this.content.replace(/^\s+|\s+$/g, "");
                    if (this.content.length < 1) {
                        this.content = '该用户未填写评价';
                    }
                    let dataStr = `{
                        "oid" : ${Math.floor(db.data.comment_order_id)},
                        "text" : "${this.content}",
                        "star" : ${this.score},
                        "pic" : "${this.img_str}"
                    }`;
                    console.log(dataStr);
                    Util.ajax(dataStr, `${db.data.api}commitUserComment.php`, (data) => {
                        if (data.e == -5) {
                            Message.toast('您已经评论过啦!,,ԾㅂԾ,,');
                        } else if (data.e !== 0) {
                            alert(JSON.stringify(data));
                            Message.toast('图片上传出现问题');
                        } else {
                            this.isFirst = false;
                            Message.toast("评论成功啦｡◕‿◕｡");
                            this.jump('share');
                        }
                        /*clearTimeout(timer);    //此处屏蔽的原因是某些用户在极端情况下点击不了提交按钮
                        this.isCommentting = false;*/
                    });
                    // MessageBarber.alert(data[Api.MESSAGE]);
                },
                renderImgArrByServerId(){
                    let dataStr = `{
                        "server_id" : "${this.imgServerArr.join("|")}",
                        "oid" : ${Math.floor(db.data.comment_order_id)}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getImgArrByServerId.php`, (json) => {
                        if(json.e !== 0){
                            Message.toast('图片上传出现问题');
                        }else{
                            if(!json.data.img_str){
                                Message.toast('图片上传出现问题');
                            }else{
                                this.img_str = json.data.img_str;
                                this.imgArr = this.img_str.split('|');
                            }
                        }
                    });


                },
                upload(event,index){
                    let _this = this;
                    if(this.isuploading === true){
                        MessageBarber.alert('有图片正在上传，请耐心等待');
                        return;
                    }
                    if(index === null){
                        // alert('check')
                        wx.checkJsApi({
                            jsApiList: ['getLocation'],
                            success:(res) => {
                                // alert('success')
                                wx.chooseImage({
                                    count: 3, // 默认9
                                    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                    sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                                    success: function (res) {
                                        let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                                        _this.isuploading = true;
                                        _this.nowImgIndex = 0;
                                        let t = setTimeout(()=>{
                                            _this.isuploading = false;
                                        },3000);
                                        _this.imgServerArr = [];
                                        let getServerId = function(){
                                            let id = localIds[_this.nowImgIndex];
                                            if(id){
                                                wx.uploadImage({
                                                    localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
                                                    isShowProgressTips: 1, // 默认为1，显示进度提示
                                                    success: function (res) {
                                                        _this.imgServerArr[_this.nowImgIndex] = res.serverId;
                                                        _this.nowImgIndex++;
                                                        getServerId();
                                                    }
                                                });
                                            }else{
                                                clearTimeout(t);
                                                _this.isuploading = false;
                                                _this.renderImgArrByServerId()
                                            }
                                        };
                                        getServerId();
                                    }
                                });
                            }
                        });

                        return;
                    }else{
                        return;
                    }


                    if(!this.isFirst){
                        return;
                    }
                    if(this.isuploading === true){
                        MessageBarber.alert('有图片正在上传，请耐心等待');
                        return;
                    }
                    var nowImgNums=0;
                    $('#td').children('img').each(function(index, obj){
                        if($(obj).attr('src'))
                            nowImgNums++;
                    });

                    if(index !== null)
                        this.nowImgIndex = index;
                    else
                        this.nowImgIndex = nowImgNums;

                    if(this.nowImgIndex > 2){
                        MessageBarber.alert('最多上传3张图片');
                        return;
                    }

                    MessageBarber.upload("选择一张满意的图片把~~~");
                },
                doneUpload(){
                    this.isisuploading = false;
                    Message.removeWait();
                },
                imgChange(_this){

                    var img = new Image();

                    let file0 = _this.files[0];
                    var dataUrl = window.URL.createObjectURL(file0);
                    console.log(file0);

                    var maxWidth = 500;
                    img.src = dataUrl;

                    Util.ajax(null, `${db.data.api}getObjectStoreKey.php`, (data) => {
                        if(data.e !== 0){
                            Message.toast('图片上传出现问题');
                        }else{
                            this.cos = new CosCloud({
                                appid: this.appid,// APPID 必填参数
                                bucket: this.bucket,//bucketName 必填参数
                                region: this.region,//地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
                                getAppSign: function (callback) {
                                    callback(data.data.sign);
                                },
                                getAppSignOnce: function (callback) {//单次签名，参考上面的注释即可
                                    callback(data.data.sign);
                                }
                            });

                            setTimeout(()=>{
                                if(img.width>maxWidth){
                                    var rate = img.height/img.width;
                                    img.width = maxWidth;
                                    img.height = img.width*rate;
                                }
                                alert(img.width);
                                alert(img.height);
                                function dataURItoBlob(dataURI) {
                                    // convert base64 to raw binary data held in a string
                                    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
                                    var byteString = atob(dataURI.split(',')[1]);

                                    // separate out the mime component
                                    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

                                    // write the bytes of the string to an ArrayBuffer
                                    var ab = new ArrayBuffer(byteString.length);
                                    var ia = new Uint8Array(ab);
                                    for (var i = 0; i < byteString.length; i++) {
                                        ia[i] = byteString.charCodeAt(i);
                                    }
                                    // return new Blob([ia], {type:mimeString});
                                    return new Blob([ab], {type: mimeString});
                                }

                                var canvas = document.createElement('canvas');
                                var ctx = canvas.getContext("2d");
                                canvas.width = img.width;
                                canvas.height = img.height;
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                ctx.fillStyle = 'rgba(255, 255, 255, 1)';
                                ctx.fillRect(0,0,canvas.width, canvas.height);
                                ctx.drawImage(img, 0, 0, img.width, img.height); // 将图像绘制到canvas上
                                var dataUri = canvas.toDataURL("image/jpeg");
                                var file = dataURItoBlob(dataUri);

                                file.name = file0.name;
                                file.lastModified = file0.lastModified;
                                file.lastModifiedDate = file0.lastModifiedDate;

                                if(!file)
                                    return;
                                Message.showWait('上传中');
                                this.isisuploading = true;
                                this.cos.uploadFile((data)=>{
                                    setTimeout(()=>{
                                        alert(data.data.access_url);
                                        this.imgArr[this.nowImgIndex] = data.data.access_url;
                                        this.imgArr = JSON.parse(JSON.stringify(this.imgArr));
                                        this.doneUpload();
                                    },500);
                                }, (data)=>{
                                    alert('error');
                                    console.log(data);
                                    this.doneUpload();
                                }, (proccess)=>{
                                    console.log(proccess);
                                }, this.bucket, `/comment/` + db.data.comment_order_id+'_'+file.name, file, 0);//insertOnly==0 表示允许覆盖文件 1表示不允许

                            },1000);
                        }
                    });
                },
                late_comment() {
                    this.jump('share');
                }
            },
            el: this.hash+'_vue',
            created () {
                this.db = db;
                this.launcher = launcher.vue;
            },
            compiled () {},
        });
    }
}
/////////////////////