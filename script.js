// factory function that creates a player  
const playerFactory = (name,type) => {return {name,type}};

const Player1 = playerFactory('John','X');
const Player2 = playerFactory('Ralph','O');

// module that creates a gameboard
const gameBoard = (() => {
    const columns = 3;
    const rows = columns;
    // created object that contains 3 arrays of 3 to simulate a Tic-Tac-Toe board
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
    gameBoard[c][r] = getType; // draw in board find way to display board
    return gameBoard;
}

// make module that calls play many times until someone wins or board is full
const game = (() => {
    // Calculate area of gameBoard to know how many times 'play' must be run until the board it's full
    const area = gameBoard.length * gameBoard.length; // gameBoard is a square
    for (let i = 1; i <= area; i++) { 
        if (i % 2 === 0) {
            play(Player1)
        } else {
            play(Player2)
        }
    }
    console.log(gameBoard);
})();



