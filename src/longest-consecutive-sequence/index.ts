function longestConsecutive(nums: number[]): number {
  const mySet = new Set(nums);
  let maxLength = 0;

  for (const num of nums) {
    if (!mySet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (mySet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}
// O(n) время, O(n) память

console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5])); // 4
console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1])); // 7
