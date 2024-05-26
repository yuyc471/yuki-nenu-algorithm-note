var integerBreak = function(n) {
    let dp=[1,1,1]
    for (let i = 3; i <= n; i++) {
        let max=0
        for (let j = 1; j <= i/2; j++) {
            max=Math.max(max,Math.max(j,dp[j])*Math.max(i-j,dp[i-j]))
        }
        dp[i]=max
    }
    return dp[n]
};
console.log("@",integerBreak(10));