'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

  function el(element) {
    if (element.charAt(0) === ".")
      return document.querySelector(element);
    return document.querySelectorAll(element);
  };

  var stack = el("[data-stack]"),
    block = el("[data-block]");

  stack.forEach(cell => cell.addEventListener('click', towersOfHanoi));

  let counter = 0;

  function towersOfHanoi() {
    // is even
    if (counter % 2 == 0)
      getTopBlock(this).classList.add("selected");

    // is odd 
    if (counter % 2 == 1) {
      stack.forEach(cell => cell.classList.remove("selected-stack"));
      this.classList.add("selected-stack");
      if (isValid(this))
        addBlock(this, el(".selected"));
    }
    counter++;
  }

  function isValid(newStack) {

    if (newStack.children.length == 0)
      return true

    let n = Number(getDataValue(getTopBlock(newStack)));
    let o = Number(getDataValue(el(".selected")));

    if (o < n)
      return true

    // remove css class 
    stack.forEach(cell => cell.classList.remove("selected-stack"));
    block.forEach(cell => cell.classList.remove("selected"));
  }

  function addBlock(selectedStack, selectedBlock) {
    selectedBlock.classList.remove("selected");
    selectedStack.appendChild(selectedBlock);
    // TODO: check for win
  }

  function getTopBlock(id) {

    if (typeof id == 'object')
      id = getDataValue(id);
  
    let len = stack[Number(id) - 1].children.length;
    if (len > 0)
      return stack[Number(id) - 1].children[len - 1];
    return 0;
  }

  function getDataValue(e) {
    if (typeof e == "object") {
      let objAttr = e.attributes[0].name;
      return Number(e.getAttribute(objAttr));
    }
    return e;
  }

});