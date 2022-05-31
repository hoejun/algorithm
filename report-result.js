function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);
  let duplicate = [...new Set(report)];
  const report_list = {};

  id_list.forEach((item) => {
    report_list[item] = [];
  });

  duplicate.forEach((item) => {
    let result = item.split(' ');

    report_list[result[1]].push(result[0]);
  });

  for (val in report_list) {
    const list = report_list[val];
    if (list.length >= k) {
      list.forEach((item) => (answer[id_list.indexOf(item)] += 1));
    }
  }
  return answer;
}
