function topKFrequent(nums: number[], k: number): number[] {
  if (k === 0 || !nums.length) return [];
  const myMap = new Map();
  const result: number[] = [];

  for (const num of nums) {
    myMap.set(num, (myMap.get(num) || 0) + 1);
  }

  const buckets: number[][] = Array(nums.length + 1);

  for (let i = 0; i <= nums.length; i++) {
    buckets[i] = [];
  }

  for (const [num, freq] of myMap.entries()) {
    buckets[freq].push(num);
  }

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets.length > 0) result.push(...buckets[i]);
  }
  return result.slice(0, k);
}
// O(n) время, O(n) память

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)); // [3,2]
console.log(topKFrequent([7, 7], 1)); // [7]
console.log(topKFrequent([], 1)); // []
console.log(topKFrequent([7, 7], 0)); // []
