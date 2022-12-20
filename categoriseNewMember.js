// Output will consist of a list of string values (Open or Senior) stating whether the
// respective member is to be placed in the senior or open category.

input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
output = ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior'];

function openOrSenior(data) {
  return data.map((el) => {
    return el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open';
  });
}

function openOrSenior_2(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? 'Senior' : 'Open'
  );
}
