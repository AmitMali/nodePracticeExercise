const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}
function mul(a, b) {
  return a * b;
}

const operation = argv.operation;
const a = Number(argv.num1);
const b = Number(argv.num2);
console.log(a, b);
if (!operation) {
  console.log("invalid operation");
} else if (operation == "add") {
  console.log(add(a, b));
} else if (operation == "sub") {
  console.log(sub(a, b));
} else if (operation == "mul") {
  console.log(mul(a, b));
} else if (operation == "div") {
  console.log(div(a, b));
}
