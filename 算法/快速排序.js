// 从小到大排序
// 快速排序：建立一个中轴，遍历出小数组left，遍历出大数组right
// 针对left和right使用快速排序
// [sort(left),pivot,sort(right)]
function quickSort(arr){
    const pivot=arr[0]
    const len=arr.length
    if(len<=1){
        return arr
    }
    let left=[]
    let right=[]
    for (let i = 1; i < len; i++) {
        let item=arr[i]
        if(item<pivot){
            left.push(item)
        }else {
            right.push(item)
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log("@quickSort",quickSort([8,0,2,5,4,3,9]));