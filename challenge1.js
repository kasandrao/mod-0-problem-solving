// include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// 1. Given an array of strings, print only the strings that have exactly 4 characters.

// need to print only strings that have 4 characters
//need array, strings, function, and conditional, and loop
//does this need to be a loop?
// probably need to use length?
//first start with array, then start the function, then loop, then conditional, then try to run it 
//FINAL SOLUTION:

var words = ["phone", "cat", "coat", "rats"];

function print4Chars(array) {
    for (var i = 0; i < words.length; i++){
        if (array[i].length === 4) {
            console.log(array[i]); 
        }
    }
}
print4Chars(words);