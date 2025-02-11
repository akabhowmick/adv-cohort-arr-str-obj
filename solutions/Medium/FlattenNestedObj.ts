/*
 * Problem: Flatten Nested Object
 *
 * Convert a deeply nested object into a flat key-value map.
 *
 * Example:
 * Input: { a: { b: { c: 1 } }, d: 2 }
 * Output: { "a.b.c": 1, d: 2 }
 *
 * Hint: Use recursion + a helper function.
 */


function flattenObject(obj) {
  const result = {};

  function flatten(obj, prefix = '') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          flatten(obj[key], newKey);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
  }

  flatten(obj);
  return result;
}