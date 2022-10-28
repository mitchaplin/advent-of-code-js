import { input } from './input.js';

const board = [
	[null, null, null, null, null, null, null],
	[null, null, null, 1, null, null, null],
	[null, null, 2, 3, 4, null, null],
	[null, 5, 6, 7, 8, 9, null],
	[null, null, 'A', 'B', 'C', null, null],
	[null, null, null, 'D', null, null, null],
	[null, null, null, null, null, null, null],
];

const checkXBounds = (inst, x, y) => {
	switch (inst) {
		case 'L':
			let leftX = board[y][x - 1];
			if (leftX === null) {
				return { x: x, y: y };
			} else {
				return { x: x - 1, y: y };
			}

		case 'R':
			let rightX = board[y][x + 1];
			if (rightX === null) {
				return { x: x, y: y };
			} else {
				return { x: x + 1, y: y };
			}
	}
};

const checkYBounds = (inst, x, y) => {
	switch (inst) {
		case 'U':
			let upY = board[y - 1][x];
			if (upY === null) {
				return { x: x, y: y };
			} else {
				return { x: x, y: y - 1 };
			}
		case 'D':
			let downY = board[y + 1][x];
			if (downY === null) {
				return { x: x, y: y };
			} else {
				return { x: x, y: y + 1 };
			}
	}
};

const moveCoord = (inst, { x, y }) => {
	let newCoord;
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
	return newCoord;
};

const getBoardNumber = ({ x, y }) => {
	return board[y][x];
};

const getCode = () => {
	let code = '';
	let newLoc = { x: 1, y: 3 };

	for (const inst of input) {
		inst.split('').map((letter, idx) => {
			newLoc = moveCoord(letter, newLoc);
		});
		code += getBoardNumber(newLoc);
	}
	return code;
};

console.time();
console.log(getCode());
console.timeEnd();
