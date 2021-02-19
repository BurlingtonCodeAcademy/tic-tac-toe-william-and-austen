//variables
let playerX = "Player X";
let playerO = "Player O";
let vsComputer = false;
let currentPlayer = "X";
let gameRunning = false;
let timerInterval = "";
let winColor = "green"; //put hex code here
let computerTurnCount = 0;
//functions
//Set variables based on input, change what is visible for gameplay, and start game
function startGame() {
  let playerOne = document.getElementById("player 1");
  if (playerOne.value !== "") {
    playerX = playerOne.value;
  }
  let playerTwo = document.getElementById("player 2");
  if (playerTwo.value !== "") {
    playerO = playerTwo.value;
  }
  document.getElementById("start").disabled = true;
  gameRunning = true;
  vsComputer = document.getElementById("vs computer").checked;
  if (vsComputer) {
    playerO = "Computer";
    computerTurnCount = 0;
  }
  document.getElementById("currentTurn").textContent =
    "It's " + playerX + "'s Turn!";
  document.getElementById("pregameInput").style.display = "none";
  document.getElementById("gameDisplay").style.display = "";
  timerInterval = setInterval(incrementTimer, 1000);
}
//Fill cell if available and switch player display
function chooseCell(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    if (checkWin()) {
      return;
    }
    if (currentPlayer === "X") {
      if (gameRunning && checkDraw()) {
        alert("It's a Draw!");
        gameRunning = false;
        clearInterval(timerInterval);
        return;
      }
      currentPlayer = "O";
      document.getElementById("currentTurn").textContent =
        "It's " + playerO + "'s Turn!";
      if (vsComputer) {
        cpuTurn();
      }
    } else {
      if (gameRunning && checkDraw()) {
        alert("It's a Draw!");
        gameRunning = false;
        clearInterval(timerInterval);
        return;
      }
      currentPlayer = "X";
      document.getElementById("currentTurn").textContent =
        "It's " + playerX + "'s Turn!";
    }
  } else {
    alert("Please select an empty cell!");
  }
}
//pass clicked cell to choose cell
function playerTurn(event) {
  if (gameRunning) {
    chooseCell(event.target);
  }
}
//check if all cells are filled
function checkDraw() {
  if (!document.getElementById("cell-0").textContent) {
    return false;
  } else if (!document.getElementById("cell-1").textContent) {
    return false;
  } else if (!document.getElementById("cell-2").textContent) {
    return false;
  } else if (!document.getElementById("cell-3").textContent) {
    return false;
  } else if (!document.getElementById("cell-4").textContent) {
    return false;
  } else if (!document.getElementById("cell-5").textContent) {
    return false;
  } else if (!document.getElementById("cell-6").textContent) {
    return false;
  } else if (!document.getElementById("cell-7").textContent) {
    return false;
  } else if (!document.getElementById("cell-8").textContent) {
    return false;
  } else {
    return true;
  }
}
//check for win and change winning cells background color
function checkWin() {
  let rowOne = [
    document.getElementById("cell-0").textContent,
    document.getElementById("cell-1").textContent,
    document.getElementById("cell-2").textContent,
  ];
  let rowTwo = [
    document.getElementById("cell-3").textContent,
    document.getElementById("cell-4").textContent,
    document.getElementById("cell-5").textContent,
  ];
  let rowThree = [
    document.getElementById("cell-6").textContent,
    document.getElementById("cell-7").textContent,
    document.getElementById("cell-8").textContent,
  ];
  if (rowOne[0] === rowOne[1] && rowOne[1] === rowOne[2] && rowOne[0] !== "") {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-0").style.backgroundColor = winColor;
    document.getElementById("cell-1").style.backgroundColor = winColor;
    document.getElementById("cell-2").style.backgroundColor = winColor;
    if (rowOne[0] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else if (
    rowTwo[0] === rowTwo[1] &&
    rowTwo[1] === rowTwo[2] &&
    rowTwo[0] !== ""
  ) {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-3").style.backgroundColor = winColor;
    document.getElementById("cell-4").style.backgroundColor = winColor;
    document.getElementById("cell-5").style.backgroundColor = winColor;
    if (rowTwo[0] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else if (
    rowThree[0] === rowThree[1] &&
    rowThree[1] === rowThree[2] &&
    rowThree[0] !== ""
  ) {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-6").style.backgroundColor = winColor;
    document.getElementById("cell-7").style.backgroundColor = winColor;
    document.getElementById("cell-8").style.backgroundColor = winColor;
    if (rowThree[0] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else if (
    rowOne[0] === rowTwo[0] &&
    rowTwo[0] === rowThree[0] &&
    rowOne[0] !== ""
  ) {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-0").style.backgroundColor = winColor;
    document.getElementById("cell-3").style.backgroundColor = winColor;
    document.getElementById("cell-6").style.backgroundColor = winColor;
    if (rowOne[0] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else if (
    rowOne[1] === rowTwo[1] &&
    rowTwo[1] === rowThree[1] &&
    rowOne[1] !== ""
  ) {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-1").style.backgroundColor = winColor;
    document.getElementById("cell-4").style.backgroundColor = winColor;
    document.getElementById("cell-7").style.backgroundColor = winColor;
    if (rowOne[1] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else if (
    rowOne[2] === rowTwo[2] &&
    rowTwo[2] === rowThree[2] &&
    rowOne[2] !== ""
  ) {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-2").style.backgroundColor = winColor;
    document.getElementById("cell-5").style.backgroundColor = winColor;
    document.getElementById("cell-8").style.backgroundColor = winColor;
    if (rowOne[2] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else if (
    rowOne[0] === rowTwo[1] &&
    rowTwo[1] === rowThree[2] &&
    rowOne[0] !== ""
  ) {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-0").style.backgroundColor = winColor;
    document.getElementById("cell-4").style.backgroundColor = winColor;
    document.getElementById("cell-8").style.backgroundColor = winColor;
    if (rowOne[0] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else if (
    rowOne[2] === rowTwo[1] &&
    rowTwo[1] === rowThree[0] &&
    rowOne[2] !== ""
  ) {
    gameRunning = false;
    clearInterval(timerInterval);
    document.getElementById("cell-2").style.backgroundColor = winColor;
    document.getElementById("cell-4").style.backgroundColor = winColor;
    document.getElementById("cell-6").style.backgroundColor = winColor;
    if (rowOne[2] === "X") {
      alert(playerX + " has Won!");
    } else {
      alert(playerO + " has Won!");
    }
    return true;
  } else {
    return false;
  }
}
//increment timer and format as time
function incrementTimer() {
  let timeDisplay = document.getElementById("timeCounted");
  let hours = timeDisplay.textContent.slice(
    0,
    timeDisplay.textContent.indexOf(":")
  );
  let minutes = timeDisplay.textContent.slice(
    timeDisplay.textContent.indexOf(":") + 1,
    timeDisplay.textContent.lastIndexOf(":")
  );
  let seconds = timeDisplay.textContent.slice(
    timeDisplay.textContent.lastIndexOf(":") + 1
  );
  seconds = +seconds + 1;
  if (seconds >= 60) {
    seconds = "00";
    minutes = +minutes + 1;
  } else if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes >= 60) {
    minutes = "00";
    hours = +hours + 1;
  } else if (minutes < 10) {
    minutes = "0" + +minutes;
  }
  timeDisplay.textContent = hours + ":" + minutes + ":" + seconds;
}
//Computer player logic
function cpuTurn() {
  let targetCell = 9;
  switch (computerTurnCount) {
    case 0://first turn, take center if available, else take corner
      if (document.getElementById("cell-4").textContent === "") {
        chooseCell(document.getElementById("cell-4"));
      } else {
        chooseCell(document.getElementById("cell-6"));
      }
      break;
    case 1://block player win if it exists, else take corner
      targetCell = checkCanWin('X');
      if(targetCell !== 9){
        chooseCell(document.getElementById('cell-' + targetCell));
      }else if(document.getElementById('cell-4').textContent === 'X'){
        chooseCell(document.getElementById('cell-8'));
      }else if(document.getElementById('cell-1').textContent === 'X' || document.getElementById('cell-5').textContent === 'X'){
        chooseCell(document.getElementById('cell-2'));
      }else if(document.getElementById('cell-3').textContent === 'X' || document.getElementById('cell-7').textContent === 'X'){
        chooseCell(document.getElementById('cell-6'));
      }else if((document.getElementById('cell-8').textContent === 'X' && document.getElementById('cell-0').textContent === 'X') || (document.getElementById('cell-2').textContent === 'X' && document.getElementById('cell-6').textContent === 'X')){
        chooseCell(document.getElementById('cell-7'));
      }else if(document.getElementById('cell-8').textContent === ''){
        chooseCell(document.getElementById('cell-8'));
      }else{
        chooseCell(document.getElementById('cell-6'));
      }
      break;
    default://win if possible, else block player if possible, else take corner
      targetCell = checkCanWin('O');
      if(targetCell !== 9){
        chooseCell(document.getElementById('cell-' + targetCell));
      }else{
        targetCell = checkCanWin('X');
        if(targetCell !== 9){
          chooseCell(document.getElementById('cell-' + targetCell));
        }else if(document.getElementById('cell-8').textContent === ""){
          chooseCell(document.getElementById('cell-8'));
        }else if(document.getElementById('cell-6').textContent === ""){
          chooseCell(document.getElementById('cell-6'));
        }else if(document.getElementById('cell-2').textContent === ""){
          chooseCell(document.getElementById('cell-2'));
        }else if(document.getElementById('cell-0').textContent === ""){
          chooseCell(document.getElementById('cell-0'));
        }else if(document.getElementById('cell-7').textContent === ""){
          chooseCell(document.getElementById('cell-7'));
        }else if(document.getElementById('cell-5').textContent === ""){
          chooseCell(document.getElementById('cell-5'));
        }else if(document.getElementById('cell-3').textContent === ""){
          chooseCell(document.getElementById('cell-3'));
        }else{
          chooseCell(document.getElementById('cell-1'));
        }
      }
  }
  computerTurnCount++;
}
//check if there is winning move available for computer player logic
function checkCanWin(symbol){
  let lineCount = 0;
  let currentCell = 0;
  while(currentCell < 9){
    if(currentCell === 0 && document.getElementById('cell-0').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-1').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-2').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-3').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-6').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-8').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 1 && document.getElementById('cell-1').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-0').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-2').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-7').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 2 && document.getElementById('cell-2').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-1').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-0').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-5').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-8').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-6').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 3 && document.getElementById('cell-3').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-0').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-6').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-5').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 4 && document.getElementById('cell-4').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-1').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-7').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-5').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-3').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-2').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-6').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-0').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-8').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 5 && document.getElementById('cell-5').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-8').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-2').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-3').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 6 && document.getElementById('cell-6').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-3').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-0').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-7').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-8').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-2').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 7 && document.getElementById('cell-7').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-6').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-8').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-1').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }else if(currentCell === 8 && document.getElementById('cell-8').textContent === ''){
      lineCount = 0;
      if(document.getElementById('cell-4').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-0').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-5').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-2').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
      lineCount = 0;
      if(document.getElementById('cell-7').textContent === symbol){
        lineCount++;
      }
      if(document.getElementById('cell-6').textContent === symbol){
        lineCount++;
      }
      if(lineCount >= 2){
        return currentCell;
      }
    }
    currentCell++;
  }
  return currentCell;
}
//reset variables to default, clear timer, change visibility back to pregame state, and clear cells
function reset() {
  document.getElementById("start").disabled = false;
  playerX = "Player X";
  playerO = "Player O";
  vsComputer = false;
  currentPlayer = "X";
  gameRunning = false;
  clearInterval(timerInterval);
  timerInterval = "";
  document.getElementById("gameDisplay").style.display = "none";
  document.getElementById("pregameInput").style.display = "";
  document.getElementById("cell-0").textContent = "";
  document.getElementById("cell-1").textContent = "";
  document.getElementById("cell-2").textContent = "";
  document.getElementById("cell-3").textContent = "";
  document.getElementById("cell-4").textContent = "";
  document.getElementById("cell-5").textContent = "";
  document.getElementById("cell-6").textContent = "";
  document.getElementById("cell-7").textContent = "";
  document.getElementById("cell-8").textContent = "";
  document.getElementById("cell-0").style.backgroundColor = "";
  document.getElementById("cell-1").style.backgroundColor = "";
  document.getElementById("cell-2").style.backgroundColor = "";
  document.getElementById("cell-3").style.backgroundColor = "";
  document.getElementById("cell-4").style.backgroundColor = "";
  document.getElementById("cell-5").style.backgroundColor = "";
  document.getElementById("cell-6").style.backgroundColor = "";
  document.getElementById("cell-7").style.backgroundColor = "";
  document.getElementById("cell-8").style.backgroundColor = "";
  document.getElementById("timeCounted").textContent = "0:00:00";
}
//add event handlers
document.getElementById("cell-0").addEventListener("click", playerTurn);
document.getElementById("cell-1").addEventListener("click", playerTurn);
document.getElementById("cell-2").addEventListener("click", playerTurn);
document.getElementById("cell-3").addEventListener("click", playerTurn);
document.getElementById("cell-4").addEventListener("click", playerTurn);
document.getElementById("cell-5").addEventListener("click", playerTurn);
document.getElementById("cell-6").addEventListener("click", playerTurn);
document.getElementById("cell-7").addEventListener("click", playerTurn);
document.getElementById("cell-8").addEventListener("click", playerTurn);
