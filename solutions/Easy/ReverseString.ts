/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */

function reverseWords(s: string): string {
  const words = s.split(' ');
  // could also use a for loop swapping the elements from either end 
  const reversedWords = words.reverse();

  return reversedWords.join(' ');
}