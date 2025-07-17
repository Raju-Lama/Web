// 6. Write a JavaScript function that accepts a number as a parameter and check the number
// is prime or not.
function isPrime(num) {
    let i = 2;

    while(i < num) {
        if(num % 2 === 0) {
            return "not Prime!";
        }

        ++i;
    }

    return "Prime!";
}


console.log(isPrime(5));
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(12));