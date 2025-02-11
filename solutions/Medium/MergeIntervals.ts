/*
 * Problem: Merge Intervals
 *
 * Given an array of intervals, merge overlapping intervals.
 *
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 */

function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], interval[1]);
    } else {
      merged.push(currentInterval);
      currentInterval = interval;
    }
  }

  merged.push(currentInterval);

  return merged;
}