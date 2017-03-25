$(document).ready(function(){

	var hover = $(".box");
	var odd = $(".odd");
	var even = $(".event");
	var body;

    $(".owlcarousel").owlCarousel({
        loop:true,
        margin:0,
        nav: true,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,loop:true
            },
            600:{
                items:2,loop:true
            },
            1000:{
                items:6,loop:true
            }
        }
    });

	$('#simple-menu').sidr();


	$(".menu-css ul li a:first").addClass("active");
	$(".list-news ul li:odd").css({"background":"#EDEEEE"});
	$(".list-news ul li:even").css({"background":"#FFF"});


	$(window).load(function() {
  		$('.flexslider').flexslider();
	});



	/*Place Holder*/
        $('[placeholder]').each(function() {
        var plc = $(this).attr('placeholder');
        $(this).addClass('blur').removeAttr('placeholder').val(plc).on("focus blur", function(e) {
            $(this)[(e.type == "blur" && (this.value === "" || this.value == plc)) ? "addClass" : "removeClass"]('blur');
            if (e.type == "blur" && this.value === "") $(this).val(plc);
            if (e.type == "focus" && this.value == plc) $(this).val("");
        });
    });

     /*back*/
    $(window).scroll(function(){
        if ($(this).scrollTop() != 0) {
            $('#back').fadeIn();
        }else{
            $('#back').fadeOut();
        }
    });
    $('#back').click(function() {
        $('body,html').animate({
            scrollTop: 0}, 800);
    });
    /*end*/
    
    body = document.getElementsByTagName("body")[0];  
    $('body').niceScroll({cursoropacitymax:0.8,cursorwidth:8});          
    initScroll();
});