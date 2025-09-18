function twoSumV1(nums: number[], target: number): number[] {
  // сработает если массив отсортирован, в противном случае вернет индексы не исходного массива, а отсортированного
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum > target) right--;
    if (sum < target) left++;
  }
  return [];
}

// O(n) время, O(1) память

function twoSumV2(nums: number[], target: number): number[] {
  const numsMap = new Map();

  for (let i = 0; i <= nums.length; i++) {
    let result = target - nums[i];

    if (numsMap.has(result)) {
      return [numsMap.get(result), i];
    }

    numsMap.set(nums[i], i);
  }

  return [];
}

// O(n) время, O(n) память

console.log(twoSumV2([3, 4, 5, 6], 7)); // [0,1]
console.log(twoSumV2([4, 5, 6], 10)); // [0,2]
console.log(twoSumV2([5, 5], 10)); // [0,1]
