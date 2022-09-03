import { formattedInput } from './input.js';

const getTotal = () => {
	let total = 0;
	for (const group of formattedInput) {
		const [a, b, c] = group;
		total = total + a * 2 + b * 2 + a * b * c;
	}
	return total;
};
console.time();
console.log(getTotal());
console.timeEnd();
