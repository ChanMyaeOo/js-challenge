function findLongestWord(str) {
  //   console.log(str.split(' ').sort((a, b) => b.length - a.length)[0]);
  let words = str.split(' ');
  let longest = '';
  for (var word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}

let result = findLongestWord('What is the most popular programming language?');
console.log(result);
