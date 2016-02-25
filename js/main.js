$(function(){
    $(".left-nav .list .class").on("click",function(){
        $(this).next(".part").toggle();
        $(this).find("span").toggleClass("total_b");
    });
    $(".left-nav .list_all").hover(function () {
        var hasOpenedSubMenu = $(".list .part").filter(":visible").length;
        if(hasOpenedSubMenu){
            $(".left-nav .list_all").attr("title","全部收起");
        }else{
            $(".left-nav .list_all").attr("title","全部展开");
        }
    });
    //全部展开、收起
    $(".list_all").on("click",function(){
        var hasOpenedSubMenu = $(".list .part").filter(":visible").length;
        if(hasOpenedSubMenu){
            $(".list .part").slideUp("25");
            $(".list  .class span").removeClass("total_b");
        }else{
            $(".list .part").slideDown("25");
            $(".list  .class span").addClass("total_b");
        }
    });
    $(".list .part a").on("click",function(){
        $(".list .part a").removeClass("active");
        $(this).addClass("active");
    });
    //单行删除
    $(".form tbody").on("click"," .form_delete",function(){
        if(confirm("是否删除该条信息")){
            $(this).parent().parent("tr").fadeOut().remove();
            alert("删除成功");
        }else{
        }
    });
    //是否全选
    $(".form .check_all").on("click",function(){
        if($(this).prop("checked")){
            $(".form input").prop("checked",true);
            $(".form tbody tr").addClass("active");
        }else{
            $(".form input").removeAttr("checked");
            $(".form tbody tr").removeClass("active");
        }
    });
    $(".form tbody input").on("click",function(){
        var a=0;//checkbox_1选中值
        var status=0;//checkbox_1未选中值
        $(".form tbody input").each(function () {
            if($(this).is(":checked")==false){
                $(".form .check_all").removeAttr("checked");
                a=1;
            }else{
            }
            if(a==0){
                $(".form .check_all").prop('checked',true);
            }
        });
    });
    //新建页面弹出、关闭
    $(".pulic_top_increase").on("click",function(){
        $(".bg").fadeIn("fast",function(){
            $(".popup").animate({'top':'150px'},500);
            $(".popup").css("display","block");
        });
    });
    $(".close").on("click", function () {
        $(".popup").animate({'top':'-500px'},  500, function () {
            $(".bg").fadeOut('fast');
        });
    });

    //输入框验证
    $(".required input").on("blur",function () {
        if($(this).val()==""){
            $(this).parent().find(".prompt").css("display","block");
        }else{
            $(this).parent().find(".prompt").css("display","none");
        }
    });
    $(".required  select").on("click", function () {
        if($(this).find("option:selected").text()=="选择类型"){
            $(this).parent().find(".prompt").css("display","block");
        }else{
            $(this).parent().find(".prompt").css("display","none");
        }

    });
    //帮助页面、
    $(".right_list li a").on("click", function () {
        $(this).addClass("active");
        $(this).parent().siblings().find("a").removeClass("active");

    });

})