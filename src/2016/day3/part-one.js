import { input } from './input.js';

const sortInputs = (x) => {
	return x[0]
		.split(/\s+/)
		.map((y) => parseInt(y))
		.sort((a, b) => a - b);
};

const isValidTriangle = (arr) => {
	let a, b, c;
	[a, b, c] = arr;

	return a + b > c;
};

const compute = () => {
	let adjustedArr = [];
	let adjustedInput;
	for (const inp of input) {
		adjustedInput = sortInputs(inp);
		if (isValidTriangle(adjustedInput)) {
			adjustedArr.push(adjustedInput);
		}
	}
	return adjustedArr.length;
};

console.time();
console.log(compute());
console.timeEnd();
