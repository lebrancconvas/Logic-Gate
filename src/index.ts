import { Switch } from './utils/switch.type';
import { Bulb } from './logic/bulb';
import { Circuit } from './logic/circuit'; 

const bulbA = new Bulb("0");
const bulbB = new Bulb("1");
const lebrancCircuit = new Circuit(bulbA, bulbB);

console.log(lebrancCircuit.and());
console.log(lebrancCircuit.or());