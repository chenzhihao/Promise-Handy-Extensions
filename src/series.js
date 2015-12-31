export default function series(iterableArray, iterCallback) {
  if (!Array.isArray(iterableArray)) {
    throw new Error('iterableArray must be Array');
  }

  let results = [];
  let p = Promise.resolve();
  let copiedIterableArray = iterableArray.concat();

  for (let index = 0; index < copiedIterableArray.length; index++) {
    p = p.then(()=> {
      return iterCallback(copiedIterableArray[index], index);
    }).then((res)=> {
      results.push(res);
    }).catch((err)=> {
      throw err;
    });
  }

  return p.then(()=> {
    return results;
  }).catch((err)=> {
      throw err;
    }
  );
}