function solution(str1, str2) {
  let answer = 'YES';
  const sH = new Map();

  if (str1.length !== str2.length) return (answer = 'NO');

  for (const x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  console.log(sH);

  for (const x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  console.log(sH);
  return answer;
}

const a = 'AbaAeCeAAAz';
const b = 'baeeACAAAAz';
console.log(solution(a, b));

function solution2(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  if (str1.length !== str2.length) return false;

  for (const word of str1) {
    if (obj1[word]) {
      obj1[word] += 1;
    } else {
      obj1[word] = 1;
    }
  }
  for (const word of str2) {
    if (obj2[word]) {
      obj2[word] += 1;
    } else {
      obj2[word] = 1;
    }
  }

  console.log(obj1);
  console.log(obj2);

  for (const key in obj1) {
    if (!obj2[key]) {
      return false;
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution2(a, b));
console.log(solution2('aaaabb', 'aaaabb'));
