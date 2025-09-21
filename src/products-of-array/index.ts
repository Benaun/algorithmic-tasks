function productExceptSelf(nums: number[]): number[] {
  if (!nums.length) return [];
  const result: number[] = Array(nums.length);

  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
// O(n) время, O(1) память

console.log(productExceptSelf([1, 2, 4, 6])); // [48,24,12,8]
console.log(productExceptSelf([1, 2])); // [2, 1]
console.log(productExceptSelf([-1, 0, 1, 2, 3])); // [0,-6,0,0,0]
console.log(productExceptSelf([])); // []
