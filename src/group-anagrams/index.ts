function groupAnagrams(strs: string[]): string[][] {
  if (!strs.length) return [];
  if (strs.length === 1) return [[strs[0]]];

  const strsMap = new Map();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!strsMap.has(sortedStr)) strsMap.set(sortedStr, []);

    strsMap.get(sortedStr).push(str);
  }
  return Array.from(strsMap.values());
}
// O(n * k log k) время, O(n * k) память

console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
// [["hat"],["act", "cat"],["stop", "pots", "tops"]]

console.log(groupAnagrams(["x"])); // [["x"]]
console.log(groupAnagrams([])); // []
