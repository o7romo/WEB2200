function checkGrid()
{
    playerOneName = document.getElementById("player1_id").value;
    playerTwoName = document.getElementById("player2_id").value;
    var A1 = document.getElementById("one").innerHTML;
    var A2 = document.getElementById("two").innerHTML;
    var A3 = document.getElementById("three").innerHTML;
    var B1 = document.getElementById("four").innerHTML;
    var B2 = document.getElementById("five").innerHTML;
    var B3 = document.getElementById("six").innerHTML;
    var C1 = document.getElementById("seven").innerHTML;
    var C2 = document.getElementById("eight").innerHTML;
    var C3 = document.getElementById("nine").innerHTML;
    var noWinner = 0;


    if((A1 === "X" && A2 === "X" && A3 === "X") || (B1 === "X" && B2 === "X" && B3 === "X") || (C1 === "X" && C2 === "X" && C3 === "X"))
    {
      alert(playerOneName + " Wins!, resetting game...");
      noWinner = noWinner + 1;
      resetGame();
    }

    if((A1 === "O" && A2 === "O" && A3 === "O") || (B1 === "O" && B2 === "O" && B3 === "O") || (C1 === "O" && C2 === "O" && C3 === "O"))
    {
      alert(playerTwoName + " Wins!, resetting game...");
      noWinner = noWinner + 1;
      resetGame();
    }

    if((A1 === "X" && B1 === "X" && C1 === "X") || (A2 === "X" && B2 === "X" && C2 === "X") || (A3 === "X" && B3 === "X" && C3 === "X"))
    {
      alert(playerOneName + " Wins!, resetting game...");
      noWinner = noWinner + 1;
      resetGame();
    }

    if((A1 === "O" && B1 === "O" && C1 === "O") || (A2 === "O" && B2 === "O" && C2 === "O") || (A3 === "O" && B3 === "O" && C3 === "O"))
    {
      alert(playerTwoName + " Wins!, resetting game...");
      noWinner = noWinner + 1;
      resetGame();
    }

    if((A1 === "X" && B2 === "X" && C3 === "X") || (A3 === "X" && B2 === "X" && C1 === "X"))
    {
      alert(playerOneName + " Wins!, resetting game...");
      noWinner = noWinner + 1;
      resetGame();
    }

    if((A1 === "O" && B2 === "O" && C3 === "O") || (A3 === "O" && B2 === "O" && C1 === "O"))
    {
      alert(playerTwoName + " Wins!, resetting game...");
      noWinner = noWinner + 1;
      resetGame();
    }

    if(A1 != "" && A2 != "" && A3 != "" && B1 != "" && B2 != "" && B3 != "" && C1 != "" && C2 != "" && C3 != "" && noWinner == 0){
      alert("No winner, resetting game...");
      resetGame();
    }

}


var gameHasStarted = 0;
function begin_play()
{
	var playerOne = document.getElementById("player1_id").value;
	var playerTwo = document.getElementById("player2_id").value;

	if(playerOne === "" || playerTwo === "")
	{
		window.alert("Two Player Game, both fields are mandatory");
		return;
	}

	else
	{

    gameHasStarted = 1;
    document.getElementById("turn_info").innerHTML = "Game has started, " + playerOne + " (X) goes first.";
	}

}



var turn = 1;

function checkTurn(){

  playerOne = document.getElementById("player1_id").value;
  playerTwo = document.getElementById("player2_id").value;

  if(turn == 1)
  {
    document.getElementById("turn_info").innerHTML = playerOne + "'s (X) turn.";
  }

  if(turn == 0)
  {
    document.getElementById("turn_info").innerHTML = playerTwo + "'s (O) turn.";
  }
}

function function1()
{
    if(gameHasStarted == 1)
    {

      if (turn == 1){
          document.getElementById("one").innerHTML = "X";
          turn = 0;
          checkTurn();
      }
      else
      {
          document.getElementById("one").innerHTML = "O";
          turn = 1;
          checkTurn();
      }


    }
}

function function2()
{
  if(gameHasStarted == 1)
  {
    if (turn == 1){
        document.getElementById("two").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("two").innerHTML = "O";
        turn = 1;
        checkTurn();
    }


  }
}

function function3()
{
  if(gameHasStarted == 1)
  {
    if (turn == 1){
        document.getElementById("three").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("three").innerHTML = "O";
        turn = 1;
        checkTurn();
    }

  }
}

function function4()
{
  if(gameHasStarted == 1){
    if (turn == 1){
        document.getElementById("four").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("four").innerHTML = "O";
        turn = 1;
        checkTurn();
    }
  }
}

function function5()
{
  if(gameHasStarted == 1){
    if (turn == 1){
        document.getElementById("five").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("five").innerHTML = "O";
        turn = 1;
        checkTurn();
    }

  }
}

function function6(){
  if(gameHasStarted == 1){
    if (turn == 1){
        document.getElementById("six").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("six").innerHTML = "O";
        turn = 1;
        checkTurn();
    }

  }
}

function function7(){

  if(gameHasStarted == 1){
    if (turn == 1){
        document.getElementById("seven").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("seven").innerHTML = "O";
        turn = 1;
        checkTurn();
    }

  }
}

function function8(){

  if(gameHasStarted == 1){
    if (turn == 1){
        document.getElementById("eight").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("eight").innerHTML = "O";
        turn = 1;
        checkTurn();
    }
  }
}

function function9()
{
  if(gameHasStarted == 1){

    if (turn == 1){
        document.getElementById("nine").innerHTML = "X";
        turn = 0;
        checkTurn();
    }

    else
    {
        document.getElementById("nine").innerHTML = "O";
        turn = 1;
        checkTurn();
    }

  }
}

function resetGame()
{
  document.getElementById("turn_info").innerHTML = "New game"
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("six").innerHTML = "";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("eight").innerHTML= "";
  document.getElementById("nine").innerHTML = "";
  turn = 1;
  gameHasStarted = 0;

}
