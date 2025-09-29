function isPalindromeV1(s: string): boolean {
  if (!s.length) return false;
  if (s.length === 1) return true;

  const modifyStr = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = modifyStr.length - 1;

  while (left < right) {
    if (modifyStr[left] !== modifyStr[right]) return false;
    left++;
    right--;
  }

  return true;
}
// O(n) время, O(n) память

function isPalindromeV2(s: string): boolean {
  if (!s.length) return false;
  if (s.length === 1) return true;

  const modifyStr = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

  return modifyStr === modifyStr.split("").reverse().join("");
}
// O(n) время, O(n) память

console.log(isPalindromeV2("Was it a car or a cat I saw?")); // true
console.log(isPalindromeV2("tab a cat")); // false
console.log(isPalindromeV2("a ")); // true
console.log(isPalindromeV2("")); // false
