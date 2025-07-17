// 10. Write a simple JavaScript program to join all 
// elements of the following array into a
// string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
function joinArray(arr) {
    return arr.join(", ");
}

let myColor = ["Red", "Green", "White", "Black"];

console.log(joinArray(myColor));