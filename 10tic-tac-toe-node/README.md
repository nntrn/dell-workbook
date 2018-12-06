# tic tac toe (node)


## finished code
### variables
```js
let numBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

let continueGame = true;
let turnCounter = 1;
```

### win types

```js
function horizontalWin(b) {
  let hw = [
    [b[0][0] + b[0][1] + b[0][2]],
    [b[1][0] + b[1][1] + b[1][2]],
    [b[2][0] + b[2][1] + b[2][2]]
  ]
  checkForWin(hw);
}

function verticalWin(b) {
  let vw = [
    [b[0][0] + b[1][0] + b[2][0]],
    [b[0][1] + b[1][1] + b[2][1]],
    [b[0][2] + b[1][2] + b[2][2]]
  ]
  checkForWin(vw);
}

function diagonalWin() {
  let dw = [
    [b[0][0] + b[1][1] + b[2][2]],
    [b[0][2] + b[1][1] + b[2][0]]
  ]
  checkForWin(dw);
}
```

```js
function checkForWin(arr) {
  arr.forEach(cell => {
    if (Math.abs(cell) === 3) {
      continueGame = false;
      var winner = (cell == 3) ? "X is the winner" : "O is the winner";
      printBoard();
      console.log(winner);
    }
  });

}

function ticTacToe(row, column) {

  console.log("\nTURN: " + turnCounter);
  let str = board[row][column];

  if (!/\S/.test(str)) {
    board[row][column] = playerTurn;
    playerTurn = playerTurn === "O" ? "X" : "O";
    numBoard[row][column] = playerTurn === "O" ? 1 : -1;
    turnCounter++;
  }

  horizontalWin(numBoard);
  verticalWin(numBoard);
  diagonalWin(numBoard);

}
```

### getPrompt()

```js
function getPrompt() {

  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);

      if (continueGame == true && turnCounter < 10) {
        getPrompt();
      }

    }); // column
  }); // row

}
```

> added the following code to existing code:
> ```js
> if (continueGame == true && turnCounter < 10) {
>   getPrompt();
> }
> ```

## start code

<details>
<summary>index.js</summary>

```js
'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}
```

</details>

### tests
```js
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
```