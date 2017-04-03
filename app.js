var clickCount = 0

function stopGame(){
	$("span").text("")
}

$("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b8, #b9").click(function(event){
	event.stopPropagation();
	clickCount += 1;
	if(clickCount % 2 === 0){
		$(this).find("span").text("x")
	}
	else{
		$(this).find("span").text("o")
	};
	console.log(clickCount);
	checkForWinner();
});

function checkForWinner(){
	if($("#b1").text() === $("#b2").text() && $("#b1").text() === $("#b3").text()){
		alert($("#b1").text() + "won!");
	}
}