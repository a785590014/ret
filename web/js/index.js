$(function(){
    var zz =  /^[\u4e00-\u9fa5]*$/;
    var nums = null;
    $('.select').on('click',function(){
        if($('.menu').css('display') == 'none'){
            $('.menu').fadeIn();
        }else{
            $('.menu').hide();
        }
    })

    $('.right-son.a .input input').blur(function(){
        nums = $(this).val();
        if(!zz.test(nums)){
            $('.right-son.a .text').css({'color': 'red'}).html('&#xe625;');
        }else{
            $('.right-son.a .text').css({'color': '#69b338'}).html('&#xe692;');
        }
    })
})