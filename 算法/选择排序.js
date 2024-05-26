// 选择排序：把第一小的放到第一个位置上，把第二小的放到第二个位置上
// 从1遍历到n，找到元素最小的下标，和第一个位置的元素交换
// 从2遍历到n，找到元素最小的下标，和第二个位置的元素交换
function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log('@selectionSort',
    selectionSort([5, 6, 3, 8, 9, 2, 0]),
);

