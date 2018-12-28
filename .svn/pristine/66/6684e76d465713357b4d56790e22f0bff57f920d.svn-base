
(function(){
    var getHtml = function(id){
        return `
<style>
textarea{
    width: 100px;
    height: 50px;
}
</style>
<section id="`+id+`_vue">
    <iframe name="nm_iframe" style="display:none;"></iframe>
    <table class="table table-bordered table-striped">
        <thead>
        <tr>
            <td class="{{(item.text=='id'||item.text=='create_time'||item.text=='update_time')?'disn':''}}" v-for="item in table">{{item.text}}</td>
            <td>操作</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="{{(item.text=='id'||item.text=='create_time'||item.text=='update_time')?'disn':''}}" v-for="item in table"><textarea rows="1" type="text" v-model="add[item.text]" @focus="keydown($event)" @keyup="keydown($event)"></textarea></td>
            <td @click="addClick()"><button class="btn btn-success" style="width:130px;">添加</button></td>
        </tr>
        <tr v-for="(i, obj) in contents" title="{{i}}">
            <td class="{{(key=='id'||key=='create_time')?'disn':''}}" v-for="(key, value) in obj" title="{{key}}">
            <!--{{(key=='img')?'readonly = readonly':''}}-->
            <!--style="{{(key=='img')?'height:0;width:0;opacity:0;':''}}"-->
                <textarea cols="3" class="input"  rows="1" type="text" v-model="value" title="{{key}}" @focus="keydown($event)" @keyup="keydown($event)"></textarea>
                <input title="0" style="{{(key=='img')?'width:74px;':'display:none;'}}" type="file" v-on:change="imgChange($event, $parent.$index)">
                <img :src="(key=='img'&&(value.split('|'))[0])?(value.split('|'))[0]:''" style="width:100px" class="{{(key=='img')?'':'disn'}}">
                <input title="1" style="{{(key=='img')?'width:74px;':'display:none;'}}" type="file" v-on:change="imgChange($event, $parent.$index)">
                <img :src="(key=='img'&&(value.split('|'))[1])?(value.split('|'))[1]:''" style="width:100px" class="{{(key=='img')?'':'disn'}}">
                <input title="2" style="{{(key=='img')?'width:74px;':'display:none;'}}" type="file" v-on:change="imgChange($event, $parent.$index)">
                <img :src="(key=='img'&&(value.split('|'))[2])?(value.split('|'))[2]:''" style="width:100px" class="{{(key=='img')?'':'disn'}}">
            </td>
            <td>
                <button @click="setClick($index)" class="btn btn-danger">修改</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
                <button @click="deleteClick($index)" class="btn btn-danger" style="padding:0;">删除</button>
            </td>
        </tr>
        </tbody>
    </table>
    <ul class="pagination pagination-lg">
        <li class="{{i.active?'active':''}}" @click="fenyeClick($index)" v-for="i in fenye"><a href="#">{{i.text}}</a></li>
    </ul>
</section>
`
    };
    for(var key in ids){
        $(".right-area").append(getHtml(key));
    }
})();

