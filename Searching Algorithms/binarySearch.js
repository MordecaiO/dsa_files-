function binarySearch(arr, targetValue) {
   // initialise start, end, & middle pointers 
    let start = 0, end = arr.length - 1, middle = Math.floor((start + end) / 2); 
    //  
    while (start <= end) {
        if (arr[middle] === targetValue) return middle ; 
        if (targetValue > arr[middle]) start = middle + 1 ; 
        else end = middle - 1 ; 
        middle = Math.floor((start + end) / 2) ; 
    }
    return - 1 
}
