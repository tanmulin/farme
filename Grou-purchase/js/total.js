$(function () {
    var uye= {
        init: function () {
            this.groupPurchaseTotal();
            this.personalBuy();
        },
        //团体购买
        groupPurchaseTotal:function(){
            var This=this;
            var _id=This.getParam('total');
            var url="../json/index"+_id+".json";
            $.get(url,function(data){
                if(data.status!==200){
                    return false;
                }
                var html = template('group-total',data);
                $(".main-warp-out").html(html);
            });
        },
        //单独购买
        personalBuy:function(){
            var This=this;
            var _id=This.getParam('personal');
            var url="../json/index"+_id+".json";
            $.get(url,function(data){
                if(data.status!==200){
                    return false;
                }
                var html = template('personal-bug',data);
                $(".main-warp-out").html(html);
            });
        },
        //地址填写返回

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

