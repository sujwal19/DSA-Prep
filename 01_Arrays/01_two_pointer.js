/*
Pattern: Two Pointers
Problems:
[Easy]  - LeetCode 1: Two Sum
[Medium]- LeetCode 15: 3Sum
[Hard]  - LeetCode 167: Two Sum II
*/

// let aee = [2, 5, 1, 7, 10];
// let k = 14;
// var longestSubarray = function (aee) {
//   let maxLen = 0;
//   for (let i = 0; i < aee.length; i++) {
//     let sum = 0;
//     for (let j = i; j < aee.length; j++) {
//       sum += aee[j];
//       if (sum <= k) {
//         maxLen = Math.max(maxLen, j - i + 1);
//       } else if (sum > k) break;
//     }
//   }
//   return maxLen;
// };
// // console.log(longestSubarray(aee));

// Better
var longestSubarrayBetter = function (aee, k) {
  let l = 0; // constant
  let r = 0; // constant
  let maxLen = 0; // constant in typical longest
  let sum = 0;
  while (r < aee.length) {
    // constant
    sum += aee[r];
    while (sum > k) {
      // condition
      // constant
      sum -= aee[l]; // condition
      l++; // constant
    }
    maxLen = Math.max(maxLen, r - l + 1); // constant
    r++; // constant
  }
  return maxLen;
}; // tc = O(n + n) = O(2n). // sc = O(1)
// console.log(longestSubarrayBetter(aee, k));

//

//
let s = "abca";
// let s = "acbca";

var checkPalindrome = function (s, left, right) {
  let i = left;
  let j = right;
  let isPalindrome = true;

  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
      isPalindrome = false;
      break;
    }
    i++;
    j--;
  }

  return isPalindrome;
};

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s.charAt(left) != s.charAt(right)) {
      return (
        checkPalindrome(s, left + 1, right) ||
        checkPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};
// console.log(validPalindrome(s));

/**
 * File: two_pointer.js
 * Pattern: Two Pointers
 * Problems included:
 * 1. LeetCode 977 - Squares of a Sorted Array (Easy)
 * 2. LeetCode 167 - Two Sum II (Easy/Medium)
 * 3. LeetCode 1750 - Minimum Length of String After Deleting Similar Ends (Medium)
 *
 * Usage:
 * - Each problem is a self-contained function
 * - Test cases are commented out, uncomment to run
 */

// ====================== Problem 1: Squares of a Sorted Array (LC 977) ======================

// Pattern: Two Pointers from ends
// Key Idea: Compare absolute values from both ends and fill result from the back
// Time Complexity: O(n)
// Space Complexity: O(n) for result array
// Edge Cases: Array with all negative numbers, zeros, or empty array

function sortedSquares(nums) {
  let n = nums.length;
  let left = 0,
    right = n - 1,
    pos = n - 1;
  let result = new Array(n);

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[pos] = nums[left] ** 2;
      left++;
    } else {
      result[pos] = nums[right] ** 2;
      right--;
    }
    pos--;
  }

  return result;
}
// console.log(sortedSquares([-4, -1, 0, 3, 10]));

// ====================== Problem 2: Two Sum II (LC 167) ======================
let numbers2 = [2, 7, 11, 15],
  target2 = 9;

function twoSum(numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else left++;
  }

  return -1;
}

// console.log(twoSum(numbers2, target2));

// Problem 3: Minimum Length After Deleting Similar Ends (LC 1750) ======================
let str3 = "cabaabac";

function minimumLength(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) break;
    let char = s[left];
    while (left <= right && s[left] == char) left++;
    while (left <= right && s[right] == char) right--;
  }

  return right - left + 1;
}

// console.log(minimumLength(str3));

//

//
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);

    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};
// console.log(maxArea(height));

//

//
let numsOfRemoveElement = [3, 2, 2, 3];
let val = 3;
// bruteforce
var removeElementBruteforce = function (nums, val) {
  let newNum = [];

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] == val) {
      newNum.push("");
    } else {
      newNum.unshift(nums[j]);
    }
  }
  return newNum;
};

var removeElement = function (nums, val) {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  return nums;
};

console.log(removeElementBruteforce(numsOfRemoveElement, val));

//
let nums1 = [0, 1, 0, 3, 12];
var moveZeroes = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != 0) {
      if (i !== j) {
        nums[i] = nums[j];
      }
      i++;
    }
  }
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
  return nums;
};

