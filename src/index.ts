import { Switch } from './utils/switch.type';
import { Bulb } from './logic/bulb';
import { Circuit } from './logic/circuit'; 
import { not, or, and } from './logic/logic';

// Assign Bulb Inputs. 
const bulbA = new Bulb("0");
const bulbB = new Bulb("1");

// Simulate 01: (A + B)' => not(or(A, B))
const result01 = not(new Bulb(or(bulbA, bulbB)));
console.log(`RESULT 01: ${result01}`);

// Simulate 02: (A + B) * (B + A) => and(or(A, B), or(B, A)) 
const result02 = and(new Bulb(or(bulbA, bulbB)), new Bulb(or(bulbB, bulbA)));
console.log(`RESULT 02: ${result02}`); 

// Simulate 03: Proof that (A + B)' === A' * B' as a De Morgan's Law said. 
const gateA = not(new Bulb(or(bulbA, bulbB)));
const gateB = and(new Bulb(not(bulbA)), new Bulb(not(bulbB)));
const result03 = gateA === gateB;
console.log(`PROOF SIMULATE 03: ${result03}`)