 /*
write a function called sumZero which takes in a sorted array of integers and finds the first pair of numbers which 
sum to equal zero. The pair must be returned in an array and if no pair is found return undefined in an array
*/
const sumZero = (sortedArr) => {
    
    let left = 0; 
    let right = sortedArr.length - 1; 
    
 
    while (left < right) {
     
     let sum = sortedArr[left] + sortedArr[right]; 
     
     if (sum === 0){
     return [sortedArr[left], sortedArr[right]]; 
    } else if (sum > 0){
     right--
    } else {
     left++
    }
    }
    
}

sumZero([-3,-2,-1,0,1,2,4])
