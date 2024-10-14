// ============================================
// Explanation of substr() and substring() in JavaScript
// ============================================

// 1. substr() (Deprecated in some environments but still widely used):
// - Purpose: Extracts a portion of a string based on a start index and a length.
// - Does it modify the original string? No, substr() returns a new substring and does not modify the original string.
// - Syntax: string.substr(start, length)
//    - start: Index at which to start extraction. If negative, it starts from the end of the string.
//    - length (optional): The number of characters to extract. If omitted, extracts till the end of the string.

// Example:
let str = "JavaScript is awesome!";
let substrResult = str.substr(4, 6);  // Output: "Script"
// The original string remains unchanged.
console.log(str);  // Output: "JavaScript is awesome!"

// Key Points:
// - Uses start index and length to extract a substring.
// - If start is negative, it starts extraction from the end of the string.
// - The 'length' parameter defines how many characters to extract.
// - Deprecated in some environments, prefer `substring()` or `slice()` for modern code.

// ============================================

// 2. substring():
// - Purpose: Extracts a portion of a string between two indices.
// - Does it modify the original string? No, substring() returns a new string without modifying the original one.
// - Syntax: string.substring(start, end)
//    - start: Index at which to begin extraction (included).
//    - end (optional): Index before which to end extraction (not included). If omitted, extracts till the end of the string.

// Example:
let str2 = "JavaScript is awesome!";
let substringResult = str2.substring(4, 10);  // Output: "Script"
// The original string remains unchanged.
console.log(str2);  // Output: "JavaScript is awesome!"

// Key Points:
// - Uses start and end indices to extract a substring.
// - If 'start' is greater than 'end', substring() swaps them.
// - Negative indices are treated as 0 (unlike slice() which can handle negative indices).
// - 'end' is not included in the result (non-inclusive).

// ============================================
// Differences Between substr() and substring():
// - substr(): Uses a start index and length, and supports negative indices for 'start'.
// - substring(): Uses start and end indices, swaps if 'start' is greater than 'end', and treats negative indices as 0.

// ============================================
// Summary:
// - substr(): Extracts a substring based on start index and length. May be deprecated in certain environments.
// - substring(): Extracts a substring based on start and end indices. Swaps indices if start is greater than end.
// ============================================
