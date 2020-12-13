import './styles.css';

class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.intervalId = null;
    this.targetDate = targetDate;
    // this.selector = selector;
    // selectorRefs(selector);
  }

  init() {
    const targetDate = this.targetDate;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);

      updateClockface(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

// function selectorRefs(s) {
//   const valueDays = document.querySelector(`${s} [data-value="days"]`);
//   const valueHours = document.querySelector(`${s} [data-value="hours"]`);
//   const valueMins = document.querySelector(`${s} [data-value="mins"]`);
//   const valueSecs = document.querySelector(`${s} [data-value="secs"]`);

//   return { valueDays, valueHours, valueMins, valueSecs };
// }
const refs = {
  valueDays: document.querySelector('span[data-value="days"]'),
  valueHours: document.querySelector('span[data-value="hours"]'),
  valueMins: document.querySelector('span[data-value="mins"]'),
  valueSecs: document.querySelector('span[data-value="secs"]'),
};

function updateClockface({ days, hours, mins, secs }) {
  refs.valueDays.textContent = days;
  refs.valueHours.innerText = hours;
  refs.valueMins.textContent = mins;
  refs.valueSecs.textContent = secs;
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.init(timer);
