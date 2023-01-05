/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. 
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

function maxSubarraySum(arr, num){
  // if num > length return null 
  if (num > arr.length) return null ; 
  // find initial sum or window value 
  let currSum =  arr.slice(0 ,num).reduce((a, v) => a + v); 
  // initialise max sum
  let maxSum = currSum; 
  let start = 0; let end = start + (num) ; 
  // loop through arr 
  while (end < arr.length){
      currSum = currSum - arr[start] + arr[end]; 
      if(currSum > maxSum) maxSum = currSum; 
      start++; 
      end++; 
  }
  
   return maxSum
}
