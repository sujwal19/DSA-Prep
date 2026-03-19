// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) return null;
//     return this.items.pop();
//   }

//   top() {
//     return this.items[this.items.length - 1];
//   }

//   size() {
//     return this.items.length;
//   }

//   isEmpty() {
//     return this.items.length == 0;
//   }
// }
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(32);
// stack.push(40);
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.pop());
// console.log(stack.isEmpty());

//

// Queue

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) return null;
//     return this.items.shift();
//   }
//   front() {
//     if (this.isEmpty()) return null;
//     return this.items[0];
//   }
//   size() {
//     return this.items.length;
//   }
//   isEmpty() {
//     return this.items.length == 0;
//   }
// }
// const queue = new Queue();
// queue.push(12);
// queue.push(24);
// queue.push(36);
// queue.push(48);
// console.log(queue.pop());
// console.log(queue.front());
// console.log(queue.size());

//

// Reverse a string
function reverseStr(s) {
  let arrStr = s.split(" ");
  let stack = [];

  for (const i of arrStr) {
    stack.push(i);
  }

  let finalStr = "";

  while (stack.length) {
    let curr = stack.pop();

    if (curr) {
      finalStr += curr + " ";
    }
  }
  return finalStr.trim();
}
console.log(reverseStr("Hello World"));

//

// Valid Parentheses
let s = "([{}])";
var isValid1 = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(")");
    else if (s[i] == "{") stack.push("}");
    else if (s[i] == "[") stack.push("]");
    else {
      if (stack.length == 0) return false;
      let top = stack[stack.length - 1];
      //
      if (s[i] != top) return false;
      else stack.pop();
    }
  }
  return stack.length == 0;
};
// console.log(isValid1(s));

var isValid2 = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (stack.length == 0) return false;
      let ch = stack[stack.length - 1];
      if (s[i] == ")" && ch == "(") stack.pop();
      else if (s[i] == "}" && ch == "{") stack.pop();
      else if (s[i] == "]" && ch == "[") stack.pop();
      else return false;
    }
  }
  return stack.length == 0;
};

// console.log(isValid2(s));

// var isValid = function (s) {
//   const stack = [];
//   const dic = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//   };

//   for (let c of s) {
//     if (!dic[c]) {
//       // opening
//       stack.push(c);
//     } else {
//       if (stack[stack.length - 1] === dic[c]) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return !stack.length;
// };

// var isValid = function (s) {
//   // base case
//   if (s.length <= 1 || s[0] == "}" || s[0] == "]" || s[0] == ")") {
//     return false;
//   }

//   let validClose = {
//     "[": "]",
//     "{": "}",
//     "(": ")",
//   };
//   var outputArr = []; // this array will have only open brackets lie { ( [
//   outputArr.push(s[0]); // default push the first item to output array
//   for (let index = 1; index < s.length; index++) {
//     const element = s[index];
//     // if the element is a closing item and it is valid closing element.
//     // we will not add it to the output array instead we will remove last item of the array
//     if (s[index] == "}" || s[index] == "]" || s[index] == ")") {
//       if (s[index] == validClose[outputArr[outputArr.length - 1]]) {
//         outputArr.pop();
//       } else {
//         return false;
//       }
//     } else {
//       outputArr.push(s[index]);
//     }
//   }
//   return outputArr.length > 0 ? false : true;
// };
// see valid patentheses solutions ------------------------------ IMP --------------------------------------------------

//

// Greater Element I // bruteforce approach
// var nextGreaterElement = function (nums1, nums2) {
//   let ans = [];

