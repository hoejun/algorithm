function solution(s) {
  let answer = s;
  const arr = [
    'zero 0',
    'one 1',
    'two 2',
    'three 3',
    'four 4',
    'five 5',
    'six 6',
    'seven 7',
    'eight 8',
    'nine 9',
  ];

  arr.forEach((item) => {
    answer = answer.replace(item.split(' ')[0], item.split(' ')[1]);
  });
  
  answer = parseInt(answer);
  
  return answer;
}
