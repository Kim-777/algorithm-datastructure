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
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
  }

  return Number(answer);
}

function solution2(s) {
  let charSet = {
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

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(`${key}`, "g");
    s = s.replace(re, value);
  }
  return parseInt(s);
}

// let s = "one4seveneight";
// console.log(solution(s));

s = "1zerotwozero3";

console.log(solution(s));
