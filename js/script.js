const deadline = "June 1 2023 00:00:00";

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  const date = document.querySelector(id);
  const timeinterval = setInterval(function () {
    var t = getTimeRemaining(endtime)
    date.innerHTML =
      t.days +
      " дней " +
      t.hours +
      " часов " +
      t.minutes +
      " минут " +
      t.seconds +
      " секунд";
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}

initializeClock(".content__time-сountdown", deadline);
