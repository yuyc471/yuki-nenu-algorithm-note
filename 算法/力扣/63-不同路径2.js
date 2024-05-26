var uniquePathsWithObstacles = function(obstacleGrid) {
    const m=obstacleGrid.length
    const n=obstacleGrid[0].length
    let dp=new Array(m).fill(0).map(num=>new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        if(obstacleGrid[i][0]===1){
            break
        }
        dp[i][0]=1
    }
    for (let i = 0; i < n; i++) {
        if(obstacleGrid[0][i]===1){
            break
        }
        dp[0][i]=1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if(obstacleGrid[i][j]===1){
                continue
            }
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
console.log("@",uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));