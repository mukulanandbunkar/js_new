// Bubble Sort
// This function sorts an array by repeatedly swapping adjacent elements if they are in the wrong order.
// It continues doing this until no more swaps are needed.

const bubbleSort = (arr) => {
    let swapped;
    do {
      swapped = false; // Keep track of whether any elements were swapped in this pass.
      for (let i = 0; i < arr.length - 1; i++) {
        // Compare adjacent elements and swap if they're in the wrong order.
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true; // If a swap was made, set swapped to true.
        }
      }
    } while (swapped); // Keep repeating until no swaps are made in a full pass.
    return arr;
  };
  
  // Example Usage of Bubble Sort
  console.log(bubbleSort([5, 2, 9, 1, 5, 6]));
  // Output: [1, 2, 5, 5, 6, 9]
  
  // Time Complexity: O(n^2)
  
  
  // Insertion Sort
  // This function sorts an array by building a sorted portion one element at a time.
  // Each new element is inserted into its proper place in the sorted portion of the array.
  
  const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i]; // The current number to insert in the sorted portion.
      let j = i - 1; // Start checking from the previous element.
      // Shift elements in the sorted portion that are larger than the current number.
      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j]; // Shift the element to the right.
        j--;
      }
      arr[j + 1] = numberToInsert; // Insert the current number in the correct position.
    }
    return arr;
  };
  
  // Example Usage of Insertion Sort
  console.log(insertionSort([12, 11, 13, 5, 6]));
  // Output: [5, 6, 11, 12, 13]
  
  // Time Complexity: O(n^2)
  
  
  // Quick Sort
  // This function sorts an array using the "divide and conquer" strategy.
  // It selects a pivot element, partitions the array into two halves, and recursively sorts each half.
  
  const quickSort = (arr) => {
    if (arr.length < 2) {
      return arr; // Base case: arrays with 0 or 1 element are already sorted.
    }
    let pivot = arr[arr.length - 1]; // Choose the last element as the pivot.
    let left = [];
    let right = [];
    // Partition the array into two halves: elements less than the pivot go to the left,
    // elements greater than the pivot go to the right.
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > pivot) {
        right.push(arr[i]);
      } else {
        left.push(arr[i]);
      }
    }
    // Recursively sort the left and right halves, and concatenate the results.
    return [...quickSort(left), pivot, ...quickSort(right)];
  };
  
  // Example Usage of Quick Sort
  console.log(quickSort([10, 80, 30, 90, 40, 50, 70]));
  // Output: [10, 30, 40, 50, 70, 80, 90]
  
  // Time Complexity: Best case: O(n log n), Worst case: O(n^2)
  
  
  // Merge Sort
  // This function sorts an array using the "divide and conquer" strategy by splitting the array into two halves,
  // recursively sorting each half, and then merging the sorted halves back together.
  
  const mergeSort = (arr) => {
    if (arr.length < 2) {
      return arr; // Base case: arrays with 0 or 1 element are already sorted.
    }
    
    const mid = Math.floor(arr.length / 2); // Find the middle index to split the array.
    const left = arr.slice(0, mid); // Left half of the array.
    const right = arr.slice(mid); // Right half of the array.
    
    // Recursively sort the left and right halves, and merge the sorted halves.
    return merge(mergeSort(left), mergeSort(right));
  };
  
  // Helper function to merge two sorted arrays into one sorted array.
  const merge = (leftArr, rightArr) => {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      // Compare the first elements of the left and right arrays,
      // and push the smaller one into the sorted array.
      if (leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    // After one of the arrays is empty, concatenate the remaining elements from both arrays.
    return [...sortedArr, ...leftArr, ...rightArr];
  };
  
  // Example Usage of Merge Sort
  console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
  // Output: [3, 9, 10, 27, 38, 43, 82]
  
  // Time Complexity: O(n log n)
  