import series from './series';

let promiseHandyExtension = function () {
  if (Promise) {
    Promise.series = series;
  }
};

promiseHandyExtension.series = series;

let executed = false;

function loader () {
  if (!executed) {
    executed = true;
    promiseHandyExtension();
  }
}

export default loader();
