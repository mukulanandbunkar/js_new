// Solutions to various DSA problems in JavaScript with explanations.

/**
 * Problem 38: Trapping Rain Water (Hard)
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 */
function trap(height) {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0,
    water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax
        ? (leftMax = height[left])
        : (water += leftMax - height[left]);
      left++;
    } else {
      height[right] >= rightMax
        ? (rightMax = height[right])
        : (water += rightMax - height[right]);
      right--;
    }
  }
  return water;
}

/**
 * Problem 20: Height Checker (Easy)
 * Students are asked to stand in non-decreasing order of heights. How many students are not in the right positions?
 */
function heightChecker(heights) {
  const sorted = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) count++;
  }

  return count;
}

/**
 * Problem 18: Median of Two Sorted Arrays (Hard)
 * Given two sorted arrays nums1 and nums2 of size m and n, return the median of the two sorted arrays.
 */
function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);

  return merged.length % 2 === 0
    ? (merged[mid - 1] + merged[mid]) / 2
    : merged[mid];
}

/**
 * Problem 12: High Five (Easy)
 * Given a list of scores for students, return the top 5 average score for each student.
 */
function highFive(items) {
  const scores = {};

  for (let [id, score] of items) {
    if (!scores[id]) scores[id] = [];
    scores[id].push(score);
  }

  const result = [];
  for (let id in scores) {
    const topFiveAvg =
      scores[id]
        .sort((a, b) => b - a)
        .slice(0, 5)
        .reduce((a, b) => a + b, 0) / 5;
    result.push([Number(id), Math.floor(topFiveAvg)]);
  }

  return result;
}

/**
 * Problem 11: Best Time to Buy and Sell Stock (Easy)
 * Find the maximum profit from one transaction of buying and selling stocks.
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

/**---
 * Problem 11: Delete and Earn (Medium)
 * Similar to house robber, pick numbers to maximize sum without picking adjacent values.
 */
var deleteAndEarn = function (nums) {
  if (nums.length === 0) return 0;

  const max = Math.max(...nums);
  const dp = Array(max + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    dp[nums[i]] += nums[i];
  }

  const dummy = Array(max + 1).fill(0);
  dummy[0] = dp[0];
  dummy[1] = Math.max(dp[0], dp[1]);

  for (let i = 2; i <= max; i++) {
    dummy[i] = Math.max(dummy[i - 1], dp[i] + dummy[i - 2]);
  }

  return dummy[max];
};

/**
 * Problem 9: Find Pivot Index (Easy)
 * Find the pivot index where the sum of the numbers on the left equals the sum on the right.
 */
function pivotIndex(nums) {
  const totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
}

/**
 * Problem 7: Two Sum (Easy)
 * Given an array of integers nums and a target, return indices of the two numbers that add up to the target.
 */
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

/**----
 * Problem 7: Count Number of Teams (Medium)
 * Count the number of teams that can be formed such that (i < j < k) and (rating[i] < rating[j] < rating[k] or vice versa).
 */
function numTeams(rating) {
  let count = 0;

  for (let i = 0; i < rating.length; i++) {
    let lessLeft = 0,
      moreLeft = 0,
      lessRight = 0,
      moreRight = 0;

    for (let j = 0; j < rating.length; j++) {
      if (j < i) {
        if (rating[j] < rating[i]) lessLeft++;
        else moreLeft++;
      } else if (j > i) {
        if (rating[j] < rating[i]) lessRight++;
        else moreRight++;
      }
    }

    count += lessLeft * moreRight + moreLeft * lessRight;
  }

  return count;
}

/**---
 * Problem 6: String Compression (Easy)
 * Compress a string such that "aaabbc" becomes "a3b2c1". Modify the input array in-place and return the new length.
 */
function compress(chars) {
  let index = 0,
    i = 0;

  while (i < chars.length) {
    let j = i;

    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }

    chars[index++] = chars[i];
    if (j - i > 1) {
      const count = (j - i).toString();
      for (let c of count) {
        chars[index++] = c;
      }
    }

    i = j;
  }

  return index;
}

/**-----
 * Problem 6: LRU Cache (Hard)
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}

/**
 * Problem 5: Longest Palindromic Substring (Medium)
 * Find the longest substring in a string that is a palindrome.
 */
function longestPalindrome(s) {
  if (!s || s.length < 1) return "";
  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

/**
 * 
 *Example 1:

Input: expression = "-1/2+1/2"
Output: "0/1"
Example 2:

Input: expression = "-1/2+1/2+1/3"
Output: "1/3"
Example 3:

Input: expression = "1/3-1/2"
Output: "-1/6"
 */

function fractionAddition(expression) {
  // Helper function to compute the greatest common divisor (GCD)
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  // Function to add/subtract two fractions
  const addFractions = (num1, denom1, num2, denom2) => {
    const commonDenominator = denom1 * denom2;
    const numerator = num1 * denom2 + num2 * denom1;
    const commonGCD = gcd(numerator, commonDenominator);
    return [numerator / commonGCD, commonDenominator / commonGCD];
  };

  // Parse the expression into an array of fractions
  let fractions = [];
  let i = 0;
  while (i < expression.length) {
    let sign = 1;
    if (expression[i] === "-") {
      sign = -1;
      i++;
    } else if (expression[i] === "+") {
      i++;
    }
    let num = "";
    while (i < expression.length && expression[i] !== "/") {
      num += expression[i++];
    }
    i++; // Skip the '/'
    let denom = "";
    while (
      i < expression.length &&
      expression[i] !== "+" &&
      expression[i] !== "-"
    ) {
      denom += expression[i++];
    }
    fractions.push([sign * parseInt(num), parseInt(denom)]);
  }

  // Initialize result as 0/1 (0 as numerator, 1 as denominator)
  let resultNum = 0;
  let resultDen = 1;

  // Process each fraction and add it to the result
  for (let frac of fractions) {
    const [num, denom] = frac;
    [resultNum, resultDen] = addFractions(resultNum, resultDen, num, denom);
  }

  // Return the final result in fraction form
  return `${resultNum}/${resultDen}`;
}

// Test cases
console.log(fractionAddition("-1/2+1/2")); // Output: "0/1"
console.log(fractionAddition("-1/2+1/2+1/3")); // Output: "1/3"
console.log(fractionAddition("1/3-1/2"));
