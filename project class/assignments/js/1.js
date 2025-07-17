// 1. Write a JavaScript function that reverse a number.
function reverseNumber(num) {
    if(num === 0){
        return 0;
    }
    let temp = num;
    let reversed = 0;

    while(temp > 0){
        let rem = temp % 10;
        reversed = reversed * 10 + rem;
        temp = Math.floor(temp / 10);
        // removes floating point
    }

    return reversed;
}

console.log(reverseNumber(1356));
console.log(reverseNumber(123456789));