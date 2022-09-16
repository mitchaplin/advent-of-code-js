import { sortNumbers, splitToChunks } from '../../utils.js';
import { input } from './input.js';

const sortInputs = (x, idx) => {
	return x[0].split(/\s+/).map((y) => parseInt(y))[idx];
};

const isValidTriangle = (arr) => {
	let a, b, c;
	[a, b, c] = arr;

	return a + b > c;
};

const compute = () => {
	let adjustedArr = [[], [], []];
	let adjustedInput;
	let chunks;
	let flatChunks;
	let final = [];
	[0, 1, 2].map((idx) => {
		for (const inp of input) {
			adjustedInput = sortInputs(inp, idx);
			adjustedArr[idx].push(adjustedInput);
			flatChunks = adjustedArr.flat();
			chunks = splitToChunks(flatChunks, flatChunks.length / 3).map((x) => sortNumbers(x));
		}
	});
	for (const chunk of chunks) {
		if (isValidTriangle(chunk)) {
			final.push(chunk);
		}
	}
	return final.length;
};

console.time();
console.log(compute());
console.timeEnd();
