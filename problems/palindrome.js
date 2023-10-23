function palindrome(str) {
  const formatStr = str.toLowerCase().replace(/[^a-z0-9]/g, " ");
  const reverseStr = formatStr.split("").reverse().join("");
  return formatStr === reverseStr;
}

console.log(palindrome("ollo"));
console.log(palindrome("ollsados"));
