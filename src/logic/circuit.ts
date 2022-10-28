import { Switch } from '../utils/switch.type';
import { Bulb } from './bulb';

export class Circuit {
	private bulb01: Bulb;
	private bulb02: Bulb;

	constructor(bulb01: Bulb, bulb02: Bulb) {
		this.bulb01 = bulb01;
		this.bulb02 = bulb02;
	}

	public getBulb01Status(): Switch {
		return this.bulb01.getInput();
	}

	public getBulb02Status(): Switch {
		return this.bulb02.getInput();
	}

	and() {
		return this.getBulb01Status() === "0" ? "0" : "1";
	}

	or() {
		return this.getBulb01Status() === "1" ? "1" : "0";
	}

	not() {
		return this.getBulb01Status() === "1" ? "0" : "1";
	}

	nand() {
		return this.getBulb01Status() === "0" ? "1" : "0";
	}

	nor() {
		return this.getBulb01Status() === "1" ? "0" : "1";
	}

	xor() {
		return this.getBulb01Status() === this.getBulb02Status() ? "0" : "1";
	}

	xnor() {
		return this.getBulb01Status() === this.getBulb02Status() ? "1" : "0";
	}
}