// 5. Write a JavaScript function that accepts a string as a parameter 
// and counts the number of
// vowels within the string.

function vowelCount(str) {
    let count = 0;

    let vowels = "aeiouAEIOU";

    for(const letter of str) {
        if(vowels.includes(letter)) {
            ++count;
        }
    }
    return count;
}

console.log(vowelCount("cataeiou"));