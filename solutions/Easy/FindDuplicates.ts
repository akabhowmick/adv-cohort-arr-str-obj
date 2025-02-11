/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */

function findDuplicates(nums: number[]): number[] {
  const duplicates: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i])] >= 0) {
      nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])];
    } else {
      duplicates.push(Math.abs(nums[i]));
    }
  }
  return duplicates;
}
