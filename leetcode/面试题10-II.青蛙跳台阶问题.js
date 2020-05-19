// 动态规划 自底向上
// 跳上n阶的情况：
//    1、先跳上n-1阶，再跳一阶
//    2、先跳上n-2阶，再跳二阶
//所以：f(n) = f(n-1) + f(n-2)
//为什么要取模：https://www.liuchuo.net/archives/645
var numWays = function(n) {
  if(n == 0){
      return 1
  }
  var memo = []
  memo[1] = 1     // 跳上1级台阶有1种跳法
  memo[2] = 2     // 跳上2级台阶有2种跳法
  for(var i = 3; i <= n; i++){
      memo[i] = (memo[i-1] + memo[i-2]) % 1000000007
  }
  return memo[n]
};
