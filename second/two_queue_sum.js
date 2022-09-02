const sum = (arr) => arr.reduce((accumulator, currentNumber) => accumulator + currentNumber);

function solution(queue1, queue2) {
  let queue1Sum = sum(queue1);
  let queue2Sum = sum(queue2);
  let pointer1 = 0;
  let pointer2 = queue1.length;
  const target = (queue1Sum + queue2Sum) / 2;
  const queue = [...queue1, ...queue2];
  const end = queue1.length * 3;

  for (let count = 0; count < end; count++) {
    if (queue1Sum === target) {
      return count;
    }

    if (queue1Sum > target) {
      queue1Sum -= queue[pointer1++];
    } else {
      queue1Sum += queue[pointer2++];
    }
  }
  return -1;
  // const sum = queue1Sum + queue2Sum;
  // const count = 0;

  // if (sum % 2 === 0) {
  //   if (queue1Sum === queue2Sum) {
  //   } else {
  //     //sum / 2
  //     //15가 될떄까지 더하기
  //     let temp = 0;
  //   }
  // } else {
  //   return -1;
  // }
  // return answer;
}

//14, 16
const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];

solution(queue1, queue2);

// const queue1 = [1, 2, 1, 2];
// const queue2 = [1, 10, 1, 2];
// const queue1 = [1, 1]
// const queue2 =[1, 5]
