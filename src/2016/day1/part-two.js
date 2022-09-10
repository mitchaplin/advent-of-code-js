import { input } from './input.js';

const updateCurrentDir = (currentDir, inst) => {
	switch (inst) {
		case 'L':
			return currentDir === 0 ? 270 : currentDir - 90;
		case 'R':
			return currentDir === 270 ? 0 : currentDir + 90;
	}
};

const updateCurrentLoc = (currentDir, currentLoc, inst) => {
	switch (currentDir) {
		case 0:
			return (currentLoc = {
				x: currentLoc.x,
				y: currentLoc.y - parseInt(inst.slice(1)),
			});
		case 180:
			return (currentLoc = {
				x: currentLoc.x,
				y: currentLoc.y + parseInt(inst.slice(1)),
			});
		case 90:
			return (currentLoc = {
				x: currentLoc.x + parseInt(inst.slice(1)),
				y: currentLoc.y,
			});
		case 270:
			return (currentLoc = {
				x: currentLoc.x - parseInt(inst.slice(1)),
				y: currentLoc.y,
			});
	}
};

// stop computing when current loc is duplicated
const getFinalLocation = () => {
	let currentDir = 0;
	let currentLoc = { x: 0, y: 0 };
	const visitedLocations = [];
	let seen = new Set();
	for (const inst of input) {
		currentDir = updateCurrentDir(currentDir, inst[0]);
		currentLoc = updateCurrentLoc(currentDir, currentLoc, inst);
		let hasDuplicates = visitedLocations.some(function (currentObject) {
			return seen.size === seen.add({ x: currentObject.x, y: currentObject.y }).size;
		});
		if (hasDuplicates) {
			return currentLoc;
		} else {
			visitedLocations.push(currentLoc);
		}
	}
	return currentLoc;
};

const { x, y } = getFinalLocation();

console.time();
console.log(Math.abs(x) + Math.abs(y));
console.timeEnd();
