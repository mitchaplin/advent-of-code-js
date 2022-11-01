import { input } from './input.js';

console.time();
console.log(input.reduce((p, c) => p + c, 0));
console.timeEnd();
