import '../src/index';

import chai from 'chai';
const should = chai.should();

import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

function asyncCall(input) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      input % 2 === 0 ? resolve(input) : reject({
        rejectedValue: input
      });
    }, input);
  });
}

function asyncCallWithExecuteOrderRecorded(input, executeOrder) {
  return new Promise((resolve) => {
    setTimeout(()=> {
      executeOrder.push(input);
      resolve({result: input, executeOrder: executeOrder.concat()});
    }, input);
  });
}

describe('#Promise.series()', function () {
  describe('1. resolve number array in sync way:', function () {
    it('get correct results', function (done) {
      Promise.series([10, 2, 4], input=> input
      ).should.eventually.eql([10, 2, 4]).notify(done);
    });

    it('catch rejected promise', function (done) {
      Promise.series([10, 2, 4], (input)=> {
        if (input < 5) {
          throw Error('input should be bigger than 5');
        } else {
          return input;
        }
      }).should.be.rejectedWith(Error, 'input should be bigger than 5').notify(done);
    });

  });
  describe('2. resolve number array in async way:', function () {
    it('get correct results', function (done) {
      Promise.series([2, 4, 6], (input)=> {
          return asyncCall(input);
        }
      ).should.eventually.eql([2, 4, 6]).notify(done);
    });

    it('catch rejected promise', function (done) {
      Promise.series([2, 3, 5], (input)=> {
          return asyncCall(input);
        }
      ).should.be.rejectedWith({rejectedValue: 3}).notify(done);
    });

    it('should execute task serially', function (done) {
      let executeOrder = [];
      Promise.series([300, 1, 2], (input)=> {
        return asyncCallWithExecuteOrderRecorded(input, executeOrder);
      }).should.eventually.eql([
        {result: 300, executeOrder: [300]},
        {result: 1, executeOrder: [300, 1]},
        {result: 2, executeOrder: [300, 1, 2]}
      ]).notify(done);
    });

  });
});