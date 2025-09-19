function isAnagramV1(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}
// O(n log n) время, O(n) память

function isAnagramV2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const dict = {};

  for (const char of s) {
    dict[char] = (dict[char] || 0) + 1;
  }

  for (const char of t) {
    if (!dict[char]) return false;
    dict[char]--;
  }
  return true;
}
// O(n) время, O(1) память

function isAnagramV3(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const dictMap = new Map();

  for (const char of s) {
    if (dictMap.has(char)) dictMap[char]++;
    dictMap.set(char, (dictMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    const count = dictMap.get(char);
    if (!count) return false;
    dictMap.set(char, count - 1);
  }

  return true;
}
// O(n) время, O(1) память

console.log(isAnagramV3("racecar", "carrace")); //true
console.log(isAnagramV3("jar", "jam")); // false
