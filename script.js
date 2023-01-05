window.onload = function()  { 
	document.getElementById("rock").onclick=function() {rockpaperscissors("rock")
	document.getElementById("paper").onclick=function() {rockpaperscissors("paper")}
	document.getElementById("scissors").onclick=function() {rockpaperscissors("scissors")}};
	
	}

var scoreboard=new Array(0,0);
var user_score=0;
var computer_score=0;
	
function rockpaperscissors(user_throw) { 
	
    var game_ref = new Array('rock','paper','scissors');
    var game_throw = game_ref[Math.floor(Math.random() * 3)];
    document.getElementById("user choice").innerHTML = user_throw;
	document.getElementById("computer choice").innerHTML = game_throw;
	document.getElementById("the result").innerHTML = get_result(user_throw, game_throw);
	var current_score=get_score();
	document.getElementById("user_score").innerHTML=current_score[0];
	document.getElementById("computer_score").innerHTML=current_score[1];
}

function get_result(user_throw,computer_throw) {
	
	if (user_throw==computer_throw) {
		result="Draw";
	}
	else if ((user_throw=="rock" && computer_throw=="scissors") || (user_throw=="paper" && computer_throw=="rock") || (user_throw=="scissors" && computer_throw=="paper")) { 
		result="Win";
		}
	else {
		result="Lose";
		}
	return result;
	}

function get_user_score() {
	if (result=="Win") {
		user_score=user_score+1;
		}
	return user_score;
	}
	
function get_computer_score() {
	if (result=="Lose") {
		computer_score=computer_score+1;
		}
	return computer_score;
	}

function get_score() {
	switch(result) {
		case "Win": 
			scoreboard[0]=scoreboard[0]+1;
			break;
		case "Lose":
			scoreboard[1]=scoreboard[1]+1;
			break;
		}
	return scoreboard;
	}