import fs from 'fs';

export const input = fs
	.readFileSync('./input.txt', 'utf8')
	.toString()
	.trim()
	.split('\n')
	.map((num) => +num);
