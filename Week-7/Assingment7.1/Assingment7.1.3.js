function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}

const userInput = parseInt(prompt("Enter a year:"));

if (isLeapYear(userInput)) {
  console.log("Yes");
} else {
  console.log("No");
}
