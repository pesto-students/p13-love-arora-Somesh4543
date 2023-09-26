function isPalindrome(number) {
  const numStr = number.toString();

  const reversedStr = numStr.split("").reverse().join("");

  return numStr === reversedStr;
}

const userInput = 12321;
if (isPalindrome(userInput)) {
  console.log("Yes");
} else {
  console.log("No");
}
