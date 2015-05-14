/* making the module <li> click-able with cursor change */
$('.module-box-body ul li').css( 'cursor', 'pointer' );
$('.module-box-body ul li').click(function(){
	window.location=$(this).children("a:first").attr("href");
	 return false;
});

/* setup and activate tooltip with delays (i know its a dirty hack!) */
$('.module-box-body ul li').hover(function(){
	var title = $(this).children("a:first").attr("title");
	$(this).attr( "data-toggle", 'tooltip' );
	$(this).attr( "rel", 'tooltip' );
	$(this).attr( "data-placement", 'top' );
	$(this).attr( "data-original-title", title );
	$(this).attr( "data-delay", '{"show":"1000", "hide":"10"}' );
	$(this).children("a:first").removeAttr( "data-original-title");
	$(this).children("a:first").removeAttr( "title");
});
$("body").tooltip({ selector: '[data-toggle="tooltip"]'	});

/* tooltip stuff */
$(function(){
   $('[rel="tooltip"]').tooltip();
});