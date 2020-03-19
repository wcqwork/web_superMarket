$(function(){
	var index=0;
	var arry=new Array();//存放图片路径
	arry.push("images/b3.jpg");
	arry.push("images/b1.jpg");
	arry.push("images/b3.jpg");
	setInterval(chang1,3000);
	function chang1(){
		$(".banner_pic_img_show img").each(function(){
			$(this).attr("src",arry[index]);
			if(index==0){
				$(".b3:eq(1)").removeClass("item");
				$(".b3:eq(0)").addClass("item");
			}
			if(index==1){
				$(".b3:eq(0)").removeClass("item");
				$(".b1").addClass("item");
			}
			if(index==2){
				$(".b1").removeClass("item");
				$(".b3:eq(1)").addClass("item");
			}
			index++;
		});
		if(index>2){
			index=0;
		}
	}
	$(".banner_pic_img_show_button li").each(function(){
		$(this).click(function(){
			$(".banner_pic_img_show  .banner_pic_img_show_button li").each(function(){
				$(this).removeClass("item");
				$(this).attr("background-color","green");
			});
		  var a=$(this).attr('class');
			$(".banner_pic_img_show img").attr("src","images/"+a+".jpg");
			$(this).addClass("item");
			$(".banner_pic_img_show_button li:not(.item)").each(function(){
				$(this).removeClass("item");
			});
		});	
	});
});