function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function sum(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return 0;
    } else {
      count = count + arr[i];
    }
  }
  return count;
}

console.log(sum([1, 2, 3]));

const sum = (n) => n.reduce((a, b) => a + b, 0);
