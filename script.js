const newGameButton = document.querySelector("#new-game");
const player1InputField = document.querySelector("#player1");
const player2InputField = document.querySelector("#player2");


newGameButton.addEventListener("click", () => {
    Game.start();
    newGameButton.style.display = "none";
    player1InputField.style.display = "none";
    player2InputField.style.display = "none";
});

// Functions
/* #region Main */
function createPlayer(name, symbol){
    return { name, symbol};
};



const Gameboard = (function() {
    let gameboard = ["", "", "", "", "", "", "", "", "", ];
    
    function render() {
        let boardHTML = "";
         gameboard.forEach((cell, index) => {
            boardHTML += `<div class = "cell" id = "cell-${index}">${cell}</div>`
        })//closes foreach

        document.querySelector("#gameboard").innerHTML = boardHTML;
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.addEventListener("click", Game.handleClick);
        } )
    }//closes render
    function update(index, symbol) {
        if (gameboard[index] === "") { // Check if cell is empty
            gameboard[index] = symbol;
            render();
            return true; // Update successful
        }
        return false; // Update unsuccessful
    }
    return {render, update}
})(); //closes Gameboard | Invokes IIFE

 const Game = (function() {
    let players = [];
    let currentPlayer;
    let gameOver;

        function start() { // Factory
            players = 
            [createPlayer(document.querySelector("#player1").value, "X"), 
            createPlayer(document.querySelector("#player2").value, "O")];
            currentPlayer = 0;
            gameOver = false;
            Gameboard.render();
    }
    const handleClick = (event) => {
        let index = parseInt(event.target.id.split("-")[1]);
        if (Gameboard.update(index, players[currentPlayer].symbol)) {
            currentPlayer = (currentPlayer + 1) % 2; // Switch player
        }
    }

    return { start, handleClick };
})();
/* #endregion */