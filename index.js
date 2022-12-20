const duplicateEncode = (word) => {
  let newString = '';
  const lowerWord = word.toLowerCase();

  [...lowerWord].forEach((e, i) => {
    if (lowerWord.indexOf(e) !== i) {
      newString += ')';
    } else if (lowerWord.lastIndexOf(e) !== i) {
      newString += ')';
    } else newString += '(';
  });
  console.log(newString);
  return newString;
};

duplicateEncode('Hele');

const duplicateEncode_2 = (word) => {
  const lower = word.toLowerCase();
  const charFreq = [...lower].reduce(
    (map, c) => map.set(c, (map.get(c) ?? 0) + 1),
    new Map()
  );
  return lower.replace(/./gu, (c) => (charFreq.get(c) === 1 ? '(' : ')'));
};
