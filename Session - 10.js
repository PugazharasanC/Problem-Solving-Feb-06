// ? Day 10: Advanced Techniques & Recap
// * Session Focus: Recap of Two-Pointer Technique, Sliding Window, Fast & Slow Pointers, and Hashing.
// ? Session Practice Questions:
// ! Find two numbers in a sorted array that add up to a target sum (two-pointer).
function targetSum(arr, target) {
  console.log(arr);
  console.log(target);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return -1;
}
const arr = Array.from({ length: 15 }, () =>
  Math.floor(Math.random() * 100)
).sort((a, b) => a - b);

// console.log(
//   targetSum(
//     arr,
//     arr[Math.floor(Math.random() * arr.length)] +
//       arr[Math.floor(Math.random() * arr.length)]
//   )
// );

// ! Find the length of the longest substring without repeating characters (sliding window).

function longestSubstring(str) {
  const set = new Set();
  let start = 0;
  let maxLength = 0;
  for (let end = 0; end < str.length; end++) {
    // console.log(str[end]);
    while (set.has(str[end])) {
      set.delete(str[start]);
      start++;
    }
    set.add(str[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

function testLongestSubstring() {
  const testCases = [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "abcde", expected: 5 },
    { input: "aab", expected: 2 },
    { input: "dvdf", expected: 3 },
    { input: "abcdabcd", expected: 4 },
    { input: "tmmzuxt", expected: 5 },
    // Large test cases
    { input: "a".repeat(10 ** 5), expected: 1 }, // All characters are the same
    { input: "abcdefghijklmnopqrstuvwxyz".repeat(3846), expected: 26 }, // A very long string with no repeating characters
    { input: "abcg".repeat(25000), expected: 4 }, // Repeating pattern of 4 characters
    { input: "abcdefghij".repeat(10000), expected: 10 }, // Repeating pattern of 10 characters
    {
      input: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".repeat(
        1000
      ),
      expected: 26,
    },
  ];

  testCases.forEach((testCase, index) => {
    const result = longestSubstring(testCase.input);
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1} passed!`);
    } else {
      console.log(
        `Test case ${index + 1} failed: expected ${
          testCase.expected
        }, got ${result}`
      );
    }
  });
}
// testLongestSubstring();
// ! Find the first non-repeating character in a string (hashing).
function firstNoRepeating(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str) {
    if (charCount[char] == 1) {
      return char;
    }
  }
  return -1;
}
// console.log(
//     firstNoRepeating("this is the string which has all non repeating chars")
// )
// ! Find the maximum sum of a subarray of size k (sliding window).
function maxSumSubarray(arr, k) {
  let maxSum = -Infinity;
  let currentSum = 0;
  for (let ind = 0; ind < k; ind++) {
    currentSum += arr[ind];
  }
  maxSum = Math.max(maxSum, currentSum);

  for (let ind = k; ind < arr.length; ind++) {
    currentSum = currentSum - arr[ind - k] + arr[ind];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

function testMaxSumSubarray() {
  const testCases = [
    { input: { nums: [2, 1, 5, 1, 3, 2], k: 3 }, expected: 9 },
    { input: { nums: [1, 2, 3, 4, 5], k: 2 }, expected: 9 },
    { input: { nums: [2, 3, 1, 2, 4, 3], k: 4 }, expected: 10 },
    { input: { nums: [1, 2, 3, 4, 5], k: 3 }, expected: 12 },
    { input: { nums: [-1, -2, -3, -4, -5], k: 2 }, expected: -3 },
    { input: { nums: [10, 20, 30, 40, 50, 60], k: 4 }, expected: 180 },
    { input: { nums: [2, 1, 5, 1, 3, 2], k: 2 }, expected: 6 },
    { input: { nums: [5, -1, 3, 4, -2, 8], k: 3 }, expected: 10 },

    // Large test cases
    { input: { nums: Array(10 ** 5).fill(1), k: 1000 }, expected: 1000 }, // All values are 1
    {
      input: {
        nums: Array.from({ length: 10 ** 5 }, (_, i) => i + 1),
        k: 1000,
      },
      expected: 500500,
    }, // Sequential numbers 1, 2, ..., 100000
    { input: { nums: Array(10 ** 5).fill(-100), k: 1000 }, expected: -100000 }, // All values are -100
    { input: { nums: Array(10 ** 5).fill(100), k: 50000 }, expected: 5000000 }, // All values are 100
  ];

  testCases.forEach((testCase, index) => {
    const result = maxSumSubarray(testCase.input.nums, testCase.input.k);
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1} passed!`);
    } else {
      console.log(
        `Test case ${index + 1} failed: expected ${
          testCase.expected
        }, got ${result}`
      );
    }
  });
}
// testMaxSumSubarray()
// ! Check if a permutation of one string is a substring of another (hashing).

function isPermutationSubstring(s1, s2) {
  if (s1.length > s2.length) return false;

  const freq1 = Array(26).fill(0);
  const freq2 = Array(26).fill(0);

  for (let ind = 0; ind < s1.length; ind++) {
    freq1[s1.charCodeAt(ind) - 97]++;
    freq2[s2.charCodeAt(ind) - 97]++;
  }
  if (freq1.join("") == freq2.join("")) return true;

  for (let ind = s1.length; ind < s2.length; ind++) {
    freq2[s2.charCodeAt(ind - s1.length) - 97]--;
    freq2[s2.charCodeAt(ind) - 97]++;
    if (freq1.join("") == freq2.join("")) return true;
  }

  return false;
}

