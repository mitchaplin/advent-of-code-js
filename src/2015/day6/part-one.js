import { input } from './input.js';

const formatInput = () => {
	const newInput = input.map((inp) => inp.split(' '));
	return newInput;
};

const createLightsGrid = (x, y) => {
	let grid = Array(y)
		.fill()
		.map((r) => Array(x).fill(false));
	return grid;
};

//move these into utils
const range = (start, stop, step) =>
	Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const cartesian = (...a) => a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

const findNewPoints = (line) => {
	let inst;
	if (line[0].toLowerCase() === 'turn') {
		// on/off
		inst = line[1].toLowerCase();
	} else {
		// toggle
		inst = line[0].toLowerCase();
	}

	const [through, _, from, ...rest] = line.reverse();
	const x1 = +from.split(',')[0];
	const y1 = +through.split(',')[0];
	const x2 = +from.split(',')[1];
	const y2 = +through.split(',')[1];
	const rangeX = range(x1, y1, 1);
	const rangeY = range(x2, y2, 1);
	const newPoints = cartesian(rangeX, rangeY);
	return [inst, newPoints];
};

const updateLightStatus = (lights, p, idx) => {
	let [inst, points] = p;

	points.map(([x, y]) => {
		if (inst === 'toggle') {
			lights[y][x] = !lights[y][x];
		}

		if (inst === 'on') {
			lights[y][x] = true;
		}

		if (inst === 'off') {
			lights[y][x] = false;
		}
	});
	return lights;
};

const formattedInput = formatInput(input);
const toggle = () => {
	let lights = createLightsGrid(1000, 1000);
	formattedInput.forEach((input, idx) => {
		lights = updateLightStatus(lights, findNewPoints(input), idx);
	});
	return lights;
};

const getCountOfOnLights = (lights) => {
	return lights
		.map((row) => row.map((v) => (v ? 1 : 0)).reduce((a, b) => a + b, 0))
		.reduce((a, b) => a + b, 0);
};

console.time();
console.log(getCountOfOnLights(toggle()));
console.timeEnd();
