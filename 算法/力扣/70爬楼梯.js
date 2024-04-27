// 动态规划
// 1、含义：下标是楼梯数，元素是有多少种方式
// 2、公式：dp[i]=dp[i-1]+dp[i-2]
// 3、初始化：[1,1]
// 4、遍历顺序：从左到右
// 5、示例：[1,1,2,3,5,8]
var climbStairs = function(n) {
    let dp=[1,1]
    for (let i = 2; i <= n; i++) {
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
};