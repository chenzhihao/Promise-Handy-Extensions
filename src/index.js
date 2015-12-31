import series from './series';

let promiseHandyExtension = function () {
  if (Promise) {
    Promise.series = series;
  }
};
promiseHandyExtension.series = series;

export default promiseHandyExtension;
