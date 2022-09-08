import { frequencies, partitionArray, partitionArrayByThree } from '../../utils.js';
import { input } from './input.js';

const partitionedChecks = (inp) => {
	const partitioned = partitionArray(inp.split(''));
	const partitionedByThree = partitionArrayByThree(inp.split(''));
	const setCheck = Object.values(frequencies(partitioned)).filter((x) => x > 1);
	console.log(
		partitionedByThree.filter((item) => {
			return item[0] === item[1] && item[1] === item[2];
		}),
		setCheck.length,

		setCheck.length > 0 &&
			//includes two of the same letters in positions 0/2 in sequence of 0 1 2
			partitionedByThree.filter((item) => {
				return item[0] === item[2];
			}).length > 0 &&
			//does not include all three of the same letters in positions 0/1/2 in sequence of 0 1 2
			!partitionedByThree.filter((item) => {
				return setCheck.length === 1 && item[0] === item[1] && item[1] === item[2];
			}).length > 0
	);
	return (
		//includes two pairs s letters
		setCheck.length > 0 &&
		//includes two of the same letters in positions 0/2 in sequence of 0 1 2
		partitionedByThree.filter((item) => {
			return item[0] === item[2];
		}).length > 0 &&
		//does not include all three of the same letters in positions 0/1/2 in sequence of 0 1 2
		!partitionedByThree.filter((item) => {
			return setCheck <= 2 && item[0] === item[1] && item[1] === item[2];
		}).length > 0
	);
};

const filterInputs = () => {
	const remainingStrings = input.filter((inp) => partitionedChecks(inp));
	return remainingStrings.length;
};

console.time();
console.log(filterInputs());
console.timeEnd();
