import { input } from './input.js';

const collectInput = (inp, start, a) => {
	let acc = a;
	let current = start;
	let dupe = null;
	for (const i of inp) {
		current = current + i;
		if (acc.includes(current)) {
			dupe = current;
			return [current, acc, dupe];
		}
		acc.push(current);
	}
	return [current, acc, dupe];
};

const cycleInputs = (inp, start, a) => {
	let [curr, acc, dupe] = collectInput(inp, start, a);
	if (dupe !== null) {
		return dupe;
	}
	return cycleInputs(inp, curr, acc);
};

console.time();
console.log(cycleInputs(input, 0, []));
console.timeEnd();
