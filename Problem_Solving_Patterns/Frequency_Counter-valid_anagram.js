/*
Write a function which given 2 strings returns true or false depending on whether the strings 
are anagrams of each other. Two words are valid anagrams when they contain the same letters the same 
amount of times. 
*/
const validAnagram = (str1, str2) => {
    // if strings are empty return true
    if (!str1 && !str2 ) return true ; 
        
    // if string dont have the same length return false 
    if (str1.length !== str2.length) return false ; 
    
    // create counter objects for both strings 
    let freqCounter1 = {}; 
    let freqCounter2 = {}; 

    // loop through each string and populate counter objects

    for (let char of str1) {
        // if key exists in counter object add one else create key and give value of 1 
       freqCounter1[char] ? freqCounter1[char] +=1 : freqCounter1[char] = 1;
    }

    for (let char of str2) {
        // if key exists in counter object add one else create key and give value of 1 
       freqCounter2[char] ? freqCounter2[char] +=1 : freqCounter2[char] = 1;
    }
     
    // loop through the properties of any counter object
    for (let key in freqCounter1){
        // if prop value is not the same as the identical props value in second counter object return false
        if (freqCounter1[key] !== freqCounter2[key]) return false ;
    }
    
    // return true 
    return true ; 
    
}

 validAnagram("create", "create");
