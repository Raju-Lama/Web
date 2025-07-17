// 12. Write a JavaScript function to check whether an
//  `input` is a date object or not.

function isDate(input) {
  return input instanceof Date;
}

console.log(isDate("1 jan 2000"));
console.log(isDate(new Date()));