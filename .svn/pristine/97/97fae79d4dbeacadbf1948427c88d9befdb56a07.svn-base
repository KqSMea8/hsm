'use strict';

(function () {
    var getHtml = function getHtml(id) {
        return '\n<style>\ntextarea{width:100px;height:auto;resize:none;}\n</style>\n<section id="' + id + '_vue">\n    <iframe name="nm_iframe" style="display:none;"></iframe>\n    <div v-for="obj in rows" >\n        <div class="form-group" v-for="o in canUpdate">\n            <div v-if="o==\'lon\'">\n                <div id="' + id + '_vue_map{{$parent.$index}}" class="w100" style="height:200px;"></div>\n            </div>\n            <div v-if="o==\'img\'">\n                <label>{{o}}</label>\n                <input style="height:0;width:0" class="form-control o0" v-model="obj[o]" type="text" :placeholder="\'\u8BF7\u8F93\u5165\'+translate[o]">\n                <input type="file" title="0" @change="imgChange($event, $parent.$index)">\n                <img class="w100" :src="obj[o]" />\n            </div>\n            <div v-if="o==\'status\'">\n                <button class="btn btn-danger btn-lg" @click="deleteClick($parent.$index)">\u5220\u9664</button>\n            </div>\n            \n            <div v-if="o==\'service\'">\n               <label>{{o}}</label>\n                <select v-model="obj[o]">\n                     <option v-for="option in options_service" value="{{option.id}}">{{option.name}}</option>\n                </select>\n            </div>\n            \n            <div v-if="o==\'discount_id\'">\n               <label>{{o}}</label>\n                <select v-model="obj[o]">\n                    <option v-for="option in options_discount" value="{{option.id}}">{{option.name}}</option>\n                </select>\n            </div>\n            \n            <div v-if="(o!=\'lon\'&&o!=\'lat\'&&o!=\'id\'&&o!=\'img\'&&o!=\'area\'&&o!=\'geo_hash\'&&o!=\'status\'&&o!=\'discount_id\'&&o!=\'service\'&&o)">\n                <label>{{o}}</label>\n                <input class="form-control" v-model="obj[o]" type="text" :placeholder="\'\u8BF7\u8F93\u5165\'+translate[o]">\n            </div>\n        </div>\n        <button class="{{(count==0)?\'disn\':\'\'}} btn btn-success btn-lg" @click="set_one($index)">\u4FDD\u5B58</button>\n         <hr />\n    </div>\n    <button class="btn btn-primary btn-lg" @click="add_one()">\u65B0\u5EFA</button>\n</section>\n';
    };
    var key;
    for (key in ids) {
        if (ids.hasOwnProperty(key)) $(".right-area").append(getHtml(key));
    }
})();
var mobj = {
    el: '',
    created: function created() {
        this.translate = translate;
    },
    compiled: function compiled() {
        this.init();
    },
    data: {
        tableName: '',
        key: '',
        val: '',
        count: 0,
        m_rows: [],
        options_discount: [],
        options_service: []
    },
    computed: {
        rows: {
            get: function get() {
                return this.m_rows;
            },
            set: function set(val) {
                var _this = this;
                var i, point, marker, lon;
                console.log('set set set info info info');
                _this.m_rows = val;
                for (i = 0; i < _this.rows.length; i++) {
                    if (_this.rows[i].hasOwnProperty('lon')) {
                        console.log('make a map');
                        (function (index) {
                            setTimeout(function () {
                                if (!!app.baiduMap === false) app.baiduMap = [];
                                app.baiduMap[index] = app.map.initAppMap($(_this.$el).attr('id') + "_map" + index);
                                if (_this.rows[index].lon && _this.rows[index].lat) point = new app.map.getPoint(_this.rows[index].lon / 1000000, _this.rows[index].lat / 1000000);else point = new app.map.getPoint(113, 22);
                                app.map.setCenter(app.baiduMap[index], point, 9);
                                marker = new app.map.getMarker(point);
                                app.map.addMarker(app.baiduMap[index], marker);
                                app.map.addMapEventListener(app.baiduMap[index], "click", function (e) {
                                    var lon, lat, message;
                                    lon = e.point.lng;
                                    lat = e.point.lat;
                                    //得到 area 信息
                                    app.map.getPlaceByLatLon(lon, lat, _this, index);
                                    _this.rows[index].geo_hash = GeoHash.encodeGeoHash(lat, lon);
                                    message = "你想要设置" + lon + ',' + lat + "为范围中心吗?";
                                    Message.getInstance().dialog('提示', message, '确定', '取消', function () {
                                        Message.getInstance().removeDialog();
                                        _this.rows[index].lon = lon * 1000000;
                                        _this.rows[index].lat = lat * 1000000;
                                        point = new app.map.getPoint(lon, lat);
                                        app.map.setCenter(app.baiduMap[index], point, 15);
                                        app.map.clearMap(app.baiduMap[index]);
                                        marker = new app.map.getMarker(point);
                                        app.map.addMarker(app.baiduMap[index], marker);
                                    }, function () {
                                        Message.getInstance().removeDialog();
                                    });
                                });
                            }, 500);
                        })(i);
                    }
                }
            }
        }
    },
    methods: {
        getPlaceByLatLon_CallBack: function getPlaceByLatLon_CallBack(obj, index) {
            this.rows[index].area = obj.city + ',' + obj.district;
        },
        init: function init() {
            var _this = this;
            var dataStr;
            this.getRows();
            requirejs(['user/js/BarberUtil'], function (BarberUtil) {
                if (this.tableName === BarberUtil.STUDIO_TABLE) {
                    dataStr = '{' + '"' + TABLE + '":"' + BarberUtil.DISCOUNT_STRATEGY_TABLE + '",' + '"' + KEY + '":"' + this.key + '"' + '}';
                    Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Get_obj_arr', function (data) {
                        if (data[CODE] === 0) {
                            _this.options_discount = data[MESSAGE];
                        } else {
                            Message.getInstance().toast(data[MESSAGE], 3);
                        }
                    });
                }

                dataStr = '{' + '"' + TABLE + '":"' + BarberUtil.SERVICE_TABLE + '"' + '}';
                Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Get_obj_arr', function (data) {
                    if (data[CODE] === 0) {
                        _this.options_service = data[MESSAGE];
                    } else {
                        Message.getInstance().toast(data[MESSAGE], 3);
                    }
                });
            });
        },
        keydown: function keydown(event) {
            var obj, scrollTop;
            obj = $(event.target);
            scrollTop = obj.scrollTop();
            if (scrollTop > 0) {
                obj.css('height', obj.height() + scrollTop + 20);
            }
        },
        getRows: function getRows() {
            var _this = this;
            var dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '",' + '"' + KEY + '":"' + this.key + '"' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Get_obj_arr', function (data) {
                if (data[CODE] === 0) {
                    _this.count = data[MESSAGE].length;
                    _this.rows = data[MESSAGE];
                } else {
                    Message.getInstance().toast(data[MESSAGE], 3);
                }
            });
        },
        set_one: function set_one(index) {
            if (!confirm("确定要修改该条数据吗")) return false;
            var obj, dataStr;
            obj = this.rows[index];
            dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '",' + '"' + KEY + '":"' + this.key + '",' + '"' + AND_ + '":{"id":' + obj['id'] + '},' + '"' + MESSAGE + '":' + JSON.stringify(obj) + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Update_obj', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    Message.getInstance().toast('更改成功');
                }
            });
        },
        add_one: function add_one() {
            var _this = this;
            if (!confirm("确定要添加该条数据吗")) return false;
            var dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '",' + '"' + KEY + '":{"' + this.key + '":""},' + '"' + MESSAGE + '":{"' + this.key + '":""}' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Add_obj', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    Message.getInstance().toast('添加成功');
                    _this.getRows();
                }
            });
        },
        imgChange: function imgChange(event, index) {
            var _this = this;
            var input,
                data,
                i,
                file,
                xhr,
                arr = [],
                imgNum,
                imgIndex,
                id;
            input = event.target;
            console.log('imgChange');
            data = new FormData();
            for (i = 0; i < input.files.length; i++) {
                //file property: name, size, type, lastModifiedDate
                file = input.files[i];
                data.append(file.name, file);
            }
            xhr = new XMLHttpRequest();
            xhr.open('post', db.data.api + '?r=' + controller + '/set_img&id=' + this.rows[index].id + '&t=' + this.tableName, true);
            xhr.send(data);
            xhr.onload = function () {
                var json = JSON.parse(xhr.responseText);
                if (json[Api.CODE] === 0) {
                    console.log(json[Api.MESSAGE]);
                    imgIndex = $(input).attr('title');
                    $(input).parent().find('img').eq(imgIndex).attr('src', json[Api.MESSAGE]);
                    imgNum = $(input).parent().find('img').length;
                    for (i = 0; i < imgNum; i++) {
                        arr.push($(input).parent().find('img').eq(i).attr('src'));
                    }
                    _this.rows[index].img = arr.join('|');
                } else {
                    Message.getInstance().toast(json[Api.MESSAGE]);
                }
            };
            xhr.onerror = function (err) {
                console.error(err);
            };
        },
        deleteClick: function deleteClick(index) {
            var _this = this;
            if (!confirm("确定要删除！！！！")) return false;
            var dataStr = '{' + '"' + TABLE + '":"' + this.tableName + '",' + '"' + KEY + '":"' + this.key + '",' + '"' + AND_ + '":{"id":' + this.rows[index]['id'] + '},' + '"' + MESSAGE + '":{"status":0}' + '}';
            Util.getInstance().ajax(dataStr, db.data.api + '?r=' + controller + '/Update_obj', function (data) {
                if (data[CODE] !== 0) {
                    Message.getInstance().toast(data[MESSAGE], 3);
                } else {
                    Message.getInstance().toast('删除成功');
                    _this.getRows();
                }
            });
        }
    }
};

var key, evalString;
for (key in ids) {

    if (ids.hasOwnProperty(key)) {
        evalString = '\n var ' + key + ' = (function(mobj){\n     var mo = Util.getInstance().clone(mobj);\n     mo.el = \'#' + key + '_vue\';\n     mo.data.tableName = \'' + ids[key]['tableName'] + '\';\n     mo.data.key = \'' + ids[key]['key'] + '\';\n     mo.data.canUpdate = ' + JSON.stringify(ids[key]['canUpdate']) + ';\n\nfunction a(){}\na.getInstance = function () {\n    if (!this.self) {\n        this.self = new a();\n    }\n    return this.self;\n};\na.prototype.vue = null;\na.prototype.hash = \'\';\na.prototype.vue_ = function(){\n    this.vue = new VueP(mo);\n};\nreturn a;\n}(mobj));\n \n';
        eval(evalString);
    }
}
//# sourceMappingURL=admin_table_person.js.map