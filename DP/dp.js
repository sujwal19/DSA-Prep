let n = 100;

let dp = new Array(n + 1).fill(-1);
var fibo = function (n) {
  if (n <= 1) return n;

  if (dp[n] !== -1) {
    return dp[n];
  }

  dp[n] = fibo(n - 1) + fibo(n - 2);
  return dp[n];
};

console.log(fibo(n));
