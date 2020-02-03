// Method 1
/*
function largestOfFour(arr) {
  let maxes = [];
  for (let i = 0; i < arr.length; i++) {
    let tempMax = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      let currentValue = arr[i][j];
      if (currentValue >= tempMax) {
        tempMax = currentValue;
      }
    }
    maxes.push(tempMax);
  }
  return maxes;
}

let result = largestOfFour([
  [2, 15, 6, 10],
  [80, 100, 10],
  [11, 13, 9, 102, 200, 10],
  [100, 300, 200, 500]
]);
console.log(result);
*/

// Method 2
function findMax(arr) {
  let maxNumber = 0;
  arr.forEach(cur => {
    if (cur > maxNumber) maxNumber = cur;
  });
  return maxNumber;
}

function largestOfFour(arr) {
  let maxes = [];
  arr.forEach(cur => {
    let result = findMax(cur);
    maxes.push(result);
  });
  return maxes;
}

let result = largestOfFour([
  [2, 15, 6, 10],
  [80, 100, 10],
  [11, 13, 9, 102, 200, 10],
  [100, 300, 200, 500]
]);
console.log(result);
// [15, 100, 200, 500]
