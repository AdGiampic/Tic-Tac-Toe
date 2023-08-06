// factory function that creates a player  
const playerFactory = (name,type) => {return {name,type}};

// ask name 
const Player1 = playerFactory('John','X');
const Player2 = playerFactory('Ralph','O');

// module that creates a gameboard
const gameBoard = (() => {
    const columns = 3;
    const rows = columns;
    // created array that contains 3 arrays of 3 to simulate a Tic-Tac-Toe board
    const board = [];
    for (let i = 0; i < columns; i++) {
        board[i] = [];
        for (let j = 0; j < rows; j++) {
            // generate a random number so testWin doesn't trigger when the array is empty
            board[i].push(Math.floor(Math.random() * 10));
        }
    }
    return board;
})();


const play = (player) => {
    const getType = player.type; // get value (X or O)
    // try with prompt first
    const location = prompt(player.name +" ," + "where do you want to place your mark in the board?");
    let c = parseInt(location.charAt(0)) - 1;
    let r = parseInt(location.charAt(1)) - 1;
    
    //add event listener (UI) later
    
    //check if the spot is already taken
    if (gameBoard[c][r] === 'X' || gameBoard[c][r] === 'O') {
        alert('Spot Already Taken')
        // use a recursion algorithm to call play many times until the player picks an empty spot
        // to manage which player must repeat the turn I check the current player's name
        if (player.name === Player1.name) {
            play(Player1)
        } else {
            play(Player2)
        }
    } else {
        gameBoard[c][r] = getType; // draw in board 
    }
    //check for win
    if (testWin(player) === true) {
        return true
    }
}
let testWin = (player) => {
    // check if all elements of an array has same value
    let allEqual = arr => arr.every(val => val === arr[0]);
    for (let i = 0; i < gameBoard.length; i++) {
        let arrayColumn = (arr, n) => arr.map(x => x[n]); // anonymous function that uses map method to return a column of the 2D array
        let winRow = allEqual(gameBoard[i]); // boolean variable that returns if the user has same values in a row
        let winColumn = allEqual(arrayColumn(gameBoard,i)); // test if the column of 2D array have all same value
        // if one of the win conditions is met then I return true to stop the game
        if (winRow === true || winColumn === true) {
            return true
        }
    }
    // first parameter is the array, the second parameter is the index, so this script finds the first value in the first array, the second in the second and so on..
    let diagonalL = gameBoard.map((arr,index) => arr[index]);
    // i do the same thing as above but I read the array in reverse so I can retrieve values from lower left to upper right
    let diagonalR = [...gameBoard].reverse().map((arr,index) => arr[index]);
    if (allEqual(diagonalL) === true || allEqual(diagonalR) === true) {
        return true
    }
}

// module IIFE that calls play many times until someone wins or board is full
const game = (() => {
    // Calculate area of gameBoard to know how many times 'play' must be run until the board is full
    const area = gameBoard.length * gameBoard.length; // gameBoard is a square
    // loop that manages each player's turn, if the number is odd is player1's turn otherwise it's player2
    let win = 0;
    for (let i = 1; i <= area; i++) { 
        let playerTurn = "";
        if (i % 2 === 0) {
            playerTurn = Player2;
        } else {
            playerTurn = Player1;
        }
        if (play(playerTurn) === true) {
            // if someone wins I stop the game
            win = 1;
            console.log(gameBoard);
            alert(playerTurn['name'] + " has won!")
            return
        }
    }
    if (win === 0) {
        alert('It\'s a tie')
    }
    console.log(gameBoard);
})();


