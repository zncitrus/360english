$(document).ready(function() { 
	
	//吸顶条
	window.onscroll=function(){
		var $tab=$("#zn_nav");
        if(scrollside($(".wjh2"))){
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
	//banner
  var length, 
   currentIndex = 0, 
   interval, 
   hasStarted = false, //是否已经开始轮播 
   t = 3000; //轮播时间间隔 
  length = $('.slider-panel').length; 
  //将除了第一张图片隐藏 
  $('.slider-panel:not(:first)').hide(); 
  //将第一个slider-item设为激活状态 
  $('.slider-item:first').addClass('slider-item-selected'); 
  //隐藏向前、向后翻按钮 
  $('.slider-page').hide(); 
  //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动 
  $('.slider-panel, .slider-pre, .slider-next').hover(function() { 
   stop(); 
   $('.slider-page').show(); 
  }, function() { 
   $('.slider-page').hide(); 
   start(); 
  }); 
  $('.slider-item').hover(function(e) { 
   stop(); 
   var preIndex = $(".slider-item").filter(".slider-item-selected").index(); 
   currentIndex = $(this).index(); 
   play(preIndex, currentIndex); 
  }, function() { 
   start(); 
  }); 
  $('.slider-pre').unbind('click'); 
  $('.slider-pre').bind('click', function() { 
   pre(); 
  }); 
  $('.slider-next').unbind('click'); 
  $('.slider-next').bind('click', function() { 
   next(); 
  }); 
  /** 
   * 向前翻页 
   */
  function pre() { 
   var preIndex = currentIndex; 
   currentIndex = (--currentIndex + length) % length; 
   play(preIndex, currentIndex); 
  } 
  /** 
   * 向后翻页 
   */
  function next() { 
   var preIndex = currentIndex; 
   currentIndex = ++currentIndex % length; 
   play(preIndex, currentIndex); 
  } 
  /** 
   * 从preIndex页翻到currentIndex页 
   * preIndex 整数，翻页的起始页 
   * currentIndex 整数，翻到的那页 
   */
  function play(preIndex, currentIndex) { 
   $('.slider-panel').eq(preIndex).fadeOut(500) 
    .parent().children().eq(currentIndex).fadeIn(1000); 
   $('.slider-item').removeClass('slider-item-selected'); 
   $('.slider-item').eq(currentIndex).addClass('slider-item-selected'); 
  } 
  /** 
   * 开始轮播 
   */
  function start() { 
   if(!hasStarted) { 
    hasStarted = true; 
    interval = setInterval(next, t); 
   } 
  } 
  /** 
   * 停止轮播 
   */
  function stop() { 
   clearInterval(interval); 
   hasStarted = false; 
  } 
  //开始轮播 
  start(); 
 }); 
// wll
window.onload=function(){
		   	var btn=document.querySelectorAll('.span-tab');
		   	var wll=document.getElementById('wll');
	   	    var Div=wll.querySelectorAll('.tab');
		   	for(var i=0; i<btn.length; i++){
		   		btn[i].index=i;
		   		btn[i].onmouseover=function(){	   			
		   			for(var i=0; i<btn.length; i++){
		   				btn[i].className='';
		   				Div[i].style.display='none';
		   			}
		   			this.className='span-tab tab-active';
		   			Div[this.index].style.display='block'
		   		}		   		
		   	}
		   }
//xxk

$(function(){
	  $('.log').eq(0).hide();
	  $('.tab').find('a').eq(1).addClass('active');
	  $('.tab').find('li').click(function(){
	  	//alert($(this).index())
	  	var index=$(this).index()
	  	$(this).children().addClass('active').parent().siblings().children().removeClass('active');
	  	
	  	$('.form').find('form').eq(index).show().siblings().hide()
	  	
	  })

})