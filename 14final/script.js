'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

  function el(element) {
    if (element.charAt(0) === "#")
      return document.querySelector(element);

    return (document.querySelectorAll(element).length == 1) ?
      document.querySelectorAll(element)[0] :
      document.querySelectorAll(element);
  };

  let idCounter = 1;

  function buildFarm() {

    // get width and height of fishbowl div
    // source: https://stackoverflow.com/a/32658882

    // initial fish count
    let fish_num = 20;

    for (var i = 0; i < fish_num; i++) {
      drawFishSvg(fish_num, idCounter);
    }
  }

  function drawFishSvg(fish_num, id) {

    var positionInfo = el("#fishbowl").getBoundingClientRect();
    let win_width = positionInfo.width;
    let win_height = positionInfo.height;

    // set value of fish, 
    // lucky fishes are worth 5x more
    let lucky = random(1, fish_num);
    let value = random(1,10);
    let multiplier = (lucky > fish_num - 1.5 && fish_num > 5) ? 5 : 1;

    let fishDiv = document.createElement("div");
    fishDiv.classList.add("fa-2x");

    fishDiv.style.width = "200%";
    fishDiv.style.position = "absolute";
    fishDiv.style.bottom = random(0, win_height) / 15 + "rem";
    fishDiv.style.left = random(-win_width / fish_num, 1) + "px";

    let fish2 = document.createElement("i");
    fish2.classList.add("fas");

    fish2.setAttribute("value", value);
    fish2.setAttribute("multiplier", multiplier);
  
    if (multiplier == 5) {
      fishDiv.style.left = -4 + "rem";
      fish2.classList.add("fa-money-bill-wave");
      fish2.setAttribute("id", "money-" + id);
    } else {
      fish2.classList.add("fa-fish");
      fish2.setAttribute("id", "fish-" + id);
    }

    let zoom = random(50, 140) * .01;
    fish2.style.zoom = zoom;
    
    fish2.style.color = getRandColor(3);

    fish2.style.animation = `swimh ${random(15,25)}s ${random(0,2)}s ease infinite`;
    fishDiv.style.animation = `swimv ${random(10,30)}s ease-out infinite`;

    if (multiplier == 5) {
      fish2.style.color = "#2ecc71";
      fish2.style.animationDuration = "4000ms";
      fish2.style.animationIterationCount = 1;
    }

    fishDiv.addEventListener('click', catchFish);
    fishDiv.appendChild(fish2);
    el("#fishbowl").appendChild(fishDiv);
    idCounter++;
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandColor(brightness) {

    // Six levels of brightness from 0 to 5,
    // 0 being the darkest
    // red and green are set to 0
    var rgb = [Math.random() * 256, Math.random() * 0, Math.random() * 0];
    var mix = [brightness * 90, brightness * 51, brightness * 51];
    var mixedrgb = [
      rgb[0] + mix[0],
      rgb[1] + mix[1],
      rgb[2] + mix[2]
    ].map(function (x) { return Math.round(x / 2.0)
    })
    return "rgb(" + mixedrgb.join(",") + ")";
  }

  buildFarm();
  var fishCounter = 0;

  function catchFish() {
    //this.children[0].classList.add("selected-fish");
    fishCounter++;
    this.style.display = "none";
    this.children[0].style.display = "none";

    let loot = Number(this.children[0].attributes["value"].value);
    let multiplierVal = Number(this.children[0].attributes["multiplier"].value);
    let lootTotal = Number(el(".coins").innerText) + (loot * multiplierVal);

    console.log(loot, multiplierVal, lootTotal);

    el(".catches").innerText = fishCounter;
    el(".coins").innerText = lootTotal;

    drawFishSvg(1, idCounter);
  }

});