// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
function isPalindrome(str) {
    if(str === ""){
        return "Not Palindrome!";
    }
    let reversed = "";

    for(let i=str.length - 1; i>=0; --i) {
        reversed += str[i];
    }
    
    return (str === reversed) ? "Palindrome" : "Not Palindrome";
}

console.log(isPalindrome("121"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("Ram"));