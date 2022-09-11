import { input } from './input.js';

const board = [[1], [2, 3, 4], [5, 6, 7, 8, 9], ['A', 'B', 'C'], ['D']];

//     1
//   2 3 4
// 5 6 7 8 9
//   A B C
//     D

const checkXBounds = (inst, x, y) => {
	switch (inst) {
		case 'L':
			if (y === 0) {
				return { x: x, y: y };
			} else if (y === 1) {
				return { x: x === 1 ? x : --x, y: y };
			} else if (y === 2) {
				return { x: x === 0 ? x : --x, y: y };
			} else if (y === 3) {
				return { x: x === 1 ? x : --x, y: y };
			} else if (y === 4) {
				return { x: x, y: y };
			}

		case 'R':
			if (y === 0) {
				return { x: x, y: y };
			} else if (y === 1) {
				return { x: x === 3 ? x : ++x, y: y };
			} else if (y === 2) {
				return { x: x === 4 ? x : ++x, y: y };
			} else if (y === 3) {
				return { x: x === 3 ? x : ++x, y: y };
			} else if (y === 4) {
				return { x: x, y: y };
			}
	}
};
//     1
//   2 3 4
// 5 6 7 8 9
//   A B C
//     D
const checkYBounds = (inst, x, y) => {
	console.log(inst, x, y);
	switch (inst) {
		case 'U':
			if (x === 0) {
				return { x: x, y: y };
			} else if (x === 1) {
				return { x: x, y: y === 1 ? y : --y };
			} else if (x === 2) {
				return { x: x, y: y === 0 ? y : --y };
			} else if (x === 3) {
				return { x: x, y: y === 1 ? y : --y };
			} else if (x === 4) {
				return { x: x, y: y };
			}
		case 'D':
			if (x === 0) {
				return { x: x, y: y };
			} else if (x === 1) {
				return { x: x, y: y === 3 ? y : ++y };
			} else if (x === 2) {
				return { x: x, y: y === 4 ? y : ++y };
			} else if (x === 3) {
				return { x: x, y: y === 3 ? y : ++y };
			} else if (x === 4) {
				return { x: x, y: y };
			}
	}
};

const moveCoord = (inst, { x, y }) => {
	switch (inst) {
		case 'D':
			return checkYBounds('D', x, y);
		case 'U':
			return checkYBounds('U', x, y);
		case 'L':
			return checkXBounds('L', x, y);
		case 'R':
			return checkXBounds('R', x, y);
	}
};

const getBoardNumber = ({ x, y }) => {
	console.log(y, x);
	return board[y][x];
};

const getCode = () => {
	let code = '';
	let newLoc = { x: 0, y: 3 };
	let codeArr = [];
	for (const inst of input) {
		inst.split('').map((letter) => {
			newLoc = moveCoord(letter, newLoc);
		});
		console.log(newLoc);
		code = getBoardNumber(newLoc);
		codeArr.push(code);
	}
	return codeArr;
};

console.time();
console.log(getCode());
console.timeEnd();
