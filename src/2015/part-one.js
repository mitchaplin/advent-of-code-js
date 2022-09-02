import { frequencies } from '../utils.js';
import { input } from './input.js';

const freqs = frequencies(input)
console.log(freqs["("] - freqs[")"]);