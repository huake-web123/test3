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

	$('body').on('click','#siderbar',function () {
		if($(this).hasClass('siderbar_right')){
			$(this).removeClass("siderbar_right").addClass("siderbar_left")
			$("#hidebox").animate({left:"0px"});
		}
		else{
			$(this).addClass("siderbar_right").removeClass("siderbar_left")
			$("#hidebox").animate({left:"-650px"});
		}
	});

	/*
	* 显示登录框
	* */
	$('body').on('click','#login_enter',function(){
		$("#loginbox").show();
	});
	$('body').on('click','.loginbox_close',function(){
		$("#loginbox").hide();
	});
 
	/*点击1到5更换相应内容*/
	$('body').on('mouseover mouseout','.midheadstyle',function(event){
		if (event.type == 'mouseover') {
			$(this).addClass("selected").siblings().removeClass("selected");
			var index = $(this).index();
			var $item = $("#midrightcontent>div").eq(index);
			$item.show().siblings().hide();
			var $leftContent = $("#midcontent_left>div").eq(index);
			$leftContent.show().siblings().hide();
		}
	});
	/*鼠标移上去出现简介框，移走消失*/
	$('body').on('mouseover mouseout','.popMHzcontent li',function(event){
		if(event.type == 'mouseover'){
			$(this).find('.popMHz_introbox').show();
			$(this).find('.popMHz_img').addClass('popMHz_img_selected');
		}
		else{
			$(this).find('.popMHz_introbox').hide();
			$(this).find('.popMHz_img').removeClass('popMHz_img_selected');
		}
	});

	/*点击登录，输入用户名和密码，会出现正确或错误的反应*/
	$('body').on('click','#loginbox .loginfoot',function(){
		var nameTxt = $("#loginName").val();
		var pwdTxt = $("#loginPwd").val();
		if(nameTxt=='' || pwdTxt==''){
			alert("账号或者密码为空");
		}
		else{
		$.post("https://restaurant.yijiahotel.shop/test/login",{name:nameTxt,pwd:pwdTxt},function(result){
			result;
			if(result.status_code==0){
				var str = '';
				str = nameTxt+'欢迎您登录本网站!';
				$('#welcome').text(str).show();
				$('#loginbox').hide();
			}
			else{
				alert("登录失败");
			}

			})
		}
	});
	/*鼠标放上分享所在位置，会有图标出现，移走消失*/
	$('body').on('mouseover mouseout','#content .share',function(event){
		if(event.type == 'mouseover'){
			$("#content .share").stop().animate({left:'830px',width:'260px'});
		}
		else{
			$("#content .share").stop().animate({left:'1024px',width:'60px'});
		}

	});
	/*豆瓣客户端右边的图，鼠标放上去更换图片效果，移走还原*/
	$('body').on('mouseover mouseout','#footer .icon .iconimg',function(event){
		if(event.type == 'mouseover'){
			$(this).addClass('selected');
		}
		else{
			$(this).removeClass('selected');
		}
	});
	/*取得音乐滑动条的数据，并给函数命名*/
	function getMusicBanners(){
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
			var str2 = '';
			for(var i=0;i<arr1.length;i++){
			if(i!=4){	
				str1 +='<div>'+
												'<div class="MHz_style">'+
													'<div class="MHz_text">'+result.data[i].title+'</div>'+
													'<div class="MHz_img"></div>'+
												'</div>'+
												'<div class="pro_style">'+result.data[i].subtitle+'</div>'+
												'<div class="popmusic">热门歌曲：'+result.data[i].hotSongs.join('/')+'</div>'+
												'<div class="musictext">'+result.data[i].songsCounts+'首歌曲兆赫详情</div>'+
										   
							'</div>';
				str2 += '<div><img src="'+result.data[i].thumb+'"></div>';
				
						
					}
			else{

				str1 += '<div class="MHz_show">'+
												'<div class="MHz_style">'+
													'<div class="MHz_text">'+result.data[i].title+'</div>'+
													'<div class="MHz_img"></div>'+
												'</div>'+
												'<div class="pro_style">'+result.data[i].subtitle+'</div>'+
												'<div class="popmusic">热门歌曲：'+result.data[i].hotSongs.join('/')+'</div>'+
												'<div class="musictext">'+result.data[i].songsCounts+'首歌曲兆赫详情</div>'+
										   
							'</div>';
				str2 +='<div class="leftcontentstyle"><img src="'+result.data[i].thumb+'"></div>';
				}
			}

			$('#midrightcontent').html(str1);
			$('#midcontent_left').html(str2);
		});
	}

	/*调用函数*/
    getMusicBanners();


	function getMusicHotMhz(){
		$.get("http://restaurant.yijiahotel.shop/test/musicHotMhz",function(result,status){
			result;
			var arr1 = result.data;
			var str1 = '';
			for(var i=0;i<arr1.length;i++){
				str1 += '<li>'+
				        '<div class="popMHz_img"><img src="'+result.data[i].thumb+'"></div>'+
						'<div class="popMHz_music">'+
							'<div class="popMHz_name">'+result.data[i].title+'</div>'+
							'<div class="popMHz_text">8489首歌曲 兆赫详情</div>'+
						'</div>'+
						'<div class="popMHz_introbox">'+
							'<div class="introstyle">'+
								'<span class="popmusic_title">简介：</span>'+
								'<span class="popmusic_example">'+result.data[i].subtitle+'</span>'+
							'</div>'+
							'<div class="musicstyle">'+
								'<span class="popmusic_title">热门歌曲：</span>'+
								'<span class="popmusic_example">'+result.data[i].hotSongs.join('/')+'</span>'+
						    '</div>'+
						    '</li>';

			}
			$('#hotMHz>ul').html(str1);
			
		});
	}
	getMusicHotMhz();
	
	function getMusicFastMhz(){
		$.get("http://restaurant.yijiahotel.shop/test/musicHotMhz",function(result,status){
			result;
			var arr1 = result.data;
			var str1 = '';
			for (var i = 0; i <arr1.length; i++) {
				str1 += '<li>'+
				        '<div class="popMHz_img"><img src="'+result.data[i].thumb+'"></div>'+
						'<div class="popMHz_music">'+
							'<div class="popMHz_name">'+result.data[i].title+'</div>'+
							'<div class="popMHz_text">8489首歌曲 兆赫详情</div>'+
						'</div>'+
						'<div class="popMHz_introbox">'+
							'<div class="introstyle">'+
								'<span class="popmusic_title">简介：</span>'+
								'<span class="popmusic_example">'+result.data[i].subtitle+'</span>'+
							'</div>'+
							'<div class="musicstyle">'+
								'<span class="popmusic_title">热门歌曲：</span>'+
								'<span class="popmusic_example">'+result.data[i].hotSongs.join('/')+'</span>'+
						    '</div>'+
						    '</li>';

			}
			$('#FastMHz').html(str1);
			
		});
	}
	getMusicFastMhz();
});