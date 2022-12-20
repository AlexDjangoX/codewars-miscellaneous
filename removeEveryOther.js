function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

function removeEveryOther(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}

function removeEveryOther(arr) {
  return arr.filter(function (i, index) {
    return index % 2 === 0;
  });
}
