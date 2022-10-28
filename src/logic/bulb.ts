import { Switch } from '../utils/switch.type';

export class Bulb {
	private input: Switch;

	constructor(input: Switch) {
		this.input = input;
	}

	public getInput(): Switch {
		return this.input;
	}

	public setInput(input: Switch): void {
		this.input = input;
	}

	public checkStatus() {
		this.input === "0" ? "OFF" : "ON";
	}
}

