function solution(d, budget) {
  var answer = 0;
  let sum = 0;
  let count = 0;
  // const newD = d.slice();

  function tree() {
    const min = Math.min(...d);

    d = d.filter((e) => {
      return e !== min;
    });
    sum += min;
    
    if (sum <= budget) {
      count++;
      tree();
    }
  }

  tree();

  console.log(count);

  return count;
}

// const d = [1, 3, 2, 5, 4];
// const budget = 9;
const d = [2, 2, 3, 3];
const budget = 10;
solution(d, budget);
