/**
 * Created by Administrator on 2016/1/24 0024.
 */
$(function () {
    var uye= {
        init: function () {
            this.payMent();
        },
        //����֧��ҳ��
        payMent: function () {
            $(document).on('click',".payment", function () {
                $(this).find(".fr").addClass('quer_xuan').removeClass("quer");
            });
        }


    }
    uye.init();
})

