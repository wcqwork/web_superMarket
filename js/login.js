$(function(){
	$(".table_user_item1 input").blur(function(){
		$(this).attr("placeholder","请输入用户名");
		$(".table_user_item1").css("border-color","#d9d9d9");
	});
	$(".table_user_item2 input").blur(function(){
		$(this).attr("placeholder","请输入密码");
		$(".table_user_item2").css("border-color","#d9d9d9");
	});
	$(".table_user_item1 input").focus(function(){
		$(this).attr("placeholder","");
		$(".table_user_item1").css("border-color","#7f7f7f");
	});
	$(".table_user_item2 input").focus(function(){
		$(this).attr("placeholder","");
		$(".table_user_item2").css("border-color","#7f7f7f");
	});
});