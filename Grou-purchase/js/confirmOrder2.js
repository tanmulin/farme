//$(function(){
//    // 这就是事件委托的使用方法，它不是直接为具体的元素绑定事件处理器，而是
//    // 把事件处理器绑定到它的父级元素上，这样即使元素在页面加载后不是立即存在于页面中，
//    // 也可以确保它会触发对应的 handler.在这个例子 中，我们选择的父级元素是 document,
//    // 也就是页面最顶层的元素，当用户点击(click)页面元素时，判断 它是否来自 #select-Address 这个元素，
//    // 若是，则触发下面这个函数的内容.
//    $(document).on("click", "#select-Address", function() {
//        $("#myAddress").css("display","block");
//        $("#confirmOrder").css("display","none");
//    });
//    $(document).on(click,"#increase",function() {
//        $("#myAddress").css("display","none");
//        $("#editAddress").css("display","block");
//    })
//})



$(function () {
    var uye= {
        init: function () {
            this.selectAddress();
            this.addAddress();
        },
        selectAddress:function(){
            $(document).on("click", "#select-Address", function() {
                $("#myAddress").css("display","block");
                $("#confirmOrder").css("display","none");
            });
        },
        addAddress: function () {
            $(document).on('click',".increase",function() {
                $("#myAddress").css("display","none");
                $("#editAddress").css("display","block");
            })
        }
    }
    uye.init();
})

