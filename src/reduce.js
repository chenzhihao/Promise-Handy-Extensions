export default function reduce (iterableArray, iterCallback, initialValue) {
  if (!Array.isArray(iterableArray)) {
    throw new Error('iterableArray must be Array');
  }

  let copiedIterableArray = iterableArray.concat();

  let idx;
  let p;

  if (initialValue) {
    p = Promise.resolve(initialValue);
    idx = 0;
  } else {
    p = Promise.resolve(copiedIterableArray[0]);
    idx = 1;
  }

  for (let index = idx; index < copiedIterableArray.length; index++) {
    p = p.then((result)=> {
      let nextPromise = iterCallback(result, copiedIterableArray[index], index, copiedIterableArray);
      return nextPromise;
    }).catch((err)=> {
      throw err;
    });
  }

  return p.catch((err)=> {
      throw err;
    }
  );
}