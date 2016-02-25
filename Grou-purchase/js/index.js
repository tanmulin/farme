$(function () {
    var uye= {
        init: function () {
            this.evenHander();
            this.dataDefault();
            this.selectcity();

        },
        dataDefault:function(){
                var This=this;
                var b=This.getItem("default_city");
                var url;
                if(b===null){
                    url="../json/index1.json";
                }else{
                    url="../json/index"+b+".json"
                }
                $.get(url, function (data) {
                    if(data.status!==200){
                        return false;
                    }
                    var html = template('index',data);
                    $(".datalist").html(html);
                    if(data.length==0){
                        $(".datalist").html(暂时没有开通);
                    }
            })
        },
        evenHander:function(){
            var This=this;
            $('.index-city-ul').on('click','li',function(){
                //拿到城市id
                var cityId=$(this).attr('data-city');
                This.groupPurchaseList(cityId);
                This.setItem("default_city",cityId);
            })
        },
        groupPurchaseList:function(cityid){
            var url="../json/index"+cityid+".json";
            $.get(url,function(data){
                if(data.status!==200){
                    return false;
                }
                var html = template('index',data);
                $(".datalist").html(html);
                if(data.length==0){
                    $(".datalist").html(暂时没有开通);
                }
            });
        },
        selectcity: function () {
            var This=this;
            var b=This.getItem("default_city");
            if(b==1){$(".header-left-city").html("深圳市");}
            if(b==2){$(".header-left-city").html("北京市");}
            if(b==3){$(".header-left-city").html("上海市");}
            if(b==4){$(".header-left-city").html("广州市");}
            $("#select ul li").click(function(){
                var select=$(this).find("span").html();
                $(this).addClass("index-city-li-active").siblings().removeClass("index-city-li-active");
                $(".header-left-city").html(select);
                $("#select").css("display","none");
            });
            $(".header-left-city").click(function(){
                $("#select").css("display","block");
            });
        },
        setItem:function(key, value) {
            if (window.localStorage) {
                localStorage.setItem(key, value);
            } else {
                var exp = new Date();
                exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1e3);
                document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString() + ";path=/;";
            }
            function delCookie(name) {}
        },
        getItem: function(key) {
            if (window.localStorage) {
                return localStorage.getItem(key);
            } else {
                var arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
                if (arr != null) return decodeURIComponent(arr[2]);
                return null;
            }
        },
        removeItem:function(key) {
            if (window.localStorage) {
                localStorage.removeItem(key);
            } else {
                var exp = new Date();
                exp.setTime(exp.getTime() - 1);
                var cval = this.getItem(key);
                if (cval != null) {
                    document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
                }
            }
        }

    }
    uye.init();
})

