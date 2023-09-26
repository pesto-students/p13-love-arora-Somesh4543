function reverse(number) {
  let reversed = 0;
  while (number !== 0) {
    const lastDigit = number % 10;
    reversed = reversed * 10 + lastDigit;
    number = Math.floor(number / 10);
  }
  return reversed;
}

const inputNumber = parseInt(prompt("Enter a number:"));
const reversedNumber = reverse(inputNumber);
console.log("Reversed number:", reversedNumber);
