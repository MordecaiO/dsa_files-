
const mergeSort = (arr)=>{
// function merges and sorts two sorted arrays
    const merge = (arr1,arr2)=>{
        let i = 0
          , j = 0
          , result = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else if (arr1[i] > arr2[j]) {
                result.push(arr2[j]);
                j++;
            } else {
                result.push(arr1[i], arr2[j]);
                i++,
                j++;
            }
        }
// when one arr has been emptied add all items of the other array 
        while (i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }

        while (j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }

        return result;
    }
// base case for recursion 
    if (arr.length === 1)
        return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
