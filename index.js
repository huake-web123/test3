/*
* 以后要经常写注释，提高代码的可读性
* */
/**
 * Created by hanjinxiu@bmkp.cn on 2018/4/19.
 * 写出作者，如果别人有疑问，别人可以找到你咨询
 */

$(document).ready(function(){
	/*
	* 点击左侧面板的滑块，实现面板的展示和隐藏
	* */
  	$("#siderbar").click(function(){
		if($(this).hasClass('siderbar_right')){
			$(this).removeClass("siderbar_right").addClass("siderbar_left")
			$("#hidebox").animate({left:"0px"});
		}
		else{
			$(this).addClass("siderbar_right").removeClass("siderbar_left")
			$("#hidebox").animate({left:"-650px"});
		}
   	});

 	$(".midheadstyle").hover(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var index = $(this).index();
		var $item = $("#midrightcontent>div").eq(index);
		$item.show().siblings().hide();
		var $leftContent = $("#midcontent_left>div").eq(index);
		$leftContent.show().siblings().hide();
	  });

	$(".popMHzcontent li").hover(function(){
			$(this).find('.popMHz_introbox').show();
			$(this).find('.popMHz_img').addClass('popMHz_img_selected');
		},function(){
			$(this).find('.popMHz_introbox').hide();
			$(this).find('.popMHz_img').removeClass('popMHz_img_selected');
	});
    /*
	* 显示登录框
	* */
	$("#login_enter").click(function(){
		$("#loginbox").show();
	});

	$(".loginbox_close").click(function(){
		$("#loginbox").hide();
	});
	$("#addBanner").click(function(){
		var arr = [1,2,3,4,5];
		var str ='';
		for(var i = 0;i<arr.length;i++){
			var num = i +1;
			if(num==5){
				str += '<li  class="midheadstyle selected">'+ num +'</li>';
			}
			else{
				str += '<li  class="midheadstyle">'+ num +'</li>';
			}
		}
		$('#midhead>ul').html(str);

		$.get("http://restaurant.yijiahotel.shop/test/musicbanners",function(result,status){
			result;
			var arr1 = result.data;
			var str1 = '';
			for(var i=0;i<arr1.length;i++){
			if(i!=4){	
				str1 +='<div >'+
												'<div class="MHz_style">'+
													'<div class="MHz_text">'+result.data[i].title+'</div>'+
													'<div class="MHz_img"></div>'+
												'</div>'+
												'<div class="pro_style">'+result.data[i].subtitle+'</div>'+
												'<div class="popmusic">热门歌曲:</div>'+
												'<div class="musictext">'+result.data[i].songsCounts+'首歌曲兆赫详情</div>'+
										   
							'</div>';
					}
			else{

				str1 +='<div class="MHz_show">'+
												'<div class="MHz_style">'+
													'<div class="MHz_text">'+result.data[i].title+'</div>'+
													'<div class="MHz_img"></div>'+
												'</div>'+
												'<div class="pro_style">'+result.data[i].subtitle+'</div>'+
												'<div class="popmusic">热门歌曲:</div>'+
												'<div class="musictext">'+result.data[i].songsCounts+'首歌曲兆赫详情</div>'+
										   
							'</div>';
				}
			}
			
			$('#midrightcontent').html(str1);
		});
	});

	$("#content .share").hover(function(){
		$("#content .share").stop().animate({left:'830px',width:'260px'});
	},function(){
		$("#content .share").stop().animate({left:'1024px',width:'60px'});
	});

	$("#footer .icon .iconimg").hover(function(){
		$(this).addClass('selected');
	},function(){
		$(this).removeClass('selected');
	});

});