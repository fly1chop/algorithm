let input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');
let N = input[1].split(' ').map(Number);
let M = input[3].split(' ').map(Number);
let map = new Map();
N.forEach((el) => {
  if (map.has(el)) map.set(el, map.get(el) + 1);
  else map.set(el, 1);
});
let answer = [];
M.forEach((el) => answer.push(map.get(el) || 0));
console.log(answer.join(' '));
