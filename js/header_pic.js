$(function(){
	var index=0;
	var arry=new Array();//存放图片路径
	arry.push("images/22.jpg");
	arry.push("images/11.jpg");
	arry.push("images/44.jpg");
	setInterval(chang,5000);
	function chang(){
		$(".men_nav_img img").each(function(){
			$(this).attr("src",arry[index]);
			index++;
		});
		if(index>2){
			index=0;
		}
	}
	$(".men_nav_img").click(function(){
		location.href="egg.html";
	});
});