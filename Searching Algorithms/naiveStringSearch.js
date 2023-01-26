function naiveStringSearch (str, substr) {
    
    let matches = 0; 
    // loop over longer string 
    for (let i = 0; i < str.length; i++) {
        // loop over shorter string 
        for (let j = 0; j < substr.length; j++){
            // if characters don't match break from inner loop 
            if (substr[j] !== str[i + j]){
                break ; 
            } 
            // if inner loop is completed increment matches count
            if (j = 2) matches++ ; 
        }
    }
    // return matches count 
    return matches 
}

 naiveStringSearch("abcdebcefghibc", "fg")
