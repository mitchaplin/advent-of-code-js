// frequencies e.g. {"a": 2, "b": 3}
export const frequencies = (collection) =>
	collection.reduce((acc, curr) => {
		return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
	}, {});

// number sort
export const sortNumbers = (numArr) => numArr.sort((a, b) => a - b);
