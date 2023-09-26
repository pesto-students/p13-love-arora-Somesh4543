function calculateHCF(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function calculateLCM(a, b) {
  const hcf = calculateHCF(a, b);
  const lcm = (a * b) / hcf;
  return lcm;
}

const input1 = parseInt(prompt("Enter the first number:"));
const input2 = parseInt(prompt("Enter the second number:"));

const hcfResult = calculateHCF(input1, input2);
const lcmResult = calculateLCM(input1, input2);

const product = hcfResult * lcmResult;
console.log("Product of HCF and LCM:", product);
