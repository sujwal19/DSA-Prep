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

var leastInterval = function (tasks, n) {
  let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element[0], element[1]);
  }
};

leastInterval(["A", "A", "A", "B", "B", "B"], 2);
