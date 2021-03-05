function solution(str1, str2){
    let answer="YES"; 
    let sH = new Map();

    if(str1.length !== str2.length) return answer="NO";

    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    console.log(sH);

    for(let x of str2){
        if(!sH.has(x) || sH.get(x)==0) return "NO";
        sH.set(x, sH.get(x)-1);
    }
    console.log(sH);
    return answer;
}

let a="AbaAeCeAAA";
let b="baeeACAAAA";
console.log(solution(a, b));


