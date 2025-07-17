// 14. Write a JavaScript program to list the 
// properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

function Student() {
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12,
        listAllProperties : function() {
            console.log("Called using object method: ", this.name, this.sclass, this.rollno);
        }
    };

    student.listAllProperties();
    console.log("Called using function: ", student.name, student.sclass, student.rollno);
}

Student();
