//variables
let playerX = 'Player X';
let playerO = 'Player O';
let vsComputer = false;
let currentPlayer = 'X';
let gameRunning = false;
let timerInterval = "";
let winColor = ""//put hex code here
//functions
//Set variables based on input, change what is visible for gameplay, and start game
function startGame(){
    let playerOne = document.getElementById('player 1');
    if(playerOne.value !== ""){
        playerX = playerOne.value;
    }
    let playerTwo = document.getElementById('player 2');
    if(playerTwo.value !== ""){
        playerO = playerTwo.value;
    }
    document.getElementById('start').disabled = true;
    gameRunning = true;
    vsComputer = document.getElementById('vs computer').checked;
    document.getElementById('currentTurn').textContent = "It's " + playerX +"'s Turn!";
    document.getElementById('pregame input').style.display = "none";
    document.getElementById('game display').style.display = "";
    timerInterval = setInterval(incrementTimer, 1000);
}
//Fill cell if available and switch player display
function chooseCell(cell){
    if(!cell.textContent){
        cell.textContent = currentPlayer;
        if(checkWin()){
            return;
        }
        if(currentPlayer === 'X'){
            currentPlayer = 'O';
            document.getElementById('currentTurn').textContent = "It's " + playerO +"'s Turn!";
            if(vsComputer){
                cpuTurn();
            }
        }else{
            currentPlayer = 'X';
            document.getElementById('currentTurn').textContent = "It's " + playerX +"'s Turn!";
        }
    }else{
        alert("Please select an empty cell!");
    }
}
//pass clicked cell to choose cell
function playerTurn(event){
    if(gameRunning){
        if(checkDraw()){
            alert("It's a Draw!");
            gameRunning = false;
            return;
        }
        chooseCell(event.target);
    }
}
//check if all cells are filled
function checkDraw(){
    if(!document.getElementById('cell-0').textContent){
        return false;
    }else if(!document.getElementById('cell-1').textContent){
        return false;
    }else if(!document.getElementById('cell-2').textContent){
        return false;
    }else if(!document.getElementById('cell-3').textContent){
        return false;
    }else if(!document.getElementById('cell-4').textContent){
        return false;
    }else if(!document.getElementById('cell-5').textContent){
        return false;
    }else if(!document.getElementById('cell-6').textContent){
        return false;
    }else if(!document.getElementById('cell-7').textContent){
        return false;
    }else if(!document.getElementById('cell-8').textContent){
        return false;
    }else {
        return true;
    }
}
//check for win and change winning cells background color
function checkWin(){
    let rowOne = [document.getElementById('cell-0').textContent,document.getElementById('cell-1').textContent,document.getElementById('cell-2').textContent]
    let rowTwo = [document.getElementById('cell-3').textContent,document.getElementById('cell-4').textContent,document.getElementById('cell-5').textContent]
    let rowThree = [document.getElementById('cell-6').textContent,document.getElementById('cell-7').textContent,document.getElementById('cell-8').textContent]
    if(rowOne[0] === rowOne[1] && rowOne[1] === rowOne[2] && rowOne[0] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-0').style.backgroundColor = winColor;
        document.getElementById('cell-1').style.backgroundColor = winColor;
        document.getElementById('cell-2').style.backgroundColor = winColor;
        if(rowOne[0] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else if(rowTwo[0] === rowTwo[1] && rowTwo[1] === rowTwo[2] && rowTwo[0] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-3').style.backgroundColor = winColor;
        document.getElementById('cell-4').style.backgroundColor = winColor;
        document.getElementById('cell-5').style.backgroundColor = winColor;
        if(rowTwo[0] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else if(rowThree[0] === rowThree[1] && rowThree[1] === rowThree[2] && rowThree[0] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-6').style.backgroundColor = winColor;
        document.getElementById('cell-7').style.backgroundColor = winColor;
        document.getElementById('cell-8').style.backgroundColor = winColor;
        if(rowThree[0] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else if(rowOne[0] === rowTwo[0] && rowTwo[0] === rowThree[0] && rowOne[0] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-0').style.backgroundColor = winColor;
        document.getElementById('cell-3').style.backgroundColor = winColor;
        document.getElementById('cell-6').style.backgroundColor = winColor;
        if(rowOne[0] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else if(rowOne[1] === rowTwo[1] && rowTwo[1] === rowThree[1] && rowOne[1] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-1').style.backgroundColor = winColor;
        document.getElementById('cell-4').style.backgroundColor = winColor;
        document.getElementById('cell-7').style.backgroundColor = winColor;
        if(rowOne[1] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else if(rowOne[2] === rowTwo[2] && rowTwo[2] === rowThree[2] && rowOne[2] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-2').style.backgroundColor = winColor;
        document.getElementById('cell-5').style.backgroundColor = winColor;
        document.getElementById('cell-8').style.backgroundColor = winColor;
        if(rowOne[2] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else if(rowOne[0] === rowTwo[1] && rowTwo[1] === rowThree[2] && rowOne[0] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-0').style.backgroundColor = winColor;
        document.getElementById('cell-4').style.backgroundColor = winColor;
        document.getElementById('cell-8').style.backgroundColor = winColor;
        if(rowOne[0] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else if(rowOne[2] === rowTwo[1] && rowTwo[1] === rowThree[0] && rowOne[2] !== ""){
        gameRunning = false;
        clearInterval(timerInterval);
        document.getElementById('cell-2').style.backgroundColor = winColor;
        document.getElementById('cell-4').style.backgroundColor = winColor;
        document.getElementById('cell-6').style.backgroundColor = winColor;
        if(rowOne[2] === 'X'){
            alert(playerX + " has Won!");
        }else{
            alert(playerO + ' has Won!');
        }
        return true;
    }else{
        return false;
    }
}
//increment timer and format as time
function incrementTimer(){
    let timeDisplay = document.getElementById('timeCounted');
    let hours = timeDisplay.textContent.slice(0, timeDisplay.textContent.indexOf(':'));
    let minutes = timeDisplay.textContent.slice(timeDisplay.textContent.indexOf(':') + 1, timeDisplay.textContent.lastIndexOf(':'));
    let seconds = timeDisplay.textContent.slice(timeDisplay.textContent.lastIndexOf(':') + 1);
    seconds = +seconds + 1;
    if(seconds >= 60){
        seconds = "00";
        minutes = +minutes + 1;
    }else if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes >= 60){
        minutes = "00";
        hours = +hours + 1;
    }else if(minutes < 10){
        minutes = "0" + minutes;
    }
    timeDisplay.textContent = hours + ':' + minutes + ':' + seconds;
}
function cpuTurn(){

}
//reset variables to default, clear timer, change visibility back to pregame state, and clear cells
function reset(){
    document.getElementById('start').disabled = false;
    playerX = 'Player X';
    playerO = 'Player O';
    vsComputer = false;
    currentPlayer = 'X';
    gameRunning = false;
    clearInterval(timerInterval);
    timerInterval = "";
    document.getElementById('game display').style.display = "none";
    document.getElementById('pregame input').style.display = "";
    document.getElementById('cell-0').textContent = "";
    document.getElementById('cell-1').textContent = "";
    document.getElementById('cell-2').textContent = "";
    document.getElementById('cell-3').textContent = "";
    document.getElementById('cell-4').textContent = "";
    document.getElementById('cell-5').textContent = "";
    document.getElementById('cell-6').textContent = "";
    document.getElementById('cell-7').textContent = "";
    document.getElementById('cell-8').textContent = "";
    document.getElementById('cell-0').style.backgroundColor = "";
    document.getElementById('cell-1').style.backgroundColor = "";
    document.getElementById('cell-2').style.backgroundColor = "";
    document.getElementById('cell-3').style.backgroundColor = "";
    document.getElementById('cell-4').style.backgroundColor = "";
    document.getElementById('cell-5').style.backgroundColor = "";
    document.getElementById('cell-6').style.backgroundColor = "";
    document.getElementById('cell-7').style.backgroundColor = "";
    document.getElementById('cell-8').style.backgroundColor = "";
    document.getElementById('timeCounted').textContent = "0:00:00";
}