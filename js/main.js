$(function(){
$('.buy').on('click', function(){
  $('.tocall').fadeIn();
});
$('.tocall .buytonumber .close').on('click', function(){
  $('.tocall').fadeOut();
});
$('.green-index .buyers').on('click', function(){
	HideShowOfBuyers();
});
$('.green-index .sellers').on('click', function(){
	HideShowOfSellers();
});

var HideShowOfBuyers = function(){
	delAnim();
	$('.green-index .sellers, .white-index .buyers, .iconarrow-down, .iconarrow-up').fadeToggle(0);
}
var HideShowOfSellers = function(){
	delAnim();
	$('.green-index .buyers, .white-index .sellers, .iconarrow-down, .iconarrow-up').fadeToggle(0);
}
var delAnim = function (){
	$('.buyers .text, .sellers .text').removeClass('bounceInUp animated');
}
});