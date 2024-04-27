// 从小到大排序
// 冒泡排序：把最大的放到最后一位，把第二大的放到倒数第二位
// 把最大的放到最后一位:从1遍历到n-1，判断是否交换
// 把倒数第二大的放到倒数第二位:从1遍历到n-2，判断是否交换
function bubbleSort(arr){
    const len=arr.length
    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len-1-i; j++) {
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log("@bubbleSort",bubbleSort([2,9,0,5,7,4,3]));