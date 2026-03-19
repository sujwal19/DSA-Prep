//

let costs = [
  [10, 20],
  [30, 200],
  [400, 50],
  [30, 20],
];
var twoCitySchedCost = function (costs) {
  let n = costs.length;
  for (let i = 0; i < costs.length; i++) {
    console.log(costs[i][0]);

    console.log(costs[i][1]);
    console.log("....");
  }
};

// console.log(twoCitySchedCost(costs));

//
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let n = g.length;
  let m = s.length;
  let l = 0;
  let r = 0;

  while (l < m) {
    if (g[r] <= s[l]) {
      r = r + 1;
    }
    l = l + 1;
  }
  return r;
};

// console.log(findContentChildren([1, 2, 2, 3, 4, 5], [1, 2, 2, 4, 5]));

var partitionLabels = function (str) {
  let partition = [];

  for (let i = 0; i < str.length; ) {
    let startIndex = i;
    let endIndex = str.lastIndexOf(str.charAt(startIndex));

    for (let s = startIndex + 1; s <= endIndex - 1; s++) {
      let lastIndexOfNextChar = str.lastIndexOf(str.charAt(s));

      if (lastIndexOfNextChar > endIndex) {
        endIndex = lastIndexOfNextChar;
      }
    }
    partition.push(endIndex - startIndex + 1);
    i = endIndex + 1;
  }
  return partition;
};

// console.log(partitionLabels("ababcbacadefegdehijhklij"));

//

let bills = [5, 5, 5, 5, 10, 5, 10, 10, 10, 20];

var lemonadeChange = function (bills) {
  if (bills[0] > 5) return false;
  let five = 0;
  let ten = 0;
  let twenty = 0;

  for (let price of bills) {
    if (price === 5) {
      five += 1;
    } else if (price === 10) {
      if (five >= 1) {
        ten += 10;
        five -= 1;
      } else return false;
    } else {
      if (five >= 1 && ten >= 1) {
        ten -= 10;
        five -= 1;
        twenty += 20;
      } else if (five >= 3) {
        five -= 3;
        twenty += 20;
      } else return false;
    }
  }
  return true;
};
// console.log(lemonadeChange(bills));

//

var maxProfit = function (prices) {
  let maxProfit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let profit = 0;

    if (min > prices[i]) {
      min = prices[i];
    } //
    if (prices[i] > min) {
      profit = prices[i] - min;
      min = prices[i];
    }
    maxProfit += profit;
  }
  return maxProfit;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//

// Input:
let intervals = [
  [1, 3],
  [6, 9],
];
let newInterval = [2, 5];

var insert = function (intervals, newInterval) {
  let ans = [];

  let i = 0;
  let n = intervals.length;

  while (i < n && newInterval[0] > intervals[i][1]) {
    ans.push(intervals[i]);
    i++;
  }

  if (i == n) {
    ans.push(newInterval);
    return ans;
  }

  return ans;
};
// console.log(insert(intervals, newInterval));

//

var insert = function (intervals, newInterval) {
  let [start, end] = newInterval;
  let left = [];
  let right = [];

  for (const interval of intervals) {
    let [first, last] = interval;

    if (last < start) {
      left.push(interval);
    } else if (end < first) {
      right.push(interval);
    } else {
      start = Math.min(first, start);
      end = Math.max(last, end);
    }
  }
  return [...left, [start, end], ...right];
};

// console.log(
//   insert(
//     [
//       [1, 2],
//       [3, 5],
//       [6, 7],
//       [8, 10],
//       [12, 16],
//     ],
//     [4, 8],
//   ),
// );

//

var merge = function (intervals) {
  const start = 0;
  const end = 1;

  intervals = intervals.sort((a, b) => a[start] - b[start]);
  let previous = intervals[0];
  let res = [previous];
  for (let current of intervals) {
    if (current[start] <= previous[end]) {
      previous[end] = Math.max(previous[end], current[end]);
    } else {
      res.push(current);
      previous = current;
    }
  }
  return res;
};

// console.log(
//   merge([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ]),
// );

//

var leastInterval = function (tasks, n) {
  const freq = new Array(26).fill(0);
  let count = 0;

  for (const task of tasks) {
    let index = task.charCodeAt(0) - "A".charCodeAt(0);
    freq[index]++;
    count = Math.max(freq[index], count);
  }
  let ans = (count - 1) * (n + 1);

  for (let i = 0; i < 26; i++) {
    if (freq[i] === count) ans++;
  }
  return Math.max(ans, tasks.length);
};

// console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1));

var partitionLabels = function (s) {
  let lastIndex = {};
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  let res = [];
  let size = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    size++;
    end = Math.max(end, lastIndex[s[i]]);

    if (i === end) {
      res.push(size);
      size = 0;
    }
  }
  return res;
};

// console.log(partitionLabels("ababcbacadefegdehijhklij"));

//

//
var candy = function (ratings) {
  let arr = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      if (arr[i] <= arr[i + 1]) {
        arr[i] = arr[i + 1] + 1;
      }
    }
  }

  let ans = arr.reduce((acc, val) => acc + val, 0);
  return ans;
};

console.log(candy([1, 2, 2]));
