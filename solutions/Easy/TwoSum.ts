/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */

function twoSum(nums: number[], target: number): number[] {
  let numMap: { [key: number]: number } = {}; 
  
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];

      if (complement in numMap) {
          return [numMap[complement], i]; 
      }

      numMap[nums[i]] = i; 
  }

  throw new Error("No solution found"); 
}


module.exports = twoSum;