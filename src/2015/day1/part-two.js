import { input } from './input.js';

const getCurrentValue = (inst) => {
	if (inst === '(') {
		return 1;
	} else if (inst === ')') {
		return -1;
	} else {
		return 0;
	}
};

const getFirstNegativeValue = () => {
	let idx = 0;
	let sum = 0;
	for (const item of input) {
		sum = sum + getCurrentValue(item);
		if (sum < 0) {
			idx++;
			return idx;
		} else {
			idx++;
			continue;
		}
	}
};
console.log(getFirstNegativeValue());
