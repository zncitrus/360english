$(document).ready(function() { 
	window.onscroll=function(){
		//吸顶条
        var $tab=$("#zn_nav");
        if(scrollside($(".zn1"))){
            $tab.addClass("nav_scroll");
        }else{
            $tab.removeClass("nav_scroll");
        }
        //吸底条
		var scrool_height=$('body').height()-2*($('footer').height()+$('#zn_nav').height())
		if($(document).scrollTop()>scrool_height){
        	$("#zn_footer").removeClass("footer_scroll");
        }else{
        	$("#zn_footer").addClass("footer_scroll");
        }
	}
})	