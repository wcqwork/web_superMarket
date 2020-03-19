$( window ).scroll(function(){  
　　if( $( window ).scrollTop() > 500 ){  // 当顶部的滚动距离大于500px时，显示返回顶部按钮
　　　　$('.backto_top_btn').fadeIn( 300 );  // 给返回顶部按钮的显示隐藏加了一个简单的淡入淡出效果
   }else{
　　　　$('.backto_top_btn').fadeOut( 300 );
　 }  
}) 

$(document).ready(function(){
        $('.backto_top_btn').click(function(){
            $('html,body').animate({scrollTop:0},'slow');
        });
    });
