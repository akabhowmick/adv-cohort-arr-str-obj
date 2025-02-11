/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */

function mostCommonCharacter(s: string): string {
  const charCount: { [key: string]: number } = {};

  for (let char of s) {
    charCount[char] = (charCount[char] ?? 0) + 1;
  }

  let maxCount = 0;
  let mostCommonChar = "";

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostCommonChar = char;
    }
  }

  return mostCommonChar;
}
