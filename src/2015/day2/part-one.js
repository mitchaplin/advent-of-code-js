import { formattedInput } from './input.js';

const getTotal = () => {
	let total = 0;
	for (const group of formattedInput) {
		const [a, b, c] = group;
		total = total + a * b + 2 * a * b + 2 * b * c + 2 * a * c;
	}
	return total;
};
console.time();
console.log(getTotal());
console.timeEnd();
