// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.


function capitalizeFirst (arr) {
 // initialise arr to hold our capitalized strings 
 let newArr = []; 
 
 // create helper function 
 const helper = (helperInput) => {
     // if the arr is empty exit function 
     if (helperInput.length === 0) return ;
     // take the first str capitalize it then push to our newArr 
     let capitalizedStr = helperInput[0][0].toUpperCase() + helperInput[0].slice(1); 
     newArr.push(capitalizedStr); 
     // remove item that has been capitalized and run on next item 
     return helper(helperInput.slice(1)); 
 }; 
 helper(arr); 
 return newArr; 
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
