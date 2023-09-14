class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

// Create a ScientificCalculator class that extends Calculator
class ScientificCalculator extends Calculator {
  square(a) {
    return a * a;
  }
  cube(a) {
    return a * a * a;
  }
  power(a, b) {
    return Math.pow(a, b);
  }
}

const calculator = new ScientificCalculator();

const addResult = Calculator.prototype.add.call(calculator, 10, 5);
console.log("Using 'call' to add: " + addResult);

const subtractResult = Calculator.prototype.subtract.apply(calculator, [10, 5]);
console.log("Using 'apply' to subtract: " + subtractResult);

const multiplyByTwo = Calculator.prototype.multiply.bind(calculator, 2);
console.log("Using 'bind' to create multiplyByTwo method: " + multiplyByTwo(5));

const powerOfThree = ScientificCalculator.prototype.power.bind(calculator, 3);
console.log("Using 'bind' to create powerOfThree method: " + powerOfThree(2));
