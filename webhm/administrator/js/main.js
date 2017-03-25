$(document).ready(function(){
	showMenu();
})


function showMenu(){
	$(".menu-sidebar li").click(function(){
		if($(this).hasClass("active")){
			$(this).children(".sub").slideUp();
			$(this).removeClass("active");
		}else{
			$(this).children(".sub").slideDown();
			$(this).addClass("active");
		}
	})
}