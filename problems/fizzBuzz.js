function findFizzBuzz(num) {
  let fizzBuzzArr = [];
  for (let i = 1; i <= num; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      fizzBuzzArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzzArr.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzArr.push("Buzz");
    } else {
      fizzBuzzArr.push(i);
    }
  }
  return fizzBuzzArr;
}

console.log(findFizzBuzz(15));
