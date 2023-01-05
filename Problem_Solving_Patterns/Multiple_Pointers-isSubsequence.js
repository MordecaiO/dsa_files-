/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence 
which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

function isSubsequence(subStr, mainStr) {
  // initialise pointers for sub & main 
  let i = 0; let j = 0; let count = 0; 
  
  // while loop for sub (i < length sub)
  while (i < subStr.length){
      // if i & j !== increment j 
      if (subStr[i] !== mainStr[j]){
          j++;
      } else {
          // else increment count 
          count++;
          i++;
      }
  }
  
  // if count !== sub.length return false 
  return count === subStr.length ? true : false ; 
}
