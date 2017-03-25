function progress(){
	var prog = document.getElementById('progress_bar');
	var percent = document.getElementById('percentcount');
	var counter = 5;
	var progress = 25;
	var id = setInterval(frame,50);

	function frame(){
		if(progress == 500 && counter == 100){
			clearInterval(id);
		}
		else{
			progress += 5;
			counter += 1
			prog.style.width = progress + "px";
			percent.innerHTML = counter + "%";
		}
	}
}
$("#progress").delay(5000).fadeOut("slow");
progress();