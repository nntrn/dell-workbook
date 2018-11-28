(function () {
  "use strict";

  // Shortcut to get elements
  var el = function (element) {
    if (element.charAt(0) === "#") {
      // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  var viewer = document.querySelector("#results"), // Calculator screen where result is displayed
    equals = el("#equals"),
    clear = el("#clear"),
    nums = el(".num"), // List of numbers
    operation = el(".ops"), // List of operators
    resultNum, // Result
    operator,
    dataKey,
    keyValue,
    one,
    two,
    clearInput = 0,
    calcString = "";

  var setNum = function () {
    dataKey = this.getAttribute("data-key");
    keyValue = this.getAttribute("value");

    if (clearInput == 1) {
      document.querySelector("#results").value = "";
    }

    calcString += keyValue;
    clearInput = 0;
    document.querySelector("#results").value += keyValue;

  };

  var getOps = function () {
    dataKey = this.getAttribute("data-key");
    keyValue = this.getAttribute("value");
    document.querySelector("#results").value += dataKey;
    operator = dataKey;
    calcString += keyValue;
    document.getElementById("test3").innerHTML = calcString;
  };

  var equal = function () {
    var arr = calcString.split(",");

    arr = arr.filter(Number);

    one = arr[arr.length - 2];
    two = arr[arr.length - 1];

    calcEquation(one, two, operator);

  };

  var calcEquation = function (firstVal, secondVal, operationVal) {
    document.getElementById("previous").innerHTML = "";
    document.getElementById("previous").innerHTML +=
      Number(firstVal) + operationVal + Number(secondVal) + "=";

    clearInput = 1;
    calculate(firstVal, secondVal, operationVal);
  };

  var calculate = function (first, second, op) {
    switch (op) {
      case "+":
        var result = Number(first) + Number(second);
        break;

      case "-":
        var result = Number(first) - Number(second);
        break;

      case "*":
        var result = Number(first) * Number(second);
        break;

      case "/":
        var result = Number(first) / Number(second);
        break;

      default:
        var result = Number(second);
    }

    if (!isNaN(result) && result % 1 !== 0) {
      result = result.toFixed(2);
    }

    document.getElementById("results").value = result;
    calcString += "," + result + ",";

    document.getElementById("test3").innerHTML = calcString;
  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function () {

    calcString = "";
    document.getElementById("test3").innerHTML = "";
    document.querySelector("#results").value = "";
    document.getElementById("previous").innerHTML = "=";
  };

  /* The click events */

  // Add click event to numbers
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  for (var i = 0, l = operation.length; i < l; i++) {
    operation[i].onclick = getOps;
  }

  // Add click event to equal sign
  equals.onclick = equal;

  // Add click event to clear button
  clear.onclick = clearAll;
})();
