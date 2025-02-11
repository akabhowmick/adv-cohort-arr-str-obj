/*
 * Problem: Longest Palindromic Substring
 *
 * Find the longest palindromic substring in a given string.
 *
 * Example:
 * Input: "babad"
 * Output: "bab" (or "aba")
 *
 */

function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;

  let longest: string = s[0];

  for (let i = 0; i < s.length - 1; i++) {
    let palindrome1 = expandAroundCenter(s, i, i);
    let palindrome2 = expandAroundCenter(s, i, i + 1);

    let longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }

  return longest;
}

function expandAroundCenter(s: string, left: number, right: number): string {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}