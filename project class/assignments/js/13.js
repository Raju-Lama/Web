// 13. Write a JavaScript function to check whether 
// an `input` is a string or not


function isString(str) {
    return typeof str === "string" || str instanceof String;
}

console.log(isString("hello"));
console.log(isString(111));