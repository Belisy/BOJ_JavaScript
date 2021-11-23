// 시간초과
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);

for (i=1; i<=n; i++) {
  console.log(i);
}


// 나동빈강사님 답안
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// // let input = fs.readFileSync('input.txt').toString().split('\n');

// // 문자열을 수로 변환할 때 parseInt에 비하여 Number의 속도가 더 빠르게 동작
// let n = Number(input[0]);
// let answer = '';

// for (let i = 1; i <= n; i++) {
//   answer += i + '\n';
// }
// console.log(answer);