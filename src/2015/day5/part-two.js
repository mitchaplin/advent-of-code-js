import { partitionArray } from '../../utils.js';
import { input } from './input.js';

const partitionedChecks = (inp) => {
	const partitioned = partitionArray(inp.split(''));
	return (
		//includes b2b letters
		partitioned.filter((letterPair) => partitioned.includes()).length >= 1 &&
		// does NOT include naughties
		partitioned.length - partitioned.filter((item) => !naughtyString.includes(item)).length ===
			0
	);
};

const filterInputs = () => {
	const remainingStrings = input.filter((inp) => vowelCheck(inp) && partitionedChecks(inp));
	return remainingStrings.length;
};

console.time();
console.log(filterInputs());
console.timeEnd();
