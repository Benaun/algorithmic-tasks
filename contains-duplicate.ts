/* 
Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false. 

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
*/

function hasDuplicateV1(nums: Number[]): boolean {
  const numsSet = new Set(nums);
  return nums.length === numsSet.size ? false : true;
}
// O(n) время, O(n) память

function hasDuplicateV2(nums: Number[]): boolean {
  const myMap = new Map();
  for (const num of nums) {
    if (myMap.has(num)) return true;
    myMap.set(num, true);
  }
  return false;
}
// O(n) время, O(n) память

function hasDuplicateV3(nums: Number[]): boolean {
  const sortedNums = nums.sort();
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) return true;
  }
  return false;
}
// O(n log n) время, O(1) память

console.log(hasDuplicateV1([1, 2, 3, 3]));
console.log(hasDuplicateV1([1, 2, 3, 4]));
console.log(hasDuplicateV1([1, 2, 5, 8, 7, 7, 3, 4]));
