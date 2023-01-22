// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!

function stringifyNumbers(obj){
    
    let cloneObj = {} ; 
    
    for (const prop in obj){
        
        let propValue = obj[prop] ; 
        console.log("propValue" ,propValue) ; 
        
        if (typeof(propValue) === "number"){
            cloneObj[prop] = propValue.toString() ; 
            
        } else if (typeof(propValue) === "object" && !Array.isArray(propValue)){
            cloneObj[prop] = stringifyNumbers(propValue) ; 
            
        } else { 
            cloneObj[prop] = propValue ; 
        }
    
    }
    
    console.log(cloneObj)
    
   return cloneObj ;
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
