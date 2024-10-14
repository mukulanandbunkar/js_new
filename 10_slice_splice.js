// ============================================
// Explanation of slice() and splice() in JavaScript
// ============================================

// 1. slice():
// - Purpose: Extracts a portion of an array and returns it as a new array.
// - Does it modify the original array? No, slice() does not modify the original array.
// - Syntax: array.slice(start, end)
//    - start: Index to begin extraction (included).
//    - end (optional): Index before which to end extraction (not included).
// - Negative indices can be used to indicate positions from the end of the array.

// Example:
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3);  // Output: [2, 3]
// The original array remains unchanged.
console.log(arr);  // Output: [1, 2, 3, 4, 5]

// Key Points:
// - Returns a new array without modifying the original one.
// - Can handle negative indices to count from the end of the array.

// ============================================

// 2. splice():
// - Purpose: Adds, removes, or replaces elements within an array.
// - Does it modify the original array? Yes, splice() modifies the original array in place.
// - Syntax: array.splice(start, deleteCount, item1, item2, ...)
//    - start: Index to start the modification.
//    - deleteCount: Number of elements to remove. If 0, no elements are removed.
//    - item1, item2, ... (optional): Elements to add at the start index.

// Example - Removing elements:
let arr2 = [1, 2, 3, 4, 5];
let removed = arr2.splice(1, 2);  // Output: [2, 3]
// The original array is modified.
console.log(arr2);  // Output: [1, 4, 5]

// Example - Adding elements:
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 0, 'a', 'b');  // Adds 'a' and 'b' at index 2.
console.log(arr3);  // Output: [1, 2, 'a', 'b', 3, 4, 5]

// Example - Replacing elements:
let arr4 = [1, 2, 3, 4, 5];
arr4.splice(1, 2, 'a', 'b');  // Replaces 2 elements starting from index 1 with 'a' and 'b'.
console.log(arr4);  // Output: [1, 'a', 'b', 4, 5]

// Key Points:
// - Modifies the original array and returns an array of deleted elements.
// - Can be used to insert elements by setting deleteCount to 0.
// - Can replace existing elements in the array.

// ============================================
// Summary:
// - slice(): Non-destructive extraction of a portion of the array into a new array.
// - splice(): Destructive manipulation of an array, allowing elements to be added, removed, or replaced.
// ============================================
