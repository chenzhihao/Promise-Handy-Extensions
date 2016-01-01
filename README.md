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
require ('promise-handy-extension').default();
```

ES6:

```js
// ES6:
import handy = 'promise-handy-extension';
handy();
```

Use it directly in browse:

```js
<script type="text/javascript" src="https://github.com/chenzhihao/Promise-Handy-Extensions/releases/download/1.0/promiseHandyExtension.min.js"></script>
promiseHandyExtension.default();
```

Then the Promise object will be extended with these methods:

```js
Promise.series
Promise.reduce
...
```

### How to use:
```js

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

For more detailed example, please check the [test case](https://github.com/chenzhihao/Promise-Handy-Extensions/blob/master/test/series.js) which shows how this handy methods can control your promise execute flow:



## License
[MIT](https://tldrlegal.com/license/mit-license)