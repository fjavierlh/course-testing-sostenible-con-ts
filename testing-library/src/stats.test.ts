import { average, sum } from "./stats";
let result: number, expected: number;
result = sum([1, 2, 3]);
expected = 6;

if (result === expected) {
  console.log("✅ Pass! ");
} else {
  throw Error(`❌ Expected ${expected} but received ${result}`);
}

result = average([1, 2, 3]);
expected = 2;

if (result === expected) {
  console.log("✅ Pass! ");
} else {
  throw Error(`❌ Expected ${expected} but received ${result}`);
}