var mobj = {
    el:'',
    compiled:function () {
        this.init();
    },
    data:{
        tableName:'',
        fenye:[],
        table:[
            {text:'name'}
        ],
        add:{},
        contents:[]
    },
    methods:{
        init:function(){
            this.getRowsCount();
        },
        keydown:function(event){
            var obj, scrollTop;
            obj = $(event.target);
            scrollTop = obj.scrollTop();
            if(scrollTop>0){
                obj.css('height',obj.height() + scrollTop + 20 );
            }
        },
        getRowsCount:function(){
            var _this = this;
            var dataStr, length, i;
            dataStr = '{' +
                '"'+TABLE+'":"'+this.tableName+'"' +
                '}';
            Util.getInstance().ajax(dataStr, db.data.api+'?r='+controller+'/Get_obj_count', function(data){
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    length = Math.ceil(parseInt(data[MESSAGE])/10);
                    if(length === 0){
                        length = 1;
                    }
                    _this.fenye = [];
                    for(i=0;i<length;i++){
                        _this.fenye[i] = {text:i+1,active:false};
                    }
                    _this.fenyeClick(0);
                }
            });
        },
        fenyeClick:function(index){
            var _this = this;
            var i, dataStr, key;
            for(i=0;i<this.fenye.length;i++){
                _this.fenye[i].active = false;
            }
            _this.fenye[index].active = true;
            dataStr = '{' +
                '"'+LIMIT+'":"'+10+'",' +
                '"'+INDEX+'":"'+index+'",' +
                '"'+TABLE+'":"'+this.tableName+'"' +
                '}';
            Util.getInstance().ajax(dataStr, db.data.api+'?r='+controller+'/Get_obj_arr', function(data){
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    _this.contents = data[MESSAGE];
                    i = 0;
                    for(key in _this.contents[0]){
                        if(_this.contents[0].hasOwnProperty(key)){
                            _this.table[i] = {text:key};
                            i++;
                        }
                    }
                    _this.table = JSON.parse(JSON.stringify(_this.table));
                }
            });
        },
        addClick:function(){
            if(!confirm("确定要添加该条数据吗"))
                return false;
            var dataStr;
            dataStr = '{' +
                '"'+TABLE+'":"'+this.tableName+'",' +
                '"'+MESSAGE+'":'+JSON.stringify(this.add)+'' +
                '}';
            var _this = this;
            Util.getInstance().ajax(dataStr, db.data.api+'?r='+controller+'/Add_obj', function(data){
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    _this.fenyeClick(this.fenye.length-1);
                    Message.getInstance().toast('添加成功');
                    app.publish('add_one_callBack');
                }
            });
        },
        imgChange:function(event, index){
            var self = this;
            var input = event.target;
            var index = $(input).attr('title');
            // var form = input.parentElement;
            var data = new FormData();
            for (var i = 0, len = input.files.length; i < len; i++) {
                //file property: name, size, type, lastModifiedDate
                var file = input.files[i];
                data.append(file.name, file);
            }
            var xhr = new XMLHttpRequest();
            xhr.open('post', db.data.api+'?r='+controller+'/set_img&id='+this.rows[index].id+'&t='+this.tableName, true);
            xhr.send(data);
            xhr.onload = function () {
                var json = JSON.parse(xhr.responseText);
                if(!isNaN(json[Api.CODE])){
                    Message.getInstance().toast(json[Api.MESSAGE]);
                    return;
                }
                $(input).next().attr('src',xhr.responseText);
                var str = $(input).parent().find('.input').eq(0).val();
                var arr = str.split('|');
                console.log(arr);
                if(str.indexOf('|') <0 ){
                    arr = ['','',''];
                }
                arr[index] = xhr.responseText;
                console.log(arr);
                var i = $(input).parents('tr').attr('title');
                var key = $(input).parents('td').attr('title');
                self.contents[i][key] = arr.join('|');
            };
            xhr.onerror = function (err) {
                console.error(err);
            };
        },
        setClick:function(index){
            if(!confirm("确定要修改该条数据吗"))
                return false;
            var dataStr;
            dataStr = '{' +
                '"'+TABLE+'":"'+this.tableName+'",' +
                '"'+KEY+'":{"id":"'+this.contents[index]['id']+'"},' +
                '"'+MESSAGE+'":'+JSON.stringify(this.contents[index])+
                '}';
            Util.getInstance().ajax(dataStr, db.data.api+'?r='+controller+'/Update_obj', function(data){
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    Message.getInstance().toast('修改成功');
                    app.publish('set_one_callBack');
                }
            });
        },
        deleteClick:function(index){
            if(!confirm("确定要删除！！！！"))
                return false;
            var dataStr, length, i;
            dataStr = '{' +
                '"'+TABLE+'":"'+this.tableName+'",' +
                '"'+KEY+'":{"id":"'+this.contents[index]['id']+'"}'+
                '}';
            var _this = this;
            Util.getInstance().ajax(dataStr, db.data.api+'?r='+controller+'/Remove_obj', function(data){
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    Message.getInstance().toast('删除成功');
                    app.publish('delete_one_callBack');
                    length = _this.fenye.length;
                    for(i=0;i<length; i++){
                        if(_this.fenye[i].active === true){
                            _this.fenyeClick(i);
                            break;
                        }
                    }
                }
            });
        }
    }
};

var key,evalString;
for(key in ids){
    if(ids.hasOwnProperty(key)){
        evalString = `
 var `+key+` = (function(mobj){
     var mo = Util.getInstance().clone(mobj);
     mo.el = '#`+key+`_vue';
     mo.data.tableName = '`+ids[key]['tableName']+`';
function a(){}
a.getInstance = function () {
    if (!this.self) {
        this.self = new a();
    }
    return this.self;
};
a.prototype.vue = null;
a.prototype.hash = '';
a.prototype.vue_ = function(){
    this.vue = new VueP(mo);
};
return a;
}(mobj));
 
`;
        // console.log(evalString);
        eval(evalString);
    }
}
