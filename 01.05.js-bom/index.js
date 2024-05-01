const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const chooseHours = document.getElementById("choose-hours");
const chooseMinutes = document.getElementById("choose-minutes");
const chooseSeconds = document.getElementById("choose-seconds");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let stop = false;
chooseHours.addEventListener("change", () => {
  hours.textContent = chooseHours.value;
});
chooseMinutes.addEventListener("change", () => {
  minutes.textContent = chooseMinutes.value;
});
chooseSeconds.addEventListener("change", () => {
  seconds.textContent = chooseSeconds.value;
});

startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", () => {
  stop = true;
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
  chooseHours.textContent = "00";
  chooseMinutes.textContent = "00";
  chooseSeconds.textContent = "00";
});

function startTimer() {
  let hour = hours.textContent;
  let min = minutes.textContent;
  let sec = seconds.textContent;

  const interval = setInterval(() => {
    sec--;
    sec = sec < 10 ? "0" + sec : sec;
    if (sec == "0-1") {
      hour--;
      min--;
      sec = 59;
    }
    if ((min == "00" && sec == "00") || (min == 0 && sec == 0)) {
      clearInterval(interval);
      window.alert("ALARMIN BITDI GAGASH");
      chooseHours.value = "00";
      chooseMinutes.value = "00";
      chooseSeconds.value = "00";
    }

    if (stop) {
      clearInterval(interval);
      return;
    }
    hour.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
  }, 1000);
}
