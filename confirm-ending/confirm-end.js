function confirmEnd(str, target) {
  return str.substr(-target.length) === target;
}

const result = confirmEnd('loniest day in my life', 'lifes');
console.log(result);
