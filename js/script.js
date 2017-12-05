$(document).ready(function(){
	$(".main-slider").slick({
    dots: true,
    dotsClass: "my-dots",
  });
  
  var headerheight = $(".main-header").height();
  var addressbarheight = $(".address-bar").height();
  var totalheight = headerheight + addressbarheight;
  var mainsliderimgheight = $(window).height() - totalheight+"px";
  $(".main-slider__img").css("height",mainsliderimgheight);
  $(window).resize(function(){
    location.reload();
  });
	
	$(".drop-menu-marker").click(function(event) {
		event.preventDefault();
  });
  
  $(".drop-menu-marker").mouseover(function() {
    $(".drop-menu").css("display","block");
  });
  
  $(".drop-menu").mouseover(function() {
    $(".drop-menu").css("display","block");
  });
  
  $(".drop-menu-marker").mouseout(function() {
    $(".drop-menu").css("display","none");
  });
  
  $(".drop-menu").mouseout(function() {
    $(".drop-menu").css("display","none");
  });
	
	$(".drop-menu__item").click(function() {
		$(".drop-menu").css("display","none");
	});
	
	$(".drop-menu__link").click(function() {
		$(".drop-menu").css("display","none");
	});
	
	$(".fixed-contacts-item_email").click(function() {
		$(".popup-overlay").css("display","block");
	});
	
	$(".fixed-contacts-item_email").click(function() {
		$(".popup-feedback").css("display","block");
	});
	
	$(".close-modal-block").click(function() {
    $(".popup-overlay").css("display","none");
  });
	
	$(".close-modal-block").click(function() {
    $(".popup-feedback").css("display","none");
  });
	
	$(".burger").click(function() {
		$(".menu-mob").css("display","block");
	});
	
	$(".menu-mob a").click(function() {
		$(".menu-mob").css("display","none");
	});
});
