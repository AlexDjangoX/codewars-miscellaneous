// The method should return true if a triangle can be built with the sides
// of given length and false in any other case.

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function isTriangle(a, b, c) {
  let arr = [a, b, c].sort();
  return arr[2] < arr[0] + arr[1];
}
