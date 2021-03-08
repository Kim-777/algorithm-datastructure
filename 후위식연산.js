/*
후위식 연산(postfix)
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제 1 
352+*9-

▣ 출력예제 1
12
*/

function solution(postfix){  

    let answer = 0;
    let stack = [];

    for(let x of postfix) {

        // x 값이 숫자이면 stack push 해줍니다.
        if(!isNaN(x)) {
            // 단항 연산자 +를 붙여줘서 문자를 숫자로 형 변환 시켜줍니다.
            stack.push(+x);
        } else {

            //x의 케이스에 따라 분기 해줍니다.

            let num1 = stack.pop();
            let num2 = stack.pop();
            // console.log(num1);
            // console.log(num2);
            switch(x) {
                case '+':
                    stack.push(+num2 + +num1)
                    break;
                case '-':
                    stack.push(+num2 - +num1)
                    break;          
                case '*':
                    stack.push(+num2 * +num1)
                    break;
                case '/':
                    stack.push(+num2 / +num1)
                    break;                        
            }
        }

    }

    return answer = stack.pop();


}

//test case
let str="352+*9-";
console.log(solution(str));

let test2 = "59-";
console.log(solution(test2));