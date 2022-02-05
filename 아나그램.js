function solution(str1, str2) {
  let answer = "YES";
  let sH = new Map();

  if (str1.length !== str2.length) return (answer = "NO");

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  console.log(sH);

  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }
  console.log(sH);
  return answer;
}

let a = "AbaAeCeAAAz";
let b = "baeeACAAAAz";
console.log(solution(a, b));

function solution2(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  for (let word of str1) {
    if (obj1[word]) {
      obj1[word] += 1;
    } else {
      obj1[word] = 1;
    }
  }
  for (let word of str2) {
    if (obj2[word]) {
      obj2[word] += 1;
    } else {
      obj2[word] = 1;
    }
  }

  console.log(obj1);
  console.log(obj2);

  for (let key in obj1) {
    if (!obj2[key] || obj2[key] === 0) {
      return false;
    } else {
      obj2[key] -= 1;
    }
  }
  return true;
}

console.log(solution2(a, b));
