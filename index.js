import promiseHandyExtension from './src/index';
promiseHandyExtension();

function asyncCall(res) {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log('exected ' + res);
      res % 2 === 0 ? resolve(res) : reject(res);
    }, res);
  });
}


var tasks = [1000, 2, 3];


promiseHandyExtension.series(tasks, (task)=> {
  return task;
}).then((res)=> {
  console.log(res);
});

promiseHandyExtension.series(tasks, (task)=> {
  return asyncCall(task);
}).then((res)=> {
  console.log(res);
}).catch((err)=> {
  console.error(err);
});
