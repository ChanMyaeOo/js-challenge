// problem solve 1
/*
function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
*/

// problem solve 2
function titleCase(str) {
  return str
    .split(' ')
    .map(el => el[0].toUpperCase() + el.slice(1))
    .join(' ');
}
