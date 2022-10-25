import { Switch } from '../utils/switch.type';

class Circuit {
	private input01: Switch;
	private input02: Switch;

	constructor(input01: Switch, input02: Switch) {
		this.input01 = input01;
		this.input02 = input02;
	}

	public getInput01(): Switch {
		return this.input01;
	}

	public getInput02(): Switch {
		return this.input02;
	}

	and() {
		return this.input01 === '1' && this.input02 === '1' ? '1' : '0';
	}

	or() {
		return this.input01 === '1' || this.input02 === '1' ? '1' : '0';
	}

	not(input: "Input01" | "Input02") {
		return input === 'Input01' ? this.input01 === '1' ? '0' : '1' : this.input02 === '1' ? '0' : '1';
	}
}

const s1 = new Circuit("1", "0");
console.log(s1.not("Input02"));