$(function () {
    var uye= {
        init: function () {
            this.saveAddress();
        },
        //博村
        saveAddress:function(){
            //$(document).on('click',"#save",function(){
            //    for (var i= 0;i<$(".address input").length;i++){
            //        var phone=$("#phone").val();
            //        //alert("222");
            //        if($(".address input").eq(i).val()==""){
            //            alert("请填写您的详细地址");
            //            break;
            //        }else if(phone && /^1[3|4|5|8]\d{9}$/.test(phone)){
            //            window.location.href="personalCenter.html";
            //            }else{
            //                alert("请输入正确的电话号码");
            //                break;
            //            }
            //    }
            //});
            //$(document).on('click',"#save",function(){
            //    for (var i= 0;i<$(".address input").length;i++){
            //        var phone=$("#phone").val();
            //        //alert("222");
            //        if($(".address input").eq(i).val()==""){
            //            alert("请填写您的详细地址");
            //            break;
            //        }else if(phone && /^1[3|4|5|8]\d{9}$/.test(phone)){
            //            window.location.href="personalCenter.html";
            //        }else{
            //            alert("请输入正确的电话号码");
            //            break;
            //        }
            //    }
            //});
            $("#save").click(function () {
                for (var i= 0;i<$(".address input").length;i++){
                    var phone=$("#phone").val();
                    if($(".address input").eq(i).val()==""){
                        alert("请填写您的详细地址");
                        //break;
                    }else{
                        window.location.href="personalCenter.html";
                    }


                }
            });
        }
    }
    uye.init();
})

