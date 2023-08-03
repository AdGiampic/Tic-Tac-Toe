// factory function that creates a player  
const playerFactory = (name,type) => {return {name,type}};

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
            board[i].push();
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
    if (gameBoard[c][r] !== undefined) {
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
        console.log(player.name + "has won.")
        return
    }
}
let testWin = (player) => {
    for (let i = 0; i < gameBoard.length; i++) {
        let arrayColumn = (arr, n) => arr.map(x => x[n]); // anonymous function that uses map method to return a column of the 2D array
        // check if all elements of an array has same value
        let allEqual = arr => arr.every(val => val === arr[0]);
        let winRow = allEqual(gameBoard[i]); // boolean variable that returns if the user has won if the board has same values in a row
        let winColumn = allEqual(arrayColumn(gameBoard,i)); // test if the column of 2D array have all same value
        if (winRow === true || winColumn === true) {
            alert('Win!')
            return true
        }
    }
    
}

// module that calls play many times until someone wins or board is full
const game = (() => {
    // Calculate area of gameBoard to know how many times 'play' must be run until the board it's full
    const area = gameBoard.length * gameBoard.length; // gameBoard is a square
    // loop that manages each player's turn, if the number is odd is player1's turn otherwise it's player2
    
    for (let i = 1; i <= area; i++) { 
        if (i % 2 === 0) {
            play(Player2)
        } else {
            play(Player1)
        }
    }
    console.log(gameBoard);
})();



// check win diagonal to do 

/*
console.log(testWin(Player1))
console.log(gameBoard)
*/


