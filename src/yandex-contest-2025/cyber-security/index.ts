function countWeeks(s: string): number {
  const clearStr = s.trim();
  const strLength = clearStr.length;

  const myMap = new Map();
  for (let char of clearStr) {
    myMap.set(char, (myMap.get(char) || 0) + 1);
  }

  if (myMap.size === 1) return 1;

  const totalPairs = (strLength * (strLength - 1)) / 2;

  let duplicateExchanges = 0;
  for (let count of myMap.values()) {
    if (count >= 2) {
      duplicateExchanges += (count * (count - 1)) / 2;
    }
  }

  return 1 + totalPairs - duplicateExchanges;
}

console.log(countWeeks("abacaba")); // 15
console.log(countWeeks("aaaaaa")); // 1
