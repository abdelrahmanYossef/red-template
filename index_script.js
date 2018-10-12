

// $(".navbar .icons a").click(function(){
	
// 	$(".navbar .icons .active").removeClass('active');
// 	$(this).addClass("active");
// })

$('.navbar .icons a').click(function(){

	var href = $(this).attr('href');
	var off = $(href).offset().top -70;

	$('html,body').animate({scrollTop:off}, 1000);

})

$('.arrow a').click(function(){

	var href = $(this).attr('href');
	var off = $(href).offset().top -70;

	$('html,body').animate({scrollTop:off}, 1000);
})

var begin = 500;

var aboutOff = $('#about').offset().top;
console.log(aboutOff);

var workOff = $('#work').offset().top -100;
var portfolioOff = $('#portfolio').offset().top -200;
// var hireOff = $('#about').offset().top;


var hrefHome = $('.navbar .icons').first().attr("href");
var hrefAbout = $('.navbar .icons:nth-child(2)').attr("href");
var hrefWork = $('.navbar .icons:nth-child(3)').attr("href");
var hrefPortfolio = $('.navbar .icons:nth-child(4)').attr("href");
var hrefHireMe = $('.navbar .icons a').last().attr("href");

$(window).scroll(function(){

	var navOffset = $(window).scrollTop();
	if(navOffset > aboutOff - 250 && !(navOffset > workOff) ) {
	$(".navbar .icons .active").removeClass('active');
	$(".navbar .icons .two").addClass("active");
		 
  } else if( (navOffset > aboutOff) && (navOffset > workOff) && !(navOffset > portfolioOff)){
  	$(".navbar .icons .active").removeClass('active');
	$(".navbar .icons .three").addClass("active");

  } else if((navOffset > aboutOff) && (navOffset > workOff) && (navOffset > portfolioOff) ){
  	$(".navbar .icons .active").removeClass('active');
	$(".navbar .icons .four").addClass("active");
  } else {
  	$(".navbar .icons .active").removeClass('active');
  	$(".navbar .icons .one").addClass("active");
  }




})


// function(){
// 			$(".navbar .icons .two").addClass("active");
// 		}