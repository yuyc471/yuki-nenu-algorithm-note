// 动态规划
// 1、含义：下标是楼梯数，元素是该处的最小花费
// 2、dp公式：dp[i]=min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
// 3、初始化：[0,0]
// 4、遍历顺序：从左到右
// 5、示例：[10,15,20]->[0,0,10,15]
var minCostClimbingStairs = function(cost) {
    let dp=[0,0]
    const len=cost.length
    for (let i = 2; i <= len; i++) {
        dp[i]=Math.min(dp[i-1]+cost[i-1],dp[i-2]+cost[i-2])
    }
    return dp[len]
};