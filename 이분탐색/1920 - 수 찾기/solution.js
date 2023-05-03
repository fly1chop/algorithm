function binarySearch(N, arrN, arrM) {
  const sortedArr = arrN.sort((a, b) => a - b);

  const result = arrM.map((target) => {
    let start = 0;
    let end = N - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (sortedArr[mid] === target) {
        return 1;
      } else if (sortedArr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return 0;
  });
  return result.join('\n');
}

const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().trim().split('\n');
const n = Number(inputs[0]);
const m = Number(inputs[2]);
const arrN = inputs[1].split(' ').map(Number);
const arrM = inputs[3].split(' ').map(Number);

console.log(binarySearch(n, arrN, arrM));
