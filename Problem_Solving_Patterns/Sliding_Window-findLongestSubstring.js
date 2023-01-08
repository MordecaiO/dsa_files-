/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

function findLongestSubstring(str){
  // create chars object to keep track of chars 
  let obj = {}; let maxLen = 0; 
   // initialise start and end vars 
  let start = 0; let end = 0; 
 
  // loop through string 
  while (end <= str.length){
      let charStart = str[start]; let charEnd = str[end] ;
      // if end - start > curr max len 
      if ((end - start) > maxLen) maxLen = (end - start) ; 
      console.log("charEnd", charEnd)
      console.log("obj", obj)
      // if char in object doesn't exist increment end var and create property in chars obj
      if (!obj[charEnd]){
          obj[charEnd] = "I exist, sorry" ; 
          end++ ; 
      } else { 
      // else delete the item at start index from chars var & increment start 
         delete obj[charStart] ;
         start++ ; 
      }
      
      
  }
  return maxLen
 
}
