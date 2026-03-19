function print(n) {
  if (n === 5) {
    console.log(n);
    return;
  }
  console.log(n);
  print(n + 1);
}
// print(1);

//

function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}
// console.log(fibo(4));

//

function search(arr, target, s = 0, e = arr.length - 1) {
  if (s > e) return -1;
  let m = s + (e - s) / 2;
  if (arr[m] === target) {
    return m;
  }
  if (target < arr[m]) {
    return search(arr, target, s, m - 1);
  }
  return search(arr, target, m + 1, e);
}
// console.log(search([1, 2, 4, 5, 7, 56, 78], 4));

//

function fact(n) {
  if (n < 2) return 1;
  return n * fact(n - 1);
}
// console.log(fact(5));

//

function sum(n) {
  if (n === 1) return 1;

  return n + sum(n - 1);
}
// console.log(sum(5));

//

function revPrint(n) {
  if (n === 0) return;

  console.log(n);
  revPrint(n - 1);
}
// revPrint(5);

//

function print(n) {
  if (n === 0) return;

  print(n - 1);
  console.log(n);
}
// print(5);

//
let arr = [1, 2, 3, 4, 5];

function revArr(arr, tempArr = [], i = 0) {
  if (i === arr.length) return tempArr;
  revArr(arr, tempArr, i + 1);
  tempArr.push(arr[i]);
  return tempArr;
}
// console.log(revArr(arr));

//

function checkPalindrome(arr, i = 0, j = arr.length - 1) {
  if (i >= j) return true;

  if (arr[i] !== arr[j]) return false;
  return checkPalindrome(arr, i + 1, j - 1);
}
// console.log(checkPalindrome(["m", "a", "d", "a", "m"]));

//

// Normal recursion
function countOccurance(arr, target, i = 0) {
  if (i === arr.length) return 0;

  if (target === arr[i]) {
    return 1 + countOccurance(arr, target, i + 1);
  }
  return countOccurance(arr, target, i + 1);
}

//

// Tail recursion
function countOccuranceTail(arr, target, i = 0, count = 0) {
  if (i === arr.length) return count;
  if (target === arr[i]) {
    return countOccuranceTail(arr, target, i + 1, count + 1);
  }
  return countOccuranceTail(arr, target, i + 1, count);
}

// console.log(countOccurance(["m", "a", "d", "a", "m"], "m"));
// console.log(countOccuranceTail(["m", "a", "d", "a", "m"], "m"));

//

let result = [];
function printSubsets(arr, ans = [], i = 0) {
  if (i === arr.length) {
    result.push([...ans]);
    return;
  }
  ans.push(arr[i]); // Pick
  printSubsets(arr, ans, i + 1);
  ans.pop();

  printSubsets(arr, ans, i + 1); // Not Pick
}
printSubsets([1, 2, 3], [], 0, 7);
// console.log(result);

// The "Pick / Not Pick" template adapts to:
// ......
// Subsets with duplicates (skip duplicates)
// Combination Sum (add target constraint)
// Permutations (track visited)
// N-Queens (validate before recurse)
// Palindrome partitioning

//

//
// Permutations
var permute = function (nums) {
  let result = [];
  function backtrack(nums, idx) {
    if (idx === nums.length) {
      result.push([...nums]); // push a COPY
      return;
    }
    for (let i = idx; i < nums.length; i++) {
      [nums[idx], nums[i]] = [nums[i], nums[idx]]; // swap
      backtrack(nums, idx + 1);
      [nums[i], nums[idx]] = [nums[idx], nums[i]]; // backtrack (undo swap)
    }
  }
  backtrack(nums, 0);
  return result;
};

var permuteStr = function (nums) {
  let result = [];
  nums = nums.split("");
  function backtrack(nums, idx) {
    if (idx === nums.length) {
      result.push(nums.join("")); // push a COPY
      return;
    }
    for (let i = idx; i < nums.length; i++) {
      [nums[idx], nums[i]] = [nums[i], nums[idx]]; // swap
      backtrack(nums, idx + 1);
      [nums[i], nums[idx]] = [nums[idx], nums[i]]; // backtrack (undo swap)
    }
  }
  backtrack(nums, 0);
  return result;
};

let permutate = permuteStr("abc");
// console.log(permutate);

//

function isValid(str) {
  let count = 0;
  for (let char of str) {
    if (char === "(") count++;
    else count--;
    if (count < 0) return false;
  }
  return count === 0;
}
function solve(curr, n, result) {
  if (curr.length === 2 * n) {
    if (isValid(curr)) {
      result.push(curr.join(""));
    }
    return;
  }
  curr.push("(");
  solve(curr, n, result);
  curr.pop();

  curr.push(")");
  solve(curr, n, result);
  curr.pop();
}
var generateParenthesis = function (n) {
  let result = [];
  solve([], n, result);
  return result;
};

//

//
function getAllCombin(arr, i, combin, ans, target) {
  if (target === 0) {
    ans.push([...combin]);
    return;
  }
  if (i >= arr.length || target < 0) {
    return;
  }
  combin.push(arr[i]);
  getAllCombin(arr, i + 1, combin, ans, target - arr[i]);
  combin.pop();
  let next = i + 1;
  while (next < arr.length && arr[next] === arr[i]) {
    next++;
  }
  getAllCombin(arr, next, combin, ans, target);
}

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let ans = [];
  getAllCombin(candidates, 0, [], ans, target);
  return ans;
};

//

function subsetsWithDupUsingLoop(arr) {
  let result = [];
  arr = arr.sort((a, b) => a - b);

  function subSeq(arr, index, temp) {
    result.push([...temp]);
    for (let i = index; i < arr.length; i++) {
      if (i > index && arr[i] === arr[i - 1]) continue;

      temp.push(arr[i]);
      subSeq(arr, i + 1, temp);
      temp.pop();
    }
  }
  subSeq(arr, 0, []);
  return result;
}
// console.log(subsetsWithDupUsingLoop([1, 2, 2]));

var subsetsWithDup = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  function subSeq(arr, i, temp) {
    if (i === arr.length) {
      result.push([...temp]);
      return;
    }

    temp.push(arr[i]);
    subSeq(arr, i + 1, temp);
    temp.pop();

    let next = i + 1;
    while (next < arr.length && arr[next] === arr[i]) {
      next++;
    }
    subSeq(arr, next, temp);
  }
  subSeq(nums, 0, []);
  return result;
};
// console.log(subsetsWithDup([1, 2, 2]));

var permute = function (nums) {
  let result = [];

  function backtrack(arr, temp, result) {
    if (temp.length === nums.length) {
      result.push([...temp]);
      return;
    }
    for (let number of arr) {
      if (temp.includes(number)) continue;
      temp.push(number);
      backtrack(arr, temp, result);
      temp.pop();
    }
  }
  backtrack(nums, [], result);
  return result;
};

console.log(permute([1, 2, 3]));
