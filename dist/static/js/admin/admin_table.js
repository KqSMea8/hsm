'use strict';

(function () {
    var getHtml = function getHtml(id) {
        return '\n<style>\ntextarea{\n    width: 100px;\n    height: 50px;\n}\n</style>\n<section id="' + id + '_vue">\n    <iframe name="nm_iframe" style="display:none;"></iframe>\n    <table class="table table-bordered table-striped">\n        <thead>\n        <tr>\n            <td class="{{(item.text==\'id\'||item.text==\'create_time\'||item.text==\'update_time\')?\'disn\':\'\'}}" v-for="item in table">{{item.text}}</td>\n            <td>\u64CD\u4F5C</td>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n            <td class="{{(item.text==\'id\'||item.text==\'create_time\'||item.text==\'update_time\')?\'disn\':\'\'}}" v-for="item in table"><textarea rows="1" type="text" v-model="add[item.text]" @focus="keydown($event)" @keyup="keydown($event)"></textarea></td>\n            <td @click="addClick()"><button class="btn btn-success" style="width:130px;">\u6DFB\u52A0</button></td>\n        </tr>\n        <tr v-for="(i, obj) in contents" title="{{i}}">\n            <td class="{{(key==\'id\'||key==\'create_time\')?\'disn\':\'\'}}" v-for="(key, value) in obj" title="{{key}}">\n            <!--{{(key==\'img\')?\'readonly = readonly\':\'\'}}-->\n            <!--style="{{(key==\'img\')?\'height:0;width:0;opacity:0;\':\'\'}}"-->\n                <textarea cols="3" class="input"  rows="1" type="text" v-model="value" title="{{key}}" @focus="keydown($event)" @keyup="keydown($event)"></textarea>\n                <input title="0" style="{{(key==\'img\')?\'width:74px;\':\'display:none;\'}}" type="file" v-on:change="imgChange($event, $parent.$index)">\n                <img :src="(key==\'img\'&&(value.split(\'|\'))[0])?(value.split(\'|\'))[0]:\'\'" style="width:100px" class="{{(key==\'img\')?\'\':\'disn\'}}">\n                <input title="1" style="{{(key==\'img\')?\'width:74px;\':\'display:none;\'}}" type="file" v-on:change="imgChange($event, $parent.$index)">\n                <img :src="(key==\'img\'&&(value.split(\'|\'))[1])?(value.split(\'|\'))[1]:\'\'" style="width:100px" class="{{(key==\'img\')?\'\':\'disn\'}}">\n                <input title="2" style="{{(key==\'img\')?\'width:74px;\':\'display:none;\'}}" type="file" v-on:change="imgChange($event, $parent.$index)">\n                <img :src="(key==\'img\'&&(value.split(\'|\'))[2])?(value.split(\'|\'))[2]:\'\'" style="width:100px" class="{{(key==\'img\')?\'\':\'disn\'}}">\n            </td>\n            <td>\n                <button @click="setClick($index)" class="btn btn-danger">\u4FEE\u6539</button>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n                <button @click="deleteClick($index)" class="btn btn-danger" style="padding:0;">\u5220\u9664</button>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n    <ul class="pagination pagination-lg">\n        <li class="{{i.active?\'active\':\'\'}}" @click="fenyeClick($index)" v-for="i in fenye"><a href="#">{{i.text}}</a></li>\n    </ul>\n</section>\n';
    };
    for (var key in ids) {
        $(".right-area").append(getHtml(key));
    }
})();

