function checkStr(str) {
  let reg = /[\W]/g; // Regular Expression for Non-alphanumeric
  let smallStr = str.toLowerCase().replace(reg, '');
  let reversedStr = smallStr
    .split('')
    .reverse()
    .join('');

  if (reversedStr === smallStr) return true;
  return false;
}
console.log(checkStr('noon'));
