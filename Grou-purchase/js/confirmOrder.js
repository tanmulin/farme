$(function () {
    var uye= {
        init: function () {
            this.payMent();
            this.getAddress();
            this.deleteaddress();
            this.addAddress();
            this.selectAddress();

        },
        //获取服务器地址列表
        getAddress:function(){
            $.get("../json/address.json", function (data) {
                if(data.status!==200){
                    return false;
                }
                var html=template("my_Address",data);
                $("#already_address").html(html);
            });
        },
        // 删除地址
        deleteaddress:function(){
            $(document).on("click","#already_address li .delete",function(){
                if(confirm('是否确定删除该地址')){
                    $(this).parent().remove();
                }else{
                }
            });
        },
        //新增地址
        addAddress:function(){
            $(document).on('click',".increase",function() {
                $("#myAddress").css("display","none");
                $("#editAddress").css("display","block");
            });
            $(document).on('click',"#save",function(){
                for (var i= 0;i<$(".address input").length;i++){
                    var phone=$("#phone").val();
                    if($(".address input").eq(i).val()==""){
                        $("#editAddress").css("display","block");
                        $("#myAddress").css("display","none");
                        alert("请填写您的详细地址");
                        break;
                    }else if(phone && /^1[3|4|5|8]\d{9}$/.test(phone)){
                        $("#myAddress").css("display", "block");
                        $("#editAddress").css("display", "none");
                        }else{
                            alert("请输入正确的手机号码");
                            break;
                            //$("#myAddress").css("display", "block");
                            //$("#editAddress").css("display", "none");
                        }
                    }
            });

            $(document).on('click',"#editAddress .header-left",function(){
                $("#editAddress").css("display","none");
                $("#myAddress").css("display","block");
            });
        },
        //选择地址
        selectAddress:function(){
            $(document).on("click", ".order-info-address", function() {
                $("#myAddress").css("display","block");
                $("#confirmOrder").css("display","none");
            });
            $(document).on('click',"#already_address li .edit", function () {
                $("#myAddress").css("display","none");
                $("#editAddress").css("display","block");
            });
            $(document).on("click","#myAddress .header-left", function () {
                $("#myAddress").css("display","none");
                $("#confirmOrder").css("display","block");
            });
        },
        //进入支付页面
        payMent: function () {
            $(document).on("click","#next_step", function () {
                if($(".order-info-address .fl").html()=="请选择服务地址"){
                    alert("请选择服务地址");
                }else{
                    window.location.href="payment.html";
                }
            });
            $(document).on('click',".payment", function () {
                $(this).find(".quer").addClass('quer_xuan');
            });
            $(document).on("click","#already_address .adress-info", function () {
                var neri=$(this).html();
                $("#myAddress").css("display","none");
                $("#confirmOrder").css("display","block");
                $(".order-info-address .fl").html(neri);
            });
        }
    }
    uye.init();
})

