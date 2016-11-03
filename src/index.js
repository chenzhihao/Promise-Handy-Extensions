import series from './series';
import reduce from './reduce';

let promiseHandyExtension = function () {
  if (Promise) {
    Promise.series = series;
    Promise.reduce = reduce;
  }
};

promiseHandyExtension.series = series;
promiseHandyExtension.reduce = reduce;

export default promiseHandyExtension();