console.log(moveZeroes(nums1));

//

//
let nums2 = [3, 1, 2, 4];
var sortArrayByParity = function (nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] % 2 == 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  return nums;
};

console.log(sortArrayByParity(nums2));

//

let str2 = "leetcode";
let k2 = 3;
var maxVowels = function (s, k) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  let left = 0;
  let right = 0;
  let count = 0;
  let maxCount = 0;

  while (right < s.length) {
    if (vowels.has(s[right])) {
      count++;
    }

    if (right - left + 1 === k) {
      maxCount = Math.max(maxCount, count);

      if (vowels.has(s[left])) {
        count--;
      }
      left++;
    }

    right++;
  }
  return maxCount;
};

// console.log(maxVowels(str2, k2));

//

// Sets // ----------------------
// let sh = new Set();
// sh.add(1);
// sh.add(2);
// sh.add(2); // duplicate ignored
// console.log(sh); // Set {1, 2}
// console.log(sh.size);
//.......
// let arr2 = [1, 2, 2, 3];
// let unique = [...new Set(arr2)]; // [1,2,3]
// console.log(unique);
//.....
// let shr = new Set([1, 2, 3]);
// if (!shr.has(4)) shr.add(4);
// console.log(shr);
//......

//

//
let arr2 = [2, 2, 2, 2, 5, 5, 5, 8];
let k3 = 3;
let threshold = 4;

var numOfSubarrays = function (arr, k, threshold) {
  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    if (right - left + 1 === k) {
      //average = k / sum ​≥ threshold
      // => sum >= threshold * k
      if (sum >= k * threshold) {
        count++;
      }
      sum -= arr[left];
      left++;
    }
  }
  return count;
};

// console.log(numOfSubarrays(arr2, k3, threshold));

let st2 = "IceCreAm";
var reverseVowels = function (s) {
  let arr = s.split("");
  let left = 0;
  let right = s.length - 1;
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  while (left < right) {
    while (left < right && !vowels.has(arr[left])) left++; // skip non-vowels on left
    while (left < right && !vowels.has(arr[right])) right--; // skip non-vowels on right

    if (vowels.has(arr[left]) && vowels.has(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
};

// console.log(reverseVowels(st2));

//

//
let nums4 = [1, 2, 3, 1];
let k4 = 3;
var containsNearbyDuplicate = function (nums, k) {
  let left = 0;
  let set = new Set();

  for (let right = 0; right < nums.length; right++) {
    if (set.has(nums[right])) return true;
    set.add(nums[right]);

    if (right - left >= k) {
      set.delete(nums[left]);
      left++;
    }
  }
  return false;
};
// console.log(containsNearbyDuplicate(nums4, k4));

let cardPoints = [1, 2, 3, 4, 5, 6, 1];
let k5 = 3;
var maxScore = function (cardPoints, k) {
  let leftSum = 0;
  let rightSum = 0;
  let maxSum = 0;
  let n = cardPoints.length;

  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
    maxSum = leftSum;
  } // tc = O(2k) // sc = O(1)

  let rightIdx = n - 1;

  for (let i = k - 1; i >= 0; i--) {
    leftSum = leftSum - cardPoints[i];
    rightSum += cardPoints[rightIdx];
    rightIdx = rightIdx - 1;
    maxSum = Math.max(maxSum, leftSum + rightSum);
  }
  return maxSum;
};
// console.log(maxScore(cardPoints, k5));

//

//
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let set = new Set();
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    if (set.has(s[right])) {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
    } else {
      set.add(s[right]);
    }
    maxLen = Math.max(right - left + 1, maxLen);
  }
  return maxLen;
};

// console.log(lengthOfLongestSubstring("pwwkew"));

//

//
var longestOnes = function (nums, k) {
  let left = 0;
  let maxLen = 0;
  let zeroes = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroes++;

    while (zeroes > k) {
      if (nums[left] === 0) zeroes--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

// console.log(
//   longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
// );

let nums5 = [2, 7, 11, 15];
let t1 = 9;
function goodBoy(nums, target) {
  let left = 0;
  let sum = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (sum == target) return [left, right];

    while (sum > target) {
      sum -= nums[left];
      left++;
    }
  }
  return sum;
}

// console.log(goodBoy(nums5, t1));
