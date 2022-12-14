// frequencies e.g. {"a": 2, "b": 3}
export const frequencies = (collection) =>
	collection.reduce((acc, curr) => {
		return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
	}, {});

// number sort
export const sortNumbers = (numArr) => numArr.sort((a, b) => a - b);

// Find unique id's in an array.
export const findUniqueIdsFilter = (arrUniq) =>
	arrUniq.filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);

// If the order is not important, map solutions will be faster: Solution with map

// Unique by multiple properties props arr
export const isArrUniqMultiplePropsFilter = (arrUniq, props) =>
	arrUniq.filter((v, i, a) => a.findIndex((v2) => props.every((k) => v2[k] === v[k])) === i);

//Unique by all properties (This will be slow for large arrays)
export const isArrUniqAllPropsFilter = (arrUniq) =>
	arrUniq.filter(
		(v, i, a) => a.findIndex((v2) => JSON.stringify(v2) === JSON.stringify(v)) === i
	);

//Keep the last occurrence by replacing findIndex with findLastIndex.
export const isArrUniqFirstOccuranceFilter = (arrUniq) =>
	arrUniq.filter((v, i, a) => a.findLastIndex((v2) => v2.place === v.place) === i);

// One liners with Map ( High performance, Does not preserve order )

//Find unique id's in array arr.
export const findUniqueIdsMap = (arrUniq) => [...new Map(arrUniq.map((v) => [v.id, v])).values()];

//If the order is important check out the solution with filter: Solution with filter

// Unique by multiple properties ( place and name ) in array arr
export const isArrUniqMultiplePropsMap = (arrUniq) => [
	...new Map(arrUniq.map((v) => [JSON.stringify([v.place, v.name]), v])).values(),
];

// Unique by all properties in array arr
export const isArrUniqAllPropsMap = (arrUniq) => [
	...new Map(arrUniq.map((v) => [JSON.stringify(v), v])).values(),
];

// Keep the first occurrence in array arr
export const isArrUniqFirstOccuranceMap = (arrUniq) =>
	[
		...new Map(
			arrUniq
				.slice()
				.reverse()
				.map((v) => [v.id, v])
		).values(),
	].reverse();

// TODO: this needs to be cleaned up/optimized
export const partitionArray = (arr) => {
	let newArr = [];
	let iter = 0;
	for (const _ of arr) {
		if (iter >= arr.length - 1) {
			break;
		} else {
			newArr.push(`${arr[iter]}${arr[iter + 1]}`);
		}
		iter = iter + 1;
	}
	return newArr;
};

export const partitionArrayByThree = (arr) => {
	let newArr = [];
	let iter = 0;
	for (const _ of arr) {
		if (iter >= arr.length - 2) {
			break;
		} else {
			newArr.push(`${arr[iter]}${arr[iter + 1]}${arr[iter + 2]}`);
		}
		iter = iter + 1;
	}
	return newArr;
};

export const splitToChunks = (array, parts) => {
	let result = [];
	for (let i = parts; i > 0; i--) {
		result.push(array.splice(0, Math.ceil(array.length / i)));
	}
	return result;
};

export const removeWhiteSpaceFromArray = (array) => {
	return array.filter((item) => item != ' ');
};
