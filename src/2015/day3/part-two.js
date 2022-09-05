import { isArrUniqMultiplePropsFilter } from '../../utils.js';
import { input } from './input.js';

const aOdd = input.filter((_, i) => i % 2 === 1);
const aEven = input.filter((_, i) => i % 2 === 0);

const translateInst = (inst, { x, y }) => {
	switch (inst) {
		case '^':
			return { x, y: ++y };
		case 'v':
			return { x, y: --y };
		case '<':
			return { x: --x, y };
		case '>':
			return { x: ++x, y };
	}
};

const moveSanta = (instructions) => {
	let currentLocation = { x: 0, y: 0 };
	let visitedLocations = [currentLocation];
	for (const inst of instructions) {
		currentLocation = translateInst(inst, currentLocation);
		visitedLocations.push(currentLocation);
	}

	return visitedLocations;
};

console.time();
console.log(
	isArrUniqMultiplePropsFilter([...moveSanta(aOdd), ...moveSanta(aEven)], ['x', 'y']).length
);
console.timeEnd();
