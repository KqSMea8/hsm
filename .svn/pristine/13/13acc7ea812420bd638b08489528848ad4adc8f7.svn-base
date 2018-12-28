

class query_bind_code extends Page {
    constructor(hash){
        let css =
            `
<style></style>
`;
        let html=
            `
<p>用户手机验证码查询</p>
<input style="width: 79vw;" type="text" v-model="phone" />
<button style="width: 19vw;" class="btn btn-success" @touchstart="search">查询</button>
`;
        super(hash, html, css);
    }

    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {

            },
            compiled () {},
            data: {
                phone:''
            },
            methods: {
                search(){
                    let dataStr = `{
                        "phone":"${this.phone}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}queryBindCode.php`, (data) => {
                        if(data.e !== 0){
                            Message.toast("请输入手机号")
                        }else{
                            if(data.data.code){
                                this.phone = data.data.code;
                            }else{
                                Message.toast("查不到相关信息")
                            }
                        }
                    });
                },
                init(){

                }
            }
        });
    }
}