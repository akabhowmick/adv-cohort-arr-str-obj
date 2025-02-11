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

// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
// Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

type NestedObject = { [key: string]: NestedObject | string | number | boolean | null };
function flattenObject(obj: NestedObject): Record<string, string | number | boolean | null> {
  const result: Record<string, string | number | boolean | null> = {};

  function flatten(obj: NestedObject, prefix = "") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (typeof obj[key] === "object" && obj[key] !== null) {
          flatten(obj[key] as NestedObject, newKey);
        } else {
          result[newKey] = obj[key] as string | number | boolean | null;
        }
      }
    }
  }

  flatten(obj);
  return result;
}
