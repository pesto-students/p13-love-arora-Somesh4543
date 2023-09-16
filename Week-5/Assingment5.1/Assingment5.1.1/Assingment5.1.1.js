function* symbolIterator(arr) {
  for (const str of arr) {
    yield Symbol(str);
  }
}

const input = ["hello", "world", "test"];
const iterator = symbolIterator(input);

for (const symbol of iterator) {
  console.log(symbol);
}
