$(function () {
    var uye= {
        init: function () {
            this.groupPurchaseList();
        },
        //团购详情界面
        groupPurchaseList:function(){
            var This=this;
            var _id=This.getParam('groupid');
            var url="../json/index"+_id+".json";
            $.get(url,function(data){
                if(data.status!==200){
                    return false;
                }
                var html = template('groupdetails',data);
                $(".main-warp").html(html);
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
        getAllParam :function() {
            var json = {};
            var param = decodeURIComponent(window.location.search.substr(1));
            param.replace(/([^&\.*]+)=([^&\.*]+)/gi, function(a, b, c) {
                json[b] = c;
            });
            return json;
        },
        getParam :function(name) {
            return this.getAllParam()[name];
        }
    }
    uye.init();
})

