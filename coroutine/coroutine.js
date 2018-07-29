function testGenerator() {
	function* foo() {
		var x = yield 1;
		console.log('foo', 'x', x);

		var y = yield 2;
		console.log('foo', 'y', y);

		return x * y;
	}

	var gen = foo();
	var result;

	// Iteration 1
	result = gen.next();
	console.log('Iteration 1', result);

	// Iteration 2
	result = gen.next(result.value * 3);
	console.log('Iteration 2', result);

	// Iteration 3
	result = gen.next(result.value * 3);
	console.log('Iteration 3', result, '\n\n');

	/*
	var gen = foo();
	var temp = {value: 0};
	while (!(temp = gen.next(temp.value * 2)).done) {
		console.log('generator result', temp);
	}
	console.log('generator result', temp);
	*/
}
/*
Output:
Iteration 1 { value: 1, done: false }
foo x 3
Iteration 2 { value: 2, done: false }
foo y 6
Iteration 3 { value: 18, done: true }
*/



// Iterate generator and return a Promise.
function asyncFunc(func) {
	var gen = func();
	var count = 0;
	return new Promise((resolve, reject) => {
		onResolved();

		function onResolved(res) {
			var ret = gen.next(res);
			console.log('Iteration', ++count, ret);
			next(ret);
		}

		function next(ret) {
			if (ret.done) {
				resolve(ret.value);
			}
			else {
				ret.value.then(onResolved);
			}
		}
	});
}

function testAsyncFunc() {
	function* foo() {
		var x = yield Promise.resolve(3);
		var y = yield Promise.resolve(2);
		return x * y;
	}

	asyncFunc(foo)
	.then(function(res) {
		console.log('AsyncFunc Final', res, '\n\n');
	});
}
/*
Result:
Iteration 1 { value: Promise { 3 }, done: false }
Iteration 2 { value: Promise { 2 }, done: false }
Iteration 3 { value: 6, done: true }
AsyncFunc Final 6
*/



function testAsyncAwait() {
	async function foo() {
		var x = await Promise.resolve(3);
		var y = await Promise.resolve(2);
		return x * y;
	}

	foo()
	.then(function(res) {
		console.log('AsyncAwait Final', res, '\n\n');
	});
}


function main() {
	testGenerator();
	testAsyncFunc();
	testAsyncAwait();
}


main();
