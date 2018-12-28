(function(){
    var getHtml = function(){
        return `
<style>
            .pad-top-10 {padding-top: 3px;}
            .right-area {height: 100%;}
            .left-bar li {color: #333;width: 100%;padding: 10px 15px;border-radius: 5px;background-color: #efefef;cursor: pointer;margin-bottom: 5px;  }
            .left-bar li:hover {background-color: #ddd;}
            li.main {font-weight: 900;}
            li.active {background-color: #333;color: #fff;}
            li.active:hover {background-color: #333;color: #fff;}
            .left-bar span {margin-right: 5px;}
            ul.second {display: none;}
            ul.second li {background-color: #fff;padding-left: 40px;}
            iframe {border: none;width: 100%;height: 100%;}
            .glyphicon-ok {float: right;color: red;}
        </style>
        <ul class="main">
            <li class="main Child " onclick="$(this).next().children().eq(0).trigger('click')">
                <span class="glyphicon glyphicon-user"></span>用户管理
                <span class="pad-top-10 fr glyphicon glyphicon-chevron-down"></span>
            </li>
            <ul class="second">
                <li onclick="rightAreaHref('admin_login',event)">用户登陆<span
                        class="ok glyphicon"></span>
                </li>
            </ul>

            <li class="main Child " onclick="$(this).next().children().eq(0).trigger('click')">
                <span class="glyphicon glyphicon-hdd"></span>数据管理
                <span class="pad-top-10 fr glyphicon glyphicon-chevron-down"></span>
            </li>
            <ul class="second" id="opt_vue">
                <li v-for="li in lis" onclick="rightAreaHref('{{li.id}}', event);opt_vue.index = {{$index}}">{{li.text}}<span
                        class="ok glyphicon"></span>
                </li>
            </ul>
        </ul>
`;
    };

    $('.left-bar').append(getHtml());
})();

var opt_vue = new Vue({
    el:'#opt_vue',
    compiled:function(){
        this.init();
    },
    data:{
        lis : []
    },
    methods:{
        init:function(){
            var i=0,key;
            for(key in ids){
                if(ids.hasOwnProperty(key)){
                    this.lis[i] = {id:key, text:ids[key].name+'数据'};
                    i++;
                }
            }
            this.lis = JSON.parse(JSON.stringify(this.lis));
        }
    }
});

var left_bar_li = $(".left-bar li");
left_bar_li.bind("click", leftBarToggle);
$("ul.main").find("ul.second li").unbind("click", leftBarToggle);

function leftBarToggle() {
    if ($(this).hasClass("active")) {
        liToggle($(this));
    } else {
        left_bar_li.removeClass("active");
        $(this).addClass("active");

        left_bar_li.each(function (index, value) {
            if ($(value).hasClass("hasChild")) {
                $(value).removeClass("hasChild").next().slideUp();
            }
        });

        liToggle($(this));
    }
}

function liToggle(obj) {
    if (obj.hasClass("Child")) {
        if (obj.hasClass("hasChild")) {
            obj.removeClass("hasChild").next().slideUp();
        } else {
            obj.addClass("hasChild").next().slideDown();
        }
    }
}

function rightAreaHref(name,e) {
    location.hash = name;
    $("span.ok").removeClass("glyphicon-ok");
    $(e.target).find("span").addClass("glyphicon-ok");
}