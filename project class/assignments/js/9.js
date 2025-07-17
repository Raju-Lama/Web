// 9. Write a JavaScript function to check whether an
//  `input` is an array or not
// console.log(is_array('subash'));
// console.log(is_array([1, 2, 4, 0]));

function is_array(arr) {
    return Array.isArray(arr);
}

console.log(is_array("subash"));
console.log(is_array([1, 2, 4, 0]));