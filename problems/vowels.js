function countVowels(str) {
  let formmatedStr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formmatedStr.length; i++) {
    const char = formmatedStr[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("dhanesh"));
