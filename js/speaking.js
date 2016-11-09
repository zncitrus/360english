//吸顶条
	window.onscroll=function(){
        var $tab=$("#zn_nav");
        if(scrollside($(".zn1"))){
            $tab.addClass("nav_scroll");
        }else{
            $tab.removeClass("nav_scroll");
        }
	}