/** 
 * 문제 설명
고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보 n개가 있습니다. 약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 유효기간이 지났다면 반드시 파기해야 합니다.

예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.
당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.

모든 달은 28일까지 있다고 가정합니다.

다음은 오늘 날짜가 2022.05.19일 때의 예시입니다.
*/

function solution(today, terms, privacies) {
  const answer = [];
  const termsObj = {};
  const [year, month, days] = today.split('.');

  const y = Number(year);
  const m = Number(month);
  const d = Number(days);

  terms.forEach((term) => {
    const [a, b] = term.split(' ');
    termsObj[a] = Number(b);
  });

  privacies.forEach((privacy, index) => {
    const [day, term] = privacy.split(' ');

    const [year, month, days] = day.split('.');

    const newMonth = Number(month);
    const newYear = Number(year);
    const newDays = Number(days);
    // if (newDays === 1) {
    //   --newMonth;
    //   if (!newMonth) {
    //     --newYear;
    //     newMonth = 12;
    //   }
    //   newDays = 28;
    // } else {
    //   --newDays;
    // }

    // if (parseInt((newMonth - 1) / 12)) {
    //   newYear++;
    //   newMonth = newMonth % 12;
    // }

    // console.log(newYear, newMonth, newDays);

    let term_assemble = 0;
    term_assemble += (y - newYear) * 12 * 28;
    term_assemble += (m - newMonth) * 28;
    term_assemble += d - newDays;

    if (termsObj[term] * 28 <= term_assemble) {
      answer.push(index + 1);
    }

    // if (newYear > y) return;
    // if (newYear === y) {
    //   if (newMonth > m) return;
    //   if (newMonth === m) {
    //     if (newDays >= d) return;
    //     if (d > newDays) {
    //       answer.push(index + 1);
    //       return;
    //     }
    //   }
    //   answer.push(index + 1);
    // }
    // answer.push(index + 1);
  });

  return answer;
}

const today = '2022.05.19';
const terms = ['A 6', 'B 12', 'C 3'];
const privates = ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'];

const today2 = '2020.01.01';
const terms2 = ['Z 3', 'D 5'];
const privates2 = ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'];

console.log(solution(today, terms, privates));
console.log(solution(today2, terms2, privates2));
