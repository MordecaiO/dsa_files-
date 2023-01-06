/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. 
If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

Time Complexity - O(n)
Space Complexity - O(1)

*/

function minSubArrayLen (arr, targetSum) {
     // account for case where arr contains item > targetSum
     // initialise window variables and curr sum 
     let start = 0; let end = 0 ; let currSum = arr[0]; 
     let minLength = Infinity; 
    
     // while end of window < arr 
     while (end < arr.length){
         if (currSum < targetSum){
             end++ ; 
             currSum = currSum + arr[end] ; 
         } else if (currSum >= targetSum && (end - start) < minLength){
              minLength = (end - start) + 1 ;
             currSum = currSum - arr[start] ; 
             start++ ; 
         } else { 
             break ; 
     }
     // if the current sum is < targetSum 
     // increment end 
     // else if the current sum >= target sum and length < minlength 
     // increment start, store len
     // else break 
     
     
 }
     return minLength === Infinity ? 0 : minLength ;
 }
