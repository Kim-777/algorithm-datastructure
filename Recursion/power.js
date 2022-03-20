// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of

// 첫번째 매개변수를 두번째 매개변수로 제곱하는 함수 입니다.
function power(num, num2) {
  if (num2 === 0) return 1;

  function helper(pow) {
    if (pow === 0) return 1;
    else if (pow >= 1) {
      console.log(pow);
      console.log(num);
      return num * helper(pow - 1);
    }
  }

  return helper(num2);
}

console.log(power(2, 5));
