function collectOddValues (arr){

    let oddValues = []; 

   const helper = (helperInput) => {
       // base case 
       if (helperInput.length === 0) return ;
       // evaluating first item 
       if (helperInput[0] % 2 !== 0){
           oddValues.push(helperInput[0]); 
       } 
       // different input 
       helper(helperInput.slice(1)); 
   }
    helper(arr) ; 

    return oddValues ;
} 
