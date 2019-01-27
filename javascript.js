	//number of times both AI and player have moved
	var movements;
	//returns true if it is the player's turn
	var playerTurn;
	// grid to check free spaces in the board. 1 when player occupies that space, 2 when AI does
	var table;

	var gameOver;

function startGame () {
	//Set the game up
	movements = 0;
	playerTurn = true;
	gameOver = false;
	board = [0,0,0,0,0,0,0,0,0];
	publishComment("Game starts");
	publishComment("Your turn");
}

startGame();

function playerMove(position){
	//checks if it his turn
	if (playerTurn==true && gameOver==false){
	//places X in the position clicked
	switch (position){

		case 0:
		if (board[position]==0){
			document.getElementById("square_0").innerHTML = "X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 1:
		if (board[position]==0){
			document.getElementById("square_1").innerHTML = "X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 2:
		if (board[position]==0){
			document.getElementById("square_2").innerHTML = "X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 3:
		if (board[position]==0){
			document.getElementById("square_3").innerHTML="X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 4:
		if (board[position]==0){
			document.getElementById("square_4").innerHTML="X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 5:
		if (board[position]==0){
			document.getElementById("square_5").innerHTML="X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 6:
		if (board[position]==0){
			document.getElementById("square_6").innerHTML="X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 7:
		if (board[position]==0){
			document.getElementById("square_7").innerHTML="X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		}
		break;
		case 8:
		if (board[position]==0){
			document.getElementById("square_8").innerHTML="X";
			movements=movements+1;
			playerTurn=false;
			playerNarration(position+1);
			board[position]=1;
			checkWin();
			checkDraw();
			AI();
		break;
		}
		
	}
	}

	}


function playerNarration (position){
	//Prints where the player has moved
	var narration = movements + ". " + "Player played in position " + position;
	publishComment(narration);
}

function AINarration (position){
	//Print where the player has moved
	var narration = movements + ". " + "AI played in position " + position;
	publishComment(narration);
}

function publishComment(comment){
	//Publish Comments
	document.getElementById("text_3").innerHTML = document.getElementById("text_2").innerHTML;
	document.getElementById("text_2").innerHTML = document.getElementById("text_1").innerHTML;
	document.getElementById("text_1").innerHTML = comment;
}

function AI() {
	if (gameOver==false){
	publishComment("AI is thinking...");
	setTimeout(checkLosingMove,900);
	}
}

function AImove(position) {
	var position;
	while (playerTurn==false) {
		position=Math.floor(Math.random()*10);
		switch (position){
			case 0:
			if (board[position]==0){
				document.getElementById("square_0").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 1:
			if (board[position]==0){
				document.getElementById("square_1").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 2:
			if (board[position]==0){
				document.getElementById("square_2").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 3:
			if (board[position]==0){
				document.getElementById("square_3").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 4:
			if (board[position]==0){
				document.getElementById("square_4").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 5:
			if (board[position]==0){
				document.getElementById("square_5").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 6:
			if (board[position]==0){
				document.getElementById("square_6").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 7:
			if (board[position]==0){
				document.getElementById("square_7").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
			case 8:
			if (board[position]==0){
				document.getElementById("square_8").innerHTML = "O";
				movements=movements+1;
				playerTurn=true
				board[position]=2;
				AINarration(position+1);
			}
			break;
		}
	} 
}

function checkLosingMove(){

	for (var a=2; a>0; a--){
	if (((board[3]==a && board[6]==a) || (board[1]==a && board[2]==a) || (board[4]==a && board[8]==a)) && board[0]==0 && playerTurn==false){
		document.getElementById("square_0").innerHTML = "O";
				movements=movements+1;
				board[0]=2;
				AINarration(1);
				playerTurn=true;
	}
	if (((board[0]==a && board[2]==a) || (board[4]==a && board[7]==a))&& board[1]==0 && playerTurn==false){
		document.getElementById("square_1").innerHTML = "O";
				movements=movements+1;
				board[1]=2;
				AINarration(2);
				playerTurn=true;
	}
	if (((board[0]==a && board[1]==a) || (board[5]==a && board[8]==a) || (board[4]==a && board[6]==a))&& board[2]==0 && playerTurn==false){
		document.getElementById("square_2").innerHTML = "O";
				movements=movements+1;
				board[2]=2;
				AINarration(3);
				playerTurn=true;
	}
	if (((board[0]==a && board[6]==a) || (board[4]==a && board[5]==a))&& board[3]==0 && playerTurn==false){
		document.getElementById("square_3").innerHTML = "O";
				movements=movements+1;
				board[3]=2;
				AINarration(4);
				playerTurn=true;
	}
	if (((board[0]==a && board[8]==a) || (board[2]==a && board[6]==a) || (board[3]==a && board[5]==a) || (board[1]==a && board[7]==a))&& board[4]==0 && playerTurn==false){
		document.getElementById("square_4").innerHTML = "O";
				movements=movements+1;
				board[4]=2;
				AINarration(5);
				playerTurn=true;
	}
	if (((board[3]==a && board[4]==a) || (board[2]==a && board[8]==a))&& board[5]==0 && playerTurn==false){
		document.getElementById("square_5").innerHTML = "O";
				movements=movements+1;
				board[5]=2;
				AINarration(6);
				playerTurn=true;
	}
	if (((board[0]==a && board[3]==a) || (board[2]==a && board[4]==a) || (board[7]==a && board[8]==a))&& board[6]==0 && playerTurn==false){
		document.getElementById("square_6").innerHTML = "O";
				movements=movements+1;
				board[6]=2;
				AINarration(7);
				playerTurn=true;
	}
	if (((board[1]==a && board[4]==a) || (board[6]==a && board[8]==a))&& board[7]==0 && playerTurn==false){
		document.getElementById("square_7").innerHTML = "O";
				movements=movements+1;
				board[7]=2;
				AINarration(8);
				playerTurn=true;
	}
	if (((board[0]==a && board[4]==a) || (board[2]==a && board[5]==a) || (board[6]==a && board[7]==a))&& board[8]==0 && playerTurn==false){
		document.getElementById("square_8").innerHTML = "O";
				movements=movements+1;
				board[8]=2;
				AINarration(9);
				playerTurn=true;
	}
	}
	checkWin();
	if (playerTurn==false){
		AImove();
	}
}

function checkWin(){
	for (var a=1;a<3;a++){
		if (board[0]==a && board[1]==a && board[2]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
		if (board[3]==a && board[4]==a && board[5]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
		if (board[6]==a && board[7]==a && board[8]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
		if (board[0]==a && board[3]==a && board[6]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
		if (board[1]==a && board[4]==a && board[7]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
		if (board[2]==a && board[5]==a && board[8]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
		if (board[0]==a && board[4]==a && board[8]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
		if (board[2]==a && board[4]==a && board[6]==a){
			if (a==1){publishComment("Player has won the game!");}
			if (a==2){publishComment("AI has won the game!");}
			gameOver=true;
			setTimeout(cleanBoard,1700);
		}
	}
}

function checkDraw(){
	if (board[0]!=0 && board[1]!=0 && board[2]!=0 && board[3]!=0 && board[4]!=0 && board[5]!=0 && board[6]!=0 && board[7]!=0 && board[8]!=0 && gameOver==false){
		gameOver=true;
		publishComment("DRAW");
		setTimeout(cleanBoard,1700);
	}
}

function cleanBoard(){
	document.getElementById("square_0").innerHTML="";
	document.getElementById("square_1").innerHTML="";
	document.getElementById("square_2").innerHTML="";
	document.getElementById("square_3").innerHTML="";
	document.getElementById("square_4").innerHTML="";
	document.getElementById("square_5").innerHTML="";
	document.getElementById("square_6").innerHTML="";
	document.getElementById("square_7").innerHTML="";
	document.getElementById("square_8").innerHTML="";
	publishComment("");
	publishComment("");
	publishComment("");
	startGame();
}
