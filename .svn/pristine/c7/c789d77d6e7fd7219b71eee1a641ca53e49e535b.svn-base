class index extends Page {
    constructor(hash){
        let css =
            `
<style></style>
`;
        let html=
            `       
        <table class="table table-striped">
          <caption style="text-align: center">员工表<select class="form-control" v-model="selected" @change="get_barbers_detail()">  
  <option v-for="option in options" v-bind:value="option.value">  
    {{ option.text }}  
  </option>  
</select> </caption>
          <thead>
            <tr>
              <th style="{{$index > 1?'width:40%':'width:20%'}}" v-for="name in title_list">{{name}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="barber in barber_list">
              <td>
                <img style="width:100%;;" src="{{barber.avt}}" /></td>
              <td>{{barber.name}}</td>
              <td>
                <select v-model="barber.owner_id" class="form-control" @change="change_sid(barber, $event)" @change="get_barbers_detail()">  
  <option v-for="option in barber.options" v-bind:value="option.value">  
    {{ option.text }}  
  </option>  
</select>
                
                </td>
              <td>
                    <button class="btn btn-success" @click="save(barber)">调动</button>
                    <!--<button v-if="barber.is_mobile == 0" class="btn btn-warning" @click="changeMobile(barber, 1)">机动</button>
                    <button v-if="barber.is_mobile == 1" class="btn btn-danger" @click="changeMobile(barber, 0)">固定</button>-->
                    <button v-if="barber.is_mobile == 0" class="btn btn-warning" @click="changeMobile(barber, 1)">固定</button>
                    <button v-if="barber.is_mobile == 1" class="btn btn-danger" @click="changeMobile(barber, 0)">机动</button>
                    
                </td>
            </tr>
          </tbody>
        </table>
`;
        super(hash, html, css);
    }

    vue_(){
        this.vue = new VueP({
            el: this.hash+'_vue',
            created () {
                this.get_barbers_detail(21)
            },
            compiled () {},
            data: {
                title_list:[
                    '头像',
                    '名称',
                    '工作地点',
                    '操作'
                ],
                sid:21,
                barber_list:[],
                studio_dict:{},
                selected: 21,
                selected_1: 21,
                options: [
                    { text: 'One', value: 'A' },
                    { text: 'Two', value: 'B' },
                    { text: 'Three', value: 'C' }
                ]
            },
            methods: {
                clear(){
                    alert(this.date)
                },
                init(){

                },
                change_sid(barber, event){
                    barber.owner_id = $(event.target).val()
                },
                get_barbers_detail(){
                    let dataStr = `{
                        "sid" : "${this.selected}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}get_barber_detail.php`, (json) => {
                        if(json.e !== 0){
                            alert(JSON.stringify(json))
                            Message.toast('无法开始服务');
                        }else{
                            //this.selected_1 = this.selected;
                            this.studio_dict = JSON.parse(JSON.stringify(json.data.studio_dict))
                            this.barber_list = JSON.parse(JSON.stringify(json.data.barber_list))
                            this.options = [];
                            Util.inEach(this.studio_dict, (obj,key)=>{
                                this.options.push({
                                    value:key,
                                    text:obj,
                                })
                            });
                            Util.inEach(this.barber_list, (obj,key)=>{
                                obj.options = this.options;
                            });
                            console.log(this.barber_list);
                        }
                    });
                },
                save(barber){
                    let dataStr = `{
                        "sid" : "${barber.owner_id}",
                        "bid" : "${barber.id}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}save_barber_detail.php`, (json) => {
                        if(json.e !== 0){
                            Message.toast('无法开始服务');
                        }else{
                            Message.toast('调动成功');
                            this.get_barbers_detail()
                        }
                    });
                },
                changeMobile(barber, isMobile) {
                    let dataStr = `{
                        "bid" : "${barber.id}",
                        "isMobile" : "${isMobile}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}changeBarberMobile.php`, (json) => {
                        if (json.e !== 0) {
                            Message.toast('修改失败');
                        } else {
                            Message.toast(json.data.msg);
                            this.get_barbers_detail()
                        }
                    });
                },
                get_data(){
                    if(!this.date){
                        let DateObj = new Date()
                        this.date = `${DateObj.getFullYear()}-${DateObj.getMonth()+1}-${DateObj.getDate()}`;
                    }
                    let dataStr = `{
                        "date" : "${this.date}"
                    }`;
                    Util.ajax(dataStr, `${db.data.api}get_day_detail.php`, (json) => {
                        if(json.e !== 0){
                            Message.toast('无法开始服务');
                        }else{
                            console.log(json.data)
                            // this.studio_list.push({
                            //
                            // })
                        }
                    });
                }
            }
        });
    }
}