import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf8').toString().trim().split('\n');

export const formattedInput = input.map((x) =>
	x
		.split('x')
		.map((x) => parseInt(x))
		.sort((a, b) => a - b)
);