//   for (let i = 0; i < nums1.length; i++) {
//     let found = false;
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         for (let k = j + 1; k < nums2.length; k++) {
//           if (nums1[i] < nums2[k]) {
//             ans.push(nums2[k]);
//             found = true;
//             break;
//           }
//         }
//         break;
//       }
//     }
//     if (!found) ans.push(-1);
//   }
//   return ans;
// };
// console.log(nextGreaterElement(nums1, nums2));

//

// Infix to PostFix
function priority(op) {
  if (op == "+" || op == "-") return 1;
  if (op == "*" || op == "/") return 2;
  if (op == "^") return 3;
  return 0;
}

// function isOperand(ch) {
//   return (
//     (ch >= "A" && ch <= "z") ||
//     (ch >= "a" && ch <= "z") ||
//     (ch >= 0 && ch <= "9")
//   );
// }
function isOperand(ch) {
  return /[a-zA-Z0-9]/.test(ch);
}

function convertToPostfix(exp) {
  let result = "";
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    if (isOperand(ch)) {
      result += ch;
    } else if (ch == "(") {
      stack.push(ch);
    } else if (ch == ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        priority(ch) <= priority(stack[stack.length - 1])
      ) {
        result += stack.pop();
      }
      stack.push(ch);
    }
  }
  while (stack.length) {
    result += stack.pop();
  }
  return result;
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    return this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  top() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverse(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] == "(") reverseStr += ")";
    else if (str[i] == ")") {
      reverseStr += "(";
    } else {
      reverseStr += str[i];
    }
  }
  return reverseStr;
}

// console.log(str);

// function convertToPostfixUsingStack(exp) {
//   let ans = "";
//   let stack = new Stack();

//   for (let i = 0; i < exp.length; i++) {
//     let ch = exp[i];

//     if (isOperand(ch)) {
//       ans += ch;
//     }
//     //
//     else if (ch == "(") {
//       stack.push(ch);
//     }
//     //
//     else if (ch == ")") {
//       while (!stack.isEmpty() && stack.top() != "(") {
//         ans += stack.pop();
//       }
//       stack.pop();
//     }
//     //
//     else {
//       while (!stack.isEmpty() && priority(ch) <= priority(stack.top())) {
//         ans += stack.pop();
//       }
//       stack.push(ch);
//     }
//   }
//   while (!stack.isEmpty()) {
//     ans = ans + stack.pop();
//   }
//   return ans;
// }

//

function convertToPrefix(exp) {
  let result = "";
  let stack = [];

  for (let i = exp.length - 1; i >= 0; i--) {
    let ch = exp[i];

    if (isOperand(ch)) {
      result = ch + result;
    } else if (ch == ")") {
      stack.push(ch);
    } else if (ch == "(") {
      while (stack.length && stack[stack.length - 1] != ")") {
        result = stack.pop() + result;
      }
      stack.pop();
    } else {
      while (stack.length && priority(ch) < priority(stack[stack.length - 1])) {
        result = stack.pop() + result;
      }
      stack.push(ch);
    }
  }
  while (stack.length) {
    result = stack.pop() + result;
  }
  return result;
}

let str5 = "(A*B)+(C*D)";

// console.log(convertToPrefix(str5));
// console.log(convertToPostfix(str5));

//
let postfixStr = "AB+CD+*";
// Postfix to Infix
function convertToInfixfromPostfix(exp) {
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    if (isOperand(ch)) {
      stack.push(ch);
    } else {
      let t1 = stack[stack.length - 1];
      stack.pop();
      let t2 = stack[stack.length - 1];
      stack.pop();
      let s = "(" + t2 + ch + t1 + ")";
      stack.push(s);
    }
  }
  return stack.join("");
}

function convertToInfixFromPrefix(exp) {
  let stack = [];

  for (let i = exp.length - 1; i >= 0; i--) {
    let ch = exp[i];

    if (isOperand(ch)) {
      stack.push(ch);
    } else {
      let t1 = stack[stack.length - 1];
      stack.pop();
      let t2 = stack[stack.length - 1];
      stack.pop();
      let s = "(" + t1 + ch + t2 + ")";
      stack.push(s);
    }
  }
  return stack.join("");
}

function convertToPrefixfromPostfix(exp) {
  let stack = [];

  for (let i = 0; i < exp.length; i++) {
    let ch = exp[i];

    if (isOperand(ch)) {
      stack.push(ch);
    } else {
      let t1 = stack.pop();
      let t2 = stack.pop();
      let s = ch + t2 + t1;
      stack.push(s);
    }
  }
  return stack;
}

function convertToPostfixfromPrefix(exp) {
  let stack = [];

  for (let i = exp.length - 1; i >= 0; i--) {
    let ch = exp[i];

    if (isOperand(ch)) {
      stack.push(ch);
    } else {
      let t1 = stack.pop();
      let t2 = stack.pop();
      let s = t1 + t2 + ch;
      stack.push(s);
    }
  }
  return stack.join("");
}

