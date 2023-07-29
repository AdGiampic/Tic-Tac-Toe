// factory function that creates a player  
const playerFactory = (name,type) => {return {name,type}};

// function that creates a gameboard
function gameBoard () {
    // defining structure
    const rows = 3;
    const columns = 2;
    const board = [];
    let boardLocation = document.getElementById('gameboard');
    for (let i = 0; i < rows; i++) {
    // creating columns   
        board[i] = [];
        let c = document.createElement('p');
        c.textContent = "Column";
        c.style.border = '1px solid black';
        boardLocation.appendChild(c);
        // creating rows
        for (let j = 0; j < columns; j++) {
            let r = document.createElement('p');
            r.textContent = "Rows";
            r.style.border = '1px solid black';
            boardLocation.appendChild(r);
            board[i].push();
        }
    }
    return board
}

const Player1 = playerFactory('John','X');

const play = (player) => {
    const board = gameBoard(); // creates board
    const getType = player.type; // get value (X or O)
    //add event listener 
    board[0][0] = getType; // draw in board find way to display board
    return board;
}



console.log(play(Player1));


