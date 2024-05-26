function getMostValue(weight,value,size){
    const count=weight.length
    let dp=new Array(count).fill(0).map(num=>new Array(size+1).fill(0))
    for (let j = 0; j < size+1; j++) {
        if(j>=weight[0]){
            dp[0][j]=value[0]
        }
    }
    for (let i = 1; i < count; i++) {
        for (let j = 1; j < size+1; j++) {
            if(j-weight[i]>=0){
                dp[i][j]=Math.max(dp[i-1][j-weight[i]]+value[i],dp[i-1][j])
            }else {
                dp[i][j]=dp[i-1][j]
            }
        }
    }
    console.table(dp)
    return dp[count-1][size]
}
console.log("@",getMostValue([2,2,3,1,5,2],[2,3,1,5,4,3],1));