// console.log(convertToInfixFromPrefix("*+ABC"));
// console.log(convertToInfixfromPostfix(postfixStr));
// console.log(convertToPrefixfromPostfix(postfixStr));
// console.log(convertToPostfixfromPrefix("++A*BCD"));

// Leetcode
let tokens = ["4", "13", "5", "/", "+"];
// see another method instead of if/else and switch
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let ch = tokens[i];

    if (!isNaN(ch)) stack.push(Number(ch));
    else {
      let t1 = stack.pop();
      let t2 = stack.pop();
      if (ch === "*") stack.push(t2 * t1);
      else if (ch === "+") stack.push(t2 + t1);
      else if (ch === "-") stack.push(t2 - t1);
      else if (ch === "/") stack.push(Math.trunc(t2 / t1));
    }
  }
  return stack.pop();
};

// console.log(evalRPN(tokens));

//
let logs = ["d1/", "d2/", "../", "d21/", "./"];
var minOperations = function (logs) {
  let depth = 0;

  for (let log of logs) {
    if (log == "../") {
      if (depth > 0) depth--;
    } else if (log != "./") {
      depth++;
    }
  }
  return depth;
};

// console.log(minOperations(logs));

//

//
let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];

function nextGreaterElement(nums1, nums2) {
  let stack = [];
  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        for (let k = j + 1; k < nums2.length; k++) {
          if (nums1[i] < nums2[k]) {
            stack.push(nums2[k]);
            found = true;
            break;
          }
        }
        break;
      }
    }
    if (!found) stack.push(-1);
  }
  return stack;
}
// console.log(nextGreaterElement(nums1, nums2));

//
let monotonicStackArr = [1, 2, 3, 4, 3];

function nextGreaterElem(arr) {
  let stack = [];
  let nge = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) nge[i] = -1;
    else nge[i] = stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return nge;
}
// console.log(nextGreaterElem(monotonicStackArr));

//
let arr = [1, 2, 3, 4, 3];
//
// bruteforce
function nextGreaterElementII(arr) {
  let nge = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    nge[i] = -1;
    for (let j = i + 1; j < i + n; j++) {
      let ind = j % n;
      if (arr[ind] > arr[i]) {
        nge[i] = arr[ind];
        break;
      }
    }
  }
  return nge;
}

// optimal
function nextGreaterElemII(arr) {
  let stack = [];
  let nge = [];
  let n = arr.length;
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i % n]) {
      stack.pop();
    }
    if (i < n) {
      if (stack.length == 0) nge[i] = -1;
      else nge[i] = stack[stack.length - 1];
    }
    stack.push(arr[i % n]);
  }

  return nge;
}

// console.log(nextGreaterElementII(arr));
// console.log(nextGreaterElemII(arr));

//
let tickets = [2, 3, 2];
let k = 2;
var timeRequiredToBuy = function (tickets, k) {
  let time = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i < k) time += Math.min(tickets[i], tickets[k]);
    else if (i === k) time += tickets[k];
    else time += Math.min(tickets[k] - 1, tickets[i]);
  }
  return time;
};
// console.log(timeRequiredToBuy(tickets, k));

//
let str = "leetcoode";
var firstUniqChar = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
};
// console.log(firstUniqChar(str));

//
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var trap = function (height) {
  let leftMax = 0;
  let rightMax = 0;
  let totalWater = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    if (height[l] <= height[r]) {
      if (leftMax > height[l]) {
        totalWater += leftMax - height[l];
      } else leftMax = height[l];
      l++;
    } else {
      if (rightMax > height[r]) {
        totalWater += rightMax - height[r];
      } else rightMax = height[r];
      r--;
    }
  }
  return totalWater;
};
// console.log(trap(height));

//
var sumSubarrayMins = function (arr) {
  const n = arr.length;
  let left = new Array(n);
  let right = new Array(n);
  const MOD = 10 ** 9 + 7;
  let stack = [];

  // Previous smaller
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(i);
  }

  // clear stack
  stack.length = 0;

  // Next smaller or equal element
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n : stack[stack.length - 1];
    stack.push(i);
  }

  // Count Contributions
  let result = 0;
  for (let i = 0; i < n; i++) {
    const leftCount = i - left[i];
    const rightCount = right[i] - i;

    result = (result + arr[i] * leftCount * rightCount) % MOD;
  }
  return result;
};
// console.log(sumSubarrayMins([3, 1, 2, 4]));
