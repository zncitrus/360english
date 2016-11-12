//吸顶条
function scrollside(xdt) {
	var scrollheight = $(window).scrollTop(),
		tabheight = xdt.offset().top;
	return(scrollheight > tabheight) ? true : false;
}

$(document).ready(function() {
	
	//返回顶部
	window.onload = window.onscroll = function() {
		var _scroll = document.documentElement.scrollTop || document.body.scrollTop;
		var tim = null;
		clearInterval(tim)

		function znmove() {
			tim = setInterval(function() {
				var _scroll = document.documentElement.scrollTop || document.body.scrollTop;
				_scroll <= 20 ? clearInterval(tim) : window.scrollBy(0, -20)
			}, 2)
		}
		$('#return-top').click(function() {
			znmove()
		})
		if(_scroll <= 20) {
			clearInterval(tim)
		}
	}

});