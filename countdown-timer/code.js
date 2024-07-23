// Algorithm of a countdown based on pomodoro...
const secondsDefault = 59;
let secondsCounter = secondsDefault;
let minutesCounter = 2;

function hidePause() {
  pauseButton = document
    .getElementById("pauseButton")
    .setAttribute("hidden", " ");
  startButtons = document
    .getElementById("startPomodoro")
    .removeAttribute("hidden");
  startButtons = document
    .getElementById("startShort")
    .removeAttribute("hidden");
  startButtons = document.getElementById("startLong").removeAttribute("hidden");
}
// Reset app uses a Reload Page for Reset..
function resetApp() {
  window.location.reload();
}
function hideButtons(hideStart) {
  if (hideStart == true) {
    //When press Start Buttons, auto-hide all them..
    let startButtons = document
      .getElementById("startPomodoro")
      .setAttribute("hidden", "");
    startButtons = document
      .getElementById("startShort")
      .setAttribute("hidden", "");
    startButtons = document
      .getElementById("startLong")
      .setAttribute("hidden", "");
    pauseButton = document
      .getElementById("pauseButton")
      .removeAttribute("hidden");
  }
}
function minTest(minutesCounter, i) {
  let minuteCounterArea = document.getElementById("minuteCounter");
  let areaOfCounter = document.getElementById("cls");
  let pointerDivider = document.getElementById("pointerDivider");

  // PAUSES / INTERVALS AREA...
  minuteCounterArea.innerHTML = minutesCounter;
  minutesCounter--;
  setTimeout(() => {
    minuteCounterArea.innerHTML = minutesCounter;
  }, 1000);
  setTimeout(() => {
    minutesCounter++;
  }, 2000);
  setTimeout(() => {
    pointerDivider.innerHTML = ":";
  }, 1000);

  for (let i = 1; i != 0; i--) {
    var secondCounterArea = document.getElementById("secondCounter");
    if (minutesCounter != false) {
      //Interval for countdown from 59 to 0
      var randomN = setInterval(() => {
        secondCounterArea.innerHTML = secondsCounter;
        secondsCounter--;

        if (secondsCounter === -1) {
          clearInterval(randomN);
          secondsCounter = secondsDefault;
          minutesCounter--;
          minuteCounterArea.innerHTML = minutesCounter;
          if (minutesCounter == 0) {
            areaOfCounter.innerHTML = "FIM";
            setTimeout(() => {
              alert("acabou!");
            }, 1000);
          }
          if (minutesCounter != -1) {
            minTest();
          }
        }
      }, 1000);
    }
  }
}