var mobj = {
    el: '',
    compiled: function compiled() {
        this.init();
    },
    data: {
        tableName: '',
        fenye: [],
        table: [{ text: 'name' }],
        add: {},
        contents: []
    },
    methods: {
        init: function init() {
            this.getRowsCount();
        },
        keydown: function keydown(event) {
            var obj, scrollTop;
            obj = $(event.target);
            scrollTop = obj.scrollTop();
            if (scrollTop > 0) {
                obj.css('height', obj.height() + scrollTop + 20);
            }
        },
        getRowsCount: function getRowsCount() {
            var _this = this;
            var dataStr, length, i;
            dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '"' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Get_obj_count', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    length = Math.ceil(parseInt(data[MESSAGE]) / 10);
                    if (length === 0) {
                        length = 1;
                    }
                    _this.fenye = [];
                    for (i = 0; i < length; i++) {
                        _this.fenye[i] = { text: i + 1, active: false };
                    }
                    _this.fenyeClick(0);
                }
            });
        },
        fenyeClick: function fenyeClick(index) {
            var _this = this;
            var i, dataStr, key;
            for (i = 0; i < this.fenye.length; i++) {
                _this.fenye[i].active = false;
            }
            _this.fenye[index].active = true;
            dataStr = '{' + '"' + LIMIT + '":"' + 10 + '",' + '"' + INDEX + '":"' + index + '",' + '"' + TABLE + '":"' + this.tableName + '"' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Get_obj_arr', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    _this.contents = data[MESSAGE];
                    i = 0;
                    for (key in _this.contents[0]) {
                        if (_this.contents[0].hasOwnProperty(key)) {
                            _this.table[i] = { text: key };
                            i++;
                        }
                    }
                    _this.table = JSON.parse(JSON.stringify(_this.table));
                }
            });
        },
        addClick: function addClick() {
            if (!confirm("确定要添加该条数据吗")) return false;
            var dataStr;
            dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '",' + '"' + MESSAGE + '":' + JSON.stringify(this.add) + '' + '}';
            var _this = this;
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Add_obj', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    _this.fenyeClick(this.fenye.length - 1);
                    Message.getInstance().toast('添加成功');
                    app.publish('add_one_callBack');
                }
            });
        },
        imgChange: function imgChange(event, index) {
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
            xhr.open('post', db.data.api + '?r=' + controller + '/set_img&id=' + this.rows[index].id + '&t=' + this.tableName, true);
            xhr.send(data);
            xhr.onload = function () {
                var json = JSON.parse(xhr.responseText);
                if (!isNaN(json[Api.CODE])) {
                    Message.getInstance().toast(json[Api.MESSAGE]);
                    return;
                }
                $(input).next().attr('src', xhr.responseText);
                var str = $(input).parent().find('.input').eq(0).val();
                var arr = str.split('|');
                console.log(arr);
                if (str.indexOf('|') < 0) {
                    arr = ['', '', ''];
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
        setClick: function setClick(index) {
            if (!confirm("确定要修改该条数据吗")) return false;
            var dataStr;
            dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '",' + '"' + KEY + '":{"id":"' + this.contents[index]['id'] + '"},' + '"' + MESSAGE + '":' + JSON.stringify(this.contents[index]) + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Update_obj', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    Message.getInstance().toast('修改成功');
                    app.publish('set_one_callBack');
                }
            });
        },
        deleteClick: function deleteClick(index) {
            if (!confirm("确定要删除！！！！")) return false;
            var dataStr, length, i;
            dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '",' + '"' + KEY + '":{"id":"' + this.contents[index]['id'] + '"}' + '}';
            var _this = this;
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Remove_obj', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    Message.getInstance().toast('删除成功');
                    app.publish('delete_one_callBack');
                    length = _this.fenye.length;
                    for (i = 0; i < length; i++) {
                        if (_this.fenye[i].active === true) {
                            _this.fenyeClick(i);
                            break;
                        }
                    }
                }
            });
        }
    }
};

var key, evalString;
for (key in ids) {
    if (ids.hasOwnProperty(key)) {
        evalString = '\n var ' + key + ' = (function(mobj){\n     var mo = Util.getInstance().clone(mobj);\n     mo.el = \'#' + key + '_vue\';\n     mo.data.tableName = \'' + ids[key]['tableName'] + '\';\nfunction a(){}\na.getInstance = function () {\n    if (!this.self) {\n        this.self = new a();\n    }\n    return this.self;\n};\na.prototype.vue = null;\na.prototype.hash = \'\';\na.prototype.vue_ = function(){\n    this.vue = new VueP(mo);\n};\nreturn a;\n}(mobj));\n \n';
        // console.log(evalString);
        eval(evalString);
    }
}
//# sourceMappingURL=admin_table.js.map