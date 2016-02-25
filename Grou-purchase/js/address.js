$(function () {
    var uye= {
        init: function () {
            this.deleteaddress();
            this.addAddress();
        },
        deleteaddress:function(){
                $(".delete ").click(function (){
                    if(confirm('是否确定删除该地址')){
                        $(this).parent().remove();
                    }else{
                    }
                });
        },
        addAddress:function(){
            $("#save").click(function(){
                for (var i= 0;i<$(".address input").length;i++){
                    if($(".address input").eq(i).val()==""){
                        alert("请填写您的详细地址");
                        break;
                    }else{
                        window.location.href="address.html";
                        //window.location.href="javascript:history.back(-1)";
                    }
                }
            });
            }

    }
    uye.init();
})

