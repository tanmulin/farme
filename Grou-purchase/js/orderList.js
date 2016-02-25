$(function () {
    var uye= {
        init: function () {
            this.select();
            this.quxiao();
            //this.tishi();
        },
        select: function () {
            $(document).on("click",".tab li", function () {
                var num=$(this).index();
                $(this).addClass("on").siblings().removeClass("on");
                $(".Service").eq(num).css("display","block").siblings().css("display","none");
            });
        },
        quxiao:function(){
            $(".wait .quxiao").click(function(){

                var qu=$(this).index();
                if(confirm("是否取消订单")){
                   $(this).parent().parent().parent().remove();
                }
            });
        },
        //tishi:function(){
        //    alert((".wait").text())
        //    //if($(".wait").text()){
        //    //}else{
        //    //    $(".wait").text("暂时没有等待服务订单");
        //    //}
        //}
        

    }
    uye.init();
})

