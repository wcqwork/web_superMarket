$(function(){
	/*
	      放大镜实现原理：
	      1. “缩略图”窗口与“原图”窗口中放置的是同一个图片，但“缩略图”窗口中的图片被缩小为400px，
	      而“原图”窗口中的图片保持原始大小，溢出部分设为隐藏
	      2. 先确定缩放比例，我们假定原图大小为1000px，缩略图大小为400px，缩放比例为2.5
	      3. 首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）
	      4. 其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动
	      5. 鼠标向右移动，“原图”窗口中的图片向左移动，它们的方向是相反的！这是实现原理中的关键环节
	      6. “放大镜”框的大小不是随意设定的，它与放大倍数有关，如果要放大2.5倍，
	      则“原图”窗口的大小也应该是“放大镜”框的大小的2.5倍
	      */
	 
	      // 当鼠标进入“缩略图”窗口时，显示“原图”窗口和“放大镜”框
	      $('.thumbnail').mouseover(function (e) {
	          $('.origin').css('display', 'block');
	          $('.magnifier').css('display', 'block');
	      })
	      // 当鼠标在“缩略图”窗口中移动时
	      $('.thumbnail').mousemove(function (e) {
	          // 一、首先实现“放大镜”框跟随鼠标移动的功能（我们让鼠标处于“放大镜”框的中心）
	 
	          // 获取鼠标当前位置
	          var pageX = e.pageX;
	          var pageY = e.pageY;
	          // 获取“缩略图”窗口在整个文档中的偏移位置
	          var offsetX = $('.thumbnail').offset().left;
	          var offsetY = $('.thumbnail').offset().top;
	          // 计算鼠标在缩略图中的相对位置
	          var relativeX = pageX - offsetX;
	          var relativeY = pageY - offsetY;
	          // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
	          var magOffsetX = $('.magnifier').width() / 2;
	          var magOffsetY = $('.magnifier').height() / 2;
	          $('.magnifier').css({ left: relativeX - magOffsetX + 'px',
	              top: relativeY - magOffsetY + 'px' });
	          // 获取“放大镜”框的新位置，后面会用到
	          var magX = $('.magnifier').position().left;
	          var magY = $('.magnifier').position().top;
	 
	          // 二、处理越界情况
	 
	          // 确定边界
	          var maxMagX = $('.thumbnail').width() - $('.magnifier').width()
	          var maxMagY = $('.thumbnail').height() - $('.magnifier').height()
	          // 左边界
	          if (magX <= 0) { $('.magnifier').css('left', '0px'); }
	          // 右边界
	          if (magX >= maxMagX) { $('.magnifier').css('left', maxMagX + 'px'); }
	          // 上边界
	          if (magY <= 0) { $('.magnifier').css('top', '0px'); }
	          // 下边界
	          if (magY >= maxMagY) { $('.magnifier').css('top', maxMagY + 'px'); }
	 
	          // 三、其次实现“原图”窗口中的图片随“放大镜”框的移动而相应移动
	 
	          // 按照之前确定的缩放比例移动“原图”窗口中的图片
	          // 注意：图片的移动方向与鼠标的移动方向是相反的！
	          var originX = magX * 2.5;
	          var originY = magY * 2.5;
	          $('.origin img').css({ left: -originX + 'px', top: -originY + 'px' });
	      })
	      // 当鼠标离开“缩略图”窗口时，隐藏“原图”窗口和“放大镜”框
	      $('.thumbnail').mouseout(function () {
	          $('.origin').css('display', 'none');
	          $('.magnifier').css('display', 'none');
	      })
		  
		  
		  
		  // 小图切换
		  
		  $(".smallPic ul .item img").mouseover(function(){
			 $(".thumbnail img").attr("src",$(this).attr("src"));
			  $(".origin img").attr("src",$(this).attr("src"));
		  });
});