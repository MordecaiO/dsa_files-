// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords (arr) {
  let newArr = []; 
  
  const helper = (helperInput) => { 
      
  if (helperInput.length === 0) return ; 
  newArr.push(helperInput[0].toUpperCase()) ; 
  return helper(helperInput.slice(1)); 
  
  }
  helper(arr) ; 
  return newArr ; 
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
