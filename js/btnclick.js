$(function() {
	var title = $(".banner_list_nav_text_item").text();
	//定义数组存放名称
	var arryName = new Array();
	arryName.push("索纳.毛索里米");
	arryName.push("乳白色窗格");
	arryName.push("印度香米");
	arryName.push("命运向日葵");
	arryName.push("雀巢瘦身");
	arryName.push("面包三明治");

	arryName.push("塔塔盐");
	arryName.push("命运向日葵");
	arryName.push("Aashirvaad-Atta");
	arryName.push("桑潘-达达尔");
	arryName.push("帕里斯糖");
	arryName.push("藏红花金");
	// 广告优惠
	$(".banner_list_nav_button .btn_item2").click(function() {
		$(".banner_list_nav_button .btn_item1").removeClass("btnitem1");
		$(this).addClass("btnitem1");
		$(".banner_list_nav_text_item").text("本星期");
		// 改变图片路径
		var index = 7;
		var num = 0;
		$(".banner_nav dt img").each(function() {
			if(index==11){
				index=14;
			}
			$(this).attr('src', "images/" + index + ".png");
			if(index==14){
				index=11;
			}
			index++;
		});
		$(".banner_nav .banner_name").each(function() {
			$(this).text(arryName[num]);
			num++;
		});
		// 绑定css产生切换延迟效果
		$(".banner_list_nav_on").removeClass("banner_list_nav_load_1");
		$(".banner_list_nav_on").addClass("banner_list_nav_load");
	});
	// 今日特惠
	$(".banner_list_nav_button .btn_item1").click(function() {
		$(".banner_list_nav_button .btn_item2").removeClass("btnitem1");
		$(this).addClass("btnitem1");
		$(".banner_list_nav_text_item").text(title);
		//改变图片路径
		var index = 1;
		var num = 6;
		$(".banner_nav dt img").each(function() {
			$(this).attr('src', "images/" + index + ".png");
			index++;
		});
		$(".banner_nav .banner_name").each(function() {
			$(this).text(arryName[num]);
			num++;
		});
		// 绑定css产生切换延迟效果
		$(".banner_list_nav_on").removeClass("banner_list_nav_load");
		$(".banner_list_nav_on").addClass("banner_list_nav_load_1");

	});
	// 页面跳转
	$(".banner_nav_item dl dt img").click(function(){
		location.href="details.html";
	});
	$(".nav_head_list a").click(function(){
		location.href="products.html";
	});
	   // 定义数组存放购物车中图片和名字
		var arrysrc=new Array();//存放图片路径
		var arrypicname=new Array();//存放图片名称
		var arryprice=new Array();//价格
	$(".banner_nav_item dl dd:last-child span").click(function(){
		var srcobj=$(this).parent().parent().find("dt img").attr("src");
		arrysrc.push(srcobj);//所有图片路径放入数组
		var nameobj=$(this).parent().parent().find("dd").html();//所有图片名称放入数组
		arrypicname.push(nameobj);
		var priceobj=$(this).parent().prev().find(".banner_newPrice").html();
		arryprice.push(priceobj);
		 alert(nameobj+"----已加入购物车"+"   购物车中共有 "+arrypicname.length+" 个商品");
		// alert("已购买"+arrypicname.length+"");
		// for(var i=0;i<arrypicname.length;i++){
		// 	alert(arrypicname[i]);
		// }
	});
	
	$(".header_title_shopcat img").click(function(){
		if(arrypicname.length==0){
			location.href="shopCat.html";
		}else{
			url = "shopCat.html?picsrc="+escape(arrysrc);
			　　url += "&picname=" + escape(arrypicname);
			　url += "&price=" + escape(arryprice);
			　　location.href=url;
		}
		
	});
	$("#neko").dblclick(function(){
		if(arrypicname.length==0){
			location.href="shopCat.html";
		}else{
			url = "shopCat.html?picsrc="+escape(arrysrc);
			　　url += "&picname=" + escape(arrypicname);
			　url += "&price=" + escape(arryprice);
			　　location.href=url;
		}
	});
});
