/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다.
"z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.

*/

// 문자열을 얼마나 다룰줄 아는지 물어보는거 같은데 성공!!
function solution(string, num) {

    answer = '';

    for(let x of string) {

        if(x === ' ') answer += x;

        let code = x.charCodeAt();
        if(code >= 97 && code <= 122) {
            let sum = code + num;
            if(sum > 122) {
                answer +=String.fromCodePoint(96+(sum%122))
            } else {
                answer +=String.fromCodePoint(sum);
            }
        } else if(code >= 65 && code <= 90) {
            let sum = code + num;
            if(sum > 90) {
                answer +=String.fromCodePoint(64+(sum%90))
            } else {
                answer +=String.fromCodePoint(sum);
            }
        }

    }


    return answer;
}

console.log(solution("a B z", 4));

// console.log('a'.charCodeAt());
// console.log('z'.charCodeAt());
// console.log('A'.charCodeAt());
// console.log('Z'.charCodeAt());

// console.log(String.fromCodePoint(90))