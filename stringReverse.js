/*
let str = "h e l l o";
console.log(str);
console.log(
  str
    .split(" ")
    .reverse()
    .join(" ")
);
*/

function reverseString(str) {
  /*
    let strArr = str.split("");
    let strReverseArr = strArr.reverse();
    let strJoin = strReverseArr.join("");
    return strJoin;
    */
  /*
  return str
    .split("")
    .reverse()
    .join("");
    */

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("Hello"));
