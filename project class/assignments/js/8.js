// 8. Write a JavaScript function which will take an 
// array of numbers stored and find the
// second lowest and second greatest numbers, respectively. 
// Sample array : [1,2,3,4,5]

function findSecondLowestAndGreatest(arr) {
    arr.sort((a, b) => a - b);
    return "Second Lowest number: " + arr[1] + "\nSecond Greatest number: " + arr[arr.length - 1];
}

console.log(findSecondLowestAndGreatest([9, 8, 5, 1, 2, 9, 888, 222]));
console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5]));