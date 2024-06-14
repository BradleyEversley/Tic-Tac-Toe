const newGameButton = document.querySelector("#new-game");

newGameButton.addEventListener("click", () => {
    Game.start();
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
    }//closes render

    return {render}
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
            console.log(players);
    }
    return {start}
    }) ();
/* #endregion */