//Normal wy of creating an object
var stud = {
    name: "abc",
    rollNo: 1,
    marks: 80
};
console.log(stud);



//Using function to create an object
function createStudent(name, rollNo, marks){
    var student = {};
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}
var student1 = createStudent("abc", 101, 90);
var student2 = createStudent("xyz", 102, 95);
console.log(student1);
console.log(student2);