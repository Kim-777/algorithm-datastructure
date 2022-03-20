// th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(index) {
  if (index === 1 || index === 2) return 1;
  let first = 1;
  let second = 1;

  function helper(toGo) {
    const tmp = first;
    first = second;
    second = tmp + second;

    if (toGo !== index) helper(toGo + 1);
  }

  helper(3);

  return second;
}

console.log(fib(10));

// 찾아본 정답 ... 아직 재귀에 대한 사고가 부족한듯 ㅠ
function fib2(n) {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
}
