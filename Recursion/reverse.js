// Write a recursive function called reverse which accepts a string and returns a new string in reverse. 


function reverse(str){
    
  let strArr = str.split(""); 
  let reverseStrArr = []; 
  
  const helper = (helperInput) => {
      if (helperInput.length === 0) return ; 
      reverseStrArr.push(helperInput.slice(-1)[0]) ; 
      helper(helperInput.slice(0,-1)) ; 
  }
  
  helper(strArr) ; 
  
  return reverseStrArr.join(""); 
} 

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
