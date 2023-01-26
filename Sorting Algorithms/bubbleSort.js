// time complexity worst case = n^2 , best case = n 

const bubbleSort = (arr) => {
  
    for (let i = arr.length; i > 0 ; i--){
         let noSwaps = true ; 
        for (let j = 0; j < (i - 1); j++){
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j+1]){
                // SWAP !! 
                 let temp = arr[j] ; 
                 arr[j] = arr[j+1] ; 
                 arr[j+1] = temp ; 
                noSwaps = false ; 
            } 
        }

        if (noSwaps) break 
    }

    return arr ; 
}

bubbleSort([35, 1,2,3,4,5,6,7])
