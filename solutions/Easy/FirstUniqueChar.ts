/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */

function firstUniqueCharacter(s: string): number {
  const charCount: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.has(char)) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1;
}
