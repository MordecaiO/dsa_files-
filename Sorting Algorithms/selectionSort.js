const selectionSort = (arr) => {

    let smallest; 
    // loop through arr 
    for (let i = 0; i < arr.length; i++){
        // store first el as smallest seen so far 
        smallest = i ; 
        // loop through arr set incrementor to first loop incrementor
        for (let j = i + 1; j < arr.length; j++){
            // if curr item is smaller than curr smallest
            if (arr[j] < arr[smallest]) smallest = j ; 
        }
        // if the smallest num is already at the start no need to swap 
        if (i !== smallest){
            console.log('swap', arr, arr[i], arr[smallest])
            //SWAP!! 
        let temp = arr[i] ; 
        arr[i] = arr[smallest] ; 
        arr[smallest] = temp ; 
        }
    }
    
    return arr ; 
}

selectionSort([4,2,75,3,8,45,1,5])
