/*
 * Problem: Group Anagrams
 *
 * Given an array of words, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 */
function groupAnagrams(words: string[]): string[][] {
  let anagramGroups: Map<string, string[]> = new Map();

  for (let word of words) {
      let sortedKey = word.split('').sort().join('');
      if (!anagramGroups.has(sortedKey)) {
          anagramGroups.set(sortedKey, []);
      }
      anagramGroups.get(sortedKey)!.push(word);
  }

  return Array.from(anagramGroups.values());
}


// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
