# Promise-Handy-Extension

[![Build Status](https://travis-ci.org/chenzhihao/Promise-Handy-Extensions.svg)](https://travis-ci.org/chenzhihao/Promise-Handy-Extensions)

Promise-Handy-Extension is a pretty simple ES6 promise extension. You can use it in node/browser ENV which has implemented Promises/A+ specification.


## Installation
```bash
$ npm install promise-handy-extension
```

## Usage

### How to import:

commonJS:

```js
require ('promise-handy-extension');
```

ES6:

```js
// ES6:
import 'promise-handy-extension';
```

Use it directly in browse:

```js
<script type="text/javascript" src="../release/promiseHandyExtension.min.js"></script>
...
</script>
```

Then the Promise object will be extended with these methods:

```js
Promise.series
Promise.reduce
...
```

### How to use:
```js

#### Promise.series
// an asyncCall:
function asyncCall(input) {
	// which will return a promise;
	return Promise.resolve(input);
}

Promise.series([input1, input2, input3], function(input, index) {
	return asyncCall(input);
}).then((results)=>{
	console.log(results);
	// it should be [input1, input2, input3];
});
```
The key point here for this method is the exectued order is guaranteed which means only when the returned promise **asyncCall(input1)** is resolved, we will execute **asyncCall(input2)** to get the next promise to execute. This is why it called 'series'.

If one promise is rejected, it will fail fast: Promise.series will reject immediately.

For more detailed example, please check the [test case](https://github.com/chenzhihao/Promise-Handy-Extensions/blob/master/test/series.js) which shows how this handy method can control your promise execute flow:


#### Promise.reduce
// an asyncCall:
function asyncCall(input) {
	// which will return a promise;
	return Promise.resolve(input);
}

Promise.reduce([input1, input2, input3], function(prev, curr, currIdx, arr) {
	return asyncCall(current).then(val=> prev + val);
}, 0).then((results)=>{
	console.log(results);
	// it should be 0 + input1 + input2 + input3;
});

## License
[MIT](https://tldrlegal.com/license/mit-license)