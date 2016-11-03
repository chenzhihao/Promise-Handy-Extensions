import '../src/index';

import chai from 'chai';
const should = chai.should();

import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

function asyncCall (input) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      input % 2 === 0 ? resolve(input) : reject({
        rejectedValue: input
      });
    }, 100);
  });
}

describe('#Promise.reduce()', function () {
  describe('1. reduce number array in sync way:', function () {
    it('get correct results', function (done) {
      Promise.reduce([10, 2, 4], (prev, current)=> {
          return prev + current;
        }
      ).should.eventually.eql(16).notify(done);
    });
  });
  describe('2. resolve number array in async way:', function () {
    it('get correct results', function (done) {
      Promise.reduce([2, 4, 6], (prev, current)=> {
        return asyncCall(current).then(val=> prev + val);
      }, 10).should.eventually.eql(22).notify(done);
    });

    it('catch rejected promise', function (done) {
      Promise.reduce([2, 3, 5], (prev, current)=> {
          return asyncCall(current).then(val => val + prev);
        }
      ).should.be.rejectedWith({rejectedValue: 3}).notify(done);
    });
  });
});