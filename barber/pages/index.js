class index extends Page {
    constructor(hash){
        let css;
        css = `
<style>
    #index_vue .bottomNav,#index_vue .topNav{width:100%;background:#fff}
    #index_vue .topNav{height:7vh;justify-content:space-between;align-items:center}
    #index_vue .topNav>div{width:33.333333%}
    #index_vue .topNav>div:nth-of-type(2){justify-content:center;align-items:center}
    #index_vue .topNav>div:nth-of-type(3){justify-content:flex-end;align-items:center}
    #index_vue .topNav .leftImg{width:4vh;height:3vh;margin-left:3vh}
    #index_vue .bottomNav{height:10vh;justify-content:space-around}
    #index_vue .bottomNav>div{display:flex;flex-direction:column}
    #index_vue .bottomNav img{width:5vh;height:5vh}
    #index_vue .body{width:100vw;height:83vh;background:#f5f5f5;padding:1vh 0 1vh 0}
    .btr3{border-bottom:solid 3px red}
    div{display:flex}
</style>
`;
        let html=
            [` 
<div class="flex topNav pos_r {{(bottomItem.choose)?'':'disn'}}" style="z-index:9;" v-for="bottomItem in bottomNav">
    <div class="flex">
        <img class="leftImg" onclick="history.go(-1)" src="./images/index/back.png" />
    </div>
    <div class="flex" style="font-size:5vw;font-weight:600">{{bottomItem.text}}</div>
    <div @touchstart="rightClick($index)" class="flex {{(bottomItem.right_text || bottomItem.right_img)?'':'o0'}}">
        <span class="flex flex-center">{{bottomItem.right_text}}</span>
        <img style="width:4vh;height:4vh;margin:0 2vh 0 2vh;" :src="'./images/index/'+(bottomItem.right_img)" />
    </div>
</div>
`,`
 <div class="{{(bottomNav[0].choose)?'':'disn'}} body flex-column pos_r">
    <div class="pos_a h100 w100 t0 {{(workStateView)?'':'disn'}}" @touchstart="rightClick(0)" style="background:#000;opacity:0.4;height:83vh;"></div>
    <div class="pos_a t0 w100" style="transform:translateY({{workStateView?'0vh':'-15vh'}});transition:transform 0.3s ease;">
        <div class="w100 pos_r flex-around" style="height:15vh;background: #fff;padding: 3vh;">
            <div @touchstart="navChoose(workStateViewItems,$index,changeWorkState)" v-for="item in workStateViewItems" class="flex-center-y flex-column"><img style="width:10vw" :src="'./images/index/'+((item.choose)?item.clickImg:item.unClickImg)" /><span>{{item.text}}</span></div>
        </div>
    </div>
    <div class="w100" style="height:10%;background: #fff;margin-bottom:3%;">
        <div v-for="item in line_up_nav" @touchstart="navChoose(line_up_nav,$index,updateOrderList)" class="{{(item.choose)?'red btr3':''}} w50 flex-center flex">{{item.text}}</div>
    </div>
    <div v-for="obj in line_up_nav" class="scroll {{(obj.choose)?'inbl':'disn'}}" style="height:94%;">
        <div class="flex-column" v-for="item in obj.list" style="background:#fff;width:96vw;margin:0 2vw 2vw 2vw;">
            <template v-if="$parent.$index === 0">
                <div class="flex-between" style="padding:2vh;">
                    <span>{{item.desc}}</span>
                    <span>已剪次数:{{item.alreadyReduceCount}}</span>
                    <span>上次剪发至今:{{item.distanceDays}}天</span>
                    <span @click="userDetail(item.uid)">详情></span>
                </div>
                <div>
                    <div style="font-weight:700;font-size:4vw;"><b>NO:{{item.name}}</b></div>
                  <div class="flex-column">
                        <div class="flex-center-y"> 
                            <img :src="item.avt" style="height:12vw;width:12vw;margin: 0 2vw 0 3vw;border-radius: 50%;" />{{item.customer}} 
                            <img v-if="item.isVip === true" src="https://wx-1253594735.file.myqcloud.com/barber/images/order_list_user_vip.png" style="height:4vw;width:4vw;margin: 0 2vw 0 3vw;border-radius: 50%;" /> 
                            <div style="margin-left: 14vw;font-size: 8vw;" v-if='item.class != 0'>{{level[item.class]}}</div>
                            <button v-if='item.class == 0' class="btn btn-success" style="margin-left:5vw;" @click="set_level(item.id)">用户分类</button>
                        </div>
                        <div style="padding: 3vw 5vw;"><a style="text-decoration:none;" href="tel:{{item.truePhone}}">{{item.phone}}</a>&nbsp;&nbsp;{{item.time}}</div>
                    </div>
                </div>
                <div id="td" class="flex-around">
                    <img v-for="i in [0,1,2,3]" style="width: 20%; height: 20%;" class="{{item.orderImg[$index]?'':'disn'}}" @click="upload($event,$index, item.id);" :src="item.orderImg[$index]"/>
                    <div @click="upload($event,null, item.id);" style="display: inline-block;border: dashed 2px #ddd;margin-top: 0%;margin-left: 0%;border-radius: 14px;width: 80px;">
                        <img style="width: 100%;transform: scale(0.5);" :src="db.data.oss+'barber/images/add.png'"/>
                    </div>
                </div>
 `,`
                <div v-if="item.state==0" class="flex-around" style="margin: 1vh 0;">
                    <div @click="skip(item.id,item.name)" style="color:#fff;width:45vw;height:10vw;background:#dfdfdf" class="flex-center">过号</div>
                    <div @click="ask(item.id,item.name)" style="color:#fff;width:45vw;height:10vw;background:red;" class="flex-center">叫号</div>
                </div>
                <div v-if="item.state==4" class="flex-around" style="margin:1vh 0;">
                    <div @click="skip(item.id)" style="color:#fff;width:30vw;height:10vw;background:#dfdfdf" class="flex-center">过号</div>
                    <div @click="ask(item.id,item.name)" style="color:#fff;width:30vw;height:10vw;background:red;" class="flex-center">再次叫号</div>
                    <div @click="start_server(item.id)" style="color:#fff;width:30vw;height:10vw;background:red;" class="flex-center">开始剪发</div>
                </div>
                <div v-if="item.state==1" class="flex-around" style="margin: 1vh 0;">
                    <div v-if="item.destroy_state==0" @click="apply_destroy(item.id)" style="color:#fff;width:45vw;height:10vw;background:#dfdfdf;" class="flex-center">申请销单</div>
                    <div @click="notice_pay(item.id, item.truePhone, 0)" style="color:#fff;width:45vw;height:10vw;background:red;" class="flex-center">提醒付款</div>
                </div>
                <div v-if="item.state==5" class="flex-around" style="margin: 1vh 0;">
                    <div v-if="item.destroy_state==0" @click="apply_destroy(item.id)" style="color:#fff;width:30vw;height:10vw;background:#dfdfdf;" class="flex-center">申请销单</div>
                    <div @click="error(item.id, item.truePhone)" style="color: #f5f5f5;width: 30vw;height:10vw;background: #aaa;" class="flex-center">线下付款</div>
                    <div @click="notice_pay(item.id, item.truePhone, 1)" style="color:#fff;width:31vw;height:10vw;background:red;" class="flex-center">再次提醒付款</div>
                </div>
            </template>
            `,`
            <template v-if="$parent.$index === 1">
                <div class="flex-between" style="padding:2vh;">
                    <span>{{item.desc}}</span>
                    <span>已剪次数:{{item.alreadyReduceCount}}</span>
                    <span>上次剪发至今:{{item.distanceDays}}天</span>
                    <span @click="userDetail(item.uid)">详情></span>
                </div>
                <div>
                    <div>NO:{{item.name}}</div>
                   <div class="flex-column">
                        <div class="flex-center-y"> <img :src="item.avt" style="height: 12vw;width: 12vw;margin: 0 4vw 0 8vw;border-radius: 50%;" />{{item.customer}} 
                        <img v-if="item.isVip === true" src="https://wx-1253594735.file.myqcloud.com/barber/images/order_list_user_vip.png" style="height:4vw;width:4vw;margin: 0 2vw 0 3vw;border-radius: 50%;" />
                        <div style="margin-left: 14vw;font-size: 8vw;" v-if='item.class != 0'>{{level[item.class]}}</div></div>
                        <div style="padding: 3vw 9vw;">{{item.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</div>
                    </div>
                </div>
                <div id="td" class="flex-around">
                    <img v-for="i in [0,1,2,3]" style="width: 20%; height: 20%;" class="{{item.orderImg[$index]?'':'disn'}}" @click="upload($event,$index, item.id);" :src="item.orderImg[$index]"/>
                    <div @click="upload($event,null, item.id);" style="display: inline-block;border: dashed 2px #ddd;margin-top: 0%;margin-left: 0%;border-radius: 14px;width: 80px;">
                        <img style="width: 100%;transform: scale(0.5);" :src="db.data.oss+'barber/images/add.png'"/>
                    </div>
                </div>
            </template>
             <template v-if="$parent.$index === 2">
                <div class="flex-between" style="padding:2vh;">
                    <span>{{item.desc}}</span>
                    <span>详情></span>
                </div>
                <div>
                    <div>NO:{{item.name}}</div>
                   <div class="flex-column">
                        <div class="flex-center-y"> <img :src="item.avt" style="height: 12vw;width: 12vw;margin: 0 4vw 0 8vw;border-radius: 50%;" />{{item.customer}} </div>
                        <div style="padding: 3vw 9vw;">{{item.phone}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.time}}</div>
                    </div>
                </div>
            </template>
            `,`
        </div>
    </div>
     <div class="pos_a h100 w100 t0 {{(workStateView)?'':'disn'}}" @touchstart="rightClick(0)" style="background:#000;opacity:0.4;height:83vh;"></div>
    <div class="pos_a t0 w100" style="transform:translateY({{workStateView?'0vh':'-15vh'}});transition:transform 0.3s ease;">
        <div class="w100 pos_r flex-around" style="height:15vh;background: #fff;padding: 3vh;">
            <div @click="navChoose(workStateViewItems,$index,changeWorkState)" v-for="item in workStateViewItems" class="flex-center-y flex-column"><img style="width:10vw" :src="'./images/index/'+((item.choose)?item.clickImg:item.unClickImg)" /><span>{{item.text}}</span></div>
        </div>
    </div>
</div>
`,`
<div class="{{(bottomNav[1].choose)?'':'disn'}} body flex-column">
    <div @click="look_rank(analys.page)" v-for="analys in analysis_view" class="flex-column" style="background:#{{($index&1)?'fff':'ddd'}};margin:0 2vw 2vw 2vw">
         <div style="padding:2vw 5vw 0;font-size:3.8vw">{{analys.Title}}</div>
        <div>
            <div class="vw50 flex-column">
                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.LeftValue}}</div>
                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.LeftLabel}}</div>
            </div>
            <div class="vw50 flex-column">
                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.RightValue}}</div>
                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.RightLabel}}</div>
            </div>
        </div>
        <div class="vw100 flex-between">
             <div style="margin:2vw 3vw;font-size:3vw;" class="clbl fwei">{{analys.LeftFoot}}</div>
             <div style="margin:2vw 3vw;font-size:3vw;" class="claaa">{{analys.RightFoot}}></div>
        </div>
    </div>
</div>
`,`
<div class="{{(bottomNav[2].choose)?'':'disn'}} body flex-column">
    <!--<img class="100vw" style="height:58vw;" src="./images/index/personbg.jpg" />
    <div class="flex-around" style="padding:2vw 0;">
        <div v-for="item in share_items" style="width:30vw;height:50vw;" class="flex-column bgwh">
            <div class="flex-center bgred" style="height:23vw;">
                <img :src="item.img" style="width:3vw;height:2.9vw;transform:scale(2.8)" />
            </div>
            <div class="flex-center" style="font-size:4vw;height:10vw;font-weight:600;">{{item.title}}</div>
            <div class="flex-center-x" style="padding:0 4vw;font-size:3vw;color:#555;">{{item.desc}}</div>
        </div>
    </div>-->
    
    <div @click="look_rank(analys.page)" v-for="analys in evaluate_view" class="flex-column" style="background:#{{($index&1)?'fff':'ddd'}};margin:0 2vw 2vw 2vw">
         <div style="padding:2vw 5vw 0;font-size:3.8vw">{{analys.Title}}</div>
        <div>
            <div class="vw50 flex-column">
                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.LeftValue}}</div>
                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.LeftLabel}}</div>
            </div>
            <div class="vw50 flex-column">
                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.RightValue}}</div>
                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.RightLabel}}</div>
            </div>
        </div>
        <div class="vw100 flex-between">
             <div style="margin:2vw 3vw;font-size:3vw;" class="clbl fwei">{{analys.LeftFoot}}</div>
             <div style="margin:2vw 3vw;font-size:3vw;" class="claaa">{{analys.RightFoot}}></div>
        </div>
    </div>
</div>
`,`
<div class="{{(bottomNav[3].choose)?'':'disn'}} body flex-column">
    <!--<div v-for="obj in message_view" class="pos_r flex-center-y w100 flex-between message_view" @click="jump(obj.hash)" ontouchstart="this.style.background='#f5f5f5'" ontouchend="this.style.background='#fff'" style="background:#fff;height:14vw;">
        <div class="h100 flex-center-y" style="margin-left:4vw;" >
            <img style="    width: 8vw;height: 8vw;margin-right: 8vw;" :src="'./images/index/'+(obj.img)" />
            <div class="flex-column flex-center-y">
                <div><strong>{{obj.title}}</strong></div>
                <div>{{obj.text}}</div>
            </div>
        </div>
        <img style="width:7vw;height:6vw;margin-right:5vw;" src="./images/index/right.png" />
        <div v-if="!obj.isEnd" class="pos_a r0 b0" style="height:1px;background:#ddd;width:81%;"></div>
    </div>-->
    
    <div @click="look_rank(analys.page)" v-for="analys in guest_view" class="flex-column" style="background:#{{($index&1)?'fff':'ddd'}};margin:0 2vw 2vw 2vw">
         <div style="padding:2vw 5vw 0;font-size:3.8vw">{{analys.Title}}</div>
        <div>
            <div class="vw50 flex-column">
                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.LeftValue}}</div>
                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.LeftLabel}}</div>
            </div>
            <div class="vw50 flex-column">
                 <div class="flex-center-x clred" style="margin-top:5vw;font-size:5vw;">{{analys.RightValue}}</div>
                 <div class="flex-center-x clbl" style="margin-bottom:1vw;font-size:3vw;">{{analys.RightLabel}}</div>
            </div>
        </div>
        <div class="vw100 flex-between">
             <div style="margin:2vw 3vw;font-size:3vw;" class="clbl fwei">{{analys.LeftFoot}}</div>
             <div style="margin:2vw 3vw;font-size:3vw;" class="claaa">{{analys.RightFoot}}></div>
        </div>
    </div>
</div>
`,`
<div class="{{(bottomNav[4].choose)?'':'disn'}} body flex-column"> 
    <input class="pos_a clwh inputo0" type="text" value="{{user.name}}" style="font-size: 3.9vw;text-align: center;width: 100vw;top: 58vw;" />
    <img class="pos_a" style="width:16vw;left:42vw;top:33vw;" :src="user.avt" />
    <span class="pos_a txtc" style="    background: #f5f5f5;border-radius: 10vw;width: 24vw;height: 5vw;left: 38vw;top: 69vw;padding: 0 2vw;color: #999;font-size: 3vw;padding-top: 0.4vw;">高级发型师</span>
    <img class="100vw" style="height:58vw;" src="./images/index/personbg.jpg" />
    <div class="flex-around bkwh" style="padding:5vw 0;margin-bottom:2vw">
        <div v-for="item in me_items" class="flex-column">
            <img style="width:8vw;height:8vw;" :src="item.img">
            <span>{{item.text}}</span>
        </div>
    </div>
    <div class="flex-column">
        <div @click="this.jump(item.hash)" class="bkwh" style="border-bottom:solid 1px #f5f5f5;padding:2vw 0;" v-for="item in me_lines">
            <img style="width:6vw;height:6vw;margin:0 5vw;" :src="item.img">
            <span>{{item.text}}</span>
        </div>
    </div>
</div>
`,`
<div class="flex bottomNav flex-center-y">
    <div v-for="bottomItem in bottomNav" @click="bottomItem.func" @touchstart="navChoose(bottomNav,$index)">
        <img :src="'./images/index/'+((bottomItem.choose)?bottomItem.imgClick:bottomItem.imgUnClick)" />
        <div>{{bottomItem.text}}</div>
    </div>
</div>
`];
        super(hash, html, css);
    }

    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.db = db;
                console.log('create index');
                this.launcher = launcher.vue;
                Util.forEach(m.pages,(page)=>{
                    m.addPage(page);
                });
            },
            compiled () {},
            data: {
                nowBottomIndex:0,
                bottomNav:[
                    {choose:true,text:'排队',right_text:'',right_img:'work_table.png',imgUnClick:'line_up.png',imgClick:'line_up_click.png',},
                    {choose:false,text:'业绩',right_text:'',right_img:'',imgUnClick:'analysis.png',imgClick:'analysis_click.png',func:function(){
                        window.index.vue.getStatistics()
                    }},
                    {choose:false,text:'评价',right_text:'',right_img:'',imgUnClick:'share.png',imgClick:'share_click.png',func:function(){
                        window.index.vue.getEveluate()
                    }},
                    {choose:false,text:'客流',right_text:'',right_img:'',imgUnClick:'message.png',imgClick:'message_click.png',func:function(){
                        window.index.vue.getGuest()
                    }},
                    {choose:false,text:'我的',right_text:'',right_img:'',imgUnClick:'me.png',imgClick:'me_click.png'}
                ],
                line_up_nav:[],
                orders:[
                    {img_arr:[],status:0,name:'B001'},
                    {img_arr:[],status:0,name:'B002'},
                ],
                history_order:[
                    {img_arr:[],status:0,name:'B001'},
                    {img_arr:[],status:0,name:'B002'},
                ],
                workStateView:false,
                workStateViewItems:[
                    {state:0,choose:true, unClickImg:'analysis.png',clickImg:'analysis_click.png',text:'下班中'},
                    {state:1,choose:false,unClickImg:'analysis.png',clickImg:'analysis_click.png',text:'上班中'},
                    {state:2,choose:false,unClickImg:'analysis.png',clickImg:'analysis_click.png',text:'吃饭中'},
                ],
                message_view:[
                    {title:'支付消息',text:'暂无消息',img:'money.png',isEnd:false,},
                    {title:'顾客评价',text:'暂无消息',img:'evaluate.png',isEnd:false,},
                    {title:'店务通知',text:'暂无消息',img:'stoe.png',isEnd:false,},
                    {title:'系统通知',text:'暂无消息',img:'sys.png',isEnd:false,},
                    {title:'查验证码',text:'点击查询',img:'consultation.png',isEnd:true,hash:"query_bind_code"},
                ],
                analysis_view:[],
                evaluate_view:[],
                guest_view:[],
                me_items:[
                    {img:'./images/index/order.png',text:'订单',},
                    {img:'./images/index/pjia.png',text:'评价',},
                    {img:'./images/index/work.png',text:'作品',},
                    {img:'./images/index/kaoqing.png',text:'考勤',},
                ],
                me_lines:[
                    {img:'./images/index/pjia.png',text:'查询验证码',hash:"query_bind_code"},
                    {img:'./images/index/ticket.png',text:'优惠券',},
                    {img:'./images/index/organization.png',text:'组织',},
                    {img:'./images/index/setting.png',text:'设置',},
                    /*{img:'',text:'',hash:"index_new"},*/
                ],
                /*share_items:[
                    {img:'./images/index/home_wh.png',title:'主页',desc:'创建，编辑，分享您的个人主页'},
                    {img:'./images/index/ticket_wh.png',title:'优惠券',desc:'分享门店优惠券，帮您带收益哟~'},
                    {img:'./images/index/work_wh.png',title:'作品',desc:'优质的作品是帮你获得订单的保证~'},
                ],*/
                user:{
                    avt:'',
                    name:'',
                    phone:''
                },
                isuploading : false,
                level:{
                    '1':'A',
                    '2':'B',
                    '3':'C',
                    '4':'D'
                },

                //上传图片需要用到的变量
                imgArr: [],
                img_str: '',
                imgServerArr: [],
                nowImgIndex: 0,

            },
            methods: {
                set_level(id){
                    this.db.data.setOrderId = id;
                    this.jump('userClass');
                },

                commitUserHairHistory(orderId) {
                    let dataStr = `{
                        "oid" : ${Math.floor(orderId)},
                        "pic" : "${this.img_str}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}commitUserHairHistory.php`, (data) => {
                        if (data.e !== 0) {
                            alert(JSON.stringify(data));
                            Message.toast('图片上传出现问题');
                        } else {
                            Message.toast("上传成功啦｡◕‿◕｡");
                            this.getBarberOrderListReload();
                        }
                    });
                },
                renderImgArrByServerId(orderId) {
                    let dataStr = `{
                        "server_id" : "${this.imgServerArr.join("|")}",
                        "oid" : ${Math.floor(orderId)}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}getImgArrByServerId.php`, (json) => {
                        if (json.e !== 0) {
                            Message.toast('图片上传出现问题');
                        } else {
                            if (!json.data.img_str) {
                                Message.toast('图片上传出现问题');
                            } else {
                                this.img_str = json.data.img_str;
                                this.imgArr = this.img_str.split('|');
                                this.commitUserHairHistory(orderId);
                            }
                        }
                    });
                },
                upload(event, index, orderId) {
                    let _this = this;
                    if (this.isuploading === true) {
                        MessageBarber.alert('有图片正在上传，请耐心等待');
                        return;
                    }
                    if (index === null) {
                        wx.checkJsApi({
                            jsApiList: ['getLocation'],
                            success: (res) => {
                                wx.chooseImage({
                                    count: 4, // 默认9
                                    sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                    sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                                    success: function (res) {
                                        let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                                        _this.isuploading = true;
                                        _this.nowImgIndex = 0;
                                        let t = setTimeout(() => {
                                            _this.isuploading = false;
                                        }, 3000);
                                        _this.imgServerArr = [];
                                        let getServerId = function () {
                                            let id = localIds[_this.nowImgIndex];
                                            if (id) {
                                                wx.uploadImage({
                                                    localId: id, // 需要上传的图片的本地ID，由chooseImage接口获得
                                                    isShowProgressTips: 1, // 默认为1，显示进度提示
                                                    success: function (res) {
                                                        _this.imgServerArr[_this.nowImgIndex] = res.serverId;
                                                        _this.nowImgIndex++;
                                                        getServerId();
                                                    }
                                                });
                                            } else {
                                                clearTimeout(t);
                                                _this.isuploading = false;
                                                _this.renderImgArrByServerId(orderId)
                                            }
                                        };
                                        getServerId();
                                    }
                                });
                            }
                        });
                        return;
                    } else {
                        return;
                    }
                    if (this.isuploading === true) {
                        MessageBarber.alert('有图片正在上传，请耐心等待');
                        return;
                    }
                    var nowImgNums = 0;
                    $('#td').children('img').each(function (index, obj) {
                        if ($(obj).attr('src'))
                            nowImgNums++;
                    });

                    if (index !== null)
                        this.nowImgIndex = index;
                    else
                        this.nowImgIndex = nowImgNums;

                    if (this.nowImgIndex > 3) {
                        MessageBarber.alert('最多上传4张图片');
                        return;
                    }
                    MessageBarber.upload("选择一张满意的图片把~~~");
                },

                doneUpload(){
                    this.isuploading = false;
                    Message.removeWait();
                },
                imgChange(_this){
                    Util.ajax(null, `${db.data.api}getObjectStoreKey.php`, (data) => {
                        if (data.e !== 0) {
                            Message.toast('图片上传出现问题');
                        } else {
                            this.cos = new CosCloud({
                                appid: '1253594735',// APPID 必填参数
                                bucket: 'wx',//bucketName 必填参数
                                region: 'gz',//地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
                                getAppSign: function (callback) {
                                    callback(data.data.sign);
                                },
                                getAppSignOnce: function (callback) {//单次签名，参考上面的注释即可
                                    callback(data.data.sign);
                                }
                            });
                            let file = _this.files[0];
                            if (!file)
                                return;
                            Message.showWait('上传中');
                            this.isuploading = true;
                            this.cos.uploadFile((data) => {
                                this.line_up_nav[1].list[db.upload_index].img[this.nowImgIndex] = data.data.access_url;
                                this.line_up_nav = JSON.parse(JSON.stringify(this.line_up_nav));
                                this.doneUpload();
                                let dataStr = `{
                                    "uid":${this.line_up_nav[1].list[db.upload_index].uid},
                                    "img":"${this.line_up_nav[1].list[db.upload_index].img.join('|')}"
                                }`;
                                Util.ajax(dataStr, `${db.data.api}updateUserImg.php`, (data) => {
                                    if(data.e !== 0){
                                        Message.toast('修改失败');
                                    }
                                });
                            }, (data) => {
                                console.log('图片上传错误!');
                                console.log(data);
                                this.doneUpload();
                            }, (proccess) => {
                                console.log(proccess);
                            }, this.bucket, `/comment/` + 'user' + '_' + this.line_up_nav[1].list[db.upload_index].uid + '_' + file.name, file, 0);//insertOnly==0 表示允许覆盖文件 1表示不允许
                        }
                    });
                },
                skip(id){
                    MessageBarber.dialog('提示', '确定要过号吗?', '关闭', '确定', ()=>{
                        Message.removeDialog();
                    }, ()=>{
                        let dataStr = `{
                            "oid":${id},
                            "state":3
                        }`;
                        Util.ajax(dataStr, `${db.data.api}changeOrderState.php`, (data) => {
                            if(data.e !== 0){
                                Message.toast('过号失败');
                            }else{
                                this.getBarberOrderListReload();
                            }
                        });
                        Message.removeDialog();
                    });

                },
                error(id, phone){
                    if (phone == '18684508883666') {
                        this.db.data.setOrderId = id;
                        this.jump('pay_channel');
                    } else {
                        MessageBarber.dialogForSystemOutside('提示', '确定要线下付款吗?请确认该订单是否在系统外支付完毕!', '关闭', '确定', ()=>{
                            Message.removeDialog();
                        }, ()=>{
                            let dataStr = `{
                            "oid":${id},
                            "state":6
                        }`;
                            Util.ajax(dataStr, `${db.data.api}changeOrderState.php`, (data) => {
                                if(data.e !== 0){
                                    Message.toast('线下付款失败!');
                                }else{
                                    this.getBarberOrderListReload();
                                }
                            });
                            Message.removeDialog();
                        });
                    }
                },
                start_server(id){
                    let dataStr = `{
                        "oid":${id},
                        "state":1
                    }`;
                    Util.ajax(dataStr, `${db.data.api}changeOrderState.php`, (data) => {
                        if(data.e !== 0){
                            Message.toast('无法开始服务');
                        }else{
                            this.getBarberOrderListReload();
                        }
                    });
                },
                look_rank(key) {
                    switch (key) {
                        case 'rank':
                            this.jump('turnover_rank');
                            break;
                        case 'bad_comments':
                            this.jump('bad_comments');
                            break;
                        case 'fixed_guest':
                            this.jump('fixed_guest');
                            break;
                        case 'drain_guest_days':
                            this.jump('drain_guest_days');
                            break;
                        case 'drain_guest_count':
                            this.jump('drain_guest_count');
                            break;
                        case 'female_guest':
                            this.jump('female_guest');
                            break;
                        case 'hide':
                            let rightFoot = this.analysis_view[0]['RightFoot'];
                            if (rightFoot == '点击金额隐藏') {
                                this.analysis_view[0]['RightFoot'] = '点击****显示';
                                this.analysis_view[0]['LeftValue'] = '****';
                                this.analysis_view[0]['RightValue'] = '****';
                            } else if (rightFoot == '点击****显示') {
                                Util.ajax(null, `${db.data.api}getPerformance.php`, (data) => {
                                    if (data.e !== 0) {
                                    } else {
                                        this.analysis_view = JSON.parse(JSON.stringify(data.data));
                                    }
                                });
                            }
                            break;
                    }
                    //ajax key
                },
                ask(id,name){
                    MessageBarber.confirm(`确定要对${name}进行叫号吗`,()=>{
                        let dataStr = `{
                        "oid":${id},
                        "state":4
                    }`;
                        Util.ajax(dataStr, `${db.data.api}changeOrderState.php`, (data) => {
                            if(data.e !== 0){
                                Message.toast('叫号失败');
                            }else{
                                this.getBarberOrderListReload();
                            }
                        });
                    });
                },
                init(){
                    Util.ajax(null, `${db.data.api}getBarberInfo.php`, (data) => {
                        if(data.e !== 0){
                        }else{
                            this.changeWorkState(data.data.work_state);
                            this.user.avt = data.data.avt;
                            this.user.name = data.data.name;
                            this.user.phone = data.data.phone;
                            console.log(this.user);
                        }
                    });
                    this.getBarberOrderList();
                },
                getStatistics(){
                    Util.ajax(null, `${db.data.api}getPerformance.php`, (data) => {
                        if(data.e !== 0){
                        }else{
                            this.analysis_view = JSON.parse(JSON.stringify(data.data));
                        }
                    });
                },
                getEveluate() {
                    Util.ajax(null, `${db.data.api}getEveluate.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            this.evaluate_view = JSON.parse(JSON.stringify(data.data));
                        }
                    });
                },
                getGuest() {
                    Util.ajax(null, `${db.data.api}getGuest.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            this.guest_view = JSON.parse(JSON.stringify(data.data));
                        }
                    });
                },
                updateOrderList(){
                    Util.ajax(null, `${db.data.api}getBarberOrderList.php`, (data) => {
                        if(data.e === 0){
                            Util.forEach(data.data, (name, i)=>{
                                this.line_up_nav[i] = ({
                                    choose:this.line_up_nav[i].choose,
                                    text:name,
                                    list:data.data[name]
                                });
                            });

                            //console.log(this.line_up_nav);
                            this.line_up_nav = JSON.parse(JSON.stringify(this.line_up_nav));
                        }
                    });
                },
                rightClick(index){
                    switch (index){
                        case 0:
                            this.workStateView = !this.workStateView;
                            break;
                    }
                },
                changeWorkState(index){
                    Util.forEach(this.workStateViewItems, (obj)=>{
                        obj.choose = false;
                    });
                    this.workStateViewItems[index].choose = true;
                    let state = this.workStateViewItems[index].state;
                    this.bottomNav[0].right_text = this.workStateViewItems[index].text;
                    let dataStr = `{
                        "state":${state}
                    }`;
                    Util.ajax(dataStr, `${db.data.api}setBarberState.php`, (data) => {
                        if(data.e !== 0){
                            Message.toast('失败');
                        }else{}
                    });
                },
                notice_pay(id, phone, repeat){
                    if (repeat == 0) {
                        this.db.data.setOrderId = id;
                        this.jump("online_pay");
                    } else if (repeat == 1) {
                        let dataStr = `{
                            "oid":${id}
                        }`;
                        Util.ajax(dataStr, `${db.data.api}queryOrder.php`, (json) => {
                            if(json.e !== 0){
                                Message.toast('提示失败1');
                            }else{
                                if(!json.data.res){
                                    let dataStr = `{
                                    "oid":${id},
                                    "state":5
                                }`;
                                    Util.ajax(dataStr, `${db.data.api}changeOrderState.php`, (data) => {
                                        if(data.e !== 0){
                                            Message.toast('提示失败2');
                                        }else{
                                            MessageBarber.alert('提示付款成功');
                                            this.getBarberOrderListReload();
                                        }
                                    });
                                }else{
                                    this.getBarberOrderListReload();
                                }
                            }
                        });
                    }
                },
                userDetail(uid) {
                    this.db.data.setUserId = uid;
                    this.jump('user_hair');
                },
                navChoose(workStateViewItems, $index, changeWorkState) {
                    launcher.vue.navChoose(workStateViewItems, $index, changeWorkState);
                    //点击未完成订单导航栏时刷新列表
                    if ($index == "0") {
                        this.getBarberOrderList();
                    } else if ($index == "1") {
                        this.getBarberHistoryOrderList();
                    }
                },
                getBarberOrderList(){
                    Util.ajax(null, `${db.data.api}getBarberOrderList.php`, (data) => {
                        if(data.e !== 0){
                        }else{
                            this.line_up_nav = [];
                            //console.log(data.data);
                            Util.inEach(data.data, (list, key, i)=>{
                                this.line_up_nav.push({
                                    choose:!i,
                                    text:key,
                                    list:list
                                });
                            });
                            //console.log(this.line_up_nav)
                            this.line_up_nav = JSON.parse(JSON.stringify(this.line_up_nav));
                        }
                    });
                },
                getBarberOrderListReload() {
                    Util.ajax(null, `${db.data.api}getBarberOrderList.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            this.line_up_nav[0].list = data.data.未完成订单;
                            this.line_up_nav[1].list = data.data.历史订单;
                        }
                    });
                },
                getBarberHistoryOrderList() {
                    Util.ajax(null, `${db.data.api}getBarberOrderList.php`, (data) => {
                        if (data.e !== 0) {
                        } else {
                            this.line_up_nav = [];
                            //console.log(data.data);
                            Util.inEach(data.data, (list, key, i) => {
                                this.line_up_nav.push({
                                    choose: i,
                                    text: key,
                                    list: list
                                });
                            });
                            //console.log(this.line_up_nav);
                            this.line_up_nav = JSON.parse(JSON.stringify(this.line_up_nav));
                        }
                    });
                },
                apply_destroy(id) {
                    MessageBarber.dialog('提示', '确定申请销单吗?', '关闭', '确定', () => {
                        Message.removeDialog();
                    }, () => {
                        let dataStr = `{
                            "oid":${id}
                        }`;
                        Util.ajax(dataStr, `${db.data.api}changeOrderDestroyState.php`, (data) => {
                            if (data.e !== 0) {
                                Message.toast(data.data.msg, 3);
                            } else {
                                Message.toast(data.data.msg, 3);
                                this.getBarberOrderListReload();
                            }
                        });
                        Message.removeDialog();
                    });
                }
            }
        });
    }
}
////