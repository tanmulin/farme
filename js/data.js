$(function () {
    var u={
        init: function () {
            this.dataList();
            this.bottomDelete();
        },
        dataList:function(){
            $.get("../data.json",function(data){
                if(data.status!==200){
                    return false
                }
                var html=template("data_tpl",data);
                $(".general_form tbody").html(html);
            });
        },
        //底部删除
        bottomDelete:function(){
            var This=this;
            $(".operation_bottom_delete").on("click",function() {
                var num=$(".form .checkbox_1").filter(":checked").length;
                if(confirm("是否删除数据")){
                    This.bottomDelete_2();
                    alert("删除成功"+num+"条数据");
                }else{
                }
            });
        },
        bottomDelete_2: function () {
            $(".form .checkbox_1").each(function(){
                if($(this).prop("checked")){
                    $(this).parent().parent("tr").remove();
                }
            });
        }
    }
    u.init();
})
