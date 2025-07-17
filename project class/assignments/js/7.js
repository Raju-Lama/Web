// 7. Write a JavaScript function which accepts an 
// argument and returns the type.

function dataType(value) {
    return typeof value;
}

console.log(dataType("abcd"));
console.log(dataType(1.1));
console.log(dataType(3333));
console.log(dataType(undefined));