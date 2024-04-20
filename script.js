    let watch;
    var minutes = 0;
    var seconds = 0;
    var displayMinutes = 0;
    var displaySeconds = 0;

    function Timerstart() {
      watch = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
 
      displayMinutes = minutes < 10 ? "0" + minutes : minutes;
      displaySeconds = seconds < 10 ? "0" + seconds : seconds;

      document.getElementById("stopwatch").textContent = `${displayMinutes}:${displaySeconds}`;
    }

    function Timerpause() {
      clearInterval(watch);
    }

    function Timerreset() {
      clearInterval(watch);
      minutes = 0;
      seconds = 0;
      document.getElementById("stopwatch").textContent = "00:00";
    }

    document.getElementById("start").addEventListener("click", Timerstart);
    document.getElementById("pause").addEventListener("click", Timerpause);
    document.getElementById("reset").addEventListener("click", Timerreset);