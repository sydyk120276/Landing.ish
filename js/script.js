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

// Анимация

const animItems = document.querySelectorAll("._anim-items");


if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i += 1) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim_no_hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

// валидация


// const selector = document.querySelector('#phone')
// let im = new Inputmask("+7(999)999-99-99")
// im.mask(selector)

let validation = new JustValidate('#form')

validation.addField("#email", [
  {
    rule: 'customRegexp',
    value: /^[A-Za-z0-9][A-Za-z0-9\.\-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/gi,
    errorMessage: 'Ошибка'
  },
  {
    rule: 'required',
    errorMessage: 'Введите электронную почту'
  },
  // {
  //   rule: 'minLength',
  //   value: 2,
  //   errorMessage: 'Минимум пять символов'
  // },
  {
    rule: 'email',
    errorMessage: 'Ошибка введите правильный электронную почту'
  },
])
  // .addField("#phone", [
  //   {
  //     validator: (value) => {
  //       const phone = selector.inputmask.unmaskedvalue()
  //       return Boolean(Number(phone) && phone.length > 0)
  //     },
  //     errorMessage: 'Введите телефон'
  //   },
  //   {
  //     validator: (value) => {
  //       const phone = selector.inputmask.unmaskedvalue()
  //       return Boolean(Number(phone) && phone.length === 10)
  //     },
  //     errorMessage: 'Введите номер полностью'
  //   },
  // ])
