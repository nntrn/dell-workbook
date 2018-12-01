"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

  var el = function (element) {
    if (element.charAt(0) === "#") {
      // if passed an ID (hashtag) return single element
      return document.querySelector(element);
    }
    // otherwise, returns a nodelist
    return document.querySelectorAll(element);
  };

  /* variables
/*================================================= */
  var winner = el("#announce-winner"),
    clear = el("#clear"),
    test = el("#test"),
    square = el("[data-cell]");

  /* add player moves
/*================================================= */

  var player = "O";

  var addPlayerMoves = function () {
    var cellNum = this.getAttribute("data-cell");

    if (square[cellNum].innerText === "") {
      player = player === "O" ? "X" : "O";
      square[cellNum].innerText = player;
    }

    gameStatus();
    winner.innerText = gameStatus();
  };

  /* look for winner
/*================================================= */

  var gameStatus = function () {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    var didPlayerWin = false;

    winningCombos.forEach(combo => {
      didPlayerWin =
        didPlayerWin ||
        (document.querySelector(`[data-cell="${combo[0]}"]`).innerText === player &&
          document.querySelector(`[data-cell="${combo[1]}"]`).innerText === player &&
          document.querySelector(`[data-cell="${combo[2]}"]`).innerText == player);
    });

    return (didPlayerWin === true) ? (player + " is the winner!") : "";

  };

  /* clear board
/*================================================= */
  var clearBoard = function () {
    square.forEach(function (cell) {
      cell.innerText = "";
      winner.innerText = "";
      player = "O";
    })

  };

  /* event loaders
/*================================================= */

  square.forEach(cell => cell.addEventListener('click', addPlayerMoves));
  clear.addEventListener("click", clearBoard);

});