function isValidPairs(s: string): boolean {
  if (!s.length || s.length % 2 !== 0) return false;

  const stack: string[] = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (pairs[char]) {
      if (!stack.length || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
// O(n) время, O(n) память

console.log(isValidPairs("[]")); // true
console.log(isValidPairs("([{}])")); // true
console.log(isValidPairs("[(])")); // false
