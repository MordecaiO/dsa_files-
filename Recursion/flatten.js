
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
                                  
function flatten(arr){
    
  let flattenedArr = []; 
  
  for (let i = 0; i < arr.length; i++){
      // if the current item is an array 
      if(Array.isArray(arr[i])){
         
          flattenedArr = flattenedArr.concat(flatten(arr[i])) ; 
      } else { 
          flattenedArr.push(arr[i]); 
      }
  }
   return flattenedArr ;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
