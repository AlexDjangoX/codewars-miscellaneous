function disemvowel_1(str) {
  var strArr = str.split('');
  for (var x = 0; x < str.length; x++) {
    var char = str[x].toLowerCase();
    if (
      char == 'a' ||
      char == 'e' ||
      char == 'i' ||
      char == 'o' ||
      char == 'u'
    ) {
      strArr[x] = '';
    }
  }
  console.log(strArr.join(''));
  return strArr.join('');
}
disemvowel_1('aeioudisemvowel_1');

const vowels = 'aeiou';

disemvowel_2 = (str) => {
  return str
    .split('')
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join('');
};

console.log(disemvowel_2('disemvowel_2aeiou'));
