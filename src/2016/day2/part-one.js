import { input } from './input.js';

const board = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const moveCoord = (inst, { x, y }) => {
	switch (inst) {
		case 'D':
			return { x: x, y: y >= 2 ? 2 : ++y };
		case 'U':
			return { x: x, y: y <= 0 ? 0 : --y };
		case 'L':
			return { x: x <= 0 ? 0 : --x, y: y };
		case 'R':
			return { x: x >= 2 ? 2 : ++x, y: y };
	}
};

const getBoardNumber = ({ x, y }) => {
	return board[y][x];
};

const getCode = () => {
	let code = '';
	let newLoc = { x: 1, y: 1 };
	let codeArr = [];
	for (const inst of input) {
		inst.split('').map((letter) => {
			newLoc = moveCoord(letter, newLoc);
		});
		code = getBoardNumber(newLoc);
		codeArr.push(code);
	}
	return codeArr;
};
console.time();
console.log(getCode().join(''));
console.timeEnd();
