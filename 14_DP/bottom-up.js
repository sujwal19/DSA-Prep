var fib = function (n) {
  if (n < 2) return n;

  let dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// console.log(fib(6));

// Space Optimization
var fib0Space = function (n) {
  if (n <= 1) return n;
  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
// console.log(fib0Space(6));

// Knapsack problem
var knabsack = function (wt, val, W) {
  let n = wt.length;

  let dp = new Array(n + 1).fill().map(() => new Array(W + 1).fill(0));

  for (let i = 1; i < n + 1; i++) {
    for (let w = 1; w < W + 1; w++) {
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(
          val[i - 1] + dp[i - 1][w - wt[i - 1]],
          dp[i - 1][w],
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][W];
};
// console.log(knabsack([1, 3, 4, 5], [1, 4, 5, 7], 7));
