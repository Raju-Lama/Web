// 16. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

function Person(){
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 
    };

    console.log("Length of object student: ", Object.keys(student).length);
}

Person();