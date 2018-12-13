'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let moves = 0;
const numOfStacks = 4;
const stackNames = Object.getOwnPropertyNames(stacks);

// get length of stack a at the beginning 
// const numOfStackstest = stacks.a.length;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function isLegal(s, e) {

  if (typeof stacks[s] == 'undefined' || typeof stacks[e] == 'undefined') {
    console.log("## ERROR: need to use: " + stackNames + "\n")
    return false
  }

  let start = stacks[s].slice(-1)[0];
  let end = stacks[e].slice(-1)[0];

  if (end == null || start < end) {
    return true
  }
  console.log("!!! move not legal")
}

function checkForWin() {
  let lastObj = Object.getOwnPropertyNames(stacks).slice(-1)[0];

  if (stacks[lastObj].length === numOfStacks) {
    console.log("END GAME");
    return false;
  }
  return true
}

function towersOfHanoi(startStack, endStack) {
  // start = stacks[startStack]
  console.log();
  if (isLegal(startStack, endStack)) {

    moves++;
    let movingBlock = stacks[startStack].pop();
    stacks[endStack].push(movingBlock);
    console.log("moves: "+moves)
    console.log("(" + movingBlock + ") moved from [" + startStack + "] to [" + endStack + "]");
    // console.log(stacks);
    console.log("moves: " + moves)
  }

}


function getPrompt() {

  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);

      if (checkForWin() === true) {
        getPrompt();
      }
      
    });
  });

}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}