function testPermutationSubstring() {
  const testCases = [
    { input: { s1: "silent", s2: "listen" }, expected: true },
    { input: { s1: "angle", s2: "gleam" }, expected: false },
    { input: { s1: "evil", s2: "vile" }, expected: true },
    { input: { s1: "god", s2: "dogged" }, expected: true },
    { input: { s1: "listen", s2: "silentnight" }, expected: true },
    { input: { s1: "rat", s2: "carter" }, expected: true },
    { input: { s1: "part", s2: "trap" }, expected: true },

    // Edge case: very short strings
    { input: { s1: "a", s2: "a" }, expected: true },
    { input: { s1: "a", s2: "b" }, expected: false },

    // Large input test case
    {
      input: { s1: "abcdef", s2: "fghijklmnopqrstuvwxyzabcdef" },
      expected: true,
    }, // s1 is a substring at the end
    {
      input: { s1: "abcdefgi", s2: "zyxwvutsrqponmlkjihgfedcba" },
      expected: false,
    }, // No permutation in reverse order
  ];

  testCases.forEach((testCase, index) => {
    const result = isPermutationSubstring(testCase.input.s1, testCase.input.s2);
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1} passed!`);
    } else {
      console.log(
        `Test case ${index + 1} failed: expected ${
          testCase.expected
        }, got ${result}`
      );
    }
  });
}

// testPermutationSubstring()
// ! Find the longest subarray with a sum equal to k (sliding window).
function longestSubarrayWithSumK(arr, targetSum) {
  const map = new Map();

  let right = 0;
  let currentSum = 0;
  let maxLength = 0;
  while (right < arr.length) {
    // [-2, -1, 2, 1] , 1
    currentSum += arr[right];
    if (currentSum == targetSum) {
      maxLength = Math.max(maxLength, right + 1);
    }
    if (map.has(targetSum - currentSum)) {
      maxLength = Math.max(maxLength, right - map.get(targetSum - currentSum));
    } else {
      map.set(targetSum - currentSum, right);
    }
    if (!map.has(currentSum)) {
      map.set(currentSum, right);
    }

    right++;
  }
  return maxLength;
}

function testLongestSubarraySumK() {
  const testCases = [
    { input: { nums: [1, -1, 5, -2, 3], k: 3 }, expected: 4 },
    { input: { nums: [1, 2, 3, 4, 5], k: 7 }, expected: 2 },
    { input: { nums: [-1, -1, 1, 1, 1, 1], k: 2 }, expected: 6 },
    { input: { nums: [5, 5, 5, 5, 5], k: 10 }, expected: 2 },
    { input: { nums: [1, 2, 3], k: 6 }, expected: 3 },
    { input: { nums: [-2, -1, 2, 1], k: 1 }, expected: 2 },
    { input: { nums: [10, 5, 2, 7, 1], k: 10 }, expected: 2 },
    { input: { nums: [1, 2, 3, 4, 5], k: 9 }, expected: 2 },

    // Edge case: Single element subarray
    { input: { nums: [1], k: 1 }, expected: 1 },
    { input: { nums: [1], k: 2 }, expected: 0 },

    // Case with no valid subarray
    { input: { nums: [1, 2, 3], k: 10 }, expected: 0 },

    // Case with all elements being the same
    { input: { nums: [4, 4, 4, 4], k: 8 }, expected: 2 },

    // Case with negative numbers
    { input: { nums: [-5, 1, 2, 7, -3], k: 4 }, expected: 3 },

    // Large input test case
    { input: { nums: Array(100000).fill(1), k: 50000 }, expected: 50000 },
  ];

  testCases.forEach((testCase, index) => {
    const result = longestSubarrayWithSumK(
      testCase.input.nums,
      testCase.input.k
    );
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1} passed!`);
    } else {
      console.log(
        `Test case ${index + 1} failed: expected ${
          testCase.expected
        }, got ${result}`
      );
    }
  });
}

// testLongestSubarraySumK();
// todo Post-Session Practice Questions:
// todo Find the first missing positive integer in an array (hashing).
// todo Merge two sorted arrays without using extra space (two-pointer).
// todo Find all triplets in an array that sum up to zero (two-pointer).
// todo Find the maximum length of a subarray with equal 0s and 1s (sliding window).
// todo Count the number of subarrays with a sum equal to zero (sliding window).
// todo Check if an array contains duplicate elements within k distances (sliding window).
// todo Find the longest mountain in an array (two-pointer).
// todo Sort an array by the parity of elements (two-pointer).
// todo Find all pairs in an array with a difference equal to a target value (two-pointer).
// todo Find the longest subarray with at most two distinct characters (sliding window).
// todo Find the first non-repeating element in a stream of characters (hashing).
// todo Merge two sorted arrays without using extra space (two-pointer).
// todo Find the largest subarray with a sum less than or equal to a given value (sliding window).
