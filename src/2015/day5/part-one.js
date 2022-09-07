import { partitionArray } from '../../utils.js';
import { input } from './input.js';

const vowels = ['a', 'e', 'i', 'o', 'u'];
const naughtyString = ['ab', 'cd', 'pq', 'xy'];

const vowelCheck = (inp) => {
	let formattedInp = inp.split('');
	const vowelCheck =
		formattedInp.length - formattedInp.filter((item) => !vowels.includes(item)).length >= 3;
	return vowelCheck;
};

const partitionedChecks = (inp) => {
	const partitioned = partitionArray(inp.split(''));
	return (
		//includes b2b letters
		partitioned.map((letterPair) => new Set(letterPair).size).filter((num) => num <= 1)
			.length >= 1 &&
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
