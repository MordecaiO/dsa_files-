// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
     
    let strArr = str.split(""); 
    let reversedStrArr = []; 
    
    const helper = (helperInput) => { 
        if (helperInput.length === 0) return ; 
        reversedStrArr.push(helperInput.slice(-1)[0]) ; 
        return helper(helperInput.slice(0, -1)) ; 
    }
  helper(strArr) ; 
  
  return str === reversedStrArr.join("") ? true : false ; 
}
