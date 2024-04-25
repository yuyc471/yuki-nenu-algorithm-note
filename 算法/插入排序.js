// 插入排序：前两位排好序，前三位排好序...，前n位排好序
function insertionSort(arr){
    const len=arr.length
    for (let i = 1; i < len; i++) {
        let num=arr[i]
        let j=i-1
        while (j>=0&&arr[j]>num){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=num // 不可能给-1复制，所以是j+1
    }
    return arr
}
console.log("@insertionSort",insertionSort([3,5,7,3,4,5,6]));