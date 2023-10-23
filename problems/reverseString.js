function reverseString(str) {
  // method - 1
  //   let reverseStr = str.split("").reverse().join("");
  //   return reverseStr;
  // method - 2
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
}

console.log(reverseString("hello"));
