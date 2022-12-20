// You are going to be given a word. Your job is to return the middle
// character of the word. If the word's length is odd, return the
// middle character. If the word's length is even, return the
// middle 2 characters.

function getMiddle(s) {
  const i = Math.floor(s.length / 2);
  let result = s[i];
  if (s.length % 2 === 0 && i > 0) {
    result = s[i - 1] + result; //from   w  w  w  . j  a  v  a  2s.com
  }
  return result;
}

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

function getMiddle(s) {
  let middle = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.slice(middle - 1, middle + 1)
    : s.slice(middle, middle + 1);
}

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
