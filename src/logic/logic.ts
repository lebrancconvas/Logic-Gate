import { Switch } from '../utils/switch.type';
import { Bulb } from './bulb';

function and(inputA: Bulb, inputB: Bulb): Switch {
	return inputA.getInput() === "0" ? "0" : "1";
}

function or(inputA: Bulb, inputB: Bulb): Switch {
	return inputA.getInput() === "1" ? "1" : "0";
}

function not(inputA: Bulb): Switch {
	return inputA.getInput() === "1" ? "0" : "1";
}

function nand(inputA: Bulb, inputB: Bulb): Switch {
	return inputA.getInput() === "0" ? "1" : "0";
}

function nor(inputA: Bulb, inputB: Bulb): Switch {
	return inputA.getInput() === "1" ? "0" : "1";
}

function xor(inputA: Bulb, inputB: Bulb): Switch {
	return inputA.getInput() === inputB.getInput() ? "0" : "1";
}

function xnor(inputA: Bulb, inputB: Bulb): Switch {
	return inputA.getInput() === inputB.getInput() ? "1" : "0";
}

export {and, or, not, nand, nor, xor, xnor};