import { isArrUniqMultiplePropsFilter } from '../../utils.js';
import { input } from './input.js';

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

const moveSanta = () => {
	let currentLocation = { x: 0, y: 0 };
	let visitedLocations = [currentLocation];
	for (const inst of input) {
		currentLocation = translateInst(inst, currentLocation);
		visitedLocations.push(currentLocation);
	}

	return isArrUniqMultiplePropsFilter(visitedLocations, ['x', 'y']);
};

console.time();
console.log(moveSanta().length);
console.timeEnd();
