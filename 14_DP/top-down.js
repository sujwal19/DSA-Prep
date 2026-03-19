var fibonacci = function (n) {
  let dp = new Array(n + 1).fill(-1);
  var fibo = function (n) {
    if (n <= 1) return n;

    if (dp[n] !== -1) {
      return dp[n];
    }
    dp[n] = fibo(n - 1) + fibo(n - 2);
    return dp[n];
  };
  return fibo(n);
};
// console.log(fibonacci(6));

//
// 0/1 Knapsack Problem // Recursive
// var knabsack = function (wt, val, w, n = wt.length) {
//   if (n === 0 || w === 0) return 0;

//   if (wt[n - 1] <= w) {
//     return Math.max(
//       val[n - 1] + knabsack(wt, val, w - wt[n - 1], n - 1),
//       knabsack(wt, val, w, n - 1),
//     );
//   }
//   return knabsack(wt, val, w, n - 1);
// };
// console.log("Knabsack:", knabsack([1, 3, 4, 5], [1, 4, 5, 7], 7));

// Memoization
var memoization = function (wt, val, w, n = wt.length) {
  let dp = new Array(n + 1).fill().map(() => new Array(w + 1).fill(-1));

  function knabsack(wt, val, w, n) {
    if (n === 0 || w === 0) return 0;

    if (dp[n][w] !== -1) {
      return dp[n][w];
    }

    if (wt[n - 1] <= w) {
      dp[n][w] = Math.max(
        val[n - 1] + knabsack(wt, val, w - wt[n - 1], n - 1),
        knabsack(wt, val, w, n - 1),
      );
    } else {
      dp[n][w] = knabsack(wt, val, w, n - 1);
    }
    return dp[n][w];
  }
  knabsack(wt, val, w, n);
  return dp[n][w];
};
// console.log("Knabsack:", memoization([1, 3, 4, 5], [1, 4, 5, 7], 7));

// Subset sum
var subsetsum = function (st, sum) {
  if (st === 0 || sum === 0) return false;

  if ()
};

console.log(subsetsum([2, 3, 7, 8, 10], 11));
