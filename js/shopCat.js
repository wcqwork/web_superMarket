$(function() {
	//接受页面传值
	var url = location.search;
	var picsrc = new Array();
	var picname = new Array();
	var picprice= new Array();
	var namesrc = new Array();
	// var Request = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1) //去掉?号
		strs = str.split("&");

		for (var i = 0; i < strs.length; i++) {
			namesrc.push(unescape(strs[i].split("=")[1]));
			// alert(namesrc[i]);
			// 　　　 Request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
		}
		//数据处理
		var src = namesrc[0].split(",");
		var name = namesrc[1].split(",");
		var price = namesrc[2].split(",");
		for (var i = 0; i < src.length; i++) {
			picsrc.push(src[i]);
			// alert(picsrc[i]);
		}
		for (var i = 0; i < name.length; i++) {
			picname.push(name[i]);
			// alert(picname[i]);
		}
		for (var i = 0; i < price.length; i++) {
			picprice.push(price[i]);
			// alert(picprice[i]);
		}
		//动态创建tr
		for (var i = 0; i < picname.length; i++) {
			var $trobj=$("<tr><td></td><td></td><td><input type='button'></input><input type='text'></input><input type='button'></input></td><td></td><td></td><td></td><td></td></tr>");
			 $("table").append($trobj);					
			// var $tr=$("table tr:last").clone();
			// $("table").append($tr);
		}
		// 给所有的input增加样式
		$("tr:gt(0)").each(function() {
			// $(this).find("td:eq(2)").html("111");
			$(this).find("td:eq(2) input:eq(0)").attr("value","-");
			$(this).find("td:eq(2) input:eq(0)").addClass("btnjian");
			$(this).find("td:eq(2) input:eq(0)").next().attr("value","1");
			$(this).find("td:eq(2) input:eq(0)").next().next().attr("value","+");
			$(this).find("td:eq(2) input:eq(0)").next().next().addClass("btnAdd");
		});
		//tr添加数据
		var row=$("tr").length;
		if(row>1){
			for (var i = 0; i < picname.length; i++){
				var newrow=row- picname.length;//原来行数
				newrow+=i;
				var $picimg=$("<img></img>");
				$("tr:eq("+newrow+") td:eq(1)").append($picimg);
				$("tr:eq("+newrow+") td:eq(1) img").attr("src",picsrc[i]);
			}
			for (var i = 0; i < picname.length; i++){
				var newrow=row- picname.length;//原来行数
				newrow+=i;
				$("tr:eq("+newrow+") td:eq(3)").html(picname[i]);
			}
			for (var i = 0; i < picname.length; i++){
				var newrow=row- picname.length;//原来行数
				newrow+=i;
				$("tr:eq("+newrow+") td:eq(4)").html("&yen"+picprice[i]);
			}
			for (var i = 0; i < picname.length; i++){
				var newrow=row- picname.length;//原来行数
				newrow+=i;
				$("tr:eq("+newrow+") td:eq(5)").html("&yen"+picprice[i]);
			}
			for (var i = 0; i < picname.length; i++){
				var newrow=row- picname.length;//原来行数
				newrow+=i;
				var $picimg1=$("<img></img>");
				$("tr:eq("+newrow+") td:eq(6)").append($picimg1);
				$("tr:eq("+newrow+") td:eq(6) img").attr("src","images/close_1.png");
			}
		}
		$(".shopCat").removeClass("showNo");
		$(".shopCatNo").addClass("showNo");
	}else{
		//没有添加数据到购物车中
		$(".shopCat").addClass("showNo");
		$(".shopCatNo").removeClass("showNo");
	}
//控件shijian

var sum = 0;
	var index = 0;

	function allMoneyPrice() {
		index = 0;
		sum = 0;
		$("tr").each(function() {
			$(this).find("td:eq(0)").css("width", "5%");
			$(this).find("td:eq(1)").css("width", "15%");
			$(this).find("td:eq(2)").css("width", "8%");
			$(this).find("td:eq(3)").css("width", "8%");
			$(this).find("td:eq(4)").css("width", "8%");
			$(this).find("td:eq(5)").css("width", "8%");
			$(this).find("td:eq(6)").css("width", "5%");

			if (index == 0) {

			} else {
				var num1 = parseFloat($(this).find("td:eq(5)").html().substr(1));
				sum += num1;
			}
			index = 2;

		});
		$(".allMoney").html("&yen" + sum.toFixed(2));
	}
	allMoneyPrice();
	newQuery();//编号

	function newQuery() {
		var num = $("tr").length;
		$(".shopCat_num").html(num - 1);
		for (var i = 1; i < num; i++) {
			$("tr:eq(" + i + ") td:eq(0)").html(i);
		}
	}
	

	function Caljisuan($obj, $num) {
		var sum = 0;
		var $priceobj = $obj.parent().next().next();
		var $price = parseFloat($priceobj.html().substr(1));
		var $priceAll = $price * $num;
		$priceobj.next().html("&yen" + $priceAll.toFixed(2));
		allMoneyPrice();
	}
		newQuery();//编号
		//数量价格统计
		$(".btnAdd").click(function() {
			var $num = $(this).prev();
			$num.val(parseInt($num.val()) + 1);
			Caljisuan($(this), parseInt($num.val()) + 1);
		});
		$(".btnjian").click(function() {
			var $num = $(this).next();
			var $numobj = parseInt($num.val());
			if ($numobj > 1) {
				$num.val($numobj - 1);
				Caljisuan($(this), $numobj - 1);
			}
		});
		//删除商品
		$("tr:gt(0) td:last-child").click(function() {
			$(this).parent().remove();
			newQuery();
			allMoneyPrice();
		});
});
