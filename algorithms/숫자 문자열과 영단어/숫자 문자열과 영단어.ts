/**
 * 0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
 */

function solution(s) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    const arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
  }

  return Number(answer);
}

function solution2(s) {
  const charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (const [key, value] of Object.entries(charSet)) {
    const re = new RegExp(`${key}`, 'g');
    s = s.replace(re, value);
  }
  return parseInt(s);
}

// let s = "one4seveneight";
// console.log(solution(s));

s = '1zerotwozero3';

console.log(solution(s));
