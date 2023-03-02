// my attempt
// need to follow the problem solving approach, to ask qn for edge cases, assumptions, invalid inputs etc
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  const freqCounter1 = {};
  const freqCounter2 = {};

  // need to check whether for of loop is valid for strings
  for (const letter of string1) {
    freqCounter1[letter] = (freqCounter1[letter] || 0) + 1;
  }
  for (const letter of string2) {
    freqCounter2[letter] = (freqCounter2[letter] || 0) + 1;
  }

  for (const key in freqCounter1) {
    if (!(key in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key]) return false;
  }

  return true;
}

console.log(validAnagram("helloworld", "helloworld"));
console.log(validAnagram("helloworld", "helloworldd"));
console.log(validAnagram("belloworld", "helloworld"));
