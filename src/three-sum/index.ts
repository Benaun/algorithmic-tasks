function threeSum(nums: number[]): number[][] {
  if (!Array.isArray(nums) || nums.length < 3) return [];

  const result: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      let sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);

        while (left < right && sortedNums[left] === sortedNums[left + 1])
          left++;

        while (left < right && sortedNums[right] === sortedNums[right - 1])
          right--;

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}

// O(n^2) время, O(log n) память

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [0,0,0]
