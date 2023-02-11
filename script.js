const start = document.querySelector(".start");
const submit = document.querySelector(".sub-btn");
const rangeInput = document.querySelector(".range");
const resultContent = document.querySelector(".text-content-holder");
const enterContent = document.querySelector(".text-content");
const attemptValue = document.querySelector(".attempt");
const innerCircle = document.querySelector(".inner-circle");
const guessedNum = document.querySelector(".guess-number");
const restart = document.querySelector(".game-over-restart-squre");
const lock = document.querySelector(".lockClose");
let inputValue = document.querySelector(".input-value");
let conformValue;
let enterValue;
let generateNum;
rangeInput.addEventListener("change", function () {
  let attempt = 0;
  conformValue = this.value;
  if (conformValue !== undefined && conformValue !== null) {
    if (conformValue > 0) {
      start.addEventListener("click", () => {
        let range = document.querySelector(".range").value;
        rangeInput.remove();
        start.remove();
        const node = document.createElement("p");
        document.querySelector(".squre1").appendChild(node);
        node.innerText = "0" + " - " + range;
        node.classList.add("rangeValue");
        generateNum = Math.round(Math.random() * range); // generate number
        submit.addEventListener("click", function () {
          attempt++;
          enterValue = inputValue.value;
          if (enterValue !== generateNum) {
            let gif = document.querySelector(".gif-img");
            if (enterValue > generateNum) {
              document.querySelector(".font-c-text").innerHTML =
                "OOPS SORRY!!<br>TRY A SMALLER NUMBER";
              gif.setAttribute("src", "img/giphy-unscreen.gif");
            } else if (enterValue < generateNum) {
              document.querySelector(".font-c-text").innerHTML =
                "OOPS SORRY!!<br>TRY A GREATER NUMBER";
              gif.setAttribute("src", "img/giphy-unscreen.gif");
            } else if (enterValue == generateNum) {
              enterContent.style.display = "none";
              resultContent.style.display = "flex";
              document.querySelector(".font-c-text").innerHTML =
                "CONGRATULATION";
              gif.setAttribute("src", "img/5ad5425d14bc4-unscreen.gif");
              if (attempt < 2) {
                document.querySelector(".change-rank").innerHTML = "🥇";
              } else if (attempt <= 3) {
                document.querySelector(".change-rank").innerHTML = "🥈";
              } else if (attempt <= 5) {
                document.querySelector(".change-rank").innerHTML = "🥉";
              } else if (attempt > 5) {
                document.querySelector(".change-rank").innerHTML = "🎁";
              }
              guessedNum.innerHTML = generateNum;
              attemptValue.innerText = attempt;
              innerCircle.classList.add("new");
              lock.setAttribute("class", "material-symbols-outlined lockClose");
              lock.innerHTML = "lock_open";
            }
          }
        });
      });
    } else {
      rangeInput.remove();
      const node = document.createElement("p");
      document.querySelector(".squre1").appendChild(node);
      node.innerText = "Enter Greater Value";
      node.classList.add("rangeValue");
    }
  }
});

restart.addEventListener("click", () => {
  window.location.reload();
});
