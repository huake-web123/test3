$(document).ready(function(){
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

},
function(){
	$(this).find('.popMHz_introbox').hide();
	$(this).find('.popMHz_img').removeClass('popMHz_img_selected');
}
);
// $("login_enter")


});