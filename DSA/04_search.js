// Linear Search Function
// This function searches for a target in an array by checking each element one by one.
// If it finds the target, it returns its index. Otherwise, it returns -1.

const performLinearSearch = (arr, target) => {
  let index = -1; // Initialize index to -1 to indicate the target is not found.
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      index = i; // If target is found, return the index.
      return index;
    }
  }
  return index; // If target is not found, return -1.
};

// Example Usage of Linear Search
console.log(performLinearSearch([1, 2, 3, 4, 5, 6], 3)); 
// Output: 2 (because the number 3 is at index 2)

// Binary Search Function
// This function performs a binary search, which works on sorted arrays.
// It checks the middle element and divides the search space in half accordingly.

const performBinarySearch = (arr, target) => {
  let leftPtr = 0; // Initialize left pointer to the start of the array.
  let rightPtr = arr.length - 1; // Initialize right pointer to the end of the array.
  
  // Keep searching while the left pointer is less than or equal to the right pointer.
  while (leftPtr <= rightPtr) {
    // Calculate the middle index.
    let middleIndex = Math.floor(leftPtr + rightPtr / 2);
    
    // If the target is found at the middle, return the index.
    if (arr[middleIndex] === target) {
      return middleIndex;
    }

    // If the target is greater than the middle element, search in the right half.
    if (target > arr[middleIndex]) {
      leftPtr = middleIndex + 1;
    } else {
      // If the target is smaller, search in the left half.
      rightPtr = middleIndex - 1;
    }
  }
  // If the target is not found, return -1.
  return -1;
};

// Example Usage of Binary Search
console.log(performBinarySearch([1, 2, 3, 4, 5, 6], 3));
// Output: 2 (because the number 3 is at index 2)

// Recursive Binary Search Function
// This version of binary search uses recursion to divide the search space.

const search = (array, target, leftPtr, rightPtr) => {
  // Calculate the middle index.
  let middleIndex = Math.floor(leftPtr + rightPtr / 2);

  // Base case: if left pointer exceeds right, the target is not found.
  if (leftPtr > rightPtr) {
    return -1;
  }

  // If target is found at the middle index, return the index.
  if (array[middleIndex] === target) {
    return middleIndex;
  }

  // Recursively search in the right half if the target is greater than the middle.
  if (target > array[middleIndex]) {
    return search(array, target, middleIndex + 1, rightPtr);
  } else {
    // Recursively search in the left half if the target is smaller than the middle.
    return search(array, target, leftPtr, middleIndex - 1);
  }
};

// Wrapper function for recursive binary search.
const recursiveBinarySearch = (arr, target) => {
  return search(arr, target, 0, arr.length - 1);
};

// Example Usage of Recursive Binary Search
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6], 3));
// Output: 2 (because the number 3 is at index 2)
