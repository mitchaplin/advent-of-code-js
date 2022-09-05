import MD5 from 'crypto-js/md5.js';
import { input } from './input.js';

const getHash = () => {
	let counter = 0;
	let currentHash = `${input}${counter}`;
	while (!currentHash.startsWith('00000')) {
		++counter;
		currentHash = MD5(`${input}${counter}`).toString();
	}
	return counter;
};
console.time();
console.log(getHash());
console.timeEnd();
